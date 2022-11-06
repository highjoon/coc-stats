import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import { API_BASE_URL, API_WEB_TOKEN } from "constants/http";
import APIRequest from "utils/api";
import { APIPlayer } from "types/api";

const PlayerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await APIRequest<APIPlayer>(
      `${API_BASE_URL}/players/${encodeURIComponent(String(req.query.tag))}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${String(API_WEB_TOKEN)}`,
        },
      },
    );
    if (response.reason !== undefined) {
      res.status(404).json({ status: 404, message: "찾을 수 없습니다." });
    } else {
      res.status(200).json({ status: 200, result: response });
    }
  } catch (e) {
    res.status(500).json({ status: 500, message: "문제가 발생했습니다." });
  }
};

export default PlayerHandler;
