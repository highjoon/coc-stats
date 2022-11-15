import React, { Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import LoadingSpinner from "components/common/loadingSpinner";
import QUERY_KEYS from "constants/queryKeys";
import { getClanInfo } from "hooks/useGetClanInfo";

const DynamicClanSearchResult = dynamic(
  () => import("components/search/searchResult/clans"),
  { suspense: true },
);

function ClanPage() {
  return (
    <>
      <Head>
        <title>Clash of Clans Stats - Clan</title>
      </Head>
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicClanSearchResult />
      </Suspense>
    </>
  );
}

export default ClanPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag } = context.query;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery([QUERY_KEYS.clans, tag], () =>
      getClanInfo(String(tag)),
    );

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
