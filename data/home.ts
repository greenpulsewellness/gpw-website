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
  email: "hello@greenpulsewellness.com", // TODO: placeholder — confirm
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
  label: `${name} — product 4:5`,
  aspect: "4:5",
  alt: `${name} photographed on a neutral backdrop`,
  src: src || undefined,
});

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
    image: productImage(
      "infrared-sauna-single-full-spectrum-mstar",
      "Halo 1 Infrared Sauna (Single Person, Full Spectrum)",
      "/GPW%20Product%20mockup/Heat/Halo%201%20Infrared%20Sauna%20(Single%20Person,%20Full%20Spectrum)/halo%201.png",
    ),
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
    image: productImage(
      "infrared-sauna-double-full-spectrum-mstar",
      "Halo 2 Infrared Sauna (2 Person, Full Spectrum)",
      "/GPW%20Product%20mockup/Heat/Halo%202%20Infrared%20Sauna%20(2%20Person,%20Full%20Spectrum)/halo%202.png",
    ),
    gallery: [
      productImage(
        "infrared-sauna-double-full-spectrum-mstar-g1",
        "Halo 2 Infrared Sauna Alternate View",
        "/GPW%20Product%20mockup/Heat/Halo%202%20Infrared%20Sauna%20(2%20Person,%20Full%20Spectrum)/halo%202%20draft%20.png",
      ),
      productImage(
        "infrared-sauna-double-full-spectrum-mstar-g2",
        "Halo 2 Infrared Sauna Interior Detail",
        "/GPW%20Product%20mockup/Heat/Halo%202%20Infrared%20Sauna%20(2%20Person,%20Full%20Spectrum)/halo%20-2%20draft.png",
      ),
      productImage(
        "infrared-sauna-double-full-spectrum-mstar-g3",
        "Halo 2 Wellness Cabin Architectural Render",
        "/product/Halo%202%20Infrared%20Wellness%20Cabin.png",
      ),
    ],
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
    image: productImage(
      "infrared-sauna-group-full-spectrum-mstar",
      "Halo 3 Infrared Sauna (3 Person, Full Spectrum)",
      "/GPW%20Product%20mockup/Heat/Halo%203%20Infrared%20Sauna%20(3%20Person,%20Full%20Spectrum)/halo%203%20draft.png",
    ),
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
    image: productImage(
      "infrared-sauna-double-combination-mstar",
      "Halo Hybrid 2 Infrared Sauna (2 Person, Carbon + Ceramic Heater)",
      "/GPW%20Product%20mockup/Heat/Halo%20Hybrid%202%20Infrared%20Sauna%20(2%20Person,%20Carbon%20+%20Ceramic%20Heater)/Halo%20Hybrid%202%20-draft.png",
    ),
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
    image: productImage(
      "infrared-sauna-group-combination-mstar",
      "Halo Hybrid 3 Infrared Sauna (3 Person, Carbon + Ceramic Heater)",
      "/GPW%20Product%20mockup/Heat/Halo%20Hybrid%203%20Infrared%20Sauna%20(3%20Person,%20Carbon%20+%20Ceramic%20Heater)/BC993F5D-DC6A-4C33-A539-94D9700898E7.png",
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
    image: productImage(
      "cold-plunge-single-round-yg",
      "Arctic Ring Cold Plunge (Round, Single Person)",
      "/GPW%20Product%20mockup/Cold/Arctic%20Ring%20Cold%20Plunge%20(Round,%20Single%20Person)/4FBB2200-4583-4EB1-B551-BF5A34CF6F51.png",
    ),
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
    image: productImage(
      "cold-plunge-tub-new-ice-bath",
      "Arctic Tub Cold Plunge Ice Bath Tub",
      "/GPW%20Product%20mockup/Cold/Arctic%20Tub%20Cold%20Plunge%20Ice%20Bath%20Tub/2481F23A-C906-4D2A-831B-437FDF437D3F.png",
    ),
    gallery: [
      productImage(
        "cold-plunge-tub-new-ice-bath-g1",
        "Arctic Tub Cold Plunge Angle View",
        "/GPW%20Product%20mockup/Cold/Arctic%20Tub%20Cold%20Plunge%20Ice%20Bath%20Tub/ABB24393-C08D-4815-B279-217E1476F883.png",
      ),
    ],
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
    image: productImage(
      "cold-plunge-foldable-aircore",
      "Arctic Fold Portable Foldable Cold Plunge",
    ),
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
    image: productImage(
      "cryo-mini-cryome",
      "Arctic Zero Mini Cryotherapy Chamber",
      "/GPW%20Product%20mockup/Cold/Arctic%20Zero%20Mini%20Cryotherapy%20Chamber/cryo%20mi.png",
    ),
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
    image: productImage(
      "cryo-chill-cryome-icechill",
      "Arctic Chill Nitrogen Cryotherapy Chamber (1–2 Person, Breathable Air)",
    ),
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
    image: productImage(
      "cryo-one-cryome",
      "Arctic One Individual Cryotherapy Cryosauna",
    ),
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
    image: productImage(
      "cryo-ultra-cryome-pro",
      "Arctic Ultra Premium Cryotherapy Cryosauna (High Throughput)",
    ),
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
    image: productImage(
      "led-therapy-full-stand",
      "Luma Stand Full Body LED Light Therapy Stand",
      "/GPW%20Product%20mockup/Light/Luma%20Stand%20Full%20Body%20LED%20Light%20Therapy%20Stand/Luma%20Stand%20Full%20Body%20LED%20Light%20Therapy%20Stand.png",
    ),
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
    image: productImage(
      "led-therapy-full-stand-2",
      "Luma Stand Pro Full Body LED Light Therapy Stand (Independent Wavelength Control)",
    ),
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
    image: productImage(
      "led-therapy-full-body-clam-1-m6",
      "Luma Cocoon Full Body LED Light Therapy Bed",
      "/GPW%20Product%20mockup/Light/Luma%20Cocoon%201%20Full%20Body%20LED%20Light%20Therapy%20Bed/D274D258-A160-4310-9D8D-0BF2389C4B21.png",
    ),
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
    image: productImage(
      "led-therapy-full-body-clam-2-m6l",
      "Luma Cocoon Pro Full Body LED Light Therapy Bed with PEMF",
    ),
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
    image: productImage(
      "led-therapy-full-body-stand-chamber",
      "Luma Dome Full Body LED Light Therapy Chamber",
      "/GPW%20Product%20mockup/Light/Luma%20Dome%20Full%20Body%20LED%20Light%20Therapy%20Chamber/Luma%20Dome%20Full%20Body%20LED%20Light%20Therapy%20Chamber.png",
    ),
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
    image: productImage(
      "hbot-single-cube-chamber",
      "Oxa Cube Solo Hyperbaric Oxygen Chamber (HBOT, Single)",
      "/GPW%20Product%20mockup/Air/Oxa%20Cube%20Solo%20Hyperbaric%20Oxygen%20Chamber%20(HBOT,%20Single)/187F5EDC-4E7B-4804-ADCD-5F1810F0B6FE.png",
    ),
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
    image: productImage(
      "hbot-double-cube-chamber",
      "Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)",
      "/GPW%20Product%20mockup/Air/Oxa%20Cube%20Duo%20Hyperbaric%20Oxygen%20Chamber%20(HBOT,%20Double)/34D447C1-0498-4EA8-AC53-7FE942251360.png",
    ),
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
    image: productImage(
      "hbot-single-mini-komjet",
      "Oxa Mini Portable Hyperbaric Oxygen Chamber (HBOT)",
      "/GPW%20Product%20mockup/Air/Oxa%20Mini%20Portable%20Hyperbaric%20Oxygen%20Chamber%20(HBOT)/Oxa%20Mini%20Portable%20Hyperbaric%20Oxygen%20Chamber%20(HBOT).png",
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
    image: productImage(
      "oxy-1-hyperbaric-oxygen-chamber-single",
      "Oxy 1 Hyperbaric Oxygen Chamber (HBOT, Single)",
    ),
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
    image: productImage(
      "oxy-2-hyperbaric-oxygen-chamber-double",
      "Oxy 2 Hyperbaric Oxygen Chamber (HBOT, Double)",
    ),
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
    image: productImage(
      "massage-chair-mid-range-lion",
      "Serene Mid Full Body Massage Chair",
      "/GPW%20Product%20mockup/Relax/Serene%20Mid%20Full%20Body%20Massage%20Chair/9263D15B-1107-4130-AFB6-0FC7CCA1BCC4.png",
    ),
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
    image: productImage(
      "massage-chair-elite-ms131",
      "Serene Elite Premium Full Body Massage Chair",
      "/GPW%20Product%20mockup/Relax/Serene%20Elite%20Premium%20Full%20Body%20Massage%20Chair/CEDCE807-33E3-4CFD-B0E4-B1D45A83F18A.png",
    ),
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
    image: productImage(
      "lounge-sl-massage-chair",
      "Serene Lounge SL Track Massage Chair",
      "/GPW%20Product%20mockup/Relax/Serene%20Lounge%20SL%20Track%20Massage%20Chair/5C81D56E-8B3E-4F09-8775-425A4F4A7AF1.png",
    ),
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
    image: productImage(
      "lounge-360-massage-chair",
      "Serene 360 Lounge Massage Chair",
      "/GPW%20Product%20mockup/Relax/Serene%20360%20Lounge%20Massage%20Chair/BDC6B116-35C9-4988-AE57-9F29EAF03073.png",
    ),
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
    image: productImage(
      "comfort-sl-massage-chair",
      "Serene Comfort SL Track Massage Chair",
    ),
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
    image: productImage(
      "compression-boots-dj-sets",
      "PulseWave Go Wireless Air Compression Boots",
      "/GPW%20Product%20mockup/Compression/PulseWave%20Go%20Wireless%20Air%20Compression%20Boots/PulseWave%20Go.png",
    ),
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
    image: productImage(
      "compression-system-konbest-9690k",
      "PulseWave Pro 6 Air Compression Recovery System (6-Chamber)",
    ),
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
    image: productImage(
      "pulsewave-4-air-compression-boots-wireless-app-control",
      "PulseWave 4 Air Compression Boots (4-Chamber, Wireless, App Control)",
    ),
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
    image: productImage(
      "pulsewave-4-plus-air-compression-boots",
      "PulseWave 4 Plus Air Compression Boots (4-Chamber, App Control)",
    ),
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
    image: productImage(
      "pulsewave-4-direct-air-compression-boots",
      "PulseWave 4 Direct Air Compression Boots (4-Chamber, Hand Controller)",
    ),
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
    image: productImage(
      "pulsewave-5-portable-air-compression-boots",
      "PulseWave 5 Portable Air Compression Boots",
    ),
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
    image: productImage(
      "pulsewave-glow-wireless-compression-boots-with-infrared-light",
      "PulseWave Glow Wireless Compression Boots with Infrared Light",
    ),
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
    image: productImage(
      "pulsewave-ease-air-compression-leg-massager",
      "PulseWave Ease Air Compression Leg Massager",
    ),
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
    image: productImage(
      "pulsewave-charge-rechargeable-air-compression-boots",
      "PulseWave Charge Rechargeable Air Compression Boots",
    ),
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
    image: productImage(
      "pulsewave-recover-air-compression-recovery-system",
      "PulseWave Recover Air Compression Recovery System",
    ),
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
    image: productImage(
      "pulsewave-max-8-chamber-air-compression-recovery-system",
      "PulseWave Max 8-Chamber Rechargeable Air Compression Recovery Boots",
    ),
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
    image: productImage(
      "percussion-gun-jm04sa",
      "Thrum Lite Massage Gun",
    ),
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
    image: productImage(
      "percussion-massager-jm003",
      "Thrum Pro Professional Massage Gun (30 Speed)",
    ),
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
    image: productImage(
      "percussion-massager-jm019",
      "Thrum Deep Deep Tissue Massage Gun (12 mm)",
    ),
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
    image: productImage(
      "sauna-blanket-rl301",
      "Ember Wrap Far Infrared Sauna Blanket",
    ),
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
    image: productImage(
      "red-light-blanket-rl302",
      "Aurora Wrap Red Light Therapy Blanket",
    ),
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
    image: productImage(
      "cold-therapy-unit-806pro",
      "Frostfire Pad Cold, Heat & Red Light Therapy Pad",
    ),
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
    image: productImage(
      "luma-go-portable-red-light-stand",
      "Luma Go 500 Portable Red Light Therapy Stand",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Go%20Portable%20Red%20Light%20Therapy%20Stand/BC8F5DE8-7191-4940-ACA4-9549B43BB8C4.png",
    ),
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
    image: productImage(
      "luma-go-1000-portable-red-light-stand",
      "Luma Go 1000 Portable Red Light Therapy Stand",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Go%20Portable%20Red%20Light%20Therapy%20Stand/BC8F5DE8-7191-4940-ACA4-9549B43BB8C4.png",
    ),
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
    image: productImage(
      "luma-go-1500-portable-red-light-stand",
      "Luma Go 1500 Portable Red Light Therapy Stand",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Go%20Portable%20Red%20Light%20Therapy%20Stand/BC8F5DE8-7191-4940-ACA4-9549B43BB8C4.png",
    ),
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
    image: productImage(
      "led-stand-gy-t320",
      "Luma Tower Tall Red Light Therapy Stand",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Tower%20Tall%20Red%20Light%20Therapy%20Stand/Luma%20Tower.png",
    ),
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
    image: productImage(
      "led-lamp-focus",
      "Luma Spot Red Light Therapy Lamp",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Spot%20Red%20Light%20Therapy%20Lamp/Luma%20Spot%20Red%20Light%20Therapy%20Lamp.png",
    ),
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
    image: productImage(
      "led-bracket-panel-mid",
      "Luma Panel Height-Adjustable Red Light Therapy Panel",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Panel%20Height-Adjustable%20Red%20Light%20Therapy%20Panel/Luma%20Panel%20Height-Adjustable%20Red%20Light%20Therapy%20Panel.png",
    ),
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
    image: productImage(
      "led-handheld-gy-eust01",
      "Luma Beam Quad 4-in-1 Handheld Laser, TENS & Ultrasound Device",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Beam%20Quad%204-in-1%20Handheld%20Laser,%20TENS%20&%20Ultrasound%20Device/Luma%20Beam%20Quad%204-in-1%20Handheld%20Laser,%20TENS%20&%20Ultrasound%20Device.png",
    ),
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
    image: productImage(
      "led-handheld-gy-hl-001",
      "Luma Beam Wand Handheld Red & Infrared Laser Device",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Beam%20Wand%20Handheld%20Red%20&%20Infrared%20Laser%20Device/Luma%20Beam%20Wand%20Handheld%20Red%20&%20Infrared%20Laser%20Device.png",
    ),
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
    image: productImage(
      "led-cap-gy-hgci",
      "Luma Beam Crown Red Light Laser Therapy Cap",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Beam%20Crown%20Red%20Light%20Laser%20Therapy%20Cap/Luma%20Beam%20Crown%20Red%20Light%20Laser%20Therapy%20Cap.png",
    ),
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
    image: productImage(
      "led-mask-gy-009",
      "Luma Mask Duo 7-Color LED Light Therapy Face & Neck Mask",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Mask%20Duo%207-Color%20LED%20Light%20Therapy%20Face%20&%20Neck%20Mask/Luma%20Mask%20Duo%207-Color%20LED%20Light%20Therapy%20Face%20&%20Neck%20Mask.png",
    ),
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
    image: productImage(
      "led-mask-gy-bmh",
      "Luma Shell 7-Mode LED Light Therapy Face Mask (Hard Shell)",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Shell%207-Mode%20LED%20Light%20Therapy%20Face%20Mask%20(Hard%20Shell)/Luma%20Shell%207-Mode%20LED%20Light%20Therapy%20Face%20Mask%20(Hard%20Shell).png",
    ),
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
    image: productImage(
      "led-mask-gy-106a",
      "Luma Shell 2 Multi-Wavelength LED Face Mask (Hard Shell, 7 Modes)",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Shell%202%20Multi-Wavelength%20LED%20Face%20Mask%20(Hard%20Shell,%207%20Modes)/Luma%20Shell%202%20Multi-Wavelength%20LED%20Face%20Mask%20(Hard%20Shell,%207%20Modes).png",
    ),
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
    image: productImage(
      "glide-flex-foldable-electric-wheelchair",
      "Glide Flex Foldable Electric Wheelchair (X-Fold, Adjustable Seat Height)",
      "/GPW%20Product%20mockup/Mobility/Glide%20Flex%20-%20Dragon%20Glide%20Flex/Glide%20Flex%20Foldable%20Electric%20Wheelchair%20(X-Fold,%20Adjustable%20Seat%20Height).png",
    ),
    gallery: [
      productImage(
        "glide-flex-foldable-electric-wheelchair-g1",
        "Glide Flex Foldable Electric Wheelchair (X-Fold, Adjustable Seat Height) Alternate View",
        "/GPW%20Product%20mockup/Mobility/Glide%20Flex%20-%20Dragon%20Glide%20Flex/C776CEA6-7A51-4AAD-9F76-582D0536EBD3.png",
      ),
    ],
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
    image: productImage(
      "glide-trek-1-electric-wheelchair",
      "Glide Trek 1 Electric Wheelchair",
      "/GPW%20Product%20mockup/Mobility/Glide%20Trek%201%20Electric%20Wheelchair%20(Aluminum%20Frame,%20Lithium%20Battery)/Glide%20Trek%201%20Electric%20Wheelchair.png",
    ),
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
    image: productImage(
      "glide-trek-2-electric-wheelchair",
      "Glide Trek 2 Electric Wheelchair",
    ),
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
    image: productImage(
      "glide-core-wheelchair",
      "Glide Core Wheelchair",
    ),
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
    image: productImage(
      "glide-junior-pediatric-electric-wheelchair",
      "Glide Junior Pediatric Electric Wheelchair",
      "/GPW%20Product%20mockup/Mobility/Glide%20Junior%20Pediatric%20Electric%20Wheelchair/Glide%20Junior%20Pediatric%20Electric%20Wheelchair.png",
    ),
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
    image: productImage(
      "rise-1-standing-wheelchair",
      "Rise 1 Standing Wheelchair",
    ),
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
    image: productImage(
      "rise-2-standing-wheelchair",
      "Rise 2 Standing Wheelchair",
    ),
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
    image: productImage(
      "rise-3-standing-wheelchair",
      "Rise 3 Standing Wheelchair",
    ),
  },


];

export const productById = (id: ProductId) =>
  products.find((p) => p.id === id) || products[0];

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
      src: "/GPW%20Product%20mockup/Air/Oxa%20Cube%20Duo%20Hyperbaric%20Oxygen%20Chamber%20(HBOT,%20Double)/34D447C1-0498-4EA8-AC53-7FE942251360.png",
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
      src: "/GPW%20Product%20mockup/Heat/Halo%202%20Infrared%20Sauna%20(2%20Person,%20Full%20Spectrum)/halo%202.png",
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
      src: "/GPW%20Product%20mockup/Compression/PulseWave%20Go%20Wireless%20Air%20Compression%20Boots/PulseWave%20Go.png",
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
