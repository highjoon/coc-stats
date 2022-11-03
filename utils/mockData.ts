import { APIClan, APILabel, APIPlayerItem } from "types/api";

export const mockHomeData: Array<{ title: string; content: string }> = [
  { title: "획득한 별", content: "365" },
  { title: "트로피", content: "3950" },
  { title: "트로피 최고 기록", content: "4000" },
  { title: "공격 승리", content: "300" },
  { title: "방어 승리", content: "100" },
];

export const mockClanData: Array<{ title: string; content: string }> = [
  { title: "지원한 병력 수", content: "1500" },
  { title: "지원 받은 병력 수", content: "1000" },
  { title: "클랜 캐피탈 기여", content: "15000" },
];

export const mockBuilderData: Array<{ title: string; content: string }> = [
  { title: "장인 기지 트로피", content: "4936" },
  { title: "장인 기지 트로피 최고 기록", content: "4963" },
  { title: "장인 기지 공격 승리", content: "1834" },
];

export const mockLabelData: Array<APILabel> = [
  {
    id: 57000000,
    name: "Clan Wars",
    iconUrls: {
      small:
        "https://api-assets.clashofclans.com/labels/64/ZxJp9606Vl1sa0GHg5JmGp8TdHS4l0jE4WFuil1ENvA.png",
      medium:
        "https://api-assets.clashofclans.com/labels/128/ZxJp9606Vl1sa0GHg5JmGp8TdHS4l0jE4WFuil1ENvA.png",
    },
  },
  {
    id: 57000001,
    name: "Clan War League",
    iconUrls: {
      small:
        "https://api-assets.clashofclans.com/labels/64/JOzAO4r91eVaJELAPB-iuAx6f_zBbRPCLM_ag5mpK4s.png",
      medium:
        "https://api-assets.clashofclans.com/labels/128/JOzAO4r91eVaJELAPB-iuAx6f_zBbRPCLM_ag5mpK4s.png",
    },
  },
  {
    id: 57000008,
    name: "Active Donator",
    iconUrls: {
      small:
        "https://api-assets.clashofclans.com/labels/64/MvL0LDt0yv9AI-Vevpu8yE5NAJUIV05Ofpsr4IfGRxQ.png",
      medium:
        "https://api-assets.clashofclans.com/labels/128/MvL0LDt0yv9AI-Vevpu8yE5NAJUIV05Ofpsr4IfGRxQ.png",
    },
  },
];

export const mockHomeTroopsData: Array<APIPlayerItem> = [
  {
    name: "Barbarian",
    level: 8,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Archer",
    level: 10,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Goblin",
    level: 8,
    maxLevel: 8,
    village: "home",
  },
  {
    name: "Giant",
    level: 9,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Wall Breaker",
    level: 7,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Balloon",
    level: 10,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Wizard",
    level: 9,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Healer",
    level: 6,
    maxLevel: 7,
    village: "home",
  },
  {
    name: "Dragon",
    level: 8,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "P.E.K.K.A",
    level: 7,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "Minion",
    level: 8,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Hog Rider",
    level: 10,
    maxLevel: 11,
    village: "home",
  },
  {
    name: "Valkyrie",
    level: 7,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "Golem",
    level: 7,
    maxLevel: 12,
    village: "home",
  },
  {
    name: "Witch",
    level: 5,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Lava Hound",
    level: 6,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Bowler",
    level: 6,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Baby Dragon",
    level: 6,
    maxLevel: 8,
    village: "home",
  },
  {
    name: "Miner",
    level: 7,
    maxLevel: 9,
    village: "home",
  },
  {
    name: "Yeti",
    level: 4,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Ice Golem",
    level: 5,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Electro Dragon",
    level: 5,
    maxLevel: 6,
    village: "home",
  },
  {
    name: "Dragon Rider",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Headhunter",
    level: 2,
    maxLevel: 3,
    village: "home",
  },
];

export const mockBuilderTroopsData: Array<APIPlayerItem> = [
  {
    name: "Raged Barbarian",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Sneaky Archer",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Beta Minion",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Boxer Giant",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Bomber",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Super P.E.K.K.A",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Cannon Cart",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Drop Ship",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Baby Dragon",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Night Witch",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
  {
    name: "Hog Glider",
    level: 18,
    maxLevel: 18,
    village: "builderBase",
  },
];

export const mockPetsData: Array<APIPlayerItem> = [
  {
    name: "L.A.S.S.I",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Mighty Yak",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Electro Owl",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
  {
    name: "Unicorn",
    level: 3,
    maxLevel: 10,
    village: "home",
  },
];

export const mockSuperUnitsData: Array<APIPlayerItem> = [
  {
    name: "Ice Hound",
    level: 1,
    maxLevel: 2,
    village: "home",
  },
  {
    name: "Super Barbarian",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Super Archer",
    level: 1,
    maxLevel: 4,
    village: "home",
    superTroopIsActive: true,
  },
  {
    name: "Super Wall Breaker",
    level: 1,
    maxLevel: 5,
    village: "home",
  },
  {
    name: "Super Giant",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Sneaky Goblin",
    level: 1,
    maxLevel: 2,
    village: "home",
  },
  {
    name: "Rocket Balloon",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Witch",
    level: 1,
    maxLevel: 2,
    village: "home",
  },
  {
    name: "Super Valkyrie",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Bowler",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Dragon",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Wizard",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
  {
    name: "Super Minion",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Inferno Dragon",
    level: 1,
    maxLevel: 3,
    village: "home",
  },
];

export const mockSiegeUnitsData: Array<APIPlayerItem> = [
  {
    name: "Siege Barracks",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Log Launcher",
    level: 4,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Stone Slammer",
    level: 2,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Wall Wrecker",
    level: 1,
    maxLevel: 4,
    village: "home",
  },
  {
    name: "Battle Blimp",
    level: 3,
    maxLevel: 4,
    village: "home",
  },
];

export const mockClanDetailData: APIClan = {
  tag: "#2QRUG0P9V",
  name: "The Ring",
  type: "open",
  description:
    "Korean Only 한국 클랜 / 12홀 이상 2600 트로피 이상 가입 가능 / 리그전 필참. 클랜전 2회 이상 불참 시 강퇴 / 클랜전 항상 진행 / 상호 존중 / 지원 비율 1 : 3 필수",
  location: {
    id: 32000216,
    name: "South Korea",
    isCountry: true,
    countryCode: "KR",
  },
  badgeUrls: {
    small:
      "https://api-assets.clashofclans.com/badges/70/gEsehsswwyDXPdPs68jt2s2JrV-zCOJ_ooRlPS5bxbE.png",
    large:
      "https://api-assets.clashofclans.com/badges/512/gEsehsswwyDXPdPs68jt2s2JrV-zCOJ_ooRlPS5bxbE.png",
    medium:
      "https://api-assets.clashofclans.com/badges/200/gEsehsswwyDXPdPs68jt2s2JrV-zCOJ_ooRlPS5bxbE.png",
  },
  clanLevel: 5,
  clanPoints: 22548,
  clanVersusPoints: 23438,
  requiredTrophies: 2600,
  warFrequency: "always",
  warWinStreak: 0,
  warWins: 14,
  warTies: 1,
  warLosses: 24,
  isWarLogPublic: true,
  warLeague: {
    id: 48000008,
    name: "Gold League II",
  },
  members: 28,
  memberList: [
    {
      tag: "#29LVR2YUV",
      name: "Ramos",
      role: "coLeader",
      expLevel: 184,
      league: {
        id: 29000021,
        name: "Titan League I",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/qVCZmeYH0lS7Gaa6YoB7LrNly7bfw7fV_d4Vp2CU-gk.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/qVCZmeYH0lS7Gaa6YoB7LrNly7bfw7fV_d4Vp2CU-gk.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/qVCZmeYH0lS7Gaa6YoB7LrNly7bfw7fV_d4Vp2CU-gk.png",
        },
      },
      trophies: 4758,
      versusTrophies: 4880,
      clanRank: 1,
      previousClanRank: 1,
      donations: 585,
      donationsReceived: 252,
    },
    {
      tag: "#QQQ8UP8",
      name: "곱등이",
      role: "member",
      expLevel: 198,
      league: {
        id: 29000020,
        name: "Titan League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/llpWocHlOoFliwyaEx5Z6dmoZG4u4NmxwpF-Jg7su7Q.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/llpWocHlOoFliwyaEx5Z6dmoZG4u4NmxwpF-Jg7su7Q.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/llpWocHlOoFliwyaEx5Z6dmoZG4u4NmxwpF-Jg7su7Q.png",
        },
      },
      trophies: 4539,
      versusTrophies: 4097,
      clanRank: 2,
      previousClanRank: 2,
      donations: 0,
      donationsReceived: 242,
    },
    {
      tag: "#Q9U0GLY9U",
      name: "⚔️Targaryen⚔️",
      role: "leader",
      expLevel: 142,
      league: {
        id: 29000018,
        name: "Champion League I",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/9v_04LHmd1LWq7IoY45dAdGhrBkrc2ZFMZVhe23PdCE.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/9v_04LHmd1LWq7IoY45dAdGhrBkrc2ZFMZVhe23PdCE.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/9v_04LHmd1LWq7IoY45dAdGhrBkrc2ZFMZVhe23PdCE.png",
        },
      },
      trophies: 3866,
      versusTrophies: 4551,
      clanRank: 3,
      previousClanRank: 3,
      donations: 62,
      donationsReceived: 0,
    },
    {
      tag: "#QLPUP98C2",
      name: "박서준",
      role: "coLeader",
      expLevel: 138,
      league: {
        id: 29000017,
        name: "Champion League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
        },
      },
      trophies: 3684,
      versusTrophies: 3450,
      clanRank: 4,
      previousClanRank: 4,
      donations: 346,
      donationsReceived: 209,
    },
    {
      tag: "#LLJPG9PCR",
      name: "무논리를 받아라",
      role: "member",
      expLevel: 157,
      league: {
        id: 29000017,
        name: "Champion League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
        },
      },
      trophies: 3646,
      versusTrophies: 2770,
      clanRank: 5,
      previousClanRank: 5,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#L2J0L8JRJ",
      name: "강장강장장",
      role: "member",
      expLevel: 175,
      league: {
        id: 29000017,
        name: "Champion League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/kLWSSyq7vJiRiCantiKCoFuSJOxief6R1ky6AyfB8q0.png",
        },
      },
      trophies: 3569,
      versusTrophies: 2345,
      clanRank: 6,
      previousClanRank: 6,
      donations: 106,
      donationsReceived: 0,
    },
    {
      tag: "#QRCY08LCC",
      name: "깔창",
      role: "member",
      expLevel: 90,
      league: {
        id: 29000014,
        name: "Master League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/4wtS1stWZQ-1VJ5HaCuDPfdhTWjeZs_jPar_YPzK6Lg.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/4wtS1stWZQ-1VJ5HaCuDPfdhTWjeZs_jPar_YPzK6Lg.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/4wtS1stWZQ-1VJ5HaCuDPfdhTWjeZs_jPar_YPzK6Lg.png",
        },
      },
      trophies: 2934,
      versusTrophies: 2379,
      clanRank: 7,
      previousClanRank: 7,
      donations: 37,
      donationsReceived: 132,
    },
    {
      tag: "#QR88V0PQJ",
      name: "무패신화",
      role: "member",
      expLevel: 140,
      league: {
        id: 29000000,
        name: "Unranked",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
        },
      },
      trophies: 2600,
      versusTrophies: 3385,
      clanRank: 8,
      previousClanRank: 8,
      donations: 328,
      donationsReceived: 37,
    },
    {
      tag: "#G02YYVJYC",
      name: "성훈안",
      role: "admin",
      expLevel: 79,
      league: {
        id: 29000012,
        name: "Crystal League I",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/kSfTyNNVSvogX3dMvpFUTt72VW74w6vEsEFuuOV4osQ.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/kSfTyNNVSvogX3dMvpFUTt72VW74w6vEsEFuuOV4osQ.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/kSfTyNNVSvogX3dMvpFUTt72VW74w6vEsEFuuOV4osQ.png",
        },
      },
      trophies: 2533,
      versusTrophies: 2466,
      clanRank: 9,
      previousClanRank: 9,
      donations: 25,
      donationsReceived: 382,
    },
    {
      tag: "#L0GJRLJC",
      name: "하찮은찬혁이",
      role: "member",
      expLevel: 88,
      league: {
        id: 29000011,
        name: "Crystal League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/jhP36EhAA9n1ADafdQtCP-ztEAQjoRpY7cT8sU7SW8A.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/jhP36EhAA9n1ADafdQtCP-ztEAQjoRpY7cT8sU7SW8A.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/jhP36EhAA9n1ADafdQtCP-ztEAQjoRpY7cT8sU7SW8A.png",
        },
      },
      trophies: 2293,
      versusTrophies: 2104,
      clanRank: 10,
      previousClanRank: 10,
      donations: 0,
      donationsReceived: 101,
    },
    {
      tag: "#QJJPYVUYR",
      name: "좋아",
      role: "member",
      expLevel: 102,
      league: {
        id: 29000010,
        name: "Crystal League III",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/Hyqco7bHh0Q81xB8mSF_ZhjKnKcTmJ9QEq9QGlsxiKE.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/Hyqco7bHh0Q81xB8mSF_ZhjKnKcTmJ9QEq9QGlsxiKE.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/Hyqco7bHh0Q81xB8mSF_ZhjKnKcTmJ9QEq9QGlsxiKE.png",
        },
      },
      trophies: 1973,
      versusTrophies: 2902,
      clanRank: 11,
      previousClanRank: 11,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#G0P890U8J",
      name: "양념반탈레반",
      role: "admin",
      expLevel: 70,
      league: {
        id: 29000009,
        name: "Gold League I",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/CorhMY9ZmQvqXTZ4VYVuUgPNGSHsO0cEXEL5WYRmB2Y.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/CorhMY9ZmQvqXTZ4VYVuUgPNGSHsO0cEXEL5WYRmB2Y.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/CorhMY9ZmQvqXTZ4VYVuUgPNGSHsO0cEXEL5WYRmB2Y.png",
        },
      },
      trophies: 1801,
      versusTrophies: 2132,
      clanRank: 12,
      previousClanRank: 12,
      donations: 0,
      donationsReceived: 141,
    },
    {
      tag: "#Q9V2L2RRR",
      name: "세훈이",
      role: "member",
      expLevel: 102,
      league: {
        id: 29000000,
        name: "Unranked",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
        },
      },
      trophies: 1785,
      versusTrophies: 2034,
      clanRank: 13,
      previousClanRank: 13,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#YCYYGYUJU",
      name: "0cean",
      role: "member",
      expLevel: 80,
      league: {
        id: 29000008,
        name: "Gold League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
        },
      },
      trophies: 1680,
      versusTrophies: 1919,
      clanRank: 14,
      previousClanRank: 14,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#QUGLY2LYG",
      name: "king",
      role: "member",
      expLevel: 58,
      league: {
        id: 29000008,
        name: "Gold League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
        },
      },
      trophies: 1631,
      versusTrophies: 1843,
      clanRank: 15,
      previousClanRank: 15,
      donations: 0,
      donationsReceived: 31,
    },
    {
      tag: "#G0RQCU80V",
      name: "까레라",
      role: "member",
      expLevel: 65,
      league: {
        id: 29000008,
        name: "Gold League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/Y6CveuHmPM_oiOic2Yet0rYL9AFRYW0WA0u2e44-YbM.png",
        },
      },
      trophies: 1629,
      versusTrophies: 2289,
      clanRank: 16,
      previousClanRank: 18,
      donations: 1592,
      donationsReceived: 1656,
    },
    {
      tag: "#QQYU2UR9R",
      name: "엠투",
      role: "member",
      expLevel: 65,
      league: {
        id: 29000007,
        name: "Gold League III",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
        },
      },
      trophies: 1541,
      versusTrophies: 2111,
      clanRank: 17,
      previousClanRank: 21,
      donations: 1737,
      donationsReceived: 1512,
    },
    {
      tag: "#QGJRQ0YUC",
      name: "Abyssinian",
      role: "member",
      expLevel: 60,
      league: {
        id: 29000007,
        name: "Gold League III",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
        },
      },
      trophies: 1534,
      versusTrophies: 1693,
      clanRank: 18,
      previousClanRank: 16,
      donations: 0,
      donationsReceived: 26,
    },
    {
      tag: "#QJ0GR8LVC",
      name: "요새지킴이",
      role: "member",
      expLevel: 69,
      league: {
        id: 29000007,
        name: "Gold League III",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
        },
      },
      trophies: 1499,
      versusTrophies: 1931,
      clanRank: 19,
      previousClanRank: 17,
      donations: 0,
      donationsReceived: 31,
    },
    {
      tag: "#QR9YGLY02",
      name: "팀울프",
      role: "member",
      expLevel: 60,
      league: {
        id: 29000007,
        name: "Gold League III",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
        },
      },
      trophies: 1465,
      versusTrophies: 1761,
      clanRank: 20,
      previousClanRank: 20,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#G0JGRP909",
      name: "도훈",
      role: "member",
      expLevel: 77,
      league: {
        id: 29000007,
        name: "Gold League III",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/vd4Lhz5b2I1P0cLH25B6q63JN3Wt1j2NTMhOYpMPQ4M.png",
        },
      },
      trophies: 1463,
      versusTrophies: 1519,
      clanRank: 21,
      previousClanRank: 19,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#Q9CUUL8U8",
      name: "기부",
      role: "member",
      expLevel: 55,
      league: {
        id: 29000000,
        name: "Unranked",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
        },
      },
      trophies: 1360,
      versusTrophies: 1874,
      clanRank: 22,
      previousClanRank: 22,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#LYVYQGUUJ",
      name: "빈승혀",
      role: "member",
      expLevel: 83,
      league: {
        id: 29000006,
        name: "Silver League I",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/nvrBLvCK10elRHmD1g9w5UU1flDRMhYAojMB2UbYfPs.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/nvrBLvCK10elRHmD1g9w5UU1flDRMhYAojMB2UbYfPs.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/nvrBLvCK10elRHmD1g9w5UU1flDRMhYAojMB2UbYfPs.png",
        },
      },
      trophies: 1305,
      versusTrophies: 2438,
      clanRank: 23,
      previousClanRank: 23,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#L80UPPUGR",
      name: "G@Rn€tt…",
      role: "member",
      expLevel: 76,
      league: {
        id: 29000000,
        name: "Unranked",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
        },
      },
      trophies: 1267,
      versusTrophies: 1400,
      clanRank: 24,
      previousClanRank: 24,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#QJC8PV9UY",
      name: "대출은지르코프",
      role: "member",
      expLevel: 86,
      league: {
        id: 29000006,
        name: "Silver League I",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/nvrBLvCK10elRHmD1g9w5UU1flDRMhYAojMB2UbYfPs.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/nvrBLvCK10elRHmD1g9w5UU1flDRMhYAojMB2UbYfPs.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/nvrBLvCK10elRHmD1g9w5UU1flDRMhYAojMB2UbYfPs.png",
        },
      },
      trophies: 1253,
      versusTrophies: 2117,
      clanRank: 25,
      previousClanRank: 25,
      donations: 0,
      donationsReceived: 66,
    },
    {
      tag: "#QCRU82LGQ",
      name: "블랙말랑카우",
      role: "member",
      expLevel: 55,
      league: {
        id: 29000000,
        name: "Unranked",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
        },
      },
      trophies: 1167,
      versusTrophies: 1700,
      clanRank: 26,
      previousClanRank: 26,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#QU80LRPVJ",
      name: "Prashikpro",
      role: "member",
      expLevel: 63,
      league: {
        id: 29000000,
        name: "Unranked",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png",
        },
      },
      trophies: 1147,
      versusTrophies: 1702,
      clanRank: 27,
      previousClanRank: 27,
      donations: 0,
      donationsReceived: 0,
    },
    {
      tag: "#QUL8U888C",
      name: "pratikpo10",
      role: "member",
      expLevel: 58,
      league: {
        id: 29000005,
        name: "Silver League II",
        iconUrls: {
          small:
            "https://api-assets.clashofclans.com/leagues/72/8OhXcwDJkenBH2kPH73eXftFOpHHRF-b32n0yrTqC44.png",
          tiny: "https://api-assets.clashofclans.com/leagues/36/8OhXcwDJkenBH2kPH73eXftFOpHHRF-b32n0yrTqC44.png",
          medium:
            "https://api-assets.clashofclans.com/leagues/288/8OhXcwDJkenBH2kPH73eXftFOpHHRF-b32n0yrTqC44.png",
        },
      },
      trophies: 1126,
      versusTrophies: 1485,
      clanRank: 28,
      previousClanRank: 28,
      donations: 0,
      donationsReceived: 0,
    },
  ],
  labels: [
    {
      id: 56000000,
      name: "Clan Wars",
      iconUrls: {
        small:
          "https://api-assets.clashofclans.com/labels/64/lXaIuoTlfoNOY5fKcQGeT57apz1KFWkN9-raxqIlMbE.png",
        medium:
          "https://api-assets.clashofclans.com/labels/128/lXaIuoTlfoNOY5fKcQGeT57apz1KFWkN9-raxqIlMbE.png",
      },
    },
    {
      id: 56000001,
      name: "Clan War League",
      iconUrls: {
        small:
          "https://api-assets.clashofclans.com/labels/64/5w60_3bdtYUe9SM6rkxBRyV_8VvWw_jTlDS5ieU3IsI.png",
        medium:
          "https://api-assets.clashofclans.com/labels/128/5w60_3bdtYUe9SM6rkxBRyV_8VvWw_jTlDS5ieU3IsI.png",
      },
    },
    {
      id: 56000004,
      name: "Clan Games",
      iconUrls: {
        small:
          "https://api-assets.clashofclans.com/labels/64/7qU7tQGERiVITVG0CPFov1-BnFldu4bMN2gXML5bLIU.png",
        medium:
          "https://api-assets.clashofclans.com/labels/128/7qU7tQGERiVITVG0CPFov1-BnFldu4bMN2gXML5bLIU.png",
      },
    },
  ],
  requiredVersusTrophies: 1500,
  requiredTownhallLevel: 12,
  clanCapital: {
    capitalHallLevel: 5,
    districts: [
      {
        id: 70000000,
        name: "Capital Peak",
        districtHallLevel: 5,
      },
      {
        id: 70000001,
        name: "Barbarian Camp",
        districtHallLevel: 2,
      },
      {
        id: 70000002,
        name: "Wizard Valley",
        districtHallLevel: 2,
      },
      {
        id: 70000003,
        name: "Balloon Lagoon",
        districtHallLevel: 1,
      },
      {
        id: 70000004,
        name: "Builder's Workshop",
        districtHallLevel: 1,
      },
    ],
  },
  chatLanguage: {
    id: 75000011,
    name: "한국어",
    languageCode: "KR",
  },
};
