/**
 * Creates (or updates) the Sanity webhook that refreshes product and blog pages after a publish.
 * It calls the app's /api/revalidate route, which verifies the signature with SANITY_REVALIDATE_SECRET.
 *
 *   npm run sanity:webhook -- https://your-domain.com            # create (or replace)
 *   npm run sanity:webhook -- --list                             # show existing webhooks
 *
 * Needs SANITY_API_WRITE_TOKEN (Developer role or higher) and SANITY_REVALIDATE_SECRET in .env.local.
 */
import { existsSync, readFileSync } from "node:fs";

if (existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const secret = process.env.SANITY_REVALIDATE_SECRET;
const NAME = "GPW revalidate (products, posts, authors)";
const api = `https://api.sanity.io/v2021-06-07/hooks/projects/${projectId}`;

const args = process.argv.slice(2);
const origin = args.find((a) => a.startsWith("http"));

async function call(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${url} → ${res.status} ${text}`);
  return text ? JSON.parse(text) : null;
}

if (!projectId || !token) throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local");

const hooks = await call("GET", api);

if (args.includes("--list")) {
  console.log(hooks.length ? hooks.map((h) => `${h.id}  ${h.name}  ${h.url}  ${h.isDisabled ? "(disabled)" : ""}`).join("\n") : "No webhooks.");
  process.exit(0);
}

if (!origin) throw new Error("Pass your site URL, e.g. npm run sanity:webhook -- https://your-domain.com");
if (!secret) throw new Error("Set SANITY_REVALIDATE_SECRET in .env.local (the same value must be set on your host).");

const hook = {
  name: NAME,
  url: `${origin.replace(/\/$/, "")}/api/revalidate`,
  dataset,
  type: "document",
  apiVersion: "v2021-03-25",
  secret,
  includeDrafts: false,
  // The route only needs the document type; it ignores everything else.
  rule: {
    on: ["create", "update", "delete"],
    filter: '_type in ["product", "post", "author"]',
    projection: "{_type}",
  },
};

// Re-running replaces the existing webhook so the URL / secret always match.
const existing = hooks.find((h) => h.name === NAME);
if (existing) await call("DELETE", `${api}/${existing.id}`);
const result = await call("POST", api, hook);
console.log(`${existing ? "Replaced" : "Created"} webhook ${result.id} → ${hook.url}`);
