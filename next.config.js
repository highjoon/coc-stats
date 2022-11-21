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
  async headers() {
    return [
      {
        source: "/coc/:path*",
        headers: [
          {
            key: "Accept",
            value: "application/json",
          },
          {
            key: "Authorization",
            value: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        ],
      },
    ];
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
