import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import { API_BASE_URL, API_WEB_TOKEN } from "constants/http";
import APIRequest from "utils/api";
import { APIPlayer } from "types/api";
import { PETS, SIEGE_MACHINES, SUPER_TROOPS } from "constants/troops";
import { ITroopsResponse } from "types/troops";

const playersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
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

    const troopsResponse: ITroopsResponse = {
      home: [],
      pets: [],
      siegeMachines: [],
      superTroops: [],
      builderBase: [],
    };

    response.troops.forEach((troop) => {
      if (SIEGE_MACHINES.includes(troop.name)) {
        troopsResponse.siegeMachines.push(troop);
      } else if (PETS.includes(troop.name)) {
        troopsResponse.pets.push(troop);
      } else if (SUPER_TROOPS.includes(troop.name)) {
        troopsResponse.superTroops.push(troop);
      } else if (troop.village === "builderBase") {
        troopsResponse.builderBase.push(troop);
      } else {
        troopsResponse.home.push(troop);
      }
    });

    if (response.reason !== undefined) {
      res.status(404).json({ status: 404, message: "찾을 수 없습니다." });
    } else {
      res
        .status(200)
        .json({ status: 200, result: response, troops: troopsResponse });
    }
  } catch (e) {
    res.status(500).json({ status: 500, message: "문제가 발생했습니다." });
  }
};

export default playersHandler;
