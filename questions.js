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
        "explanation": "IP отправляет пакеты без предварительного установления соединения. Выделенный канал не создаётся; порядок и повторная передача не гарантируются IP."
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
        "explanation": "ARP сопоставляет IPv4 и MAC в локальном сегменте. DNS разрешает имена, DHCP выдаёт настройки, NAT преобразует адреса."
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
        "explanation": "NAT позволяет внутренним адресам использовать публичные адреса; шифрование, DNS и вычисление масок к NAT не относятся."
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
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Единицы маски обозначают сетевые биты, нули — хостовые. Остальные варианты на фото недостаточно чёткие для точной перепечатки."
      },
      {
        "id": 5,
        "topic": "IPv6",
        "prompt": "Which IPv6 address prefix is allocated by IANA for Global Unicast Addresses (GUA)?",
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
          "C"
        ],
        "explanation": "2000::/3 — глобальные unicast; fc00::/7 — ULA, fe80::/10 — link-local, ff00::/8 — multicast."
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
        "explanation": "Neighbor Solicitation используется при Neighbor Discovery для поиска канального адреса соседа."
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
        "explanation": "TCP устанавливает соединение и обеспечивает подтверждения, повторную передачу и упорядочивание данных."
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
        "explanation": "Соединение TCP открывается последовательностью SYN, SYN-ACK, ACK. FIN применяется при закрытии."
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
          }
        ],
        "answer": [
          "A"
        ],
        "explanation": "Обычные DNS-запросы чаще используют UDP/53; TCP тоже применяется в отдельных ситуациях. 80 — HTTP, 443 — HTTPS.",
        "note": "В документе приведены три читаемых варианта ответа."
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
        "explanation": "Шлюз по умолчанию — следующий маршрутизатор для удалённых сетей; другие варианты описывают loopback, разрешение адресов и DHCP."
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
        "explanation": "Hop Limit уменьшается при прохождении маршрутизаторов, предотвращая бесконечную циркуляцию пакетов."
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
        "explanation": "Размер блока /26 равен 64 адресам; 130 попадает в диапазон 128–191, значит сеть .128."
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
        "explanation": "При /24 последний адрес с единицами во всех хостовых битах — .255."
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
        "explanation": "В каждом хекстете можно опустить начальные нули, но не конечные. Это допустимо в любом хекстете."
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
        "explanation": "Router Advertisement отправляет IPv6-маршрутизатор, сообщая параметры сети."
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
        "explanation": "UDP содержит четыре 16-битных поля: два порта, длину и контрольную сумму — всего 8 байт."
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
        "explanation": "Коммуникацию определяют исходные и конечные IP-адреса и порты; обычно учитывают также транспортный протокол."
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
        "explanation": "FTP control использует TCP/21; TCP/20 традиционно связан с активным режимом передачи данных."
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
        "explanation": "ACK подтверждает аренду IP-параметров на завершающем этапе DORA."
      }
    ]
  },
  {
    "id": 4,
    "title": "Variant 4",
    "questions": [
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
        "explanation": "Контрольная сумма IPv4 проверяет только заголовок, а не полезную нагрузку."
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
        "explanation": "Адрес .0 — адрес сети; первый доступный хост — .1; .63 — broadcast."
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
        "explanation": "На транспортном уровне TCP PDU называется segment; frame относится к канальному уровню, packet — к сетевому."
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
        "explanation": "HTTPS обычно использует TCP/443; 80 — HTTP, 110 — POP3, 8080 — альтернативный HTTP-порт."
      }
    ]
  }
];
