import axios, { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import QUERY_KEYS from "constants/queryKeys";
import { APIError, APILocationList, APIResponse } from "types/api";

interface APILocationData extends APILocationList {
  locationName?: string;
}

interface IParams {
  locationId: string;
  options?: UseQueryOptions<
    APIResponse<APILocationData>,
    AxiosError<APIError>,
    APIResponse<APILocationData>,
    string[]
  >;
}

export const getLocations = async (
  locationId: string,
): Promise<APIResponse<APILocationData>> => {
  const response = await axios.get<APIResponse<APILocationData>>(
    `/api/locations/${locationId}`,
  );

  return response.data;
};

const useGetLocations = ({ locationId, options }: IParams) => {
  return useQuery([QUERY_KEYS.locations], () => getLocations(locationId), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
    ...options,
  });
};

export default useGetLocations;
