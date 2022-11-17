import { Dispatch, SetStateAction } from "react";
import { ICountryRankingsType, ICategoryRankingsType } from "types/rankings";

export interface IProps {
  country: ICountryRankingsType;
  category: ICategoryRankingsType;
  setCountry: Dispatch<SetStateAction<ICountryRankingsType>>;
  setCategory: Dispatch<SetStateAction<ICategoryRankingsType>>;
}
