import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/courses", destination: "/programs" },
      { source: "/en/courses", destination: "/en/programs" },
      { source: "/courses/:slug", destination: "/programs/:slug" },
      { source: "/en/courses/:slug", destination: "/en/programs/:slug" }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ]
  }
};

export default nextConfig;
