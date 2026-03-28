import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // No basePath or assetPrefix needed for a [username].github.io repo!
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
