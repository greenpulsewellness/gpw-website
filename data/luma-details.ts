import type { ProductDetail, ProductProtocol } from "./products-data";

/**
 * Detail pages for the Luma line (full-body light beds/stands, panels, lamps, masks and Luma Beam devices).
 * Product detail data.
 * Wellness wording only: no treatment claims, no pricing.
 */

const SAFETY_NOTE =
  "Light-based devices are not suitable for everyone. Consult a medical professional before use, especially if you are pregnant, take light-sensitising medication, or have a light-sensitive condition.";

const protocol = (recommendedDuration: string, steps: ProductProtocol["protocolSteps"], prep: string[]): ProductProtocol => ({
  recommendedDuration,
  frequency: "Per your wellness professional's programme",
  preparation: prep,
  protocolSteps: steps,
  contraindications: [SAFETY_NOTE],
});

const bedProtocol = protocol(
  "As advised by your wellness professional",
  [
    { step: "Set up", instruction: "Choose the programme and pulse setting on the control system." },
    { step: "Session", instruction: "Position comfortably and stay relaxed for the programmed time." },
    { step: "Finish", instruction: "Let the unit finish its cycle and wipe down contact surfaces." },
  ],
  ["Check the room has a suitable power supply and ventilation.", "Remove jewellery and follow the operator's guidance on eye protection."],
);

const panelProtocol = (duration: string) =>
  protocol(
    duration,
    [
      { step: "Position", instruction: "Place the device facing the target area at the distance advised by the operator." },
      { step: "Session", instruction: "Run the selected mode for the programmed time." },
      { step: "Finish", instruction: "Switch off and wipe the surface clean." },
    ],
    ["Clean, dry skin, free of products.", "Follow the supplied safety and eye-protection instructions."],
  );

const SPACES = [
  { type: "Wellness & Longevity Centres", description: "A light-therapy station within a recovery menu." },
  { type: "Spas & Clinics", description: "A compact, easy-to-schedule light-based service." },
  { type: "Private Residences", description: "A home option for a personal wellness routine." },
];

type FullBodyInput = {
  id: string;
  name: string;
  model: string;
  subtitle: string;
  tagline: string;
  overview: string[];
  points: string[];
  features: ProductDetail["features"];
  benefits: ProductDetail["benefits"];
  light: [string, string][];
  build: [string, string][];
  included: string[];
  faqs: ProductDetail["faqs"];
  related: string[];
};

/** Full-body Luma line (LT-01 to LT-05), built from the master product sheet. */
const fullBody = (d: FullBodyInput): ProductDetail => ({
  id: d.id,
  subtitle: d.subtitle,
  tagline: d.tagline,
  overview: d.overview,
  mechanismOfAction: {
    heading: "Multi-Wavelength LED Exposure",
    description: `The ${d.name} delivers red and near-infrared light over the body from a measured distance, controlled by the system and a safety timer.`,
    points: d.points,
  },
  features: d.features,
  benefits: d.benefits,
  specGroups: [
    { category: "Light & Power", items: d.light.map(([label, value]) => ({ label, value })) },
    { category: "Build & Control", items: d.build.map(([label, value]) => ({ label, value })) },
  ],
  whatsIncluded: d.included,
  protocol: bedProtocol,
  suitableEnvironments: SPACES,
  faqs: d.faqs,
  relatedProductIds: d.related,
});

export const lumaDetails: Record<string, ProductDetail> = {
  /* ---------------- Full-body ---------------- */

  "led-therapy-full-stand": fullBody({
    id: "led-therapy-full-stand",
    name: "Luma Stand",
    model: "M1 Plus",
    subtitle: "Full-Body LED Light Therapy Stand",
    tagline: "A compact 12,312-LED vertical stand with four wavelengths and simple button control.",
    overview: [
      "The Luma Stand is a vertical full-body light stand for studios, clinics and homes. It carries 12,312 LEDs at 1,500 W and delivers 29.5 mW/cm² across four wavelengths (633, 660, 850 and 940 nm).",
      "Three acrylic control buttons keep operation simple. Wavelengths are not controlled independently, and the unit has no control tablet or Bluetooth audio. Built-in cooling keeps it comfortable to run.",
    ],
    points: ["Four wavelengths: 633, 660, 850 and 940 nm.", "12,312 LEDs at 29.5 mW/cm².", "Three acrylic control buttons.", "Built-in cooling."],
    features: [
      { title: "Simple Button Control", description: "Three acrylic control buttons.", iconName: "Sliders" },
      { title: "Four Wavelengths", description: "633, 660, 850 and 940 nm.", iconName: "Zap" },
      { title: "Cooling", description: "Built-in cooling for comfortable running.", iconName: "Wind" },
      { title: "Compact Stand", description: "1850 × 860 × 860 mm and 38 kg.", iconName: "Maximize" },
    ],
    benefits: [
      { title: "Full-Panel Coverage", description: "12,312 LEDs on a tall vertical panel.", metric: "12,312 LEDs" },
      { title: "Light to Move", description: "38 kg overall weight.", metric: "38 kg" },
    ],
    light: [
      ["LED Count", "12,312 pcs"], ["Power", "1,500 W"], ["Irradiance", "29.5 mW/cm²"],
      ["Wavelengths", "633 + 660 + 850 + 940 nm"], ["Input Voltage", "110 V / 220 V (EU / US / UK / AU plug)"],
    ],
    build: [
      ["Control", "3 acrylic control buttons (no independent wavelength control)"], ["Cooling", "Yes; no tablet or Bluetooth"],
      ["Dimensions", "1850 × 860 × 860 mm"], ["Weight", "38 kg"], ["Colours", "White, Black"],           ],
    included: ["Luma Stand (M1 Plus)", "Power cable"],
    faqs: [
      { question: "Can I control wavelengths separately?", answer: "No. The M1 Plus runs its wavelengths together. For independent control, see the Luma Stand Pro." },
    ],
    related: ["led-therapy-full-stand-2", "led-therapy-full-body-clam-1-m6", "led-therapy-full-body-clam-2-m6l"],
  }),

  "led-therapy-full-stand-2": fullBody({
    id: "led-therapy-full-stand-2",
    name: "Luma Stand Pro",
    model: "M2 Plus",
    subtitle: "Full-Body LED Light Therapy Stand with Independent Wavelength Control",
    tagline: "A 9,600-LED stand with five wavelengths, independent wavelength control and preset protocols.",
    overview: [
      "The Luma Stand Pro is a vertical full-body stand with 9,600 LEDs at 1,500 W, delivering 38.9 mW/cm² across five wavelengths (633, 660, 810, 850 and 940 nm).",
      "Each wavelength can be controlled independently, with 6+1 preset programmes, pulse frequency from 1 to 10,000 Hz and duty cycle from 1 to 100%. Built-in cooling keeps it comfortable to run; it has no control tablet or Bluetooth audio.",
    ],
    points: ["Five wavelengths: 633, 660, 810, 850 and 940 nm.", "Independent wavelength control.", "6+1 presets, 1–10,000 Hz, duty 1–100%.", "9,600 LEDs at 38.9 mW/cm²."],
    features: [
      { title: "Independent Wavelength Control", description: "Set each wavelength separately.", iconName: "Sliders" },
      { title: "Preset Programmes", description: "6+1 presets with adjustable pulse frequency and duty cycle.", iconName: "Zap" },
      { title: "Cooling", description: "Built-in cooling for comfortable running.", iconName: "Wind" },
      { title: "Sturdy Stand", description: "1845 × 880 × 1045 mm and 75 kg.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Flexible Protocols", description: "Pulse 1–10,000 Hz, duty 1–100%.", metric: "6+1 Presets" },
      { title: "Higher Output", description: "38.9 mW/cm² across five wavelengths.", metric: "38.9 mW/cm²" },
    ],
    light: [
      ["LED Count", "9,600 pcs"], ["Power", "1,500 W"], ["Irradiance", "38.9 mW/cm²"],
      ["Wavelengths", "633 + 660 + 810 + 850 + 940 nm"], ["Input Voltage", "110 V / 220 V (EU / US / UK / AU plug)"],
    ],
    build: [
      ["Control", "Independent wavelength control; 6+1 presets; 1–10,000 Hz; duty 1–100%"], ["Cooling", "Yes; no tablet or Bluetooth"],
      ["Dimensions", "1845 × 880 × 1045 mm"], ["Weight", "75 kg"], ["Colours", "White, Black"],           ],
    included: ["Luma Stand Pro (M2 Plus)", "Power cable"],
    faqs: [
      { question: "What is different from the Luma Stand?", answer: "The Stand Pro adds the 810 nm band, independent wavelength control and preset programmes with adjustable pulse and duty cycle." },
    ],
    related: ["led-therapy-full-stand", "led-therapy-full-body-clam-1-m6", "led-therapy-full-body-clam-2-m6l"],
  }),

  "led-therapy-full-body-clam-1-m6": fullBody({
    id: "led-therapy-full-body-clam-1-m6",
    name: "Luma Cocoon",
    model: "M4N Plus",
    subtitle: "Full-Body Clamshell LED Light Therapy Bed",
    tagline: "A 21,600-LED clamshell bed with a control tablet, Bluetooth music and independent wavelength control.",
    overview: [
      "The Luma Cocoon is a horizontal clamshell bed that surrounds the whole body while lying down. It carries 21,600 LEDs at 3,000 W, delivering 61.3 mW/cm² across five wavelengths (633, 660, 810, 850 and 940 nm).",
      "A control tablet sets each wavelength independently, with 6+1 presets, pulse frequency from 1 to 10,000 Hz and duty cycle from 1 to 100%. Bluetooth music and built-in cooling complete the experience.",
    ],
    points: ["Five wavelengths: 633, 660, 810, 850 and 940 nm.", "21,600 LEDs at 61.3 mW/cm².", "Independent wavelength control with 6+1 presets.", "Control tablet and Bluetooth music."],
    features: [
      { title: "Full-Body Clamshell", description: "Lying-down canopy covers the whole body.", iconName: "Layers" },
      { title: "Control Tablet", description: "Independent wavelength control, 6+1 presets, 1–10,000 Hz, duty 1–100%.", iconName: "Smartphone" },
      { title: "Bluetooth Music", description: "Play your own music during a session.", iconName: "Speaker" },
      { title: "Cooling", description: "Built-in cooling for a comfortable cabin.", iconName: "Wind" },
      { title: "Colour Options", description: "White, Black, Pink or Red; custom logo in about 7 days.", iconName: "Sparkles" },
    ],
    benefits: [
      { title: "High Output", description: "3,000 W and 61.3 mW/cm² for full coverage.", metric: "21,600 LEDs" },
    ],
    light: [
      ["LED Count", "21,600 pcs"], ["Power", "3,000 W"], ["Irradiance", "61.3 mW/cm²"],
      ["Wavelengths", "633 + 660 + 810 + 850 + 940 nm"], ["Input Voltage", "110 V / 220 V, 20 A dedicated breaker"],
    ],
    build: [
      ["Control", "Control tablet; independent wavelength control; 6+1 presets; 1–10,000 Hz; duty 1–100%"], ["Audio & Cooling", "Bluetooth music; cooling"],
      ["Dimensions", "1940 × 860 × 820 mm"], ["Weight", "140 kg (max user 150 kg)"], ["Colours", "White, Black, Pink, Red"],           ],
    included: ["Luma Cocoon (M4N Plus) clamshell bed", "Control tablet", "Bluetooth music system", "Power cable"],
    faqs: [
      { question: "What power does it need?", answer: "110 V or 220 V with a 20 A dedicated breaker." },
      { question: "Can the logo be customised?", answer: "Yes, custom logos take about 7 days." },
    ],
    related: ["led-therapy-full-body-clam-2-m6l", "led-therapy-full-stand", "led-therapy-full-body-stand-chamber"],
  }),

  "led-therapy-full-body-clam-2-m6l": fullBody({
    id: "led-therapy-full-body-clam-2-m6l",
    name: "Luma Cocoon Pro",
    model: "M6N Plus",
    subtitle: "Full-Body LED Light Therapy Bed with PEMF",
    tagline: "A 41,600-LED clamshell bed with PEMF, a control tablet and five-wavelength independent control.",
    overview: [
      "The Luma Cocoon Pro is an advanced full-body clamshell bed with 41,600 LEDs at 6,500 W, delivering 104.4 mW/cm² across five wavelengths (633, 660, 810, 850 and 940 nm).",
      "It adds PEMF (1 to 50 Hz, duty 1 to 50%) alongside independent wavelength control, 6+1 presets and pulse frequency from 1 to 10,000 Hz. A control tablet, Bluetooth music and cooling are included.",
    ],
    points: ["Five wavelengths: 633, 660, 810, 850 and 940 nm.", "41,600 LEDs at 104.4 mW/cm².", "PEMF 1–50 Hz, duty 1–50%.", "Independent wavelength control with 6+1 presets."],
    features: [
      { title: "PEMF", description: "Pulsed electromagnetic field, 1–50 Hz with duty 1–50%.", iconName: "Zap" },
      { title: "Control Tablet", description: "Independent wavelength control, 6+1 presets, 1–10,000 Hz, duty 1–100%.", iconName: "Smartphone" },
      { title: "Bluetooth Music", description: "Play your own music during a session.", iconName: "Speaker" },
      { title: "Cooling", description: "Built-in cooling for a comfortable cabin.", iconName: "Wind" },
      { title: "Full-Body Clamshell", description: "Lying-down canopy covers the whole body.", iconName: "Layers" },
    ],
    benefits: [
      { title: "Top Output", description: "6,500 W and 104.4 mW/cm².", metric: "41,600 LEDs" },
    ],
    light: [
      ["LED Count", "41,600 pcs"], ["Power", "6,500 W"], ["Irradiance", "104.4 mW/cm²"],
      ["Wavelengths", "633 + 660 + 810 + 850 + 940 nm"], ["PEMF", "1–50 Hz, duty 1–50%"], ["Input Voltage", "220 V / 380 V, 40 A dedicated breaker"],
    ],
    build: [
      ["Control", "Control tablet; independent wavelength control; 6+1 presets; 1–10,000 Hz; duty 1–100%"], ["Audio & Cooling", "Bluetooth music; cooling"],
      ["Dimensions", "2275 × 1235 × 1125 mm"], ["Weight", "380 kg (max user 350 kg)"], ["Colours", "White, Black"],           ],
    included: ["Luma Cocoon Pro (M6N Plus) bed", "Control tablet", "Bluetooth music system", "Power cable"],
    faqs: [
      { question: "What power does it need?", answer: "220 V or 380 V with a 40 A dedicated breaker." },
      { question: "What is different from the Luma Cocoon?", answer: "The Cocoon Pro adds PEMF and more than double the LEDs and power (41,600 LEDs at 6,500 W)." },
    ],
    related: ["led-therapy-full-body-clam-1-m6", "led-therapy-full-body-stand-chamber", "led-therapy-full-stand-2"],
  }),

  "led-therapy-full-body-stand-chamber": fullBody({
    id: "led-therapy-full-body-stand-chamber",
    name: "Luma Dome",
    model: "M11",
    subtitle: "Walk-In Full-Body LED Light Therapy Chamber",
    tagline: "A vertical walk-in chamber with 48,000 LEDs and five-wavelength independent control.",
    overview: [
      "The Luma Dome is a walk-in vertical chamber with 48,000 LEDs at 6,500 to 7,000 W, delivering 80 mW/cm² across five wavelengths (633, 660, 810, 850 and 940 nm).",
      "Independent wavelength control, 6+1 presets, pulse frequency from 1 to 10,000 Hz and duty cycle from 1 to 100% are set from the control tablet. Bluetooth music and cooling are included.",
    ],
    points: ["Five wavelengths: 633, 660, 810, 850 and 940 nm.", "48,000 LEDs at 80 mW/cm².", "Independent wavelength control with 6+1 presets.", "Control tablet and Bluetooth music."],
    features: [
      { title: "Walk-In Chamber", description: "Stand inside a vertical chamber of light.", iconName: "Maximize" },
      { title: "Control Tablet", description: "Independent wavelength control, 6+1 presets, 1–10,000 Hz, duty 1–100%.", iconName: "Smartphone" },
      { title: "Bluetooth Music", description: "Play your own music during a session.", iconName: "Speaker" },
      { title: "Cooling", description: "Built-in cooling for a comfortable cabin.", iconName: "Wind" },
    ],
    benefits: [
      { title: "Highest LED Count", description: "48,000 LEDs for 360° coverage.", metric: "48,000 LEDs" },
      { title: "Compact Shipping", description: "5 units per 20 ft, 11 per 40 ft container.", metric: "5 / 20 ft" },
    ],
    light: [
      ["LED Count", "48,000 pcs"], ["Power", "6,500–7,000 W"], ["Irradiance", "80 mW/cm²"],
      ["Wavelengths", "633 + 660 + 810 + 850 + 940 nm"], ["Input Voltage", "220 V / 380 V, 60 A dedicated breaker"],
    ],
    build: [
      ["Control", "Control tablet; independent wavelength control; 6+1 presets; 1–10,000 Hz; duty 1–100%"], ["Audio & Cooling", "Bluetooth music; cooling"],
      ["Dimensions (vertical)", "1400 × 1350 × 2330 mm"], ["Weight", "300 kg"], ["Colours", "White, Black"],           ],
    included: ["Luma Dome (M11) chamber", "Control tablet", "Bluetooth music system", "Power cable"],
    faqs: [
      { question: "What power does it need?", answer: "220 V or 380 V with a 60 A dedicated breaker." },
    ],
    related: ["led-therapy-full-body-clam-2-m6l", "led-therapy-full-body-clam-1-m6", "led-therapy-full-stand-2"],
  }),

  /* ---------------- Luma Go portable stands ---------------- */

  "luma-go-portable-red-light-stand": goStand({
    id: "luma-go-portable-red-light-stand",
    size: "500",
    model: "GY-T500",
    leds: "100",
    power: "~100 W",
    dims: "220 × 260 × 60 mm",
    related: ["luma-go-1000-portable-red-light-stand", "luma-go-1500-portable-red-light-stand", "led-stand-gy-t320"],
  }),
  "luma-go-1000-portable-red-light-stand": goStand({
    id: "luma-go-1000-portable-red-light-stand",
    size: "1000",
    model: "GY-T1000",
    leds: "200",
    power: "~200 W",
    dims: "220 × 480 × 60 mm",
    related: ["luma-go-portable-red-light-stand", "luma-go-1500-portable-red-light-stand", "led-stand-gy-t320"],
  }),
  "luma-go-1500-portable-red-light-stand": goStand({
    id: "luma-go-1500-portable-red-light-stand",
    size: "1500",
    model: "GY-T1500",
    leds: "300",
    power: "~300 W",
    dims: "220 × 690 × 60 mm",
    related: ["luma-go-portable-red-light-stand", "luma-go-1000-portable-red-light-stand", "led-stand-gy-t320"],
  }),

  /* ---------------- Tower, Spot, Panel ---------------- */

  "led-stand-gy-t320": {
    id: "led-stand-gy-t320",
    subtitle: "Tall Mobile Red Light Therapy Stand",
    tagline: "A tall vertical tower on rolling wheels with 320 LEDs at 660 nm + 850 nm and preset programmes.",
    overview: [
      "The Luma Tower is a tall vertical stand with a base and rolling wheels for easy movement between rooms. It carries 320 LEDs in a dual 660 nm red and 850 nm near-infrared combination.",
      "Sessions are adjustable from 1 to 60 minutes, with frequency adjustment, multiple modes, a timer and preset programmes. High optical output of 300 mW/cm² suits half-body and full-body sessions.",
    ],
    mechanismOfAction: {
      heading: "Red & Near-Infrared LED Tower",
      description: "A tall LED tower delivers 660 nm and 850 nm light along the body, with frequency and mode control and a built-in timer.",
      points: [
        "320 LEDs at 660 nm + 850 nm.",
        "Optical output of 300 mW/cm².",
        "Working time adjustable from 1 to 60 minutes.",
        "Frequency adjustment, multiple modes and preset programmes.",
      ],
    },
    features: [
      { title: "Rolling Base", description: "Base with wheels for easy mobility.", iconName: "Move" },
      { title: "320 LEDs", description: "Dual 660 nm + 850 nm LED array.", iconName: "Sun" },
      { title: "Preset Programmes", description: "Timer, modes and preset programmes.", iconName: "Sliders" },
      { title: "Frequency Adjustment", description: "Adjustable frequency for different modes.", iconName: "Zap" },
    ],
    benefits: [
      { title: "High Output", description: "300 mW/cm² optical output.", metric: "300 mW/cm²" },
      { title: "Flexible Timing", description: "1 to 60 minutes adjustable.", metric: "1–60 min" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "LED Count", value: "320 pcs" },
          { label: "Wavelengths", value: "660 nm + 850 nm" },
          { label: "Actual Power", value: "~400 W" },
          { label: "Optical Output", value: "300 mW/cm²" },
          { label: "Working Time", value: "1–60 minutes adjustable" },
          { label: "Dimensions", value: "370 × 956 × 64 mm" },
        ],
      },
    ],
    whatsIncluded: ["Luma Tower (GY-T320) with base and wheels", "Power cable", "Controller"],
    protocol: panelProtocol("1 to 60 minutes (adjustable)"),
    suitableEnvironments: SPACES,
    faqs: [
      { question: "How long can a session run?", answer: "Working time is adjustable from 1 to 60 minutes." },
      { question: "Can it be moved?", answer: "Yes, it stands on a base with rolling wheels." },
    ],
    relatedProductIds: ["luma-go-portable-red-light-stand", "led-bracket-panel-mid", "led-lamp-focus"],
  },

  "led-lamp-focus": {
    id: "led-lamp-focus",
    subtitle: "Height-Adjustable Focused Red Light Lamp",
    tagline: "A gooseneck floor lamp with 18 dual-chip LEDs for focused local sessions, adjustable from 73 to 120 cm.",
    overview: [
      "The Luma Spot is a gooseneck floor lamp on an adjustable-height bracket (73 to 120 cm) designed for focused local sessions. It uses 18 dual-chip LEDs with a combined 660 nm red and 850 nm near-infrared output.",
      "Total power output is 54 W, making it a simple, compact option for treatment rooms and homes.",
    ],
    mechanismOfAction: {
      heading: "Focused Dual-Wavelength Lamp",
      description: "A lamp head aims 660 nm red and 850 nm near-infrared LED light at a chosen area, positioned using the height-adjustable stand.",
      points: [
        "18 dual-chip LEDs.",
        "660 nm + 850 nm combination.",
        "Bracket height adjustable from 73 cm to 120 cm.",
        "54 W total power output.",
      ],
    },
    features: [
      { title: "Adjustable Height", description: "Bracket adjusts from 73 to 120 cm.", iconName: "Move" },
      { title: "Dual-Chip LEDs", description: "18 LEDs with 660 nm + 850 nm output.", iconName: "Sun" },
      { title: "Gooseneck Aiming", description: "Flexible head for focused positioning.", iconName: "Target" },
    ],
    benefits: [
      { title: "Compact", description: "Small floor lamp format.", metric: "54 W" },
      { title: "Focused", description: "Aim at one area at a time.", metric: "Local" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "LED Configuration", value: "18 dual-chip LEDs" },
          { label: "Wavelengths", value: "660 nm + 850 nm" },
          { label: "Total Power Output", value: "54 W" },
          { label: "Bracket Height", value: "73–120 cm adjustable" },
        ],
      },
    ],
    whatsIncluded: ["Luma Spot lamp with adjustable bracket stand", "Power adapter"],
    protocol: panelProtocol("As advised by your wellness professional"),
    suitableEnvironments: SPACES,
    faqs: [
      { question: "How high does the stand go?", answer: "The bracket adjusts from 73 to 120 cm." },
      { question: "What wavelengths does it use?", answer: "A combination of 660 nm red and 850 nm near-infrared." },
    ],
    relatedProductIds: ["led-bracket-panel-mid", "led-stand-gy-t320", "luma-go-portable-red-light-stand"],
  },

  "led-bracket-panel-mid": {
    id: "led-bracket-panel-mid",
    subtitle: "Height-Adjustable Red Light Panel on Mobile Stand",
    tagline: "A medium panel with 75 dual-chip LEDs, separate red and infrared control, and 10 Hz / 40 Hz pulse modes.",
    overview: [
      "The Luma Panel is a medium treatment panel mounted on a mobile floor stand whose height adjusts from 60 to 120 cm. It uses 75 dual-chip LEDs with 660 nm red and 850 nm near-infrared light.",
      "Red and infrared are controlled separately, and 10 Hz and 40 Hz pulsed-light modes are included. Total power output is 75 W.",
    ],
    mechanismOfAction: {
      heading: "Separately Controlled Red & Infrared Panel",
      description: "A medium LED panel lets you switch red and infrared independently and choose between continuous and pulsed light.",
      points: [
        "75 dual-chip LEDs at 660 nm + 850 nm.",
        "Red and infrared controlled separately.",
        "10 Hz and 40 Hz pulsed-light modes.",
        "Stand height adjustable from 60 to 120 cm.",
      ],
    },
    features: [
      { title: "Separate Red / Infrared Control", description: "Switch each wavelength on its own.", iconName: "Sliders" },
      { title: "Pulse Modes", description: "10 Hz and 40 Hz pulsed light.", iconName: "Zap" },
      { title: "Mobile Stand", description: "Height adjustable from 60 to 120 cm.", iconName: "Move" },
    ],
    benefits: [
      { title: "Mid-Size Coverage", description: "75 LEDs across a medium panel.", metric: "75 LEDs" },
      { title: "Flexible Control", description: "Independent wavelengths and pulse modes.", metric: "10 / 40 Hz" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "LED Configuration", value: "75 dual-chip LEDs" },
          { label: "Wavelengths", value: "660 nm + 850 nm" },
          { label: "Total Power Output", value: "75 W" },
          { label: "Modes", value: "Separate red / infrared control; 10 Hz and 40 Hz pulsed light" },
          { label: "Bracket Height", value: "60–120 cm adjustable" },
        ],
      },
    ],
    whatsIncluded: ["Luma Panel with mobile floor stand", "Power adapter"],
    protocol: panelProtocol("As advised by your wellness professional"),
    suitableEnvironments: SPACES,
    faqs: [
      { question: "Can red and infrared be used separately?", answer: "Yes, each is controlled separately." },
      { question: "Does it pulse?", answer: "Yes, 10 Hz and 40 Hz pulsed-light modes are included." },
    ],
    relatedProductIds: ["led-lamp-focus", "led-stand-gy-t320", "luma-go-portable-red-light-stand"],
  },

  /* ---------------- Luma Beam (laser) ---------------- */

  "led-handheld-gy-eust01": {
    id: "led-handheld-gy-eust01",
    subtitle: "Handheld 4-in-1 Laser, TENS & Ultrasound Device",
    tagline: "A rechargeable handheld that combines TENS, a 650 nm red laser, an 808 nm infrared laser and 1 MHz ultrasound.",
    overview: [
      "The Luma Beam Quad is an ergonomic handheld device that brings four modalities into one unit: TENS, a 650 nm red laser, an 808 nm infrared laser and 1 MHz ultrasound.",
      "It is powered by 100–240 V AC (DC 5 V/3 A) charging and a built-in 1,850 mAh rechargeable battery, with a 5 W power output and a 4 cm² red-light effective area.",
      "This is a laser device. Follow the supplied safety instructions and use only as directed by a qualified professional.",
    ],
    mechanismOfAction: {
      heading: "Four Modalities in One Handheld",
      description: "A single handheld offers TENS, red laser, infrared laser and ultrasound, so an operator can choose the mode for the session.",
      points: [
        "TENS electrical stimulation.",
        "650 nm red laser and 808 nm infrared laser.",
        "1 MHz ± 10% ultrasound.",
        "Built-in 1,850 mAh rechargeable battery.",
      ],
    },
    features: [
      { title: "4-in-1 Design", description: "TENS, red laser, infrared laser and ultrasound in one device.", iconName: "Layers" },
      { title: "Rechargeable", description: "Built-in 1,850 mAh battery, DC 5 V/3 A charging.", iconName: "BatteryCharging" },
      { title: "Ergonomic Handheld", description: "Designed for comfortable operation.", iconName: "Target" },
    ],
    benefits: [
      { title: "One Device, Four Modes", description: "Reduces the equipment needed on a trolley.", metric: "4-in-1" },
      { title: "Cordless", description: "Rechargeable for use around the room.", metric: "1,850 mAh" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Modalities", value: "TENS + 650 nm red laser + 808 nm infrared laser + 1 MHz ultrasound" },
          { label: "Ultrasound Frequency", value: "1 MHz ± 10%" },
          { label: "Red Light Effective Area", value: "4 cm² (RBN < 8)" },
          { label: "Power Output", value: "5 W" },
          { label: "Power Supply", value: "100–240 V AC (50/60 Hz), DC 5 V/3 A" },
          { label: "Battery", value: "Built-in 1,850 mAh rechargeable" },
        ],
      },
    ],
    whatsIncluded: ["Luma Beam Quad handheld device", "Charging adapter"],
    protocol: protocol(
      "As advised by a qualified professional",
      [
        { step: "Prepare", instruction: "Read the supplied safety instructions and select the mode." },
        { step: "Use", instruction: "Apply as directed by a qualified professional." },
        { step: "Finish", instruction: "Switch off, clean the head and recharge." },
      ],
      ["Laser device: follow the supplied eye-safety guidance.", "Intended for use by trained operators."],
    ),
    suitableEnvironments: [
      { type: "Physio & Chiro Clinics", description: "A compact multi-mode handheld for the treatment room." },
      { type: "Wellness Centres", description: "A portable add-on service." },
    ],
    faqs: [
      { question: "What does 4-in-1 mean?", answer: "TENS, a 650 nm red laser, an 808 nm infrared laser and 1 MHz ultrasound in one handheld." },
      { question: "Is it rechargeable?", answer: "Yes, it has a built-in 1,850 mAh battery." },
    ],
    relatedProductIds: ["led-handheld-gy-hl-001", "led-cap-gy-hgci", "led-lamp-focus"],
  },

  "led-handheld-gy-hl-001": {
    id: "led-handheld-gy-hl-001",
    subtitle: "Handheld Red & Infrared Laser Wand",
    tagline: "A handheld wand with 9 red 650 nm and 4 infrared 808 nm laser diodes, continuous and pulsed modes.",
    overview: [
      "The Luma Beam Wand is a handheld laser wand with nine 650 nm red laser diodes and four 808 nm infrared laser diodes.",
      "It offers continuous-wave and pulsed working modes, accepts 100–240 V AC charging and has a built-in 1,500 mAh rechargeable battery.",
      "This is a laser device. Follow the supplied safety instructions and use only as directed by a qualified professional.",
    ],
    mechanismOfAction: {
      heading: "Red & Infrared Laser Diode Wand",
      description: "A handheld wand combines red and infrared laser diodes and lets the operator choose between continuous and pulsed output.",
      points: [
        "9 diodes at 650 nm (red) and 4 diodes at 808 nm (infrared).",
        "Continuous-wave and pulsed modes.",
        "100–240 V AC input.",
        "Built-in 1,500 mAh rechargeable battery.",
      ],
    },
    features: [
      { title: "Dual-Wavelength Laser", description: "650 nm red and 808 nm infrared diodes.", iconName: "Zap" },
      { title: "Two Working Modes", description: "Continuous wave and pulsed.", iconName: "Sliders" },
      { title: "Rechargeable", description: "Built-in 1,500 mAh battery.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "13 Diodes", description: "9 red and 4 infrared laser diodes.", metric: "9 + 4" },
      { title: "Portable", description: "Handheld and cordless.", metric: "1,500 mAh" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Laser Diodes", value: "9 × 650 nm red + 4 × 808 nm infrared" },
          { label: "Working Modes", value: "Continuous wave and pulsed" },
          { label: "Power Input", value: "100–240 V AC" },
          { label: "Battery", value: "Built-in 1,500 mAh rechargeable" },
        ],
      },
    ],
    whatsIncluded: ["Luma Beam Wand handheld device", "Charging adapter"],
    protocol: protocol(
      "As advised by a qualified professional",
      [
        { step: "Prepare", instruction: "Read the supplied safety instructions and pick the mode." },
        { step: "Use", instruction: "Apply as directed by a qualified professional." },
        { step: "Finish", instruction: "Switch off, clean the head and recharge." },
      ],
      ["Laser device: follow the supplied eye-safety guidance.", "Intended for use by trained operators."],
    ),
    suitableEnvironments: [
      { type: "Physio & Chiro Clinics", description: "A handheld laser wand for the treatment room." },
      { type: "Wellness Centres", description: "A portable add-on service." },
    ],
    faqs: [
      { question: "What wavelengths does it use?", answer: "650 nm red and 808 nm infrared laser diodes." },
      { question: "Does it pulse?", answer: "Yes, it offers continuous-wave and pulsed modes." },
    ],
    relatedProductIds: ["led-handheld-gy-eust01", "led-cap-gy-hgci", "led-lamp-focus"],
  },

  "led-cap-gy-hgci": {
    id: "led-cap-gy-hgci",
    subtitle: "Wearable Red Laser Cap",
    tagline: "A wearable cap with 200 laser diodes at 650 nm, designed for hands-free scalp sessions.",
    overview: [
      "The Luma Beam Crown is a wearable cap carrying 200 laser diodes at 650 nm, with a total working power of 1 W for the whole unit.",
      "Integrated head sensors are built into the cap, and the unit can run from a power bank for cordless use.",
      "This is a laser device (laser diodes, not LEDs). Follow the supplied safety instructions and use only as directed.",
    ],
    mechanismOfAction: {
      heading: "Wearable 650 nm Laser Cap",
      description: "The cap places an array of red laser diodes around the scalp so the user can stay hands-free during a session.",
      points: [
        "200 laser diodes at 650 nm.",
        "Total working power of 1 W.",
        "Integrated wearable head sensors.",
        "Supports power-bank operation.",
      ],
    },
    features: [
      { title: "200 Laser Diodes", description: "650 nm laser diodes around the cap.", iconName: "Zap" },
      { title: "Hands-Free", description: "Worn on the head so hands stay free.", iconName: "Users" },
      { title: "Power-Bank Ready", description: "Runs from a power bank.", iconName: "BatteryCharging" },
      { title: "Head Sensors", description: "Integrated wearable head sensors.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Low Power Draw", description: "1 W whole-unit working power.", metric: "1 W" },
      { title: "Wearable", description: "Stay seated and relaxed.", metric: "Hands-Free" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Light Source", value: "200 laser diodes" },
          { label: "Wavelength", value: "650 nm laser" },
          { label: "Total Working Power", value: "1 W (whole unit)" },
          { label: "Sensors / Power", value: "Integrated wearable head sensors; power-bank operation supported" },
        ],
      },
    ],
    whatsIncluded: ["Luma Beam Crown wearable laser cap", "Controller / cable"],
    protocol: protocol(
      "As advised by a qualified professional",
      [
        { step: "Prepare", instruction: "Read the supplied safety instructions." },
        { step: "Wear", instruction: "Fit the cap and start the programme." },
        { step: "Finish", instruction: "Remove the cap and wipe it down." },
      ],
      ["Laser device: follow the supplied eye-safety guidance."],
    ),
    suitableEnvironments: [
      { type: "Wellness & Beauty Centres", description: "A wearable add-on for scalp-care menus." },
      { type: "Private Residences", description: "A personal-care device for home routines." },
    ],
    faqs: [
      { question: "Does it use LEDs or lasers?", answer: "Laser diodes: 200 diodes at 650 nm." },
      { question: "Can it run on a power bank?", answer: "Yes." },
    ],
    relatedProductIds: ["led-handheld-gy-hl-001", "led-handheld-gy-eust01", "led-mask-gy-009"],
  },

  /* ---------------- Masks ---------------- */

  "led-mask-gy-009": {
    id: "led-mask-gy-009",
    subtitle: "7-Colour LED Face & Neck Mask",
    tagline: "A flexible silicone face mask with a matching neck piece: 105 + 114 LEDs in seven light modes.",
    overview: [
      "The Luma Mask Duo is a flexible face mask with a dedicated matching neck piece, with 105 LEDs on the face and 114 on the neck (219 in total).",
      "It is made from wipe-clean soft silica gel, offers seven light-colour modes, and works with mobile power banks for cordless use.",
    ],
    mechanismOfAction: {
      heading: "Seven-Colour LED Mask",
      description: "A soft silicone mask and neck piece put LEDs close to the skin, with seven colour modes selected from the controller.",
      points: [
        "105 LEDs on the face mask and 114 on the neck piece.",
        "Seven colour modes.",
        "Wipe-clean soft silica gel.",
        "Compatible with power banks.",
      ],
    },
    features: [
      { title: "Face + Neck", description: "Matching neck piece extends coverage.", iconName: "Layers" },
      { title: "7 Colour Modes", description: "Select the colour for each session.", iconName: "Sun" },
      { title: "Soft Silicone", description: "Wipe-clean soft silica gel.", iconName: "Sparkles" },
      { title: "Cordless Use", description: "Works with mobile power banks.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "219 LEDs", description: "Full face and neck coverage.", metric: "219 LEDs" },
      { title: "Flexible Fit", description: "Soft material follows the face.", metric: "Silicone" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "LED Count", value: "105 (face) + 114 (neck) = 219" },
          { label: "Spectrum", value: "7 colour modes" },
          { label: "Material", value: "Wipe-clean soft silica gel" },
          { label: "Power", value: "Compatible with mobile power banks" },
        ],
      },
    ],
    whatsIncluded: ["Luma Mask Duo face mask", "Neck piece", "Controller and cable"],
    protocol: panelProtocol("As advised in the user guide"),
    suitableEnvironments: [
      { type: "Spas & Beauty Clinics", description: "A treatment add-on for skin-care services." },
      { type: "Private Residences", description: "A personal skin-care routine device." },
    ],
    faqs: [
      { question: "Is a neck piece included?", answer: "Yes. The mask comes with a dedicated neck piece (114 LEDs)." },
      { question: "Can it be used cordless?", answer: "Yes, with a mobile power bank." },
    ],
    relatedProductIds: ["led-mask-gy-bmh", "led-mask-gy-106a", "led-cap-gy-hgci"],
  },

  "led-mask-gy-bmh": {
    id: "led-mask-gy-bmh",
    subtitle: "7-Mode Hard-Shell LED Face Mask",
    tagline: "A rigid ergonomic mask with 50 high-output LEDs and seven adjustable modes.",
    overview: [
      "The Luma Shell is a rigid, ergonomic face mask with 50 high-output LED beads and seven adjustable light modes.",
      "A durable ABS hard shell is fitted with an organic silicone ring around the eye sockets for light protection and comfort.",
    ],
    mechanismOfAction: {
      heading: "Hard-Shell LED Mask",
      description: "A rigid ABS shell holds the LEDs at a fixed distance from the face, with an eye-socket silicone ring to keep light out of the eyes.",
      points: [
        "50 high-output LED beads.",
        "Seven adjustable modes.",
        "Durable ABS hard shell.",
        "Organic silicone ring around the eye sockets.",
      ],
    },
    features: [
      { title: "Hard Shell", description: "Durable ABS casing.", iconName: "ShieldCheck" },
      { title: "7 Modes", description: "Seven adjustable light modes.", iconName: "Sliders" },
      { title: "Eye Comfort", description: "Silicone ring for light protection and comfort.", iconName: "Eye" },
    ],
    benefits: [
      { title: "50 LEDs", description: "High-output LED beads.", metric: "50 LEDs" },
      { title: "Durable", description: "Rigid casing.", metric: "ABS" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "LED Count", value: "50 high-output LED beads" },
          { label: "Modes", value: "7 adjustable light modes" },
          { label: "Construction", value: "ABS hard shell with organic silicone eye-socket ring" },
        ],
      },
    ],
    whatsIncluded: ["Luma Shell face mask", "Controller and cable"],
    protocol: panelProtocol("As advised in the user guide"),
    suitableEnvironments: [
      { type: "Spas & Beauty Clinics", description: "A treatment add-on for skin-care services." },
      { type: "Private Residences", description: "A personal skin-care routine device." },
    ],
    faqs: [
      { question: "How many modes?", answer: "Seven adjustable light modes." },
      { question: "How are the eyes protected?", answer: "An organic silicone ring surrounds the eye sockets for light protection and comfort." },
    ],
    relatedProductIds: ["led-mask-gy-106a", "led-mask-gy-009", "led-cap-gy-hgci"],
  },

  "led-mask-gy-106a": {
    id: "led-mask-gy-106a",
    subtitle: "Multi-Wavelength Hard-Shell LED Face Mask",
    tagline: "A rechargeable hard-shell mask with 78 LEDs, seven modes and wavelengths from 390 to 630 nm plus white light.",
    overview: [
      "The Luma Shell 2 is an advanced hard-shell face mask with 78 LED beads and seven adjustable spectrum modes.",
      "Wavelengths include 390 nm, 470 nm (blue), 490 nm (cyan), 520 nm (green), 590 nm (yellow), 630 nm (red) and a white-light mode. It has an 800 mAh built-in rechargeable battery and a 5 V / 1 A input.",
    ],
    mechanismOfAction: {
      heading: "Multi-Wavelength LED Mask",
      description: "A hard-shell mask offers a wide spread of wavelengths so an operator or user can select the mode for the routine.",
      points: [
        "78 LED beads.",
        "390, 470, 490, 520, 590, 630 nm and white light.",
        "Seven adjustable spectrum modes.",
        "800 mAh rechargeable battery, 5 V / 1 A input.",
      ],
    },
    features: [
      { title: "Wide Spectrum", description: "Six specific wavelengths plus white light.", iconName: "Sun" },
      { title: "7 Modes", description: "Seven adjustable spectrum modes.", iconName: "Sliders" },
      { title: "Rechargeable", description: "800 mAh built-in battery.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "78 LEDs", description: "Even coverage across the face.", metric: "78 LEDs" },
      { title: "Cordless", description: "Rechargeable for freedom of movement.", metric: "800 mAh" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "LED Count", value: "78 LED beads" },
          { label: "Wavelengths", value: "390 nm, 470 nm (blue), 490 nm (cyan), 520 nm (green), 590 nm (yellow), 630 nm (red), white light" },
          { label: "Modes", value: "7 adjustable spectrum modes" },
          { label: "Battery / Input", value: "800 mAh built-in rechargeable; 5 V / 1 A" },
        ],
      },
    ],
    whatsIncluded: ["Luma Shell 2 face mask", "USB charging cable"],
    protocol: panelProtocol("As advised in the user guide"),
    suitableEnvironments: [
      { type: "Spas & Beauty Clinics", description: "A treatment add-on for skin-care services." },
      { type: "Private Residences", description: "A personal skin-care routine device." },
    ],
    faqs: [
      { question: "What wavelengths does it offer?", answer: "390, 470, 490, 520, 590 and 630 nm, plus a white-light mode." },
      { question: "Is it rechargeable?", answer: "Yes, with an 800 mAh built-in battery and 5 V / 1 A input." },
    ],
    relatedProductIds: ["led-mask-gy-bmh", "led-mask-gy-009", "led-cap-gy-hgci"],
  },
};

function goStand(o: { id: string; size: string; model: string; leds: string; power: string; dims: string; related: string[] }): ProductDetail {
  return {
    id: o.id,
    subtitle: `Portable Red Light Therapy Stand, Size ${o.size}`,
    tagline: `A portable ${o.leds}-LED panel stand at 660 nm + 850 nm, with 1 to 20 minute sessions.`,
    overview: [
      `The Luma Go ${o.size} is a portable red-light panel stand with ${o.leds} LEDs combining 660 nm red and 850 nm near-infrared light. Dimensions are ${o.dims}.`,
      "It comes in a switch version or an intelligent version, with a working time of 1 to 20 minutes. Optical power is 168–189 mW/cm².",
      "The Luma Go range has three sizes: 500, 1000 and 1500.",
    ],
    mechanismOfAction: {
      heading: "Portable Red & Near-Infrared Panel",
      description: "A compact LED panel delivers 660 nm red and 850 nm near-infrared light to the area of interest from a stand.",
      points: [
        `${o.leds} LEDs at 660 nm + 850 nm.`,
        "Optical power of 168–189 mW/cm².",
        "Working time of 1 to 20 minutes.",
        "Switch version or intelligent version.",
      ],
    },
    features: [
      { title: "Portable", description: "Compact stand-mounted panel.", iconName: "Move" },
      { title: "Dual Wavelength", description: "660 nm red and 850 nm near-infrared.", iconName: "Sun" },
      { title: "Two Control Options", description: "Switch version or intelligent version.", iconName: "Sliders" },
      { title: "Three Sizes", description: "Available as 500, 1000 and 1500.", iconName: "Maximize" },
    ],
    benefits: [
      { title: "Right-Sized", description: `${o.leds} LEDs at ${o.power}.`, metric: `${o.leds} LEDs` },
      { title: "Short Sessions", description: "1 to 20 minute working time.", metric: "1–20 min" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Model", value: o.model },
          { label: "LED Count", value: `${o.leds} pcs` },
          { label: "Wavelengths", value: "660 nm (red) + 850 nm (near-infrared)" },
          { label: "Actual Power", value: o.power },
          { label: "Optical Power", value: "168–189 mW/cm²" },
          { label: "Working Time", value: "1–20 minutes" },
          { label: "Control", value: "Switch version or intelligent version" },
          { label: "Dimensions", value: o.dims },
        ],
      },
    ],
    whatsIncluded: [`Luma Go ${o.size} panel with stand`, "Power adapter"],
    protocol: panelProtocol("1 to 20 minutes"),
    suitableEnvironments: SPACES,
    faqs: [
      { question: "How long is a session?", answer: "The working time is 1 to 20 minutes." },
      { question: "What sizes are in the range?", answer: "Luma Go 500, 1000 and 1500." },
    ],
    relatedProductIds: o.related,
  };
}
