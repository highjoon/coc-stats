import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import ClanSearchResult from "components/search/searchResult/clans";
import QUERY_KEYS from "constants/queryKeys";
import { getClanInfo } from "hooks/useGetClanInfo";

function ClanPage() {
  return (
    <>
      <Head>
        <title>Clash of Clans Stats - Clan</title>
      </Head>
      <ClanSearchResult />
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
