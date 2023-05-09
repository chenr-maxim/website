/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-sjc3-1.cdninstagram.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
