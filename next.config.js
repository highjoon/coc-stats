/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-assets.clashofclans.com",
      },
    ],
  },
};

module.exports = nextConfig;
