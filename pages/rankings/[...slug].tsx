/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { getLocations } from "hooks/useGetLocations";

const DynamicRankingsView = dynamic(
  () => import("components/rankings/rankingsView"),
  { suspense: true },
);

function RankingsPage() {
  return (
    <>
      <Head>
        <title>Clash of Clans Stats - Rankings</title>
        <meta name="description" content="Clash of Clans Stats - 랭킹" />
        <meta
          name="og:description"
          content="전 세계의 랭킹이 궁금해? 여기서 확인해봐!"
        />
      </Head>
      <DynamicRankingsView />
    </>
  );
}

export default RankingsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { slug } = query;

  const [_, locationId] = slug as string[];

  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery([QUERY_KEYS.locations], () =>
      getLocations(locationId),
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return { notFound: true };
  } finally {
    queryClient.clear();
  }
};
