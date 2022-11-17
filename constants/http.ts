const dev = process.env.NODE_ENV !== "production";

export const API_BASE_URL = "https://api.clashofclans.com/v1";
export const API_WEB_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
export const API_CLIENT_URL = dev
  ? "http://localhost:3000"
  : process.env.NEXT_PUBLIC_PROD_CLIENT_URL;
