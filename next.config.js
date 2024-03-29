/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "books.google.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "books.google.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
