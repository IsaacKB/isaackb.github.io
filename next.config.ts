import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/isaackb.github.io",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
