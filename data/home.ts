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
  whatsappNumber: "917550022504",
  whatsappDisplay: "+91 75500 22504",
  phone: "+91 75500 22504",
  phoneRaw: "+917550022504",
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

export type BentoSlideTile = {
  id: string;
  src: string;
  alt: string;
  span: "left-top" | "left-bottom" | "center-top" | "right-top-wide" | "center-bottom-wide" | "right-bottom";
  fit?: "cover" | "contain";
};

export type BentoSlide = {
  id: SolutionId;
  name: string;
  audience: string;
  url: string;
  tiles: BentoSlideTile[];
};

export const bentoSlides: BentoSlide[] = [
  {
    id: "recover",
    name: "Recover & Restore",
    audience: "Wellness & longevity centres, hotel spas, fitness",
    url: "/solutions/recover",
    tiles: [
      {
        id: "recover-1",
        src: "/catalog-images/icepod-plunge-setup.jpg",
        alt: "Cold plunge pool sanctuary with towels and ambient lighting",
        span: "left-top",
        fit: "cover",
      },
      {
        id: "recover-2",
        src: "/Target client/audience-hotel.jpg",
        alt: "Luxury wellness resort spa and thermal plunge suite",
        span: "center-top",
        fit: "cover",
      },
      {
        id: "recover-3",
        src: "/recoverandrestore/recoverandrestoremain.png",
        alt: "Panoramic recovery suite with infrared sauna and ambient wood",
        span: "right-top-wide",
        fit: "cover",
      },
      {
        id: "recover-4",
        src: "/Target client/audience-longevity.png",
        alt: "Longevity studio recovery suite",
        span: "left-bottom",
        fit: "cover",
      },
      {
        id: "recover-5",
        src: "/hero-wellness-sanctuary.jpg",
        alt: "Holistic wellness therapy sanctuary room",
        span: "center-bottom-wide",
        fit: "cover",
      },
      {
        id: "recover-6",
        src: "/recovery.png",
        alt: "Contrast therapy and cryo relaxation suite",
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
    description: "Compact single-person full-spectrum infrared sauna (Catalog Model: MS-011FS) crafted from Canadian hemlock with tourmaline floor heating, oxygen ionizer, and 7-color chromotherapy.",
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
    description: "Two-person American full-spectrum infrared sauna (Catalog Model: MS-021HC) with Canadian hemlock or red cedar, tourmaline floor heating, oxygen ionizer, and integrated Bluetooth sound.",
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
    description: "Three-person luxury full-spectrum infrared sauna (Catalog Model: MS-031PB / MS-061PB) with quartz combine heating, starlight chromotherapy, dual speakers, and oxygen ionizer.",
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
    description: "Two-person hybrid infrared sauna (Catalog Model: MS-021L) in red cedar with ceramic tube and carbon panel heaters, tourmaline stone floor, and multimedia sound.",
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
    description: "Luxury three-person hybrid infrared sauna (Catalog Model: MS-061PB) combining far-infrared carbon panels with full-spectrum quartz heating, red cedar or hemlock build, and tourmaline floor.",
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
    description: "Round single-person cold plunge",
    tiers: ["Essential", "Pro"],
    specs: ["CD-01","ARCTIC","₹30,000"],
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
    description: "Full-size cold plunge tub / ice bath",
    tiers: ["Pro", "Signature"],
    specs: ["CD-02","ARCTIC","₹4,70,000"],
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
    specs: ["CD-03","ARCTIC","₹12,000"],
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
    description: "Cryotherapy mini pod for localised / whole-body cold exposure",
    tiers: ["Pro", "Signature"],
    specs: ["CD-04","ARCTIC","₹15,68,000"],
    image: productImage(
      "cryo-mini-cryome",
      "Arctic Zero Mini Cryotherapy Chamber",
      "/GPW%20Product%20mockup/Cold/Arctic%20Zero%20Mini%20Cryotherapy%20Chamber/cryo%20mi.png",
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
    description: "Full-body LED light therapy stand",
    tiers: ["Pro", "Signature"],
    specs: ["LT-01","LUMA","₹4,31,200"],
    image: productImage(
      "led-therapy-full-stand",
      "Luma Stand Full Body LED Light Therapy Stand",
      "/GPW%20Product%20mockup/Light/Luma%20Stand%20Full%20Body%20LED%20Light%20Therapy%20Stand/Luma%20Stand%20Full%20Body%20LED%20Light%20Therapy%20Stand.png",
    ),
  },
  {
    id: "led-therapy-full-body-clam-1-m6",
    name: "Luma Cocoon 1 Full Body LED Light Therapy Bed",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Photobiomodulation & Red Light Therapy",
    brand: "LUMA",
    url: "/products/led-therapy-full-body-clam-1-m6",
    description: "Full-body LED light therapy clamshell bed",
    tiers: ["Pro", "Signature"],
    specs: ["LT-02","LUMA","₹12,15,200"],
    image: productImage(
      "led-therapy-full-body-clam-1-m6",
      "Luma Cocoon 1 Full Body LED Light Therapy Bed",
      "/GPW%20Product%20mockup/Light/Luma%20Cocoon%201%20Full%20Body%20LED%20Light%20Therapy%20Bed/D274D258-A160-4310-9D8D-0BF2389C4B21.png",
    ),
  },
  {
    id: "led-therapy-full-body-clam-2-m6l",
    name: "Luma Cocoon 2 Advanced Full Body LED Light Therapy Bed",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Photobiomodulation & Red Light Therapy",
    brand: "LUMA",
    url: "/products/led-therapy-full-body-clam-2-m6l",
    description: "Advanced full-body LED light therapy clamshell bed",
    tiers: ["Pro", "Signature"],
    specs: ["LT-03","LUMA","₹16,07,200"],
    image: productImage(
      "led-therapy-full-body-clam-2-m6l",
      "Luma Cocoon 2 Advanced Full Body LED Light Therapy Bed",
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
    description: "Walk-in full-body LED light therapy stand chamber",
    tiers: ["Pro", "Signature"],
    specs: ["LT-04","LUMA","₹27,83,200"],
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
    description: "Hyperbaric oxygen chamber, single user",
    tiers: ["Pro", "Signature"],
    specs: ["AR-01","OXA","₹21,16,800"],
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
    description: "Hyperbaric oxygen chamber, two users",
    tiers: ["Pro", "Signature"],
    specs: ["AR-02","OXA","₹29,40,000"],
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
    description: "Compact single-user hyperbaric oxygen chamber",
    tiers: ["Essential", "Pro"],
    specs: ["AR-03","OXA","Commercial Grade"],
    image: productImage(
      "hbot-single-mini-komjet",
      "Oxa Mini Portable Hyperbaric Oxygen Chamber (HBOT)",
      "/GPW%20Product%20mockup/Air/Oxa%20Mini%20Portable%20Hyperbaric%20Oxygen%20Chamber%20(HBOT)/70ED014F-BDCD-4F00-89A0-5920CB1F9C72.png",
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
    description: "Mid-range full-body massage chair",
    tiers: ["Essential", "Pro"],
    specs: ["RX-01","SERENE","₹78,400"],
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
    description: "Elite full-body massage chair",
    tiers: ["Pro", "Signature"],
    specs: ["RX-02","SERENE","₹3,82,200"],
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
    description: "SL-track lounge massage chair",
    tiers: ["Essential", "Pro"],
    specs: ["RX-03","SERENE","₹98,800"],
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
    description: "360-degree lounge massage chair",
    tiers: ["Essential", "Pro"],
    specs: ["RX-04","SERENE","₹86,500"],
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
    description: "SL-track comfort massage chair",
    tiers: ["Essential", "Pro"],
    specs: ["RX-05","SERENE","₹1,28,000"],
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
    description: "Wireless air compression recovery boots, entry model (price per set)",
    tiers: ["Essential", "Pro"],
    specs: ["CP-01","PULSEWAVE","₹27,440"],
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
    description: "Professional 6-chamber compression system, app control",
    tiers: ["Essential", "Pro"],
    specs: ["CP-02","PULSEWAVE","₹43,120"],
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
    description: "Professional 8-chamber compression system",
    tiers: ["Essential", "Pro"],
    specs: ["CP-03","PULSEWAVE","₹72,000"],
    image: productImage(
      "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
      "PulseWave Pro 8 Air Compression Recovery System (8-Chamber)",
    ),
  },
  {
    id: "pulsewave-studio-group-compression-therapy-system",
    name: "PulseWave Studio Group Compression Therapy System",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-studio-group-compression-therapy-system",
    description: "Multi-user group compression system (4, 6 or 8 chamber)",
    tiers: ["Essential", "Pro"],
    specs: ["CP-04","PULSEWAVE","Commercial Grade"],
    image: productImage(
      "pulsewave-studio-group-compression-therapy-system",
      "PulseWave Studio Group Compression Therapy System",
    ),
  },
  {
    id: "pulsewave-zone-multi-zone-compression-therapy-system-leg-knee-elbow-calf",
    name: "PulseWave Zone Multi-Zone Compression Therapy System (Leg, Knee, Elbow, Calf)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-zone-multi-zone-compression-therapy-system-leg-knee-elbow-calf",
    description: "Multi-zone compression systems and cuffs for legs, hips, arms, waist and vest",
    tiers: ["Essential", "Pro"],
    specs: ["CP-05","PULSEWAVE","₹1,80,000"],
    image: productImage(
      "pulsewave-zone-multi-zone-compression-therapy-system-leg-knee-elbow-calf",
      "PulseWave Zone Multi-Zone Compression Therapy System (Leg, Knee, Elbow, Calf)",
    ),
  },
  {
    id: "compression-system-konbest-9590",
    name: "PulseWave 4 Air Compression Boots (4-Chamber, App Control)",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/compression-system-konbest-9590",
    description: "Portable wireless 4-chamber compression boots with app control (price per set)",
    tiers: ["Essential", "Pro"],
    specs: ["CP-06","PULSEWAVE","₹27,440"],
    image: productImage(
      "compression-system-konbest-9590",
      "PulseWave 4 Air Compression Boots (4-Chamber, App Control)",
    ),
  },
  {
    id: "pulsewave-heat-wireless-compression-boots-with-heat",
    name: "PulseWave Heat Wireless Compression Boots with Heat",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-heat-wireless-compression-boots-with-heat",
    description: "Detachable wireless compression boots with 3-level heat, 5 chambers, Bluetooth sync (price per set)",
    tiers: ["Essential", "Pro"],
    specs: ["CP-07","PULSEWAVE","₹27,440"],
    image: productImage(
      "pulsewave-heat-wireless-compression-boots-with-heat",
      "PulseWave Heat Wireless Compression Boots with Heat",
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
    description: "Wireless compression boots with infrared LED light (price per set)",
    tiers: ["Essential", "Pro"],
    specs: ["CP-08","PULSEWAVE","₹27,440"],
    image: productImage(
      "pulsewave-glow-wireless-compression-boots-with-infrared-light",
      "PulseWave Glow Wireless Compression Boots with Infrared Light",
    ),
  },
  {
    id: "pulsewave-max-8-chamber-air-compression-recovery-system",
    name: "PulseWave Max 8-Chamber Air Compression Recovery System",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-max-8-chamber-air-compression-recovery-system",
    description: "8-chamber overlapped air compression recovery system, 6 modes, 11 intensity levels (price per set)",
    tiers: ["Essential", "Pro"],
    specs: ["CP-09","PULSEWAVE","₹27,440"],
    image: productImage(
      "pulsewave-max-8-chamber-air-compression-recovery-system",
      "PulseWave Max 8-Chamber Air Compression Recovery System",
    ),
  },
  {
    id: "pulsewave-pants-air-compression-recovery-pants",
    name: "PulseWave Pants Air Compression Recovery Pants",
    category: "Active Recovery & Massage (Relax)",
    modality: "relax",
    subCategory: "Pneumatic Compression Systems",
    brand: "PULSEWAVE",
    url: "/products/pulsewave-pants-air-compression-recovery-pants",
    description: "Full compression pants, feet to waist, 8 chambers (price per set)",
    tiers: ["Essential", "Pro"],
    specs: ["CP-10","PULSEWAVE","₹27,440"],
    image: productImage(
      "pulsewave-pants-air-compression-recovery-pants",
      "PulseWave Pants Air Compression Recovery Pants",
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
    description: "Lightweight percussion massage gun, 4 heads",
    tiers: ["Essential", "Pro"],
    specs: ["TH-01","THRUM","₹9,800"],
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
    description: "Professional 30-speed percussion massage gun",
    tiers: ["Essential", "Pro"],
    specs: ["TH-02","THRUM","₹5,880"],
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
    description: "Deep-amplitude (12 mm) percussion massage gun",
    tiers: ["Essential", "Pro"],
    specs: ["TH-03","THRUM","₹13,720"],
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
    description: "Far-infrared heat sauna blanket",
    tiers: ["Essential", "Pro"],
    specs: ["BL-01","EMBER / AURORA","₹60,760"],
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
    description: "Red + near-infrared light therapy blanket",
    tiers: ["Essential", "Pro"],
    specs: ["BL-02","EMBER / AURORA","₹62,720"],
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
    description: "Portable cold, heat and red light (660/850 nm) contrast therapy pad with vibration",
    tiers: ["Essential", "Pro"],
    specs: ["TP-01","FROSTFIRE","₹27,440"],
    image: productImage(
      "cold-therapy-unit-806pro",
      "Frostfire Pad Cold, Heat & Red Light Therapy Pad",
    ),
  },
  {
    id: "cold-therapy-unit-cl802",
    name: "Frostfire Joint Wrap Cold, Heat & Infrared Therapy Wrap",
    category: "Cold & Cryo Therapy",
    modality: "cold",
    subCategory: "Contrast Therapy Devices",
    brand: "FROSTFIRE",
    url: "/products/cold-therapy-unit-cl802",
    description: "Wearable cold + heat + infrared joint wrap",
    tiers: ["Essential", "Pro"],
    specs: ["TP-02","FROSTFIRE","Commercial Grade"],
    image: productImage(
      "cold-therapy-unit-cl802",
      "Frostfire Joint Wrap Cold, Heat & Infrared Therapy Wrap",
    ),
  },
  {
    id: "luma-go-portable-red-light-stand",
    name: "Luma Go Portable Red Light Therapy Stand",
    category: "Light & Photobiomodulation",
    modality: "light",
    subCategory: "Targeted Photobiomodulation Panels & Devices",
    brand: "LUMA",
    url: "/products/luma-go-portable-red-light-stand",
    description: "Portable red light therapy stand available in T500, T1000, and T1500 modular sizes (660 nm + 850 nm dual-wavelength LEDs)",
    tiers: ["Essential", "Pro"],
    specs: ["T500 / T1000 / T1500", "LUMA", "₹26,950 – ₹61,740"],
    image: productImage(
      "luma-go-portable-red-light-stand",
      "Luma Go Portable Red Light Therapy Stand",
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
    description: "Tall mobile red light therapy stand on wheels (320 LEDs, 660 nm + 850 nm)",
    tiers: ["Essential", "Pro"],
    specs: ["LS-04", "LUMA", "₹73,500"],
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
    description: "Height-adjustable focused red light therapy lamp (660 nm + 850 nm)",
    tiers: ["Essential", "Pro"],
    specs: ["LS-05", "LUMA", "₹9,702"],
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
    description: "Height-adjustable red light therapy panel, separate red/infrared control, 10 Hz / 40 Hz pulse",
    tiers: ["Essential", "Pro"],
    specs: ["LS-06", "LUMA", "₹10,780"],
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
    description: "Handheld 4-in-1 device: TENS, 650 nm red laser, 808 nm infrared laser, 1 MHz ultrasound",
    tiers: ["Essential", "Pro"],
    specs: ["LS-07", "LUMA BEAM", "₹26,950"],
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
    description: "Handheld 650 nm red laser + 808 nm infrared laser device (9 red + 4 infrared diodes)",
    tiers: ["Essential", "Pro"],
    specs: ["LS-08", "LUMA BEAM", "₹30,380"],
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
    description: "Wearable 650 nm laser cap with 200 laser diodes",
    tiers: ["Essential", "Pro"],
    specs: ["LS-09", "LUMA BEAM", "₹25,480"],
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
    description: "LED face and neck mask, 7-colour light (105 face + 114 neck LEDs)",
    tiers: ["Essential", "Pro"],
    specs: ["LS-10", "LUMA", "₹27,440"],
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
    description: "LED face mask, hard shell, 7 modes (50 LEDs)",
    tiers: ["Essential", "Pro"],
    specs: ["LS-11", "LUMA", "₹18,620"],
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
    description: "LED face mask, hard shell, 7 modes incl. 630 nm red (78 LEDs)",
    tiers: ["Essential", "Pro"],
    specs: ["LS-12", "LUMA", "₹22,540"],
    image: productImage(
      "led-mask-gy-106a",
      "Luma Shell 2 Multi-Wavelength LED Face Mask (Hard Shell, 7 Modes)",
      "/GPW%20Product%20mockup/LED%20small/Luma%20Shell%202%20Multi-Wavelength%20LED%20Face%20Mask%20(Hard%20Shell,%207%20Modes)/Luma%20Shell%202%20Multi-Wavelength%20LED%20Face%20Mask%20(Hard%20Shell,%207%20Modes).png",
    ),
  },
  {
    id: "dragon-glide-flex",
    name: "Glide Flex (Dragon Glide Flex)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/dragon-glide-flex",
    description: "Mobility product (type to be confirmed)",
    tiers: ["Essential", "Pro"],
    specs: ["MB-01","GLIDE","Commercial Grade"],
    image: productImage(
      "dragon-glide-flex",
      "Glide Flex (Dragon Glide Flex)",
    ),
  },
  {
    id: "power-wheelchair-dw-w6",
    name: "Glide Trek 1 (DW-W6)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/power-wheelchair-dw-w6",
    description: "Mobility product (type to be confirmed)",
    tiers: ["Essential", "Pro"],
    specs: ["MB-02","GLIDE","Commercial Grade"],
    image: productImage(
      "power-wheelchair-dw-w6",
      "Glide Trek 1 (DW-W6)",
    ),
  },
  {
    id: "power-wheelchair-dw-w6016",
    name: "Glide Trek 2 (DW-W6016)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/power-wheelchair-dw-w6016",
    description: "Mobility product (type to be confirmed)",
    tiers: ["Essential", "Pro"],
    specs: ["MB-03","GLIDE","Commercial Grade"],
    image: productImage(
      "power-wheelchair-dw-w6016",
      "Glide Trek 2 (DW-W6016)",
    ),
  },
  {
    id: "power-wheelchair-m293-y7",
    name: "Glide Lite (M293 - Y7)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/power-wheelchair-m293-y7",
    description: "Mobility product (type to be confirmed)",
    tiers: ["Essential", "Pro"],
    specs: ["MB-04","GLIDE","Commercial Grade"],
    image: productImage(
      "power-wheelchair-m293-y7",
      "Glide Lite (M293 - Y7)",
    ),
  },
  {
    id: "transfer-chair-dw-001",
    name: "Glide Start (DW-001)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/transfer-chair-dw-001",
    description: "Mobility product (type to be confirmed)",
    tiers: ["Essential", "Pro"],
    specs: ["MB-05","GLIDE","Commercial Grade"],
    image: productImage(
      "transfer-chair-dw-001",
      "Glide Start (DW-001)",
    ),
  },
  {
    id: "pediatric-mobility-dw-703-704-980c",
    name: "Glide Junior (DW-703 / 704 / 980C - Pediatric)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/pediatric-mobility-dw-703-704-980c",
    description: "Mobility product (type to be confirmed)",
    tiers: ["Essential", "Pro"],
    specs: ["MB-06","GLIDE","Commercial Grade"],
    image: productImage(
      "pediatric-mobility-dw-703-704-980c",
      "Glide Junior (DW-703 / 704 / 980C - Pediatric)",
    ),
  },
  {
    id: "stilt-stand-dw-308-wd901",
    name: "Rise Stand (DW-308 / WD901 - Stilt stand)",
    category: "Mobility & Assistive Technology",
    modality: "mobility",
    subCategory: "Power Wheelchairs & Assistive Mobility",
    brand: "GLIDE",
    url: "/products/stilt-stand-dw-308-wd901",
    description: "Mobility product (type to be confirmed)",
    tiers: ["Essential", "Pro"],
    specs: ["MB-07","GLIDE","Commercial Grade"],
    image: productImage(
      "stilt-stand-dw-308-wd901",
      "Rise Stand (DW-308 / WD901 - Stilt stand)",
    ),
  },

  {
    id: "halo-2-infrared-wellness-cabin",
    name: "Halo 2 Infrared Wellness Cabin (Showcase Edition)",
    category: "Heat & Thermal Therapy",
    modality: "heat",
    subCategory: "Full Spectrum Infrared Saunas",
    brand: "GPW",
    url: "/products/halo-2-infrared-wellness-cabin",
    description: "A contemporary two-person infrared wellness cabin combining infrared heat, red-light heating technology and ambient lighting in a bespoke cylindrical architecture.",
    tiers: ["Pro", "Signature"],
    specs: ["2-Person", "Infrared & Red Light", "Cylindrical Cabin"],
    image: productImage(
      "halo-2-infrared-wellness-cabin",
      "Halo 2 Infrared Wellness Cabin (Showcase Edition)",
      "/product/Halo%202%20Infrared%20Wellness%20Cabin.png",
    ),
  },
  {
    id: "o2-carbon-hyperbaric-chamber",
    name: "O2 Carbon Hyperbaric Chamber (Showcase Edition)",
    category: "Oxygen & Hyperbaric (Air)",
    modality: "air",
    subCategory: "Hyperbaric Oxygen Therapy (HBOT)",
    brand: "GPW",
    url: "/products/o2-carbon-hyperbaric-chamber",
    description: "Multi-occupancy commercial hyperbaric chamber with high-purity oxygen enrichment and aerospace-grade carbon composite architecture.",
    tiers: ["Signature"],
    specs: ["Multi-Occupancy", "Up to 2.0 ATA", "Touchscreen Console"],
    image: productImage(
      "o2-carbon-hyperbaric-chamber",
      "O2 Carbon Hyperbaric Chamber (Showcase Edition)",
      "/product/Carbon%20Hyperbaric%20Chamber.png",
    ),
  },
  {
    id: "proadjust-chiropractic-table",
    name: "ProAdjust Chiropractic Table",
    category: "Rehabilitation & Physical Therapy",
    modality: "mobility",
    subCategory: "Physical Therapy & Spinal Decompression",
    brand: "GPW",
    url: "/products/proadjust-chiropractic-table",
    description: "Precision motorized chiropractic and spinal decompression table engineered for physiotherapy clinics and rehabilitation studios.",
    tiers: ["Pro", "Signature"],
    specs: ["Multi-Segment Drop", "Electric Elevation", "Ergonomic Upholstery"],
    image: productImage(
      "proadjust-chiropractic-table",
      "ProAdjust Chiropractic Table",
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
