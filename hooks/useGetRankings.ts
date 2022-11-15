import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_CLIENT_URL } from "constants/http";
import QUERY_KEYS from "constants/queryKeys";
import axiosInstance from "lib/axios";
import { APIPaging, APIResponse } from "types/api";
import { IRankingsResult } from "types/rankings";

export interface APIRankingsData {
  items: IRankingsResult[];
  paging: APIPaging;
  rankingsTypeName: string;
}

interface IParams {
  rankingType: string;
  locationId: string;
  options?: UseQueryOptions<
    APIResponse<APIRankingsData>,
    AxiosError<{ status: number; message: string }>,
    APIResponse<APIRankingsData>,
    string[]
  >;
}

export const getRankingsData = async ({
  rankingType,
  locationId,
}: {
  rankingType: string;
  locationId: string;
}): Promise<APIResponse<APIRankingsData>> => {
  const response = await axiosInstance.get<APIResponse<APIRankingsData>>(
    `${String(API_CLIENT_URL)}/api/rankings/${rankingType}/${encodeURIComponent(
      locationId,
    )}`,
  );

  return response.data;
};

const useGetRankings = ({ rankingType, locationId, options }: IParams) => {
  return useQuery(
    [QUERY_KEYS.rankings, rankingType, locationId],
    () => getRankingsData({ rankingType, locationId }),
    { ...options },
  );
};

export default useGetRankings;