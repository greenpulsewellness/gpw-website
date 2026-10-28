/**
 * Generates the WebP images used by the home entry animation and the hero slideshow
 * into /public/intro, from the original PNG/JPG photos in /public.
 *
 *   node scripts/generate-intro-images.mjs
 *
 * Two sizes per photo:
 *   <name>-hero.webp   full source width, high quality: the hero slideshow and the
 *                      intro's final full-screen frame (same file, so the hand-off is cached)
 *   <name>-intro.webp  1024px wide: the small centre window the intro images stack into
 *
 * These are served as-is (unoptimized), so no image is converted on the first visit.
 */
import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "public", "intro");

const SOURCES = {
  recovery: "recovery.png",
  wellness: "wellness.png",
  performance: "performance.png",
  longevity: "longivity.png",
  vitality: "vitality.png",
};

const HERO = { quality: 86, effort: 6, smartSubsample: true };
const INTRO = { width: 1024, quality: 80, effort: 6, smartSubsample: true };

const kb = (file) => `${Math.round(statSync(file).size / 1024)} KB`;

mkdirSync(OUT, { recursive: true });

for (const [name, file] of Object.entries(SOURCES)) {
  const src = join(ROOT, "public", file);
  const heroOut = join(OUT, `${name}-hero.webp`);
  const introOut = join(OUT, `${name}-intro.webp`);

  await sharp(src).webp(HERO).toFile(heroOut);
  await sharp(src)
    .resize({ width: INTRO.width, withoutEnlargement: true })
    .webp(INTRO)
    .toFile(introOut);

  console.log(`${name}: ${kb(src)} → hero ${kb(heroOut)}, intro ${kb(introOut)}`);
}
