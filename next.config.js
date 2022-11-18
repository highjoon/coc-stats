/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
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
  webpack5: true,
});
