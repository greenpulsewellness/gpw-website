/**
 * Shrinks the photos in /public in place: same file name, same format, so no reference
 * in the code or in Sanity has to change.
 *
 *   node scripts/optimize-public-images.mjs            (dry run: report only)
 *   node scripts/optimize-public-images.mjs --write    (overwrite files)
 *
 * Each photo is capped at MAX_WIDTH (the largest width next/image is allowed to serve, see
 * images.deviceSizes in next.config.ts) and re-encoded. A file is only replaced when the result
 * is at least 10% smaller. Logos, icons, the social share image and the pre-built /public/intro
 * images are left alone. Run it again after adding new photos; already-optimized files are skipped.
 */
import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, extname, join, relative, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = join(ROOT, "public");
const WRITE = process.argv.includes("--write");

const MAX_WIDTH = 2048;
const MAX_HEIGHT = 2560;
const MIN_SAVING = 0.1;

const SKIP_DIRS = new Set(["intro", "Logo AW"]);
const SKIP_NAME = /^(logo|favicon|icon|apple-|og-|android-chrome)/i;

const ENCODERS = {
  ".jpg": (img) => img.jpeg({ quality: 82, mozjpeg: true }),
  ".jpeg": (img) => img.jpeg({ quality: 82, mozjpeg: true }),
  ".png": (img) => img.png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 }),
  ".webp": (img) => img.webp({ quality: 82, effort: 6, smartSubsample: true }),
};

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) yield* walk(full);
    } else if (ENCODERS[extname(entry.name).toLowerCase()] && !SKIP_NAME.test(basename(entry.name))) {
      yield full;
    }
  }
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

let before = 0;
let after = 0;
let changed = 0;

for (const file of walk(PUBLIC)) {
  const input = readFileSync(file);
  const encode = ENCODERS[extname(file).toLowerCase()];
  const output = await encode(
    sharp(input)
      .rotate()
      .resize({ width: MAX_WIDTH, height: MAX_HEIGHT, fit: "inside", withoutEnlargement: true }),
  ).toBuffer();

  before += input.length;
  if (output.length > input.length * (1 - MIN_SAVING)) {
    after += input.length;
    continue;
  }

  after += output.length;
  changed++;
  console.log(`${mb(input.length).padStart(9)} -> ${mb(output.length).padStart(9)}  ${relative(PUBLIC, file)}`);
  if (WRITE) writeFileSync(file, output);
}

console.log(
  `\n${changed} file(s) ${WRITE ? "rewritten" : "would shrink"}: ${mb(before)} -> ${mb(after)}` +
    (WRITE ? "" : "  (dry run, pass --write to apply)"),
);
