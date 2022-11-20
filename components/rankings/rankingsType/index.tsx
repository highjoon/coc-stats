import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import RankingsSelectBox from "components/rankings/rankingsType/selectBox";
import SearchError from "components/search/searchError";
import RANKINGS_TYPE_LIST from "constants/rankings";
import useGetLocations from "hooks/useGetLocations";
import { APILocation } from "types/api";
import { ICategoryRankingsType, ICountryRankingsType } from "types/rankings";
import { IProps } from "./types";

function RankingsType({ country, category, setCountry, setCategory }: IProps) {
  const router = useRouter();

  const currentCountryCode = router.asPath.split("/")[3];

  const {
    data,
    isError: isLocationsError,
    error: locationsError,
  } = useGetLocations({
    locationId: currentCountryCode,
    options: { suspense: true },
  });

  const [openCountryList, setOpenCountryList] = useState<boolean>(false);
  const [openCategoryList, setOpenCategoryList] = useState<boolean>(false);

  const toggleCountryList = () => {
    setOpenCountryList((prev) => !prev);
  };

  const toggleCategoryList = () => {
    setOpenCategoryList((prev) => !prev);
  };

  const onClickCountry = (type: ICountryRankingsType) => {
    setCountry({ name: type.name, code: type.code });
  };

  const onClickCategory = (type: ICategoryRankingsType) => {
    setCategory({ name: type.name, code: type.code });
  };

  if (!data || isLocationsError) {
    const message = locationsError?.response?.data.message
      ? locationsError?.response?.data.message
      : "문제가 발생했습니다.";

    return <SearchError background message={message} />;
  }

  return (
    <div className="flex items-center justify-between w-full gap-3 px-10 py-4 md:px-6 md:flex-col">
      <RankingsSelectBox toggleHandler={toggleCountryList} name={country.name}>
        {openCountryList && (
          <div className="absolute left-0 z-10 w-full pb-0 overflow-scroll rounded-md h-60 bg-layout top-14">
            <ul>
              {data?.result.items.map(
                (location: APILocation) =>
                  location.name && (
                    <li
                      key={`${String(location.id)}`}
                      className="py-2"
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
      </RankingsSelectBox>
      <RankingsSelectBox
        toggleHandler={toggleCategoryList}
        name={category.name}
      >
        {openCategoryList && (
          <div className="absolute left-0 z-10 w-full pb-0 rounded-md bg-layout top-14">
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
      </RankingsSelectBox>
    </div>
  );
}

export default RankingsType;
