import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Page statique servie depuis public/lola/index.html
      { source: "/lola", destination: "/lola/index.html" },
    ];
  },
};

export default nextConfig;
