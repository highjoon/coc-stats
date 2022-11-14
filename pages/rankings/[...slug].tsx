import React from "react";
import { GetServerSideProps } from "next/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import SearchError from "components/search/searchError";
import RankingsView from "components/rankings/rankingsView";
import { API_CLIENT_URL } from "constants/http";
import RANKINGS_TYPE_LIST from "constants/rankings";
import QUERY_KEYS from "constants/queryKeys";
import { getLocations } from "hooks/useGetLocations";
import APIRequest from "utils/api";
import { IRankingsResult } from "types/rankings";

interface IRankingsPage {
  rankingsData: Array<IRankingsResult>;
  message?: string;
  rankingsTypeName: string;
}

function RankingsPage({
  rankingsData,
  message,
  rankingsTypeName,
}: IRankingsPage) {
  if (message !== undefined) {
    return <SearchError message={message} />;
  }

  return (
    <RankingsView
      rankingsData={rankingsData}
      rankingsTypeName={rankingsTypeName}
    />
  );
}

export default RankingsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { slug } = query;
  const [rankingsType, locationId] = slug as string[];

  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery([QUERY_KEYS.locations], () =>
      getLocations(locationId),
    );

    const response = await APIRequest<{
      result: IRankingsResult;
      status: number;
      message?: string;
    }>(
      `${String(API_CLIENT_URL)}/api/rankings/${String(
        rankingsType,
      )}/${encodeURIComponent(locationId)}`,
    );
    const rankingsTypeName = RANKINGS_TYPE_LIST.find(
      (item) => item.code === rankingsType,
    )?.name;

    return {
      props: {
        rankingsData: response.result,
        rankingsTypeName,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
