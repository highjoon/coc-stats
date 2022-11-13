import React from "react";
import { GetServerSideProps } from "next/types";
import SearchError from "components/search/searchError";
import RankingsView from "components/rankings/rankingsView";
import { API_CLIENT_URL } from "constants/http";
import RANKINGS_TYPE_LIST from "constants/rankings";
import APIRequest from "utils/api";
import { IRankingsResult } from "types/rankings";
import { APILocationList } from "types/api";

interface IRankingsPage {
  rankingsData: Array<IRankingsResult>;
  locationList: APILocationList;
  message?: string;
  locationName: string;
  rankingsTypeName: string;
}

function RankingsPage({
  rankingsData,
  locationList,
  message,
  locationName,
  rankingsTypeName,
}: IRankingsPage) {
  if (message !== undefined) {
    return <SearchError message={message} />;
  }

  return (
    <RankingsView
      locationList={locationList}
      rankingsData={rankingsData}
      locationName={locationName}
      rankingsTypeName={rankingsTypeName}
    />
  );
}

export default RankingsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { slug } = query;
  const [rankingsType, locationId] = slug as string[];

  try {
    const response = await APIRequest<{
      result: IRankingsResult;
      status: number;
      message?: string;
    }>(
      `${String(API_CLIENT_URL)}/api/rankings/${String(
        rankingsType,
      )}/${encodeURIComponent(locationId)}`,
    );

    const locationResponse = await APIRequest<{
      result: APILocationList;
      status: number;
      message?: string;
    }>(`${String(API_CLIENT_URL)}/api/locations`);

    if (response.status > 200) {
      return {
        props: {
          message: response.message,
        },
      };
    }

    if (locationResponse.status > 200) {
      return {
        props: {
          message: locationResponse.message,
        },
      };
    }

    if (
      !locationResponse.result ||
      locationId === undefined ||
      !response.result ||
      !rankingsType
    ) {
      return {
        props: {
          message: "데이터가 존재하지 않습니다.",
        },
      };
    }

    const locationName = locationResponse.result.items.find(
      (item) => item.id === Number(locationId),
    )?.name;
    const rankingsTypeName = RANKINGS_TYPE_LIST.find(
      (item) => item.code === rankingsType,
    )?.name;

    return {
      props: {
        rankingsData: response.result,
        locationList: locationResponse.result,
        locationName,
        rankingsTypeName,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};
