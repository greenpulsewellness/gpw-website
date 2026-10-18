/**
 * One-time import: local content (/data) → Supabase.
 * Seeds authors, products, then blog posts (as published).
 *
 *   npm run seed:supabase              # insert rows that don't exist yet
 *   npm run seed:supabase -- --force   # overwrite existing rows too
 *   npm run seed:supabase -- --dry     # preview counts, no network
 *
 * Needs NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local, and the
 * schemas from supabase/migrations/0001_schemas_catalog_content_crm.sql (and exposing catalog, content, crm in the Data API settings). Safe to re-run: by default rows already
 * in the database are left untouched, so edits made there are never overwritten.
 * Image fields keep their current paths (/public files or full URLs).
 */
import { createClient } from "@supabase/supabase-js";
import { AUTHORS, BLOG_POSTS } from "../data/blog";
import { products } from "../data/home";
import { getProductDetail } from "../data/products-data";

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const FORCE = args.includes("--force");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!DRY && (!url || !serviceKey)) {
  console.error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local first.");
  process.exit(1);
}
const db = DRY ? null : createClient(url!, serviceKey!, { auth: { persistSession: false, autoRefreshToken: false } });

const productIds = new Set(products.map((p) => p.id));

/** "May 28, 2026" → "2026-05-28" */
function toISODate(display: string) {
  const d = new Date(display);
  if (Number.isNaN(d.getTime())) throw new Error(`Unparseable date: ${display}`);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const authorRows = Object.entries(AUTHORS).map(([id, a]) => ({
  id,
  name: a.name,
  role: a.role,
  avatar_url: a.avatar,
  bio: a.bio,
}));

const productRows = products.map((p, i) => {
  const d = getProductDetail(p.id);
  return {
    id: p.id,
    name: p.name,
    category: p.category,
    modality: p.modality,
    sub_category: p.subCategory ?? null,
    brand: p.brand ?? null,
    description: p.description,
    tiers: p.tiers,
    specs: p.specs,
    sort_order: i + 1,
    status: "published",
    image: p.image.src ? { url: p.image.src, alt: p.image.alt } : null,
    gallery: (p.gallery ?? []).filter((g) => g.src).map((g) => ({ url: g.src, alt: g.alt })),
    subtitle: d.subtitle,
    tagline: d.tagline,
    overview: d.overview,
    mechanism_of_action: d.mechanismOfAction,
    features: d.features,
    benefits: d.benefits,
    spec_groups: d.specGroups,
    whats_included: d.whatsIncluded,
    protocol: d.protocol,
    suitable_environments: d.suitableEnvironments,
    faqs: d.faqs,
    related_product_ids: d.relatedProductIds.filter((rid) => productIds.has(rid) && rid !== p.id),
  };
});

const droppedLinks: string[] = [];

const postRows = BLOG_POSTS.map((post) => {
  const authorId = Object.keys(AUTHORS).find((k) => AUTHORS[k] === post.author) ?? null;
  const related = (post.relatedEquipment ?? []).flatMap((eq) => {
    const id = eq.link.replace(/^\/products\//, "");
    if (productIds.has(id)) return [id];
    droppedLinks.push(`${post.slug} → ${eq.link}`);
    return [];
  });
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    published_at: toISODate(post.publishedAt),
    read_time: post.readTime,
    cover_image: post.coverImage,
    cover_alt: post.coverAlt,
    featured: Boolean(post.featured),
    tags: post.tags,
    key_takeaways: post.keyTakeaways,
    sections: post.sections,
    author_id: authorId,
    related_product_ids: related,
    status: "published",
  };
});

async function upsert(schema: string, table: string, rows: object[], onConflict: string) {
  console.log(`${schema}.${table}: ${rows.length} local${DRY ? " [dry run]" : ""}`);
  if (!db) return;
  for (let i = 0; i < rows.length; i += 50) {
    const { error } = await db
      .schema(schema)
      .from(table)
      .upsert(rows.slice(i, i + 50), { onConflict, ignoreDuplicates: !FORCE });
    if (error) throw new Error(`${schema}.${table}: ${error.message}`);
  }
}

async function main() {
  // Order matters: posts reference authors.
  await upsert("content", "authors", authorRows, "id");
  await upsert("catalog", "products", productRows, "id");
  await upsert("content", "blog_posts", postRows, "slug");

  const noImage = productRows.filter((p) => !p.image).map((p) => p.id);
  if (noImage.length) console.warn(`\n⚠ ${noImage.length} product(s) have no image path:\n  ${noImage.join("\n  ")}`);
  if (droppedLinks.length) console.warn(`\n⚠ Related-equipment links to products that don't exist (skipped):\n  ${droppedLinks.join("\n  ")}`);
  console.log(DRY ? "\nDry run OK — nothing written." : `\nDone${FORCE ? " (force: existing rows overwritten)" : ""}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
