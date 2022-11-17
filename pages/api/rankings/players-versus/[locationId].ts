import { NextApiResponse, NextApiRequest } from "next/dist/shared/lib/utils";
import axios, { AxiosError } from "axios";
import axiosInstance from "lib/axios";
import { APIPlayerVersusRankingList } from "types/api";
import { IRankingsResult } from "types/rankings";

const playerVersusRankingsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { locationId } = req.query;

  try {
    const { data } = await axiosInstance.get<APIPlayerVersusRankingList>(
      `/locations/${String(locationId)}/rankings/players-versus`,
    );

    const { items, paging } = data;

    const filteredItems: Array<IRankingsResult> = items.map((item) => {
      return {
        tag: item.tag,
        name: item.name,
        level: item.expLevel,
        trophies: item.versusTrophies,
        rank: item.rank,
        imgUrl: item.clan?.badgeUrls.small,
      };
    });

    const result = {
      items: filteredItems,
      rankingsTypeName: "플레이어 장인기지",
      paging,
    };

    return res.status(200).json({
      status: 200,
      result,
      message: "Success",
    });
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError<{ reason: string; message: string }>;

      if (error.response?.status) {
        return res.status(error.response?.status).json({
          status: error.response?.status,
          message: error.response?.statusText,
        });
      }

      return res.status(500).json({
        status: 500,
        message: "알 수 없는 에러가 발생했습니다.",
      });
    }
  }
};

export default playerVersusRankingsHandler;
