import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kartikkumar.github.io',
  assetPrefix: '/kartikkumar.github.io/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
