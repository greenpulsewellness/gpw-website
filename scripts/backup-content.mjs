/**
 * Content backup: Supabase (catalog + content) → one JSON file per table.
 *
 *   npm run backup:content -- --out <dir>
 *
 * Runs nightly from the private backup repo (see docs/supabase-migration-plan.md, Phase 2b), which commits
 * the output so every content change has git history. Zero dependencies (Node 22+ fetch), so that job can
 * run this file without installing the website's packages.
 *
 * Needs SUPABASE_SERVICE_ROLE_KEY and SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL). The service role is used so
 * drafts and hidden products are backed up too. crm (enquiries) is deliberately excluded: it holds customers'
 * personal data and must not be copied into git.
 *
 * Output is deterministic (rows sorted by a stable key) so unchanged content produces no diff.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

/** Restore order: parents before children. Keep in sync with scripts/restore-content.mjs. */
const TABLES = [
  { schema: "content", table: "authors", order: "id" },
  { schema: "catalog", table: "products", order: "id" },
  { schema: "content", table: "blog_pillars", order: "slug" },
  { schema: "content", table: "blog_posts", order: "slug" },
];

/** Tables that must never come back empty; an empty result means something is wrong, not "no content". */
const MUST_HAVE_ROWS = new Set(["catalog.products", "content.blog_posts"]);

const PAGE = 1000;

const args = process.argv.slice(2);
const outIdx = args.indexOf("--out");
const out = outIdx >= 0 ? args[outIdx + 1] : undefined;
if (!out) {
  console.error("Usage: backup-content.mjs --out <dir>");
  process.exit(1);
}

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

async function fetchAll({ schema, table, order }) {
  const rows = [];
  for (let from = 0; ; from += PAGE) {
    const res = await fetch(`${url}/rest/v1/${table}?select=*&order=${order}.asc`, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Accept-Profile": schema,
        Range: `${from}-${from + PAGE - 1}`,
      },
    });
    if (!res.ok) throw new Error(`${schema}.${table}: HTTP ${res.status} ${await res.text()}`);
    const page = await res.json();
    rows.push(...page);
    if (page.length < PAGE) return rows;
  }
}

async function main() {
  const summary = [];
  for (const t of TABLES) {
    const name = `${t.schema}.${t.table}`;
    const rows = await fetchAll(t);
    if (MUST_HAVE_ROWS.has(name) && rows.length === 0) {
      throw new Error(`${name} returned no rows. Refusing to overwrite the backup with an empty table.`);
    }
    const dir = join(out, t.schema);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, `${t.table}.json`), `${JSON.stringify(rows, null, 2)}\n`);
    summary.push(`${name}: ${rows.length}`);
  }
  console.log(`Backed up to ${out}\n  ${summary.join("\n  ")}`);
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
