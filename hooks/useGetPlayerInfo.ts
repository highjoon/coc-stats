import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_CLIENT_URL } from "constants/http";
import QUERY_KEYS from "constants/queryKeys";
import axiosInstance from "lib/axios";
import { APIPlayer } from "types/api";
import { ITroopsResponse } from "types/troops";

export interface IGetPlayerInfo {
  result: APIPlayer;
  troops: ITroopsResponse;
  status: number;
  message: string;
}

interface IParams {
  tag: string;
  options?: UseQueryOptions<
    IGetPlayerInfo,
    AxiosError<{ status: number; message: string }>,
    IGetPlayerInfo,
    string[]
  >;
}

export const getPlayerInfo = async (tag: string): Promise<IGetPlayerInfo> => {
  const response = await axiosInstance.get<IGetPlayerInfo>(
    `${String(API_CLIENT_URL)}/api/players/${encodeURIComponent(String(tag))}`,
  );

  return response.data;
};

const useGetPlayerInfo = ({ tag, options }: IParams) => {
  return useQuery([QUERY_KEYS.players, tag], () => getPlayerInfo(tag), {
    retry: false,
    ...options,
  });
};

export default useGetPlayerInfo;
