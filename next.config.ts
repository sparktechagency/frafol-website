import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "10.10.10.32"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
