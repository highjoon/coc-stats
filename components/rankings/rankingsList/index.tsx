import React from "react";
import { useRouter } from "next/dist/client/router";
import RankingsInfoCard from "components/rankings/infoCard";
import SearchError from "components/search/searchError";
import useGetRankings from "hooks/useGetRankings";

function RankingsList() {
  const router = useRouter();

  const [currentCountryCode, currentRankingsType] = [
    router.asPath.split("/")[3],
    router.asPath.split("/")[2],
  ];

  const {
    data: rankingsData,
    isError: isRankingsError,
    error: rankingsError,
  } = useGetRankings({
    rankingType: currentRankingsType,
    locationId: currentCountryCode,
    options: { suspense: true },
  });

  if (!rankingsData || isRankingsError) {
    const message = rankingsError?.response?.data.message
      ? rankingsError?.response?.data.message
      : "문제가 발생했습니다.";

    return <SearchError message={message} />;
  }

  return (
    <div className="flex flex-col justify-center w-full bg-white rounded-lg">
      {rankingsData.result.items.map((data) => (
        <RankingsInfoCard key={data.tag} rankingsData={data} />
      ))}
    </div>
  );
}

export default RankingsList;
