window.QUIZ_VARIANTS = [
  {
    "id": 1,
    "title": "Variant 1",
    "questions": [
      {
        "id": 1,
        "topic": "IP",
        "prompt": "Connectionless characteristic of IP?",
        "choices": [
          {
            "id": "A",
            "text": "dedicated physical circuit"
          },
          {
            "id": "B",
            "text": "IP sends packets without establishing an end-to-end connection"
          },
          {
            "id": "C",
            "text": "guaranteed packet order"
          },
          {
            "id": "D",
            "text": "automatic retransmission"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "IP не устанавливает соединение перед отправкой пакетов и не гарантирует порядок/доставку."
      },
      {
        "id": 2,
        "topic": "ARP",
        "prompt": "Primary function of ARP in IPv4?",
        "choices": [
          {
            "id": "A",
            "text": "DNS name resolution"
          },
          {
            "id": "B",
            "text": "DHCP configuration"
          },
          {
            "id": "C",
            "text": "ARP maps an IPv4 address to a MAC address on the local link"
          },
          {
            "id": "D",
            "text": "NAT address translation"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "ARP сопоставляет IPv4-адрес с MAC-адресом устройства в локальном сегменте."
      },
      {
        "id": 3,
        "topic": "NAT",
        "prompt": "Primary purpose of NAT in IPv4?",
        "choices": [
          {
            "id": "A",
            "text": "traffic encryption"
          },
          {
            "id": "B",
            "text": "NAT translates private addresses to enable use of public IP addresses"
          },
          {
            "id": "C",
            "text": "DNS replacement"
          },
          {
            "id": "D",
            "text": "subnet-mask calculation"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "NAT позволяет множеству частных адресов использовать один или несколько публичных адресов."
      },
      {
        "id": 4,
        "topic": "Подсети IPv4",
        "prompt": "How does a subnet mask distinguish network and host?",
        "choices": [
          {
            "id": "A",
            "text": "Mask bits set to 1 identify the network; bits set to 0 identify hosts"
          },
          {
            "id": "B",
            "text": "reversed bit meanings"
          },
          {
            "id": "C",
            "text": "fixed two-octet network"
          },
          {
            "id": "D",
            "text": "alternating mask bits"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Единицы маски обозначают биты сети, нули — биты узла."
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "IPv6 Unique Local Address prefix?",
        "choices": [
          {
            "id": "A",
            "text": "FC00::/7 (Unique Local Addresses)"
          },
          {
            "id": "B",
            "text": "FE80::/10 link-local"
          },
          {
            "id": "C",
            "text": "2000::/3 global unicast"
          },
          {
            "id": "D",
            "text": "FF00::/8 multicast"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "ULA определены префиксом FC00::/7; обычно локально генерируются адреса FD00::/8."
      },
      {
        "id": 6,
        "topic": "ICMPv6",
        "prompt": "ICMPv6 message to discover a neighbor’s MAC?",
        "choices": [
          {
            "id": "A",
            "text": "Router Advertisement"
          },
          {
            "id": "B",
            "text": "Neighbor Solicitation (NS)"
          },
          {
            "id": "C",
            "text": "Router Solicitation"
          },
          {
            "id": "D",
            "text": "Redirect"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "Neighbor Solicitation запрашивает канальный адрес соседа; ответ приходит как Neighbor Advertisement."
      },
      {
        "id": 7,
        "topic": "TCP",
        "prompt": "Reliable ordered connection-oriented transport?",
        "choices": [
          {
            "id": "A",
            "text": "UDP"
          },
          {
            "id": "B",
            "text": "ICMP"
          },
          {
            "id": "C",
            "text": "IP"
          },
          {
            "id": "D",
            "text": "TCP (Transmission Control Protocol)"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "TCP использует соединение, подтверждения, повторные передачи и упорядочивание."
      },
      {
        "id": 8,
        "topic": "TCP",
        "prompt": "TCP three-way handshake sequence?",
        "choices": [
          {
            "id": "B",
            "text": "SYN → SYN-ACK → ACK"
          }
        ],
        "answer": [],
        "explanation": "Клиент инициирует соединение, сервер подтверждает и отвечает SYN, клиент завершает подтверждением.",
        "note": "В документе указана верная последовательность. Текст вариантов A, C и D отсутствует.",
        "sourceAnswer": "B — SYN → SYN-ACK → ACK"
      },
      {
        "id": 9,
        "topic": "DNS",
        "prompt": "DNS standard query port and transport?",
        "choices": [
          {
            "id": "A",
            "text": "UDP port 53 for standard DNS queries"
          },
          {
            "id": "B",
            "text": "TCP/80 HTTP"
          },
          {
            "id": "C",
            "text": "TCP/443 HTTPS"
          },
          {
            "id": "D",
            "text": "UDP/67 DHCP"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Типичные DNS-запросы идут по UDP/53; TCP/53 также применяется в определённых случаях."
      },
      {
        "id": 10,
        "topic": "HTTP",
        "prompt": "HTTP status when resource not found?",
        "choices": [
          {
            "id": "A",
            "text": "200 OK"
          },
          {
            "id": "B",
            "text": "301 Moved Permanently"
          },
          {
            "id": "C",
            "text": "404 Not Found"
          },
          {
            "id": "D",
            "text": "500 Internal Server Error"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "Код 404 означает отсутствие запрошенного ресурса; это категория 4xx (ошибка клиента)."
      },
      {
        "id": 11,
        "topic": "IPv4 и IPv6",
        "prompt": "TWO IPv4 fields absent from IPv6 fixed header?",
        "choices": [
          {
            "id": "A",
            "text": "Source Address"
          },
          {
            "id": "B",
            "text": "Internet Header Length (IHL)"
          },
          {
            "id": "C",
            "text": "Header Checksum"
          },
          {
            "id": "D",
            "text": "Destination Address"
          },
          {
            "id": "E",
            "text": "Version"
          }
        ],
        "answer": [
          "B",
          "C"
        ],
        "explanation": "Фиксированный IPv6-заголовок имеет постоянную длину 40 байт и не содержит контрольную сумму заголовка."
      },
      {
        "id": 12,
        "topic": "IPv4",
        "prompt": "TWO private IPv4 ranges (RFC 1918)?",
        "choices": [
          {
            "id": "A",
            "text": "10.0.0.0/8"
          },
          {
            "id": "B",
            "text": "11.0.0.0/8"
          },
          {
            "id": "C",
            "text": "224.0.0.0/4"
          },
          {
            "id": "D",
            "text": "192.168.0.0/16"
          },
          {
            "id": "E",
            "text": "172.15.0.0/12"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": "Оба диапазона частные. Третий диапазон RFC 1918 — 172.16.0.0/12, а не 172.15.0.0/12."
      },
      {
        "id": 13,
        "topic": "IPv4 и IPv6",
        "prompt": "TWO IPv4/IPv6 coexistence strategies?",
        "choices": [
          {
            "id": "A",
            "text": "Subnet Slicing"
          },
          {
            "id": "B",
            "text": "Tunneling"
          },
          {
            "id": "C",
            "text": "MAC Encapsulation"
          },
          {
            "id": "D",
            "text": "Global Addressing"
          },
          {
            "id": "E",
            "text": "Dual Stack"
          }
        ],
        "answer": [
          "B",
          "E"
        ],
        "explanation": "Dual Stack поддерживает оба стека одновременно; туннелирование переносит один протокол внутри другого."
      },
      {
        "id": 14,
        "topic": "IPv6",
        "prompt": "TWO dynamic IPv6 address configuration mechanisms?",
        "choices": [
          {
            "id": "A",
            "text": "Router Solicitation alone"
          },
          {
            "id": "B",
            "text": "Stateful DHCPv6"
          },
          {
            "id": "C",
            "text": "static EUI-64 assignment"
          },
          {
            "id": "D",
            "text": "SLAAC"
          },
          {
            "id": "E",
            "text": "NAT Overload"
          }
        ],
        "answer": [
          "B",
          "D"
        ],
        "explanation": "DHCPv6 выдаёт адреса с сервера, SLAAC позволяет узлу самостоятельно сформировать адрес по объявлениям маршрутизатора."
      },
      {
        "id": 15,
        "topic": "Транспортный уровень",
        "prompt": "TWO transport header fields for multiplexing applications?",
        "choices": [
          {
            "id": "A",
            "text": "Source Port"
          },
          {
            "id": "B",
            "text": "Destination Port"
          },
          {
            "id": "C",
            "text": "Sequence Number"
          },
          {
            "id": "D",
            "text": "Window Size"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Номера портов определяют приложения отправителя и получателя."
      },
      {
        "id": 16,
        "topic": "IPv6",
        "prompt": "TWO IPv6 address characteristics?",
        "choices": [
          {
            "id": "A",
            "text": "IPv6 address types are identified by prefixes"
          },
          {
            "id": "B",
            "text": "Anycast can reach a nearby group member"
          },
          {
            "id": "C",
            "text": "32-bit addressing"
          },
          {
            "id": "D",
            "text": "anycast prohibited"
          },
          {
            "id": "E",
            "text": "multicast-only communication"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "IPv6 использует 128-битные адреса и поддерживает anycast: пакет доставляется одному из интерфейсов с общим адресом (обычно ближайшему по маршрутизации).",
        "note": "Формулировка частично неясна."
      },
      {
        "id": 17,
        "topic": "TCP",
        "prompt": "TWO TCP flow-control mechanisms?",
        "choices": [
          {
            "id": "A",
            "text": "TCP Window Size"
          },
          {
            "id": "B",
            "text": "last-byte sequence number alone"
          },
          {
            "id": "C",
            "text": "Sliding Window"
          },
          {
            "id": "D",
            "text": "ICMP Router Solicitation"
          },
          {
            "id": "E",
            "text": "IP fragmentation"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "Получатель объявляет доступное окно, а отправитель ограничивает объём неподтверждённых данных.",
        "note": "Часть формулировки или вариантов восстановлена по фотографии."
      },
      {
        "id": 18,
        "topic": "Электронная почта",
        "prompt": "TWO email retrieval protocols?",
        "choices": [
          {
            "id": "A",
            "text": "FTP"
          },
          {
            "id": "B",
            "text": "IMAP"
          },
          {
            "id": "C",
            "text": "SMTP"
          },
          {
            "id": "D",
            "text": "POP3"
          },
          {
            "id": "E",
            "text": "SNMP"
          }
        ],
        "answer": [
          "B",
          "D"
        ],
        "explanation": "IMAP и POP3 предназначены для получения почты; SMTP — для отправки и пересылки.",
        "note": "Часть формулировки или вариантов восстановлена по фотографии."
      },
      {
        "id": 19,
        "topic": "DHCP",
        "prompt": "TWO client-broadcast DHCP DORA messages?",
        "choices": [
          {
            "id": "A",
            "text": "DHCP Offer"
          },
          {
            "id": "B",
            "text": "DHCP ACK"
          },
          {
            "id": "C",
            "text": "DHCP Discover"
          },
          {
            "id": "D",
            "text": "DHCP Request"
          },
          {
            "id": "E",
            "text": "DHCP Release"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "Клиент обычно широковещательно отправляет Discover и Request; Offer и ACK отправляет сервер.",
        "note": "Часть формулировки или вариантов восстановлена по фотографии."
      },
      {
        "id": 20,
        "topic": "HTTP и UDP",
        "prompt": "UDP-based protocols / HTTP methods?",
        "choices": [
          {
            "id": "A",
            "text": "HTTPS"
          },
          {
            "id": "B",
            "text": "FTP"
          },
          {
            "id": "C",
            "text": "GET"
          },
          {
            "id": "D",
            "text": "HEAD"
          },
          {
            "id": "E",
            "text": "OPTIONS"
          }
        ],
        "answer": [],
        "explanation": "В распознанных вариантах GET, HEAD и OPTIONS являются методами HTTP, не самостоятельными UDP-протоколами. Нужна чёткая фотография.",
        "note": "По фотографии нельзя установить надёжный ключ. В списке смешаны протоколы и методы HTTP.",
        "sourceAnswer": "Uncertain — no reliable pair can be identified from the photograph"
      },
      {
        "id": 21,
        "topic": "IP",
        "prompt": "THREE primary IP characteristics?",
        "choices": [
          {
            "id": "A",
            "text": "Connectionless operation"
          },
          {
            "id": "B",
            "text": "automatic transport-segment retransmission (not an IP guarantee)"
          },
          {
            "id": "C",
            "text": "Best-effort delivery"
          }
        ],
        "answer": [],
        "explanation": "IP является connectionless и предоставляет best-effort delivery; автоматическая повторная передача потерянных сегментов — не функция IP.",
        "note": "В документе подтверждены два ответа из трёх. Остальные варианты обрезаны.",
        "sourceAnswer": "A — Connectionless operation; C — Best-effort delivery; third answer unavailable"
      }
    ]
  },
  {
    "id": 2,
    "title": "Variant 2",
    "questions": [
      {
        "id": 1,
        "topic": "Маршрутизация",
        "prompt": "Role of Default Gateway in local routing table?",
        "choices": [
          {
            "id": "A",
            "text": "loopback processing"
          },
          {
            "id": "B",
            "text": "Gateway router interface forwards traffic to remote networks"
          },
          {
            "id": "C",
            "text": "DNS/MAC resolution"
          },
          {
            "id": "D",
            "text": "automatic IP assignment"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "Адрес шлюза используется для передачи пакетов в сети, не доступные напрямую."
      },
      {
        "id": 2,
        "topic": "IPv6",
        "prompt": "IPv6 equivalent of IPv4 TTL?",
        "choices": [
          {
            "id": "A",
            "text": "Flow Label"
          },
          {
            "id": "B",
            "text": "Traffic Class"
          },
          {
            "id": "C",
            "text": "Hop Limit"
          },
          {
            "id": "D",
            "text": "Next Header"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "Каждый маршрутизатор уменьшает Hop Limit; при достижении нуля пакет отбрасывается."
      },
      {
        "id": 3,
        "topic": "Подсети IPv4",
        "prompt": "Network ID of 192.168.1.130/26?",
        "choices": [
          {
            "id": "A",
            "text": "192.168.1.128"
          },
          {
            "id": "B",
            "text": "192.168.1.0"
          },
          {
            "id": "C",
            "text": "192.168.1.64"
          },
          {
            "id": "D",
            "text": "192.168.1.192"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "/26 даёт блоки по 64 адреса: 0–63, 64–127, 128–191, 192–255. Адрес .130 попадает в сеть .128."
      },
      {
        "id": 4,
        "topic": "Подсети IPv4",
        "prompt": "Directed broadcast for 192.168.10.0/24?",
        "choices": [
          {
            "id": "A",
            "text": "192.168.10.0"
          },
          {
            "id": "B",
            "text": "192.168.10.1"
          },
          {
            "id": "C",
            "text": "192.168.10.254"
          },
          {
            "id": "D",
            "text": "192.168.10.255"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "В /24 последние 8 бит — хостовая часть; все единицы в ней дают .255."
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "IPv6 rule for compressing leading zeros?",
        "choices": [
          {
            "id": "A",
            "text": "Leading zeros in any IPv6 hextet may be omitted"
          },
          {
            "id": "B",
            "text": "trailing zeros"
          },
          {
            "id": "C",
            "text": "replacement with letters"
          },
          {
            "id": "D",
            "text": "only first two hextets"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Начальные нули внутри каждого hextet можно опустить: 01ab → 1ab."
      },
      {
        "id": 6,
        "topic": "ICMPv6",
        "prompt": "Device sending ICMPv6 Router Advertisement?",
        "choices": [
          {
            "id": "A",
            "text": "DNS server"
          },
          {
            "id": "B",
            "text": "unmanaged Layer 2 switch"
          },
          {
            "id": "C",
            "text": "SLAAC client"
          },
          {
            "id": "D",
            "text": "An IPv6-enabled router"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "Маршрутизатор рассылает RA с параметрами префикса и автоконфигурации."
      },
      {
        "id": 7,
        "topic": "UDP",
        "prompt": "Fixed UDP header size?",
        "choices": [
          {
            "id": "A",
            "text": "8 bytes"
          },
          {
            "id": "B",
            "text": "20 bytes"
          },
          {
            "id": "C",
            "text": "32 bytes"
          },
          {
            "id": "D",
            "text": "64 bytes"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "UDP содержит четыре поля по 16 бит: source port, destination port, length и checksum."
      },
      {
        "id": 8,
        "topic": "Сокеты",
        "prompt": "What uniquely defines a socket pair?",
        "choices": [
          {
            "id": "A",
            "text": "IP and MAC only"
          },
          {
            "id": "B",
            "text": "subnet mask and gateway"
          },
          {
            "id": "C",
            "text": "Source IP, Source Port, Destination IP, Destination Port"
          },
          {
            "id": "D",
            "text": "hostname and MAC"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "Для TCP/UDP соединения используются IP и порт обоих концов; протокол также учитывается при различении потоков."
      },
      {
        "id": 9,
        "topic": "FTP",
        "prompt": "FTP control TCP port?",
        "choices": [
          {
            "id": "A",
            "text": "port 20"
          },
          {
            "id": "B",
            "text": "TCP port 21"
          },
          {
            "id": "C",
            "text": "port 22"
          },
          {
            "id": "D",
            "text": "port 25"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "FTP управляет сессией через TCP/21; данные передаются отдельно."
      },
      {
        "id": 10,
        "topic": "DHCP",
        "prompt": "Purpose of DHCP ACK?",
        "choices": [
          {
            "id": "A",
            "text": "lease termination"
          },
          {
            "id": "B",
            "text": "MAC lookup"
          },
          {
            "id": "C",
            "text": "new Discover request"
          },
          {
            "id": "D",
            "text": "DHCP ACK confirms the assigned lease and configuration"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "DHCP ACK подтверждает выделение адреса и параметры аренды."
      },
      {
        "id": 11,
        "topic": "Маршрутизация",
        "prompt": "TWO characteristics of dynamic routing?",
        "choices": [
          {
            "id": "A",
            "text": "automatic route discovery and table updates"
          },
          {
            "id": "B",
            "text": "recalculation after failures"
          },
          {
            "id": "C",
            "text": "mandatory manual reconfiguration"
          },
          {
            "id": "D",
            "text": "zero resource consumption"
          },
          {
            "id": "E",
            "text": "Layer 1 only"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Протоколы динамически изучают маршруты и перестраивают их при изменении топологии."
      },
      {
        "id": 12,
        "topic": "Подсети IPv4",
        "prompt": "TWO benefits of VLSM?",
        "choices": [
          {
            "id": "A",
            "text": "equal subnet sizes"
          },
          {
            "id": "B",
            "text": "IPv4-to-IPv6 conversion"
          },
          {
            "id": "C",
            "text": "elimination of routing tables"
          },
          {
            "id": "D",
            "text": "less wasted IPv4 address space"
          },
          {
            "id": "E",
            "text": "different subnet mask lengths"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "Разные длины масок позволяют подбирать размер подсети под число узлов и экономить IPv4-адреса."
      },
      {
        "id": 13,
        "topic": "ICMPv6",
        "prompt": "TWO ICMPv6 messages replacing ARP?",
        "choices": [
          {
            "id": "A",
            "text": "Neighbor Solicitation"
          },
          {
            "id": "B",
            "text": "Echo Request"
          },
          {
            "id": "C",
            "text": "Router Solicitation"
          },
          {
            "id": "D",
            "text": "Neighbor Advertisement"
          },
          {
            "id": "E",
            "text": "Redirect"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": "Neighbor Solicitation и Neighbor Advertisement обеспечивают обнаружение канальных адресов соседей."
      },
      {
        "id": 14,
        "topic": "Диагностика сети",
        "prompt": "TWO ICMP-based troubleshooting utilities?",
        "choices": [
          {
            "id": "A",
            "text": "Nslookup"
          },
          {
            "id": "B",
            "text": "Netstat"
          },
          {
            "id": "C",
            "text": "Ping"
          },
          {
            "id": "D",
            "text": "Traceroute (tracert)"
          },
          {
            "id": "E",
            "text": "Ipconfig"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "Ping использует ICMP Echo; traceroute выявляет промежуточные узлы по TTL/Hop Limit и ответам об истечении времени (реализации различаются)."
      },
      {
        "id": 15,
        "topic": "TCP",
        "prompt": "TWO TCP congestion control algorithms?",
        "choices": [
          {
            "id": "A",
            "text": "Slow Start"
          },
          {
            "id": "B",
            "text": "Reverse Path Forwarding"
          },
          {
            "id": "C",
            "text": "Static Window Freeze"
          },
          {
            "id": "D",
            "text": "Priority Queue Drop"
          },
          {
            "id": "E",
            "text": "Congestion Avoidance"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": "Slow Start увеличивает congestion window быстро, Congestion Avoidance — осторожнее для снижения перегрузки."
      },
      {
        "id": 16,
        "topic": "TCP",
        "prompt": "TWO flags in graceful TCP four-way termination?",
        "choices": [
          {
            "id": "A",
            "text": "RST"
          },
          {
            "id": "B",
            "text": "URG"
          },
          {
            "id": "C",
            "text": "SYN"
          },
          {
            "id": "D",
            "text": "FIN"
          },
          {
            "id": "E",
            "text": "ACK"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "FIN завершает передачу в направлении, ACK подтверждает получение; закрытие обычно требует обмена с обеих сторон."
      },
      {
        "id": 17,
        "topic": "HTTPS",
        "prompt": "TWO HTTPS differences from HTTP?",
        "choices": [
          {
            "id": "A",
            "text": "HTTPS encrypts data using TLS"
          },
          {
            "id": "B",
            "text": "UDP-only transport"
          },
          {
            "id": "C",
            "text": "HTTPS typically uses TCP port 443"
          },
          {
            "id": "D",
            "text": "network-layer image compression"
          },
          {
            "id": "E",
            "text": "no DNS required"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "HTTPS шифрует HTTP-трафик с помощью TLS; традиционно использует порт 443, тогда как HTTP — 80. Уточнение: HTTP/3 использует QUIC/UDP 443."
      },
      {
        "id": 18,
        "topic": "DNS",
        "prompt": "TWO DNS query types?",
        "choices": [
          {
            "id": "A",
            "text": "Recursive Query"
          },
          {
            "id": "B",
            "text": "Iterative Query"
          },
          {
            "id": "C",
            "text": "Sequential Broadcast"
          },
          {
            "id": "D",
            "text": "SLAAC"
          },
          {
            "id": "E",
            "text": "Static ARP"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Рекурсивный запрос требует итогового ответа от резолвера, итеративный возвращает ответ либо направление к следующему серверу."
      },
      {
        "id": 19,
        "topic": "FTP",
        "prompt": "TWO FTP connection modes?",
        "choices": [
          {
            "id": "A",
            "text": "Broadcast Peer"
          },
          {
            "id": "B",
            "text": "Encapsulated Tunnel"
          },
          {
            "id": "C",
            "text": "Stateless Mode"
          },
          {
            "id": "D",
            "text": "Active Mode"
          },
          {
            "id": "E",
            "text": "Passive Mode"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "В active сервер инициирует соединение данных к клиенту, в passive клиент подключается к указанному сервером порту."
      },
      {
        "id": 20,
        "topic": "Порты",
        "prompt": "TWO properties of IANA registered ports?",
        "choices": [
          {
            "id": "A",
            "text": "ephemeral-only ports"
          },
          {
            "id": "B",
            "text": "ports 0–1023"
          },
          {
            "id": "C",
            "text": "ports 1024–49151"
          },
          {
            "id": "D",
            "text": "IANA registration for applications/vendors"
          },
          {
            "id": "E",
            "text": "physical-layer-only use"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "Registered ports занимают 1024–49151 и регистрируются для сервисов и приложений."
      },
      {
        "id": 21,
        "topic": "Маршрутизация",
        "prompt": "THREE host routing table entry types?",
        "choices": [
          {
            "id": "A",
            "text": "Directly connected routes"
          },
          {
            "id": "B",
            "text": "Remote routes"
          },
          {
            "id": "C",
            "text": "Default route"
          },
          {
            "id": "D",
            "text": "global MAC mappings"
          },
          {
            "id": "E",
            "text": "SSH passwords"
          },
          {
            "id": "F",
            "text": "DHCP pool ranges"
          }
        ],
        "answer": [
          "A",
          "B",
          "C"
        ],
        "explanation": "Таблица маршрутизации может содержать непосредственно подключённые сети, удалённые маршруты и маршрут по умолчанию."
      },
      {
        "id": 22,
        "topic": "Подсети IPv4",
        "prompt": "THREE benefits of IPv4 subnetting?",
        "choices": [
          {
            "id": "A",
            "text": "automatic IPv4-to-IPv6 conversion"
          },
          {
            "id": "B",
            "text": "removal of transport-layer ports"
          }
        ],
        "answer": [],
        "explanation": "Типичные преимущества: уменьшение broadcast-доменов, рациональное распределение адресов, сегментация и упрощение администрирования. Буквы выбрать нельзя.",
        "note": "Видны только варианты A и B. Ключ из трёх ответов восстановить нельзя.",
        "sourceAnswer": "Uncertain — full set of three answers is not visible"
      }
    ]
  },
  {
    "id": 3,
    "title": "Variant 3",
    "questions": [
      {
        "id": 1,
        "topic": "Модель OSI",
        "prompt": "PDU at the Network Layer (Layer 3)?",
        "choices": [
          {
            "id": "A",
            "text": "Frame"
          },
          {
            "id": "B",
            "text": "Packet"
          },
          {
            "id": "C",
            "text": "Segment"
          },
          {
            "id": "D",
            "text": "Bit stream"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "На сетевом уровне единица данных называется пакетом; кадр относится к канальному, сегмент — к TCP."
      },
      {
        "id": 2,
        "topic": "IPv6",
        "prompt": "Total bit length of an IPv6 address?",
        "choices": [
          {
            "id": "A",
            "text": "32 bits"
          },
          {
            "id": "B",
            "text": "64 bits"
          },
          {
            "id": "C",
            "text": "128 bits"
          },
          {
            "id": "D",
            "text": "256 bits"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "IPv6-адрес состоит из 128 бит, в отличие от 32-битного IPv4."
      },
      {
        "id": 3,
        "topic": "Подсети IPv4",
        "prompt": "Usable host addresses in IPv4 /28 (255.255.255.240)?",
        "choices": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "62"
          },
          {
            "id": "C",
            "text": "30"
          },
          {
            "id": "D",
            "text": "14 usable hosts"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "Остаются 4 бита узла: 2⁴ = 16 адресов, минус адрес сети и broadcast = 14."
      },
      {
        "id": 4,
        "topic": "IPv4",
        "prompt": "IPv4 block reserved for loopback diagnostics?",
        "choices": [
          {
            "id": "A",
            "text": "10.0.0.0/8"
          },
          {
            "id": "B",
            "text": "169.254.0.0/16"
          },
          {
            "id": "C",
            "text": "127.0.0.0/8"
          },
          {
            "id": "D",
            "text": "192.0.2.0/24"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "Весь диапазон 127/8 предназначен для loopback; часто используется 127.0.0.1."
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "How many times can :: compression be used in an IPv6 address?",
        "choices": [
          {
            "id": "A",
            "text": "global routing prefix only"
          },
          {
            "id": "B",
            "text": "twice"
          },
          {
            "id": "C",
            "text": "unlimited times"
          },
          {
            "id": "D",
            "text": "Exactly once"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "Двойное двоеточие заменяет одну непрерывную группу нулевых хекстетов; два таких сокращения были бы неоднозначны.",
        "note": "Вариант D означает «не более одного раза». Полную запись можно оставить без сокращения."
      },
      {
        "id": 6,
        "topic": "ICMPv6",
        "prompt": "ICMPv6 message types used by ping?",
        "choices": [
          {
            "id": "A",
            "text": "Echo Request and Echo Reply"
          },
          {
            "id": "B",
            "text": "RS and RA"
          },
          {
            "id": "C",
            "text": "NS and NA"
          },
          {
            "id": "D",
            "text": "Destination Unreachable and Source Quench"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Узел посылает Echo Request и получает Echo Reply для проверки доступности."
      },
      {
        "id": 7,
        "topic": "TCP",
        "prompt": "Where is TCP Maximum Segment Size (MSS) negotiated?",
        "choices": [
          {
            "id": "A",
            "text": "DHCP Request"
          },
          {
            "id": "B",
            "text": "IP Options"
          },
          {
            "id": "C",
            "text": "DNS CNAME"
          },
          {
            "id": "D",
            "text": "TCP Options during the three-way handshake"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "MSS объявляется в TCP SYN-сегментах как опция; определяет максимальный TCP payload в сегменте."
      },
      {
        "id": 8,
        "topic": "Порты",
        "prompt": "Dynamic/Private/Ephemeral port range?",
        "choices": [
          {
            "id": "A",
            "text": "0–1023"
          },
          {
            "id": "B",
            "text": "1024–49151"
          },
          {
            "id": "C",
            "text": "49152–65535"
          },
          {
            "id": "D",
            "text": "65536–1048576"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "Это диапазон динамических/частных портов IANA; ОС может использовать собственный диапазон по умолчанию."
      },
      {
        "id": 9,
        "topic": "Электронная почта",
        "prompt": "Protocol transferring email between mail servers?",
        "choices": [
          {
            "id": "A",
            "text": "POP3"
          },
          {
            "id": "B",
            "text": "IMAP"
          },
          {
            "id": "C",
            "text": "HTTP"
          },
          {
            "id": "D",
            "text": "SMTP"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "SMTP предназначен для передачи почты; POP3 и IMAP — преимущественно для получения/доступа."
      },
      {
        "id": 10,
        "topic": "DNS",
        "prompt": "Function of DNS CNAME record?",
        "choices": [
          {
            "id": "A",
            "text": "reverse IP lookup"
          },
          {
            "id": "B",
            "text": "An alias pointing to a canonical hostname"
          },
          {
            "id": "C",
            "text": "primary authoritative server"
          },
          {
            "id": "D",
            "text": "IPv6 mapping"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "CNAME указывает на другое доменное имя, а не непосредственно на IP-адрес."
      },
      {
        "id": 11,
        "topic": "Маршрутизация",
        "prompt": "TWO characteristics of static routes?",
        "choices": [
          {
            "id": "A",
            "text": "manually configured routes"
          },
          {
            "id": "B",
            "text": "IPv6-only"
          },
          {
            "id": "C",
            "text": "automatic recalculation"
          },
          {
            "id": "D",
            "text": "automated update messages"
          },
          {
            "id": "E",
            "text": "minimal routing-protocol overhead"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": "Статические маршруты задаются администратором и не требуют постоянного обмена обновлениями динамической маршрутизации."
      },
      {
        "id": 12,
        "topic": "IPv4",
        "prompt": "TWO properties of IPv4 multicast address space?",
        "choices": [
          {
            "id": "A",
            "text": "Class D range 224.0.0.0–239.255.255.255"
          },
          {
            "id": "B",
            "text": "delivery to a subscribed group"
          },
          {
            "id": "C",
            "text": "loopback-only"
          },
          {
            "id": "D",
            "text": "broadcast to all devices"
          },
          {
            "id": "E",
            "text": "NAT replacement"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Диапазон 224/4 используется для multicast, когда трафик адресуется группе получателей.",
        "note": "Частично восстановлено."
      },
      {
        "id": 13,
        "topic": "IPv6",
        "prompt": "TWO components of IPv6 SLAAC global unicast address?",
        "choices": [
          {
            "id": "A",
            "text": "IPv4-mapped address"
          },
          {
            "id": "B",
            "text": "DHCP domain name"
          },
          {
            "id": "C",
            "text": "RA-advertised subnet prefix"
          },
          {
            "id": "D",
            "text": "64-bit interface identifier"
          },
          {
            "id": "E",
            "text": "gateway MAC prefix"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "SLAAC использует префикс из Router Advertisement и идентификатор интерфейса (часто 64 бита)."
      },
      {
        "id": 14,
        "topic": "ICMPv6",
        "prompt": "TWO ICMPv6 messages for router discovery?",
        "choices": [
          {
            "id": "A",
            "text": "Neighbor Solicitation"
          },
          {
            "id": "B",
            "text": "Router Advertisement"
          },
          {
            "id": "C",
            "text": "Router Solicitation"
          },
          {
            "id": "D",
            "text": "Neighbor Advertisement"
          },
          {
            "id": "E",
            "text": "Echo Reply"
          }
        ],
        "answer": [
          "B",
          "C"
        ],
        "explanation": "RS запрашивает параметры у маршрутизатора, RA сообщает префиксы и настройки сети."
      },
      {
        "id": 15,
        "topic": "TCP и UDP",
        "prompt": "TWO structural differences of TCP vs UDP headers?",
        "choices": [
          {
            "id": "A",
            "text": "TCP header 20–60 bytes vs UDP 8 bytes"
          },
          {
            "id": "B",
            "text": "UDP sequence field"
          },
          {
            "id": "C",
            "text": "TCP sequence and acknowledgement fields"
          },
          {
            "id": "D",
            "text": "identical header structure"
          },
          {
            "id": "E",
            "text": "UDP Flow Label"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "TCP содержит механизмы надежной передачи и более сложный заголовок; UDP имеет фиксированный заголовок 8 байт.",
        "note": "Частично восстановлено."
      },
      {
        "id": 16,
        "topic": "TCP",
        "prompt": "TWO functions of TCP Acknowledgement Number?",
        "choices": [
          {
            "id": "A",
            "text": "application protocol"
          },
          {
            "id": "B",
            "text": "encryption key"
          },
          {
            "id": "C",
            "text": "Ethernet frame length"
          },
          {
            "id": "D",
            "text": "next expected byte"
          },
          {
            "id": "E",
            "text": "cumulative acknowledgement of earlier bytes"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "ACK сообщает следующий ожидаемый номер байта и тем самым подтверждает получение предыдущих байтов.",
        "note": "Частично восстановлено."
      },
      {
        "id": 17,
        "topic": "DHCP",
        "prompt": "TWO DHCP server messages in DORA?",
        "choices": [
          {
            "id": "A",
            "text": "DHCP Offer"
          },
          {
            "id": "B",
            "text": "DHCP ACK"
          },
          {
            "id": "C",
            "text": "DHCP Discover"
          },
          {
            "id": "D",
            "text": "DHCP Request"
          },
          {
            "id": "E",
            "text": "DHCP Solicit"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "DORA = Discover (клиент), Offer (сервер), Request (клиент), ACK (сервер)."
      },
      {
        "id": 18,
        "topic": "HTTP",
        "prompt": "TWO HTTP methods for manipulating resources?",
        "choices": [
          {
            "id": "A",
            "text": "FORWARD"
          },
          {
            "id": "B",
            "text": "REDUCE"
          },
          {
            "id": "C",
            "text": "GET"
          },
          {
            "id": "D",
            "text": "DELETE"
          },
          {
            "id": "E",
            "text": "SEND"
          }
        ],
        "answer": [],
        "explanation": "DELETE удаляет ресурс. GET предназначен для чтения. Вторую букву нельзя определить по доступному снимку.",
        "note": "Фотография позволяет подтвердить только один из двух ответов.",
        "sourceAnswer": "D — DELETE; second method cannot be verified"
      },
      {
        "id": 19,
        "topic": "Модель OSI",
        "prompt": "TWO OSI Presentation Layer tasks?",
        "choices": [
          {
            "id": "A",
            "text": "physical signaling"
          },
          {
            "id": "B",
            "text": "MAC learning"
          },
          {
            "id": "C",
            "text": "IP routing"
          },
          {
            "id": "D",
            "text": "Data formatting/encoding"
          },
          {
            "id": "E",
            "text": "Compression and encryption/decryption"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "Уровень представления связан с форматом данных, кодированием, сжатием и шифрованием.",
        "note": "Частично восстановлено."
      },
      {
        "id": 20,
        "topic": "TCP",
        "prompt": "TWO benefits of TCP Selective Acknowledgement (SACK)?",
        "choices": [
          {
            "id": "A",
            "text": "acknowledges received noncontiguous blocks"
          },
          {
            "id": "B",
            "text": "TCP-to-UDP conversion"
          },
          {
            "id": "C",
            "text": "physical throughput disablement"
          },
          {
            "id": "D",
            "text": "removal of sequence numbers"
          },
          {
            "id": "E",
            "text": "avoids unnecessary retransmissions"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": "SACK позволяет указать успешно полученные диапазоны данных и точнее повторно передать пропуски.",
        "note": "Частично восстановлено."
      },
      {
        "id": 21,
        "topic": "Маршрутизация",
        "prompt": "THREE router operations for an incoming IP packet?",
        "choices": [
          {
            "id": "A",
            "text": "mandatory source-port modification"
          },
          {
            "id": "B",
            "text": "routing-table lookup"
          },
          {
            "id": "C",
            "text": "next-hop/interface selection"
          },
          {
            "id": "D",
            "text": "TTL/Hop Limit decrement"
          },
          {
            "id": "E",
            "text": "application response for every packet"
          }
        ],
        "answer": [
          "B",
          "C",
          "D"
        ],
        "explanation": "Маршрутизатор определяет путь по таблице, выбирает интерфейс и уменьшает TTL/Hop Limit.",
        "note": "Частично восстановлено."
      }
    ]
  },
  {
    "id": 4,
    "title": "Variant 4",
    "questions": [
      {
        "id": 1,
        "topic": "IP",
        "prompt": "Meaning of IP best-effort delivery?",
        "choices": [
          {
            "id": "A",
            "text": "no packet loss"
          },
          {
            "id": "B",
            "text": "guaranteed order"
          },
          {
            "id": "C",
            "text": "automatic resend"
          },
          {
            "id": "D",
            "text": "guaranteed confidentiality"
          },
          {
            "id": "E",
            "text": "IP forwards packets without guaranteeing delivery"
          }
        ],
        "answer": [
          "E"
        ],
        "explanation": "IP старается доставить пакеты, но не гарантирует их доставку, порядок и повторную передачу."
      },
      {
        "id": 2,
        "topic": "IPv4",
        "prompt": "Function of IPv4 Header Checksum?",
        "choices": [
          {
            "id": "A",
            "text": "Checks the IPv4 header for errors"
          },
          {
            "id": "B",
            "text": "checks application payload"
          },
          {
            "id": "C",
            "text": "encrypts source address"
          },
          {
            "id": "D",
            "text": "calculates Ethernet length"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Контрольная сумма IPv4 проверяет заголовок, а не полезную нагрузку."
      },
      {
        "id": 3,
        "topic": "Подсети IPv4",
        "prompt": "First usable IP in 10.1.1.0/26?",
        "choices": [
          {
            "id": "A",
            "text": "10.1.1.0"
          },
          {
            "id": "B",
            "text": "10.1.1.1"
          },
          {
            "id": "C",
            "text": "10.1.1.2"
          },
          {
            "id": "D",
            "text": "10.1.1.63"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "/26 охватывает 10.1.1.0–10.1.1.63; .0 — сеть, .63 — broadcast."
      },
      {
        "id": 4,
        "topic": "NAT",
        "prompt": "How does PAT/NAT Overload share one public IPv4 address?",
        "choices": [
          {
            "id": "A",
            "text": "public IP for every host"
          },
          {
            "id": "B",
            "text": "conversion into IPv6"
          },
          {
            "id": "C",
            "text": "PAT distinguishes internal flows using translated port numbers"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "PAT различает соединения с помощью портов и таблицы трансляций."
      },
      {
        "id": 5,
        "topic": "IPv4",
        "prompt": "Meaning of /4 in multicast IPv4 prefix?",
        "choices": [
          {
            "id": "A",
            "text": "Four network-prefix bits"
          },
          {
            "id": "B",
            "text": "four host bits"
          },
          {
            "id": "C",
            "text": "sequence numbers"
          },
          {
            "id": "D",
            "text": "four data bytes"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Префикс /4 фиксирует четыре старших бита адреса; IPv4 multicast — 224.0.0.0/4."
      },
      {
        "id": 6,
        "topic": "Диагностика сети",
        "prompt": "How does traceroute discover intermediate routers?",
        "choices": [
          {
            "id": "A",
            "text": "Probes with increasing TTL/Hop Limit"
          },
          {
            "id": "B",
            "text": "DNS MX records"
          },
          {
            "id": "C",
            "text": "ARP tables"
          },
          {
            "id": "D",
            "text": "TCP handshake with each router"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Промежуточные маршрутизаторы отправляют ICMP Time Exceeded, когда TTL становится нулём."
      },
      {
        "id": 7,
        "topic": "TCP",
        "prompt": "TCP transport-layer PDU name?",
        "choices": [
          {
            "id": "A",
            "text": "Frame"
          },
          {
            "id": "B",
            "text": "Segment"
          },
          {
            "id": "C",
            "text": "Packet"
          },
          {
            "id": "D",
            "text": "Datagram"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "TCP передает сегменты; IP — пакеты, Ethernet — кадры."
      },
      {
        "id": 8,
        "topic": "TCP",
        "prompt": "Purpose of TCP Sliding Window?",
        "choices": [
          {
            "id": "A",
            "text": "Controls the amount of unacknowledged data in flight"
          },
          {
            "id": "B",
            "text": "MAC assignment"
          },
          {
            "id": "C",
            "text": "image compression"
          },
          {
            "id": "D",
            "text": "IPv6 DNS lookup"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Скользящее окно регулирует объём данных без подтверждения, поддерживая эффективную передачу и flow control."
      },
      {
        "id": 9,
        "topic": "DNS",
        "prompt": "Primary operational role of DNS?",
        "choices": [
          {
            "id": "A",
            "text": "web handshake"
          },
          {
            "id": "B",
            "text": "DHCP lease"
          },
          {
            "id": "C",
            "text": "email encryption"
          },
          {
            "id": "D",
            "text": "Translates hostnames into IP addresses"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "DNS связывает доменные имена с адресами через записи A/AAAA и другие типы."
      },
      {
        "id": 10,
        "topic": "HTTPS",
        "prompt": "HTTPS well-known port?",
        "choices": [
          {
            "id": "A",
            "text": "port 80"
          },
          {
            "id": "B",
            "text": "port 110"
          },
          {
            "id": "C",
            "text": "Port 443"
          },
          {
            "id": "D",
            "text": "port 8080"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "HTTPS традиционно использует TCP 443; HTTP/3 работает поверх QUIC/UDP 443."
      },
      {
        "id": 11,
        "topic": "ARP",
        "prompt": "TWO characteristics of IPv4 ARP?",
        "choices": [
          {
            "id": "A",
            "text": "Ethernet needs a destination MAC"
          },
          {
            "id": "B",
            "text": "ARP resolves IPv4-to-MAC mappings"
          },
          {
            "id": "C",
            "text": "wired-only ARP"
          },
          {
            "id": "D",
            "text": "no link-layer addressing"
          },
          {
            "id": "E",
            "text": "automatic encryption"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "ARP помогает найти MAC-адрес следующего узла в локальной сети по его IPv4-адресу."
      },
      {
        "id": 12,
        "topic": "VLAN",
        "prompt": "TWO technologies/devices associated with broadcast-domain boundaries?",
        "choices": [
          {
            "id": "A",
            "text": "Router"
          },
          {
            "id": "B",
            "text": "unmanaged hub"
          },
          {
            "id": "C",
            "text": "VLAN"
          },
          {
            "id": "D",
            "text": "unmanaged Layer 2 switch"
          },
          {
            "id": "E",
            "text": "DNS server"
          }
        ],
        "answer": [],
        "explanation": "Маршрутизатор разделяет broadcast-домены, VLAN логически сегментирует L2. Сам коммутатор без VLAN обычно их не разделяет.",
        "note": "В документе предложены A и C. Исходная формулировка неоднозначна.",
        "sourceAnswer": "Uncertain — A (router) and C (VLAN) can define broadcast boundaries, but wording is ambiguous"
      },
      {
        "id": 13,
        "topic": "ICMPv6",
        "prompt": "TWO ICMPv6 RA flags for address configuration?",
        "choices": [
          {
            "id": "A",
            "text": "A flag"
          },
          {
            "id": "B",
            "text": "M flag"
          },
          {
            "id": "C",
            "text": "SYN"
          },
          {
            "id": "D",
            "text": "FIN"
          },
          {
            "id": "E",
            "text": "L flag (not a host-addressing mode flag)"
          }
        ],
        "answer": [],
        "explanation": "Для режима конфигурации важны M и O flags; если O отсутствует в вариантах, буквальный ключ по фото ненадёжен. A flag находится в Prefix Information Option.",
        "note": "В документе приведены A и B, но формулировка и варианты неточны. Подробности в пояснении.",
        "sourceAnswer": "B — M flag; A — A flag (question/choices may be inaccurate)"
      },
      {
        "id": 14,
        "topic": "ICMPv6",
        "prompt": "TWO primary ICMPv6 functions?",
        "choices": [
          {
            "id": "A",
            "text": "encryption"
          },
          {
            "id": "B",
            "text": "DNS resolution"
          },
          {
            "id": "C",
            "text": "Network error reporting"
          },
          {
            "id": "D",
            "text": "Echo-based diagnostics"
          },
          {
            "id": "E",
            "text": "TCP handshake"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "ICMPv6 сообщает об ошибках и поддерживает Echo Request/Reply для диагностики."
      },
      {
        "id": 15,
        "topic": "Сокеты",
        "prompt": "TWO port assignments in client–web-server socket pair?",
        "choices": [
          {
            "id": "A",
            "text": "MAC address"
          },
          {
            "id": "B",
            "text": "gateway hop limit"
          },
          {
            "id": "C",
            "text": "subnet mask"
          },
          {
            "id": "D",
            "text": "Ephemeral source port"
          },
          {
            "id": "E",
            "text": "Well-known destination port"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "Клиент обычно использует временный исходный порт, сервер — порт службы 80/443."
      },
      {
        "id": 16,
        "topic": "HTTPS",
        "prompt": "TWO HTTPS security mechanisms?",
        "choices": [
          {
            "id": "A",
            "text": "TCP transport alone"
          },
          {
            "id": "B",
            "text": "TLS encryption"
          },
          {
            "id": "C",
            "text": "Certificate-based authentication"
          },
          {
            "id": "D",
            "text": "disabled routing"
          },
          {
            "id": "E",
            "text": "no DNS"
          }
        ],
        "answer": [
          "B",
          "C"
        ],
        "explanation": "TLS шифрует данные и позволяет проверить подлинность сервера по сертификату."
      },
      {
        "id": 17,
        "topic": "DNS",
        "prompt": "TWO DNS records mapping hostnames to addresses?",
        "choices": [
          {
            "id": "A",
            "text": "TXT"
          },
          {
            "id": "B",
            "text": "MX"
          },
          {
            "id": "C",
            "text": "A record"
          },
          {
            "id": "D",
            "text": "AAAA record"
          },
          {
            "id": "E",
            "text": "SRV"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "A содержит IPv4-адрес, AAAA — IPv6-адрес."
      },
      {
        "id": 18,
        "topic": "DHCP",
        "prompt": "TWO protocols for automatic IP configuration?",
        "choices": [
          {
            "id": "A",
            "text": "DHCPv4"
          },
          {
            "id": "B",
            "text": "DHCPv6"
          },
          {
            "id": "C",
            "text": "FTP"
          },
          {
            "id": "D",
            "text": "SMTP"
          },
          {
            "id": "E",
            "text": "SSH"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Оба протокола выдают сетевые параметры; в IPv6 также существует SLAAC."
      },
      {
        "id": 19,
        "topic": "TCP",
        "prompt": "TWO TCP reliability mechanisms?",
        "choices": [
          {
            "id": "A",
            "text": "Sequence numbers"
          },
          {
            "id": "B",
            "text": "Acknowledgements"
          },
          {
            "id": "C",
            "text": "zero IP-layer loss"
          },
          {
            "id": "D",
            "text": "connectionless TCP"
          },
          {
            "id": "E",
            "text": "disabled retransmissions"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Номера последовательности позволяют отслеживать байты, ACK подтверждают прием; потери вызывают повторные передачи."
      },
      {
        "id": 20,
        "topic": "UDP",
        "prompt": "TWO field pairs in UDP 8-byte header?",
        "choices": [
          {
            "id": "A",
            "text": "Source/Destination Port"
          },
          {
            "id": "B",
            "text": "IP addresses"
          },
          {
            "id": "C",
            "text": "sequence/acknowledgement"
          },
          {
            "id": "D",
            "text": "window/flags"
          },
          {
            "id": "E",
            "text": "Length/Checksum"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": "Заголовок UDP состоит из четырёх 16-битных полей: два порта, длина и контрольная сумма."
      },
      {
        "id": 21,
        "topic": "Подсети IPv4",
        "prompt": "THREE fundamental components of IPv4 subnetting?",
        "choices": [
          {
            "id": "A",
            "text": "Subnet Mask"
          },
          {
            "id": "B",
            "text": "Network Prefix"
          },
          {
            "id": "C",
            "text": "Broadcast Address"
          },
          {
            "id": "D",
            "text": "Host Identifier"
          },
          {
            "id": "E",
            "text": "MAC Address"
          },
          {
            "id": "F",
            "text": "Default Gateway"
          }
        ],
        "answer": [],
        "explanation": "Маска определяет границу между сетевой и хостовой частью. Broadcast — производный адрес, не часть структуры адреса.",
        "note": "В документе предложены A, B и D. Формулировка восстановлена частично.",
        "sourceAnswer": "Uncertain — B (Network Prefix), D (Host Identifier), and A (Subnet Mask) are plausible"
      }
    ]
  }
];
