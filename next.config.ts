import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This is the magic line for GitHub Pages
  images: {
    unoptimized: true, // Necessary for static export
  },
  // Replace 'kartikkumar.github.io' with your exact repository name if different
  basePath: '/kartikkumar.github.io', 
  assetPrefix: '/kartikkumar.github.io',
};

export default nextConfig;