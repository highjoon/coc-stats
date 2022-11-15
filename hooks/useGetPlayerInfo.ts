import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_CLIENT_URL } from "constants/http";
import QUERY_KEYS from "constants/queryKeys";
import axiosInstance from "lib/axios";
import { APIPlayer, APIResponse } from "types/api";
import { ITroopsResponse } from "types/troops";

interface APIPlayerResponse extends APIResponse<APIPlayer> {
  troops: ITroopsResponse;
}

interface IParams {
  tag: string;
  options?: UseQueryOptions<
    APIPlayerResponse,
    AxiosError<{ status: number; message: string }>,
    APIPlayerResponse,
    string[]
  >;
}

export const getPlayerInfo = async (
  tag: string,
): Promise<APIPlayerResponse> => {
  const response = await axiosInstance.get<APIPlayerResponse>(
    `${String(API_CLIENT_URL)}/api/players/${encodeURIComponent(String(tag))}`,
  );

  return response.data;
};

const useGetPlayerInfo = ({ tag, options }: IParams) => {
  return useQuery([QUERY_KEYS.players, tag], () => getPlayerInfo(tag), {
    ...options,
  });
};

export default useGetPlayerInfo;
