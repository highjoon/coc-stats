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
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      },
    ];
  },
};
