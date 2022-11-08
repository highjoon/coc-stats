import React, { useState } from "react";
import RankingsType from "components/rankings/rankingsType";
import { IRankingsType } from "types/rankings";
import { IRankingsView } from "./rankingsType/types";

function RankingsView({ locationList }: IRankingsView) {
  const [openCountryList, setOpenCountryList] = useState<boolean>(false);
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);
  const [country, setCountry] = useState<IRankingsType>({
    name: "국가",
    code: 0,
  });
  const [category, setCategory] = useState<{
    name: string;
    code: string;
  }>({
    name: "분류",
    code: "",
  });

  return (
    <section className="flex flex-col items-center justify-center w-full pt-5">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl p-4 space-y-4 overflow-scroll bg-default">
        <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg">
          <RankingsType
            locationList={locationList}
            country={country}
            category={category}
            openCountryList={openCountryList}
            openCategoryList={openCategoryList}
            setOpenCountryList={setOpenCountryList}
            setOpenCategoryList={setOpenCategoryList}
            setCountry={setCountry}
            setCategory={setCategory}
          />
          <div className="flex items-center justify-center w-full px-10 pb-4 border-b-2 md:px-6 border-b-default">
            <div
              role="presentation"
              className="p-3 text-center text-white rounded-md cursor-pointer w-80 bg-header/70 hover:bg-header md:w-full"
            >
              검색
            </div>
          </div>
          <div className="h-screen" />
        </div>
      </div>
    </section>
  );
}

export default RankingsView;
