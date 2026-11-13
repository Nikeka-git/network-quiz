"use strict";

const variants = window.QUIZ_VARIANTS ?? [];
const storageKey = "network-quiz-photo-progress-v2";
const previousStorageKey = "network-quiz-photo-verified-progress-v1";
const practice = document.querySelector("#practice");
const trainMode = document.querySelector("#train-mode");
const errorsMode = document.querySelector("#errors-mode");
const progress = readProgress();
const state = {
  variant: variants[0],
  mode: "train",
  index: 0,
  queue: [],
  checkedInRound: new Set(),
  showAttempt: true,
};

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && typeof saved === "object" && !Array.isArray(saved)) return saved;
    const previous = JSON.parse(localStorage.getItem(previousStorageKey));
    const compatibleKeys = window.QUIZ_PREVIOUS_PROGRESS_IDS ?? [];
    return Object.fromEntries(
      compatibleKeys.filter((key) => previous?.[key]).map((key) => [key, previous[key]]),
    );
  } catch {
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    document.querySelector("#storage-note").textContent = "Хранилище браузера недоступно. Прогресс сохранится до закрытия страницы.";
  }
}

function create(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function makeButton(className, label, onClick) {
  const button = create("button", className, label);
  button.type = "button";
  if (onClick) button.addEventListener("click", onClick);
  return button;
}

function plural(number, forms) {
  const last = number % 10;
  const lastTwo = number % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return forms[2];
  if (last === 1) return forms[0];
  return last >= 2 && last <= 4 ? forms[1] : forms[2];
}

function updateQuizStats() {
  const total = variants.reduce((sum, variant) => sum + variant.questions.length, 0);
  const variantLabel = plural(variants.length, ["вариант", "варианта", "вариантов"]);
  const questionLabel = plural(total, ["вопрос", "вопроса", "вопросов"]);
  document.querySelector("#quiz-stats").textContent =
    `${variants.length} ${variantLabel.toUpperCase()} · ${total} ${questionLabel.toUpperCase()}`;
}

function recordKey(variant, question) {
  return `${variant.id}:${question.id}`;
}

function getRecord(variant, question) {
  return progress[recordKey(variant, question)];
}

function summarize(variant) {
  const summary = { graded: 0, answered: 0, correct: 0, wrong: 0, reviewed: 0 };
  for (const question of variant.questions) {
    const record = getRecord(variant, question);
    if (!question.answer.length) {
      if (record?.status === "reviewed") summary.reviewed++;
      continue;
    }
    summary.graded++;
    if (record?.status === "correct" || record?.status === "wrong") {
      summary[record.status]++;
      summary.answered++;
    }
  }
  return summary;
}

function setMode(mode, focus = true) {
  state.mode = mode;
  state.showAttempt = mode === "train";
  if (mode === "errors") {
    state.checkedInRound.clear();
    state.queue = state.variant.questions.filter(
      (question) => getRecord(state.variant, question)?.status === "wrong",
    );
    state.index = 0;
  } else {
    const next = state.variant.questions.findIndex((question) => !getRecord(state.variant, question));
    state.index = next === -1 ? 0 : next;
  }
  render(focus);
}

function jumpTo(index, focus = true) {
  state.index = index;
  state.showAttempt = state.mode === "train" || state.checkedInRound.has(state.queue[index]?.id);
  render(focus);
}

function updateSidebar() {
  const variantList = document.querySelector("#variants");
  variantList.replaceChildren(...variants.map((variant) => {
    const active = variant === state.variant;
    const count = variant.questions.length;
    const summary = summarize(variant);
    const button = makeButton("variant-button", undefined, () => {
      if (state.variant === variant) return;
      state.variant = variant;
      setMode(state.mode);
    });
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
    const copy = create("span", "variant-copy");
    copy.append(create("strong", "", `Вариант ${variant.id}`), create("small", "", `${count} ${plural(count, ["вопрос", "вопроса", "вопросов"])}`));
    button.append(
      create("span", "variant-index", String(variant.id).padStart(2, "0")),
      copy,
      create("span", "variant-count", `${summary.answered + summary.reviewed}/${count}`),
    );
    return button;
  }));

  const summary = summarize(state.variant);
  const current = activeQuestions()[state.index];
  const count = state.variant.questions.length;
  const completed = summary.answered + summary.reviewed;
  const percent = Math.round((completed / count) * 100);
  const progressLabel = `${completed} из ${count} пройдено · ${summary.correct} верно`;
  document.querySelector("#progress-fill").style.width = `${percent}%`;
  document.querySelector("#progress-track").setAttribute("aria-valuenow", String(percent));
  document.querySelector("#progress-track").setAttribute("aria-valuetext", progressLabel);
  document.querySelector("#progress-label").textContent = progressLabel;

  const statusLabels = { correct: "верно", wrong: "ошибка", reviewed: "разобран" };
  document.querySelector("#question-grid").replaceChildren(...state.variant.questions.map((question, index) => {
    const record = getRecord(state.variant, question);
    const button = makeButton("question-dot", String(question.id), () => {
      state.mode = "train";
      jumpTo(index);
    });
    const status = statusLabels[record?.status] ?? (question.answer.length ? "без ответа" : "для разбора");
    button.setAttribute("aria-label", `Вопрос ${question.id}, ${status}`);
    button.title = status;
    if (record?.status in statusLabels) button.classList.add(`is-${record.status}`);
    if (question === current) {
      button.classList.add("is-current");
      button.setAttribute("aria-current", "step");
    }
    return button;
  }));
}

function activeQuestions() {
  return state.mode === "errors" ? state.queue : state.variant.questions;
}

function render(focus = false) {
  const questions = activeQuestions();
  const question = questions[state.index];
  const summary = summarize(state.variant);
  updateSidebar();
  trainMode.setAttribute("aria-pressed", String(state.mode === "train"));
  errorsMode.setAttribute("aria-pressed", String(state.mode === "errors"));
  document.querySelector("#error-count").textContent = summary.wrong ? String(summary.wrong) : "";
  practice.replaceChildren(question ? renderQuestion(question, questions.length) : renderSummary(summary));
  if (focus) {
    practice.querySelector("h2").focus({ preventScroll: true });
    practice.scrollIntoView({ block: "nearest" });
  }
}

function renderQuestion(question, total) {
  const variant = state.variant;
  const isReference = question.answer.length === 0;
  const record = state.showAttempt ? getRecord(variant, question) : undefined;
  const locked = record?.status === "correct" || record?.status === "wrong";
  const card = create("section", "panel question-card");
  card.setAttribute("aria-labelledby", "question-title");
  const meta = create("div", "question-meta");
  const numberInVariant = state.index + 1;
  const position = state.mode === "errors"
    ? `Разбор ${numberInVariant} из ${total} · Вопрос ${question.id}`
    : `Вопрос ${numberInVariant} из ${total}`;
  meta.append(create("span", "question-position", position));
  if (state.mode === "train" && question.id !== numberInVariant) {
    meta.append(create("span", "topic-chip", `№ ${question.id} в оригинале`));
  }
  if (question.source === "reconstructed") {
    meta.append(create("span", "topic-chip source-chip", "Восстановлено по контексту"));
  }
  if (question.topic) meta.append(create("span", "topic-chip", question.topic));
  const title = create("h2", "question-title", question.prompt);
  title.id = "question-title";
  title.lang = "en";
  title.tabIndex = -1;

  const instruction = isReference
    ? "Вопрос для разбора"
    : question.answer.length === 1
      ? "Выбери один ответ"
      : `Выбери ${question.answer.length} ответа`;
  card.append(meta, title, create("p", "question-instruction", instruction));

  const form = create("form");
  const choices = create("div", "choices");
  choices.setAttribute("role", "group");
  choices.setAttribute("aria-label", "Варианты ответа");
  for (const choice of question.choices) {
    const text = create("span", "choice-text", choice.text);
    text.lang = "en";
    if (isReference) {
      const row = create("div", "choice is-reference");
      row.append(create("span", "choice-key", choice.id), text);
      choices.append(row);
      continue;
    }

    const label = create("label", "choice");
    const input = create("input", "sr-only");
    input.type = question.answer.length === 1 ? "radio" : "checkbox";
    input.name = "choice";
    input.value = choice.id;
    input.disabled = locked;
    input.checked = locked && record.picked.includes(choice.id);
    if (locked && question.answer.includes(choice.id)) {
      label.classList.add("is-correct");
    } else if (input.checked) {
      label.classList.add("is-wrong");
    }
    label.append(input, create("span", "choice-key", choice.id), text);
    choices.append(label);
  }
  if (choices.childElementCount) form.append(choices);

  if (isReference || locked) {
    const outcome = locked ? record.status : "";
    const title = isReference ? "Разбор вопроса" : outcome === "correct" ? "Правильно" : "Есть ошибка";
    const feedback = create("div", `feedback${outcome ? ` is-${outcome}` : ""}`);
    const feedbackTitle = create("h3", "", title);
    feedbackTitle.tabIndex = -1;
    feedback.append(feedbackTitle);
    if (locked) {
      const correct = create("p", "answer-key");
      correct.append(create("strong", "", `Ответ: ${question.answer.join(", ")}`));
      feedback.append(correct);
    }
    if (question.sourceAnswer) {
      const sourceAnswer = create("p", "answer-key", question.sourceAnswer);
      feedback.append(sourceAnswer);
    }
    if (question.explanation) feedback.append(create("p", "", question.explanation));
    if (question.note) feedback.append(create("p", "source-note", question.note));
    form.append(feedback);
  }

  const actions = create("div", "card-actions");
  const back = makeButton("button button-secondary", "← Назад", () => jumpTo(state.index - 1));
  back.disabled = state.index === 0;
  const buttons = create("div", "action-buttons");
  actions.append(back, buttons);
  if (locked || isReference) {
    if (locked && state.mode === "train") {
      buttons.append(makeButton("button button-secondary", "Ответить заново", () => {
        state.showAttempt = false;
        render();
        practice.querySelector("input").focus();
      }));
    }
    const next = state.index + 1 === total ? "К результатам" : "Дальше →";
    buttons.append(makeButton("button button-primary", next, () => {
      if (isReference) {
        progress[recordKey(variant, question)] = { status: "reviewed" };
        saveProgress();
      }
      jumpTo(state.index + 1);
    }));
  } else {
    const check = create("button", "button button-primary", "Проверить ответ");
    check.type = "submit";
    check.disabled = true;
    buttons.append(check);
    form.addEventListener("change", () => {
      for (const input of form.querySelectorAll("input")) {
        input.closest(".choice").classList.toggle("is-selected", input.checked);
      }
      check.disabled = form.querySelectorAll("input:checked").length !== question.answer.length;
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const picked = [...form.querySelectorAll("input:checked")].map((input) => input.value);
      if (picked.length !== question.answer.length) return;
      const correct = question.answer.every((id) => picked.includes(id));
      progress[recordKey(variant, question)] = { status: correct ? "correct" : "wrong", picked };
      if (state.mode === "errors") state.checkedInRound.add(question.id);
      saveProgress();
      state.showAttempt = true;
      render();
      practice.querySelector(".feedback h3").focus();
      document.querySelector("#live-status").textContent = correct ? "Правильно" : "Есть ошибка";
    });
  }
  form.append(actions);
  card.append(form);
  return card;
}

function renderSummary(summary) {
  const card = create("section", "panel empty-card");
  const errors = state.mode === "errors";
  const unseen = state.variant.questions.length - summary.answered - summary.reviewed;
  const heading = errors
    ? summary.wrong ? "Разбор завершён" : "Ошибок для повтора нет"
    : "Результаты варианта";
  const title = create("h2", "", heading);
  title.tabIndex = -1;
  const description = errors
    ? summary.wrong
      ? `Осталось повторить: ${summary.wrong} ${plural(summary.wrong, ["вопрос", "вопроса", "вопросов"])}.`
      : summary.answered
        ? "Все проверенные ответы верны."
        : "Ответь на вопросы в режиме тренировки, чтобы увидеть здесь свои ошибки."
    : `Верных ответов: ${summary.correct} из ${summary.graded}. Разобрано без оценки: ${summary.reviewed}. Осталось пройти: ${unseen}.`;
  card.append(title, create("p", "", description));

  const buttons = create("div", "action-buttons");
  if (summary.wrong) {
    buttons.append(makeButton("button button-primary", "Повторить ошибки", () => setMode("errors")));
  }
  if (errors || unseen) {
    buttons.append(makeButton(`button ${summary.wrong ? "button-secondary" : "button-primary"}`, "К тренировке", () => setMode("train")));
  } else {
    const next = variants[variants.indexOf(state.variant) + 1];
    buttons.append(makeButton(`button ${summary.wrong ? "button-secondary" : "button-primary"}`,
      next ? "Следующий вариант →" : "К первому варианту", () => {
        state.variant = next ?? variants[0];
        setMode("train");
      }));
  }
  card.append(buttons);
  return card;
}

if (variants.length) {
  updateQuizStats();
  if (window.matchMedia("(max-width: 720px)").matches) {
    document.querySelector(".question-picker").open = false;
  }
  trainMode.addEventListener("click", () => {
    if (state.mode !== "train") setMode("train");
  });
  errorsMode.addEventListener("click", () => {
    if (state.mode !== "errors") setMode("errors");
  });
  setMode("train", false);
} else {
  practice.append(create("p", "panel empty-card", "Не удалось загрузить вопросы. Обнови страницу."));
}
