import React from "react";
import RANKINGS_TYPE_LIST from "constants/rankings";
import { APILocation } from "types/api";
import { IRankingsType } from "types/rankings";
import { IRankingsProps } from "./types";

function RankingsType({
  locationList,
  country,
  category,
  openCountryList,
  openCategoryList,
  setOpenCountryList,
  setOpenCategoryList,
  setCountry,
  setCategory,
}: IRankingsProps) {
  const toggleCountryList = () => {
    setOpenCountryList((prev) => !prev);
  };

  const toggleCategoryList = () => {
    setOpenCategoryList((prev) => !prev);
  };

  const onClickCountry = (type: IRankingsType) => {
    setCountry({ name: type.name, code: type.code });
  };

  const onClickCategory = (type: { name: string; code: string }) => {
    setCategory({ name: type.name, code: type.code });
  };

  return (
    <div className="flex items-center justify-between w-full gap-3 px-10 py-4 md:px-6">
      <div
        role="presentation"
        className="relative w-full p-3 text-center text-white rounded-md cursor-pointer bg-layout"
        onClick={toggleCountryList}
      >
        {country.name}
        {openCountryList && (
          <div className="absolute left-0 z-10 w-full p-3 pb-0 overflow-scroll rounded-md h-80 bg-default top-14">
            <ul>
              {locationList.items.map(
                (location: APILocation) =>
                  location.name && (
                    <li
                      key={`${String(location.id)}`}
                      className="p-3"
                      role="presentation"
                      onClick={() =>
                        onClickCountry({
                          name: location.name,
                          code: location.id,
                        })
                      }
                    >
                      {location.name}
                    </li>
                  ),
              )}
            </ul>
          </div>
        )}
      </div>
      <div
        role="presentation"
        className="relative w-full p-3 text-center text-white rounded-md cursor-pointer bg-layout"
        onClick={toggleCategoryList}
      >
        {category.name}
        {openCategoryList && (
          <div className="absolute left-0 z-10 w-full p-3 pb-0 overflow-scroll rounded-md bg-layout top-14">
            <ul>
              {RANKINGS_TYPE_LIST.map((type) => (
                <li
                  key={type.code}
                  className="py-2"
                  onClick={() => onClickCategory(type)}
                  role="presentation"
                >
                  {type.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RankingsType;
