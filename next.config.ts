import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/products", destination: "/Products" },
      { source: "/products/:path*", destination: "/Products/:path*" },
    ];
  },
};

export default nextConfig;
