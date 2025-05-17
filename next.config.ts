import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/isaackb.github.io",
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
