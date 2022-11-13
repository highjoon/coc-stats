import { Dispatch, SetStateAction } from "react";
import { APILocationList } from "types/api";
import { ICountryRankingsType, ICategoryRankingsType } from "types/rankings";

export interface IProps {
  locationList: APILocationList;
  country: ICountryRankingsType;
  category: ICategoryRankingsType;
  setCountry: Dispatch<SetStateAction<ICountryRankingsType>>;
  setCategory: Dispatch<SetStateAction<ICategoryRankingsType>>;
}
