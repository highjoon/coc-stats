import { useInfiniteQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { API_WEB_TOKEN } from "constants/http";
import QUERY_KEYS from "constants/queryKeys";
import { APIRankingsResponse } from "types/api";
import { IRankingsResult } from "types/rankings";

interface IParams {
  rankingsType: string;
  locationId: string;
  rankingsUrl: string;
}

const getRankings = async (
  url: string,
): Promise<AxiosResponse<APIRankingsResponse>> => {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${String(API_WEB_TOKEN)}`,
    },
    params: {
      limit: 20,
    },
  });
  return response;
};

const useGetRankings = ({ rankingsType, locationId, rankingsUrl }: IParams) => {
  return useInfiniteQuery<
    AxiosResponse<APIRankingsResponse>,
    AxiosError,
    Array<IRankingsResult>,
    Array<string>
  >(
    [QUERY_KEYS.rankings, rankingsType, locationId],
    ({ pageParam = rankingsUrl }) => getRankings(pageParam as string),
    {
      getNextPageParam: (next) => {
        const after = next.data.paging.cursors?.after;
        if (!after) return undefined;
        return `${rankingsUrl}?limit=20&after=${String(after)}`;
      },
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      select(response) {
        let rankingsData: Array<IRankingsResult[]>;

        switch (rankingsType) {
          case "players":
            rankingsData = response.pages.map((page) => {
              return page.data.items.map((item) => {
                return {
                  tag: item.tag,
                  name: item.name,
                  level: item.expLevel,
                  trophies: item.trophies,
                  rank: item.rank,
                  imgUrl: item.league.iconUrls.small,
                };
              });
            });
            break;
          case "clans":
            rankingsData = response.pages.map((page) => {
              return page.data.items.map((item) => {
                return {
                  tag: item.tag,
                  name: item.name,
                  level: item.clanLevel,
                  trophies: item.clanPoints,
                  rank: item.rank,
                  imgUrl: item.badgeUrls.small,
                };
              });
            });
            break;
          case "players-versus":
            rankingsData = response.pages.map((page) => {
              return page.data.items.map((item) => {
                return {
                  tag: item.tag,
                  name: item.name,
                  level: item.expLevel,
                  trophies: item.versusTrophies,
                  rank: item.rank,
                  imgUrl: "/assets/images/versusAxes.webp",
                };
              });
            });
            break;
          case "clans-versus":
            rankingsData = response.pages.map((page) => {
              return page.data.items.map((item) => {
                return {
                  tag: item.tag,
                  name: item.name,
                  level: item.clanLevel,
                  trophies: item.clanVersusPoints,
                  rank: item.rank,
                  imgUrl: item.badgeUrls.small,
                };
              });
            });
            break;
          default:
            rankingsData = [];
            break;
        }

        return {
          pages: rankingsData,
          pageParams: response.pageParams,
        };
      },
    },
  );
};

export default useGetRankings;
