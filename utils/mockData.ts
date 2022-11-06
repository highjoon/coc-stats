import { APIClan, APIPlayer, APIPlayerItem } from "types/api";
import { APIClanRankingList } from "../types/api";

export const mockPlayerData: APIPlayer = {
  tag: "#29LVR2YUV",
  name: "Ramos",
  townHallLevel: 15,
  townHallWeaponLevel: 2,
  expLevel: 185,
  trophies: 4852,
  bestTrophies: 4874,
  warStars: 539,
  attackWins: 17,
  defenseWins: 3,
  builderHallLevel: 9,
  versusTrophies: 4739,
  bestVersusTrophies: 4998,
  versusBattleWins: 1837,
  role: "coLeader",
  warPreference: "in",
  donations: 1033,
  donationsReceived: 575,
  clanCapitalContributions: 299074,
  clan: {
    tag: "#2QRUG0P9V",
    name: "The Ring",
    clanLevel: 5,
    badgeUrls: {
      small:
        "https://api-assets.clashofclans.com/badges/70/gEsehsswwyDXPdPs68jt2s2JrV-zCOJ_ooRlPS5bxbE.png",
      large:
        "https://api-assets.clashofclans.com/badges/512/gEsehsswwyDXPdPs68jt2s2JrV-zCOJ_ooRlPS5bxbE.png",
      medium:
        "https://api-assets.clashofclans.com/badges/200/gEsehsswwyDXPdPs68jt2s2JrV-zCOJ_ooRlPS5bxbE.png",
    },
  },
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
  achievements: [
    {
      name: "Bigger Coffers",
      stars: 3,
      value: 15,
      target: 10,
      info: "Upgrade a Gold Storage to level 10",
      completionInfo: "Highest Gold Storage level: 15",
      village: "home",
    },
    {
      name: "Get those Goblins!",
      stars: 3,
      value: 225,
      target: 150,
      info: "Win 150 Stars on the Campaign Map",
      completionInfo: "Stars in Campaign Map: 225",
      village: "home",
    },
    {
      name: "Bigger & Better",
      stars: 3,
      value: 15,
      target: 8,
      info: "Upgrade Town Hall to level 8",
      completionInfo: "Current Town Hall level: 15",
      village: "home",
    },
    {
      name: "Nice and Tidy",
      stars: 3,
      value: 4090,
      target: 500,
      info: "Remove 500 obstacles (trees, rocks, bushes)",
      completionInfo: "Total obstacles removed: 4090",
      village: "home",
    },
    {
      name: "Discover New Troops",
      stars: 3,
      value: 1,
      target: 1,
      info: "Unlock Dragon in the Barracks",
      completionInfo: null,
      village: "home",
    },
    {
      name: "Gold Grab",
      stars: 3,
      value: 1245010897,
      target: 100000000,
      info: "Steal 100000000 gold",
      completionInfo: "Total Gold looted: 1245010897",
      village: "home",
    },
    {
      name: "Elixir Escapade",
      stars: 3,
      value: 1265907345,
      target: 100000000,
      info: "Steal 100000000 elixir",
      completionInfo: "Total Elixir looted: 1265907345",
      village: "home",
    },
    {
      name: "Sweet Victory!",
      stars: 3,
      value: 4874,
      target: 1250,
      info: "Achieve a total of 1250 trophies in Multiplayer battles",
      completionInfo: "Trophy record: 4874",
      village: "home",
    },
    {
      name: "Empire Builder",
      stars: 3,
      value: 10,
      target: 4,
      info: "Upgrade Clan Castle to level 4",
      completionInfo: "Current Clan Castle level: 10",
      village: "home",
    },
    {
      name: "Wall Buster",
      stars: 3,
      value: 42272,
      target: 2000,
      info: "Destroy 2000 Walls in Multiplayer battles",
      completionInfo: "Total walls destroyed: 42272",
      village: "home",
    },
    {
      name: "Humiliator",
      stars: 2,
      value: 1968,
      target: 2000,
      info: "Destroy 2000 Town Halls in Multiplayer battles",
      completionInfo: "Total Town Halls destroyed: 1968",
      village: "home",
    },
    {
      name: "Union Buster",
      stars: 3,
      value: 7839,
      target: 2500,
      info: "Destroy 2500 Builder's Huts in Multiplayer battles",
      completionInfo: "Total Builder's Huts destroyed: 7839",
      village: "home",
    },
    {
      name: "Conqueror",
      stars: 2,
      value: 2347,
      target: 5000,
      info: "Win 5000 Multiplayer battles",
      completionInfo: "Total multiplayer battles won: 2347",
      village: "home",
    },
    {
      name: "Unbreakable",
      stars: 2,
      value: 520,
      target: 5000,
      info: "Successfully defend against 5000 attacks",
      completionInfo: "Total defenses won: 520",
      village: "home",
    },
    {
      name: "Friend in Need",
      stars: 3,
      value: 43933,
      target: 25000,
      info: "Donate 25000 capacity worth of reinforcements to Clanmates",
      completionInfo: "Total capacity donated: 43933",
      village: "home",
    },
    {
      name: "Mortar Mauler",
      stars: 3,
      value: 6795,
      target: 5000,
      info: "Destroy 5000 Mortars in Multiplayer battles",
      completionInfo: "Total Mortars destroyed: 6795",
      village: "home",
    },
    {
      name: "Heroic Heist",
      stars: 3,
      value: 9730477,
      target: 1000000,
      info: "Steal 1000000 Dark Elixir",
      completionInfo: "Total Dark Elixir looted: 9730477",
      village: "home",
    },
    {
      name: "League All-Star",
      stars: 3,
      value: 21,
      target: 1,
      info: "Become a Champion!",
      completionInfo: null,
      village: "home",
    },
    {
      name: "X-Bow Exterminator",
      stars: 3,
      value: 4228,
      target: 2500,
      info: "Destroy 2500 X-Bows in Multiplayer battles",
      completionInfo: "Total X-Bows destroyed: 4228",
      village: "home",
    },
    {
      name: "Firefighter",
      stars: 2,
      value: 2401,
      target: 5000,
      info: "Destroy 5000 Inferno Towers in Multiplayer battles",
      completionInfo: "Total Inferno Towers destroyed: 2401",
      village: "home",
    },
    {
      name: "War Hero",
      stars: 2,
      value: 539,
      target: 1000,
      info: "Score 1000 Stars for your clan in Clan War battles",
      completionInfo: "Total Stars scored for clan in Clan War battles: 539",
      village: "home",
    },
    {
      name: "Clan War Wealth",
      stars: 3,
      value: 678705324,
      target: 100000000,
      info: "Collect 100000000 gold from the Clan Castle",
      completionInfo: "Total gold collected in Clan War bonuses: 678705324",
      village: "home",
    },
    {
      name: "Anti-Artillery",
      stars: 2,
      value: 865,
      target: 2000,
      info: "Destroy 2000 Eagle Artilleries in Multiplayer battles",
      completionInfo: "Total Eagle Artilleries destroyed: 865",
      village: "home",
    },
    {
      name: "Sharing is caring",
      stars: 1,
      value: 1640,
      target: 2000,
      info: "Donate 2000 spell storage capacity worth of spells",
      completionInfo: "Total spell capacity donated: 1640",
      village: "home",
    },
    {
      name: "Keep Your Account Safe!",
      stars: 0,
      value: 0,
      target: 1,
      info: "Protect your village by connecting to a social network",
      completionInfo: "Completed!",
      village: "home",
    },
    {
      name: "Master Engineering",
      stars: 3,
      value: 9,
      target: 8,
      info: "Upgrade Builder Hall to level 8",
      completionInfo: "Current Builder Hall level: 9",
      village: "builderBase",
    },
    {
      name: "Next Generation Model",
      stars: 3,
      value: 1,
      target: 1,
      info: "Unlock Super P.E.K.K.A in the Builder Barracks",
      completionInfo: null,
      village: "builderBase",
    },
    {
      name: "Un-Build It",
      stars: 3,
      value: 2532,
      target: 2000,
      info: "Destroy 2000 Builder Halls in Versus battles",
      completionInfo: "Total Builder Halls destroyed: 2532",
      village: "builderBase",
    },
    {
      name: "Champion Builder",
      stars: 3,
      value: 4998,
      target: 3000,
      info: "Achieve a total of 3000 trophies in Versus battles",
      completionInfo: "Versus Trophy record: 4998",
      village: "builderBase",
    },
    {
      name: "High Gear",
      stars: 3,
      value: 3,
      target: 3,
      info: "Gear Up 3 buildings using the Master Builder",
      completionInfo: "Total buildings geared up: 3",
      village: "builderBase",
    },
    {
      name: "Hidden Treasures",
      stars: 3,
      value: 1,
      target: 1,
      info: "Rebuild Battle Machine",
      completionInfo: null,
      village: "builderBase",
    },
    {
      name: "Games Champion",
      stars: 2,
      value: 56225,
      target: 100000,
      info: "Earn 100000 points in Clan Games",
      completionInfo: "Total Clan Games points: 56225",
      village: "home",
    },
    {
      name: "Dragon Slayer",
      stars: 1,
      value: 1,
      target: 1,
      info: "Slay the Giant Dragon",
      completionInfo: null,
      village: "home",
    },
    {
      name: "War League Legend",
      stars: 2,
      value: 148,
      target: 250,
      info: "Score 250 Stars for your clan in War League battles",
      completionInfo: "Total Stars scored for clan in War League battles: 148",
      village: "home",
    },
    {
      name: "Keep Your Account Safe!",
      stars: 0,
      value: 0,
      target: 1,
      info: "Connect your account to Supercell ID for safe keeping.",
      completionInfo: "Completed!",
      village: "home",
    },
    {
      name: "Well Seasoned",
      stars: 3,
      value: 75110,
      target: 50000,
      info: "Earn 50000 points in Season Challenges",
      completionInfo: "Total Season Challenges points: 75110",
      village: "home",
    },
    {
      name: "Shattered and Scattered",
      stars: 2,
      value: 588,
      target: 4000,
      info: "Destroy 4000 Scattershots in Multiplayer battles",
      completionInfo: "Total Scattershots destroyed: 588",
      village: "home",
    },
    {
      name: "Not So Easy This Time",
      stars: 2,
      value: 847,
      target: 2000,
      info: "Destroy 2000 weaponized Town Halls in Multiplayer battles",
      completionInfo: "Weaponized Town Halls destroyed: 847",
      village: "home",
    },
    {
      name: "Bust This!",
      stars: 2,
      value: 461,
      target: 2500,
      info: "Destroy 2500 weaponized Builder's Huts in Multiplayer battles",
      completionInfo: "Total weaponized Builder's Huts destroyed: 461",
      village: "home",
    },
    {
      name: "Superb Work",
      stars: 1,
      value: 96,
      target: 100,
      info: "Boost a Super Troop 100 times",
      completionInfo: "Total times Super Troops boosted: 96",
      village: "home",
    },
    {
      name: "Siege Sharer",
      stars: 1,
      value: 359,
      target: 1000,
      info: "Donate 1000 Siege Machines",
      completionInfo: "Total Siege Machines donated: 359",
      village: "home",
    },
    {
      name: "Aggressive Capitalism",
      stars: 1,
      value: 172020,
      target: 250000,
      info: "Loot 250000 Capital Gold during Raid attacks",
      completionInfo: "Total Capital Gold looted: 172020",
      village: "home",
    },
    {
      name: "Most Valuable Clanmate",
      stars: 1,
      value: 299074,
      target: 500000,
      info: "Contribute 500000 Capital Gold to upgrades in the Clan Capital",
      completionInfo: "Total Capital Gold contributed: 299074",
      village: "home",
    },
  ],
  versusBattleWinCount: 1837,
  labels: [
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
  ],
  troops: [
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
    {
      name: "Yeti",
      level: 4,
      maxLevel: 4,
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
      name: "Ice Golem",
      level: 5,
      maxLevel: 6,
      village: "home",
    },
    {
      name: "Electro Dragon",
      level: 6,
      maxLevel: 6,
      village: "home",
    },
    {
      name: "Stone Slammer",
      level: 2,
      maxLevel: 4,
      village: "home",
    },
    {
      name: "Inferno Dragon",
      level: 1,
      maxLevel: 3,
      village: "home",
    },
    {
      name: "Super Valkyrie",
      level: 1,
      maxLevel: 3,
      village: "home",
    },
    {
      name: "Dragon Rider",
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
      name: "Hog Glider",
      level: 18,
      maxLevel: 18,
      village: "builderBase",
    },
    {
      name: "Siege Barracks",
      level: 1,
      maxLevel: 4,
      village: "home",
    },
    {
      name: "Ice Hound",
      level: 1,
      maxLevel: 2,
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
      name: "Headhunter",
      level: 2,
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
      name: "Log Launcher",
      level: 4,
      maxLevel: 4,
      village: "home",
    },
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
  ],
  heroes: [
    {
      name: "Barbarian King",
      level: 63,
      maxLevel: 85,
      village: "home",
    },
    {
      name: "Archer Queen",
      level: 76,
      maxLevel: 85,
      village: "home",
    },
    {
      name: "Grand Warden",
      level: 55,
      maxLevel: 60,
      village: "home",
    },
    {
      name: "Battle Machine",
      level: 30,
      maxLevel: 30,
      village: "builderBase",
    },
    {
      name: "Royal Champion",
      level: 21,
      maxLevel: 35,
      village: "home",
    },
  ],
  spells: [
    {
      name: "Lightning Spell",
      level: 9,
      maxLevel: 10,
      village: "home",
    },
    {
      name: "Healing Spell",
      level: 8,
      maxLevel: 9,
      village: "home",
    },
    {
      name: "Rage Spell",
      level: 6,
      maxLevel: 6,
      village: "home",
    },
    {
      name: "Jump Spell",
      level: 4,
      maxLevel: 5,
      village: "home",
    },
    {
      name: "Freeze Spell",
      level: 7,
      maxLevel: 7,
      village: "home",
    },
    {
      name: "Poison Spell",
      level: 5,
      maxLevel: 9,
      village: "home",
    },
    {
      name: "Earthquake Spell",
      level: 5,
      maxLevel: 5,
      village: "home",
    },
    {
      name: "Haste Spell",
      level: 5,
      maxLevel: 5,
      village: "home",
    },
    {
      name: "Clone Spell",
      level: 7,
      maxLevel: 7,
      village: "home",
    },
    {
      name: "Skeleton Spell",
      level: 3,
      maxLevel: 7,
      village: "home",
    },
    {
      name: "Bat Spell",
      level: 6,
      maxLevel: 6,
      village: "home",
    },
    {
      name: "Invisibility Spell",
      level: 4,
      maxLevel: 4,
      village: "home",
    },
  ],
};

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

export const mockClansRankData: APIClanRankingList = {
  items: [
    {
      tag: "#R988RC2L",
      name: "파밍 모임",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/SIXC5z1GKZnZxxYnVUUZBuSUgz-zO5X5CosVZL7PiAw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/SIXC5z1GKZnZxxYnVUUZBuSUgz-zO5X5CosVZL7PiAw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/SIXC5z1GKZnZxxYnVUUZBuSUgz-zO5X5CosVZL7PiAw.png",
      },
      clanLevel: 24,
      members: 50,
      clanPoints: 52411,
      rank: 1,
      previousRank: 1,
    },
    {
      tag: "#QYUQJQ2V",
      name: "필승!",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/gIQBrFNZb598YXDUwqwVSyKqaLIhb3N9q29RhSA5j54.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/gIQBrFNZb598YXDUwqwVSyKqaLIhb3N9q29RhSA5j54.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/gIQBrFNZb598YXDUwqwVSyKqaLIhb3N9q29RhSA5j54.png",
      },
      clanLevel: 23,
      members: 50,
      clanPoints: 51994,
      rank: 2,
      previousRank: 2,
    },
    {
      tag: "#8RCYGLJG",
      name: "사계",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/eXOdXJo-0fkYJ5ZGBIlOm6G_5b4lOqlSlPVBoz9zFfw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/eXOdXJo-0fkYJ5ZGBIlOm6G_5b4lOqlSlPVBoz9zFfw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/eXOdXJo-0fkYJ5ZGBIlOm6G_5b4lOqlSlPVBoz9zFfw.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 51987,
      rank: 3,
      previousRank: 3,
    },
    {
      tag: "#2209J00Y",
      name: "무한도전",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/KH3jmw4Vh0Wyyf4-SFSq9MOmxpd-AeZEQmVcU5uAUuc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/KH3jmw4Vh0Wyyf4-SFSq9MOmxpd-AeZEQmVcU5uAUuc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/KH3jmw4Vh0Wyyf4-SFSq9MOmxpd-AeZEQmVcU5uAUuc.png",
      },
      clanLevel: 28,
      members: 48,
      clanPoints: 51646,
      rank: 4,
      previousRank: 4,
    },
    {
      tag: "#P899ULC9",
      name: "더 레전드",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/3krKDT5iCH7AFiH48VMmAKoTgKxhGvYyzA1YFx4KKiQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/3krKDT5iCH7AFiH48VMmAKoTgKxhGvYyzA1YFx4KKiQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/3krKDT5iCH7AFiH48VMmAKoTgKxhGvYyzA1YFx4KKiQ.png",
      },
      clanLevel: 29,
      members: 49,
      clanPoints: 51392,
      rank: 5,
      previousRank: 5,
    },
    {
      tag: "#2YGYULL",
      name: "추방자 연맹",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/xSKc9-rr39c7xI0IZlRfs0_maSKUOUBKhJk_m7T9b1U.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/xSKc9-rr39c7xI0IZlRfs0_maSKUOUBKhJk_m7T9b1U.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/xSKc9-rr39c7xI0IZlRfs0_maSKUOUBKhJk_m7T9b1U.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 51353,
      rank: 6,
      previousRank: 6,
    },
    {
      tag: "#QL09JLLU",
      name: "즐기면서 하자^^",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/rZXi_J0JyBmXo328SJPOAf9PHUaCikYJXcZbe869Bx8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/rZXi_J0JyBmXo328SJPOAf9PHUaCikYJXcZbe869Bx8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/rZXi_J0JyBmXo328SJPOAf9PHUaCikYJXcZbe869Bx8.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 51250,
      rank: 7,
      previousRank: 7,
    },
    {
      tag: "#P82CUJUL",
      name: "소중한인연",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/BHYg7iv5UQhXjXAlxB3SNK2YUSpd_lxg3lZg0E01w9o.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/BHYg7iv5UQhXjXAlxB3SNK2YUSpd_lxg3lZg0E01w9o.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/BHYg7iv5UQhXjXAlxB3SNK2YUSpd_lxg3lZg0E01w9o.png",
      },
      clanLevel: 30,
      members: 50,
      clanPoints: 50990,
      rank: 8,
      previousRank: 8,
    },
    {
      tag: "#88PRL0YQ",
      name: "차카게 살자",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/lxQdj4sQ2iItR0Bg53NUYhHS61W5WJqCXRnV73cobJc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/lxQdj4sQ2iItR0Bg53NUYhHS61W5WJqCXRnV73cobJc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/lxQdj4sQ2iItR0Bg53NUYhHS61W5WJqCXRnV73cobJc.png",
      },
      clanLevel: 28,
      members: 49,
      clanPoints: 50851,
      rank: 9,
      previousRank: 9,
    },
    {
      tag: "#L00R0PU",
      name: "KOREA TEAM",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/kyiBBgXAncgoPrdKQkUpB7adcaSqKBv0ghcsxh-aSX0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/kyiBBgXAncgoPrdKQkUpB7adcaSqKBv0ghcsxh-aSX0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/kyiBBgXAncgoPrdKQkUpB7adcaSqKBv0ghcsxh-aSX0.png",
      },
      clanLevel: 24,
      members: 50,
      clanPoints: 50545,
      rank: 10,
      previousRank: 10,
    },
    {
      tag: "#PVY99RYR",
      name: "파밍 약탈",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/yCGHM04rgnVjQeZ6Xr0ZFeVv_FVvmJSnGzi1HxG6Zmw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/yCGHM04rgnVjQeZ6Xr0ZFeVv_FVvmJSnGzi1HxG6Zmw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/yCGHM04rgnVjQeZ6Xr0ZFeVv_FVvmJSnGzi1HxG6Zmw.png",
      },
      clanLevel: 24,
      members: 50,
      clanPoints: 50359,
      rank: 11,
      previousRank: 11,
    },
    {
      tag: "#9L9RJGJU",
      name: "뿌셔뿌셔",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/EsgakM3PwTqxuW1FxvktnSlwZg3-_bRVjVML_AAvoos.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/EsgakM3PwTqxuW1FxvktnSlwZg3-_bRVjVML_AAvoos.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/EsgakM3PwTqxuW1FxvktnSlwZg3-_bRVjVML_AAvoos.png",
      },
      clanLevel: 25,
      members: 49,
      clanPoints: 50224,
      rank: 12,
      previousRank: 12,
    },
    {
      tag: "#8GRVVVPY",
      name: "직장인 놀이터",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Dbl2y8kL9PFiEO887aGLoTQ9hmK-HecqgEA12uWNDlQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Dbl2y8kL9PFiEO887aGLoTQ9hmK-HecqgEA12uWNDlQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Dbl2y8kL9PFiEO887aGLoTQ9hmK-HecqgEA12uWNDlQ.png",
      },
      clanLevel: 17,
      members: 50,
      clanPoints: 50136,
      rank: 13,
      previousRank: 13,
    },
    {
      tag: "#98GV8QRQ",
      name: "아줌마 군단",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/P4jqDjRQesO5xZwAtiJER2Gfgw3MGVGBBI8ws99GO3A.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/P4jqDjRQesO5xZwAtiJER2Gfgw3MGVGBBI8ws99GO3A.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/P4jqDjRQesO5xZwAtiJER2Gfgw3MGVGBBI8ws99GO3A.png",
      },
      clanLevel: 28,
      members: 48,
      clanPoints: 49992,
      rank: 14,
      previousRank: 14,
    },
    {
      tag: "#8JYY0JL8",
      name: "KORGem AGATE",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/6jkqjQ-maPU_OdHMUZbJShMFybtYe9GapcfxPP6wnFM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/6jkqjQ-maPU_OdHMUZbJShMFybtYe9GapcfxPP6wnFM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/6jkqjQ-maPU_OdHMUZbJShMFybtYe9GapcfxPP6wnFM.png",
      },
      clanLevel: 29,
      members: 49,
      clanPoints: 49912,
      rank: 15,
      previousRank: 15,
    },
    {
      tag: "#PPCCJ0CU",
      name: "Good_People",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/06LAH2kgWAjRka_oSCuD4cxzCI_vOm9Zt6DoxcnzznU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/06LAH2kgWAjRka_oSCuD4cxzCI_vOm9Zt6DoxcnzznU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/06LAH2kgWAjRka_oSCuD4cxzCI_vOm9Zt6DoxcnzznU.png",
      },
      clanLevel: 26,
      members: 41,
      clanPoints: 49824,
      rank: 16,
      previousRank: 16,
    },
    {
      tag: "#982JCPJU",
      name: "Heroes Korea",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/N-GwGMWeDAdb0nBtYS_dTE06ULLvoT-kUSArdQM0gC0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/N-GwGMWeDAdb0nBtYS_dTE06ULLvoT-kUSArdQM0gC0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/N-GwGMWeDAdb0nBtYS_dTE06ULLvoT-kUSArdQM0gC0.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 49732,
      rank: 17,
      previousRank: 17,
    },
    {
      tag: "#YYQJVYLQ",
      name: "COC함께해요",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/OMhztoVK2HXxsq__hA7ypb6ynYwy6aNgflAw-fHQpxg.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/OMhztoVK2HXxsq__hA7ypb6ynYwy6aNgflAw-fHQpxg.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/OMhztoVK2HXxsq__hA7ypb6ynYwy6aNgflAw-fHQpxg.png",
      },
      clanLevel: 22,
      members: 50,
      clanPoints: 49670,
      rank: 18,
      previousRank: 18,
    },
    {
      tag: "#PRGCY0R2",
      name: "잘생겼다",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/V_tjz5OeeTQcTu1EIW5WkNO2hzxzW0c3x-O2IsCBhLo.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/V_tjz5OeeTQcTu1EIW5WkNO2hzxzW0c3x-O2IsCBhLo.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/V_tjz5OeeTQcTu1EIW5WkNO2hzxzW0c3x-O2IsCBhLo.png",
      },
      clanLevel: 26,
      members: 43,
      clanPoints: 49618,
      rank: 19,
      previousRank: 19,
    },
    {
      tag: "#980QCLPY",
      name: "3분 0초",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/VzzNPnUooqpQsYihTSuie-NYZ5TfFvf-rl_WuaPnKtk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/VzzNPnUooqpQsYihTSuie-NYZ5TfFvf-rl_WuaPnKtk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/VzzNPnUooqpQsYihTSuie-NYZ5TfFvf-rl_WuaPnKtk.png",
      },
      clanLevel: 29,
      members: 49,
      clanPoints: 49605,
      rank: 20,
      previousRank: 21,
    },
    {
      tag: "#8RUVVLR9",
      name: "신세계",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/9-Np5lg_lLch2Pqgj6_FLYqMQApoXUHvIoXrw23rCXY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/9-Np5lg_lLch2Pqgj6_FLYqMQApoXUHvIoXrw23rCXY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/9-Np5lg_lLch2Pqgj6_FLYqMQApoXUHvIoXrw23rCXY.png",
      },
      clanLevel: 27,
      members: 48,
      clanPoints: 49515,
      rank: 21,
      previousRank: 20,
    },
    {
      tag: "#9VVJLV8V",
      name: "대한민국",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Ec4ZS4wNXeZyIebAl6c0FuVB91TRoF54g4q2WtBL8d8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Ec4ZS4wNXeZyIebAl6c0FuVB91TRoF54g4q2WtBL8d8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Ec4ZS4wNXeZyIebAl6c0FuVB91TRoF54g4q2WtBL8d8.png",
      },
      clanLevel: 27,
      members: 47,
      clanPoints: 49425,
      rank: 22,
      previousRank: 22,
    },
    {
      tag: "#2G0RJJYQ",
      name: "대구 클전매니아",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/LTJ378ocub9PmzNSnBg8Uv9APij234lSt9YJwluwY2M.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/LTJ378ocub9PmzNSnBg8Uv9APij234lSt9YJwluwY2M.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/LTJ378ocub9PmzNSnBg8Uv9APij234lSt9YJwluwY2M.png",
      },
      clanLevel: 31,
      members: 50,
      clanPoints: 49224,
      rank: 23,
      previousRank: 24,
    },
    {
      tag: "#RP22CQJV",
      name: "바른생활",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/sJ0LdemdDPqoIJZ59URnUP2M7A09Fu-TMXyXG17eLD0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/sJ0LdemdDPqoIJZ59URnUP2M7A09Fu-TMXyXG17eLD0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/sJ0LdemdDPqoIJZ59URnUP2M7A09Fu-TMXyXG17eLD0.png",
      },
      clanLevel: 25,
      members: 50,
      clanPoints: 49145,
      rank: 24,
      previousRank: 23,
    },
    {
      tag: "#2PYP2YUUP",
      name: "필승!!",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Lo_KUaF8RSG49i9q0zrF-P6VEi-IFAFsPyKOuetZA08.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Lo_KUaF8RSG49i9q0zrF-P6VEi-IFAFsPyKOuetZA08.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Lo_KUaF8RSG49i9q0zrF-P6VEi-IFAFsPyKOuetZA08.png",
      },
      clanLevel: 17,
      members: 50,
      clanPoints: 49125,
      rank: 25,
      previousRank: 25,
    },
    {
      tag: "#99RQQJVU",
      name: "아무나 같이해요",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/VRfG7PZkPDzBdV3tw9l4EkAdmQPYdywBkeC7lvgpHzI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/VRfG7PZkPDzBdV3tw9l4EkAdmQPYdywBkeC7lvgpHzI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/VRfG7PZkPDzBdV3tw9l4EkAdmQPYdywBkeC7lvgpHzI.png",
      },
      clanLevel: 28,
      members: 47,
      clanPoints: 49051,
      rank: 26,
      previousRank: 26,
    },
    {
      tag: "#RU0P9PV",
      name: "코리아 서울",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/WF2D_evp930B2c73Sy_fA0uOCvie-Y60pWkUTJZQG7M.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/WF2D_evp930B2c73Sy_fA0uOCvie-Y60pWkUTJZQG7M.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/WF2D_evp930B2c73Sy_fA0uOCvie-Y60pWkUTJZQG7M.png",
      },
      clanLevel: 25,
      members: 50,
      clanPoints: 49015,
      rank: 27,
      previousRank: 28,
    },
    {
      tag: "#8V800LGV",
      name: "핑크맘모스",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/GOYl68zeNw2IhETnhdOa19geE6gWXSbE9DchyS7ajR8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/GOYl68zeNw2IhETnhdOa19geE6gWXSbE9DchyS7ajR8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/GOYl68zeNw2IhETnhdOa19geE6gWXSbE9DchyS7ajR8.png",
      },
      clanLevel: 22,
      members: 46,
      clanPoints: 49006,
      rank: 28,
      previousRank: 27,
    },
    {
      tag: "#YUCYL0YU",
      name: "3040 딸기우유",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/F8lEyISrhwfILzZUOvoTEJt36sS6KuwGO0cZWOJZm1w.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/F8lEyISrhwfILzZUOvoTEJt36sS6KuwGO0cZWOJZm1w.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/F8lEyISrhwfILzZUOvoTEJt36sS6KuwGO0cZWOJZm1w.png",
      },
      clanLevel: 24,
      members: 49,
      clanPoints: 48945,
      rank: 29,
      previousRank: 29,
    },
    {
      tag: "#R9PJ08LQ",
      name: "편안한 길드",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/4KoRkc-Ar0vLCWLuISIFihrw4rrrM90GyMex-J_IyTU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/4KoRkc-Ar0vLCWLuISIFihrw4rrrM90GyMex-J_IyTU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/4KoRkc-Ar0vLCWLuISIFihrw4rrrM90GyMex-J_IyTU.png",
      },
      clanLevel: 25,
      members: 45,
      clanPoints: 48885,
      rank: 30,
      previousRank: 41,
    },
    {
      tag: "#P2LUGV2G",
      name: "STCOM",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/gGDMEANgujhIktSgbe2TSXazjQmmSQObRGn4040terw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/gGDMEANgujhIktSgbe2TSXazjQmmSQObRGn4040terw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/gGDMEANgujhIktSgbe2TSXazjQmmSQObRGn4040terw.png",
      },
      clanLevel: 29,
      members: 50,
      clanPoints: 48874,
      rank: 31,
      previousRank: 30,
    },
    {
      tag: "#P2RCYL8Q",
      name: '진주 "직장인들의 수다방"',
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/jryvgbascScKkuzsYWnwA_Nr2c1Sx0wonWEX_FvXNPI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/jryvgbascScKkuzsYWnwA_Nr2c1Sx0wonWEX_FvXNPI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/jryvgbascScKkuzsYWnwA_Nr2c1Sx0wonWEX_FvXNPI.png",
      },
      clanLevel: 23,
      members: 47,
      clanPoints: 48775,
      rank: 32,
      previousRank: 31,
    },
    {
      tag: "#9UGYGJ0V",
      name: "대한민국7080",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/eofjhmxiaZ8_gYU469za0BL_pNNsDsaX6RtkZ1NQKdM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/eofjhmxiaZ8_gYU469za0BL_pNNsDsaX6RtkZ1NQKdM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/eofjhmxiaZ8_gYU469za0BL_pNNsDsaX6RtkZ1NQKdM.png",
      },
      clanLevel: 22,
      members: 44,
      clanPoints: 48726,
      rank: 33,
      previousRank: 38,
    },
    {
      tag: "#9PYJYY9Y",
      name: "나눔의 모임",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/vc-fa5SFcAuvYEXmBwCzpLvMNgneijBtAwaekxqB5oM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/vc-fa5SFcAuvYEXmBwCzpLvMNgneijBtAwaekxqB5oM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/vc-fa5SFcAuvYEXmBwCzpLvMNgneijBtAwaekxqB5oM.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 48708,
      rank: 34,
      previousRank: 32,
    },
    {
      tag: "#22JQG82GY",
      name: "CHAOS-혼돈",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/cI6iSPw67RAavtAaX2kSluFRdd1ScMDoqPiUVbTxzEA.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/cI6iSPw67RAavtAaX2kSluFRdd1ScMDoqPiUVbTxzEA.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/cI6iSPw67RAavtAaX2kSluFRdd1ScMDoqPiUVbTxzEA.png",
      },
      clanLevel: 22,
      members: 48,
      clanPoints: 48667,
      rank: 35,
      previousRank: 35,
    },
    {
      tag: "#2QP80GPG",
      name: "40대쉼터",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/7FFABxyekDuCgxxmODv_7orOH--yVZzm5A1kSAmQFFo.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/7FFABxyekDuCgxxmODv_7orOH--yVZzm5A1kSAmQFFo.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/7FFABxyekDuCgxxmODv_7orOH--yVZzm5A1kSAmQFFo.png",
      },
      clanLevel: 26,
      members: 50,
      clanPoints: 48620,
      rank: 36,
      previousRank: 36,
    },
    {
      tag: "#2L22RGUY",
      name: "굿프렌즈",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Hfo8g8fM6wYFOsYKcc-kq6KOzD9grKuBpC-n2GMdV5E.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Hfo8g8fM6wYFOsYKcc-kq6KOzD9grKuBpC-n2GMdV5E.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Hfo8g8fM6wYFOsYKcc-kq6KOzD9grKuBpC-n2GMdV5E.png",
      },
      clanLevel: 27,
      members: 42,
      clanPoints: 48619,
      rank: 37,
      previousRank: 34,
    },
    {
      tag: "#QYV9JGJY",
      name: "조용한클랜2",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/_helDUsQHYasd7wW3yc-_-VUfgsSARVZ-n62lj3P72M.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/_helDUsQHYasd7wW3yc-_-VUfgsSARVZ-n62lj3P72M.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/_helDUsQHYasd7wW3yc-_-VUfgsSARVZ-n62lj3P72M.png",
      },
      clanLevel: 20,
      members: 46,
      clanPoints: 48608,
      rank: 38,
      previousRank: 33,
    },
    {
      tag: "#2RUV28",
      name: "전주",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/jBL_NmmHArnQVSCJD1fdevzdn5SI4cAMq-h2WbWtTq4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/jBL_NmmHArnQVSCJD1fdevzdn5SI4cAMq-h2WbWtTq4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/jBL_NmmHArnQVSCJD1fdevzdn5SI4cAMq-h2WbWtTq4.png",
      },
      clanLevel: 26,
      members: 47,
      clanPoints: 48584,
      rank: 39,
      previousRank: 42,
    },
    {
      tag: "#J8Y9JUC",
      name: "Dotal",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/eVo9I552eFRCJaSd20CNEjW1COrBC5YULrwhKY01Tv0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/eVo9I552eFRCJaSd20CNEjW1COrBC5YULrwhKY01Tv0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/eVo9I552eFRCJaSd20CNEjW1COrBC5YULrwhKY01Tv0.png",
      },
      clanLevel: 23,
      members: 46,
      clanPoints: 48570,
      rank: 40,
      previousRank: 37,
    },
    {
      tag: "#YRLQGQUY",
      name: "레드카펫:썸남썸녀",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/4nEmHBGk3O1U3tE89ngg5urNHE9SMwNFumq3csflKf4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/4nEmHBGk3O1U3tE89ngg5urNHE9SMwNFumq3csflKf4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/4nEmHBGk3O1U3tE89ngg5urNHE9SMwNFumq3csflKf4.png",
      },
      clanLevel: 28,
      members: 49,
      clanPoints: 48562,
      rank: 41,
      previousRank: 45,
    },
    {
      tag: "#RRRQGQP",
      name: "아름다운 마을",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/FLuBzluRbD6QdbMZV8WMuC_AfIoDrft74nEC0V8aoBc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/FLuBzluRbD6QdbMZV8WMuC_AfIoDrft74nEC0V8aoBc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/FLuBzluRbD6QdbMZV8WMuC_AfIoDrft74nEC0V8aoBc.png",
      },
      clanLevel: 24,
      members: 47,
      clanPoints: 48546,
      rank: 42,
      previousRank: 43,
    },
    {
      tag: "#PR8Y9LG",
      name: "도시정벌",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/tQIzt_vyqt9Wp68L6nCZSbTMrR8FqF0SQUoY-jnXf1I.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/tQIzt_vyqt9Wp68L6nCZSbTMrR8FqF0SQUoY-jnXf1I.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/tQIzt_vyqt9Wp68L6nCZSbTMrR8FqF0SQUoY-jnXf1I.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 48478,
      rank: 43,
      previousRank: 40,
    },
    {
      tag: "#PRPC0CLU",
      name: "서울 직장인 놀이터",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/PgEpADTsfF-rzKUg64xXVUEYg6bDAlSmV7M1Qp07BbQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/PgEpADTsfF-rzKUg64xXVUEYg6bDAlSmV7M1Qp07BbQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/PgEpADTsfF-rzKUg64xXVUEYg6bDAlSmV7M1Qp07BbQ.png",
      },
      clanLevel: 25,
      members: 47,
      clanPoints: 48418,
      rank: 44,
      previousRank: 44,
    },
    {
      tag: "#2VPL8VYR",
      name: "3040",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/nScWsFjUpre0NeUhQLDybVFcoparHPdbo9eN9zNyfc8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/nScWsFjUpre0NeUhQLDybVFcoparHPdbo9eN9zNyfc8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/nScWsFjUpre0NeUhQLDybVFcoparHPdbo9eN9zNyfc8.png",
      },
      clanLevel: 20,
      members: 46,
      clanPoints: 48365,
      rank: 45,
      previousRank: 49,
    },
    {
      tag: "#8822CJP8",
      name: "자영업자들",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/h9UbmSZNly1er7-GrsvOExwMUEdrcyXnyNahPmDK4yQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/h9UbmSZNly1er7-GrsvOExwMUEdrcyXnyNahPmDK4yQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/h9UbmSZNly1er7-GrsvOExwMUEdrcyXnyNahPmDK4yQ.png",
      },
      clanLevel: 25,
      members: 46,
      clanPoints: 48363,
      rank: 46,
      previousRank: 50,
    },
    {
      tag: "#9PJU2PQP",
      name: "화이트홀",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/naPosL7kcTQmpcRwwg3i326IR7GON4YjyiaOCCCwWDI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/naPosL7kcTQmpcRwwg3i326IR7GON4YjyiaOCCCwWDI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/naPosL7kcTQmpcRwwg3i326IR7GON4YjyiaOCCCwWDI.png",
      },
      clanLevel: 29,
      members: 50,
      clanPoints: 48361,
      rank: 47,
      previousRank: 48,
    },
    {
      tag: "#9VCP0Q90",
      name: "전진사령부",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/TRoDqAsaK7Etwf13rN3wewfEwLiAu81j12QDI6eRsA0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/TRoDqAsaK7Etwf13rN3wewfEwLiAu81j12QDI6eRsA0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/TRoDqAsaK7Etwf13rN3wewfEwLiAu81j12QDI6eRsA0.png",
      },
      clanLevel: 24,
      members: 46,
      clanPoints: 48352,
      rank: 48,
      previousRank: 46,
    },
    {
      tag: "#J29JQ9LG",
      name: "장미의미소",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/dYQEAPSs2euZR8bhiTbYRNMfIinlFRQRkjKjLFo6XiI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/dYQEAPSs2euZR8bhiTbYRNMfIinlFRQRkjKjLFo6XiI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/dYQEAPSs2euZR8bhiTbYRNMfIinlFRQRkjKjLFo6XiI.png",
      },
      clanLevel: 24,
      members: 47,
      clanPoints: 48300,
      rank: 49,
      previousRank: 53,
    },
    {
      tag: "#9LG9VVC9",
      name: "직장인3040",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/-VF14Ok4YO-WfPSquWYc9PgOfz8uKvVnANkVXOK1RkI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/-VF14Ok4YO-WfPSquWYc9PgOfz8uKvVnANkVXOK1RkI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/-VF14Ok4YO-WfPSquWYc9PgOfz8uKvVnANkVXOK1RkI.png",
      },
      clanLevel: 26,
      members: 47,
      clanPoints: 48274,
      rank: 50,
      previousRank: 39,
    },
    {
      tag: "#200LP90V",
      name: "화이트드래곤",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/6UQfGLPGk18y4uxjweLHOuJg9q4cCLRPtd9h-N24Iag.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/6UQfGLPGk18y4uxjweLHOuJg9q4cCLRPtd9h-N24Iag.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/6UQfGLPGk18y4uxjweLHOuJg9q4cCLRPtd9h-N24Iag.png",
      },
      clanLevel: 20,
      members: 46,
      clanPoints: 48271,
      rank: 51,
      previousRank: 55,
    },
    {
      tag: "#9PJ2VUPL",
      name: "인셉션",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/rrA9NZKBgBcN7kDf1P8Y19f0LNBciE1T1yHj4IYF_F8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/rrA9NZKBgBcN7kDf1P8Y19f0LNBciE1T1yHj4IYF_F8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/rrA9NZKBgBcN7kDf1P8Y19f0LNBciE1T1yHj4IYF_F8.png",
      },
      clanLevel: 25,
      members: 50,
      clanPoints: 48269,
      rank: 52,
      previousRank: 54,
    },
    {
      tag: "#9Q2G8VPL",
      name: "가온누리",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Mxvoa6WgBdxMhHkiBWaA8hMBrQjbFKHU3e8O0pxF74s.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Mxvoa6WgBdxMhHkiBWaA8hMBrQjbFKHU3e8O0pxF74s.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Mxvoa6WgBdxMhHkiBWaA8hMBrQjbFKHU3e8O0pxF74s.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 48267,
      rank: 53,
      previousRank: 52,
    },
    {
      tag: "#CUUPQY8L",
      name: "야반도주",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/nBlys36uIiYLgqr5rDZsgB6VKV9DIYkZ13Mxy-xjkac.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/nBlys36uIiYLgqr5rDZsgB6VKV9DIYkZ13Mxy-xjkac.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/nBlys36uIiYLgqr5rDZsgB6VKV9DIYkZ13Mxy-xjkac.png",
      },
      clanLevel: 27,
      members: 48,
      clanPoints: 48265,
      rank: 54,
      previousRank: 51,
    },
    {
      tag: "#9Q2CRCRJ",
      name: "7080 즈음에",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/yhlln5aaCo08nke9mzMj6xcASfgGXrX-8lZCoO7kfxs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/yhlln5aaCo08nke9mzMj6xcASfgGXrX-8lZCoO7kfxs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/yhlln5aaCo08nke9mzMj6xcASfgGXrX-8lZCoO7kfxs.png",
      },
      clanLevel: 25,
      members: 48,
      clanPoints: 48249,
      rank: 55,
      previousRank: 47,
    },
    {
      tag: "#8LPVPC2C",
      name: "부산",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/XdmbscePtpObIvyBvhND79hx7k14oKUtsP9PN1Zob9I.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/XdmbscePtpObIvyBvhND79hx7k14oKUtsP9PN1Zob9I.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/XdmbscePtpObIvyBvhND79hx7k14oKUtsP9PN1Zob9I.png",
      },
      clanLevel: 31,
      members: 47,
      clanPoints: 48115,
      rank: 56,
      previousRank: 56,
    },
    {
      tag: "#QJ09C8JR",
      name: "구름에달가듯",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/ONMaOpZdzH_k2fb5m5Ou-msM01WX_11KMMx8vXtxdFw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/ONMaOpZdzH_k2fb5m5Ou-msM01WX_11KMMx8vXtxdFw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/ONMaOpZdzH_k2fb5m5Ou-msM01WX_11KMMx8vXtxdFw.png",
      },
      clanLevel: 27,
      members: 46,
      clanPoints: 48084,
      rank: 57,
      previousRank: 58,
    },
    {
      tag: "#8RQ0QGUP",
      name: "원피스2",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/1AdpQ7rJ_O0G-k2gyYDJc94Q-t8Lb3lnYWtmj4yUdiE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/1AdpQ7rJ_O0G-k2gyYDJc94Q-t8Lb3lnYWtmj4yUdiE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/1AdpQ7rJ_O0G-k2gyYDJc94Q-t8Lb3lnYWtmj4yUdiE.png",
      },
      clanLevel: 28,
      members: 46,
      clanPoints: 48069,
      rank: 58,
      previousRank: 59,
    },
    {
      tag: "#928J9GCP",
      name: "대한민국•KOREA",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Sfq_hlK6EBqjt4u9umbdwjZKRXdvsSYiGNtnjiO5LiM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Sfq_hlK6EBqjt4u9umbdwjZKRXdvsSYiGNtnjiO5LiM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Sfq_hlK6EBqjt4u9umbdwjZKRXdvsSYiGNtnjiO5LiM.png",
      },
      clanLevel: 25,
      members: 47,
      clanPoints: 48053,
      rank: 59,
      previousRank: 61,
    },
    {
      tag: "#P8090YG",
      name: "망점으로 대동단결",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/33cJtWu9o6lNg9D_Sb6QaDlRelh1VoAXLzBCMaL9dMY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/33cJtWu9o6lNg9D_Sb6QaDlRelh1VoAXLzBCMaL9dMY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/33cJtWu9o6lNg9D_Sb6QaDlRelh1VoAXLzBCMaL9dMY.png",
      },
      clanLevel: 31,
      members: 48,
      clanPoints: 47987,
      rank: 60,
      previousRank: 62,
    },
    {
      tag: "#8LC2VL2U",
      name: "코리아",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/4mylEUKE5XJVTbbApVVCSJYxFTn6gwp_Jl3rVN2ZtLw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/4mylEUKE5XJVTbbApVVCSJYxFTn6gwp_Jl3rVN2ZtLw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/4mylEUKE5XJVTbbApVVCSJYxFTn6gwp_Jl3rVN2ZtLw.png",
      },
      clanLevel: 27,
      members: 40,
      clanPoints: 47984,
      rank: 61,
      previousRank: 63,
    },
    {
      tag: "#2PUJ22J0G",
      name: "전쟁의 여신",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/jmEJzeB9rH9Gu7rWJBNGsZzqsrRYEbfEFGFjYjzVKPY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/jmEJzeB9rH9Gu7rWJBNGsZzqsrRYEbfEFGFjYjzVKPY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/jmEJzeB9rH9Gu7rWJBNGsZzqsrRYEbfEFGFjYjzVKPY.png",
      },
      clanLevel: 19,
      members: 46,
      clanPoints: 47960,
      rank: 62,
      previousRank: 57,
    },
    {
      tag: "#90YVULPV",
      name: "미인천하",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/XYJFzL9z2Yue_JbfSrAw3yCw2MLeQqKM79PRuqfhjKM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/XYJFzL9z2Yue_JbfSrAw3yCw2MLeQqKM79PRuqfhjKM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/XYJFzL9z2Yue_JbfSrAw3yCw2MLeQqKM79PRuqfhjKM.png",
      },
      clanLevel: 26,
      members: 48,
      clanPoints: 47948,
      rank: 63,
      previousRank: 60,
    },
    {
      tag: "#LU9GLJ0Y",
      name: "18NOSA",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
      },
      clanLevel: 26,
      members: 49,
      clanPoints: 47936,
      rank: 64,
      previousRank: 64,
    },
    {
      tag: "#C98R29JP",
      name: "초보모임",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/foC3zH_RplgejAi1cs9oqkamcu9CuvNR-2jxX8CXWcM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/foC3zH_RplgejAi1cs9oqkamcu9CuvNR-2jxX8CXWcM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/foC3zH_RplgejAi1cs9oqkamcu9CuvNR-2jxX8CXWcM.png",
      },
      clanLevel: 17,
      members: 44,
      clanPoints: 47905,
      rank: 65,
      previousRank: 66,
    },
    {
      tag: "#899L0JV",
      name: "시크릿다이렉트코리아",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/utkEvC5eM9g-obV8qHWDTB_2kwn16WnIJ7LaHs1CA0o.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/utkEvC5eM9g-obV8qHWDTB_2kwn16WnIJ7LaHs1CA0o.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/utkEvC5eM9g-obV8qHWDTB_2kwn16WnIJ7LaHs1CA0o.png",
      },
      clanLevel: 24,
      members: 46,
      clanPoints: 47904,
      rank: 66,
      previousRank: 65,
    },
    {
      tag: "#U092LUV",
      name: "나 혼자 깐다",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/xiOTsrRFWJriW-pzj3rP948FrDRQ0e8fpTj3_lLTXZc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/xiOTsrRFWJriW-pzj3rP948FrDRQ0e8fpTj3_lLTXZc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/xiOTsrRFWJriW-pzj3rP948FrDRQ0e8fpTj3_lLTXZc.png",
      },
      clanLevel: 29,
      members: 44,
      clanPoints: 47854,
      rank: 67,
      previousRank: 68,
    },
    {
      tag: "#8VGY2R0G",
      name: "저랩",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/EwwR3wLstgb-avzJ6YwtM_lRVPVszJ6HJtvgS1LwCqk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/EwwR3wLstgb-avzJ6YwtM_lRVPVszJ6HJtvgS1LwCqk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/EwwR3wLstgb-avzJ6YwtM_lRVPVszJ6HJtvgS1LwCqk.png",
      },
      clanLevel: 25,
      members: 50,
      clanPoints: 47837,
      rank: 68,
      previousRank: 73,
    },
    {
      tag: "#2Y8QUGLQ",
      name: "아이리스",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/rCIVpmnrz4oK0Y3bK4YxSQLPXkCuK6WnvJn3-0p4KeE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/rCIVpmnrz4oK0Y3bK4YxSQLPXkCuK6WnvJn3-0p4KeE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/rCIVpmnrz4oK0Y3bK4YxSQLPXkCuK6WnvJn3-0p4KeE.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 47832,
      rank: 69,
      previousRank: 69,
    },
    {
      tag: "#90U8U2RU",
      name: "(주)한국",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/3LbbO5L6Lxylsqr_wyerFtk--ULU3L5_58pPJqOorSk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/3LbbO5L6Lxylsqr_wyerFtk--ULU3L5_58pPJqOorSk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/3LbbO5L6Lxylsqr_wyerFtk--ULU3L5_58pPJqOorSk.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 47829,
      rank: 70,
      previousRank: 72,
    },
    {
      tag: "#9UR8RYQJ",
      name: "노땅들의반란",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/_YNeCy-tVH-q_vQdMJ8td93sHuJoIZ5h9MsYAOjgktM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/_YNeCy-tVH-q_vQdMJ8td93sHuJoIZ5h9MsYAOjgktM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/_YNeCy-tVH-q_vQdMJ8td93sHuJoIZ5h9MsYAOjgktM.png",
      },
      clanLevel: 20,
      members: 50,
      clanPoints: 47793,
      rank: 71,
      previousRank: 71,
    },
    {
      tag: "#9C98GGPR",
      name: "광주",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/960cvr5p0KbPM2im2QLZkuIkyU6sFB82hfVm8L2ytmc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/960cvr5p0KbPM2im2QLZkuIkyU6sFB82hfVm8L2ytmc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/960cvr5p0KbPM2im2QLZkuIkyU6sFB82hfVm8L2ytmc.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 47783,
      rank: 72,
      previousRank: 76,
    },
    {
      tag: "#L20C2YUQ",
      name: "던힐",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/ZZPL9DI6V3DOfeuhyDuIqNb3B8mdX3yAz6Egukxrqes.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/ZZPL9DI6V3DOfeuhyDuIqNb3B8mdX3yAz6Egukxrqes.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/ZZPL9DI6V3DOfeuhyDuIqNb3B8mdX3yAz6Egukxrqes.png",
      },
      clanLevel: 16,
      members: 50,
      clanPoints: 47778,
      rank: 73,
      previousRank: 67,
    },
    {
      tag: "#UJ2YUJL0",
      name: "pentagram⭐️",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/ywKVnd52DTRyN_g9bLvle4OeRQq-ptnawbL_VT5DZfc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/ywKVnd52DTRyN_g9bLvle4OeRQq-ptnawbL_VT5DZfc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/ywKVnd52DTRyN_g9bLvle4OeRQq-ptnawbL_VT5DZfc.png",
      },
      clanLevel: 14,
      members: 50,
      clanPoints: 47769,
      rank: 74,
      previousRank: 77,
    },
    {
      tag: "#9UUYUV8R",
      name: "용인",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/67f9HaMHA9edRyjUoSVDtlO8M115hzgpzUB3AGBk_HE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/67f9HaMHA9edRyjUoSVDtlO8M115hzgpzUB3AGBk_HE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/67f9HaMHA9edRyjUoSVDtlO8M115hzgpzUB3AGBk_HE.png",
      },
      clanLevel: 16,
      members: 46,
      clanPoints: 47765,
      rank: 75,
      previousRank: 70,
    },
    {
      tag: "#PQRJPV9Y",
      name: "성인 4050",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/OXQkCV14huGlHI3A7ABMXcea8ybOOPe2GY_C2PtakIk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/OXQkCV14huGlHI3A7ABMXcea8ybOOPe2GY_C2PtakIk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/OXQkCV14huGlHI3A7ABMXcea8ybOOPe2GY_C2PtakIk.png",
      },
      clanLevel: 29,
      members: 49,
      clanPoints: 47753,
      rank: 76,
      previousRank: 74,
    },
    {
      tag: "#P90Y02YV",
      name: "3040 아지트",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/lAvsNvSouSEhX8MNOgV7ApcPA9T2BSCMRogMyiFReTM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/lAvsNvSouSEhX8MNOgV7ApcPA9T2BSCMRogMyiFReTM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/lAvsNvSouSEhX8MNOgV7ApcPA9T2BSCMRogMyiFReTM.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 47686,
      rank: 77,
      previousRank: 78,
    },
    {
      tag: "#88CU89JR",
      name: "happy korea",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/-xIz1bhKSu8WxsVT5JZZ9Kg6G7T-1XCtPEWIFlyMY3w.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/-xIz1bhKSu8WxsVT5JZZ9Kg6G7T-1XCtPEWIFlyMY3w.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/-xIz1bhKSu8WxsVT5JZZ9Kg6G7T-1XCtPEWIFlyMY3w.png",
      },
      clanLevel: 25,
      members: 46,
      clanPoints: 47684,
      rank: 78,
      previousRank: 75,
    },
    {
      tag: "#YQRP9Q8J",
      name: "대전 금산",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/0EeQyWNDMQsePn-3mKgxC3jlOKQezAXS6D1FkBq461Y.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/0EeQyWNDMQsePn-3mKgxC3jlOKQezAXS6D1FkBq461Y.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/0EeQyWNDMQsePn-3mKgxC3jlOKQezAXS6D1FkBq461Y.png",
      },
      clanLevel: 27,
      members: 47,
      clanPoints: 47674,
      rank: 79,
      previousRank: 81,
    },
    {
      tag: "#PR8RG8Q8",
      name: "2015.08.23",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/F1lhG9ZcbaserQzi_Fj8QrEd1jIHHI1QFiPHvi_7hE4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/F1lhG9ZcbaserQzi_Fj8QrEd1jIHHI1QFiPHvi_7hE4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/F1lhG9ZcbaserQzi_Fj8QrEd1jIHHI1QFiPHvi_7hE4.png",
      },
      clanLevel: 28,
      members: 47,
      clanPoints: 47634,
      rank: 80,
      previousRank: 80,
    },
    {
      tag: "#P0J8JCCQ",
      name: "한국",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/4nEmHBGk3O1U3tE89ngg5urNHE9SMwNFumq3csflKf4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/4nEmHBGk3O1U3tE89ngg5urNHE9SMwNFumq3csflKf4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/4nEmHBGk3O1U3tE89ngg5urNHE9SMwNFumq3csflKf4.png",
      },
      clanLevel: 28,
      members: 42,
      clanPoints: 47626,
      rank: 81,
      previousRank: 85,
    },
    {
      tag: "#8PUR99CL",
      name: "부산",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Z7wqz_c-8VIlk1k3ItDkjKu-LIjVaf-z76kwQITJRMs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Z7wqz_c-8VIlk1k3ItDkjKu-LIjVaf-z76kwQITJRMs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Z7wqz_c-8VIlk1k3ItDkjKu-LIjVaf-z76kwQITJRMs.png",
      },
      clanLevel: 28,
      members: 46,
      clanPoints: 47621,
      rank: 82,
      previousRank: 89,
    },
    {
      tag: "#GQ8Y2JG",
      name: "매니아",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/NNjWLQoqrJz31RTmxhHKFKqNFSVafks3HsZF0e8JPuw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/NNjWLQoqrJz31RTmxhHKFKqNFSVafks3HsZF0e8JPuw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/NNjWLQoqrJz31RTmxhHKFKqNFSVafks3HsZF0e8JPuw.png",
      },
      clanLevel: 28,
      members: 48,
      clanPoints: 47611,
      rank: 83,
      previousRank: 84,
    },
    {
      tag: "#22Y02URUJ",
      name: "동탄연합2기",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/gm5xlb0zJbAOHDj6it6LPbbrRa3V4L290UnSPYa5vGE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/gm5xlb0zJbAOHDj6it6LPbbrRa3V4L290UnSPYa5vGE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/gm5xlb0zJbAOHDj6it6LPbbrRa3V4L290UnSPYa5vGE.png",
      },
      clanLevel: 21,
      members: 48,
      clanPoints: 47571,
      rank: 84,
      previousRank: 83,
    },
    {
      tag: "#P80GY0QG",
      name: "창원 김해 2040",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/qXhaKX9q950pFVSO6H30sunoDyRczqHO3f7y_jltPzg.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/qXhaKX9q950pFVSO6H30sunoDyRczqHO3f7y_jltPzg.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/qXhaKX9q950pFVSO6H30sunoDyRczqHO3f7y_jltPzg.png",
      },
      clanLevel: 27,
      members: 45,
      clanPoints: 47563,
      rank: 85,
      previousRank: 82,
    },
    {
      tag: "#22G22VJR",
      name: "봉봉봉",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/iwKvPIIOXIlrLnC6Vn9EOI1MszoX5N167IiDd8RYwoM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/iwKvPIIOXIlrLnC6Vn9EOI1MszoX5N167IiDd8RYwoM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/iwKvPIIOXIlrLnC6Vn9EOI1MszoX5N167IiDd8RYwoM.png",
      },
      clanLevel: 24,
      members: 46,
      clanPoints: 47533,
      rank: 86,
      previousRank: 79,
    },
    {
      tag: "#PVVV998G",
      name: "특별한분들",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/FunJfkSaZuiPuHRn4bFT_auF5QTOcnJ9FtEaOcWYFNo.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/FunJfkSaZuiPuHRn4bFT_auF5QTOcnJ9FtEaOcWYFNo.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/FunJfkSaZuiPuHRn4bFT_auF5QTOcnJ9FtEaOcWYFNo.png",
      },
      clanLevel: 24,
      members: 43,
      clanPoints: 47500,
      rank: 87,
      previousRank: 86,
    },
    {
      tag: "#P9R2Y89C",
      name: "부산 40대",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
      },
      clanLevel: 26,
      members: 47,
      clanPoints: 47495,
      rank: 88,
      previousRank: 87,
    },
    {
      tag: "#UCCULRU",
      name: "미소미소",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/kDJ-VCOwxqEk28LALJA96BtWDAZ4LlECS-H9Y14s49Q.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/kDJ-VCOwxqEk28LALJA96BtWDAZ4LlECS-H9Y14s49Q.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/kDJ-VCOwxqEk28LALJA96BtWDAZ4LlECS-H9Y14s49Q.png",
      },
      clanLevel: 25,
      members: 46,
      clanPoints: 47487,
      rank: 89,
      previousRank: 93,
    },
    {
      tag: "#YP9JG89J",
      name: "100% WAR",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/hHyH4u7FRkSmSo2MhCDEAvbIugKGzQtoFUOvTNO4ACs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/hHyH4u7FRkSmSo2MhCDEAvbIugKGzQtoFUOvTNO4ACs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/hHyH4u7FRkSmSo2MhCDEAvbIugKGzQtoFUOvTNO4ACs.png",
      },
      clanLevel: 25,
      members: 46,
      clanPoints: 47481,
      rank: 90,
      previousRank: 90,
    },
    {
      tag: "#U00G0G9",
      name: "이종격투기",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/pPH3_LSMgqr686wGmRcfW32VnFOUHe-MEgWdu8vQjFs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/pPH3_LSMgqr686wGmRcfW32VnFOUHe-MEgWdu8vQjFs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/pPH3_LSMgqr686wGmRcfW32VnFOUHe-MEgWdu8vQjFs.png",
      },
      clanLevel: 25,
      members: 45,
      clanPoints: 47477,
      rank: 91,
      previousRank: 91,
    },
    {
      tag: "#9YYC9LJ9",
      name: "노땅클럽",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/1DZaxGoeujxfpiDSlD8QtREUzLPTSc-7nb40YkCWkj0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/1DZaxGoeujxfpiDSlD8QtREUzLPTSc-7nb40YkCWkj0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/1DZaxGoeujxfpiDSlD8QtREUzLPTSc-7nb40YkCWkj0.png",
      },
      clanLevel: 23,
      members: 46,
      clanPoints: 47445,
      rank: 92,
      previousRank: 88,
    },
    {
      tag: "#989L29PY",
      name: "천안",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/fJ8HDcC7RmuOOVROkQY9eOTsbZ0pLnl2aMe4nwWpO-4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/fJ8HDcC7RmuOOVROkQY9eOTsbZ0pLnl2aMe4nwWpO-4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/fJ8HDcC7RmuOOVROkQY9eOTsbZ0pLnl2aMe4nwWpO-4.png",
      },
      clanLevel: 26,
      members: 44,
      clanPoints: 47445,
      rank: 93,
      previousRank: 92,
    },
    {
      tag: "#8LCY2JYY",
      name: "(주)samsung",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/QV-vPL_x7tkIoUFF7graxshl2vtmp9nMU78aptNOjEc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/QV-vPL_x7tkIoUFF7graxshl2vtmp9nMU78aptNOjEc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/QV-vPL_x7tkIoUFF7graxshl2vtmp9nMU78aptNOjEc.png",
      },
      clanLevel: 28,
      members: 44,
      clanPoints: 47438,
      rank: 94,
      previousRank: 96,
    },
    {
      tag: "#PVR880QY",
      name: "♡사군자♡",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/RJ6xH4WYJftkwShLx_NzJR9tNz-TFX1GP5xpnngEbdg.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/RJ6xH4WYJftkwShLx_NzJR9tNz-TFX1GP5xpnngEbdg.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/RJ6xH4WYJftkwShLx_NzJR9tNz-TFX1GP5xpnngEbdg.png",
      },
      clanLevel: 27,
      members: 48,
      clanPoints: 47438,
      rank: 95,
      previousRank: 100,
    },
    {
      tag: "#JLCCPPYG",
      name: "우리 함께",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/qiJ08GGlGZvTZWSEX5I-_pEk7b6n-g4L_-YwrHQVDFA.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/qiJ08GGlGZvTZWSEX5I-_pEk7b6n-g4L_-YwrHQVDFA.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/qiJ08GGlGZvTZWSEX5I-_pEk7b6n-g4L_-YwrHQVDFA.png",
      },
      clanLevel: 19,
      members: 47,
      clanPoints: 47412,
      rank: 96,
      previousRank: 94,
    },
    {
      tag: "#YCL8C9QV",
      name: "안산 ㄱ참이스리~☆",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Yy8O9dqy260l8JRbY_yP5EdtYKilTHqzYhGobLwac_c.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Yy8O9dqy260l8JRbY_yP5EdtYKilTHqzYhGobLwac_c.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Yy8O9dqy260l8JRbY_yP5EdtYKilTHqzYhGobLwac_c.png",
      },
      clanLevel: 25,
      members: 47,
      clanPoints: 47383,
      rank: 97,
      previousRank: 101,
    },
    {
      tag: "#YPPVQC0L",
      name: "페카의 성",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/a-1Mw-w3m5Pt-UciOoYxIcC0brV1MYl9c-4K0RHVk3A.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/a-1Mw-w3m5Pt-UciOoYxIcC0brV1MYl9c-4K0RHVk3A.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/a-1Mw-w3m5Pt-UciOoYxIcC0brV1MYl9c-4K0RHVk3A.png",
      },
      clanLevel: 28,
      members: 49,
      clanPoints: 47367,
      rank: 98,
      previousRank: 98,
    },
    {
      tag: "#8RRY90RJ",
      name: "만수르",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/zy9b-Xw0xRWaGGTykbLhsXW9KNHu3FM0nyDlLm9J1Vs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/zy9b-Xw0xRWaGGTykbLhsXW9KNHu3FM0nyDlLm9J1Vs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/zy9b-Xw0xRWaGGTykbLhsXW9KNHu3FM0nyDlLm9J1Vs.png",
      },
      clanLevel: 28,
      members: 43,
      clanPoints: 47358,
      rank: 99,
      previousRank: 97,
    },
    {
      tag: "#928VUP9C",
      name: "3040 직장인 쉼터",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/fmofD4M-mSuDuUQICkJMW5g-PvbnFz7x1OonZLdqwEQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/fmofD4M-mSuDuUQICkJMW5g-PvbnFz7x1OonZLdqwEQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/fmofD4M-mSuDuUQICkJMW5g-PvbnFz7x1OonZLdqwEQ.png",
      },
      clanLevel: 21,
      members: 47,
      clanPoints: 47346,
      rank: 100,
      previousRank: 95,
    },
    {
      tag: "#UR229V0G",
      name: "지옥의 마왕들",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/gIQBrFNZb598YXDUwqwVSyKqaLIhb3N9q29RhSA5j54.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/gIQBrFNZb598YXDUwqwVSyKqaLIhb3N9q29RhSA5j54.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/gIQBrFNZb598YXDUwqwVSyKqaLIhb3N9q29RhSA5j54.png",
      },
      clanLevel: 23,
      members: 46,
      clanPoints: 47328,
      rank: 101,
      previousRank: 99,
    },
    {
      tag: "#P9P2898L",
      name: "파밍",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/qKuX3cb_GQ94P01ryt-S3whgNu29veipE7jDqnKAOvY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/qKuX3cb_GQ94P01ryt-S3whgNu29veipE7jDqnKAOvY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/qKuX3cb_GQ94P01ryt-S3whgNu29veipE7jDqnKAOvY.png",
      },
      clanLevel: 22,
      members: 50,
      clanPoints: 47321,
      rank: 102,
      previousRank: 102,
    },
    {
      tag: "#PJLPYQ0",
      name: "Dokdo Korean",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/5C-v-b_YTJPFaiEkuBkK8_EQ6NQZuXu-_OMxNdzm4c8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/5C-v-b_YTJPFaiEkuBkK8_EQ6NQZuXu-_OMxNdzm4c8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/5C-v-b_YTJPFaiEkuBkK8_EQ6NQZuXu-_OMxNdzm4c8.png",
      },
      clanLevel: 20,
      members: 46,
      clanPoints: 47319,
      rank: 103,
      previousRank: 104,
    },
    {
      tag: "#20QLGUY0V",
      name: "진격의클랜",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/dNnVvqxLRIPdXKvtKOgoS4niwbLEKwLlDZICKritNx0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/dNnVvqxLRIPdXKvtKOgoS4niwbLEKwLlDZICKritNx0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/dNnVvqxLRIPdXKvtKOgoS4niwbLEKwLlDZICKritNx0.png",
      },
      clanLevel: 22,
      members: 48,
      clanPoints: 47247,
      rank: 104,
      previousRank: 106,
    },
    {
      tag: "#2PUGLUYQ8",
      name: "성인 직장인 모임",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/28jJ_9OEEFsnuKS0f9Ej6hMAEty_v6OhYIa7DPuz-Zk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/28jJ_9OEEFsnuKS0f9Ej6hMAEty_v6OhYIa7DPuz-Zk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/28jJ_9OEEFsnuKS0f9Ej6hMAEty_v6OhYIa7DPuz-Zk.png",
      },
      clanLevel: 16,
      members: 45,
      clanPoints: 47216,
      rank: 105,
      previousRank: 116,
    },
    {
      tag: "#2PUVPL0LY",
      name: "같은마음으로",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/aTK7bN2P0bFhwlfo8KkG93FbnMuCkTT7avE_Wng_Khc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/aTK7bN2P0bFhwlfo8KkG93FbnMuCkTT7avE_Wng_Khc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/aTK7bN2P0bFhwlfo8KkG93FbnMuCkTT7avE_Wng_Khc.png",
      },
      clanLevel: 16,
      members: 49,
      clanPoints: 47213,
      rank: 106,
      previousRank: 108,
    },
    {
      tag: "#GR8L9J0J",
      name: "희망",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/vSRL3GHxfwZ5icOE6O5MTwLNxIG1CPwhFIL043BeTUA.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/vSRL3GHxfwZ5icOE6O5MTwLNxIG1CPwhFIL043BeTUA.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/vSRL3GHxfwZ5icOE6O5MTwLNxIG1CPwhFIL043BeTUA.png",
      },
      clanLevel: 24,
      members: 48,
      clanPoints: 47209,
      rank: 107,
      previousRank: 110,
    },
    {
      tag: "#RLU2JP",
      name: "고구려",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/a8DLz4_M0oo8mn-3ujGvCaF4tf5tGytpngg3CzahkKU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/a8DLz4_M0oo8mn-3ujGvCaF4tf5tGytpngg3CzahkKU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/a8DLz4_M0oo8mn-3ujGvCaF4tf5tGytpngg3CzahkKU.png",
      },
      clanLevel: 21,
      members: 48,
      clanPoints: 47208,
      rank: 108,
      previousRank: 107,
    },
    {
      tag: "#9JLGLV0V",
      name: "대한민국",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/eObI1tEJK3NXcMb1_Z3c3KW9AkOmedrrIJam9ur5zIQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/eObI1tEJK3NXcMb1_Z3c3KW9AkOmedrrIJam9ur5zIQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/eObI1tEJK3NXcMb1_Z3c3KW9AkOmedrrIJam9ur5zIQ.png",
      },
      clanLevel: 29,
      members: 46,
      clanPoints: 47205,
      rank: 109,
      previousRank: 111,
    },
    {
      tag: "#VGJPJ2VQ",
      name: "아더왕과원탁의기사",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/0rajdr8HrGvfpxE9MaWDPrYBxvMxW8Z7c15uSTClxPQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/0rajdr8HrGvfpxE9MaWDPrYBxvMxW8Z7c15uSTClxPQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/0rajdr8HrGvfpxE9MaWDPrYBxvMxW8Z7c15uSTClxPQ.png",
      },
      clanLevel: 21,
      members: 46,
      clanPoints: 47170,
      rank: 110,
      previousRank: 114,
    },
    {
      tag: "#29VRJUCL",
      name: "그냥 즐깁시다",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/eNMddaf1W1k_h-TY8VWuG40Cc1vEojm565guKIwi5nI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/eNMddaf1W1k_h-TY8VWuG40Cc1vEojm565guKIwi5nI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/eNMddaf1W1k_h-TY8VWuG40Cc1vEojm565guKIwi5nI.png",
      },
      clanLevel: 25,
      members: 49,
      clanPoints: 47170,
      rank: 111,
      previousRank: 118,
    },
    {
      tag: "#PQGVQ9QV",
      name: "그냥 즐겁게<성인>",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/7xwEi56cD2Lpl_eqx2palHFhuWjJ3nEJJ3nZPy2OSg8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/7xwEi56cD2Lpl_eqx2palHFhuWjJ3nEJJ3nZPy2OSg8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/7xwEi56cD2Lpl_eqx2palHFhuWjJ3nEJJ3nZPy2OSg8.png",
      },
      clanLevel: 24,
      members: 43,
      clanPoints: 47163,
      rank: 112,
      previousRank: 112,
    },
    {
      tag: "#82GG8009",
      name: "무한클전",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/T_V5ebgFZAc-pGfACN-Dn2sJdhHGeDzp9dzmvPkD-2w.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/T_V5ebgFZAc-pGfACN-Dn2sJdhHGeDzp9dzmvPkD-2w.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/T_V5ebgFZAc-pGfACN-Dn2sJdhHGeDzp9dzmvPkD-2w.png",
      },
      clanLevel: 27,
      members: 47,
      clanPoints: 47144,
      rank: 113,
      previousRank: 115,
    },
    {
      tag: "#8JCQC0UL",
      name: "이판사판",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/gkcN3LFRzS1uRsluvRan-F8ifA5pfnSfQLeEEgBbyCk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/gkcN3LFRzS1uRsluvRan-F8ifA5pfnSfQLeEEgBbyCk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/gkcN3LFRzS1uRsluvRan-F8ifA5pfnSfQLeEEgBbyCk.png",
      },
      clanLevel: 26,
      members: 47,
      clanPoints: 47134,
      rank: 114,
      previousRank: 109,
    },
    {
      tag: "#9JRQ0URL",
      name: "부산",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/f9vHoDnVp-Qe6ZahiERCOjw9U3JXcEJP1CqNREjQaNw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/f9vHoDnVp-Qe6ZahiERCOjw9U3JXcEJP1CqNREjQaNw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/f9vHoDnVp-Qe6ZahiERCOjw9U3JXcEJP1CqNREjQaNw.png",
      },
      clanLevel: 27,
      members: 47,
      clanPoints: 47128,
      rank: 115,
      previousRank: 103,
    },
    {
      tag: "#QQ9RC90",
      name: "한국",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/NHEDSk-JbYFZNhDqcZhYmdlIinlXnlulT-ZyVCPekZs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/NHEDSk-JbYFZNhDqcZhYmdlIinlXnlulT-ZyVCPekZs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/NHEDSk-JbYFZNhDqcZhYmdlIinlXnlulT-ZyVCPekZs.png",
      },
      clanLevel: 25,
      members: 43,
      clanPoints: 47124,
      rank: 116,
      previousRank: 122,
    },
    {
      tag: "#9J8P92PL",
      name: "사막여우",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/FzCK0cdrBmaOLvdR1xcg9O5swEmuSSiWn2ePzdFteAs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/FzCK0cdrBmaOLvdR1xcg9O5swEmuSSiWn2ePzdFteAs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/FzCK0cdrBmaOLvdR1xcg9O5swEmuSSiWn2ePzdFteAs.png",
      },
      clanLevel: 14,
      members: 49,
      clanPoints: 47115,
      rank: 117,
      previousRank: 113,
    },
    {
      tag: "#Y9808C0",
      name: "한국인",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/y8UOXWLs9dpvvdqO0hABQtV8iamQMIm1sr_nOyQtzHM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/y8UOXWLs9dpvvdqO0hABQtV8iamQMIm1sr_nOyQtzHM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/y8UOXWLs9dpvvdqO0hABQtV8iamQMIm1sr_nOyQtzHM.png",
      },
      clanLevel: 22,
      members: 45,
      clanPoints: 47098,
      rank: 118,
      previousRank: 119,
    },
    {
      tag: "#9PJYCULP",
      name: "clane of homie",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/baX-iItLCBOk1Vhfvm2Q_2AthX25cK-g_3dHGkJCkJk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/baX-iItLCBOk1Vhfvm2Q_2AthX25cK-g_3dHGkJCkJk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/baX-iItLCBOk1Vhfvm2Q_2AthX25cK-g_3dHGkJCkJk.png",
      },
      clanLevel: 25,
      members: 48,
      clanPoints: 47093,
      rank: 119,
      previousRank: 126,
    },
    {
      tag: "#QGC2R9Q",
      name: "지원안해줘서 내가만든 클랜",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/V1C5p044s3rKJIhnwHl6V7kLipYXighMpAlHCsW9nVE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/V1C5p044s3rKJIhnwHl6V7kLipYXighMpAlHCsW9nVE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/V1C5p044s3rKJIhnwHl6V7kLipYXighMpAlHCsW9nVE.png",
      },
      clanLevel: 18,
      members: 42,
      clanPoints: 47092,
      rank: 120,
      previousRank: 120,
    },
    {
      tag: "#80LQ9RG8",
      name: "Corea",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Zb3HK4L9II4k65XV2gX5UGTAADxtjwGMZkR7SLQVYmw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Zb3HK4L9II4k65XV2gX5UGTAADxtjwGMZkR7SLQVYmw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Zb3HK4L9II4k65XV2gX5UGTAADxtjwGMZkR7SLQVYmw.png",
      },
      clanLevel: 29,
      members: 46,
      clanPoints: 47089,
      rank: 121,
      previousRank: 145,
    },
    {
      tag: "#C8U8PVUJ",
      name: "대한민국 아재들",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/lK0aXVms89ZZsL96CXOqsp9DWj5Iir4tOgVi6N1HYxU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/lK0aXVms89ZZsL96CXOqsp9DWj5Iir4tOgVi6N1HYxU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/lK0aXVms89ZZsL96CXOqsp9DWj5Iir4tOgVi6N1HYxU.png",
      },
      clanLevel: 20,
      members: 43,
      clanPoints: 47068,
      rank: 122,
      previousRank: 117,
    },
    {
      tag: "#PG208Y09",
      name: "김포 company",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/ghAYWH1KXSboAoCXgwgnjqmXan3vIY_nN0CoK9ZhfEQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/ghAYWH1KXSboAoCXgwgnjqmXan3vIY_nN0CoK9ZhfEQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/ghAYWH1KXSboAoCXgwgnjqmXan3vIY_nN0CoK9ZhfEQ.png",
      },
      clanLevel: 26,
      members: 46,
      clanPoints: 47042,
      rank: 123,
      previousRank: 135,
    },
    {
      tag: "#9RV9CY8U",
      name: "서울7080-2",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/jukUClKMZwW0SSr17ZVaMb309e6CFwvpnueOrBsY-I0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/jukUClKMZwW0SSr17ZVaMb309e6CFwvpnueOrBsY-I0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/jukUClKMZwW0SSr17ZVaMb309e6CFwvpnueOrBsY-I0.png",
      },
      clanLevel: 21,
      members: 49,
      clanPoints: 47026,
      rank: 124,
      previousRank: 125,
    },
    {
      tag: "#9YU9LJ8",
      name: "주작가",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/w6SlURJcroayyyVkInMxt86sDvQCYJIhgyGE8wVT9A4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/w6SlURJcroayyyVkInMxt86sDvQCYJIhgyGE8wVT9A4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/w6SlURJcroayyyVkInMxt86sDvQCYJIhgyGE8wVT9A4.png",
      },
      clanLevel: 24,
      members: 44,
      clanPoints: 47018,
      rank: 125,
      previousRank: 136,
    },
    {
      tag: "#8GGGL0YG",
      name: "중년",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/3GCfmXJZ6BEaxSWrd1f-dY7vwyC6jn0T2CiY_KPpV-8.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/3GCfmXJZ6BEaxSWrd1f-dY7vwyC6jn0T2CiY_KPpV-8.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/3GCfmXJZ6BEaxSWrd1f-dY7vwyC6jn0T2CiY_KPpV-8.png",
      },
      clanLevel: 27,
      members: 47,
      clanPoints: 47010,
      rank: 126,
      previousRank: 124,
    },
    {
      tag: "#PJGJ2RQ9",
      name: "꼬꼬군단",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/V7cmoSctput0BqPFryJVsEGqV96Wgit9Zx_II4GcatU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/V7cmoSctput0BqPFryJVsEGqV96Wgit9Zx_II4GcatU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/V7cmoSctput0BqPFryJVsEGqV96Wgit9Zx_II4GcatU.png",
      },
      clanLevel: 26,
      members: 47,
      clanPoints: 47008,
      rank: 127,
      previousRank: 123,
    },
    {
      tag: "#P2LVLQL2",
      name: "다같이",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/QtgjdSGRkenEVDzMuVZaHDn00NmqGJ95qsiyTiK9js0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/QtgjdSGRkenEVDzMuVZaHDn00NmqGJ95qsiyTiK9js0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/QtgjdSGRkenEVDzMuVZaHDn00NmqGJ95qsiyTiK9js0.png",
      },
      clanLevel: 26,
      members: 50,
      clanPoints: 46999,
      rank: 128,
      previousRank: 127,
    },
    {
      tag: "#88JUYQP2",
      name: "서울",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/rcKufouIedOZ20yk9OsiGhD-99KfNqMB0u2TEGKEgGY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/rcKufouIedOZ20yk9OsiGhD-99KfNqMB0u2TEGKEgGY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/rcKufouIedOZ20yk9OsiGhD-99KfNqMB0u2TEGKEgGY.png",
      },
      clanLevel: 26,
      members: 44,
      clanPoints: 46995,
      rank: 129,
      previousRank: 154,
    },
    {
      tag: "#92QQGR2U",
      name: "멀티 fun",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/1ZlSuaUx22KAD6LPuu7Wupy4kfTDpLEQ91tn-Tc3a8I.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/1ZlSuaUx22KAD6LPuu7Wupy4kfTDpLEQ91tn-Tc3a8I.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/1ZlSuaUx22KAD6LPuu7Wupy4kfTDpLEQ91tn-Tc3a8I.png",
      },
      clanLevel: 27,
      members: 43,
      clanPoints: 46989,
      rank: 130,
      previousRank: 134,
    },
    {
      tag: "#2PYLCU0RC",
      name: "KoreaSwan",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/lZVVzOvWFvo_CGOwg46m_Ax6BDhFlI7Zn-cUZ09xmjU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/lZVVzOvWFvo_CGOwg46m_Ax6BDhFlI7Zn-cUZ09xmjU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/lZVVzOvWFvo_CGOwg46m_Ax6BDhFlI7Zn-cUZ09xmjU.png",
      },
      clanLevel: 15,
      members: 44,
      clanPoints: 46980,
      rank: 131,
      previousRank: 128,
    },
    {
      tag: "#P8RL2RVL",
      name: "아저씨",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/DSIOFDCR6KI59y9--AAtjFD1RURtVaGFkJd9M9QYzcw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/DSIOFDCR6KI59y9--AAtjFD1RURtVaGFkJd9M9QYzcw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/DSIOFDCR6KI59y9--AAtjFD1RURtVaGFkJd9M9QYzcw.png",
      },
      clanLevel: 23,
      members: 39,
      clanPoints: 46978,
      rank: 132,
      previousRank: 130,
    },
    {
      tag: "#2Y8PJJC2",
      name: "고구려",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/ZCsDOjLR1wslE0HIKNrAaiGv83Mm3k5qUQMAXNnWYc0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/ZCsDOjLR1wslE0HIKNrAaiGv83Mm3k5qUQMAXNnWYc0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/ZCsDOjLR1wslE0HIKNrAaiGv83Mm3k5qUQMAXNnWYc0.png",
      },
      clanLevel: 24,
      members: 49,
      clanPoints: 46964,
      rank: 133,
      previousRank: 133,
    },
    {
      tag: "#9JC22L8U",
      name: "굿프렌즈",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/BQodxQ7KGovA9I4na8-tjUYpnVOcVtD42phWf9tSgWE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/BQodxQ7KGovA9I4na8-tjUYpnVOcVtD42phWf9tSgWE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/BQodxQ7KGovA9I4na8-tjUYpnVOcVtD42phWf9tSgWE.png",
      },
      clanLevel: 26,
      members: 47,
      clanPoints: 46961,
      rank: 134,
      previousRank: 129,
    },
    {
      tag: "#ULCQPPQ",
      name: "한수이북",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/k7fPg1R0gWjYi4yg9G5TuQomNV5AC4pmVQcLvRLFuTw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/k7fPg1R0gWjYi4yg9G5TuQomNV5AC4pmVQcLvRLFuTw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/k7fPg1R0gWjYi4yg9G5TuQomNV5AC4pmVQcLvRLFuTw.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 46956,
      rank: 135,
      previousRank: 131,
    },
    {
      tag: "#8L0PQVGL",
      name: "3040 직장인",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/v5OhP0oc4t4-BMkLegL9ye37tjfsCIqo7UjzdIejLUQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/v5OhP0oc4t4-BMkLegL9ye37tjfsCIqo7UjzdIejLUQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/v5OhP0oc4t4-BMkLegL9ye37tjfsCIqo7UjzdIejLUQ.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 46939,
      rank: 136,
      previousRank: 132,
    },
    {
      tag: "#Y0VPQV",
      name: "[LAB] M.S.D.S",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/AP9vnQDVYgoQev2Ak0ZhL2T5jOuBYUhP_juryh1Cd7o.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/AP9vnQDVYgoQev2Ak0ZhL2T5jOuBYUhP_juryh1Cd7o.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/AP9vnQDVYgoQev2Ak0ZhL2T5jOuBYUhP_juryh1Cd7o.png",
      },
      clanLevel: 21,
      members: 50,
      clanPoints: 46902,
      rank: 137,
      previousRank: 138,
    },
    {
      tag: "#YQ8RVRQJ",
      name: "오빠는 전투중!",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/2TuEUNexxWQVhy9xX1rGuCNi22FJEzrMfrMDj4lbgEw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/2TuEUNexxWQVhy9xX1rGuCNi22FJEzrMfrMDj4lbgEw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/2TuEUNexxWQVhy9xX1rGuCNi22FJEzrMfrMDj4lbgEw.png",
      },
      clanLevel: 27,
      members: 45,
      clanPoints: 46897,
      rank: 138,
      previousRank: 137,
    },
    {
      tag: "#8Q98RVY2",
      name: "휘파람",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/CEZMByBl7FQo5QqcyggII2bL4L4TeJHNM1I-eZdX3LM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/CEZMByBl7FQo5QqcyggII2bL4L4TeJHNM1I-eZdX3LM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/CEZMByBl7FQo5QqcyggII2bL4L4TeJHNM1I-eZdX3LM.png",
      },
      clanLevel: 27,
      members: 43,
      clanPoints: 46856,
      rank: 139,
      previousRank: 176,
    },
    {
      tag: "#2GLYYGY2",
      name: "대한민국 dark",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/2wcCrIMA8wkwqgGM43sfr8ZAoOt5PWMmW_fLKsWK4Fo.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/2wcCrIMA8wkwqgGM43sfr8ZAoOt5PWMmW_fLKsWK4Fo.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/2wcCrIMA8wkwqgGM43sfr8ZAoOt5PWMmW_fLKsWK4Fo.png",
      },
      clanLevel: 20,
      members: 48,
      clanPoints: 46821,
      rank: 140,
      previousRank: 144,
    },
    {
      tag: "#2YY8RL0UJ",
      name: "Blue Sky Korea",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/etrqQzbiyeqQuIZvswxGfdwR7oTtEoOyEVm4Bcxidp4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/etrqQzbiyeqQuIZvswxGfdwR7oTtEoOyEVm4Bcxidp4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/etrqQzbiyeqQuIZvswxGfdwR7oTtEoOyEVm4Bcxidp4.png",
      },
      clanLevel: 17,
      members: 49,
      clanPoints: 46820,
      rank: 141,
      previousRank: 139,
    },
    {
      tag: "#2QQJY9YR",
      name: "BJP Crew",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/xe7auGrGtOqEoCZ03u786Hnx6OrTSg95Blm_qw6U9SM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/xe7auGrGtOqEoCZ03u786Hnx6OrTSg95Blm_qw6U9SM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/xe7auGrGtOqEoCZ03u786Hnx6OrTSg95Blm_qw6U9SM.png",
      },
      clanLevel: 28,
      members: 43,
      clanPoints: 46817,
      rank: 142,
      previousRank: 146,
    },
    {
      tag: "#PJRGJY8J",
      name: "40대의 무서움",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/hVRUdGImNSe53Gz-RrudC_8Uf-WM8uu7SUiXs0jKCI4.png",
      },
      clanLevel: 26,
      members: 44,
      clanPoints: 46788,
      rank: 143,
      previousRank: 141,
    },
    {
      tag: "#8YJG0L80",
      name: "대전",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/v0__8pe02fTwFjoZphdwSZUqrKFU1NJJM9IFwBXtWms.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/v0__8pe02fTwFjoZphdwSZUqrKFU1NJJM9IFwBXtWms.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/v0__8pe02fTwFjoZphdwSZUqrKFU1NJJM9IFwBXtWms.png",
      },
      clanLevel: 25,
      members: 50,
      clanPoints: 46787,
      rank: 144,
      previousRank: 147,
    },
    {
      tag: "#GP8U9UPG",
      name: "아르페지오",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/cbn1aTQp66G9qOaPDuD72gEGmnKUnPry_iec915WXSA.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/cbn1aTQp66G9qOaPDuD72gEGmnKUnPry_iec915WXSA.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/cbn1aTQp66G9qOaPDuD72gEGmnKUnPry_iec915WXSA.png",
      },
      clanLevel: 21,
      members: 47,
      clanPoints: 46774,
      rank: 145,
      previousRank: 140,
    },
    {
      tag: "#RP2QU99",
      name: "인터스텔라",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/_Bxn5nQxF6xt8CHGbAfF1ZbZE0DVuzH4maJzdEt_H4w.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/_Bxn5nQxF6xt8CHGbAfF1ZbZE0DVuzH4maJzdEt_H4w.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/_Bxn5nQxF6xt8CHGbAfF1ZbZE0DVuzH4maJzdEt_H4w.png",
      },
      clanLevel: 30,
      members: 44,
      clanPoints: 46773,
      rank: 146,
      previousRank: 143,
    },
    {
      tag: "#92GJ22PJ",
      name: "FMDTBofKOREA",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/2KtVvyVARJhaHPILoea01iaC6LP73Jui67GIEk3K9Uc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/2KtVvyVARJhaHPILoea01iaC6LP73Jui67GIEk3K9Uc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/2KtVvyVARJhaHPILoea01iaC6LP73Jui67GIEk3K9Uc.png",
      },
      clanLevel: 29,
      members: 48,
      clanPoints: 46770,
      rank: 147,
      previousRank: 159,
    },
    {
      tag: "#99L8YQJC",
      name: "신의한수",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/5CBFW8mxCQgHkKAxwW42HTrebQcw3fMvUaG6nxT1UDk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/5CBFW8mxCQgHkKAxwW42HTrebQcw3fMvUaG6nxT1UDk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/5CBFW8mxCQgHkKAxwW42HTrebQcw3fMvUaG6nxT1UDk.png",
      },
      clanLevel: 26,
      members: 45,
      clanPoints: 46749,
      rank: 148,
      previousRank: 121,
    },
    {
      tag: "#2R82R2PU",
      name: "직장인 특공대",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/KOtqyYKM_8rXYa4cxvZvsNezAnlouLBSU_mfU6Tj4oc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/KOtqyYKM_8rXYa4cxvZvsNezAnlouLBSU_mfU6Tj4oc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/KOtqyYKM_8rXYa4cxvZvsNezAnlouLBSU_mfU6Tj4oc.png",
      },
      clanLevel: 23,
      members: 47,
      clanPoints: 46749,
      rank: 149,
      previousRank: 142,
    },
    {
      tag: "#PC8Q822V",
      name: "무한도전",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/gvokFEH2YDotiepF4DBaV5dpi3Pc_5-2Bti1WmPg5E0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/gvokFEH2YDotiepF4DBaV5dpi3Pc_5-2Bti1WmPg5E0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/gvokFEH2YDotiepF4DBaV5dpi3Pc_5-2Bti1WmPg5E0.png",
      },
      clanLevel: 23,
      members: 49,
      clanPoints: 46730,
      rank: 150,
      previousRank: 149,
    },
    {
      tag: "#82RP9GCG",
      name: "☆ 별 헤는 밤 ☆",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/ntK5myKDhDzzcjAfEFpBQQjUXGGpSTncAa7o5_M0fZk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/ntK5myKDhDzzcjAfEFpBQQjUXGGpSTncAa7o5_M0fZk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/ntK5myKDhDzzcjAfEFpBQQjUXGGpSTncAa7o5_M0fZk.png",
      },
      clanLevel: 25,
      members: 48,
      clanPoints: 46709,
      rank: 151,
      previousRank: 153,
    },
    {
      tag: "#2QGLG22V",
      name: "무과금 가난한 직장인군단",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/JXoPRVIW-FbhUha4HWuiKIN5h8R9YYo1Fw7mi6jHJfU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/JXoPRVIW-FbhUha4HWuiKIN5h8R9YYo1Fw7mi6jHJfU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/JXoPRVIW-FbhUha4HWuiKIN5h8R9YYo1Fw7mi6jHJfU.png",
      },
      clanLevel: 26,
      members: 47,
      clanPoints: 46704,
      rank: 152,
      previousRank: 148,
    },
    {
      tag: "#PCQURJL2",
      name: "아이러브클전",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/TvkdhqiSZi_aSLl0PZdEQDiEOaoFbaV3Q0tSb-vjw2g.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/TvkdhqiSZi_aSLl0PZdEQDiEOaoFbaV3Q0tSb-vjw2g.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/TvkdhqiSZi_aSLl0PZdEQDiEOaoFbaV3Q0tSb-vjw2g.png",
      },
      clanLevel: 26,
      members: 46,
      clanPoints: 46690,
      rank: 153,
      previousRank: 152,
    },
    {
      tag: "#L8JYV2QC",
      name: "40대 쌈짱~!",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/NKj7P74hwALYMg71unb8glaxdouPA-hoqa9MU-uBVug.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/NKj7P74hwALYMg71unb8glaxdouPA-hoqa9MU-uBVug.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/NKj7P74hwALYMg71unb8glaxdouPA-hoqa9MU-uBVug.png",
      },
      clanLevel: 26,
      members: 44,
      clanPoints: 46685,
      rank: 154,
      previousRank: 150,
    },
    {
      tag: "#P9CPCVCL",
      name: "대한민국",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/QXU4wIMl2qfcNK9zoyE9E3ituKYp_mfwI-W56jYtDAw.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/QXU4wIMl2qfcNK9zoyE9E3ituKYp_mfwI-W56jYtDAw.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/QXU4wIMl2qfcNK9zoyE9E3ituKYp_mfwI-W56jYtDAw.png",
      },
      clanLevel: 25,
      members: 48,
      clanPoints: 46675,
      rank: 155,
      previousRank: 157,
    },
    {
      tag: "#PPGQYV",
      name: "조용한가족",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/nAi2t577BSqpO4fgYuqag7B53X7HKxH5NtXTwP53OM4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/nAi2t577BSqpO4fgYuqag7B53X7HKxH5NtXTwP53OM4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/nAi2t577BSqpO4fgYuqag7B53X7HKxH5NtXTwP53OM4.png",
      },
      clanLevel: 21,
      members: 48,
      clanPoints: 46668,
      rank: 156,
      previousRank: 151,
    },
    {
      tag: "#U02L09UV",
      name: "멋진 오늘!!!",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/fRHVtJFU3vP-tZc2ieJjasC_uPEtAtBMJ-zJEPaOqPQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/fRHVtJFU3vP-tZc2ieJjasC_uPEtAtBMJ-zJEPaOqPQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/fRHVtJFU3vP-tZc2ieJjasC_uPEtAtBMJ-zJEPaOqPQ.png",
      },
      clanLevel: 25,
      members: 38,
      clanPoints: 46665,
      rank: 157,
      previousRank: 105,
    },
    {
      tag: "#PV9RJRCP",
      name: "1'st 김해",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/CxInNr_P2X1SjFRHwoxDMN71ARUBFhDM_sghhZNJDms.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/CxInNr_P2X1SjFRHwoxDMN71ARUBFhDM_sghhZNJDms.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/CxInNr_P2X1SjFRHwoxDMN71ARUBFhDM_sghhZNJDms.png",
      },
      clanLevel: 27,
      members: 50,
      clanPoints: 46658,
      rank: 158,
      previousRank: 156,
    },
    {
      tag: "#C8QPP8J9",
      name: "New Family",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/-GxyG54PE-rsociJ2ANwfLjY1T7JPALKbm7DKXpH-Gk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/-GxyG54PE-rsociJ2ANwfLjY1T7JPALKbm7DKXpH-Gk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/-GxyG54PE-rsociJ2ANwfLjY1T7JPALKbm7DKXpH-Gk.png",
      },
      clanLevel: 23,
      members: 41,
      clanPoints: 46641,
      rank: 159,
      previousRank: 163,
    },
    {
      tag: "#Y0P2PLC2",
      name: "Korea 선남선녀",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/s1gcU5hYPT8RvgXe2gl_6Jooypo8XelK7dUGNqBugZY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/s1gcU5hYPT8RvgXe2gl_6Jooypo8XelK7dUGNqBugZY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/s1gcU5hYPT8RvgXe2gl_6Jooypo8XelK7dUGNqBugZY.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 46615,
      rank: 160,
      previousRank: 161,
    },
    {
      tag: "#9JJ2GPJ0",
      name: "꽃다방",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/P6FyApfdVZETvfuYqeq8PBsLi38H5Ik9iUK4H6Q53Dc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/P6FyApfdVZETvfuYqeq8PBsLi38H5Ik9iUK4H6Q53Dc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/P6FyApfdVZETvfuYqeq8PBsLi38H5Ik9iUK4H6Q53Dc.png",
      },
      clanLevel: 26,
      members: 46,
      clanPoints: 46581,
      rank: 161,
      previousRank: 158,
    },
    {
      tag: "#PQ292Q90",
      name: "자유시간",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Mrxuj0ezXQD9u_1IaTNNtSc8sGJS-O6TS7h9hZc7dkA.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Mrxuj0ezXQD9u_1IaTNNtSc8sGJS-O6TS7h9hZc7dkA.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Mrxuj0ezXQD9u_1IaTNNtSc8sGJS-O6TS7h9hZc7dkA.png",
      },
      clanLevel: 21,
      members: 43,
      clanPoints: 46572,
      rank: 162,
      previousRank: 162,
    },
    {
      tag: "#29GY8L9GR",
      name: "파도소리",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/tszN8rY_E1rUcvlEp8F7Dox7z4BC-oIy4CJxubgPdgk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/tszN8rY_E1rUcvlEp8F7Dox7z4BC-oIy4CJxubgPdgk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/tszN8rY_E1rUcvlEp8F7Dox7z4BC-oIy4CJxubgPdgk.png",
      },
      clanLevel: 21,
      members: 43,
      clanPoints: 46571,
      rank: 163,
      previousRank: 160,
    },
    {
      tag: "#8J2PLRPV",
      name: "좋은인연",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/zp925yvdA-Y_MxkKWJX5Y_fLUxMKWMZKsu15uHpsjdY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/zp925yvdA-Y_MxkKWJX5Y_fLUxMKWMZKsu15uHpsjdY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/zp925yvdA-Y_MxkKWJX5Y_fLUxMKWMZKsu15uHpsjdY.png",
      },
      clanLevel: 25,
      members: 43,
      clanPoints: 46569,
      rank: 164,
      previousRank: 172,
    },
    {
      tag: "#GRJYPJLL",
      name: "허당3040",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/KOtqyYKM_8rXYa4cxvZvsNezAnlouLBSU_mfU6Tj4oc.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/KOtqyYKM_8rXYa4cxvZvsNezAnlouLBSU_mfU6Tj4oc.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/KOtqyYKM_8rXYa4cxvZvsNezAnlouLBSU_mfU6Tj4oc.png",
      },
      clanLevel: 23,
      members: 47,
      clanPoints: 46565,
      rank: 165,
      previousRank: 155,
    },
    {
      tag: "#PUJ2GC2L",
      name: "40대모임",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/3H9rVPQdrAmFUG5COnxcYK0LpmeVUoL85wxRkx8Ucck.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/3H9rVPQdrAmFUG5COnxcYK0LpmeVUoL85wxRkx8Ucck.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/3H9rVPQdrAmFUG5COnxcYK0LpmeVUoL85wxRkx8Ucck.png",
      },
      clanLevel: 24,
      members: 50,
      clanPoints: 46565,
      rank: 166,
      previousRank: 165,
    },
    {
      tag: "#9V0CVRLV",
      name: "삼별농장",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Oty7-VwCDi410pusbAumKqYgsVovq_LUTYHVVcVYc9k.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Oty7-VwCDi410pusbAumKqYgsVovq_LUTYHVVcVYc9k.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Oty7-VwCDi410pusbAumKqYgsVovq_LUTYHVVcVYc9k.png",
      },
      clanLevel: 29,
      members: 41,
      clanPoints: 46564,
      rank: 167,
      previousRank: 167,
    },
    {
      tag: "#G0JUR2J9",
      name: "백조의 호수",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/VoBjt0WfSi5uujCAUZVNdUmRFybGoJLhPwB8SxQHLao.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/VoBjt0WfSi5uujCAUZVNdUmRFybGoJLhPwB8SxQHLao.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/VoBjt0WfSi5uujCAUZVNdUmRFybGoJLhPwB8SxQHLao.png",
      },
      clanLevel: 24,
      members: 44,
      clanPoints: 46545,
      rank: 168,
      previousRank: 169,
    },
    {
      tag: "#P898UYRY",
      name: "애너하임팩토리",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/Y8OKb30Pfg-qck3sxLBHYAlNoZr_UnXKn9q1HCQTUv4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/Y8OKb30Pfg-qck3sxLBHYAlNoZr_UnXKn9q1HCQTUv4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/Y8OKb30Pfg-qck3sxLBHYAlNoZr_UnXKn9q1HCQTUv4.png",
      },
      clanLevel: 24,
      members: 49,
      clanPoints: 46541,
      rank: 169,
      previousRank: 171,
    },
    {
      tag: "#9UY8Q2L8",
      name: "울산 VIP",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/s0fjxFBTfcwN62WwbV_EXvSlFCLGtbl852BSL4pV8MI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/s0fjxFBTfcwN62WwbV_EXvSlFCLGtbl852BSL4pV8MI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/s0fjxFBTfcwN62WwbV_EXvSlFCLGtbl852BSL4pV8MI.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 46532,
      rank: 170,
      previousRank: 170,
    },
    {
      tag: "#8Q09GC80",
      name: "창원 전쟁클랜",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/MkfYitU8xfiCyIzts6Tbuymf-sKkWkSSxxcUhOZGY-0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/MkfYitU8xfiCyIzts6Tbuymf-sKkWkSSxxcUhOZGY-0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/MkfYitU8xfiCyIzts6Tbuymf-sKkWkSSxxcUhOZGY-0.png",
      },
      clanLevel: 28,
      members: 43,
      clanPoints: 46512,
      rank: 171,
      previousRank: 166,
    },
    {
      tag: "#PCGP0R82",
      name: "이클랜에뼈를묻으리",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/XvfTq04bQaQ3qDdCKi-O_OFJZ9gNranHpDRVGJ9I1UM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/XvfTq04bQaQ3qDdCKi-O_OFJZ9gNranHpDRVGJ9I1UM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/XvfTq04bQaQ3qDdCKi-O_OFJZ9gNranHpDRVGJ9I1UM.png",
      },
      clanLevel: 18,
      members: 47,
      clanPoints: 46500,
      rank: 172,
      previousRank: 168,
    },
    {
      tag: "#9JV8QYUQ",
      name: "그린캐슬",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/_m0YCFtkYJPaWF974VVBzdI5jayhzir-UsqKpa7chLU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/_m0YCFtkYJPaWF974VVBzdI5jayhzir-UsqKpa7chLU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/_m0YCFtkYJPaWF974VVBzdI5jayhzir-UsqKpa7chLU.png",
      },
      clanLevel: 26,
      members: 45,
      clanPoints: 46491,
      rank: 173,
      previousRank: 174,
    },
    {
      tag: "#8GJVY8RP",
      name: "203040",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/nO3Lmo8PN00Y27gw-f0mH-cafCGYv1w5gtF-zI29m9k.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/nO3Lmo8PN00Y27gw-f0mH-cafCGYv1w5gtF-zI29m9k.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/nO3Lmo8PN00Y27gw-f0mH-cafCGYv1w5gtF-zI29m9k.png",
      },
      clanLevel: 24,
      members: 50,
      clanPoints: 46486,
      rank: 174,
      previousRank: 177,
    },
    {
      tag: "#8YQ290RV",
      name: "LGD구미",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/pPH3_LSMgqr686wGmRcfW32VnFOUHe-MEgWdu8vQjFs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/pPH3_LSMgqr686wGmRcfW32VnFOUHe-MEgWdu8vQjFs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/pPH3_LSMgqr686wGmRcfW32VnFOUHe-MEgWdu8vQjFs.png",
      },
      clanLevel: 25,
      members: 48,
      clanPoints: 46477,
      rank: 175,
      previousRank: 164,
    },
    {
      tag: "#29UUL90J",
      name: "느낌표!",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/-vgcxRG7UbCU_AoI0mU4j5rEegBI9rzSsv1CzLSMzlU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/-vgcxRG7UbCU_AoI0mU4j5rEegBI9rzSsv1CzLSMzlU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/-vgcxRG7UbCU_AoI0mU4j5rEegBI9rzSsv1CzLSMzlU.png",
      },
      clanLevel: 24,
      members: 46,
      clanPoints: 46426,
      rank: 176,
      previousRank: 173,
    },
    {
      tag: "#CQ9GPLP",
      name: "InnerWorld",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/r2lWyySjtwWG-bPTnsAmSP6tDihC5rRatgaOdQLgPZU.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/r2lWyySjtwWG-bPTnsAmSP6tDihC5rRatgaOdQLgPZU.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/r2lWyySjtwWG-bPTnsAmSP6tDihC5rRatgaOdQLgPZU.png",
      },
      clanLevel: 22,
      members: 46,
      clanPoints: 46398,
      rank: 177,
      previousRank: 180,
    },
    {
      tag: "#PPRGGJYP",
      name: "뉴런",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/TRoDqAsaK7Etwf13rN3wewfEwLiAu81j12QDI6eRsA0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/TRoDqAsaK7Etwf13rN3wewfEwLiAu81j12QDI6eRsA0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/TRoDqAsaK7Etwf13rN3wewfEwLiAu81j12QDI6eRsA0.png",
      },
      clanLevel: 24,
      members: 44,
      clanPoints: 46393,
      rank: 178,
      previousRank: 181,
    },
    {
      tag: "#CQYY8UCC",
      name: "광주",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/S2V9NvtdbU7EqGB6fMMZjILEMoaRBjp0c2vuce4eLzY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/S2V9NvtdbU7EqGB6fMMZjILEMoaRBjp0c2vuce4eLzY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/S2V9NvtdbU7EqGB6fMMZjILEMoaRBjp0c2vuce4eLzY.png",
      },
      clanLevel: 23,
      members: 40,
      clanPoints: 46392,
      rank: 179,
      previousRank: 184,
    },
    {
      tag: "#8UPCP8RP",
      name: "수원",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/PPdzlXggNnqfEPYV5mu1ah42b4W8SDSbkbWzcrt1MDs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/PPdzlXggNnqfEPYV5mu1ah42b4W8SDSbkbWzcrt1MDs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/PPdzlXggNnqfEPYV5mu1ah42b4W8SDSbkbWzcrt1MDs.png",
      },
      clanLevel: 23,
      members: 46,
      clanPoints: 46384,
      rank: 180,
      previousRank: 178,
    },
    {
      tag: "#YCG9QGR0",
      name: "초보",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/9-tE99KMs9Js_u3hyGN55RsFUE0-zP8hAsUY9DekKLY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/9-tE99KMs9Js_u3hyGN55RsFUE0-zP8hAsUY9DekKLY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/9-tE99KMs9Js_u3hyGN55RsFUE0-zP8hAsUY9DekKLY.png",
      },
      clanLevel: 19,
      members: 49,
      clanPoints: 46382,
      rank: 181,
      previousRank: 191,
    },
    {
      tag: "#2V99GLQR",
      name: "심심풀이 땅콩",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/79M8QxFPhua4QWOHqimB0-qjeI5A8Wgwac1KEvtsy3w.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/79M8QxFPhua4QWOHqimB0-qjeI5A8Wgwac1KEvtsy3w.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/79M8QxFPhua4QWOHqimB0-qjeI5A8Wgwac1KEvtsy3w.png",
      },
      clanLevel: 25,
      members: 50,
      clanPoints: 46355,
      rank: 182,
      previousRank: 197,
    },
    {
      tag: "#Q8LP2GVL",
      name: "재미난인생",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/DzaMz-p5A9myNZhCUFnmYbICuVcthZPY6_jylj1dRrg.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/DzaMz-p5A9myNZhCUFnmYbICuVcthZPY6_jylj1dRrg.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/DzaMz-p5A9myNZhCUFnmYbICuVcthZPY6_jylj1dRrg.png",
      },
      clanLevel: 29,
      members: 44,
      clanPoints: 46350,
      rank: 183,
      previousRank: 189,
    },
    {
      tag: "#2JJRRRRL",
      name: "가디언",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/58IV23kR5VEYZWJDYOHokrCTQuULC8I2grb9vnYIWeI.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/58IV23kR5VEYZWJDYOHokrCTQuULC8I2grb9vnYIWeI.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/58IV23kR5VEYZWJDYOHokrCTQuULC8I2grb9vnYIWeI.png",
      },
      clanLevel: 28,
      members: 50,
      clanPoints: 46345,
      rank: 184,
      previousRank: 182,
    },
    {
      tag: "#RCLUVQJ",
      name: "별을 따는 사람들",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/xdOhA7S15UPjJ_EsVlGckyOcsof6UJPN8jB-cSsUhjo.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/xdOhA7S15UPjJ_EsVlGckyOcsof6UJPN8jB-cSsUhjo.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/xdOhA7S15UPjJ_EsVlGckyOcsof6UJPN8jB-cSsUhjo.png",
      },
      clanLevel: 24,
      members: 43,
      clanPoints: 46335,
      rank: 185,
      previousRank: 190,
    },
    {
      tag: "#2V02JP9Y",
      name: "KARETA",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/jVE11twb120VfEpq0LmTkOok3sljyQCB57fVRCadpio.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/jVE11twb120VfEpq0LmTkOok3sljyQCB57fVRCadpio.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/jVE11twb120VfEpq0LmTkOok3sljyQCB57fVRCadpio.png",
      },
      clanLevel: 22,
      members: 44,
      clanPoints: 46319,
      rank: 186,
      previousRank: 185,
    },
    {
      tag: "#VQRLUQJ2",
      name: "애인",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/om86N776WCyIJPwRzGIFtJ-qfEIMbP84DP_cMSYfv38.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/om86N776WCyIJPwRzGIFtJ-qfEIMbP84DP_cMSYfv38.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/om86N776WCyIJPwRzGIFtJ-qfEIMbP84DP_cMSYfv38.png",
      },
      clanLevel: 19,
      members: 45,
      clanPoints: 46300,
      rank: 187,
      previousRank: 193,
    },
    {
      tag: "#9C8JCRCJ",
      name: "좋은사람들",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/pn0qAdhDSpS8YAE4-Nd2tKFcqVADcvd02gkTtdMoNoQ.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/pn0qAdhDSpS8YAE4-Nd2tKFcqVADcvd02gkTtdMoNoQ.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/pn0qAdhDSpS8YAE4-Nd2tKFcqVADcvd02gkTtdMoNoQ.png",
      },
      clanLevel: 24,
      members: 46,
      clanPoints: 46298,
      rank: 188,
      previousRank: 186,
    },
    {
      tag: "#C0CQ0VG",
      name: "일산 초보들",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/qQAul1aYXC6HviDPrSIflo9TXIG7ADOAfUEP3rvzzFE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/qQAul1aYXC6HviDPrSIflo9TXIG7ADOAfUEP3rvzzFE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/qQAul1aYXC6HviDPrSIflo9TXIG7ADOAfUEP3rvzzFE.png",
      },
      clanLevel: 24,
      members: 50,
      clanPoints: 46279,
      rank: 189,
      previousRank: 183,
    },
    {
      tag: "#VVUGGQ8G",
      name: "한국-Korea",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/4r9CIji2VdWDuhQx8R8S1lxOBzu7i9nn1oV4CB3zWAs.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/4r9CIji2VdWDuhQx8R8S1lxOBzu7i9nn1oV4CB3zWAs.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/4r9CIji2VdWDuhQx8R8S1lxOBzu7i9nn1oV4CB3zWAs.png",
      },
      clanLevel: 18,
      members: 48,
      clanPoints: 46275,
      rank: 190,
      previousRank: 188,
    },
    {
      tag: "#R8VCCPPR",
      name: "영원한클라스♥",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/LJKK7vEnWq9yl05wlY_B4Wpyh3lz4cnsWfTZx8oiNDM.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/LJKK7vEnWq9yl05wlY_B4Wpyh3lz4cnsWfTZx8oiNDM.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/LJKK7vEnWq9yl05wlY_B4Wpyh3lz4cnsWfTZx8oiNDM.png",
      },
      clanLevel: 22,
      members: 45,
      clanPoints: 46273,
      rank: 191,
      previousRank: 199,
    },
    {
      tag: "#2VRLYGGP",
      name: "Hansol",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/vdtdMewkxGws1MqBTPtrzUBU-dp3IwMHOv77yzy1bEE.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/vdtdMewkxGws1MqBTPtrzUBU-dp3IwMHOv77yzy1bEE.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/vdtdMewkxGws1MqBTPtrzUBU-dp3IwMHOv77yzy1bEE.png",
      },
      clanLevel: 23,
      members: 45,
      clanPoints: 46257,
      rank: 192,
      previousRank: 187,
    },
    {
      tag: "#9VRQYC9",
      name: "★KOREA★",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/UOZgC1Khsopqi5y8snDwdBM2YAjEJgczdo0s4dD14Rk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/UOZgC1Khsopqi5y8snDwdBM2YAjEJgczdo0s4dD14Rk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/UOZgC1Khsopqi5y8snDwdBM2YAjEJgczdo0s4dD14Rk.png",
      },
      clanLevel: 26,
      members: 48,
      clanPoints: 46246,
      rank: 193,
      previousRank: 200,
    },
    {
      tag: "#YVG0LLJ9",
      name: "COC기술연구소",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/hcqDrzzRaLFEVN7S3jMFJpxyo7qmdtWrvsUuEKHSFv0.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/hcqDrzzRaLFEVN7S3jMFJpxyo7qmdtWrvsUuEKHSFv0.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/hcqDrzzRaLFEVN7S3jMFJpxyo7qmdtWrvsUuEKHSFv0.png",
      },
      clanLevel: 23,
      members: 46,
      clanPoints: 46231,
      rank: 194,
      previousRank: 175,
    },
    {
      tag: "#9R082GG2",
      name: "거렁뱅이마을",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/68dX0MT5Vk_-J_z16LW_ekwGA8XJVmMWhiGC0ehz11s.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/68dX0MT5Vk_-J_z16LW_ekwGA8XJVmMWhiGC0ehz11s.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/68dX0MT5Vk_-J_z16LW_ekwGA8XJVmMWhiGC0ehz11s.png",
      },
      clanLevel: 22,
      members: 50,
      clanPoints: 46211,
      rank: 195,
      previousRank: 203,
    },
    {
      tag: "#YGQL9G20",
      name: "클오클블랙홀",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/m772uGmnBUU4HX-s-ZNIhFc8UP6JlkeDUT5OTSjNVh4.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/m772uGmnBUU4HX-s-ZNIhFc8UP6JlkeDUT5OTSjNVh4.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/m772uGmnBUU4HX-s-ZNIhFc8UP6JlkeDUT5OTSjNVh4.png",
      },
      clanLevel: 22,
      members: 48,
      clanPoints: 46203,
      rank: 196,
      previousRank: 195,
    },
    {
      tag: "#QRRLLCYV",
      name: "아쿠아리아만츄",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/IGjujQB3CM645_D7P_5nG1Zm2F0m1DeR02wVwJ-CY10.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/IGjujQB3CM645_D7P_5nG1Zm2F0m1DeR02wVwJ-CY10.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/IGjujQB3CM645_D7P_5nG1Zm2F0m1DeR02wVwJ-CY10.png",
      },
      clanLevel: 23,
      members: 40,
      clanPoints: 46194,
      rank: 197,
      previousRank: 202,
    },
    {
      tag: "#9CYCQQRU",
      name: "부천 여사",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/8BDdJf-5_CLERZfYY-CcVI2zY_E7zincQyMd36cGKwk.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/8BDdJf-5_CLERZfYY-CcVI2zY_E7zincQyMd36cGKwk.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/8BDdJf-5_CLERZfYY-CcVI2zY_E7zincQyMd36cGKwk.png",
      },
      clanLevel: 24,
      members: 42,
      clanPoints: 46188,
      rank: 198,
      previousRank: 198,
    },
    {
      tag: "#C0P9VGLY",
      name: "조용한클랜",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/dirYIp_bkIXPU6Fi3QoMp7W_3rPqBNwv3KOEgN0YvYY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/dirYIp_bkIXPU6Fi3QoMp7W_3rPqBNwv3KOEgN0YvYY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/dirYIp_bkIXPU6Fi3QoMp7W_3rPqBNwv3KOEgN0YvYY.png",
      },
      clanLevel: 19,
      members: 47,
      clanPoints: 46176,
      rank: 199,
      previousRank: 196,
    },
    {
      tag: "#8C0R28CL",
      name: "양념게장",
      location: {
        id: 32000216,
        name: "South Korea",
        isCountry: true,
        countryCode: "KR",
      },
      badgeUrls: {
        small:
          "https://api-assets.clashofclans.com/badges/70/aO2FTk356LuK6atSxlt6Ak_WSHQG998cFN-XdOxbnJY.png",
        large:
          "https://api-assets.clashofclans.com/badges/512/aO2FTk356LuK6atSxlt6Ak_WSHQG998cFN-XdOxbnJY.png",
        medium:
          "https://api-assets.clashofclans.com/badges/200/aO2FTk356LuK6atSxlt6Ak_WSHQG998cFN-XdOxbnJY.png",
      },
      clanLevel: 24,
      members: 50,
      clanPoints: 46171,
      rank: 200,
      previousRank: 194,
    },
  ],
  paging: {
    cursors: {},
  },
};
