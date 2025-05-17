import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/isaackb.github.io" : "",
  assetPrefix: isProd ? "/isaackb.github.io/" : "",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  /* config options here */
};

export default nextConfig;
