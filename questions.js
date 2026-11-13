window.QUIZ_VARIANTS = [
  {
    "id": 1,
    "title": "Variant 1",
    "questions": [
      {
        "id": 1,
        "topic": "IP",
        "prompt": "Which of the following describes the fundamental “connectionless” characteristic of the IP protocol at the Network Layer?",
        "choices": [
          {
            "id": "A",
            "text": "IP establishes a dedicated physical circuit prior to packet transmission."
          },
          {
            "id": "B",
            "text": "IP does not establish an initial end-to-end connection before sending data packets."
          },
          {
            "id": "C",
            "text": "IP guarantees that packets arrive in exact sequential order."
          },
          {
            "id": "D",
            "text": "IP retransmits any lost packets automatically without transport layer intervention."
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "IP отправляет пакеты без предварительного установления соединения. Выделенный канал не создаётся; порядок и повторная передача не гарантируются IP.",
        "source": "verified"
      },
      {
        "id": 2,
        "topic": "ARP",
        "prompt": "What is the primary function of the Address Resolution Protocol (ARP) in an IPv4 network?",
        "choices": [
          {
            "id": "A",
            "text": "To resolve human-readable domain names into 32-bit IPv4 addresses."
          },
          {
            "id": "B",
            "text": "To dynamically assign IPv4 configuration settings to local hosts."
          },
          {
            "id": "C",
            "text": "To map a known IPv4 address to a corresponding destination MAC address on a local link."
          },
          {
            "id": "D",
            "text": "To translate private IPv4 addresses into public IPv4 addresses for internet routing."
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "ARP сопоставляет IPv4 и MAC в локальном сегменте. DNS разрешает имена, DHCP выдаёт настройки, NAT преобразует адреса.",
        "source": "verified"
      },
      {
        "id": 3,
        "topic": "NAT",
        "prompt": "What is the primary purpose of Network Address Translation (NAT) in IPv4 networking?",
        "choices": [
          {
            "id": "A",
            "text": "To encrypt all IP traffic, protecting it from unauthorized parties."
          },
          {
            "id": "B",
            "text": "To preserve public IPv4 space by allowing multiple internal private hosts to share public IP addresses."
          },
          {
            "id": "C",
            "text": "To replace domain name resolution services provided by DNS."
          },
          {
            "id": "D",
            "text": "To automatically calculate subnet masks for local interfaces."
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "NAT позволяет внутренним адресам использовать публичные адреса; шифрование, DNS и вычисление масок к NAT не относятся.",
        "source": "verified"
      },
      {
        "id": 4,
        "topic": "Подсети IPv4",
        "prompt": "How does a subnet mask distinguish the network portion from the host portion in an IPv4 address?",
        "choices": [
          {
            "id": "A",
            "text": "Binary 1s represent the network portion, while binary 0s represent the host portion."
          },
          {
            "id": "B",
            "text": "Binary 0s represent the network portion, while binary 1s represent the host portion."
          },
          {
            "id": "C",
            "text": "The first two octets always represent the network, regardless of mask length."
          },
          {
            "id": "D",
            "text": "Subnet masks alternate 1s and 0s across all 32 bits."
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Единицы маски обозначают сетевые биты, нули — хостовые. Граница задаётся длиной префикса, а не фиксированным числом октетов.",
        "source": "verified"
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "Which IPv6 address prefix is allocated by IANA for Global Unicast Addresses (GUA)?",
        "choices": [
          {
            "id": "A",
            "text": "fe80::/10"
          },
          {
            "id": "B",
            "text": "fc00::/7"
          },
          {
            "id": "C",
            "text": "2000::/3"
          },
          {
            "id": "D",
            "text": "ff00::/8"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "2000::/3 — глобальные unicast; fc00::/7 — ULA, fe80::/10 — link-local, ff00::/8 — multicast.",
        "source": "verified"
      },
      {
        "id": 6,
        "topic": "ICMPv6",
        "prompt": "Which ICMPv6 message type is sent by a host to determine the link-layer MAC address of an IPv6 neighbor?",
        "choices": [
          {
            "id": "A",
            "text": "Router Advertisement (RA)"
          },
          {
            "id": "B",
            "text": "Neighbor Solicitation (NS)"
          },
          {
            "id": "C",
            "text": "Router Solicitation (RS)"
          },
          {
            "id": "D",
            "text": "Redirect Message"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "Neighbor Solicitation используется при Neighbor Discovery для поиска канального адреса соседа.",
        "source": "verified"
      },
      {
        "id": 7,
        "topic": "TCP",
        "prompt": "Which transport layer protocol provides connection-oriented, reliable, and ordered delivery of data segments?",
        "choices": [
          {
            "id": "A",
            "text": "UDP (User Datagram Protocol)"
          },
          {
            "id": "B",
            "text": "ICMP (Internet Control Message Protocol)"
          },
          {
            "id": "C",
            "text": "IP (Internet Protocol)"
          },
          {
            "id": "D",
            "text": "TCP (Transmission Control Protocol)"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "TCP устанавливает соединение и обеспечивает подтверждения, повторную передачу и упорядочивание данных.",
        "source": "verified"
      },
      {
        "id": 8,
        "topic": "TCP",
        "prompt": "What is the correct sequence of control flags exchanged during the TCP three-way handshake session establishment?",
        "choices": [
          {
            "id": "A",
            "text": "ACK → SYN → SYN-ACK"
          },
          {
            "id": "B",
            "text": "SYN → SYN-ACK → ACK"
          },
          {
            "id": "C",
            "text": "SYN → ACK → FIN-ACK"
          },
          {
            "id": "D",
            "text": "FIN → FIN-ACK → ACK"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "Соединение TCP открывается последовательностью SYN, SYN-ACK, ACK. FIN применяется при закрытии.",
        "source": "verified"
      },
      {
        "id": 9,
        "topic": "DNS",
        "prompt": "Which default port number and primary transport protocol are used for Domain Name System (DNS) standard queries?",
        "choices": [
          {
            "id": "A",
            "text": "Port 53 over UDP"
          },
          {
            "id": "B",
            "text": "Port 80 over TCP"
          },
          {
            "id": "C",
            "text": "Port 443 over TCP"
          },
          {
            "id": "D",
            "text": "Port 67 over UDP"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Обычные DNS-запросы чаще используют UDP/53; TCP тоже применяется в отдельных ситуациях. 80 — HTTP, 443 — HTTPS.",
        "source": "verified"
      },
      {
        "id": 10,
        "topic": "HTTP",
        "prompt": "Which HTTP status code category and specific code indicate that a requested web resource was not found on the server?",
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
        "explanation": "404 Not Found означает, что сервер не нашёл запрошенный ресурс. Код относится к категории 4xx.",
        "source": "verified"
      },
      {
        "id": 11,
        "topic": "IPv4 и IPv6",
        "prompt": "Which two header fields present in the IPv4 packet header were eliminated in IPv6 to streamline header processing?",
        "choices": [
          {
            "id": "A",
            "text": "Source IP Address"
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
            "text": "Destination IP Address"
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
        "explanation": "Базовый заголовок IPv6 имеет фиксированный размер 40 байт, поэтому в нём нет IHL. Контрольной суммы заголовка в нём тоже нет.",
        "source": "verified"
      },
      {
        "id": 12,
        "topic": "IPv4",
        "prompt": "Which two IPv4 blocks are designated as private IP address ranges under RFC 1918?",
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
        "explanation": "Два частных диапазона из списка — 10.0.0.0/8 и 192.168.0.0/16. Третий диапазон RFC 1918 начинается с 172.16.0.0 и заканчивается на 172.31.255.255.",
        "source": "reconstructed",
        "note": "Последний вариант ответа восстановлен приблизительно по размытому фото."
      },
      {
        "id": 13,
        "topic": "IPv4 и IPv6",
        "prompt": "Which two techniques are recognized IPv6 migration and coexistence strategies allowing IPv4 and IPv6 networks to operate concurrently?",
        "choices": [
          {
            "id": "A",
            "text": "Subnet Splitting"
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
            "text": "Classful Addressing"
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
        "explanation": "Dual Stack позволяет одновременно использовать IPv4 и IPv6. Туннелирование переносит пакеты одного протокола внутри другого.",
        "source": "verified"
      },
      {
        "id": 14,
        "topic": "IPv6",
        "prompt": "Which two mechanisms provide dynamic address assignment for IPv6 hosts without manual host configuration?",
        "choices": [
          {
            "id": "A",
            "text": "ARP Request broadcast"
          },
          {
            "id": "B",
            "text": "Stateful DHCPv6"
          },
          {
            "id": "C",
            "text": "Static EUI-64 assignment"
          },
          {
            "id": "D",
            "text": "Stateless Address Autoconfiguration (SLAAC)"
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
        "explanation": "Stateful DHCPv6 выдаёт IPv6-адрес через сервер. При SLAAC узел формирует адрес сам, используя префикс из Router Advertisement.",
        "source": "verified"
      },
      {
        "id": 15,
        "topic": "Транспортный уровень",
        "prompt": "Which two header fields in transport-layer headers are required to enable multiplexing of multiple network applications?",
        "choices": [
          {
            "id": "A",
            "text": "Source Port Number"
          },
          {
            "id": "B",
            "text": "Destination Port Number"
          },
          {
            "id": "C",
            "text": "Sequence Number"
          },
          {
            "id": "D",
            "text": "Window Size"
          },
          {
            "id": "E",
            "text": "Urgent Pointer"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Порты источника и назначения помогают ОС различать приложения и соединения. Поля Sequence Number и Window Size выполняют другие функции TCP.",
        "source": "verified"
      },
      {
        "id": 16,
        "topic": "Порты",
        "prompt": "Which two characteristics describe Well-Known Port numbers as defined by IANA?",
        "choices": [
          {
            "id": "A",
            "text": "They are dynamically assigned as client source ports."
          },
          {
            "id": "B",
            "text": "They require registration by commercial vendors."
          },
          {
            "id": "C",
            "text": "They range from port number 0 to 1023."
          },
          {
            "id": "D",
            "text": "They range from port number 49152 to 65535."
          },
          {
            "id": "E",
            "text": "They are reserved for widely used server applications and standard system services."
          }
        ],
        "answer": [
          "C",
          "E"
        ],
        "explanation": "IANA относит к системным (Well-Known) порты 0–1023. В этом диапазоне находятся порты распространённых служб, например TCP/22 для SSH и TCP/443 для HTTPS.",
        "source": "reconstructed",
        "note": "Формулировки части вариантов восстановлены по фото."
      },
      {
        "id": 17,
        "topic": "TCP",
        "prompt": "Which two mechanisms are used by TCP to manage flow control and prevent receiver buffer overflow?",
        "choices": [
          {
            "id": "A",
            "text": "Window Size field in the TCP segment header"
          },
          {
            "id": "B",
            "text": "Exponential backoff of link-layer timers"
          },
          {
            "id": "C",
            "text": "Sliding window mechanism allowing burst transmission within window limits"
          },
          {
            "id": "D",
            "text": "ICMP Source Quench control packets"
          },
          {
            "id": "E",
            "text": "Forced fragmentation of IP datagrams"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "Получатель сообщает доступный размер окна. Скользящее окно сдвигается с подтверждениями и ограничивает объём данных, который отправитель может передать без нового подтверждения.",
        "source": "reconstructed",
        "note": "Формулировки части вариантов восстановлены по фото."
      },
      {
        "id": 18,
        "topic": "Электронная почта",
        "prompt": "Which two application-layer protocols are used by client applications to retrieve email from mail servers?",
        "choices": [
          {
            "id": "A",
            "text": "FTP (File Transfer Protocol)"
          },
          {
            "id": "B",
            "text": "SNMP (Simple Network Management Protocol)"
          },
          {
            "id": "C",
            "text": "SMTP (Simple Mail Transfer Protocol)"
          },
          {
            "id": "D",
            "text": "POP3 (Post Office Protocol v3)"
          },
          {
            "id": "E",
            "text": "IMAP (Internet Message Access Protocol)"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "POP3 и IMAP позволяют почтовому клиенту получать письма с сервера. SMTP используется для отправки и передачи писем.",
        "source": "verified"
      },
      {
        "id": 19,
        "topic": "DHCP",
        "prompt": "Which two messages in the DHCP DORA process are sent as broadcast transmissions by the client?",
        "choices": [
          {
            "id": "A",
            "text": "DHCP Offer"
          },
          {
            "id": "B",
            "text": "DHCP Acknowledgement (ACK)"
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
        "explanation": "При первичном получении адреса клиент рассылает DHCP Discover и DHCP Request. Offer и ACK отправляет сервер.",
        "source": "verified"
      },
      {
        "id": 20,
        "topic": "HTTP",
        "prompt": "Which two HTTP request methods are designed to upload or post data from a web client to a web server?",
        "choices": [
          {
            "id": "A",
            "text": "POST"
          },
          {
            "id": "B",
            "text": "PUT"
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
        "answer": [
          "A",
          "B"
        ],
        "explanation": "POST отправляет данные ресурсу для обработки. PUT создаёт или заменяет представление по заданному URI.",
        "source": "verified"
      },
      {
        "id": 21,
        "topic": "IP",
        "prompt": "Which three of the following are primary operational characteristics of the Internet Protocol (IP)?",
        "choices": [
          {
            "id": "A",
            "text": "Connectionless operation"
          },
          {
            "id": "B",
            "text": "Automatic retransmission of lost datagrams"
          },
          {
            "id": "C",
            "text": "Best-effort delivery at Layer 3"
          },
          {
            "id": "D",
            "text": "Media-independent operation"
          },
          {
            "id": "E",
            "text": "Guaranteed in-order delivery"
          },
          {
            "id": "F",
            "text": "Establishment of an end-to-end session"
          }
        ],
        "answer": [
          "A",
          "C",
          "D"
        ],
        "explanation": "IP работает без установления соединения, доставляет пакеты по принципу best effort и может работать поверх разных канальных сред. Повторная передача и порядок доставки могут обеспечиваться транспортным протоколом.",
        "source": "reconstructed",
        "note": "На фото читаются A–C. Варианты D–F и ключ восстановлены для тренировки."
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
        "prompt": "What is the role of the Default Gateway in a local host IP routing table?",
        "choices": [
          {
            "id": "A",
            "text": "It processes local loopback diagnostic traffic within host memory."
          },
          {
            "id": "B",
            "text": "It provides the router interface address used to forward packets destined for remote networks."
          },
          {
            "id": "C",
            "text": "It resolves domain names into MAC addresses on local switches."
          },
          {
            "id": "D",
            "text": "It automatically assigns IP addresses to newly connected wireless clients."
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "Шлюз по умолчанию — следующий маршрутизатор для удалённых сетей; другие варианты описывают loopback, разрешение адресов и DHCP.",
        "source": "verified"
      },
      {
        "id": 2,
        "topic": "IPv6",
        "prompt": "Which IPv6 packet header field performs the equivalent function of the IPv4 Time to Live (TTL) field?",
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
        "explanation": "Hop Limit уменьшается при прохождении маршрутизаторов, предотвращая бесконечную циркуляцию пакетов.",
        "source": "verified"
      },
      {
        "id": 3,
        "topic": "Подсети IPv4",
        "prompt": "What is the resulting Network ID from performing a binary AND operation on IP 192.168.1.130 with subnet mask 255.255.255.192 (/26)?",
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
        "explanation": "Размер блока /26 равен 64 адресам; 130 попадает в диапазон 128–191, значит сеть .128.",
        "source": "verified"
      },
      {
        "id": 4,
        "topic": "Подсети IPv4",
        "prompt": "What is the directed broadcast address for the subnet 192.168.10.0/24?",
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
        "explanation": "При /24 последний адрес с единицами во всех хостовых битах — .255.",
        "source": "verified"
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "Which formatting rule allows compressing leading zeros within an IPv6 hexadecimal hextet?",
        "choices": [
          {
            "id": "A",
            "text": "Leading zeros in any 16-bit segment can be omitted (e.g., 01ab becomes 1ab)."
          },
          {
            "id": "B",
            "text": "Trailing zeros in a segment can be omitted freely."
          },
          {
            "id": "C",
            "text": "All zeros across the address must be replaced with uppercase letters."
          },
          {
            "id": "D",
            "text": "Leading zeros can only be omitted in the first two hextets."
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "В каждом хекстете можно опустить начальные нули, но не конечные. Это допустимо в любом хекстете.",
        "source": "verified"
      },
      {
        "id": 6,
        "topic": "ICMPv6",
        "prompt": "Which device generates ICMPv6 Router Advertisement (RA) messages on a local network segment?",
        "choices": [
          {
            "id": "A",
            "text": "A DNS Name Server"
          },
          {
            "id": "B",
            "text": "A Layer 2 Unmanaged Switch"
          },
          {
            "id": "C",
            "text": "A Client Host requesting SLAAC"
          },
          {
            "id": "D",
            "text": "An IPv6-enabled Router"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "Router Advertisement отправляет IPv6-маршрутизатор, сообщая параметры сети.",
        "source": "verified"
      },
      {
        "id": 7,
        "topic": "UDP",
        "prompt": "What is the fixed header size of a User Datagram Protocol (UDP) segment?",
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
        "explanation": "UDP содержит четыре 16-битных поля: два порта, длину и контрольную сумму — всего 8 байт.",
        "source": "verified"
      },
      {
        "id": 8,
        "topic": "Сокеты",
        "prompt": "What combination uniquely defines a network socket pair for a communications channel?",
        "choices": [
          {
            "id": "A",
            "text": "Source IP Address and Destination MAC Address"
          },
          {
            "id": "B",
            "text": "Subnet Mask and Default Gateway IP address"
          },
          {
            "id": "C",
            "text": "Source IP, Source Port, Destination IP, and Destination Port"
          },
          {
            "id": "D",
            "text": "DNS Hostname and MAC Address"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "Коммуникацию определяют исходные и конечные IP-адреса и порты; обычно учитывают также транспортный протокол.",
        "source": "verified"
      },
      {
        "id": 9,
        "topic": "FTP",
        "prompt": "Which default TCP port is used by FTP for sending control commands between client and server?",
        "choices": [
          {
            "id": "A",
            "text": "Port 20"
          },
          {
            "id": "B",
            "text": "Port 21"
          },
          {
            "id": "C",
            "text": "Port 22"
          },
          {
            "id": "D",
            "text": "Port 25"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "FTP control использует TCP/21; TCP/20 традиционно связан с активным режимом передачи данных.",
        "source": "verified"
      },
      {
        "id": 10,
        "topic": "DHCP",
        "prompt": "What is the purpose of the DHCP ACK message sent by a DHCP server to a client?",
        "choices": [
          {
            "id": "A",
            "text": "It terminates the active lease and returns the IP address to the pool."
          },
          {
            "id": "B",
            "text": "It resolves the DHCP server hostname to a MAC address."
          },
          {
            "id": "C",
            "text": "It prompts the client to re-broadcast a new DHCP Discover message."
          },
          {
            "id": "D",
            "text": "It finalizes and confirms the binding lease of the offered IP configuration parameters."
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "ACK подтверждает аренду IP-параметров на завершающем этапе DORA.",
        "source": "verified"
      },
      {
        "id": 11,
        "topic": "Маршрутизация",
        "prompt": "Which two characteristics accurately describe dynamic routing protocols operating at the network layer?",
        "choices": [
          {
            "id": "A",
            "text": "They automatically discover remote network paths and update routing tables."
          },
          {
            "id": "B",
            "text": "They dynamically recalculate paths if a primary link failure occurs."
          },
          {
            "id": "C",
            "text": "They require manual administrator re-configuration for every link change."
          },
          {
            "id": "D",
            "text": "They consume zero CPU cycles and network memory on routing hardware."
          },
          {
            "id": "E",
            "text": "They operate strictly on physical layer switches without IP support."
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Динамические протоколы обмениваются информацией о сетях и обновляют маршруты, когда меняется топология.",
        "source": "verified"
      },
      {
        "id": 12,
        "topic": "Подсети IPv4",
        "prompt": "Which two benefits are provided by implementing Variable Length Subnet Masking (VLSM)?",
        "choices": [
          {
            "id": "A",
            "text": "It forces all subnets to maintain an identical fixed number of hosts."
          },
          {
            "id": "B",
            "text": "It automatically converts IPv4 addresses into IPv6 GUAs."
          },
          {
            "id": "C",
            "text": "It eliminates the need for network-layer routing tables entirely."
          },
          {
            "id": "D",
            "text": "It prevents wasting IPv4 address space by sizing subnets according to host requirements."
          },
          {
            "id": "E",
            "text": "It enables subnetting with different subnet mask lengths across a network."
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "VLSM даёт возможность использовать разные длины масок. Размер каждой подсети можно подобрать под необходимое число узлов и сократить расход IPv4-адресов.",
        "source": "reconstructed",
        "note": "В варианте C на фото повторена часть D. В карточке повтор убран."
      },
      {
        "id": 13,
        "topic": "ICMPv6",
        "prompt": "Which two ICMPv6 message types replace IPv4 ARP functionality for discovering link-layer addresses?",
        "choices": [
          {
            "id": "A",
            "text": "Neighbor Solicitation (NS)"
          },
          {
            "id": "B",
            "text": "Echo Request"
          },
          {
            "id": "C",
            "text": "Router Solicitation (RS)"
          },
          {
            "id": "D",
            "text": "Neighbor Advertisement (NA)"
          },
          {
            "id": "E",
            "text": "Redirect Message"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": "Узел отправляет Neighbor Solicitation, а сосед сообщает канальный адрес в Neighbor Advertisement.",
        "source": "verified"
      },
      {
        "id": 14,
        "topic": "Диагностика сети",
        "prompt": "Which two utilities utilize ICMP messages to test network reachability and trace path hops?",
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
        "explanation": "Ping проверяет доступность через ICMP Echo. Traceroute выявляет промежуточные узлы по ответам ICMP Time Exceeded, даже когда его исходные пробы используют UDP или TCP.",
        "source": "verified"
      },
      {
        "id": 15,
        "topic": "TCP",
        "prompt": "Which two algorithms are primary components of TCP Congestion Control mechanisms?",
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
        "explanation": "Slow Start быстро наращивает окно перегрузки. Congestion Avoidance увеличивает его осторожнее, чтобы снизить риск перегрузки.",
        "source": "verified"
      },
      {
        "id": 16,
        "topic": "TCP",
        "prompt": "Which two control flags are involved during graceful four-way TCP connection termination?",
        "choices": [
          {
            "id": "A",
            "text": "RST (Reset)"
          },
          {
            "id": "B",
            "text": "URG (Urgent)"
          },
          {
            "id": "C",
            "text": "SYN (Synchronize)"
          },
          {
            "id": "D",
            "text": "FIN (Finish)"
          },
          {
            "id": "E",
            "text": "ACK (Acknowledgment)"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "Каждая сторона отправляет FIN, чтобы закрыть своё направление передачи. Получатель подтверждает FIN флагом ACK.",
        "source": "verified"
      },
      {
        "id": 17,
        "topic": "HTTPS",
        "prompt": "Which two features differentiate HTTPS from standard unencrypted HTTP web traffic?",
        "choices": [
          {
            "id": "A",
            "text": "HTTPS encrypts web data payload using TLS/SSL protocols."
          },
          {
            "id": "B",
            "text": "HTTPS uses UDP datagrams exclusively for transport."
          },
          {
            "id": "C",
            "text": "HTTPS defaults to TCP port 443 instead of TCP port 80."
          },
          {
            "id": "D",
            "text": "HTTPS compresses web images at the Network Layer."
          },
          {
            "id": "E",
            "text": "HTTPS eliminates the requirement for domain name resolution."
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "HTTPS защищает трафик с помощью TLS. При работе поверх TCP стандартный порт HTTPS — 443, а HTTP — 80. HTTP/3 использует QUIC поверх UDP, обычно тоже на порту 443.",
        "source": "verified"
      },
      {
        "id": 18,
        "topic": "DNS",
        "prompt": "Which two types of DNS resolution queries are performed by clients and name servers?",
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
            "text": "Sequential Broadcast Query"
          },
          {
            "id": "D",
            "text": "SLAAC Query"
          },
          {
            "id": "E",
            "text": "Static ARP Query"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "При рекурсивном запросе резолвер ищет окончательный результат для клиента. При итеративном запросе сервер может вернуть адрес следующего DNS-сервера.",
        "source": "verified"
      },
      {
        "id": 19,
        "topic": "FTP",
        "prompt": "Which two operational connection modes are supported by File Transfer Protocol (FTP)?",
        "choices": [
          {
            "id": "A",
            "text": "Broadcast Peer Mode"
          },
          {
            "id": "B",
            "text": "Encapsulated Tunnel Mode"
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
        "explanation": "В активном режиме соединение данных инициирует сервер. В пассивном клиент подключается к порту, который сообщает сервер.",
        "source": "verified"
      },
      {
        "id": 20,
        "topic": "Порты",
        "prompt": "Which two properties correctly define Registered Port numbers managed by IANA?",
        "choices": [
          {
            "id": "A",
            "text": "They are assigned strictly for dynamic client ephemeral connections."
          },
          {
            "id": "B",
            "text": "They range from port 0 to 1023."
          },
          {
            "id": "C",
            "text": "They span the numerical range from 1024 to 49151."
          },
          {
            "id": "D",
            "text": "They are registered with IANA for specific vendor user processes or applications."
          },
          {
            "id": "E",
            "text": "They can only be used by physical-layer routing protocols."
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "Зарегистрированные, или пользовательские, порты занимают диапазон 1024–49151. IANA присваивает их приложениям и службам.",
        "source": "verified"
      },
      {
        "id": 21,
        "topic": "Маршрутизация",
        "prompt": "Which three components are standard entries inside a host IP routing table?",
        "choices": [
          {
            "id": "A",
            "text": "Directly connected network routes"
          },
          {
            "id": "B",
            "text": "Remote network routes learned statically or dynamically"
          },
          {
            "id": "C",
            "text": "Default route (0.0.0.0/0 or ::/0)"
          },
          {
            "id": "D",
            "text": "MAC address mapping tables for all global servers"
          },
          {
            "id": "E",
            "text": "User passwords for remote SSH sessions"
          },
          {
            "id": "F",
            "text": "DHCP address pool ranges"
          }
        ],
        "answer": [
          "A",
          "B",
          "C"
        ],
        "explanation": "В таблице маршрутизации могут быть маршруты к напрямую подключённым сетям, к удалённым сетям и маршрут по умолчанию для адресов без более специфичного маршрута.",
        "source": "verified"
      },
      {
        "id": 22,
        "topic": "Подсети IPv4",
        "prompt": "Which three network administration benefits are achieved by dividing a large IPv4 network into smaller subnets?",
        "choices": [
          {
            "id": "A",
            "text": "Automated transformation of IPv4 addresses to IPv6"
          },
          {
            "id": "B",
            "text": "Elimination of transport-layer port number requirements"
          },
          {
            "id": "C",
            "text": "Smaller broadcast domains"
          },
          {
            "id": "D",
            "text": "More efficient allocation of IPv4 address space"
          },
          {
            "id": "E",
            "text": "Logical separation of groups of hosts"
          },
          {
            "id": "F",
            "text": "Removal of the need to route between networks"
          }
        ],
        "answer": [
          "C",
          "D",
          "E"
        ],
        "explanation": "Подсети ограничивают широковещательный трафик, позволяют распределять адреса по потребностям и логически разделяют группы узлов. Для обмена между подсетями нужна маршрутизация.",
        "source": "reconstructed",
        "note": "На фото читаются только A и B. Варианты C–F и ключ восстановлены для тренировки."
      }
    ]
  },
  {
    "id": 3,
    "title": "Variant 3",
    "questions": [
      {
        "id": 1,
        "topic": "OSI",
        "prompt": "What is the standard name for the Protocol Data Unit (PDU) at the Network Layer (Layer 3)?",
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
        "explanation": "На сетевом уровне единица данных — пакет. Кадр относится к канальному уровню, сегмент TCP — к транспортному.",
        "source": "verified"
      },
      {
        "id": 2,
        "topic": "IPv6",
        "prompt": "What is the total bit length of an IPv6 address structure?",
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
        "explanation": "IPv6-адрес содержит 128 бит. В полной записи это восемь групп по 16 бит.",
        "source": "verified"
      },
      {
        "id": 3,
        "topic": "Подсети IPv4",
        "prompt": "How many usable host IP addresses are available in a /28 IPv4 subnet (subnet mask 255.255.255.240)?",
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
            "text": "14"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "Префикс /28 оставляет 4 хостовых бита. Из 16 адресов вычитаем адрес сети и широковещательный адрес, остаётся 14.",
        "source": "verified"
      },
      {
        "id": 4,
        "topic": "IPv4",
        "prompt": "Which IPv4 block is globally reserved for loopback internal diagnostic testing?",
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
        "explanation": "Для loopback выделен весь диапазон 127.0.0.0/8. Типичный адрес — 127.0.0.1.",
        "source": "verified"
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "How many times can the double colon “::” compression notation be used within a single IPv6 address?",
        "choices": [
          {
            "id": "A",
            "text": "Only in the global routing prefix section"
          },
          {
            "id": "B",
            "text": "Up to TWO times"
          },
          {
            "id": "C",
            "text": "Unlimited times provided hextets are contiguous"
          },
          {
            "id": "D",
            "text": "Exactly ONCE"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "Двойное двоеточие заменяет одну непрерывную цепочку нулевых групп. Два сокращения сделали бы длину каждой цепочки неоднозначной.",
        "source": "verified",
        "note": "На фото вариант D звучит «Exactly ONCE». Точное правило RFC 4291: сокращение можно использовать не более одного раза, полная запись допустима."
      },
      {
        "id": 6,
        "topic": "ICMP",
        "prompt": "Which ICMP message types are exchanged by the Ping network utility to test basic L3 reachability?",
        "choices": [
          {
            "id": "A",
            "text": "Echo Request and Echo Reply"
          },
          {
            "id": "B",
            "text": "Router Solicitation and Router Advertisement"
          },
          {
            "id": "C",
            "text": "Neighbor Solicitation and Neighbor Advertisement"
          },
          {
            "id": "D",
            "text": "Destination Unreachable and Source Quench"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Ping отправляет Echo Request и ждёт Echo Reply. Так он проверяет достижимость узла на сетевом уровне.",
        "source": "verified"
      },
      {
        "id": 7,
        "topic": "TCP",
        "prompt": "Where is the Maximum Segment Size (MSS) negotiated between TCP peers?",
        "choices": [
          {
            "id": "A",
            "text": "During the DHCP Request message exchange"
          },
          {
            "id": "B",
            "text": "In the IP header Options field of every packet"
          },
          {
            "id": "C",
            "text": "In the DNS CNAME record"
          },
          {
            "id": "D",
            "text": "Inside the TCP Options header field during the 3-way handshake"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "Каждая сторона может объявить максимальный размер полезной нагрузки TCP опцией MSS в сегменте с флагом SYN.",
        "source": "verified"
      },
      {
        "id": 8,
        "topic": "Порты",
        "prompt": "What is the designated port number range for Dynamic, Private, or Ephemeral Ports?",
        "choices": [
          {
            "id": "A",
            "text": "0 to 1023"
          },
          {
            "id": "B",
            "text": "1024 to 49151"
          },
          {
            "id": "C",
            "text": "49152 to 65535"
          },
          {
            "id": "D",
            "text": "65536 to 1048576"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "IANA выделяет 49152–65535 для динамических и частных портов. Диапазон временных портов в конкретной ОС может отличаться.",
        "source": "verified"
      },
      {
        "id": 9,
        "topic": "SMTP",
        "prompt": "Which email protocol is primarily used for transferring messages between mail servers across the Internet?",
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
        "explanation": "Почтовые серверы передают письма друг другу по SMTP. POP3 и IMAP используют для доступа к ящику.",
        "source": "verified"
      },
      {
        "id": 10,
        "topic": "DNS",
        "prompt": "What is the function of a CNAME (Canonical Name) resource record in DNS?",
        "choices": [
          {
            "id": "A",
            "text": "It maps an IP address directly to a domain name"
          },
          {
            "id": "B",
            "text": "It creates an alias pointing to another canonical hostname"
          },
          {
            "id": "C",
            "text": "It specifies the primary authority server for the zone"
          },
          {
            "id": "D",
            "text": "It maps IPv6 addresses to host names"
          }
        ],
        "answer": [
          "B"
        ],
        "explanation": "CNAME связывает псевдоним с каноническим доменным именем. IP-адрес затем разрешается по записям целевого имени.",
        "source": "verified"
      },
      {
        "id": 11,
        "topic": "Маршрутизация",
        "prompt": "Which TWO statements correctly describe Static Routes configured in a router table?",
        "choices": [
          {
            "id": "A",
            "text": "They are manually entered by a network administrator"
          },
          {
            "id": "B",
            "text": "They are valid only for IPv6 networks"
          },
          {
            "id": "C",
            "text": "They dynamically recalculate when network links fail"
          },
          {
            "id": "D",
            "text": "They require automated update messages between adjacent routers"
          },
          {
            "id": "E",
            "text": "They consume negligible router CPU cycles and overhead"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": "Администратор задаёт статический маршрут вручную. Для поддержания такого маршрута не нужны вычисления и обмен обновлениями протокола динамической маршрутизации.",
        "source": "verified"
      },
      {
        "id": 12,
        "topic": "IPv4 multicast",
        "prompt": "Which TWO properties define the IPv4 Multicast address space block?",
        "choices": [
          {
            "id": "A",
            "text": "It is defined by Class D address range 224.0.0.0 through 239.255.255.255"
          },
          {
            "id": "B",
            "text": "It delivers data packets simultaneously to a subscribed group of receiving hosts"
          },
          {
            "id": "C",
            "text": "It is reserved exclusively for single host loopback diagnostics"
          },
          {
            "id": "D",
            "text": "It forces broadcast packet flooding to all devices on local switches"
          },
          {
            "id": "E",
            "text": "It replaces public Internet routable addresses under NAT"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Адреса multicast лежат в 224.0.0.0/4. Пакеты предназначены получателям, которые присоединились к соответствующей группе.",
        "source": "verified"
      },
      {
        "id": 13,
        "topic": "SLAAC",
        "prompt": "Which TWO components combine to form an IPv6 Global Unicast Address assigned via SLAAC?",
        "choices": [
          {
            "id": "A",
            "text": "32-bit IPv4 mapped transition address"
          },
          {
            "id": "B",
            "text": "DHCP Server Domain Name string"
          },
          {
            "id": "C",
            "text": "Subnet Prefix advertised by local router in RA message"
          },
          {
            "id": "D",
            "text": "64-bit Interface ID derived via EUI-64 or random generation"
          },
          {
            "id": "E",
            "text": "Default Gateway MAC Address prefix"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "При SLAAC узел получает префикс из Router Advertisement и дополняет его своим 64-битным идентификатором интерфейса.",
        "source": "verified"
      },
      {
        "id": 14,
        "topic": "ICMPv6",
        "prompt": "Which TWO ICMPv6 messages are used for router discovery and parameter advertisement on an IPv6 link?",
        "choices": [
          {
            "id": "A",
            "text": "Neighbor Solicitation (NS)"
          },
          {
            "id": "B",
            "text": "Router Advertisement (RA)"
          },
          {
            "id": "C",
            "text": "Router Solicitation (RS)"
          },
          {
            "id": "D",
            "text": "Neighbor Advertisement (NA)"
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
        "explanation": "Хост отправляет Router Solicitation (RS), чтобы запросить объявления. Маршрутизатор отправляет Router Advertisement (RA) с параметрами сети.",
        "source": "verified"
      },
      {
        "id": 15,
        "topic": "TCP и UDP",
        "prompt": "Which TWO structural differences distinguish the TCP segment header from the UDP datagram header?",
        "choices": [
          {
            "id": "A",
            "text": "TCP header size varies from 20 to 60 bytes, whereas UDP header is fixed at 8 bytes"
          },
          {
            "id": "B",
            "text": "UDP header includes a mandatory 32-bit window size field"
          },
          {
            "id": "C",
            "text": "TCP header contains Sequence and Acknowledgement number fields for reliability"
          },
          {
            "id": "D",
            "text": "TCP header omits port numbers entirely"
          },
          {
            "id": "E",
            "text": "UDP header contains a 128-bit Flow Label field"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "В UDP заголовок занимает 8 байт. В TCP базовый заголовок занимает 20 байт и может вырасти до 60 байт за счёт опций. Поля Sequence Number и Acknowledgement Number нужны для надёжной доставки TCP.",
        "source": "verified"
      },
      {
        "id": 16,
        "topic": "TCP",
        "prompt": "What TWO functions are served by the TCP Acknowledgement Number header field?",
        "choices": [
          {
            "id": "A",
            "text": "It identifies the application protocol running on the client"
          },
          {
            "id": "B",
            "text": "It specifies the encryption key used for session payload security"
          },
          {
            "id": "C",
            "text": "It defines the total physical length of the enclosing Ethernet frame"
          },
          {
            "id": "D",
            "text": "It indicates the next expected byte sequence number from the remote sender"
          },
          {
            "id": "E",
            "text": "It implicitly acknowledges receipt of all prior stream bytes"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "При установленном флаге ACK это поле указывает номер следующего ожидаемого байта и кумулятивно подтверждает все предыдущие байты потока.",
        "source": "reconstructed",
        "note": "Часть формулировок вариантов уточнена по читаемому тексту фотографии."
      },
      {
        "id": 17,
        "topic": "DHCP",
        "prompt": "Which TWO messages are generated by a DHCP Server during the DORA address assignment process?",
        "choices": [
          {
            "id": "A",
            "text": "DHCP Offer"
          },
          {
            "id": "B",
            "text": "DHCP Acknowledgement (ACK)"
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
            "text": "DHCP Select"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "В DORA клиент отправляет Discover и Request. Сервер отвечает Offer и Acknowledgement (ACK).",
        "source": "verified"
      },
      {
        "id": 18,
        "topic": "HTTP",
        "prompt": "Which TWO HTTP request methods are standard methods for client data manipulation or retrieval?",
        "choices": [
          {
            "id": "A",
            "text": "FORWARD (forwards routing table entries)"
          },
          {
            "id": "B",
            "text": "RESOLVE (resolves domain name strings)"
          },
          {
            "id": "C",
            "text": "GET (retrieves a resource from the server)"
          },
          {
            "id": "D",
            "text": "DELETE (removes a specified resource from the server)"
          },
          {
            "id": "E",
            "text": "BIND (binds an IP socket to a port)"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "GET запрашивает представление ресурса. DELETE запрашивает удаление связи целевого URI с его текущей функциональностью на сервере.",
        "source": "reconstructed",
        "note": "Некоторые слова в вариантах восстановлены по фотографии. Ответы GET и DELETE читаются."
      },
      {
        "id": 19,
        "topic": "OSI",
        "prompt": "Which TWO primary tasks are handled by the Presentation Layer (OSI Layer 6)?",
        "choices": [
          {
            "id": "A",
            "text": "Physical bit transmission over copper wire"
          },
          {
            "id": "B",
            "text": "MAC address table framing"
          },
          {
            "id": "C",
            "text": "IP packet routing and path selection"
          },
          {
            "id": "D",
            "text": "Data formatting and encoding (e.g., ASCII, JPEG)"
          },
          {
            "id": "E",
            "text": "Data compression and encryption/decryption"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "Уровень представления отвечает за согласование форматов и кодирования данных. В классической модели OSI на нём также рассматривают сжатие и шифрование.",
        "source": "reconstructed",
        "note": "Формулировки вариантов местами восстановлены по читаемой части фотографии."
      },
      {
        "id": 20,
        "topic": "TCP SACK",
        "prompt": "Which TWO benefits are provided by the TCP Selective Acknowledgement (SACK) option?",
        "choices": [
          {
            "id": "A",
            "text": "It allows the receiver to explicitly acknowledge non-contiguous segment blocks"
          },
          {
            "id": "B",
            "text": "It automatically converts TCP streams to UDP datagrams"
          },
          {
            "id": "C",
            "text": "It doubles the physical throughput speed of network links"
          },
          {
            "id": "D",
            "text": "It eliminates the requirement for TCP sequence numbers"
          },
          {
            "id": "E",
            "text": "It prevents unnecessary retransmission of data segments already successfully received"
          }
        ],
        "answer": [
          "A",
          "E"
        ],
        "explanation": "SACK сообщает отправителю о принятых блоках за пределами кумулятивного ACK. Это помогает повторно передать пропуски без лишней передачи уже принятых данных.",
        "source": "verified"
      },
      {
        "id": 21,
        "topic": "Маршрутизация",
        "prompt": "Which THREE operations are performed by a router when processing an incoming IP packet at Layer 3?",
        "choices": [
          {
            "id": "A",
            "text": "Modifying the transport-layer source port number on all packets"
          },
          {
            "id": "B",
            "text": "Compressing payload data using a compression algorithm"
          },
          {
            "id": "C",
            "text": "Resolving domain hostnames via public DNS records"
          },
          {
            "id": "D",
            "text": "Examining the destination IP address in the packet header"
          },
          {
            "id": "E",
            "text": "Consulting the internal routing table for the matching best route"
          },
          {
            "id": "F",
            "text": "Encapsulating the packet in a new Layer 2 frame for the outgoing link"
          }
        ],
        "answer": [
          "D",
          "E",
          "F"
        ],
        "explanation": "Маршрутизатор читает IP-адрес назначения, ищет наиболее специфичный подходящий маршрут и формирует новое канальное обрамление для исходящего интерфейса.",
        "source": "reconstructed",
        "note": "Текст в нижней части фотографии размыт. Формулировки вариантов восстановлены по видимым строкам и по смыслу."
      },
      {
        "id": 22,
        "topic": "Частные IPv4",
        "prompt": "Which THREE IPv4 address ranges are defined by RFC 1918 as private address space?",
        "choices": [
          {
            "id": "A",
            "text": "10.0.0.0 to 10.255.255.255"
          },
          {
            "id": "B",
            "text": "172.16.0.0 to 172.31.255.255"
          },
          {
            "id": "C",
            "text": "192.168.0.0 to 192.168.255.255"
          },
          {
            "id": "D",
            "text": "169.254.0.0 to 169.254.255.255"
          },
          {
            "id": "E",
            "text": "224.0.0.0 to 239.255.255.255"
          }
        ],
        "answer": [
          "A",
          "B",
          "C"
        ],
        "explanation": "RFC 1918 выделяет три частных диапазона: 10.0.0.0/8, 172.16.0.0/12 и 192.168.0.0/16. Диапазоны link-local и multicast к ним не относятся.",
        "source": "reconstructed",
        "note": "Тема вопроса читается. Формат и часть вариантов восстановлены для тренировки, исходные буквы нельзя подтвердить по фотографии."
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
        "prompt": "What does “best effort” delivery mean regarding IP protocol operations?",
        "choices": [
          {
            "id": "A",
            "text": "IP has no built-in capability to manage or recover dropped or corrupt packets"
          },
          {
            "id": "B",
            "text": "IP guarantees delivery of every packet by automatically resending dropped frames"
          },
          {
            "id": "C",
            "text": "IP encrypts packet headers before delivery to guarantee confidentiality"
          },
          {
            "id": "D",
            "text": "IP prioritizes video streams over DNS requests automatically"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "IP передаёт пакеты по принципу best effort. Доставка и порядок не гарантируются. Восстановление при потерях может обеспечить транспортный протокол, например TCP.",
        "source": "reconstructed",
        "note": "Левые края нескольких вариантов обрезаны на фото. Недостающие слова восстановлены по видимому тексту."
      },
      {
        "id": 2,
        "topic": "IPv4",
        "prompt": "What is the function of the Header Checksum field in an IPv4 packet header?",
        "choices": [
          {
            "id": "A",
            "text": "It verifies the integrity of the IPv4 packet header only."
          },
          {
            "id": "B",
            "text": "It ensures the integrity of the entire application data payload."
          },
          {
            "id": "C",
            "text": "It encrypts the source IP address for anonymity."
          },
          {
            "id": "D",
            "text": "It calculates the Total Length of the Ethernet frame."
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Контрольная сумма IPv4 проверяет только заголовок, а не полезную нагрузку.",
        "source": "verified"
      },
      {
        "id": 3,
        "topic": "Подсети IPv4",
        "prompt": "What is the first usable IP address in the IPv4 subnet 10.1.1.0/26?",
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
        "explanation": "Адрес .0 — адрес сети; первый доступный хост — .1; .63 — broadcast.",
        "source": "verified"
      },
      {
        "id": 4,
        "topic": "NAT / PAT",
        "prompt": "How does Port Address Translation (PAT / NAT Overload) allow hundreds of internal hosts to share a single public IPv4 address?",
        "choices": [
          {
            "id": "A",
            "text": "By assigning static public IP addresses to hosts dynamically"
          },
          {
            "id": "B",
            "text": "By converting internal IPv4 packets into IPv6 GUA packets"
          },
          {
            "id": "C",
            "text": "By mapping each internal private IP address and source port to a unique source port on the public IP"
          },
          {
            "id": "D",
            "text": "By changing transport layer sequence numbers"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "PAT ведёт таблицу соответствий адресов и портов. Разные внутренние соединения могут использовать один публичный IP, потому что транслятор различает их по портам и другим полям потока.",
        "source": "reconstructed",
        "note": "Начало вопроса и строк вариантов обрезано. Формулировки восстановлены по читаемым фрагментам."
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "Which reserved IPv6 prefix indicates a multicast address?",
        "choices": [
          {
            "id": "A",
            "text": "fc00::/7"
          },
          {
            "id": "B",
            "text": "fe80::/10"
          },
          {
            "id": "C",
            "text": "2000::/3"
          },
          {
            "id": "D",
            "text": "ff00::/8"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "IPv6 multicast использует ff00::/8. Префиксы fc00::/7, fe80::/10 и 2000::/3 относятся соответственно к unique local, link-local и глобальным unicast-адресам.",
        "source": "reconstructed",
        "note": "На фото виден фрагмент вопроса про IPv6 multicast, но варианты обрезаны. Варианты и буквы добавлены для тренировки."
      },
      {
        "id": 6,
        "topic": "Traceroute",
        "prompt": "How does the Traceroute utility discover intermediate hop routers along a packet path?",
        "choices": [
          {
            "id": "A",
            "text": "By transmitting probe packets with progressively increasing TTL / Hop Limit values"
          },
          {
            "id": "B",
            "text": "By querying local DNS CNAME records"
          },
          {
            "id": "C",
            "text": "By requesting ARP tables from root routers"
          },
          {
            "id": "D",
            "text": "By establishing a TCP 3-way handshake with every router"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Traceroute отправляет пробы с возрастающим TTL для IPv4 или Hop Limit для IPv6. Когда счётчик исчерпан, промежуточный маршрутизатор может вернуть ICMP Time Exceeded.",
        "source": "verified"
      },
      {
        "id": 7,
        "topic": "TCP",
        "prompt": "What is the standard PDU designation for data structures at the Transport Layer when using TCP?",
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
        "explanation": "На транспортном уровне TCP PDU называется segment; frame относится к канальному уровню, packet — к сетевому.",
        "source": "verified"
      },
      {
        "id": 8,
        "topic": "TCP",
        "prompt": "What is the purpose of the TCP Sliding Window mechanism during data transmission?",
        "choices": [
          {
            "id": "A",
            "text": "To dynamically regulate the maximum unacknowledged data volume a sender can transmit"
          },
          {
            "id": "B",
            "text": "To assign MAC addresses to network interfaces dynamically"
          },
          {
            "id": "C",
            "text": "To compress HTTP web images before transmission"
          },
          {
            "id": "D",
            "text": "To resolve hostnames into 128-bit IPv6 addresses"
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Скользящее окно ограничивает объём данных, которые отправитель может передать до подтверждения. По мере получения ACK окно смещается, позволяя отправлять следующие байты.",
        "source": "verified"
      },
      {
        "id": 9,
        "topic": "DNS",
        "prompt": "What is the primary operational role of the Domain Name System (DNS)?",
        "choices": [
          {
            "id": "A",
            "text": "To establish 3-way handshakes for web downloads"
          },
          {
            "id": "B",
            "text": "To dynamically lease IP addresses to newly connected network clients"
          },
          {
            "id": "C",
            "text": "To securely encrypt email transmission streams"
          },
          {
            "id": "D",
            "text": "To translate human-readable hostnames into numeric IP addresses"
          }
        ],
        "answer": [
          "D"
        ],
        "explanation": "DNS связывает имена узлов с IP-адресами. Запись A хранит IPv4-адрес, а AAAA — IPv6-адрес.",
        "source": "verified"
      },
      {
        "id": 10,
        "topic": "HTTPS",
        "prompt": "Which well-known port is reserved for secure encrypted web communications (HTTPS)?",
        "choices": [
          {
            "id": "A",
            "text": "Port 80"
          },
          {
            "id": "B",
            "text": "Port 110"
          },
          {
            "id": "C",
            "text": "Port 443"
          },
          {
            "id": "D",
            "text": "Port 8080"
          }
        ],
        "answer": [
          "C"
        ],
        "explanation": "HTTPS обычно использует TCP/443; 80 — HTTP, 110 — POP3, 8080 — альтернативный HTTP-порт.",
        "source": "verified"
      },
      {
        "id": 11,
        "topic": "IP",
        "prompt": "Which TWO statements accurately describe the “media independence” of the Internet Protocol?",
        "choices": [
          {
            "id": "A",
            "text": "IP requires custom header formats for every physical cable type"
          },
          {
            "id": "B",
            "text": "IP operates strictly on copper Ethernet cables and cannot run over fiber"
          },
          {
            "id": "C",
            "text": "IP packets can travel over copper, optical fiber, or wireless physical media without changing IP structure"
          },
          {
            "id": "D",
            "text": "IP is unconcerned with the specific physical transport media carrying the packet payload"
          },
          {
            "id": "E",
            "text": "IP automatically alters port numbers based on physical link speed"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "Формат IP-пакета не зависит от физической среды передачи. Канальный и физический уровни отвечают за перенос по меди, оптоволокну или радио.",
        "source": "verified"
      },
      {
        "id": 12,
        "topic": "VLAN",
        "prompt": "Which TWO boundary devices or technologies terminate or isolate network broadcast domains?",
        "choices": [
          {
            "id": "A",
            "text": "Routers (Layer 3 interfaces)"
          },
          {
            "id": "B",
            "text": "Layer 2 Unmanaged Hubs"
          },
          {
            "id": "C",
            "text": "VLANs (Virtual Local Area Networks on switches)"
          },
          {
            "id": "D",
            "text": "Unshielded Twisted Pair (UTP) patch cables"
          },
          {
            "id": "E",
            "text": "DNS Name Server zones"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "Интерфейсы маршрутизатора образуют границы широковещательных доменов. VLAN разделяют сеть уровня L2 на отдельные широковещательные домены.",
        "source": "verified"
      },
      {
        "id": 13,
        "topic": "ICMPv6",
        "prompt": "Which TWO flag settings inside an ICMPv6 Router Advertisement (RA) message instruct a host on address configuration mode?",
        "choices": [
          {
            "id": "A",
            "text": "A Flag"
          },
          {
            "id": "B",
            "text": "M Flag"
          },
          {
            "id": "C",
            "text": "SYN Flag"
          },
          {
            "id": "D",
            "text": "FIN Flag"
          },
          {
            "id": "E",
            "text": "TTL Flag"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "M в заголовке RA указывает, что адреса доступны через DHCPv6. A в опции Prefix Information этого сообщения разрешает использовать объявленный префикс для SLAAC.",
        "source": "verified",
        "note": "Вопрос относится ко всему сообщению RA, включая опции. В самом заголовке RA флага A нет."
      },
      {
        "id": 14,
        "topic": "ICMP",
        "prompt": "Which TWO functions are primary operational uses for ICMP Control Messages?",
        "choices": [
          {
            "id": "A",
            "text": "Encrypting web data payloads"
          },
          {
            "id": "B",
            "text": "Resolving domain names into IPv4 addresses"
          },
          {
            "id": "C",
            "text": "Network error reporting (e.g., Destination Unreachable, Time Exceeded)"
          },
          {
            "id": "D",
            "text": "Operational network diagnostics (e.g., Echo Request and Echo Reply)"
          },
          {
            "id": "E",
            "text": "Establishing TCP 3-way handshakes"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "ICMP сообщает о сетевых ошибках, например Destination Unreachable и Time Exceeded. Echo Request и Echo Reply используются для диагностики, в частности утилитой ping.",
        "source": "verified"
      },
      {
        "id": 15,
        "topic": "Порты",
        "prompt": "Which TWO port assignments make up a complete communications socket pair between client and web server?",
        "choices": [
          {
            "id": "A",
            "text": "Layer 2 MAC hardware address"
          },
          {
            "id": "B",
            "text": "Default Gateway hop limit"
          },
          {
            "id": "C",
            "text": "Subnet Mask bit mask prefix"
          },
          {
            "id": "D",
            "text": "Source Port dynamically assigned from Ephemeral range (e.g., 51234)"
          },
          {
            "id": "E",
            "text": "Destination Port set to Well-Known service port (e.g., 80 or 443)"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "Клиент обычно открывает соединение с временного исходного порта, а сервер принимает его на порту службы, например 80 или 443. Для полной идентификации соединения также нужны IP-адреса обеих сторон.",
        "source": "verified"
      },
      {
        "id": 16,
        "topic": "TCP",
        "prompt": "Which TWO mechanisms allow TCP to recover from dropped or missing segments?",
        "choices": [
          {
            "id": "A",
            "text": "Retransmission Timeout (RTO) timer expiration"
          },
          {
            "id": "B",
            "text": "UDP fallback switching"
          },
          {
            "id": "C",
            "text": "Forced physical link restart"
          },
          {
            "id": "D",
            "text": "Fast Retransmit triggered by 3 duplicate ACK messages"
          },
          {
            "id": "E",
            "text": "ICMP Redirect message processing"
          }
        ],
        "answer": [
          "A",
          "D"
        ],
        "explanation": "TCP может повторно передать потерянные данные по истечении таймера RTO. Классический Fast Retransmit запускает повторную передачу после трёх дублирующих ACK.",
        "source": "verified"
      },
      {
        "id": 17,
        "topic": "POP3 / IMAP",
        "prompt": "Which TWO statements highlight key differences between email protocols POP3 and IMAP?",
        "choices": [
          {
            "id": "A",
            "text": "POP3 is used exclusively for sending mail, while IMAP is for receiving"
          },
          {
            "id": "B",
            "text": "IMAP operates without transport layer sockets"
          },
          {
            "id": "C",
            "text": "POP3 typically downloads emails to local client storage and removes them from server"
          },
          {
            "id": "D",
            "text": "IMAP synchronizes folders and maintains master email copies centrally on server"
          },
          {
            "id": "E",
            "text": "POP3 encrypts mail using SSL by default on port 25"
          }
        ],
        "answer": [
          "C",
          "D"
        ],
        "explanation": "POP3 обычно загружает сообщения в клиент. Удаление копий с сервера зависит от настроек. IMAP хранит сообщения на сервере и синхронизирует папки и состояния сообщений между клиентами.",
        "source": "verified"
      },
      {
        "id": 18,
        "topic": "DNS",
        "prompt": "Which TWO DNS Resource Record types resolve domain names to IP addresses?",
        "choices": [
          {
            "id": "A",
            "text": "PTR Record (reverse maps IP to domain name)"
          },
          {
            "id": "B",
            "text": "TXT Record (stores arbitrary text strings)"
          },
          {
            "id": "C",
            "text": "MX Record (specifies mail exchange server)"
          },
          {
            "id": "D",
            "text": "A Record (maps domain name to 32-bit IPv4 address)"
          },
          {
            "id": "E",
            "text": "AAAA Record (maps domain name to 128-bit IPv6 address)"
          }
        ],
        "answer": [
          "D",
          "E"
        ],
        "explanation": "Запись A указывает IPv4-адрес, AAAA — IPv6-адрес. PTR применяется для обратного поиска, MX указывает почтовый сервер, TXT хранит текстовые данные.",
        "source": "verified"
      },
      {
        "id": 19,
        "topic": "HTTP",
        "prompt": "Which TWO HTTP status code ranges represent successful processing and server errors respectively?",
        "choices": [
          {
            "id": "A",
            "text": "2xx Success (e.g., 200 OK)"
          },
          {
            "id": "B",
            "text": "1xx Redirection"
          },
          {
            "id": "C",
            "text": "5xx Server Error (e.g., 500 Internal Server Error)"
          },
          {
            "id": "D",
            "text": "3xx Client Error"
          },
          {
            "id": "E",
            "text": "6xx Transport Error"
          }
        ],
        "answer": [
          "A",
          "C"
        ],
        "explanation": "Класс 2xx означает успешную обработку, 5xx — ошибку сервера. Коды 1xx информационные, 3xx относятся к перенаправлению, 4xx — к ошибкам клиента.",
        "source": "verified"
      },
      {
        "id": 20,
        "topic": "UDP",
        "prompt": "Which TWO fields are included in the 8-byte UDP datagram header?",
        "choices": [
          {
            "id": "A",
            "text": "Source Port and Destination Port fields"
          },
          {
            "id": "B",
            "text": "Length and Checksum fields"
          },
          {
            "id": "C",
            "text": "Sequence Number and Acknowledgement fields"
          },
          {
            "id": "D",
            "text": "Window Size and Urgent Pointer fields"
          },
          {
            "id": "E",
            "text": "IHL and Fragment Offset fields"
          }
        ],
        "answer": [
          "A",
          "B"
        ],
        "explanation": "Заголовок UDP содержит четыре 16-битных поля: исходный порт, порт назначения, длину и контрольную сумму. В вопросе эти поля сгруппированы по два.",
        "source": "verified"
      },
      {
        "id": 21,
        "topic": "IPv6",
        "prompt": "Which THREE header fields are contained in the simplified IPv6 base header?",
        "choices": [
          {
            "id": "A",
            "text": "Traffic Class (for QoS prioritization)"
          },
          {
            "id": "B",
            "text": "Internet Header Length (IHL)"
          },
          {
            "id": "C",
            "text": "Flow Label (identifying specific packet flows)"
          },
          {
            "id": "D",
            "text": "Header Checksum"
          },
          {
            "id": "E",
            "text": "Hop Limit (replacing IPv4 TTL)"
          },
          {
            "id": "F",
            "text": "Identification and Fragment Offset"
          }
        ],
        "answer": [
          "A",
          "C",
          "E"
        ],
        "explanation": "В базовом заголовке IPv6 есть Traffic Class, Flow Label и Hop Limit. Поля IHL и Header Checksum относятся к IPv4. Данные фрагментации IPv6 находятся в отдельном заголовке расширения.",
        "source": "verified"
      }
    ]
  }
];

window.QUIZ_PREVIOUS_PROGRESS_IDS = ["1:1","1:2","1:3","1:6","1:7","1:8","2:1","2:2","2:3","2:4","2:5","2:6","2:7","2:8","2:9","2:10","4:2","4:3","4:7","4:10"];
