import "server-only";

/**
 * Cheap abuse guards for public POST endpoints.
 *
 * The rate limiter is per server instance (in memory), so on serverless hosting it slows
 * casual spam but is not a hard limit. For a hard limit add a Cloudflare rate-limiting rule
 * on /api/* or back this with a shared store (e.g. Upstash Redis).
 */

const hits = new Map<string, number[]>();
let lastSweep = 0;

export function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

/** Returns true when the caller has exceeded `limit` requests within `windowMs`. */
export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();

  if (now - lastSweep > windowMs) {
    lastSweep = now;
    for (const [k, times] of hits) {
      if (!times.some((t) => now - t < windowMs)) hits.delete(k);
    }
  }

  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

/** Browsers always send Origin on cross-site POSTs; reject when it doesn't match this host. */
export function isCrossSite(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  try {
    return new URL(origin).host !== host;
  } catch {
    return true;
  }
}
