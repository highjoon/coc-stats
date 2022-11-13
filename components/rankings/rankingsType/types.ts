import { Dispatch, SetStateAction } from "react";
import { APILocationList } from "types/api";
import {
  IRankingsResult,
  ICountryRankingsType,
  ICategoryRankingsType,
} from "types/rankings";

export interface IRankingsProps {
  locationList: APILocationList;
  country: ICountryRankingsType;
  category: ICategoryRankingsType;
  setCountry: Dispatch<SetStateAction<ICountryRankingsType>>;
  setCategory: Dispatch<SetStateAction<ICategoryRankingsType>>;
}

export interface IRankingsView {
  locationList: APILocationList;
  rankingsData?: Array<IRankingsResult>;
  locationName: string;
  rankingsTypeName: string;
}
