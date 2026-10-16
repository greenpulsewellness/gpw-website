/**
 * next/image can only optimize hosts listed in next.config.ts. Sanity's CDN is listed,
 * so its images get resized/converted; other external URLs are passed through as-is.
 */
export function skipImageOptimization(src?: string) {
  return Boolean(src?.startsWith("http") && !src.startsWith("https://cdn.sanity.io/"));
}
