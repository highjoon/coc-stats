import React from "react";
import { useRouter } from "next/dist/client/router";
import InfiniteScroll from "react-infinite-scroller";
import RankingsInfoCard from "components/rankings/infoCard";
import LoadingSpinner from "components/common/loadingSpinner";
import SkeletonLoader from "components/rankings/skeletonLoader";
import useGetRankings from "hooks/useGetRankings";

function RankingsList() {
  const router = useRouter();

  const [locationId, rankingsType] = [
    router.asPath.split("/")[3],
    router.asPath.split("/")[2],
  ];

  const rankingsUrl = `/coc/locations/${locationId}/rankings/${rankingsType}`;

  const {
    data: responseData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
  } = useGetRankings({ rankingsType, locationId, rankingsUrl });

  if (isLoading || !responseData) {
    return <LoadingSpinner background={false} />;
  }

  return (
    <div className="flex flex-col justify-center w-full bg-white rounded-lg">
      <InfiniteScroll
        loadMore={() => {
          fetchNextPage();
        }}
        hasMore={hasNextPage}
      >
        {responseData.pages.map((data) => {
          return data.map((item) => {
            return <RankingsInfoCard key={item.tag} rankingsData={item} />;
          });
        })}
        {isFetching && <SkeletonLoader />}
      </InfiniteScroll>
    </div>
  );
}

export default RankingsList;
