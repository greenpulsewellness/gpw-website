/**
 * Cross-checks a month's changelog against git.
 * Run: npm run changelog:check -- [--month YYYY-MM] [--fix]
 *
 * Reports unlogged commits, `pending` entries (matched to the commit that added the entry, or
 * by date + wording; --fix writes the hashes in), unknown hashes and malformed entries.
 * Entries not committed yet stay pending and don't fail the check. Exit 0 if everything matches.
 * Commits that only touch changelog/, and empty commits, are ignored.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Commit = { hash: string; short: string; date: string; subject: string; files: string[] };
type Entry = { line: number; date: string; text: string; sources: string[] };

const args = process.argv.slice(2);
const monthArg = args.includes("--month") ? args[args.indexOf("--month") + 1] : undefined;
const month = monthArg ?? new Date().toISOString().slice(0, 7);
const fix = args.includes("--fix");

if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) {
  console.error(`Invalid --month "${month}", expected YYYY-MM`);
  process.exit(2);
}

const git = (...a: string[]) => execFileSync("git", a, { encoding: "utf8", maxBuffer: 64 << 20 });
const root = git("rev-parse", "--show-toplevel").trim();
const file = join(root, "changelog", `${month}.md`);

// --- git: commits authored in the month ---------------------------------------------------

const commits: Commit[] = git(
  "log", "--no-merges", "--date=short", "--name-only", "--format=%x00%H%x1f%h%x1f%ad%x1f%s",
)
  .split("\0")
  .filter(Boolean)
  .map((chunk) => {
    const [head, ...rest] = chunk.split("\n");
    const [hash, short, date, subject] = head.split("\x1f");
    return { hash, short, date, subject, files: rest.filter(Boolean) };
  })
  .filter((c) => c.date.startsWith(month))
  .filter((c) => c.files.length > 0 && !c.files.every((f) => f.startsWith("changelog/")))
  .reverse();

// --- changelog: entries above the month-end notes -----------------------------------------

const ENTRY = /^- (\d{4}-\d{2}-\d{2}) — (.+) \(([^()]+)\)(?: — complimentary, worth ₹[\d,]+(?:\.\d+)?)?\s*$/;
const SOURCE = /^(pending|sanity|manual|[0-9a-f]{7,40})$/;

const lines = existsSync(file) ? readFileSync(file, "utf8").split("\n") : [];
const entries: Entry[] = [];
const malformed: string[] = [];

for (const [i, raw] of lines.entries()) {
  if (raw.trim() === "---") break;
  if (!raw.startsWith("- ")) continue;
  const m = raw.match(ENTRY);
  const sources = m ? m[3].split(",").map((s) => s.trim()) : [];
  if (!m || !sources.every((s) => SOURCE.test(s))) malformed.push(`  line ${i + 1}: ${raw}`);
  else entries.push({ line: i, date: m[1], text: m[2], sources });
}

// --- hashes ---------------------------------------------------------------------------------

const exists = (h: string) => {
  try {
    git("rev-parse", "--verify", "--quiet", `${h}^{commit}`);
    return true;
  } catch {
    return false;
  }
};

const hashRefs = entries.flatMap((e) => e.sources.filter((s) => /^[0-9a-f]+$/.test(s)).map((s) => ({ e, s })));
const unknown = hashRefs.filter(({ s }) => !exists(s));
const logged = new Set(commits.filter((c) => hashRefs.some(({ s }) => c.hash.startsWith(s))).map((c) => c.hash));

// --- pending: the commit that added the entry line, else date + word overlap ----------------
// Entries are written in the same commit as the change, so the commit that first added the
// entry's text is its source. An entry not in any commit yet is uncommitted work and stays
// pending, even if a commit from the same day is still unlogged.

const words = (s: string) => new Set(s.toLowerCase().match(/[a-z0-9]{3,}/g) ?? []);
const overlap = (a: string, b: string) => {
  const wb = words(b);
  return [...words(a)].filter((w) => wb.has(w)).length;
};

const addedIn = (text: string) =>
  git("log", "--format=%H", "-S", text, "--", `changelog/${month}.md`).trim().split("\n").filter(Boolean).at(-1);

const pending = entries.filter((e) => e.sources.includes("pending"));
const resolved = new Map<Entry, Commit>();
const unresolved: Entry[] = [];
const uncommitted: Entry[] = [];

for (const e of pending) {
  const introducedBy = addedIn(e.text);
  if (!introducedBy) {
    uncommitted.push(e);
    continue;
  }
  const direct = commits.find((c) => c.hash === introducedBy);
  if (direct) {
    resolved.set(e, direct);
    continue;
  }
  // Added in a changelog-only commit: fall back to a same-day commit with clearly the best wording.
  const scored = commits
    .filter((c) => c.date === e.date && !logged.has(c.hash))
    .map((c) => ({ c, score: overlap(e.text, c.subject) }))
    .sort((a, b) => b.score - a.score);
  const [best, next] = scored;
  if (best && best.score > 0 && best.score > (next?.score ?? 0)) resolved.set(e, best.c);
  else unresolved.push(e);
}
for (const c of resolved.values()) logged.add(c.hash);

const unlogged = commits.filter((c) => !logged.has(c.hash));

// --- report ---------------------------------------------------------------------------------

console.log(`Changelog check for ${month}`);
console.log(`  file:    ${existsSync(file) ? `changelog/${month}.md` : `changelog/${month}.md (missing)`}`);
console.log(`  commits: ${commits.length} (excluding merges, empty and changelog-only commits)`);
console.log(`  entries: ${entries.length}\n`);

const section = (title: string, items: string[]) => {
  console.log(`${title}: ${items.length ? "" : "none"}`);
  for (const item of items) console.log(item);
  console.log();
};

section("Unlogged commits", unlogged.map((c) => `  ${c.short} ${c.date} ${c.subject}`));
section("Unknown hashes", unknown.map(({ e, s }) => `  ${s} (line ${e.line + 1}: ${e.text})`));
section("Malformed entries", malformed);

if (pending.length) {
  section("Pending entries matched to commits", [...resolved].map(([e, c]) => `  line ${e.line + 1}: ${e.text}\n    -> ${c.short} ${c.subject}`));
  section("Pending entries with no confident match", unresolved.map((e) => `  line ${e.line + 1}: ${e.date} ${e.text}`));
  section("Pending entries not committed yet (left as pending)", uncommitted.map((e) => `  line ${e.line + 1}: ${e.date} ${e.text}`));

  if (resolved.size && fix) {
    for (const [e, c] of resolved) lines[e.line] = lines[e.line].replace(/\(([^()]*)\bpending\b([^()]*)\)(?=[^()]*$)/, `($1${c.short}$2)`);
    writeFileSync(file, lines.join("\n"));
    console.log(`Filled in ${resolved.size} hash(es) in changelog/${month}.md.\n`);
  } else if (resolved.size) {
    console.log("Run again with --fix to write these hashes into the changelog.\n");
  }
}

const ok = existsSync(file) && !unlogged.length && !unknown.length && !malformed.length && !unresolved.length;
console.log(ok ? "OK: changelog matches git." : "Changelog does not match git.");
process.exit(ok ? 0 : 1);
