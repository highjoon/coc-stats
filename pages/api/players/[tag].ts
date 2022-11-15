import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "constants/http";
import { PETS, SIEGE_MACHINES, SUPER_TROOPS } from "constants/troops";
import axiosInstance from "lib/axios";
import { APIPlayer } from "types/api";
import { ITroopsResponse } from "types/troops";

const playersHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axiosInstance.get<APIPlayer>(
      `${API_BASE_URL}/players/${encodeURIComponent(String(req.query.tag))}`,
    );

    const troopsResponse: ITroopsResponse = {
      home: [],
      pets: [],
      siegeMachines: [],
      superTroops: [],
      builderBase: [],
    };

    data.troops.forEach((troop) => {
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

    return res.status(200).json({
      status: 200,
      result: data,
      troops: troopsResponse,
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

export default playersHandler;
