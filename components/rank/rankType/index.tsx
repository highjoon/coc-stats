import React from "react";
import { flexBetweenCenter } from "styles/globalStyles";
import { IRankTypeProps } from "./types";

function RankType({
  openCountryList,
  openCategoryList,
  setOpenCountryList,
  setOpenCategoryList,
  setCountry,
  setCategory,
}: IRankTypeProps) {
  const toggleCountryList = () => {
    setOpenCountryList((prev) => !prev);
  };

  const toggleCategoryList = () => {
    setOpenCategoryList((prev) => !prev);
  };

  const onClickCountry = (e: React.MouseEvent<HTMLLIElement>) => {
    setCountry(e.currentTarget.innerText);
  };

  const onClickCategory = (e: React.MouseEvent<HTMLLIElement>) => {
    setCategory(e.currentTarget.innerText);
  };

  return (
    <div
      className={`${flexBetweenCenter} gap-3 w-full py-4 px-10 md:px-6 border-b-2 border-b-default`}
    >
      <div
        role="presentation"
        className="relative w-full p-3 text-center text-white rounded-md cursor-pointer bg-layout"
        onClick={toggleCountryList}
      >
        국가
        {openCountryList && (
          <div className="absolute left-0 z-10 w-full h-64 p-3 overflow-scroll rounded-md bg-layout top-14">
            <ul>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
              <li className="p-3" onClick={onClickCountry} role="presentation">
                국가 리스트
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        role="presentation"
        className="relative w-full p-3 text-center text-white rounded-md cursor-pointer bg-layout"
        onClick={toggleCategoryList}
      >
        분류
        {openCategoryList && (
          <div className="absolute left-0 z-10 w-full h-64 p-3 overflow-scroll rounded-md bg-layout top-14">
            <ul>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
              <li className="p-3" onClick={onClickCategory} role="presentation">
                분류 리스트
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RankType;
