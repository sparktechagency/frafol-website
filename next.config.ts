import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // Matches all domains using HTTP
      },
      {
        protocol: "https",
        hostname: "**", // Matches all domains using HTTPS
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: 10000000 * 1024 * 1024, //  MB in bytes
    },
  },
};

export default nextConfig;
