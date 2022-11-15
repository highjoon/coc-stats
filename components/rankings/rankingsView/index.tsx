import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import RankingsType from "components/rankings/rankingsType";
import RankingsList from "components/rankings/rankingsList";
import RankingsSearchForm from "components/rankings/searchForm";
import { ICategoryRankingsType, ICountryRankingsType } from "types/rankings";

function RankingsView() {
  const router = useRouter();

  const [currentCountryCode, currentRankingsType] = [
    router.asPath.split("/")[3],
    router.asPath.split("/")[2],
  ];

  const [country, setCountry] = useState<ICountryRankingsType>({
    name: "South Korea",
    code: Number(currentCountryCode),
  });
  const [category, setCategory] = useState<ICategoryRankingsType>({
    name: "플레이어",
    code: currentRankingsType,
  });

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
      <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg">
        <RankingsType
          country={country}
          category={category}
          setCountry={setCountry}
          setCategory={setCategory}
        />
        <RankingsSearchForm
          categoryCode={category.code}
          countryCode={country.code}
        />
        <RankingsList countryName={country.name} />
      </div>
    </section>
  );
}

export default RankingsView;
