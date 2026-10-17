/** Sanity project config — read from .env.local (see .env.example). */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fn9p8ovy";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-01";
