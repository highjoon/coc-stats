import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import QUERY_KEYS from "constants/queryKeys";
import { APIError, APIPlayer, APIResponse } from "types/api";
import { ITroopsResponse } from "types/troops";

interface APIPlayerResponse extends APIResponse<APIPlayer> {
  troops: ITroopsResponse;
}

interface IParams {
  tag: string;
  options?: UseQueryOptions<
    APIPlayerResponse,
    AxiosError<APIError>,
    APIPlayerResponse,
    string[]
  >;
}

export const getPlayerInfo = async (
  tag: string,
): Promise<APIPlayerResponse> => {
  const response = await axios.get<APIPlayerResponse>(
    `/api/players/${encodeURIComponent(String(tag))}`,
  );

  return response.data;
};

const useGetPlayerInfo = ({ tag, options }: IParams) => {
  return useQuery([QUERY_KEYS.players, tag], () => getPlayerInfo(tag), {
    ...options,
  });
};

export default useGetPlayerInfo;
