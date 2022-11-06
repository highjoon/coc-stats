import { Dispatch, SetStateAction } from "react";

export interface IRankTypeProps {
  openCountryList: boolean;
  openCategoryList: boolean;
  setOpenCountryList: Dispatch<SetStateAction<boolean>>;
  setOpenCategoryList: Dispatch<SetStateAction<boolean>>;
  setCountry: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
}
