import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/schema";

/**
 * Next.js Robots Metadata Route
 * Configured for maximum visibility and accessibility for:
 * - Search engine crawlers (Google, Bing, DuckDuckGo, etc.)
 * - AI search engines & LLM retrieval agents (GPTBot, ClaudeBot, PerplexityBot, Applebot, Google-Extended, etc.)
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/", "/api/", "/api"],
      },
      // Explicitly allow all major AI search, citation, and scraping agents
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "Googlebot-Video",
          "Google-Extended",
          "Bingbot",
          "msnbot",
          "DuckDuckBot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Applebot",
          "Applebot-Extended",
          "Bytespider",
          "cohere-ai",
          "Meta-ExternalAgent",
          "FacebookBot",
          "CCBot",
          "Diffbot",
          "Amazonbot",
          "OAI-SearchBot",
        ],
        allow: "/",
        disallow: ["/studio", "/studio/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
