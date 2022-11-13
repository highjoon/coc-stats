import { IRankingsResult } from "types/rankings";

export interface IProps {
  countryName: string;
  rankingsData?: Array<IRankingsResult>;
}
