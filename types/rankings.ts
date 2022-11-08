export interface IRankingsType {
  name: string;
  code: number;
}

export interface IRankingsResult {
  tag: string;
  name: string;
  level: number;
  trophies: number;
  rank: number;
  imgUrl?: string;
}
