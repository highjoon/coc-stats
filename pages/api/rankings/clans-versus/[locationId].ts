import { API_BASE_URL, API_WEB_TOKEN } from "constants/http";
import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import APIRequest from "utils/api";
import { APIClanVersusRankingList } from "types/api";
import { IRankingsResult } from "types/rankings";

const clanVersusRankingsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { locationId } = req.query;

  try {
    const response = await APIRequest<APIClanVersusRankingList>(
      `${API_BASE_URL}/locations/${String(locationId)}/rankings/clans-versus`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${String(API_WEB_TOKEN)}`,
        },
      },
    );

    const { items, reason, message } = response;

    const result: Array<IRankingsResult> = items.map((item) => {
      return {
        tag: item.tag,
        name: item.name,
        level: item.clanLevel,
        trophies: item.clanVersusPoints,
        rank: item.rank,
        imgUrl: item.badgeUrls.small,
      };
    });

    if (reason !== undefined) {
      res.status(404).json({ status: 404, message });
    } else {
      res.status(200).json({ status: 200, result });
    }
  } catch (e) {
    res.status(500).json({ status: 500, message: "문제가 발생했습니다." });
  }
};

export default clanVersusRankingsHandler;
