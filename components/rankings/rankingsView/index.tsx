/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import RankingsType from "components/rankings/rankingsType";
import RankingsList from "components/rankings/rankingsList";
import RankingsSearchForm from "components/rankings/searchForm";
import LoadingSpinner from "components/common/loadingSpinner";
import SearchError from "components/search/searchError";
import useGetLocations from "hooks/useGetLocations";
import { ICategoryRankingsType, ICountryRankingsType } from "types/rankings";
import { IProps } from "./types";

function RankingsView({ rankingsData, rankingsTypeName }: IProps) {
  const router = useRouter();

  const [initCountryCode, initCategoryCode] = [
    router.asPath.split("/")[3],
    router.asPath.split("/")[2],
  ];

  const { data, isLoading, isError, error } = useGetLocations({
    locationId: initCountryCode,
  });

  const [country, setCountry] = useState<ICountryRankingsType>({
    name: data?.result.locationName as string,
    code: Number(initCountryCode),
  });
  const [category, setCategory] = useState<ICategoryRankingsType>({
    name: rankingsTypeName,
    code: initCategoryCode,
  });

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
        <LoadingSpinner />
      </section>
    );
  }

  if (!data || isError) {
    const message = error?.response?.data.message
      ? error?.response?.data.message
      : "문제가 발생했습니다.";

    return <SearchError message={message} />;
  }

  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl p-4 mt-5 space-y-4 overflow-scroll bg-default">
      <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg">
        <RankingsType
          locationList={data.result}
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
