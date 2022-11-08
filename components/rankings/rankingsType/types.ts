import { Dispatch, SetStateAction } from "react";
import { APILocationList } from "types/api";
import { IRankingsType } from "types/rankings";

export interface IRankingsProps {
  locationList: APILocationList;
  country: IRankingsType;
  category: {
    name: string;
    code: string;
  };
  openCountryList: boolean;
  openCategoryList: boolean;
  setOpenCountryList: Dispatch<SetStateAction<boolean>>;
  setOpenCategoryList: Dispatch<SetStateAction<boolean>>;
  setCountry: Dispatch<SetStateAction<IRankingsType>>;
  setCategory: Dispatch<
    SetStateAction<{
      name: string;
      code: string;
    }>
  >;
}

export interface IRankingsView {
  locationList: APILocationList;
}
