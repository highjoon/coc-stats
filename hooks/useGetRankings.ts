import { useInfiniteQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { API_WEB_TOKEN } from "constants/http";
import QUERY_KEYS from "constants/queryKeys";
import {
  APIAxiosHeader,
  APIError,
  APIRankingsData,
  APIResponse,
} from "types/api";

interface IParams {
  rankingsType: string;
  locationId: string;
  rankingsUrl: string;
}

const getRankings = async (
  url: string,
): Promise<AxiosResponse<APIResponse<APIRankingsData>, APIAxiosHeader>> => {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${String(API_WEB_TOKEN)}`,
    },
  });
  return response;
};

const useGetRankings = ({ rankingsType, locationId, rankingsUrl }: IParams) => {
  return useInfiniteQuery<
    AxiosResponse<APIResponse<APIRankingsData>, APIAxiosHeader>,
    AxiosError<APIError>,
    AxiosResponse<APIResponse<APIRankingsData>, APIAxiosHeader>,
    Array<string>
  >(
    [QUERY_KEYS.rankings, rankingsType, locationId],
    ({ pageParam = rankingsUrl }) => getRankings(pageParam as string),
    {
      getNextPageParam: (next) => {
        const after = next.data.result.paging.cursors?.after;
        if (!after) return undefined;
        return `${rankingsUrl}?after=${String(after)}`;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );
};

export default useGetRankings;
