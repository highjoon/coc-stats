import React from "react";
import { useRouter } from "next/dist/client/router";
import InfiniteScroll from "react-infinite-scroller";
import RankingsInfoCard from "components/rankings/infoCard";
import LoadingSpinner from "components/common/loadingSpinner";
import SkeletonLoader from "components/rankings/skeletonLoader";
import useGetRankings from "hooks/useGetRankings";
import SearchError from "components/search/searchError";

function RankingsList() {
  const router = useRouter();

  const [locationId, rankingsType] = [
    router.asPath.split("/")[3],
    router.asPath.split("/")[2],
  ];

  const rankingsUrl = `/api/rankings/${rankingsType}/${locationId}`;

  const {
    data: responseData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetRankings({ rankingsType, locationId, rankingsUrl });

  if (isLoading) {
    return <LoadingSpinner background={false} />;
  }

  if (isError || !responseData) {
    const message = error?.response?.data.message
      ? error?.response?.data.message
      : "문제가 발생했습니다.";

    return <SearchError background={false} message={message} />;
  }

  return (
    <div className="flex flex-col justify-center w-full bg-white rounded-lg">
      <InfiniteScroll
        loadMore={() => {
          fetchNextPage();
        }}
        hasMore={hasNextPage}
      >
        {responseData.pages.map((page) => {
          return page.data.result.items.map((item) => {
            return <RankingsInfoCard key={item.tag} rankingsData={item} />;
          });
        })}
        {isFetching && <SkeletonLoader />}
      </InfiniteScroll>
    </div>
  );
}

export default RankingsList;
