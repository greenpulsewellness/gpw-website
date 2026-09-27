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
};

export type Tier = "Essential" | "Pro" | "Signature";

export type ProductId = string;

export type ProductCategory =
  | "Wellness & Recovery Technology"
  | "Rehabilitation & Physical Therapy"
  | "Mobility & Assistive Technology";

export type Product = {
  id: ProductId;
  name: string;
  category: ProductCategory;
  brand?: string;
  description: string;
  url: string;
  tiers: Tier[];
  /** 2–3 short spec tags, rendered in mono caps */
  specs: string[];
  image: MediaSlot;
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

export type PackageId = "starter" | "studio" | "centre";

export type SuitePackage = {
  id: PackageId;
  name: string;
  line: string;
  /** TODO: confirm bundles with the supply team */
  bundle: ProductId[];
  featured?: boolean;
};

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
  whatsappNumber: "917604909848",
  whatsappDisplay: "+91 76049 09848",
  email: "hello@greenpulsewellness.com", // TODO: placeholder — confirm
  address: "TODO: Studio address, City, State, PIN", // TODO: placeholder
  instagram: "https://instagram.com/", // TODO: placeholder link
  linkedin: "https://linkedin.com/", // TODO: placeholder link
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
  cta: { label: "Book a Demo", href: "#enquiry" },
};

/* ------------------------------------------------------------------ */
/* 2. Hero                                                             */
/* ------------------------------------------------------------------ */

export const hero = {
  headline: "Built for bodies that keep going.",
  sub: "Advanced wellness technology for recovery, rehabilitation & performance.",
  primaryCta: { label: "Explore Equipment", href: "#equipment" },
  secondaryCta: { label: "Book a Demo", href: "#enquiry" },
  media: {
    id: "hero-loop",
    kind: "video",
    label: "Hero background video",
    aspect: "16:9",
    alt: "Wellness equipment and sauna suite in action",
    src: "/herovideo.mp4",
    poster: "/sauna%20hero.jpg",
  } satisfies MediaSlot,
  get video(): MediaSlot {
    return this.media;
  },
};

/* ------------------------------------------------------------------ */
/* 3. Solutions bento                                                  */
/* ------------------------------------------------------------------ */

export const solutionsSection = {
  eyebrow: "Solutions",
  title: "Four ways we equip a space.",
  line: "Pick a focus — we curate, install and look after the machines.",
};

export const solutions: Solution[] = [
  {
    id: "recover",
    name: "Recover & Restore",
    audience: "Wellness & longevity centres, hotel spas, fitness",
    priority: 1,
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
  line: "Curated hardware for recovery, rehabilitation and everyday wellbeing.",
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
    id: "halo-2-infrared-wellness-cabin",
    name: "Halo 2 Infrared Wellness Cabin",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-halo-2-infrared-wellness-cabin",
    description: "A contemporary two-person infrared wellness cabin combining infrared heat, red-light heating technology and ambient lighting in a compact cylindrical design suited to premium wellness and residential environments.",
    tiers: ["Pro", "Signature"],
    specs: ["2-Person", "Infrared & Red Light", "Cylindrical Cabin"],
    image: productImage(
      "halo-2-infrared-wellness-cabin",
      "Halo 2 Infrared Wellness Cabin",
      "https://greenpulsewellness.com/products/halo-2-infrared-wellness-cabin.webp",
    ),
  },
  {
    id: "proadjust-chiropractic-table",
    name: "ProAdjust Chiropractic Table",
    category: "Rehabilitation & Physical Therapy",
    url: "https://greenpulsewellness.com/products/green-pulse-proadjust-chiropractic-table",
    description: "A professional electrically adjustable chiropractic and physiotherapy table with multiple drop sections and configurable positioning for rehabilitation and manual-therapy environments.",
    tiers: ["Pro"],
    specs: ["Electric Height", "Multiple Drop Sections", "Manual Therapy"],
    image: productImage(
      "proadjust-chiropractic-table",
      "ProAdjust Chiropractic Table",
      "https://greenpulsewellness.com/products/proadjust-chiropractic-table.webp",
    ),
  },
  {
    id: "gp-juvo-b4-power-wheelchair",
    name: "GP Juvo B4 Power Wheelchair",
    brand: "GPW",
    category: "Mobility & Assistive Technology",
    url: "https://greenpulsewellness.com/products/GP-juvo-b4-power-wheelchair",
    description: "A configurable rear-wheel-drive power wheelchair designed to support everyday mobility across indoor and outdoor environments.",
    tiers: ["Essential", "Pro"],
    specs: ["Rear-Wheel Drive", "Configurable Seating", "Indoor / Outdoor"],
    image: productImage(
      "gp-juvo-b4-power-wheelchair",
      "GP Juvo B4 Power Wheelchair",
      "https://greenpulsewellness.com/products/ottobock-juvo-b4-power-wheelchair.webp",
    ),
  },
  {
    id: "gp-normatec-3-full-body",
    name: "GreenPulse Normatec 3 Full Body",
    brand: "GPW",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/GP-normatec-3-full-body",
    description: "A dynamic air-compression recovery system for the legs, hips and arms with adjustable pressure zones and app connectivity.",
    tiers: ["Essential", "Pro"],
    specs: ["Legs, Hips & Arms", "Dynamic Compression", "App Connected"],
    image: productImage(
      "gp-normatec-3-full-body",
      "GreenPulse Normatec 3 Full Body",
      "https://greenpulsewellness.com/products/hyperice-normatec-3-full-body.webp",
    ),
  },
  {
    id: "o2-carbon-hyperbaric-chamber",
    name: "O2 Carbon Hyperbaric Chamber",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-o2-carbon-hyperbaric-chamber",
    description: "A premium carbon-composite hyperbaric chamber designed for professional wellness environments with adjustable pressure, integrated oxygen delivery and contemporary interior controls.",
    tiers: ["Pro", "Signature"],
    specs: ["Carbon Composite", "Adjustable Pressure", "Integrated O2"],
    image: productImage(
      "o2-carbon-hyperbaric-chamber",
      "O2 Carbon Hyperbaric Chamber",
      "https://greenpulsewellness.com/products/o2-carbon-hyperbaric-chamber.webp",
    ),
  },
  {
    id: "gbuilt-chillybox",
    name: "GBuilt Chillybox",
    brand: "GreenPulse",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/Gbuilt-chillybox",
    description: "A compact single-user whole-body cryotherapy chamber designed to deliver professional cryotherapy temperatures in a relatively small footprint.",
    tiers: ["Signature"],
    specs: ["Whole-Body Cryo", "Single-User", "Compact Footprint"],
    image: productImage(
      "gbuilt-chillybox",
      "GBuilt Chillybox",
      "https://greenpulsewellness.com/products/cryobuilt-chillybox.webp",
    ),
  },
  {
    id: "halo-2-spectrum-infrared-cabin",
    name: "Halo 2 Spectrum Infrared Cabin",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-halo-2-spectrum-infrared-cabin",
    description: "A premium two-person infrared cabin combining infrared heat, red-light heating and full-spectrum lighting with integrated digital controls and audio.",
    tiers: ["Signature"],
    specs: ["2-Person", "Full Spectrum & Red Light", "Digital & Audio"],
    image: productImage(
      "halo-2-spectrum-infrared-cabin",
      "Halo 2 Spectrum Infrared Cabin",
      "https://greenpulsewellness.com/products/halo-2-spectrum-infrared-cabin.webp",
    ),
  },
  {
    id: "apex-full-body-massage-chair",
    name: "Apex Full-Body Massage Chair",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-apex-full-body-massage-chair",
    description: "A premium full-body massage system combining mechanical massage, air compression, heating, foot rollers and zero-gravity positioning.",
    tiers: ["Pro", "Signature"],
    specs: ["Zero-Gravity", "Air Compression & Heat", "Foot Rollers"],
    image: productImage(
      "apex-full-body-massage-chair",
      "Apex Full-Body Massage Chair",
      "https://greenpulsewellness.com/products/apex-full-body-massage-chair.webp",
    ),
  },
  {
    id: "elevate-massage-recliner",
    name: "Elevate Massage Recliner",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-elevate-massage-recliner",
    description: "A powered massage recliner combining 3D massage, heating and sit-to-stand assistance in a conventional premium recliner format.",
    tiers: ["Essential", "Pro"],
    specs: ["3D Massage", "Sit-to-Stand Assist", "Integrated Heat"],
    image: productImage(
      "elevate-massage-recliner",
      "Elevate Massage Recliner",
      "https://greenpulsewellness.com/products/elevate-massage-recliner.webp",
    ),
  },
  {
    id: "gpulse-normatec-elite-legs",
    name: "Greenpulse Normatec Elite Legs",
    brand: "GPW",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/GPulse-normatec-elite-legs",
    description: "A wireless dynamic-compression recovery system integrating controls directly into the leg sleeves for streamlined recovery sessions.",
    tiers: ["Essential", "Pro"],
    specs: ["Wireless Controls", "Dynamic Leg Compression", "Targeted Recovery"],
    image: productImage(
      "gpulse-normatec-elite-legs",
      "Greenpulse Normatec Elite Legs",
      "https://greenpulsewellness.com/products/hyperice-normatec-elite-legs.webp",
    ),
  },
  {
    id: "vector-sl-massage-chair",
    name: "Vector SL Massage Chair",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-vector-sl-massage-chair",
    description: "A full-body massage chair combining an extended SL-track, zero-gravity positioning, waist heating and lower-body massage technology.",
    tiers: ["Pro"],
    specs: ["Extended SL-Track", "Zero-Gravity", "Waist Heating"],
    image: productImage(
      "vector-sl-massage-chair",
      "Vector SL Massage Chair",
      "https://greenpulsewellness.com/products/vector-sl-massage-chair.webp",
    ),
  },
  {
    id: "lounge-360-massage-chair",
    name: "Lounge 360 Massage Chair",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-lounge-360-massage-chair",
    description: "A compact 360-degree rotating massage lounge chair with integrated 2D massage, battery operation and separate footrest.",
    tiers: ["Essential"],
    specs: ["360° Rotating", "Battery-Operated", "2D Massage"],
    image: productImage(
      "lounge-360-massage-chair",
      "Lounge 360 Massage Chair",
      "https://greenpulsewellness.com/products/lounge-360-massage-chair.webp",
    ),
  },
  {
    id: "upright-rehabilitation-tilt-table",
    name: "Upright Rehabilitation Tilt Table",
    category: "Rehabilitation & Physical Therapy",
    url: "https://greenpulsewellness.com/products/green-pulse-upright-rehabilitation-tilt-table",
    description: "An electrically operated rehabilitation table designed to transition from horizontal positioning toward upright standing-training configurations.",
    tiers: ["Pro"],
    specs: ["Electric Tilt", "Standing Training", "Configurable Support"],
    image: productImage(
      "upright-rehabilitation-tilt-table",
      "Upright Rehabilitation Tilt Table",
      "https://greenpulsewellness.com/products/upright-rehabilitation-tilt-table.webp",
    ),
  },
  {
    id: "halo-2-infrared-cabin",
    name: "Halo 2 Infrared Cabin",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-halo-2-infrared-cabin",
    description: "A compact two-person infrared wellness cabin combining infrared heat, red-light technology and connected digital controls in a contemporary curved enclosure.",
    tiers: ["Pro"],
    specs: ["2-Person Compact", "Red-Light & Infrared", "Curved Enclosure"],
    image: productImage(
      "halo-2-infrared-cabin",
      "Halo 2 Infrared Cabin",
      "https://greenpulsewellness.com/products/halo-2-infrared-cabin-frb-2t3.webp",
    ),
  },
  {
    id: "halo-3-infrared-cabin",
    name: "Halo 3 Infrared Cabin",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-halo-3-infrared-cabin",
    description: "A three-person infrared cabin with red-light integration, touchscreen controls and connected audio for shared wellness environments.",
    tiers: ["Pro", "Signature"],
    specs: ["3-Person Shared", "Touchscreen Controls", "Connected Audio"],
    image: productImage(
      "halo-3-infrared-cabin",
      "Halo 3 Infrared Cabin",
      "https://greenpulsewellness.com/products/halo-3-infrared-cabin.webp",
    ),
  },
  {
    id: "lounge-sl-massage-chair",
    name: "Lounge SL Massage Chair",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-lounge-sl-massage-chair",
    description: "A contemporary lounge-style massage chair combining SL-track massage, electric recline, waist heating and a separate footstool.",
    tiers: ["Essential", "Pro"],
    specs: ["SL-Track Lounge", "Electric Recline", "Waist Heating"],
    image: productImage(
      "lounge-sl-massage-chair",
      "Lounge SL Massage Chair",
      "https://greenpulsewellness.com/products/lounge-sl-massage-chair.webp",
    ),
  },
  {
    id: "halo-4-infrared-cabin",
    name: "Halo 4 Infrared Cabin",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-halo-4-infrared-cabin",
    description: "A four-person infrared wellness cabin combining infrared heat, red-light technology and digital controls in a larger shared-use format.",
    tiers: ["Signature"],
    specs: ["4-Person Capacity", "Shared Commercial", "Digital Controls"],
    image: productImage(
      "halo-4-infrared-cabin",
      "Halo 4 Infrared Cabin",
      "https://greenpulsewellness.com/products/halo-4-infrared-cabin.webp",
    ),
  },
  {
    id: "duo-hybrid-sauna",
    name: "Duo Hybrid Sauna",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-duo-hybrid-sauna",
    description: "A compact hybrid sauna combining traditional electric sauna heating with red-light thermal technology in a hemlock enclosure.",
    tiers: ["Pro", "Signature"],
    specs: ["Traditional & Red Light", "Hemlock Enclosure", "Hybrid Thermal"],
    image: productImage(
      "duo-hybrid-sauna",
      "Duo Hybrid Sauna",
      "https://greenpulsewellness.com/products/duo-hybrid-sauna.webp",
    ),
  },
  {
    id: "comfort-sl-massage-chair",
    name: "Comfort SL Massage Chair",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-comfort-sl-massage-chair",
    description: "A compact massage chair combining SL-curve massage, zero-gravity positioning, heating and leg air-compression massage.",
    tiers: ["Essential", "Pro"],
    specs: ["SL-Curve Massage", "Zero-Gravity", "Leg Air Compression"],
    image: productImage(
      "comfort-sl-massage-chair",
      "Comfort SL Massage Chair",
      "https://greenpulsewellness.com/products/comfort-sl-massage-chair.webp",
    ),
  },
  {
    id: "duo-hybrid-infrared-sauna",
    name: "Duo Hybrid Infrared Sauna",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-duo-hybrid-infrared-sauna",
    description: "A two-person combination sauna integrating infrared heating with a traditional electric sauna heater and digital control.",
    tiers: ["Pro", "Signature"],
    specs: ["2-Person Combo", "Infrared + Electric", "Digital Control"],
    image: productImage(
      "duo-hybrid-infrared-sauna",
      "Duo Hybrid Infrared Sauna",
      "https://greenpulsewellness.com/products/duo-hybrid-infrared-sauna.webp",
    ),
  },
  {
    id: "duo-hybrid-red-light-sauna",
    name: "Duo Hybrid Red-Light Sauna",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-duo-hybrid-red-light-sauna",
    description: "A two-person hybrid sauna combining red-light heating elements with a traditional externally controlled electric sauna heater.",
    tiers: ["Pro", "Signature"],
    specs: ["2-Person Red-Light", "External Electric Heater", "Hybrid Heating"],
    image: productImage(
      "duo-hybrid-red-light-sauna",
      "Duo Hybrid Red-Light Sauna",
      "https://greenpulsewellness.com/products/duo-hybrid-red-light-sauna.webp",
    ),
  },
  {
    id: "connect-zero-gravity-massage-chair",
    name: "Connect Zero-Gravity Massage Chair",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-connect-zero-gravity-massage-chair",
    description: "A compact zero-gravity massage chair designed for residential and shared-use environments with integrated charging and simplified controls.",
    tiers: ["Essential"],
    specs: ["Zero-Gravity", "Integrated Charging", "Simplified Controls"],
    image: productImage(
      "connect-zero-gravity-massage-chair",
      "Connect Zero-Gravity Massage Chair",
      "https://greenpulsewellness.com/products/connect-zero-gravity-massage-chair.webp",
    ),
  },
  {
    id: "halo-5-infrared-wellness-cabin",
    name: "Halo 5 Infrared Wellness Cabin",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/green-pulse-halo-5-infrared-wellness-cabin",
    description: "A spacious 4–5 person infrared wellness cabin combining infrared heating panels, ceramic heating tubes, integrated digital controls and ambient lighting in a premium hemlock interior.",
    tiers: ["Signature"],
    specs: ["4–5 Person", "Ceramic & Carbon Panels", "Hemlock Interior"],
    image: productImage(
      "halo-5-infrared-wellness-cabin",
      "Halo 5 Infrared Wellness Cabin",
      "https://greenpulsewellness.com/products/green-pulse-halo-5-infrared-wellness-cabin.webp",
    ),
  },
  {
    id: "flexadjust-chiropractic-table",
    name: "FlexAdjust Chiropractic Table",
    category: "Rehabilitation & Physical Therapy",
    url: "https://greenpulsewellness.com/products/green-pulse-flexadjust-chiropractic-table",
    description: "An electrically height-adjustable five-drop treatment table designed for chiropractic, physiotherapy, rehabilitation and sports recovery environments.",
    tiers: ["Pro", "Signature"],
    specs: ["Five-Drop Sections", "Electric Height", "Sports Recovery"],
    image: productImage(
      "flexadjust-chiropractic-table",
      "FlexAdjust Chiropractic Table",
      "https://greenpulsewellness.com/products/green-pulse-flexadjust-chiropractic-table.webp",
    ),
  },
  {
    id: "gpw-movelite-d25-power-wheelchair",
    name: "MoveLite D25 Power Wheelchair",
    brand: "GPW",
    category: "Mobility & Assistive Technology",
    url: "https://greenpulsewellness.com/products/gpw-movelite-d25-power-wheelchair",
    description: "A compact folding power wheelchair combining an aluminum-alloy frame, electromagnetic braking and portable dimensions for everyday mobility and transport.",
    tiers: ["Essential", "Pro"],
    specs: ["Folding Aluminum", "Electromagnetic Brake", "Ultra-Portable"],
    image: productImage(
      "gpw-movelite-d25-power-wheelchair",
      "MoveLite D25 Power Wheelchair",
      "https://greenpulsewellness.com/products/jbh-movelite-d25-power-wheelchair.webp",
    ),
  },
  {
    id: "gpw-comfortride-d26-power-wheelchair",
    name: "ComfortRide D26 Power Wheelchair",
    brand: "GPW",
    category: "Mobility & Assistive Technology",
    url: "https://greenpulsewellness.com/products/gpw-comfortride-d26-power-wheelchair",
    description: "A foldable power wheelchair with shock-absorbing construction, adjustable ergonomic seating and extended driving range for everyday assisted mobility.",
    tiers: ["Essential", "Pro"],
    specs: ["Shock Absorbing", "Ergonomic Seating", "Extended Range"],
    image: productImage(
      "gpw-comfortride-d26-power-wheelchair",
      "ComfortRide D26 Power Wheelchair",
      "https://greenpulsewellness.com/products/jbh-comfortride-d26-power-wheelchair.webp",
    ),
  },
  {
    id: "gpw-heavy-duty-d60-power-wheelchair",
    name: "Heavy-Duty D60 Power Wheelchair",
    brand: "GPW",
    category: "Mobility & Assistive Technology",
    url: "https://greenpulsewellness.com/products/gpw-heavy-duty-d60-power-wheelchair",
    description: "A reinforced folding power wheelchair designed for higher-load mobility, combining dual brushless motors, electromagnetic braking and extended driving range.",
    tiers: ["Pro", "Signature"],
    specs: ["Dual Brushless", "High-Load Capacity", "Reinforced Folding"],
    image: productImage(
      "gpw-heavy-duty-d60-power-wheelchair",
      "Heavy-Duty D60 Power Wheelchair",
      "https://greenpulsewellness.com/products/jbh-heavy-duty-d60-power-wheelchair.webp",
    ),
  },
  {
    id: "gsoft-compression-calf",
    name: "GSoft Calf compression",
    brand: "GPW",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/Gsoft-compression-calf",
    description: "A portable calf recovery system combining dynamic compression with three adjustable heat levels for targeted lower-leg recovery.",
    tiers: ["Essential"],
    specs: ["Dynamic Compression", "3 Heat Levels", "Portable Lower-Leg"],
    image: productImage(
      "gsoft-compression-calf",
      "GSoft Calf compression",
      "https://greenpulsewellness.com/products/flowlife-flowpression-calf.webp",
    ),
  },
  {
    id: "gsoft-feet-heat",
    name: "Gsoft feet Heat",
    brand: "GPW",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/Gsoft-feet-heat",
    description: "A compact foot-recovery system combining adjustable heat, trigger-point massage and compression for a warming everyday recovery experience.",
    tiers: ["Essential"],
    specs: ["Adjustable Heat", "Trigger-Point Massage", "Foot Compression"],
    image: productImage(
      "gsoft-feet-heat",
      "Gsoft feet Heat",
      "https://greenpulsewellness.com/products/flowlife-flowfeet-heat.webp",
    ),
  },
  {
    id: "gsoft-flowpillow-heat",
    name: "Gsoft pillow Heat",
    brand: "GPW",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/Gsoft-flowpillow-heat",
    description: "A cordless rechargeable massage pillow combining three massage speeds with infrared heat in a compact format for targeted muscle recovery.",
    tiers: ["Essential"],
    specs: ["Cordless Rechargeable", "Infrared Heat", "3 Speeds"],
    image: productImage(
      "gsoft-flowpillow-heat",
      "Gsoft pillow Heat",
      "https://greenpulsewellness.com/products/flowlife-flowpillow-heat.webp",
    ),
  },
  {
    id: "gsoft-flowgun-air",
    name: "Gsoft Air gun",
    brand: "GPW",
    category: "Wellness & Recovery Technology",
    url: "https://greenpulsewellness.com/products/Gsoft-flowgun-air",
    description: "An ultra-light percussion massage device combining five speed settings, automatic mode and low-noise operation for portable muscle recovery.",
    tiers: ["Essential", "Pro"],
    specs: ["Ultra-Light Percussion", "5 Speeds", "Low-Noise Auto Mode"],
    image: productImage(
      "gsoft-flowgun-air",
      "Gsoft Air gun",
      "https://greenpulsewellness.com/products/flowlife-flowgun-air.webp",
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
    productId: "o2-carbon-hyperbaric-chamber",
    name: "O2 Carbon Hyperbaric Chamber",
    line: "Premium carbon-composite chamber with integrated oxygen delivery.",
    benefits: [
      "Supports recovery between demanding training and travel days.",
      "Rigid carbon-composite build with a quiet, spacious interior.",
      "Designed for daily sessions in centres and clinics.",
    ],
    media: {
      id: "spotlight-hbot",
      kind: "image",
      src: "/product/Carbon%20Hyperbaric%20Chamber.png",
      label: "O2 Carbon Hyperbaric Chamber",
      aspect: "4:5",
      alt: "O2 Carbon Hyperbaric Chamber in a calm recovery landscape",
    },
  },
  {
    productId: "halo-2-infrared-wellness-cabin",
    name: "Halo 2 Infrared Wellness Cabin",
    line: "Gentle, radiant warmth in a contemporary cylindrical design.",
    benefits: [
      "Combines infrared heat and red-light heating technology.",
      "Compact cylindrical design suited to premium residential and wellness spaces.",
      "Integrated ambient lighting and contemporary digital controls.",
    ],
    media: {
      id: "spotlight-infrared-sauna",
      kind: "image",
      src: "/product/Halo%202%20Infrared%20Wellness%20Cabin.png",
      label: "Halo 2 Infrared Wellness Cabin",
      aspect: "4:5",
      alt: "Halo 2 Infrared Wellness Cabin with warm interior light in forest setting",
    },
  },
  {
    productId: "gp-normatec-3-full-body",
    name: "GreenPulse Normatec 3 Full Body",
    line: "Dynamic air-compression recovery for legs, hips and arms.",
    benefits: [
      "Accelerated recovery flush through calibrated sequential compression zones.",
      "Seamless Bluetooth app connectivity for precision customized sessions.",
      "Trusted by professional athletes, sports clinics and wellness floors.",
    ],
    media: {
      id: "spotlight-normatec",
      kind: "image",
      src: "/product/GreenPulse%20Normatec%203%20Full%20Body.png",
      label: "Normatec 3 Full Body",
      aspect: "4:5",
      alt: "Normatec 3 dynamic compression system on running track",
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
      "/Target%20client/audience-longevity.png",
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
  line: "One partner from consultation through import, installation and service.",
};

export const steps: Step[] = [
  { number: "01", title: "Consult", line: "We map your space, clients and goals first." },
  { number: "02", title: "Curate", line: "A shortlist matched to your use case and budget." },
  { number: "03", title: "Source & Import", line: "Sourcing, shipping, customs and delivery handled." },
  { number: "04", title: "Install & Train", line: "On-site installation and hands-on team training." },
  { number: "05", title: "Service & Support", line: "Scheduled maintenance, spares and one number to call." },
];

/* ------------------------------------------------------------------ */
/* 8. Recovery suite packages                                          */
/* ------------------------------------------------------------------ */

export const packagesSection = {
  eyebrow: "Recovery suites",
  title: "Recovery suites, bundled.",
  line: "Starting points for a complete recovery floor — every suite is tailored.",
  cta: "Build my suite",
};

export const packages: SuitePackage[] = [
  {
    id: "starter",
    name: "Starter",
    line: "For gyms and studios adding a recovery corner.",
    bundle: [
      "gp-normatec-3-full-body",
      "apex-full-body-massage-chair",
      "gsoft-flowgun-air",
    ],
  },
  {
    id: "studio",
    name: "Studio",
    line: "For dedicated recovery studios and hotel spas.",
    bundle: [
      "halo-2-infrared-wellness-cabin",
      "gbuilt-chillybox",
      "gp-normatec-3-full-body",
      "apex-full-body-massage-chair",
    ],
    featured: true,
  },
  {
    id: "centre",
    name: "Centre",
    line: "For longevity centres building a full protocol floor.",
    bundle: [
      "o2-carbon-hyperbaric-chamber",
      "gbuilt-chillybox",
      "halo-5-infrared-wellness-cabin",
      "proadjust-chiropractic-table",
      "gp-normatec-3-full-body",
      "apex-full-body-massage-chair",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 9. Experience it                                                    */
/* ------------------------------------------------------------------ */

export const experience = {
  eyebrow: "Experience it",
  title: "See it in person.",
  line: "Try the equipment first-hand before you commit.",
  event: "IHFC Mumbai — dates coming soon",
  cta: { label: "Book a Demo", href: "#enquiry" },
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
/* 10. Rental strip                                                    */
/* ------------------------------------------------------------------ */

export const rental = {
  eyebrow: "Rental",
  line: "Equipment rental for hospitals and homecare.",
  cta: "Enquire on WhatsApp",
};

/* ------------------------------------------------------------------ */
/* 11. Enquiry form                                                    */
/* ------------------------------------------------------------------ */

export const enquiry = {
  eyebrow: "Enquire",
  title: "Tell us what you're building.",
  line: "Your enquiry goes straight to our team on WhatsApp.",
  submit: "Send on WhatsApp",
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
};

/* ------------------------------------------------------------------ */
/* 12. Footer                                                          */
/* ------------------------------------------------------------------ */

export const footer = {
  disclaimer:
    "Wellness equipment for general wellbeing. Not intended to diagnose, treat or cure any condition.",
};
