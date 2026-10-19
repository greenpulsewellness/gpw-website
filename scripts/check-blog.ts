/**
 * Validates the blog's content and internal-link graph. Run: npx tsx scripts/check-blog.ts
 * Fails (exit 1) on broken links, missing covers, orphan posts or thin linking.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import { CLUSTERS } from "../data/blog-types";
import { BLOG_POSTS } from "../data/blog-posts";
import { products } from "../data/home";
import { getAllSolutions } from "../data/solutions-data";

const errors: string[] = [];
const err = (m: string) => errors.push(m);

const slugs = new Set(BLOG_POSTS.map((p) => p.slug));
const productIds = new Set(products.map((p) => p.id));
const solutionSlugs = new Set(getAllSolutions().map((s) => s.slug));
const staticRoutes = new Set(["/products", "/combos", "/blog", "/about", "/contact"]);

const outbound = new Map<string, Set<string>>();
const inbound = new Map<string, Set<string>>(BLOG_POSTS.map((p) => [p.slug, new Set()]));

if (BLOG_POSTS.length !== 30) err(`expected 30 posts, found ${BLOG_POSTS.length}`);
if (slugs.size !== BLOG_POSTS.length) err("duplicate slugs");

for (const p of BLOG_POSTS) {
  const out = new Set<string>();
  outbound.set(p.slug, out);
  let productLinks = 0;
  let words = 0;

  const texts = [...p.sections.flatMap((s) => [...s.content, s.callout?.text ?? ""])];
  for (const text of texts) {
    words += text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").split(/\s+/).filter(Boolean).length;
    for (const m of text.matchAll(/\[([^\]]+)\]\((\/[^)\s]*)\)/g)) {
      const href = m[2];
      if (href.startsWith("/blog/")) {
        const target = href.slice(6);
        if (!slugs.has(target)) err(`${p.slug}: broken blog link ${href}`);
        else if (target === p.slug) err(`${p.slug}: links to itself`);
        else {
          out.add(target);
          inbound.get(target)!.add(p.slug);
        }
      } else if (href.startsWith("/products/")) {
        productLinks++;
        if (!productIds.has(href.slice(10))) err(`${p.slug}: unknown product ${href}`);
      } else if (href.startsWith("/solutions/")) {
        if (!solutionSlugs.has(href.slice(11))) err(`${p.slug}: unknown solution ${href}`);
      } else if (!staticRoutes.has(href)) err(`${p.slug}: unexpected link ${href}`);
    }
    if (/\*\*[^*]*$/.test(text.replace(/\*\*[^*]+\*\*/g, ""))) err(`${p.slug}: unbalanced ** in "${text.slice(0, 50)}…"`);
  }

  if (!existsSync(join(process.cwd(), "public", p.coverImage))) err(`${p.slug}: missing cover ${p.coverImage}`);
  if (p.excerpt.length > 300) err(`${p.slug}: excerpt ${p.excerpt.length} chars (max 300)`);
  if (p.title.length > 75) err(`${p.slug}: title ${p.title.length} chars`);
  words += (p.faqs ?? []).reduce((n, f) => n + `${f.question} ${f.answer}`.split(/\s+/).length, 0);
  if (words < 700) err(`${p.slug}: only ${words} words (incl. FAQs)`);
  if ((p.faqs?.length ?? 0) < 4) err(`${p.slug}: needs 4+ FAQs`);
  if (out.size < 4) err(`${p.slug}: only ${out.size} outbound blog links (min 4)`);
  if (productLinks < 1) err(`${p.slug}: no in-body product link`);
  if (!p.relatedEquipment?.length) err(`${p.slug}: no relatedEquipment`);
  if (p.keyTakeaways.length < 3) err(`${p.slug}: <3 key takeaways`);
  for (const r of p.relatedSlugs ?? []) if (!slugs.has(r)) err(`${p.slug}: relatedSlugs has unknown "${r}"`);
  const ids = p.sections.map((s) => s.id);
  if (new Set(ids).size !== ids.length) err(`${p.slug}: duplicate section ids`);
  console.log(`${p.slug.padEnd(62)} ${String(words).padStart(5)}w  out ${String(out.size).padStart(2)}  ${p.readTime}`);
}

for (const [slug, from] of inbound) if (from.size < 3) err(`${slug}: only ${from.size} inbound links (min 3)`);

for (const [key, c] of Object.entries(CLUSTERS)) {
  const members = BLOG_POSTS.filter((p) => p.cluster === key);
  const pillar = members.find((p) => p.slug === c.pillar);
  if (!pillar) { err(`cluster ${key}: pillar ${c.pillar} missing`); continue; }
  if (!pillar.pillar) err(`cluster ${key}: ${c.pillar} not flagged pillar`);
  for (const m of members) {
    if (m === pillar) continue;
    if (!outbound.get(pillar.slug)!.has(m.slug)) err(`cluster ${key}: pillar does not link to ${m.slug}`);
    if (!outbound.get(m.slug)!.has(pillar.slug)) err(`cluster ${key}: ${m.slug} does not link back to pillar`);
  }
  console.log(`cluster ${key.padEnd(9)} ${members.length} posts, pillar ${pillar.slug}`);
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n - ${errors.join("\n - ")}`);
  process.exit(1);
}
console.log("\n✓ blog graph OK");
