import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import RankingsType from "components/rankings/rankingsType";
import RankingsList from "components/rankings/rankingsList";
import RankingsSearchForm from "components/rankings/searchForm";
import { ICategoryRankingsType, ICountryRankingsType } from "types/rankings";
import { IProps } from "./types";

function RankingsView({
  locationList,
  rankingsData,
  locationName,
  rankingsTypeName,
}: IProps) {
  const router = useRouter();

  const [initCountryCode, initCategoryCode] = [
    router.asPath.split("/")[3],
    router.asPath.split("/")[2],
  ];

  const [country, setCountry] = useState<ICountryRankingsType>({
    name: locationName,
    code: Number(initCountryCode),
  });
  const [category, setCategory] = useState<ICategoryRankingsType>({
    name: rankingsTypeName,
    code: initCategoryCode,
  });

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
      <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg">
        <RankingsType
          locationList={locationList}
          country={country}
          category={category}
          setCountry={setCountry}
          setCategory={setCategory}
        />
        <RankingsSearchForm
          categoryCode={category.code}
          countryCode={country.code}
        />
        <RankingsList countryName={country.name} rankingsData={rankingsData} />
      </div>
    </section>
  );
}

export default RankingsView;
