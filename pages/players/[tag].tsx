import React from "react";
import { GetServerSideProps } from "next/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import PlayerSearchResult from "components/search/searchResult/players";
import QUERY_KEYS from "constants/queryKeys";
import { getPlayerInfo } from "hooks/useGetPlayerInfo";

function PlayerPage() {
  return <PlayerSearchResult />;
}

export default PlayerPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tag } = context.query;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery([QUERY_KEYS.players, tag], () =>
      getPlayerInfo(String(tag)),
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
