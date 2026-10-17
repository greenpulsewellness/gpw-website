import type { NextConfig } from "next";

// Keep in sync with sanity/env.ts so Sanity images are always allowed for the active project
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fn9p8ovy";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.ngrok-free.app",
    "localhost",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "greenpulsewellness.com",
      },
      {
        protocol: "https",
        hostname: "*.greenpulsewellness.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: `/images/${sanityProjectId}/**`,
      },
    ],
  },
};

export default nextConfig;
