import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { API_CLIENT_URL } from "constants/http";
import QUERY_KEYS from "constants/queryKeys";
import axiosInstance from "lib/axios";
import { APIClan, APIResponse } from "types/api";

interface IParams {
  tag: string;
  options?: UseQueryOptions<
    APIResponse<APIClan>,
    AxiosError<{ status: number; message: string }>,
    APIResponse<APIClan>,
    string[]
  >;
}

export const getClanInfo = async (
  tag: string,
): Promise<APIResponse<APIClan>> => {
  const response = await axiosInstance.get<APIResponse<APIClan>>(
    `${String(API_CLIENT_URL)}/api/clans/${encodeURIComponent(String(tag))}`,
  );

  return response.data;
};

const useGetClanInfo = ({ tag, options }: IParams) => {
  return useQuery([QUERY_KEYS.clans, tag], () => getClanInfo(tag), {
    ...options,
  });
};

export default useGetClanInfo;
