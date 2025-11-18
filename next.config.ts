import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
      bodySizeLimit: 1000 * 1024 * 1024, // 10 MB in bytes
    },
  },
};

export default nextConfig;
