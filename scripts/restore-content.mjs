/**
 * Restore content from a backup made by scripts/backup-content.mjs.
 *
 *   npm run restore:content -- <dir>                      # preview only: what would be written
 *   npm run restore:content -- <dir> --apply              # write every table
 *   npm run restore:content -- <dir> --apply --only content.blog_posts
 *
 * To restore an earlier version, check out that commit of the private backup repo and point <dir> at its
 * `data` folder (or copy a single file out of git history).
 *
 * What it does: upserts each row by primary key, so rows in the backup are put back exactly as they were
 * (updated_at is reset to now by the database trigger). It does NOT delete rows that were added after the
 * backup; remove those by hand in the table editor if needed.
 *
 * Needs SUPABASE_SERVICE_ROLE_KEY and SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL).
 */
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

/** Parents before children (posts reference authors and pillars). Keep in sync with backup-content.mjs. */
const TABLES = [
  { schema: "content", table: "authors", pk: "id" },
  { schema: "catalog", table: "products", pk: "id" },
  { schema: "content", table: "blog_pillars", pk: "id" },
  { schema: "content", table: "blog_posts", pk: "id" },
];

const args = process.argv.slice(2);
const dir = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--only");
const APPLY = args.includes("--apply");
const onlyIdx = args.indexOf("--only");
const only = onlyIdx >= 0 ? args[onlyIdx + 1] : undefined;

if (!dir) {
  console.error("Usage: restore-content.mjs <backup dir> [--apply] [--only schema.table]");
  process.exit(1);
}
if (only && !TABLES.some((t) => `${t.schema}.${t.table}` === only)) {
  console.error(`Unknown table "${only}". Choose one of: ${TABLES.map((t) => `${t.schema}.${t.table}`).join(", ")}`);
  process.exit(1);
}

const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (APPLY && (!url || !key)) {
  console.error("Set SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

async function upsert({ schema, table, pk }, rows) {
  for (let i = 0; i < rows.length; i += 50) {
    const res = await fetch(`${url}/rest/v1/${table}?on_conflict=${pk}`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "Content-Profile": schema,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(rows.slice(i, i + 50)),
    });
    if (!res.ok) throw new Error(`${schema}.${table}: HTTP ${res.status} ${await res.text()}`);
  }
}

async function main() {
  for (const t of TABLES) {
    const name = `${t.schema}.${t.table}`;
    if (only && name !== only) continue;
    const file = join(dir, t.schema, `${t.table}.json`);
    if (!existsSync(file)) {
      console.log(`${name}: no file in backup, skipped`);
      continue;
    }
    const rows = JSON.parse(await readFile(file, "utf8"));
    if (APPLY) await upsert(t, rows);
    console.log(`${name}: ${rows.length} row(s) ${APPLY ? "restored" : "would be restored"}`);
  }
  if (!APPLY) console.log("\nPreview only. Add --apply to write to the database.");
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
