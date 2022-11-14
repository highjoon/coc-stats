import axios, { AxiosRequestConfig } from "axios";
import { API_BASE_URL, API_WEB_TOKEN } from "constants/http";

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${String(API_WEB_TOKEN)}`,
  },
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
