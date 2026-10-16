/**
 * One-time import: local content (/data) + images (/public) → Sanity.
 * Imports products, then blog authors and posts.
 *
 *   npm run import:content                                                   # create missing documents
 *   (auth: `npx sanity login` first, or set SANITY_API_WRITE_TOKEN in .env.local)
 *   npx sanity exec scripts/import-content.ts --with-user-token -- --force   # overwrite existing ones too
 *   npx sanity exec scripts/import-content.ts -- --dry                       # preview, no network
 *
 * Safe to re-run: by default documents already in Sanity are left untouched, so edits
 * made in the admin are never overwritten. Image uploads are deduplicated by Sanity.
 */
import { createReadStream, existsSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { getCliClient } from "sanity/cli";
import { AUTHORS, BLOG_POSTS } from "../data/blog";
import { products } from "../data/home";
import { getProductDetail } from "../data/products-data";

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const FORCE = args.includes("--force");

// Auth: your CLI login (`npx sanity login` + --with-user-token), or an Editor token in .env.local.
loadEnvFile(".env.local");
const token = process.env.SANITY_API_WRITE_TOKEN || undefined;
const client = DRY ? null : getCliClient({ apiVersion: "2025-10-01", ...(token ? { token } : {}) });
const productIds = new Set(products.map((p) => p.id));
const productDocId = (id: string) => `product-${id}`;

/** Minimal .env reader (sanity exec doesn't load .env.local). */
function loadEnvFile(path: string) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

type Doc = { _id: string; _type: string; [key: string]: unknown };

/** Adds the `_key` (and `_type`) Sanity requires on every array item. */
function keyed<T extends object>(items: T[] | undefined, type?: string) {
  return (items ?? []).map((item, i) => ({ _key: `k${i}`, ...(type ? { _type: type } : {}), ...item }));
}

const weakRef = (id: string) => ({ _type: "reference", _ref: id, _weak: true });

/* ---------------- images ---------------- */

const uploaded = new Map<string, string>();
const missingImages: string[] = [];

/** Uploads a /public image once; returns its asset id (or null if the file is missing). */
async function uploadImage(src: string | undefined, label: string): Promise<string | null> {
  const file = src && !src.startsWith("http") ? join(process.cwd(), "public", decodeURIComponent(src)) : null;
  if (!file || !existsSync(file)) {
    missingImages.push(`${label} (${src || "no image"})`);
    return null;
  }
  if (!client) return "dry-run";
  if (!uploaded.has(file)) {
    const asset = await client.assets.upload("image", createReadStream(file), { filename: basename(file) });
    uploaded.set(file, asset._id);
    console.log(`  ↑ ${label}`);
  }
  return uploaded.get(file)!;
}

const imageField = (assetId: string | null, alt?: string) =>
  assetId ? { _type: "image", asset: { _type: "reference", _ref: assetId }, ...(alt ? { alt } : {}) } : undefined;

/** Runs `fn` over items, 4 at a time. */
async function pool<T, R>(items: T[], fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  };
  await Promise.all(Array.from({ length: 4 }, worker));
  return results;
}

/* ---------------- documents ---------------- */

async function productDocs(): Promise<Doc[]> {
  return pool(products, async (p) => {
    const d = getProductDetail(p.id);
    return {
      _id: productDocId(p.id),
      _type: "product",
      name: p.name,
      slug: { _type: "slug", current: p.id },
      category: p.category,
      modality: p.modality,
      subCategory: p.subCategory,
      brand: p.brand,
      description: p.description,
      tiers: p.tiers,
      specs: p.specs,
      order: products.indexOf(p) + 1,
      image: imageField(await uploadImage(p.image.src, `product ${p.id}`), p.image.alt),
      subtitle: d.subtitle,
      tagline: d.tagline,
      overview: d.overview,
      mechanismOfAction: d.mechanismOfAction,
      features: keyed(d.features, "feature"),
      benefits: keyed(d.benefits, "benefit"),
      specGroups: keyed(d.specGroups.map((g) => ({ ...g, items: keyed(g.items, "specItem") })), "specGroup"),
      whatsIncluded: d.whatsIncluded,
      protocol: { ...d.protocol, protocolSteps: keyed(d.protocol.protocolSteps, "protocolStep") },
      suitableEnvironments: keyed(d.suitableEnvironments, "environment"),
      faqs: keyed(d.faqs, "faq"),
      relatedProducts: keyed(
        d.relatedProductIds.filter((rid) => productIds.has(rid) && rid !== p.id).map((rid) => weakRef(productDocId(rid))),
      ),
    };
  });
}

async function authorDocs(): Promise<Doc[]> {
  return pool(Object.entries(AUTHORS), async ([key, a]) => ({
    _id: `author-${key}`,
    _type: "author",
    name: a.name,
    slug: { _type: "slug", current: key },
    role: a.role,
    bio: a.bio,
    avatar: imageField(await uploadImage(a.avatar, `author ${key}`)),
  }));
}

/** "May 28, 2026" → "2026-05-28" */
function toISODate(display: string) {
  const d = new Date(display);
  if (Number.isNaN(d.getTime())) throw new Error(`Unparseable date: ${display}`);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const droppedLinks: string[] = [];

async function postDocs(): Promise<Doc[]> {
  return pool(BLOG_POSTS, async (post) => {
    const authorKey = Object.keys(AUTHORS).find((k) => AUTHORS[k] === post.author);
    const related = (post.relatedEquipment ?? []).flatMap((eq) => {
      const id = eq.link.replace(/^\/products\//, "");
      if (productIds.has(id)) return [weakRef(productDocId(id))];
      droppedLinks.push(`${post.slug} → ${eq.link}`);
      return [];
    });
    return {
      _id: `post-${post.slug}`,
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      excerpt: post.excerpt,
      category: post.category,
      publishedAt: toISODate(post.publishedAt),
      readTime: post.readTime,
      featured: Boolean(post.featured),
      author: authorKey ? { _type: "reference", _ref: `author-${authorKey}` } : undefined,
      coverImage: imageField(await uploadImage(post.coverImage, `cover ${post.slug}`), post.coverAlt),
      tags: post.tags,
      keyTakeaways: post.keyTakeaways,
      sections: keyed(
        post.sections.map((s) => ({
          heading: s.heading,
          id: { _type: "slug", current: s.id },
          content: s.content,
          ...(s.callout ? { callout: s.callout } : {}),
        })),
        "section",
      ),
      relatedEquipment: keyed(related),
    };
  });
}

/* ---------------- run ---------------- */

async function main() {
  const existing = new Set<string>(client ? await client.fetch(`*[_type in ["product", "author", "post"]]._id`) : []);
  console.log(`${existing.size} content documents already in Sanity${FORCE ? " (force: overwriting)" : ""}${DRY ? " [dry run]" : ""}\n`);

  // Order matters: posts reference authors and products.
  const groups: [string, () => Promise<Doc[]>][] = [
    ["products", productDocs],
    ["authors", authorDocs],
    ["posts", postDocs],
  ];

  for (const [label, build] of groups) {
    const all = await build();
    const docs = all.filter((d) => FORCE || !existing.has(d._id));
    console.log(`${label}: ${all.length} local · writing ${docs.length}`);
    if (!client) continue;
    for (let i = 0; i < docs.length; i += 20) {
      const tx = client.transaction();
      for (const doc of docs.slice(i, i + 20)) tx.createOrReplace(doc);
      await tx.commit({ visibility: "async" });
    }
  }

  if (missingImages.length) console.warn(`\n⚠ No local image for ${missingImages.length} item(s):\n  ${missingImages.join("\n  ")}`);
  if (droppedLinks.length) console.warn(`\n⚠ Related-equipment links to products that don't exist (skipped):\n  ${droppedLinks.join("\n  ")}`);
  console.log(DRY ? "\nDry run OK — nothing written." : "\nDone. Open /studio to manage content.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
