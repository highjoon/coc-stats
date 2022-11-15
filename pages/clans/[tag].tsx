import React from "react";
import { GetServerSideProps } from "next/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import ClanSearchResult from "components/search/searchResult/clans";
import QUERY_KEYS from "constants/queryKeys";
import { getClanInfo } from "hooks/useGetClanInfo";

function ClanPage() {
  return <ClanSearchResult />;
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
