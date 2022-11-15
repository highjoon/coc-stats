import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import LoadingSpinner from "components/common/loadingSpinner";
import QUERY_KEYS from "constants/queryKeys";
import { getLocations } from "hooks/useGetLocations";
import { getRankingsData } from "hooks/useGetRankings";

const DynamicRankingsView = dynamic(
  () => import("components/rankings/rankingsView"),
  { suspense: true },
);

function RankingsPage() {
  return (
    <>
      <Head>
        <title>Clash of Clans Stats - Rankings</title>
      </Head>
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicRankingsView />
      </Suspense>
    </>
  );
}

export default RankingsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { slug } = query;

  const [rankingType, locationId] = slug as string[];

  const queryClient = new QueryClient();

  try {
    await Promise.all([
      queryClient.prefetchQuery([QUERY_KEYS.locations], () =>
        getLocations(locationId),
      ),
      queryClient.prefetchQuery(
        [QUERY_KEYS.rankings, QUERY_KEYS.players, locationId],
        () =>
          getRankingsData({
            rankingType,
            locationId,
          }),
      ),
    ]);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
