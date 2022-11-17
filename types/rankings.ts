export interface ICountryRankingsType {
  name: string;
  code: number;
}

export interface ICategoryRankingsType {
  name: string;
  code: string;
}

export interface IRankingsResult {
  tag: string;
  name: string;
  level: number;
  trophies: number;
  rank: number;
  imgUrl?: string;
}
