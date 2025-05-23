import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/isaackb.github.io" : "",
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
