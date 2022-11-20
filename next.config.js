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
  async rewrites() {
    return [
      {
        source: "/coc/:path*",
        destination: "https://api.clashofclans.com/v1/:path*",
      },
    ];
  },
};
