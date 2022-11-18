/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-assets.clashofclans.com",
      },
      {
        protocol: "https",
        hostname: "icons8.com",
      },
    ],
  },
  trailingSlash: true,
};
