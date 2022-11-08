import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import RankingsView from "components/rankings";
import SearchError from "components/search/searchError";
import { API_CLIENT_URL } from "constants/http";
import APIRequest from "utils/api";
import { APILocationList, APIPlayerRankingList } from "types/api";

interface IRankingsPage {
  locationList: APILocationList;
  message?: string;
}

type Props = {
  locationList?: APILocationList;
  rankingsList?: APIPlayerRankingList;
  message?: string;
};

interface Params extends ParsedUrlQuery {
  locationId: string;
}

function RankingsPage({ locationList, message }: IRankingsPage) {
  if (message !== undefined) {
    return <SearchError message={message} />;
  }

  return <RankingsView locationList={locationList} />;
}

export default RankingsPage;

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const params = context.params!;
  const { locationId } = params;

  try {
    const locationResponse = await APIRequest<{
      result: APILocationList;
      status: number;
      message?: string;
    }>(`${String(API_CLIENT_URL)}/api/locations`);

    if (locationResponse.status > 200) {
      return {
        props: {
          message: locationResponse.message,
        },
      };
    }

    return {
      props: {
        locationList: locationResponse.result,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
