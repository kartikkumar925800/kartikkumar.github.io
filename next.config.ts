import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // REMOVED basePath and assetPrefix because this is a User Page repo
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
