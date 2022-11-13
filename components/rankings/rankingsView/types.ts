import { APILocationList } from "types/api";
import { IRankingsResult } from "types/rankings";

export interface IProps {
  locationList: APILocationList;
  rankingsData?: Array<IRankingsResult>;
  locationName: string;
  rankingsTypeName: string;
}
