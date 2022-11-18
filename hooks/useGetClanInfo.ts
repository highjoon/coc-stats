import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import QUERY_KEYS from "constants/queryKeys";
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
  const response = await axios.get<APIResponse<APIClan>>(
    `/api/clans/${encodeURIComponent(String(tag))}`,
  );

  return response.data;
};

const useGetClanInfo = ({ tag, options }: IParams) => {
  return useQuery([QUERY_KEYS.clans, tag], () => getClanInfo(tag), {
    ...options,
  });
};

export default useGetClanInfo;
