import { APIWarLeague } from "types/api";

export interface IProps {
  imgUrl?: string;
  name?: string;
  tag?: string;
  type?: string;
  clanLevel?: number;
  countryName?: string;
  description?: string;
  clanPoints?: number;
  clanVersusPoints?: number;
  warFrequency?: string;
  warWinStreak?: number;
  warWins?: number;
  warTies?: number;
  warLosses?: number;
  isWarLogPublic?: boolean;
  warLeague?: APIWarLeague;
}
