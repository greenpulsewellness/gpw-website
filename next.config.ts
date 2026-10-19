import type { NextConfig } from "next";

// Keep in sync with sanity/env.ts so Sanity images are always allowed for the active project
const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fn9p8ovy";

const isProd = process.env.NODE_ENV === "production";

/**
 * Content-Security-Policy for the public site (not applied to /studio, which needs a much
 * wider policy). Next.js injects inline bootstrap scripts, so script-src keeps
 * 'unsafe-inline' (the "without nonces" setup from the Next.js CSP guide); everything else
 * is locked to this origin plus Sanity's image CDN.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://greenpulsewellness.com https://*.greenpulsewellness.com",
  "media-src 'self' blob: data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const baseSecurityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.ngrok-free.app",
    "localhost",
  ],
  images: {
    formats: ["image/avif", "image/webp"],
    // Product photos change rarely; Sanity URLs are content-hashed. Cache optimized variants for a week.
    minimumCacheTTL: 60 * 60 * 24 * 7,
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
        hostname: "cdn.sanity.io",
        pathname: `/images/${sanityProjectId}/**`,
      },
    ],
  },
  async headers() {
    return [
      {
        // Everything except the Sanity Studio gets the strict policy.
        source: "/((?!studio).*)",
        headers: [
          ...baseSecurityHeaders,
          ...(isProd
            ? [
                { key: "Strict-Transport-Security", value: "max-age=63072000" },
                { key: "Content-Security-Policy", value: csp },
              ]
            : []),
        ],
      },
      {
        // The Studio is a large app that loads its own workers and assets; keep the basics only.
        source: "/studio/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
