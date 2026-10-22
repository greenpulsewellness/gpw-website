import type { ProductDetail, ProductSpecGroup } from "./products-data";

/**
 * Detail pages for the Oxa / Oxy hyperbaric chambers.
 * Product detail data.
 * Wellness / product wording only: no treatment or medical claims, no pricing, no packaging / shipping data.
 * Regulatory check and trained operator required (per project notes).
 */

const SAFETY = [
  "Hyperbaric chambers must only be installed and operated in line with local regulations, by a trained operator, following the supplied safety procedures.",
  "Not suitable for everyone. A medical professional should confirm that a person is suitable before any session.",
];

const ENVIRONMENTS = [
  { type: "Longevity & Wellness Centres", description: "A supervised pressurised-cabin service within a wellness menu." },
  { type: "Clinics (where regulations permit)", description: "Installed and operated only in line with local requirements." },
];

const oxygenGroup = (flow: string): ProductSpecGroup => ({
  category: "Oxygen Source",
  items: [
    { label: "Oxygen Flow Rate", value: flow },
    { label: "Oxygen Concentration", value: "93% ± 3%" },
    { label: "Cabin Oxygen Concentration", value: "21%–25%" },
    { label: "Oxygen Generation", value: "High-quality lithium-based molecular sieve PSA" },
    { label: "Rated Power of Generator", value: "1200 W" },
    { label: "Generator Size / Weight", value: "450 × 520 × 870 mm / 75 kg" },
  ],
});

const systemGroup: ProductSpecGroup = {
  category: "Safety & System",
  items: [
    { label: "Safety Configuration", value: "Manual pressure relief valve, emergency switch, automatic safety valve" },
    { label: "Pressurisation Rate", value: "Max boost ≤ 4 kPa/min; max pressure reduction ≤ 12 kPa/min" },
    { label: "Operation", value: "Dual-screen capacitive touch (inside and outside)" },
    { label: "Lighting & Intercom", value: "12 V LED lighting; integrated dual-mode intercom" },
    { label: "Compressor", value: "Oil-free compressor air delivery system" },
    { label: "Operating Temperature / Humidity", value: "0–40 °C / 30%–90%" },
    { label: "Noise", value: "Internal ≤ 45 dB; external ≤ 58 dB" },
    { label: "Power Supply", value: "220 V / 50 Hz (110–120 V / 60 Hz)" },
    { label: "Assembly / Materials", value: "Modular assembly; E0-B1 material standard" },
  ],
};

const interior = "wall panels, sofa and interior upholstery, air conditioner, lighting, a nasal spray device and an intelligent control panel";

type Input = {
  id: string;
  subtitle: string;
  tagline: string;
  overview: string[];
  specGroups: ProductSpecGroup[];
  included: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  /** Overrides the shared cabin-system copy when the source sheet doesn't describe those systems. */
  custom?: Pick<ProductDetail, "mechanismOfAction" | "features" | "benefits">;
};

function hbot(o: Input): ProductDetail {
  return {
    id: o.id,
    subtitle: o.subtitle,
    tagline: o.tagline,
    overview: o.overview,
    mechanismOfAction: o.custom?.mechanismOfAction ?? {
      heading: "Pressurised Cabin with Oxygen Concentrator",
      description: "A sealed steel cabin is pressurised with filtered air from an oil-free compressor, while a separate PSA oxygen generator supplies the oxygen source.",
      points: [
        "Cabin pressurised to the stated ATA rating.",
        "Controlled boost and release rates (≤ 4 kPa/min up, ≤ 12 kPa/min down).",
        "PSA oxygen generator at 93% ± 3% concentration.",
        "Manual relief valve, emergency switch and automatic safety valve.",
      ],
    },
    features: o.custom?.features ?? [
      { title: "Multiple Safety Systems", description: "Manual pressure relief valve, emergency switch and automatic safety valve.", iconName: "ShieldCheck" },
      { title: "Dual-Screen Control", description: "Capacitive touch controls inside and outside the cabin.", iconName: "Monitor" },
      { title: "Comfort Interior", description: `Fitted with ${interior}.`, iconName: "Sparkles" },
      { title: "Intercom & Lighting", description: "Dual-mode intercom and 12 V LED lighting.", iconName: "Speaker" },
      { title: "Quiet Operation", description: "Internal noise ≤ 45 dB.", iconName: "VolumeX" },
      { title: "Modular Assembly", description: "Modular build for easier delivery and installation.", iconName: "Layers" },
    ],
    benefits: o.custom?.benefits ?? [
      { title: "Controlled Pressurisation", description: "Gradual boost and release rates.", metric: "≤ 4 kPa/min" },
      { title: "Quiet Cabin", description: "≤ 45 dB inside.", metric: "≤ 45 dB" },
    ],
    specGroups: o.specGroups,
    whatsIncluded: o.included,
    protocol: {
      recommendedDuration: "Set by the qualified operator",
      frequency: "Per the operator's programme",
      preparation: [
        "Confirm local regulatory requirements are met and the operator is trained.",
        "Check the safety valves, emergency switch and intercom before every session.",
      ],
      protocolSteps: [
        { step: "Pre-check", instruction: "Run the operator's safety checklist and confirm the user is suitable." },
        { step: "Session", instruction: "Pressurise gradually and monitor via the intercom and control panel." },
        { step: "Release", instruction: "Release pressure at the controlled rate before opening the door." },
      ],
      contraindications: SAFETY,
    },
    suitableEnvironments: ENVIRONMENTS,
    faqs: o.faqs,
    relatedProductIds: o.related,
  };
}

export const hbotDetails: Record<string, ProductDetail> = {
  "hbot-single-cube-chamber": hbot({
    id: "hbot-single-cube-chamber",
    subtitle: "Single-Person Hyperbaric Oxygen Chamber, 2.0 ATA",
    tagline: "A single-user steel cabin with a high-transparency acrylic door, built-in comfort interior and a 10 L/min oxygen generator.",
    overview: [
      "The Oxa Cube Solo is a single-user hyperbaric oxygen chamber rated at 2.0 ATA. The cabin is made of SPCC carbon steel plate, square steel and ABS, and measures 1900 × 900 × 1950 mm.",
      "The door is a 30 or 40 mm high-transparency acrylic panel. Inside, the cabin is fitted with " + interior + ". A separate oxygen generator supplies 10 L/min at 93% ± 3% concentration.",
      "Working pressure inside the cabin is adjustable from 10 kPa to 50 kPa, with safety systems and dual-screen touch control. This product requires a regulatory check and a trained operator.",
    ],
    specGroups: [
      {
        category: "Cabin",
        items: [
          { label: "Pressure Rating", value: "2.0 ATA" },
          { label: "Working Pressure (inside cabin)", value: "Adjustable 10–50 kPa" },
          { label: "Cabin Dimensions", value: "1900 × 900 × 1950 mm" },
          { label: "Cabin Material", value: "SPCC carbon steel plate, square steel, ABS" },
          { label: "Door", value: "30 / 40 mm high-transparency acrylic" },
          { label: "Capacity", value: "1 person" },
        ],
      },
      oxygenGroup("10 L/min"),
      systemGroup,
    ],
    included: ["Oxa Cube Solo cabin with interior fit-out", "Oxygen generator (PSA)", "Oil-free air compressor system", "Dual-screen control panel and intercom"],
    faqs: [
      { question: "What is the pressure rating?", answer: "2.0 ATA, with working pressure inside the cabin adjustable from 10 to 50 kPa." },
      { question: "What is the door made of?", answer: "A 30 / 40 mm high-transparency acrylic panel." },
      { question: "Does it need a trained operator?", answer: "Yes. A regulatory check and a trained operator are required." },
    ],
    related: ["hbot-double-cube-chamber", "hbot-single-mini-komjet", "oxy-1-hyperbaric-oxygen-chamber-single"],
  }),

  "hbot-double-cube-chamber": hbot({
    id: "hbot-double-cube-chamber",
    subtitle: "Two-Person Hyperbaric Oxygen Chamber, 2.0 ATA",
    tagline: "A two-user steel cabin with a high-pressure carbon steel door and a 15 L/min oxygen generator.",
    overview: [
      "The Oxa Cube Duo is a two-user hyperbaric oxygen chamber rated at 2.0 ATA. The cabin is made of SPCC carbon steel plate, square steel and ABS, and measures 2000 × 1800 × 1900 mm.",
      "The door is a high-pressure, high-strength carbon steel cabin door. The cabin is fitted with " + interior + ". A separate oxygen generator supplies 15 L/min at 93% ± 3% concentration.",
      "Working pressure inside the cabin is adjustable from 10 kPa to 100 kPa. This product requires a regulatory check and a trained operator.",
    ],
    specGroups: [
      {
        category: "Cabin",
        items: [
          { label: "Pressure Rating", value: "2.0 ATA" },
          { label: "Working Pressure (inside cabin)", value: "Adjustable 10–100 kPa" },
          { label: "Cabin Dimensions", value: "2000 × 1800 × 1900 mm" },
          { label: "Cabin Material", value: "SPCC carbon steel plate, square steel, ABS" },
          { label: "Door", value: "High-pressure, high-strength carbon steel" },
          { label: "Capacity", value: "2 persons" },
        ],
      },
      oxygenGroup("15 L/min"),
      systemGroup,
    ],
    included: ["Oxa Cube Duo cabin with interior fit-out", "Oxygen generator (PSA)", "Oil-free air compressor system", "Dual-screen control panel and intercom"],
    faqs: [
      { question: "How many people can it take?", answer: "Two." },
      { question: "What is the oxygen flow?", answer: "15 L/min at 93% ± 3% concentration." },
      { question: "Does it need a trained operator?", answer: "Yes. A regulatory check and a trained operator are required." },
    ],
    related: ["hbot-single-cube-chamber", "oxy-2-hyperbaric-oxygen-chamber-double", "hbot-single-mini-komjet"],
  }),

  "hbot-single-mini-komjet": hbot({
    id: "hbot-single-mini-komjet",
    subtitle: "Compact Single-User Hyperbaric Oxygen Chamber, 2.0 ATA",
    tagline: "A compact single-user steel cabin (1500 × 900 × 1950 mm) with a high-pressure steel door and a 15 L/min oxygen generator.",
    overview: [
      "The Oxa Mini is a compact single-user hyperbaric oxygen chamber rated at 2.0 ATA. The cabin is made of SPCC carbon steel plate, square steel and ABS, and measures 1500 × 900 × 1950 mm.",
      "The door is a high-pressure, high-strength carbon steel cabin door. The cabin is fitted with " + interior + ". A separate oxygen generator supplies 15 L/min at 93% ± 3% concentration.",
      "Working pressure inside the cabin is adjustable from 10 kPa to 100 kPa. This product requires a regulatory check and a trained operator.",
    ],
    specGroups: [
      {
        category: "Cabin",
        items: [
          { label: "Pressure Rating", value: "2.0 ATA" },
          { label: "Working Pressure (inside cabin)", value: "Adjustable 10–100 kPa" },
          { label: "Cabin Dimensions", value: "1500 × 900 × 1950 mm" },
          { label: "Cabin Material", value: "SPCC carbon steel plate, square steel, ABS" },
          { label: "Door", value: "High-pressure, high-strength carbon steel" },
          { label: "Capacity", value: "1 person" },
        ],
      },
      oxygenGroup("15 L/min"),
      systemGroup,
    ],
    included: ["Oxa Mini cabin with interior fit-out", "Oxygen generator (PSA)", "Oil-free air compressor system", "Dual-screen control panel and intercom"],
    faqs: [
      { question: "How is it different from the Cube Solo?", answer: "The cabin is shorter (1500 mm vs 1900 mm) and uses a steel door instead of acrylic." },
      { question: "Does it need a trained operator?", answer: "Yes. A regulatory check and a trained operator are required." },
    ],
    related: ["hbot-single-cube-chamber", "hbot-double-cube-chamber", "oxy-1-hyperbaric-oxygen-chamber-single"],
  }),

  "oxy-1-hyperbaric-oxygen-chamber-single": hbot({
    id: "oxy-1-hyperbaric-oxygen-chamber-single",
    subtitle: "Single-Seat Hyperbaric Oxygen Chamber, 1.5 ATA or 2.0 ATA",
    tagline: "A single-seat hard-shell chamber offered at 1.5 ATA or 2.0 ATA, with a 10 L/min oxygen flow, custom colours and an optional red-light version.",
    overview: [
      "The Oxy 1 is a single-seat hyperbaric oxygen chamber offered in two pressure ratings: 1.5 ATA and 2.0 ATA. Both use a 10 L/min oxygen flow, and colours can be customised.",
      "The 1.5 ATA model measures 1400 × 800 × 1900 mm externally. The 2.0 ATA model is a compact single-person hard-shell setup whose dimensions vary by configuration. A red-light version is available for both ratings.",
      "This product requires a regulatory check and a trained operator.",
    ],
    specGroups: [
      {
        category: "Models",
        items: [
          { label: "Model A", value: "Oxy 1, 1.5 ATA, 1 seat, 1400 × 800 × 1900 mm external" },
          { label: "Model B", value: "Oxy 1, 2.0 ATA, 1 seat, compact single-person hard shell (dimensions vary by configuration)" },
          { label: "Oxygen Flow", value: "10 L/min" },
          { label: "Colour", value: "Customisable" },
          { label: "Option", value: "Red-light version available" },
        ],
      },
    ],
    custom: {
      mechanismOfAction: {
        heading: "Single-Seat Pressurised Chamber",
        description: "A hard-shell single-seat chamber supplied with oxygen at a 10 L/min flow, available at two pressure ratings.",
        points: ["Pressure rating of 1.5 ATA or 2.0 ATA.", "Oxygen flow of 10 L/min.", "Hard-shell single-seat build.", "Optional red-light version."],
      },
      features: [
        { title: "Two Pressure Ratings", description: "Choose 1.5 ATA or 2.0 ATA.", iconName: "Sliders" },
        { title: "Compact Single Seat", description: "Hard-shell chamber for one person.", iconName: "Users" },
        { title: "Custom Colours", description: "Colours can be customised.", iconName: "Sparkles" },
        { title: "Red-Light Option", description: "A red-light version is available.", iconName: "Sun" },
      ],
      benefits: [
        { title: "Flexible Specification", description: "Two pressure options to match the site.", metric: "1.5 / 2.0 ATA" },
        { title: "10 L/min Oxygen Flow", description: "For a single seat.", metric: "10 L/min" },
      ],
    },
    included: ["Oxy 1 chamber (1.5 ATA or 2.0 ATA)", "Oxygen supply system", "Control panel", "Optional red-light version"],
    faqs: [
      { question: "What pressure ratings are offered?", answer: "1.5 ATA and 2.0 ATA." },
      { question: "Can I choose the colour?", answer: "Yes, colours are customisable." },
      { question: "Is a red-light version available?", answer: "Yes, as an option for both pressure ratings." },
    ],
    related: ["oxy-2-hyperbaric-oxygen-chamber-double", "hbot-single-cube-chamber", "hbot-single-mini-komjet"],
  }),

  "oxy-2-hyperbaric-oxygen-chamber-double": hbot({
    id: "oxy-2-hyperbaric-oxygen-chamber-double",
    subtitle: "Two-Seat Hyperbaric Oxygen Chamber, 1.5 ATA or 2.0 ATA",
    tagline: "A two-seat chamber offered at 1.5 ATA or 2.0 ATA, with a 15 L/min oxygen flow, custom colours and an optional red-light version.",
    overview: [
      "The Oxy 2 is a two-seat hyperbaric oxygen chamber offered in two pressure ratings: 1.5 ATA and 2.0 ATA. Both use a 15 L/min oxygen flow, and colours can be customised.",
      "The 1.5 ATA model measures 2200 × 1800 × 1900 mm externally, and the 2.0 ATA model measures 2100 × 1800 × 1800 mm. A red-light version is available for both ratings.",
      "This product requires a regulatory check and a trained operator.",
    ],
    specGroups: [
      {
        category: "Models",
        items: [
          { label: "Model E", value: "Oxy 2, 1.5 ATA, 2 seats, 2200 × 1800 × 1900 mm external" },
          { label: "Model F", value: "Oxy 2, 2.0 ATA, 2 seats, 2100 × 1800 × 1800 mm external" },
          { label: "Oxygen Flow", value: "15 L/min" },
          { label: "Colour", value: "Customisable" },
          { label: "Option", value: "Red-light version available" },
        ],
      },
    ],
    custom: {
      mechanismOfAction: {
        heading: "Two-Seat Pressurised Chamber",
        description: "A two-seat chamber supplied with oxygen at a 15 L/min flow, available at two pressure ratings.",
        points: ["Pressure rating of 1.5 ATA or 2.0 ATA.", "Oxygen flow of 15 L/min.", "Two-seat build.", "Optional red-light version."],
      },
      features: [
        { title: "Two Pressure Ratings", description: "Choose 1.5 ATA or 2.0 ATA.", iconName: "Sliders" },
        { title: "Two Seats", description: "Room for two users at once.", iconName: "Users" },
        { title: "Custom Colours", description: "Colours can be customised.", iconName: "Sparkles" },
        { title: "Red-Light Option", description: "A red-light version is available.", iconName: "Sun" },
      ],
      benefits: [
        { title: "Flexible Specification", description: "Two pressure options to match the site.", metric: "1.5 / 2.0 ATA" },
        { title: "15 L/min Oxygen Flow", description: "For two seats.", metric: "15 L/min" },
      ],
    },
    included: ["Oxy 2 chamber (1.5 ATA or 2.0 ATA)", "Oxygen supply system", "Control panel", "Optional red-light version"],
    faqs: [
      { question: "How many seats?", answer: "Two." },
      { question: "What pressure ratings are offered?", answer: "1.5 ATA and 2.0 ATA." },
    ],
    related: ["oxy-1-hyperbaric-oxygen-chamber-single", "hbot-double-cube-chamber", "hbot-single-cube-chamber"],
  }),
};
