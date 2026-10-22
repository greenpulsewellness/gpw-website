import { products } from "@/data/home";
import type { BlogEquipment, BlogFaq, BlogPost, BlogSection } from "@/data/blog-types";

/** Every blog slug, keyed by a short name so cross-links can't be mistyped (see L below). */
export const SLUG = {
  saunaGuide: "infrared-sauna-buying-guide",
  saunaWorks: "how-infrared-saunas-work",
  saunaHeaters: "full-spectrum-vs-carbon-vs-ceramic-infrared-heaters",
  saunaInstall: "infrared-sauna-size-power-and-installation",
  saunaBlanket: "infrared-sauna-blanket-vs-cabin",
  saunaSession: "infrared-sauna-session-guide-for-beginners",
  coldGuide: "cold-plunge-buying-guide",
  contrast: "contrast-therapy-infrared-and-cold-plunge",
  coldCare: "cold-plunge-water-care-and-chiller-maintenance",
  cryoVsIce: "cryotherapy-vs-ice-bath",
  lightGuide: "red-light-therapy-complete-guide",
  masks: "led-face-masks-buying-guide",
  lightFormat: "red-light-bed-vs-panel-vs-stand",
  wavelengths: "red-vs-near-infrared-light-wavelengths",
  handheld: "handheld-red-light-and-laser-devices",
  hbotGuide: "hyperbaric-oxygen-chamber-guide",
  hbotSizes: "hyperbaric-chamber-single-vs-double-vs-portable",
  hbotRoom: "setting-up-a-hyperbaric-oxygen-room-safely",
  bootsGuide: "air-compression-boots-guide",
  bootsChambers: "compression-boots-4-vs-6-vs-8-chambers",
  chair: "massage-chair-buying-guide",
  gun: "massage-gun-buying-guide",
  stack: "post-workout-recovery-stack",
  lounge: "how-to-start-a-recovery-lounge",
  hotel: "recovery-suites-for-hotels-and-resorts",
  gym: "gym-recovery-zone-membership-pricing",
  clinic: "equipping-a-physio-or-chiropractic-clinic",
  buying: "buying-wellness-equipment-installation-and-support",
  senior: "wellness-lounge-for-senior-living",
  wheelchair: "choosing-an-electric-or-standing-wheelchair",
} as const;

export type SlugKey = keyof typeof SLUG;

/** Internal blog link in markdown form: [anchor](/blog/slug). */
export const L = (key: SlugKey, anchor: string) => `[${anchor}](/blog/${SLUG[key]})`;

/** Product ids by short name — checked against the live catalogue at import time. */
export const PID = {
  halo1: "infrared-sauna-single-full-spectrum-mstar",
  halo2: "infrared-sauna-double-full-spectrum-mstar",
  halo3: "infrared-sauna-group-full-spectrum-mstar",
  haloHybrid2: "infrared-sauna-double-combination-mstar",
  haloHybrid3: "infrared-sauna-group-combination-mstar",
  arcticRing: "cold-plunge-single-round-yg",
  arcticTub: "cold-plunge-tub-new-ice-bath",
  arcticFold: "cold-plunge-foldable-aircore",
  arcticZero: "cryo-mini-cryome",
  lumaStand1: "led-therapy-full-stand",
  lumaStand2: "led-therapy-full-stand-2",
  lumaCocoon1: "led-therapy-full-body-clam-1-m6",
  lumaCocoon2: "led-therapy-full-body-clam-2-m6l",
  lumaDome: "led-therapy-full-body-stand-chamber",
  oxaSolo: "hbot-single-cube-chamber",
  oxaDuo: "hbot-double-cube-chamber",
  oxaMini: "hbot-single-mini-komjet",
  oxy1: "oxy-1-hyperbaric-oxygen-chamber-single",
  oxy2: "oxy-2-hyperbaric-oxygen-chamber-double",
  sereneMid: "massage-chair-mid-range-lion",
  sereneElite: "massage-chair-elite-ms131",
  sereneLounge: "lounge-sl-massage-chair",
  serene360: "lounge-360-massage-chair",
  sereneComfort: "comfort-sl-massage-chair",
  pulsewaveGo: "compression-boots-dj-sets",
  pulsewavePro6: "compression-system-konbest-9690k",
  pulsewavePro8: "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
  pulsewave4: "pulsewave-4-air-compression-boots-wireless-app-control",
  pulsewave4Plus: "pulsewave-4-plus-air-compression-boots",
  pulsewave4Direct: "pulsewave-4-direct-air-compression-boots",
  pulsewave5: "pulsewave-5-portable-air-compression-boots",
  pulsewaveGlow: "pulsewave-glow-wireless-compression-boots-with-infrared-light",
  pulsewaveEase: "pulsewave-ease-air-compression-leg-massager",
  pulsewaveMax: "pulsewave-max-8-chamber-air-compression-recovery-system",
  thrumLite: "percussion-gun-jm04sa",
  thrumPro: "percussion-massager-jm003",
  thrumDeep: "percussion-massager-jm019",
  emberWrap: "sauna-blanket-rl301",
  auroraWrap: "red-light-blanket-rl302",
  frostfirePad: "cold-therapy-unit-806pro",
  lumaGo500: "luma-go-portable-red-light-stand",
  lumaGo1000: "luma-go-1000-portable-red-light-stand",
  lumaTower: "led-stand-gy-t320",
  lumaSpot: "led-lamp-focus",
  lumaPanel: "led-bracket-panel-mid",
  beamQuad: "led-handheld-gy-eust01",
  beamWand: "led-handheld-gy-hl-001",
  beamCrown: "led-cap-gy-hgci",
  maskDuo: "led-mask-gy-009",
  shell: "led-mask-gy-bmh",
  shell2: "led-mask-gy-106a",
  glideFlex: "glide-flex-foldable-electric-wheelchair",
  glideTrek1: "glide-trek-1-electric-wheelchair",
  glideTrek2: "glide-trek-2-electric-wheelchair",
  glideCore: "glide-core-wheelchair",
  glideJunior: "glide-junior-pediatric-electric-wheelchair",
  rise1: "rise-1-standing-wheelchair",
  rise2: "rise-2-standing-wheelchair",
  rise3: "rise-3-standing-wheelchair",
} as const;

export type ProductKey = keyof typeof PID;

const byId = new Map(products.map((p) => [p.id, p]));

for (const [key, id] of Object.entries(PID)) {
  if (!byId.has(id)) throw new Error(`[blog] PID.${key} → "${id}" is not in the product catalogue (data/home.ts)`);
}

/** Inline product link: [anchor](/products/id). */
export const P = (key: ProductKey, anchor: string) => `[${anchor}](/products/${PID[key]})`;

/** Inline link to a solution page, the combos page or the full catalogue. */
export const SOLUTION = (slug: "recover" | "agewell" | "rehabilitate" | "live-well", anchor: string) => `[${anchor}](/solutions/${slug})`;
export const COMBOS = (anchor: string) => `[${anchor}](/combos)`;
export const CATALOGUE = (anchor: string) => `[${anchor}](/products)`;

const MODALITY_FALLBACK: Record<string, string> = {
  heat: "/home%20page/heat.webp",
  cold: "/home%20page/cold.webp",
  light: "/home%20page/light.webp",
  air: "/home%20page/air.webp",
  relax: "/home%20page/relax.webp",
  mobility: "/home%20page/mobility.webp",
};

/** "Equipment in focus" card for a catalogue product — name, category, link and image come from the catalogue. */
export function eq(key: ProductKey, description: string): BlogEquipment {
  const p = byId.get(PID[key])!;
  return {
    name: p.name,
    category: p.category,
    image: p.image.src || MODALITY_FALLBACK[p.modality] || "",
    link: `/products/${p.id}`,
    description,
  };
}

export type BlogInput = Omit<BlogPost, "readTime" | "publishedAt" | "publishedAtISO" | "coverImage" | "category" | "cluster"> & {
  cluster: NonNullable<BlogPost["cluster"]>;
  /** ISO date, YYYY-MM-DD */
  date: string;
};

/** Extra deep-dive sections (inserted before each post's closing section) and FAQs, keyed by slug. */
export type BlogExtras = Record<string, { sections: BlogSection[]; faqs: BlogFaq[] }>;
