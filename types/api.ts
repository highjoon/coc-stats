import { IRankingsResult } from "./rankings";

export interface APIAxiosHeader {
  headers: {
    Accept: string;
    Authorization: string;
  };
}

export interface APIRankingsData {
  items: Array<IRankingsResult>;
  paging: APIPaging;
}

export interface APIResponse<T> {
  result: T;
  status: number;
  message: string;
}

export interface APIPaging {
  cursors?: APICursors;
}

export interface APICursors {
  after?: string;
  before?: string;
}

export interface APIIcon {
  small: string;
  tiny?: string;
  medium?: string;
}

export interface APIBadge {
  small: string;
  large: string;
  medium: string;
}

export interface APISeason {
  id: string;
  rank: number;
  trophies: number;
}

export interface APIChatLanguage {
  name: string;
  id: number;
  languageCode: string;
}

export interface APIClan {
  reason?: string;
  message?: string;
  tag: string;
  name: string;
  type: "open" | "inviteOnly" | "closed";
  description: string;
  location?: APILocation;
  chatLanguage?: APIChatLanguage;
  badgeUrls: APIBadge;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  requiredTownhallLevel?: number;
  requiredVersusTrophies?: number;
  warFrequency:
    | "always"
    | "moreThanOncePerWeek"
    | "oncePerWeek"
    | "lessThanOncePerWeek"
    | "never"
    | "unknown";
  warWinStreak: number;
  warWins: number;
  warTies?: number;
  warLosses?: number;
  isWarLogPublic: boolean;
  warLeague?: APIWarLeague;
  members: number;
  labels: APILabel[];
  memberList: APIClanMember[];
  clanCapital: APIClanCapital;
}

export interface APIClanMember {
  name: string;
  tag: string;
  role: "member" | "admin" | "coLeader" | "leader";
  expLevel: number;
  league: APILeague;
  trophies: number;
  versusTrophies?: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

export interface APIClanCapital {
  capitalHallLevel?: number;
  districts?: { id: number; name: string; districtHallLevel: number }[];
}

export interface APIPlayer {
  reason?: string;
  message?: string;
  name: string;
  tag: string;
  townHallLevel: number;
  townHallWeaponLevel?: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel?: number;
  versusTrophies?: number;
  bestVersusTrophies?: number;
  versusBattleWins?: number;
  versusBattleWinCount?: number;
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  role?: string;
  warPreference?: "in" | "out";
  clan?: APIPlayerClan;
  league?: APILeague;
  legendStatistics?: APILegendStatistics;
  achievements: APIPlayerAchievement[];
  troops: APIPlayerItem[];
  heroes: APIPlayerItem[];
  spells: APIPlayerItem[];
  labels: APILabel[];
}

export interface APILegendStatistics {
  previousSeason?: APISeason;
  previousVersusSeason?: APISeason;
  bestVersusSeason?: APISeason;
  currentSeason?: APISeason;
  bestSeason?: APISeason;
  legendTrophies: number;
}

export interface APIPlayerClan {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: APIBadge;
}

export interface APIPlayerAchievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
  village: "home" | "builderBase";
}

export interface APIPlayerItem {
  name: string;
  level: number;
  maxLevel: number;
  superTroopIsActive?: boolean;
  village: "home" | "builderBase";
}

export interface APILocationList {
  items: APILocation[];
  paging: APIPaging;
}

export interface APILocation {
  localizedName?: string;
  id: number;
  name: string;
  isCountry: boolean;
  countryCode?: string;
}

export interface APIClanRankingList {
  reason?: string;
  message?: string;
  items: APIClanRanking[];
  paging: APIPaging;
}

export interface APIClanRanking {
  clanLevel: number;
  clanPoints: number;
  location: APILocation;
  members: number;
  tag: string;
  name: string;
  rank: number;
  previousRank: number;
  badgeUrls: APIBadge;
}

export interface APIPlayerRankingList {
  items: APIPlayerRanking[];
  paging: APIPaging;
}

export interface APIPlayerRanking {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  attackWins: number;
  defenseWins: number;
  rank: number;
  previousRank: number;
  clan?: Omit<APIPlayerClan, "clanLevel">;
  league: APILeague;
}

export interface APIClanVersusRankingList {
  reason?: string;
  message?: string;
  items: APIClanVersusRanking[];
  paging: APIPaging;
}

export interface APIClanVersusRanking {
  clanLevel: number;
  location: APILocation;
  members: number;
  tag: string;
  name: string;
  rank: number;
  previousRank: number;
  badgeUrls: APIBadge;
  clanVersusPoints: number;
}

export interface APIPlayerVersusRankingList {
  reason?: string;
  message?: string;
  items: APIPlayerVersusRanking[];
  paging: APIPaging;
}

export interface APIPlayerVersusRanking {
  tag: string;
  name: string;
  expLevel: number;
  versusTrophies: number;
  versusBattleWins: number;
  rank: number;
  previousRank: number;
  clan?: APIPlayerClan;
}

export interface APILeague {
  id: number;
  name: string;
  iconUrls: APIIcon;
}

export interface APIWarLeague {
  id: number;
  name: string;
}

export interface APILabel {
  id: number;
  name: string;
  iconUrls: APIIcon;
}

export interface APIError {
  status: number;
  message: string;
}
