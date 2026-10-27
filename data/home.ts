/**
 * GreenPulse Wellness — home page content.
 *
 * Every word, link and media slot on the home page lives here.
 * Media: each slot renders a labelled placeholder frame until you set `src`
 * (and `poster` for videos). Slot ids match MEDIA_NEEDED.md.
 *
 * Copy rule: wellness language only ("supports recovery") — never medical or
 * treatment claims.
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type MediaSlot = {
  /** Unique id — matches MEDIA_NEEDED.md */
  id: string;
  kind: "image" | "video";
  /** Shown on the placeholder frame until `src` is set */
  label: string;
  /** Recommended source aspect ratio, e.g. "16:9" */
  aspect: string;
  alt: string;
  /** e.g. "/media/hero/hero-loop.mp4" — leave undefined to show the placeholder */
  src?: string;
  /** Video only: first-frame still, e.g. "/media/hero/hero-poster.jpg" */
  poster?: string;
  /** Video only: target loop length */
  duration?: string;
};

export type SolutionId = "recover" | "agewell" | "livewell" | "rehabilitate";

export type Solution = {
  id: SolutionId;
  name: string;
  audience: string;
  /** Bento tile size, largest first */
  priority: 1 | 2 | 3 | 4;
  image: MediaSlot;
  hoverVideo: MediaSlot;
  url: string;
};

export type Tier = "Essential" | "Pro" | "Signature";

export type ProductId = string;

export type ProductModality = "heat" | "cold" | "light" | "air" | "relax" | "mobility";

export type ProductCategory =
  | "Heat & Thermal Therapy"
  | "Cold & Cryo Therapy"
  | "Light & Photobiomodulation"
  | "Oxygen & Hyperbaric (Air)"
  | "Active Recovery & Massage (Relax)"
  | "Mobility & Assistive Technology"
  | "Wellness & Recovery Technology"
  | "Rehabilitation & Physical Therapy";

export type Product = {
  id: ProductId;
  name: string;
  category: ProductCategory;
  modality: ProductModality;
  subCategory?: string;
  brand?: string;
  description: string;
  url: string;
  tiers: Tier[];
  /** 2–3 short spec tags, rendered in mono caps */
  specs: string[];
  image: MediaSlot;
  /** Extra product shots (managed in Sanity) */
  gallery?: MediaSlot[];
};

export type SpotlightItem = {
  productId: ProductId;
  name: string;
  line: string;
  benefits: [string, string, string];
  media: MediaSlot;
};

export type BusinessType =
  | "Wellness/Longevity Centre"
  | "Hotel Spa"
  | "Gym/Sports Centre"
  | "Physio/Chiro Clinic"
  | "Senior Living"
  | "Hospital/Clinic"
  | "Homecare"
  | "Individual";

export type Audience = {
  id: string;
  name: string;
  /** Preselects this business type when the card's CTA is used */
  businessType: BusinessType;
  cta: { label: string; kind: "form" | "rental" };
  image: MediaSlot;
};

export type Step = { number: string; title: string; line: string };


/* ------------------------------------------------------------------ */
/* Brand & contact                                                     */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "GreenPulse Wellness",
  tagline: "Purpose-led Wellness Tech & Products",
  logo: "/logo-horizontal.png",
};

export const contact = {
  /** wa.me format: country code + number, digits only */
  whatsappNumber: "917550022504",
  
  phone: "+91 75500 22504",
  phoneRaw: "+917550022504",
  email: "welcome@greenpulsewellness.com", // TODO: placeholder — confirm
  address: "TODO: Studio address, City, State, PIN", // TODO: placeholder
  instagram: "https://www.instagram.com/greenpulse.wellness",
  linkedin: "https://www.linkedin.com/in/arsheenbukhari/",
  floatingMessage: "Hi GreenPulse Wellness, I'd like to know more.",
  rentalMessage:
    "Hi GreenPulse Wellness, I'd like to enquire about equipment rental for a hospital / homecare setting.",
};

/* ------------------------------------------------------------------ */
/* 1. Nav                                                              */
/* ------------------------------------------------------------------ */

export const nav = {
  links: [
    { label: "Recover & Restore", href: "#recover", solutionId: "recover" },
    { label: "AgeWell", href: "#agewell", solutionId: "agewell" },
    { label: "Rehabilitate", href: "#rehabilitate", solutionId: "rehabilitate" },
    { label: "Live Well", href: "#livewell", solutionId: "livewell" },
  ] satisfies { label: string; href: string; solutionId: SolutionId }[],
  cta: { label: "Book a Demo", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* 2. Hero                                                             */
/* ------------------------------------------------------------------ */

export const hero = {
  /** Fixed, visually hidden page heading (the on-screen word rotates and is decorative). */
  seoHeading:
    "GreenPulse Wellness: commercial wellness, recovery and rehabilitation equipment in India, supplied, installed and serviced",
  primaryCta: { label: "Explore Equipment", href: "#equipment" },
  secondaryCta: { label: "Book a Demo", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* 3. Solutions bento                                                  */
/* ------------------------------------------------------------------ */

export const solutionsSection = {
  eyebrow: "What we do",
  title: "One partner for every recovery space, from floor plan to first session.",
  line: "GreenPulse designs, equips and launches recovery and wellness spaces. We plan the layout, choose the right products from one catalogue, install them and train your team.",
  proof: [
    { title: "Designed first", line: "A layout for your space, planned before you build." },
    { title: "Installed & commissioned", line: "On-site assembly, electrical safety checks and team training." },
    { title: "Launch support", line: "Session menu, opening content and a check-in after you open." },
    { title: "One point of contact", line: "One team from first conversation to opening day." },
  ],
  suitesLabel: "Four suites",
  /** Highlights follow the product order: Relax, Heat, Light, Cold */
  suites: {
    recover: {
      summary: "Contrast therapy, infrared heat and cold immersion for busy recovery floors.",
      highlights: ["Infrared saunas", "Cold plunges", "Compression"],
    },
    agewell: {
      summary: "Mobility, comfort and longevity equipment for senior living residences.",
      highlights: ["Standing chairs", "Massage chairs", "Light devices"],
    },
    rehabilitate: {
      summary: "Drop tables, decompression loungers and recovery tools for physio and chiro practices.",
      highlights: ["Chiropractic tables", "Spinal decompression", "Percussion"],
    },
    livewell: {
      summary: "Recovery chairs, cold therapy and flexible rentals for hospitals, clinics and homecare.",
      highlights: ["Zero-gravity chairs", "Cold therapy", "Monthly rentals"],
    },
  } satisfies Record<SolutionId, { summary: string; highlights: string[] }>,
};

export type BentoSlideTile = {
  id: string;
  src: string;
  alt: string;
  span: "left-top" | "left-bottom" | "center-top" | "right-top-wide" | "center-bottom-wide" | "right-bottom";
  fit?: "cover" | "contain";
};

export type BentoSlide = {
  id: SolutionId | string;
  name: string;
  audience: string;
  url: string;
  tiles: BentoSlideTile[];
};

export const bentoSlides: BentoSlide[] = [
  {
    id: "heat",
    name: "Heat Therapy",
    audience: "Full-spectrum infrared saunas & thermal therapy",
    url: "/products?category=heat",
    tiles: [
      {
        id: "heat-1",
        src: "/home page/stack image/heat/1.png",
        alt: "Heat therapy sanctuary - 1",
        span: "left-top",
        fit: "cover",
      },
      {
        id: "heat-2",
        src: "/home page/stack image/heat/2.png",
        alt: "Heat therapy sanctuary - 2",
        span: "center-top",
        fit: "cover",
      },
      {
        id: "heat-3",
        src: "/home page/stack image/heat/3.png",
        alt: "Heat therapy sanctuary - 3",
        span: "right-top-wide",
        fit: "cover",
      },
      {
        id: "heat-4",
        src: "/home page/stack image/heat/4.png",
        alt: "Heat therapy sanctuary - 4",
        span: "left-bottom",
        fit: "cover",
      },
      {
        id: "heat-5",
        src: "/home page/stack image/heat/5.png",
        alt: "Heat therapy sanctuary - 5",
        span: "center-bottom-wide",
        fit: "cover",
      },
      {
        id: "heat-6",
        src: "/home page/stack image/heat/6.png",
        alt: "Heat therapy sanctuary - 6",
        span: "right-bottom",
        fit: "cover",
      },
    ],
  },
  {
    id: "agewell",
    name: "AgeWell",
    audience: "Senior living & mobility assist",
    url: "/solutions/agewell",
    tiles: [
      {
        id: "agewell-1",
        src: "/catalog-images/massage-chair-elite-white.jpg",
        alt: "Ergonomic assistive lounger in natural light",
        span: "left-top",
        fit: "cover",
      },
      {
        id: "agewell-2",
        src: "/Target client/audience-seniorliving.jpg",
        alt: "Senior living wellness residence suite",
        span: "center-top",
        fit: "cover",
      },
      {
        id: "agewell-3",
        src: "/recoverandrestore/agewell.png",
        alt: "Senior living mobility and comfort sanctuary",
        span: "right-top-wide",
        fit: "cover",
      },
      {
        id: "agewell-4",
        src: "/wellness.png",
        alt: "Restorative sensory wellness suite",
        span: "left-bottom",
        fit: "cover",
      },
      {
        id: "agewell-5",
        src: "/catalog-images/massage-chair-woodfinish-lion.jpg",
        alt: "Luxury wood finish assisted chair",
        span: "center-bottom-wide",
        fit: "cover",
      },
      {
        id: "agewell-6",
        src: "/longivity.png",
        alt: "Longevity living room suite",
        span: "right-bottom",
        fit: "cover",
      },
    ],
  },
  {
    id: "rehabilitate",
    name: "Rehabilitate",
    audience: "Physio & chiropractic centres",
    url: "/solutions/rehabilitate",
    tiles: [
      {
        id: "rehab-1",
        src: "/Target client/audience-physio.jpg",
        alt: "Clinical physiotherapy treatment studio",
        span: "left-top",
        fit: "cover",
      },
      {
        id: "rehab-2",
        src: "/vitality.png",
        alt: "Active vitality recovery room",
        span: "center-top",
        fit: "cover",
      },
      {
        id: "rehab-3",
        src: "/recoverandrestore/rehabilatemain.png",
        alt: "Physiotherapy & chiropractic recovery suite",
        span: "right-top-wide",
        fit: "cover",
      },
      {
        id: "rehab-4",
        src: "/Target client/audience-gyms.jpg",
        alt: "Athletic active performance studio",
        span: "left-bottom",
        fit: "cover",
      },
      {
        id: "rehab-5",
        src: "/performance.png",
        alt: "Bio-stacking conditioning room",
        span: "center-bottom-wide",
        fit: "cover",
      },
      {
        id: "rehab-6",
        src: "/sauna hero.jpg",
        alt: "Thermal rehabilitation sanctuary",
        span: "right-bottom",
        fit: "cover",
      },
    ],
  },
  {
    id: "livewell",
    name: "Live Well",
    audience: "Hospitals, clinics & homecare",
    url: "/solutions/live-well",
    tiles: [
      {
        id: "livewell-1",
        src: "/longivity.png",
        alt: "Clinical longevity and wellness sanctuary",
        span: "left-top",
        fit: "cover",
      },
      {
        id: "livewell-2",
        src: "/Target client/audience-hospital.jpg",
        alt: "Modern clinic and medical care suite",
        span: "center-top",
        fit: "cover",
      },
      {
        id: "livewell-3",
        src: "/recoverandrestore/livewell.png",
        alt: "Hospital, clinical & homecare suite",
        span: "right-top-wide",
        fit: "cover",
      },
      {
        id: "livewell-4",
        src: "/recoverandrestore/live well.png",
        alt: "Hospital care suite still",
        span: "left-bottom",
        fit: "cover",
      },
      {
        id: "livewell-5",
        src: "/hero-wellness-sanctuary.jpg",
        alt: "Calm clinical wellness suite",
        span: "center-bottom-wide",
        fit: "cover",
      },
      {
        id: "livewell-6",
        src: "/recovery.png",
        alt: "Medical recovery room",
        span: "right-bottom",
        fit: "cover",
      },
    ],
  },
];

export const solutions: Solution[] = [
  {
    id: "recover",
    name: "Recover & Restore",
    audience: "Wellness & longevity centres, hotel spas, fitness",
    priority: 1,
    url: "/solutions/recover",
    image: {
      id: "solution-recover",
      kind: "image",
      label: "Recover & Restore — suite still 4:3",
      aspect: "4:3",
      alt: "Recovery suite with infrared sauna and wellness equipment",
      src: "/recoverandrestore/recoverandrestoremain.png",
    },
    hoverVideo: {
      id: "solution-recover-hover",
      kind: "video",
      label: "Recover & Restore — hover loop 4:3",
      aspect: "4:3",
      alt: "",
      duration: "4–6s loop",
    },
  },
  {
    id: "agewell",
    name: "AgeWell",
    audience: "Senior living & mobility assist",
    priority: 2,
    url: "/solutions/agewell",
    image: {
      id: "solution-agewell",
      kind: "image",
      label: "AgeWell — still 16:10",
      aspect: "16:10",
      alt: "Mobility and comfort equipment in a senior living residence",
      src: "/recoverandrestore/agewell.png",
    },
    hoverVideo: {
      id: "solution-agewell-hover",
      kind: "video",
      label: "AgeWell — hover loop 16:10",
      aspect: "16:10",
      alt: "",
      duration: "4–6s loop",
    },
  },
  {
    id: "rehabilitate",
    name: "Rehabilitate",
    audience: "Physio & chiropractic centres",
    priority: 3,
    url: "/solutions/rehabilitate",
    image: {
      id: "solution-rehabilitate",
      kind: "image",
      label: "Rehabilitate — still 4:3",
      aspect: "4:3",
      alt: "Recovery equipment in a physiotherapy studio",
      src: "/recoverandrestore/rehabilatemain.png",
    },
    hoverVideo: {
      id: "solution-rehabilitate-hover",
      kind: "video",
      label: "Rehabilitate — hover loop 4:3",
      aspect: "4:3",
      alt: "",
      duration: "4–6s loop",
    },
  },
  {
    id: "livewell",
    name: "Live Well",
    audience: "Hospitals, clinics & homecare",
    priority: 4,
    url: "/solutions/live-well",
    image: {
      id: "solution-livewell",
      kind: "image",
      label: "Live Well — still 1:1",
      aspect: "1:1",
      alt: "Wellness equipment set up for a clinic or homecare setting",
      src: "/recoverandrestore/live%20well.png",
    },
    hoverVideo: {
      id: "solution-livewell-hover",
      kind: "video",
      label: "Live Well — hover loop 1:1",
      aspect: "1:1",
      alt: "",
      duration: "4–6s loop",
    },
  },
];

/* ------------------------------------------------------------------ */
/* 4. Equipment rail                                                   */
/* ------------------------------------------------------------------ */

export const equipmentSection = {
  eyebrow: "Equipment",
  title: "The equipment.",
};

const productImage = (id: ProductId, name: string, src?: string): MediaSlot => ({
  id: `product-${id}`,
  kind: "image",
  label: `${name} — product 4:3`,
  aspect: "4:3",
  alt: `${name} photographed on a neutral backdrop`,
  src: src || undefined,
});

/**
 * Product photography lives in /public/GreenPulse/<slug>/<slug>-<n>-<view>.webp:
 * 0 banner-hero (16:9), 1 front, 2 side, 3 real-use, 4 measurements (all 4:3),
 * 5 banner-overview (16:9). `lead` picks the main image (catalog card, first in the
 * gallery; real use by default); the other shots follow. Measurements and banners
 * stay in the folder but aren't shown for now.
 */
const shotViews = {
  front: { file: "1-front", alt: "front view" },
  side: { file: "2-side", alt: "side view" },
  "real-use": { file: "3-real-use", alt: "in use" },
} as const;

type ShotView = keyof typeof shotViews;

const productShots = (
  id: ProductId,
  name: string,
  slug: string,
  { lead = "real-use" }: { lead?: ShotView } = {},
): Pick<Product, "image" | "gallery"> => {
  const slot = (slotId: string, view: ShotView) => ({
    ...productImage(slotId, name, `/GreenPulse/${slug}/${slug}-${shotViews[view].file}.webp`),
    alt: `${name} ${shotViews[view].alt}`,
  });
  const views = (Object.keys(shotViews) as ShotView[]).filter((v) => v !== lead);
  return {
    image: slot(id, lead),
    gallery: views.map((view, i) => slot(`${id}-g${i + 1}`, view)),
  };
};

export const products: Product[] = [
  {
    id: "infrared-sauna-single-full-spectrum-mstar",
    name: "Halo 1 Infrared Sauna (Single Person, Full Spectrum)",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Full Spectrum Infrared Saunas",
    brand: "HALO",
    url: "/products/infrared-sauna-single-full-spectrum-mstar",
    description: "Compact single-person full-spectrum infrared sauna crafted from hemlock with tourmaline floor heating, oxygen ionizer, and 7-color chromotherapy.",
    tiers: ["Pro", "Signature"],
    specs: ["90 × 90 × 190 cm", "1350 W", "1 Person"],
    ...productShots("infrared-sauna-single-full-spectrum-mstar", "Halo 1 Infrared Sauna (Single Person, Full Spectrum)", "halo-1"),
  },
  {
    id: "infrared-sauna-double-full-spectrum-mstar",
    name: "Halo 2 Infrared Sauna (2 Person, Full Spectrum)",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Full Spectrum Infrared Saunas",
    brand: "HALO",
    url: "/products/infrared-sauna-double-full-spectrum-mstar",
    description: "Two-person American full-spectrum infrared sauna with hemlock or red cedar, tourmaline floor heating, oxygen ionizer, and integrated Bluetooth sound.",
    tiers: ["Pro", "Signature"],
    specs: ["120 × 105 × 190 cm", "1750 W", "2 Persons"],
    ...productShots("infrared-sauna-double-full-spectrum-mstar", "Halo 2 Infrared Sauna (2 Person, Full Spectrum)", "halo-2"),
  },
  {
    id: "infrared-sauna-group-full-spectrum-mstar",
    name: "Halo 3 Infrared Sauna (3 Person, Full Spectrum)",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Full Spectrum Infrared Saunas",
    brand: "HALO",
    url: "/products/infrared-sauna-group-full-spectrum-mstar",
    description: "Three-person luxury full-spectrum infrared sauna with quartz combine heating, starlight chromotherapy, dual speakers, and oxygen ionizer.",
    tiers: ["Pro", "Signature"],
    specs: ["150 × 120 × 190 cm", "2100 W", "3 Persons"],
    ...productShots("infrared-sauna-group-full-spectrum-mstar", "Halo 3 Infrared Sauna (3 Person, Full Spectrum)", "halo-3"),
  },
  {
    id: "infrared-sauna-double-combination-mstar",
    name: "Halo Hybrid 2 Infrared Sauna (2 Person, Carbon + Ceramic Heater)",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Full Spectrum Infrared Saunas",
    brand: "HALO",
    url: "/products/infrared-sauna-double-combination-mstar",
    description: "Two-person hybrid infrared sauna in red cedar with ceramic tube and carbon panel heaters, tourmaline stone floor, and multimedia sound.",
    tiers: ["Essential", "Pro"],
    specs: ["120 × 105 × 190 cm", "1750 W", "2 Persons"],
    // Only a real-use shot so far (no front/side/measurements set), so not productShots().
    image: {
      ...productImage(
        "infrared-sauna-double-combination-mstar",
        "Halo Hybrid 2 Infrared Sauna (2 Person, Carbon + Ceramic Heater)",
        "/GreenPulse/halo-hybrid-2/halo-hybrid-2-0-real-use.webp",
      ),
      alt: "Halo Hybrid 2 Infrared Sauna (2 Person, Carbon + Ceramic Heater) in use",
    },
  },
  {
    id: "infrared-sauna-group-combination-mstar",
    name: "Halo Hybrid 3 Infrared Sauna (3 Person, Carbon + Ceramic Heater)",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Full Spectrum Infrared Saunas",
    brand: "HALO",
    url: "/products/infrared-sauna-group-combination-mstar",
    description: "Luxury three-person hybrid infrared sauna combining far-infrared carbon panels with full-spectrum quartz heating, red cedar or hemlock build, and tourmaline floor.",
    tiers: ["Essential", "Pro"],
    specs: ["150 × 120 × 190 cm", "2100 W", "3 Persons"],
    // No product photography yet (the mockup collages are internal only).
    image: productImage(
      "infrared-sauna-group-combination-mstar",
      "Halo Hybrid 3 Infrared Sauna (3 Person, Carbon + Ceramic Heater)",
    ),
  },
  {
    id: "cold-plunge-single-round-yg",
    name: "Arctic Ring Cold Plunge (Round, Single Person)",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Cryo & Ice Bath Systems",
    brand: "ARCTIC",
    url: "/products/cold-plunge-single-round-yg",
    description: "Round single-person cold plunge (Model BST-1MDB) with a 304 stainless steel interior, 0.8 HP water chiller and circulation filtration, cooling to 3 °C for indoor or outdoor use.",
    tiers: ["Essential", "Pro"],
    specs: ["Ø 90 × 75 cm", "0.8 HP chiller", "1 Person"],
    ...productShots("cold-plunge-single-round-yg", "Arctic Ring Cold Plunge (Round, Single Person)", "arctic-ring"),
  },
  {
    id: "cold-plunge-tub-new-ice-bath",
    name: "Arctic Tub Cold Plunge Ice Bath Tub",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Cryo & Ice Bath Systems",
    brand: "ARCTIC",
    url: "/products/cold-plunge-tub-new-ice-bath",
    description: "Full-size one-piece composite cold plunge tub with two-stage filtration, purpose-designed water nozzles and a safety drain, paired with a high-power chiller.",
    tiers: ["Pro", "Signature"],
    specs: ["170 × 80 cm", "421 / 483 L", "2-Stage Filtration"],
    ...productShots("cold-plunge-tub-new-ice-bath", "Arctic Tub Cold Plunge Ice Bath Tub", "arctic-tub"),
  },
  {
    id: "cold-plunge-foldable-aircore",
    name: "Arctic Fold Portable Foldable Cold Plunge",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Cryo & Ice Bath Systems",
    brand: "ARCTIC",
    url: "/products/cold-plunge-foldable-aircore",
    description: "Foldable portable cold plunge",
    tiers: ["Essential", "Pro"],
    specs: ["Foldable", "Portable", "Cold Plunge"],
    ...productShots("cold-plunge-foldable-aircore", "Arctic Fold Portable Foldable Cold Plunge", "arctic-fold"),
  },
  {
    id: "cryo-mini-cryome",
    name: "Arctic Zero Mini Cryotherapy Chamber",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Cryo & Ice Bath Systems",
    brand: "ARCTIC",
    url: "/products/cryo-mini-cryome",
    description: "Compact, fully automated cryosauna with a 7\" touch screen, 1 m² footprint and operating range of −110 to −180 °C.",
    tiers: ["Pro", "Signature"],
    specs: ["−110 to −180 °C", "1.5 kW", "1 m² Footprint"],
    ...productShots("cryo-mini-cryome", "Arctic Zero Mini Cryotherapy Chamber", "arctic-zero"),
  },
  {
    id: "cryo-chill-cryome-icechill",
    name: "Arctic Chill Nitrogen Cryotherapy Chamber (1–2 Person, Breathable Air)",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Cryo & Ice Bath Systems",
    brand: "ARCTIC",
    url: "/products/cryo-chill-cryome-icechill",
    description: "Walk-in nitrogen cryochamber for one or two people with breathable air inside, running at −80 to −110 °C with a 20\" operator touchscreen.",
    tiers: ["Pro", "Signature"],
    specs: ["−80 to −110 °C","1–2 Person","Breathable Air"],
    ...productShots("cryo-chill-cryome-icechill", "Arctic Chill Nitrogen Cryotherapy Chamber (1–2 Person, Breathable Air)", "arctic-chill"),
  },
  {
    id: "cryo-one-cryome",
    name: "Arctic One Individual Cryotherapy Cryosauna",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Cryo & Ice Bath Systems",
    brand: "ARCTIC",
    url: "/products/cryo-one-cryome",
    description: "Single-person nitrogen cryosauna with a height-adjustable elevator, 7\" operator and 10\" client displays, operating at −110 to −180 °C.",
    tiers: ["Pro", "Signature"],
    specs: ["−110 to −180 °C","1.5 kW","Electric Elevator"],
    ...productShots("cryo-one-cryome", "Arctic One Individual Cryotherapy Cryosauna", "arctic-one"),
  },
  {
    id: "cryo-ultra-cryome-pro",
    name: "Arctic Ultra Premium Cryotherapy Cryosauna (High Throughput)",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Cryo & Ice Bath Systems",
    brand: "ARCTIC",
    url: "/products/cryo-ultra-cryome-pro",
    description: "Premium single-person cryosauna built for up to 90 sessions a day, with auto-drying and a 3-minute pre-cool.",
    tiers: ["Pro", "Signature"],
    specs: ["−110 to −180 °C","90 Sessions/Day","Auto-Drying"],
    ...productShots("cryo-ultra-cryome-pro", "Arctic Ultra Premium Cryotherapy Cryosauna (High Throughput)", "arctic-ultra"),
  },
  {
    id: "led-therapy-full-stand",
    name: "Luma Stand Full Body LED Light Therapy Stand",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Photobiomodulation & Red Light Therapy",
    brand: "LUMA",
    url: "/products/led-therapy-full-stand",
    description: "Full-body LED light therapy stand (Model M1 Plus) with 12,312 LEDs at 1,500 W, four wavelengths and simple button control.",
    tiers: ["Pro", "Signature"],
    specs: ["12,312 LEDs", "1500 W", "4 Wavelengths"],
    ...productShots("led-therapy-full-stand", "Luma Stand Full Body LED Light Therapy Stand", "luma-stand"),
  },
  {
    id: "led-therapy-full-stand-2",
    name: "Luma Stand Pro Full Body LED Light Therapy Stand (Independent Wavelength Control)",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Photobiomodulation & Red Light Therapy",
    brand: "LUMA",
    url: "/products/led-therapy-full-stand-2",
    description: "Full-body LED light therapy stand (Model M2 Plus) with 9,600 LEDs, five wavelengths, independent wavelength control and preset protocols.",
    tiers: ["Pro", "Signature"],
    specs: ["9,600 LEDs", "1500 W", "Independent Control"],
    ...productShots("led-therapy-full-stand-2", "Luma Stand Pro Full Body LED Light Therapy Stand (Independent Wavelength Control)", "luma-stand-pro"),
  },
  {
    id: "led-therapy-full-body-clam-1-m6",
    name: "Luma Cocoon Full Body LED Light Therapy Bed",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Photobiomodulation & Red Light Therapy",
    brand: "LUMA",
    url: "/products/led-therapy-full-body-clam-1-m6",
    description: "Full-body clamshell LED light therapy bed (Model M4N Plus) with 21,600 LEDs at 3,000 W, a control tablet, Bluetooth music and independent wavelength control.",
    tiers: ["Pro", "Signature"],
    specs: ["21,600 LEDs", "3000 W", "Clamshell Bed"],
    ...productShots("led-therapy-full-body-clam-1-m6", "Luma Cocoon Full Body LED Light Therapy Bed", "luma-cocoon"),
  },
  {
    id: "led-therapy-full-body-clam-2-m6l",
    name: "Luma Cocoon Pro Full Body LED Light Therapy Bed with PEMF",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Photobiomodulation & Red Light Therapy",
    brand: "LUMA",
    url: "/products/led-therapy-full-body-clam-2-m6l",
    description: "Advanced full-body clamshell LED light therapy bed (Model M6N Plus) with 41,600 LEDs at 6,500 W, PEMF, a control tablet and independent wavelength control.",
    tiers: ["Pro", "Signature"],
    specs: ["41,600 LEDs", "6500 W", "PEMF"],
    ...productShots("led-therapy-full-body-clam-2-m6l", "Luma Cocoon Pro Full Body LED Light Therapy Bed with PEMF", "luma-cocoon-pro"),
  },
  {
    id: "led-therapy-full-body-stand-chamber",
    name: "Luma Dome Full Body LED Light Therapy Chamber",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Photobiomodulation & Red Light Therapy",
    brand: "LUMA",
    url: "/products/led-therapy-full-body-stand-chamber",
    description: "Walk-in full-body LED light therapy chamber (Model M11) with 48,000 LEDs at 6,500 to 7,000 W, five wavelengths and independent wavelength control.",
    tiers: ["Pro", "Signature"],
    specs: ["48,000 LEDs", "6500–7000 W", "Walk-In Chamber"],
    ...productShots("led-therapy-full-body-stand-chamber", "Luma Dome Full Body LED Light Therapy Chamber", "luma-dome"),
  },
  {
    id: "hbot-single-cube-chamber",
    name: "Oxa Cube Solo Hyperbaric Oxygen Chamber (HBOT, Single)",
    category: "Oxygen & Hyperbaric (Air)",
    modality: "air",
    subCategory: "Hyperbaric Oxygen Therapy (HBOT)",
    brand: "OXA",
    url: "/products/hbot-single-cube-chamber",
    description: "Single-user hyperbaric oxygen chamber rated 2.0 ATA, with a steel cabin, high-transparency acrylic door and a 10 L/min oxygen generator.",
    tiers: ["Pro", "Signature"],
    specs: ["2.0 ATA", "1900 × 900 × 1950 mm", "1 Person"],
    ...productShots("hbot-single-cube-chamber", "Oxa Cube Solo Hyperbaric Oxygen Chamber (HBOT, Single)", "oxa-cube-solo"),
  },
  {
    id: "hbot-double-cube-chamber",
    name: "Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)",
    category: "Oxygen & Hyperbaric (Air)",
    modality: "air",
    subCategory: "Hyperbaric Oxygen Therapy (HBOT)",
    brand: "OXA",
    url: "/products/hbot-double-cube-chamber",
    description: "Two-user hyperbaric oxygen chamber rated 2.0 ATA, with a steel cabin, carbon steel door and a 15 L/min oxygen generator.",
    tiers: ["Pro", "Signature"],
    specs: ["2.0 ATA", "2000 × 1800 × 1900 mm", "2 Persons"],
    ...productShots("hbot-double-cube-chamber", "Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)", "oxa-cube-duo"),
  },
  {
    id: "hbot-single-mini-komjet",
    name: "Oxa Mini Portable Hyperbaric Oxygen Chamber (HBOT)",
    category: "Oxygen & Hyperbaric (Air)",
    modality: "air",
    subCategory: "Hyperbaric Oxygen Therapy (HBOT)",
    brand: "OXA",
    url: "/products/hbot-single-mini-komjet",
    description: "Compact single-user hyperbaric oxygen chamber rated 2.0 ATA, 1500 × 900 × 1950 mm, with a carbon steel door and a 15 L/min oxygen generator.",
    tiers: ["Essential", "Pro"],
    specs: ["2.0 ATA", "1500 × 900 × 1950 mm", "1 Person"],
    // No product photography yet (the mockup collages are internal only).
    image: productImage(
      "hbot-single-mini-komjet",
      "Oxa Mini Portable Hyperbaric Oxygen Chamber (HBOT)",
    ),
  },
  {
    id: "oxy-1-hyperbaric-oxygen-chamber-single",
    name: "Oxy 1 Hyperbaric Oxygen Chamber (HBOT, Single)",
    category: "Oxygen & Hyperbaric (Air)",
    modality: "air",
    subCategory: "Hyperbaric Oxygen Therapy (HBOT)",
    brand: "OXA",
    url: "/products/oxy-1-hyperbaric-oxygen-chamber-single",
    description: "Single-seat hyperbaric oxygen chamber offered at 1.5 ATA or 2.0 ATA, with a 10 L/min oxygen flow, custom colours and an optional red-light version.",
    tiers: ["Pro", "Signature"],
    specs: ["1.5 / 2.0 ATA", "1 Seat", "10 L/min O₂"],
    ...productShots("oxy-1-hyperbaric-oxygen-chamber-single", "Oxy 1 Hyperbaric Oxygen Chamber (HBOT, Single)", "oxy-1"),
  },
  {
    id: "oxy-2-hyperbaric-oxygen-chamber-double",
    name: "Oxy 2 Hyperbaric Oxygen Chamber (HBOT, Double)",
    category: "Oxygen & Hyperbaric (Air)",
    modality: "air",
    subCategory: "Hyperbaric Oxygen Therapy (HBOT)",
    brand: "OXA",
    url: "/products/oxy-2-hyperbaric-oxygen-chamber-double",
    description: "Two-seat hyperbaric oxygen chamber offered at 1.5 ATA or 2.0 ATA, with a 15 L/min oxygen flow, custom colours and an optional red-light version.",
    tiers: ["Pro", "Signature"],
    specs: ["1.5 / 2.0 ATA", "2 Seats", "15 L/min O₂"],
    ...productShots("oxy-2-hyperbaric-oxygen-chamber-double", "Oxy 2 Hyperbaric Oxygen Chamber (HBOT, Double)", "oxy-2"),
  },
  {
    id: "massage-chair-mid-range-lion",
    name: "Serene Mid Full Body Massage Chair",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Robotic & SL-Track Massage Systems",
    brand: "SERENE",
    url: "/products/massage-chair-mid-range-lion",
    description: "Full-body 3D massage chair (Model MS-607) with a super-long SL track, full-body airbags, body scan, 3 zero-gravity positions and 12 programmes.",
    tiers: ["Essential", "Pro"],
    specs: ["3D + SL Track", "12 Programmes", "3 Zero-Gravity"],
    ...productShots("massage-chair-mid-range-lion", "Serene Mid Full Body Massage Chair", "serene-mid"),
  },
  {
    id: "massage-chair-elite-ms131",
    name: "Serene Elite Premium Full Body Massage Chair",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Robotic & SL-Track Massage Systems",
    brand: "SERENE",
    url: "/products/massage-chair-elite-ms131",
    description: "Elite 4D smart massage chair (Model MS-131 PLUS) with 38–118 mm adjustable depth, SL track, body scan, heel rocking and a touchscreen controller.",
    tiers: ["Pro", "Signature"],
    specs: ["4D Mechanism", "38–118 mm Depth", "170 W"],
    ...productShots("massage-chair-elite-ms131", "Serene Elite Premium Full Body Massage Chair", "serene-elite"),
  },
  {
    id: "lounge-sl-massage-chair",
    name: "Serene Lounge SL Track Massage Chair",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Robotic & SL-Track Massage Systems",
    brand: "SERENE",
    url: "/products/lounge-sl-massage-chair",
    description: "Lounge-style SL-track massage chair with electric recline, waist heating, a separate footstool and 5 automatic programmes.",
    tiers: ["Essential", "Pro"],
    specs: ["SL Track", "5 Programmes", "≤ 55 dB"],
    ...productShots("lounge-sl-massage-chair", "Serene Lounge SL Track Massage Chair", "serene-lounge"),
  },
  {
    id: "lounge-360-massage-chair",
    name: "Serene 360 Lounge Massage Chair",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Robotic & SL-Track Massage Systems",
    brand: "SERENE",
    url: "/products/lounge-360-massage-chair",
    description: "Compact 360° rotating lounge massage chair with slim 2D massage, 3 programmes, a separate footstool and USB-C battery operation.",
    tiers: ["Essential", "Pro"],
    specs: ["360° Rotation", "2D Massage", "2600 mAh Battery"],
    ...productShots("lounge-360-massage-chair", "Serene 360 Lounge Massage Chair", "serene-360"),
  },
  {
    id: "comfort-sl-massage-chair",
    name: "Serene Comfort SL Track Massage Chair",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Robotic & SL-Track Massage Systems",
    brand: "SERENE",
    url: "/products/comfort-sl-massage-chair",
    description: "Compact SL-curve massage chair with zero-gravity recline, waist heating, leg airbags, voice control and 8 automatic programmes.",
    tiers: ["Essential", "Pro"],
    specs: ["SL Curve", "Zero-Gravity", "8 Programmes"],
    ...productShots("comfort-sl-massage-chair", "Serene Comfort SL Track Massage Chair", "serene-comfort"),
  },
  {
    id: "compression-boots-dj-sets",
    name: "PulseWave Go Wireless Air Compression Boots",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/compression-boots-dj-sets",
    description: "Wireless air compression boots (Model S9082) with an on-boot LED controller, Bluetooth sync, 5 overlapping chambers and 50–150 mmHg.",
    tiers: ["Essential", "Pro"],
    specs: ["5 Chambers", "50–150 mmHg", "Wireless"],
    ...productShots("compression-boots-dj-sets", "PulseWave Go Wireless Air Compression Boots", "pulsewave-go"),
  },
  {
    id: "compression-system-konbest-9690k",
    name: "PulseWave Pro 6 Air Compression Recovery System (6-Chamber)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/compression-system-konbest-9690k",
    description: "Professional 6-chamber compression system (Model 9690K-B) with an LED touch screen, app control, 30–260 mmHg and a quiet brushless pump.",
    tiers: ["Essential", "Pro"],
    specs: ["6 Chambers", "30–260 mmHg", "App Control"],
    ...productShots("compression-system-konbest-9690k", "PulseWave Pro 6 Air Compression Recovery System (6-Chamber)", "pulsewave-pro-6"),
  },
  {
    id: "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
    name: "PulseWave Pro 8 Air Compression Recovery System (8-Chamber)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-pro-8-air-compression-recovery-system-8-chamber",
    description: "Professional 8-chamber compression system (Model 9890K-B) with a high-flow pump up to 260 mmHg, touch screen, app control and zone selection.",
    tiers: ["Essential", "Pro"],
    specs: ["8 Chambers", "30–260 mmHg", "App Control"],
    image: productImage(
      "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
      "PulseWave Pro 8 Air Compression Recovery System (8-Chamber)",
    ),
  },
  {
    id: "pulsewave-4-air-compression-boots-wireless-app-control",
    name: "PulseWave 4 Air Compression Boots (4-Chamber, Wireless, App Control)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-4-air-compression-boots-wireless-app-control",
    description: "Wireless 4-chamber compression boots (Model 9490 Pro) with detachable pump modules, independent leg settings and app control.",
    tiers: ["Essential", "Pro"],
    specs: ["4 Chambers", "30–240 mmHg", "Wireless + App"],
    ...productShots("pulsewave-4-air-compression-boots-wireless-app-control", "PulseWave 4 Air Compression Boots (4-Chamber, Wireless, App Control)", "pulsewave-4"),
  },
  {
    id: "pulsewave-4-plus-air-compression-boots",
    name: "PulseWave 4 Plus Air Compression Boots (4-Chamber, App Control)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-4-plus-air-compression-boots",
    description: "Wireless 4-chamber compression boots (Model 9490 Pro E) with direct-docking pump modules, colour LCD and app sync.",
    tiers: ["Essential", "Pro"],
    specs: ["4 Chambers", "30–240 mmHg", "Independent Legs"],
    ...productShots("pulsewave-4-plus-air-compression-boots", "PulseWave 4 Plus Air Compression Boots (4-Chamber, App Control)", "pulsewave-4-plus"),
  },
  {
    id: "pulsewave-4-direct-air-compression-boots",
    name: "PulseWave 4 Direct Air Compression Boots (4-Chamber, Hand Controller)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-4-direct-air-compression-boots",
    description: "Hand-controlled 4-chamber compression boots (Model 9490 Max) with a large colour LCD and physical buttons, no app needed.",
    tiers: ["Essential", "Pro"],
    specs: ["4 Chambers", "Hand Controller", "30–240 mmHg"],
    // Only a real-use shot so far, so not productShots().
    image: {
      ...productImage(
        "pulsewave-4-direct-air-compression-boots",
        "PulseWave 4 Direct Air Compression Boots (4-Chamber, Hand Controller)",
        "/GreenPulse/pulsewave-4-direct/pulsewave-4-direct-3-real-use.webp",
      ),
      alt: "PulseWave 4 Direct Air Compression Boots (4-Chamber, Hand Controller) in use",
    },
  },
  {
    id: "pulsewave-5-portable-air-compression-boots",
    name: "PulseWave 5 Portable Air Compression Boots",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-5-portable-air-compression-boots",
    description: "Portable 5-chamber compression boots (Model 9590) with 3 preset modes, 50–200 mmHg and a clear LCD.",
    tiers: ["Essential", "Pro"],
    specs: ["5 Chambers", "50–200 mmHg", "3 Modes"],
    // Only a real-use shot so far, so not productShots().
    image: {
      ...productImage(
        "pulsewave-5-portable-air-compression-boots",
        "PulseWave 5 Portable Air Compression Boots",
        "/GreenPulse/pulsewave-5/pulsewave-5-3-real-use.webp",
      ),
      alt: "PulseWave 5 Portable Air Compression Boots in use",
    },
  },
  {
    id: "pulsewave-glow-wireless-compression-boots-with-infrared-light",
    name: "PulseWave Glow Wireless Compression Boots with Infrared Light",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-glow-wireless-compression-boots-with-infrared-light",
    description: "Wireless compression boots (Model S9082F) with built-in infrared light emitters, 5 overlapping chambers and Bluetooth sync.",
    tiers: ["Essential", "Pro"],
    specs: ["5 Chambers", "Infrared Light", "Wireless"],
    ...productShots("pulsewave-glow-wireless-compression-boots-with-infrared-light", "PulseWave Glow Wireless Compression Boots with Infrared Light", "pulsewave-glow"),
  },
  {
    id: "pulsewave-ease-air-compression-leg-massager",
    name: "PulseWave Ease Air Compression Leg Massager",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-ease-air-compression-leg-massager",
    description: "Air compression leg massager (Model S9035) with 4 chambers, a quiet pump, 50–120 mmHg and about 4 hours of battery life.",
    tiers: ["Essential", "Pro"],
    specs: ["4 Chambers", "50–120 mmHg", "~4 h Battery"],
    ...productShots("pulsewave-ease-air-compression-leg-massager", "PulseWave Ease Air Compression Leg Massager", "pulsewave-ease"),
  },
  {
    id: "pulsewave-charge-rechargeable-air-compression-boots",
    name: "PulseWave Charge Rechargeable Air Compression Boots",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-charge-rechargeable-air-compression-boots",
    description: "Rechargeable compression boots (Model S9061B) with 4 chambers and 12 levels from 40 to 150 mmHg.",
    tiers: ["Essential", "Pro"],
    specs: ["4 Chambers", "40–150 mmHg", "12 Levels"],
    ...productShots("pulsewave-charge-rechargeable-air-compression-boots", "PulseWave Charge Rechargeable Air Compression Boots", "pulsewave-charge"),
  },
  {
    id: "pulsewave-recover-air-compression-recovery-system",
    name: "PulseWave Recover Air Compression Recovery System",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-recover-air-compression-recovery-system",
    description: "Air compression recovery system (Model M2001) with 5 superimposed no-gap chambers, 3 modes and 11 levels (50–150 mmHg).",
    tiers: ["Essential", "Pro"],
    specs: ["5 Chambers", "3 Modes", "50–150 mmHg"],
    ...productShots("pulsewave-recover-air-compression-recovery-system", "PulseWave Recover Air Compression Recovery System", "pulsewave-recover"),
  },
  {
    id: "pulsewave-max-8-chamber-air-compression-recovery-system",
    name: "PulseWave Max 8-Chamber Rechargeable Air Compression Recovery Boots",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-max-8-chamber-air-compression-recovery-system",
    description: "8-chamber rechargeable compression boots (Model S9081L) with 6 programmes, 11 intensity levels (50–150 mmHg), a 15–60 minute timer and a full-length zipper.",
    tiers: ["Essential", "Pro"],
    specs: ["8 Chambers", "6 Programmes", "15–60 min Timer"],
    ...productShots("pulsewave-max-8-chamber-air-compression-recovery-system", "PulseWave Max 8-Chamber Rechargeable Air Compression Recovery Boots", "pulsewave-max"),
  },
  {
    id: "percussion-gun-jm04sa",
    name: "Thrum Lite Massage Gun",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Percussion Massage Therapy",
    brand: "THRUM",
    url: "/products/percussion-gun-jm04sa",
    description: "Compact percussion massage gun (Model JM04sA) with a built-in hot and cold head, brushless motor and USB Type-C charging.",
    tiers: ["Essential", "Pro"],
    specs: ["Hot & Cold Head", "4 Heads", "Type-C Charging"],
    ...productShots("percussion-gun-jm04sa", "Thrum Lite Massage Gun", "thrum-lite"),
  },
  {
    id: "percussion-massager-jm003",
    name: "Thrum Pro Professional Massage Gun (30 Speed)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Percussion Massage Therapy",
    brand: "THRUM",
    url: "/products/percussion-massager-jm003",
    description: "Professional percussion massage gun (Model JM003) with an LCD display, 30 speeds up to 3,200+ RPM and four interchangeable heads.",
    tiers: ["Essential", "Pro"],
    specs: ["30 Speeds", "3,200+ RPM", "LCD Display"],
    ...productShots("percussion-massager-jm003", "Thrum Pro Professional Massage Gun (30 Speed)", "thrum-pro"),
  },
  {
    id: "percussion-massager-jm019",
    name: "Thrum Deep Deep Tissue Massage Gun (12 mm)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Percussion Massage Therapy",
    brand: "THRUM",
    url: "/products/percussion-massager-jm019",
    description: "Deep-amplitude percussion massage gun (Model JM019) with a 12 mm stroke, brushless motor and three speed settings.",
    tiers: ["Essential", "Pro"],
    specs: ["12 mm Stroke", "3 Speeds", "Brushless Motor"],
    ...productShots("percussion-massager-jm019", "Thrum Deep Deep Tissue Massage Gun (12 mm)", "thrum-deep"),
  },
  {
    id: "sauna-blanket-rl301",
    name: "Ember Wrap Far Infrared Sauna Blanket",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Thermal & Red Light Blankets",
    brand: "EMBER / AURORA",
    url: "/products/sauna-blanket-rl301",
    description: "5-in-1 far-infrared thermal dome / blanket (Model RL301) with red light, PEMF, terahertz, negative-ion stones and 3-zone temperature control.",
    tiers: ["Essential", "Pro"],
    specs: ["5-in-1", "3 Heat Zones", "Up to 90 °C"],
    ...productShots("sauna-blanket-rl301", "Ember Wrap Far Infrared Sauna Blanket", "ember-wrap"),
  },
  {
    id: "red-light-blanket-rl302",
    name: "Aurora Wrap Red Light Therapy Blanket",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Thermal & Red Light Blankets",
    brand: "EMBER / AURORA",
    url: "/products/red-light-blanket-rl302",
    description: "Full-body flexible light blanket (Model RL302) with 2,240 LEDs at 660 nm + 850 nm, constant and pulsed modes, and a 180 × 180 cm size.",
    tiers: ["Essential", "Pro"],
    specs: ["2,240 LEDs", "660 + 850 nm", "180 × 180 cm"],
    ...productShots("red-light-blanket-rl302", "Aurora Wrap Red Light Therapy Blanket", "aurora-wrap"),
  },
  {
    id: "cold-therapy-unit-806pro",
    name: "Frostfire Pad Cold, Heat & Red Light Therapy Pad",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Contrast Therapy Devices",
    brand: "FROSTFIRE",
    url: "/products/cold-therapy-unit-806pro",
    description: "Wearable cold, heat and red light pad (Model CL806Pro) with vibration massage, 3–45 °C range and a rechargeable battery.",
    tiers: ["Essential", "Pro"],
    specs: ["3–45 °C", "Cold + Heat + Red Light", "1.2 kg"],
    ...productShots("cold-therapy-unit-806pro", "Frostfire Pad Cold, Heat & Red Light Therapy Pad", "frostfire-pad"),
  },
  {
    id: "frostfire-joint-wrap",
    name: "Frostfire Joint Wrap Cold, Heat & Infrared Therapy Wrap",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Contrast Therapy Devices",
    brand: "FROSTFIRE",
    url: "/products/frostfire-joint-wrap",
    description: "Wearable joint wrap with cold, heat and infrared modes, a strap-and-buckle fit and one-touch controls, sized at 420 × 240 mm.",
    tiers: ["Essential", "Pro"],
    specs: ["Cold + Heat + Infrared", "420 × 240 mm", "Wearable Wrap"],
    ...productShots("frostfire-joint-wrap", "Frostfire Joint Wrap Cold, Heat & Infrared Therapy Wrap", "frostfire-joint-wrap"),
  },
  {
    id: "luma-go-portable-red-light-stand",
    name: "Luma Go 500 Portable Red Light Therapy Stand",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/luma-go-portable-red-light-stand",
    description: "Portable red light stand (Model GY-T500): 100 LEDs at 660 nm + 850 nm, 1–20 minute sessions, switch or intelligent version.",
    tiers: ["Essential", "Pro"],
    specs: ["100 LEDs", "660 + 850 nm", "220 × 260 mm"],
    ...productShots("luma-go-portable-red-light-stand", "Luma Go 500 Portable Red Light Therapy Stand", "luma-go-500"),
  },
  {
    id: "luma-go-1000-portable-red-light-stand",
    name: "Luma Go 1000 Portable Red Light Therapy Stand",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/luma-go-1000-portable-red-light-stand",
    description: "Portable red light stand (Model GY-T1000): 200 LEDs at 660 nm + 850 nm, 1–20 minute sessions, switch or intelligent version.",
    tiers: ["Essential", "Pro"],
    specs: ["200 LEDs", "660 + 850 nm", "220 × 480 mm"],
    ...productShots("luma-go-1000-portable-red-light-stand", "Luma Go 1000 Portable Red Light Therapy Stand", "luma-go-1000"),
  },
  {
    id: "luma-go-1500-portable-red-light-stand",
    name: "Luma Go 1500 Portable Red Light Therapy Stand",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/luma-go-1500-portable-red-light-stand",
    description: "Portable red light stand (Model GY-T1500): 300 LEDs at 660 nm + 850 nm, 1–20 minute sessions, switch or intelligent version.",
    tiers: ["Essential", "Pro"],
    specs: ["300 LEDs", "660 + 850 nm", "220 × 690 mm"],
    ...productShots("luma-go-1500-portable-red-light-stand", "Luma Go 1500 Portable Red Light Therapy Stand", "luma-go-1500"),
  },
  {
    id: "led-stand-gy-t320",
    name: "Luma Tower Tall Red Light Therapy Stand",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/led-stand-gy-t320",
    description: "Tall mobile red light stand on wheels (Model GY-T320): 320 LEDs at 660 nm + 850 nm, 300 mW/cm², 1–60 minute sessions.",
    tiers: ["Essential", "Pro"],
    specs: ["320 LEDs", "660 + 850 nm", "1–60 min"],
    ...productShots("led-stand-gy-t320", "Luma Tower Tall Red Light Therapy Stand", "luma-tower"),
  },
  {
    id: "led-lamp-focus",
    name: "Luma Spot Red Light Therapy Lamp",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/led-lamp-focus",
    description: "Height-adjustable focused red light lamp with 18 dual-chip LEDs (660 nm + 850 nm), 54 W, bracket from 73 to 120 cm.",
    tiers: ["Essential", "Pro"],
    specs: ["18 LEDs", "54 W", "73–120 cm"],
    ...productShots("led-lamp-focus", "Luma Spot Red Light Therapy Lamp", "luma-spot"),
  },
  {
    id: "led-bracket-panel-mid",
    name: "Luma Panel Height-Adjustable Red Light Therapy Panel",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/led-bracket-panel-mid",
    description: "Height-adjustable red light panel with 75 dual-chip LEDs, separate red / infrared control and 10 Hz / 40 Hz pulse modes.",
    tiers: ["Essential", "Pro"],
    specs: ["75 LEDs", "75 W", "10 / 40 Hz Pulse"],
    ...productShots("led-bracket-panel-mid", "Luma Panel Height-Adjustable Red Light Therapy Panel", "luma-panel"),
  },
  {
    id: "led-handheld-gy-eust01",
    name: "Luma Beam Quad 4-in-1 Handheld Laser, TENS & Ultrasound Device",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA BEAM",
    url: "/products/led-handheld-gy-eust01",
    description: "Handheld 4-in-1 device (Model GY-EUST-001): TENS, 650 nm red laser, 808 nm infrared laser and 1 MHz ultrasound, with a rechargeable battery.",
    tiers: ["Essential", "Pro"],
    specs: ["4-in-1", "5 W", "1,850 mAh"],
    ...productShots("led-handheld-gy-eust01", "Luma Beam Quad 4-in-1 Handheld Laser, TENS & Ultrasound Device", "luma-beam-quad"),
  },
  {
    id: "led-handheld-gy-hl-001",
    name: "Luma Beam Wand Handheld Red & Infrared Laser Device",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA BEAM",
    url: "/products/led-handheld-gy-hl-001",
    description: "Handheld laser wand (Model GY-HL-001) with 9 red 650 nm and 4 infrared 808 nm laser diodes, continuous and pulsed modes.",
    tiers: ["Essential", "Pro"],
    specs: ["9 × 650 nm + 4 × 808 nm", "Continuous / Pulsed", "1,500 mAh"],
    ...productShots("led-handheld-gy-hl-001", "Luma Beam Wand Handheld Red & Infrared Laser Device", "luma-beam-wand"),
  },
  {
    id: "led-cap-gy-hgci",
    name: "Luma Beam Crown Red Light Laser Therapy Cap",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA BEAM",
    url: "/products/led-cap-gy-hgci",
    description: "Wearable laser cap (Model GY-HGC1) with 200 laser diodes at 650 nm, 1 W whole-unit power, power-bank compatible.",
    tiers: ["Essential", "Pro"],
    specs: ["200 Laser Diodes", "650 nm", "1 W"],
    ...productShots("led-cap-gy-hgci", "Luma Beam Crown Red Light Laser Therapy Cap", "luma-beam-crown"),
  },
  {
    id: "led-mask-gy-009",
    name: "Luma Mask Duo 7-Color LED Light Therapy Face & Neck Mask",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/led-mask-gy-009",
    description: "Flexible silicone LED face mask with matching neck piece (Model GY-009): 105 face + 114 neck LEDs in 7 colour modes.",
    tiers: ["Essential", "Pro"],
    specs: ["219 LEDs", "7 Colours", "Silicone"],
    ...productShots("led-mask-gy-009", "Luma Mask Duo 7-Color LED Light Therapy Face & Neck Mask", "luma-mask-duo"),
  },
  {
    id: "led-mask-gy-bmh",
    name: "Luma Shell 7-Mode LED Light Therapy Face Mask (Hard Shell)",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/led-mask-gy-bmh",
    description: "Hard-shell LED face mask (Model GY-BMH) with 50 high-output LEDs and 7 adjustable modes.",
    tiers: ["Essential", "Pro"],
    specs: ["50 LEDs", "7 Modes", "ABS Shell"],
    ...productShots("led-mask-gy-bmh", "Luma Shell 7-Mode LED Light Therapy Face Mask (Hard Shell)", "luma-shell"),
  },
  {
    id: "led-mask-gy-106a",
    name: "Luma Shell 2 Multi-Wavelength LED Face Mask (Hard Shell, 7 Modes)",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/led-mask-gy-106a",
    description: "Hard-shell multi-wavelength LED face mask (Model GY-106A) with 78 LEDs, 7 modes, 390–630 nm plus white light, rechargeable.",
    tiers: ["Essential", "Pro"],
    specs: ["78 LEDs", "7 Modes", "800 mAh"],
    ...productShots("led-mask-gy-106a", "Luma Shell 2 Multi-Wavelength LED Face Mask (Hard Shell, 7 Modes)", "luma-shell-2"),
  },
  {
    id: "glide-flex-foldable-electric-wheelchair",
    name: "Glide Flex Foldable Electric Wheelchair (X-Fold, Adjustable Seat Height)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/glide-flex-foldable-electric-wheelchair",
    description: "Foldable electric wheelchair with X-Fold design, 570–720 mm adjustable seat height, 200 W × 2 motors, 20 Ah lithium battery and a 159 kg capacity.",
    tiers: ["Essential", "Pro"],
    specs: ["X-Fold", "570–720 mm seat", "159 kg capacity"],
    ...productShots("glide-flex-foldable-electric-wheelchair", "Glide Flex Foldable Electric Wheelchair (X-Fold, Adjustable Seat Height)", "glide-flex"),
  },
  {
    id: "glide-trek-1-electric-wheelchair",
    name: "Glide Trek 1 Electric Wheelchair",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/glide-trek-1-electric-wheelchair",
    description: "Compact folding electric wheelchair (Model DW-EW2601A) with a steel frame, 22 kg net weight, 250 W × 2 motors and 6 Ah / 10 Ah lithium battery options.",
    tiers: ["Essential", "Pro"],
    specs: ["22 kg", "250 W × 2", "6 / 10 Ah Lithium"],
    ...productShots("glide-trek-1-electric-wheelchair", "Glide Trek 1 Electric Wheelchair", "glide-trek-1"),
  },
  {
    id: "glide-trek-2-electric-wheelchair",
    name: "Glide Trek 2 Electric Wheelchair",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/glide-trek-2-electric-wheelchair",
    description: "Folding electric wheelchair (Model DW-EW2603A) with an aluminium-alloy frame, 12-inch rear wheels, 22.4 kg net weight and up to 15 km range.",
    tiers: ["Essential", "Pro"],
    specs: ["22.4 kg", "Aluminium Frame", "9 / 15 km Range"],
    ...productShots("glide-trek-2-electric-wheelchair", "Glide Trek 2 Electric Wheelchair", "glide-trek-2"),
  },
  {
    id: "glide-core-wheelchair",
    name: "Glide Core Wheelchair",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/glide-core-wheelchair",
    description: "Ergonomic folding electric wheelchair (Model DW-605J) with an aluminium frame, 250 W × 2 motors, 20 km range and a 45 cm seat (51 cm optional).",
    tiers: ["Essential", "Pro"],
    specs: ["20 km Range", "6 km/h", "45 cm Seat"],
    ...productShots("glide-core-wheelchair", "Glide Core Wheelchair", "glide-core"),
  },
  {
    id: "glide-junior-pediatric-electric-wheelchair",
    name: "Glide Junior Pediatric Electric Wheelchair",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/glide-junior-pediatric-electric-wheelchair",
    description: "Compact electric wheelchair for junior users (Model DW-703LJ) with an aluminium frame, brushless motors and a fold of 69 × 45 × 77 cm.",
    tiers: ["Essential", "Pro"],
    specs: ["22.6 kg", "Brushless Motors", "≥ 20 km Range"],
    ...productShots("glide-junior-pediatric-electric-wheelchair", "Glide Junior Pediatric Electric Wheelchair", "glide-junior"),
  },
  {
    id: "rise-1-standing-wheelchair",
    name: "Rise 1 Standing Wheelchair",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Standing Wheelchairs",
    brand: "RISE",
    url: "/products/rise-1-standing-wheelchair",
    description: "Heavy-duty electric standing wheelchair (Model DW-EW103) with a 48 V 600 W mid-mounted motor, dual-handle control and a 25–100 km range.",
    tiers: ["Pro", "Signature"],
    specs: ["Electric Standing", "48 V 600 W", "25–100 km Range"],
    ...productShots("rise-1-standing-wheelchair", "Rise 1 Standing Wheelchair", "rise-1"),
  },
  {
    id: "rise-2-standing-wheelchair",
    name: "Rise 2 Standing Wheelchair",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Standing Wheelchairs",
    brand: "RISE",
    url: "/products/rise-2-standing-wheelchair",
    description: "Sit-and-stand electric wheelchair (Model DW-EW201) with a widened anti-rollover chassis, 360° joystick and 10–20 km range.",
    tiers: ["Pro", "Signature"],
    specs: ["Sit & Stand", "24 V 250 W × 2", "10–20 km Range"],
    ...productShots("rise-2-standing-wheelchair", "Rise 2 Standing Wheelchair", "rise-2"),
  },
  {
    id: "rise-3-standing-wheelchair",
    name: "Rise 3 Standing Wheelchair",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Standing Wheelchairs",
    brand: "RISE",
    url: "/products/rise-3-standing-wheelchair",
    description: "5-in-1 electric standing wheelchair (Model DW-EW307-5): vertical lift to 1 m, standing, lie-flat recline and seat tilt, with a self-locking safety system.",
    tiers: ["Pro", "Signature"],
    specs: ["5-in-1", "Lifts to 1 m", "25 km Range"],
    ...productShots("rise-3-standing-wheelchair", "Rise 3 Standing Wheelchair", "rise-3"),
  },


];

export const productById = (id: ProductId) =>
  products.find((p) => p.id === id) || products[0];

/**
 * Products taken off the site for now. They stay in this file and in Sanity so they can
 * come back by deleting the id here: getProducts() drops them, and links to them
 * (blog copy, combos) render as plain text.
 */
export const hiddenProductIds: ReadonlySet<ProductId> = new Set([
  "infrared-sauna-group-combination-mstar", // Halo Hybrid 3
  "hbot-single-mini-komjet", // Oxa Mini
  "pulsewave-pro-8-air-compression-recovery-system-8-chamber", // PulseWave Pro 8
]);

/** True for a /products/<id> link whose product is hidden. */
export const isHiddenProductHref = (href: string) =>
  hiddenProductIds.has(href.match(/^\/products\/([^/?#]+)/)?.[1] ?? "");

/* ------------------------------------------------------------------ */
/* 5. Spotlight                                                        */
/* ------------------------------------------------------------------ */

export const spotlightSection = { eyebrow: "Spotlight" };

export const spotlight: SpotlightItem[] = [
  {
    productId: "hbot-double-cube-chamber",
    name: "Oxa Cube Duo Hyperbaric Oxygen Chamber",
    line: "A two-user, 2.0 ATA steel-cabin chamber with an integrated oxygen generator.",
    benefits: [
      "Two-user steel cabin rated 2.0 ATA, 2000 × 1800 × 1900 mm.",
      "Dual-screen touch control, intercom and a comfort interior.",
      "Installed and operated in line with local regulations by a trained operator.",
    ],
    media: {
      id: "spotlight-hbot",
      kind: "image",
      src: "/GreenPulse/oxa-cube-duo/oxa-cube-duo-3-real-use.webp",
      label: "Oxa Cube Duo Hyperbaric Oxygen Chamber",
      aspect: "4:5",
      alt: "Oxa Cube Duo hyperbaric oxygen chamber",
    },
  },
  {
    productId: "infrared-sauna-double-full-spectrum-mstar",
    name: "Halo 2 Infrared Sauna",
    line: "Full-spectrum infrared warmth for two.",
    benefits: [
      "Full-spectrum and carbon heaters with tourmaline stones.",
      "hemlock cabin, 120 × 105 × 190 cm, for two people.",
      "Oxygen ionizer, Bluetooth sound and 7-colour star lights.",
    ],
    media: {
      id: "spotlight-infrared-sauna",
      kind: "image",
      src: "/GreenPulse/halo-2/halo-2-3-real-use.webp",
      label: "Halo 2 Infrared Sauna",
      aspect: "4:5",
      alt: "Halo 2 two-person full-spectrum infrared sauna",
    },
  },
  {
    productId: "compression-boots-dj-sets",
    name: "PulseWave Go Wireless Compression Boots",
    line: "Cordless air-compression boots with Bluetooth-synchronised controllers.",
    benefits: [
      "Five overlapping chambers with 11 levels from 50 to 150 mmHg.",
      "On-boot LED controller: no tubes or cables.",
      "About 2.5 hours of use per charge.",
    ],
    media: {
      id: "spotlight-normatec",
      kind: "image",
      src: "/GreenPulse/pulsewave-go/pulsewave-go-3-real-use.webp",
      label: "PulseWave Go Wireless Compression Boots",
      aspect: "4:5",
      alt: "PulseWave Go wireless air compression boots",
    },
  },
];

/* ------------------------------------------------------------------ */
/* 6. Who we equip                                                     */
/* ------------------------------------------------------------------ */

export const audienceSection = {
  eyebrow: "Who we equip",
  title: "Who we equip.",
  line: "From single-room studios to hospitals and homecare.",
};

const audienceImage = (id: string, name: string, src?: string): MediaSlot => ({
  id: `audience-${id}`,
  kind: "image",
  src,
  label: `${name} — interior 4:5`,
  aspect: "4:5",
  alt: `${name} fitted with wellness equipment`,
});

export const audiences: Audience[] = [
  {
    id: "longevity",
    name: "Wellness & Longevity Centres",
    businessType: "Wellness/Longevity Centre",
    cta: { label: "Enquire", kind: "form" },
    image: audienceImage(
      "longevity",
      "Longevity centre",
      "/Target%20client/audience-longevity.webp",
    ),
  },
  {
    id: "hotel-spa",
    name: "Hotel Spas & Residential Wellness",
    businessType: "Hotel Spa",
    cta: { label: "Enquire", kind: "form" },
    image: audienceImage(
      "hotel-spa",
      "Hotel spa",
      "/Target%20client/audience-hotel.jpg",
    ),
  },
  {
    id: "gyms",
    name: "Premium Gyms & Sports Centres",
    businessType: "Gym/Sports Centre",
    cta: { label: "Enquire", kind: "form" },
    image: audienceImage(
      "gyms",
      "Premium gym recovery zone",
      "/Target%20client/audience-gyms.jpg",
    ),
  },
  {
    id: "physio",
    name: "Physio & Chiropractic Clinics",
    businessType: "Physio/Chiro Clinic",
    cta: { label: "Enquire", kind: "form" },
    image: audienceImage(
      "physio",
      "Physio clinic",
      "/Target%20client/audience-physio.jpg",
    ),
  },
  {
    id: "senior-living",
    name: "Senior Living",
    businessType: "Senior Living",
    cta: { label: "Enquire", kind: "form" },
    image: audienceImage(
      "senior-living",
      "Senior living residence",
      "/Target%20client/audience-seniorliving.jpg",
    ),
  },
  {
    id: "hospitals",
    name: "Hospitals & Homecare",
    businessType: "Hospital/Clinic",
    cta: { label: "Rental enquiry", kind: "rental" },
    image: audienceImage(
      "hospitals",
      "Hospital / homecare room",
      "/Target%20client/audience-hospital.jpg",
    ),
  },
];

/* ------------------------------------------------------------------ */
/* 7. How we work                                                      */
/* ------------------------------------------------------------------ */

export const processSection = {
  eyebrow: "How we work",
  title: "From first call to first session.",
  line: "One partner from the first conversation to your opening day.",
};

export const steps: Step[] = [
  { number: "01", title: "Consult", line: "We map your space, clients and goals first." },
  { number: "02", title: "Design", line: "A layout and product shortlist matched to your space and budget." },
  { number: "03", title: "Equip", line: "Your products, a clear quote pack and a delivery plan." },
  { number: "04", title: "Install & Train", line: "On-site installation and hands-on team training." },
  { number: "05", title: "Launch", line: "Session menu, opening content and one number to call." },
];

/* ------------------------------------------------------------------ */
/* 8. Recovery suite packages                                          */
/* ------------------------------------------------------------------ */

export const packagesSection = {
  eyebrow: "Recovery suites",
  title: "Recovery suites, bundled.",
  line: "Starting points for a complete recovery floor — every suite is tailored.",
  cta: "Get a quote",
  allLink: "Explore all 30 combos",
};
// Combos themselves live in data/combos.ts


/* ------------------------------------------------------------------ */
/* 9. Experience it                                                    */
/* ------------------------------------------------------------------ */

export const experience = {
  eyebrow: "Experience it",
  title: "Our experience store is coming soon.",
  line: "A dedicated space to try the equipment first-hand before you commit.",
  event: "Experience Store — opening soon",
  cta: { label: "Book a Demo", href: "/contact" },
  video: {
    id: "experience-loop",
    kind: "video",
    label: "Experience — showroom / expo walk-through 21:9",
    aspect: "21:9",
    alt: "Visitors trying wellness equipment at a showroom",
    duration: "15–25s loop",
  } satisfies MediaSlot,
};

/* ------------------------------------------------------------------ */
/* 11. Enquiry form                                                    */
/* ------------------------------------------------------------------ */

export const enquiry = {
  eyebrow: "Enquire",
  title: "Tell us what you're building.",
  line: "Share a few details about your space and our team will get in touch to plan the right setup.",
  submit: "Submit enquiry",
  success: {
    title: "Thank you for your submission.",
    line: "Our team will contact you soon.",
  },
  businessTypes: [
    "Wellness/Longevity Centre",
    "Hotel Spa",
    "Gym/Sports Centre",
    "Physio/Chiro Clinic",
    "Senior Living",
    "Hospital/Clinic",
    "Homecare",
    "Individual",
  ] satisfies BusinessType[],
  /** Label used for the "Package" chip */
  packageLabel: "Package",
  nextSteps: [
    { title: "We review your space", line: "Your space, clients and goals, first." },
    { title: "You get a shortlist", line: "Equipment matched to your use case and budget." },
    { title: "We handle the rest", line: "Import, installation, training and service." },
  ],
};

/* ------------------------------------------------------------------ */
/* 12. Footer                                                          */
/* ------------------------------------------------------------------ */

export const footer = {
  disclaimer:
    "Wellness equipment for general wellbeing. Not intended to diagnose, treat or cure any condition.",
};
