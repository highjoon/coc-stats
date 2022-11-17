import { NextApiRequest, NextApiResponse } from "next/dist/shared/lib/utils";
import axios, { AxiosError } from "axios";
import axiosInstance from "lib/axios";
import { APIClan } from "types/api";

const clansHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axiosInstance.get<APIClan>(
      `/clans/${encodeURIComponent(String(req.query.tag))}`,
    );

    return res.status(200).json({
      status: 200,
      result: data,
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

export default clansHandler;
