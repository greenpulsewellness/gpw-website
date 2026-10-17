import type { ProductDetail, ProductProtocol } from "./products-data";

/**
 * Detail pages for the Luma line (full-body light beds/stands, panels, lamps, masks and Luma Beam devices).
 * Source: Merican red-light brochure (LT-*) and "LED SMALL ITEMS hot-sale products" catalog (LS-*).
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
    ["Clean, dry skin, free of products.", "Follow the manufacturer's safety and eye-protection instructions."],
  );

const SPACES = [
  { type: "Wellness & Longevity Centres", description: "A light-therapy station within a recovery menu." },
  { type: "Spas & Clinics", description: "A compact, easy-to-schedule light-based service." },
  { type: "Private Residences", description: "A home option for a personal wellness routine." },
];

export const lumaDetails: Record<string, ProductDetail> = {
  /* ---------------- Full-body (Merican) ---------------- */

  "led-therapy-full-stand": {
    id: "led-therapy-full-stand",
    subtitle: "Mobile Full-Body LED Light Therapy Stand (Catalog Model: M1)",
    tagline: "Space-saving footprint, fully adjustable as desired: a 12,312-LED vertical stand on caster wheels with touch control.",
    overview: [
      "The Luma Stand 1 (Catalog Model M1) is a mobile vertical light panel for full-body sessions in commercial or household spaces. Its space-saving footprint and caster wheels make it easy to store and move.",
      "It uses 12,312 Taiwan Epistar LEDs at 1500 W, delivering 295 W/m² across five wavelengths (633, 660, 810, 850 and 940 nm; customisable). Angles adjust for multi-position use, and a self-locking stability system keeps the stand steady.",
      "An LCD touch interface and smart safety timer keep operation simple.",
    ],
    mechanismOfAction: {
      heading: "Multi-Wavelength LED Panel Exposure",
      description: "A large vertical LED array delivers red and near-infrared wavelengths over the body from a measured distance, controlled by touch and a safety timer.",
      points: [
        "Five wavelengths: 633, 660, 810, 850 and 940 nm (customisable).",
        "12,312 Taiwan Epistar LEDs at 295 W/m² irradiance.",
        "Adjustable angles allow multi-position sessions.",
        "Smart safety timer ends the session automatically.",
      ],
    },
    features: [
      { title: "LCD Touch Control", description: "Digital touch interface for simple operation.", iconName: "Monitor" },
      { title: "Adjustable Angles", description: "Position the panel for multi-position treatment.", iconName: "Move" },
      { title: "Self-Locking Stability", description: "Stability system holds the stand in place.", iconName: "ShieldCheck" },
      { title: "Smart Safety Timer", description: "Timed sessions end automatically.", iconName: "Sliders" },
      { title: "Compact & Mobile", description: "Caster wheels and a small footprint for easy storage.", iconName: "Maximize" },
    ],
    benefits: [
      { title: "Full-Panel Coverage", description: "12,312 LEDs across a 1950 mm tall panel.", metric: "12,312 LEDs" },
      { title: "Easy to Move", description: "Caster wheels and 38 kg weight make repositioning simple.", metric: "38 kg" },
    ],
    specGroups: [
      {
        category: "Light & Power",
        items: [
          { label: "Light Source", value: "Taiwan Epistar LED" },
          { label: "LED Count", value: "12,312 pcs" },
          { label: "Power", value: "1500 W" },
          { label: "Irradiance", value: "295 W/m²" },
          { label: "Wavelengths", value: "633 + 660 + 810 + 850 + 940 nm (customisable)" },
          { label: "Input Voltage", value: "110 V / 220 V" },
        ],
      },
      {
        category: "Build & Control",
        items: [
          { label: "Control System", value: "Digital touch system (LCD)" },
          { label: "Dimensions", value: "1950 × 860 × 860 mm" },
          { label: "Weight", value: "38 kg" },
          { label: "Use", value: "Commercial and household" },
        ],
      },
    ],
    whatsIncluded: ["Luma Stand 1 (M1) with caster wheels", "LCD touch control", "Power cable"],
    protocol: bedProtocol,
    suitableEnvironments: SPACES,
    faqs: [
      { question: "Can I customise the wavelengths?", answer: "Yes. The standard set is 633, 660, 810, 850 and 940 nm, and the wavelengths can be customised." },
      { question: "Is it suitable for home use?", answer: "Yes. It is listed for both commercial and household use." },
    ],
    relatedProductIds: ["led-therapy-full-stand-2", "led-therapy-full-body-clam-1-m6", "led-therapy-full-body-clam-2-m6l"],
  },

  "led-therapy-full-stand-2": {
    id: "led-therapy-full-stand-2",
    subtitle: "Motorized Full-Body LED Light Therapy Stand (Catalog Model: M2)",
    tagline: "Lightweight and agile 360° private light-therapy wellness, with an automatic lift for precise height adjustment.",
    overview: [
      "The Luma Stand 2 (Catalog Model M2) is a motorized vertical stand with automatic lifting so the panel height can be set precisely. Caster wheels and flexible angle adjustment make it easy to position.",
      "Fresh air circulation and high-efficiency cooling keep the unit comfortable to run. It is controlled with a digital touch system or an IoT management system with pulse frequency modulation, and can also be driven by wireless remote.",
      "It is offered in two configurations (4,800 or 9,600 LEDs; 1000 W or 1500 W) across five wavelengths.",
    ],
    mechanismOfAction: {
      heading: "Height-Adjustable Multi-Wavelength LED Panel",
      description: "A motorized stand moves the LED panel to the desired height, while IoT control sets pulse frequency and programmes.",
      points: [
        "Five wavelengths: 633, 660, 810, 850 and 940 nm (customisable).",
        "Two configurations: 4,800 or 9,600 Taiwan Epistar LEDs.",
        "Automatic motorized lift for precise height.",
        "Pulse frequency modulation through the IoT management system.",
      ],
    },
    features: [
      { title: "Automatic Lifting", description: "Motorized height adjustment for precise positioning.", iconName: "Move" },
      { title: "Cooling & Fresh Air", description: "Air circulation and integrated high-efficiency cooling.", iconName: "Wind" },
      { title: "Dual Control", description: "Digital touch system plus IoT management with pulse frequency modulation.", iconName: "Smartphone" },
      { title: "Wireless Remote", description: "Wireless remote control capability.", iconName: "Sliders" },
      { title: "Flexible Angles", description: "Adjustable angles and caster wheels for easy positioning.", iconName: "Maximize" },
    ],
    benefits: [
      { title: "Precise Height", description: "Motorized lift sets the panel exactly where needed.", metric: "Auto Lift" },
      { title: "Two Power Options", description: "Choose 1000 W or 1500 W.", metric: "1000 / 1500 W" },
    ],
    specGroups: [
      {
        category: "Light & Power (two configurations)",
        items: [
          { label: "Light Source", value: "Taiwan Epistar LED" },
          { label: "LED Count", value: "4,800 / 9,600 pcs" },
          { label: "Power", value: "1000 W / 1500 W" },
          { label: "Irradiance", value: "288 / 389 W/m²" },
          { label: "Wavelengths", value: "633 + 660 + 810 + 850 + 940 nm (customisable)" },
          { label: "Input Voltage", value: "110 V / 220 V" },
        ],
      },
      {
        category: "Build & Control",
        items: [
          { label: "Control", value: "Digital touch system and IoT management system (pulse frequency modulation); wireless remote" },
          { label: "Dimensions", value: "1845 × 880 × 1045 mm" },
          { label: "Weight", value: "75 kg" },
          { label: "Use", value: "Commercial and household" },
        ],
      },
    ],
    whatsIncluded: ["Luma Stand 2 (M2) with motorized lift and caster wheels", "Wireless remote", "Power cable"],
    protocol: bedProtocol,
    suitableEnvironments: SPACES,
    faqs: [
      { question: "What is the difference between the two configurations?", answer: "One uses 4,800 LEDs at 1000 W (288 W/m²) and the other 9,600 LEDs at 1500 W (389 W/m²)." },
      { question: "Can it be controlled remotely?", answer: "Yes, by wireless remote and through the IoT management system." },
    ],
    relatedProductIds: ["led-therapy-full-stand", "led-therapy-full-body-clam-1-m6", "led-therapy-full-body-clam-2-m6l"],
  },

  "led-therapy-full-body-clam-1-m6": {
    id: "led-therapy-full-body-clam-1-m6",
    subtitle: "Full-Body Clamshell LED Light Therapy Bed (Catalog Model: M4)",
    tagline: "Timeless fashion, revitalized renewal: a classic two-piece clamshell bed with surround sound and IoT pulse control.",
    overview: [
      "The Luma Cocoon 1 (Catalog Model M4) is a classic two-piece horizontal clamshell bed that surrounds the whole body while lying down. European-style structural stability supports a premium, quiet experience.",
      "A fresh air circulation system with silent thermal dissipation and intelligent temperature sensing keep the cabin comfortable. A Bluetooth surround-sound system and IoT wireless management system with pulse modulation complete the experience.",
      "It is offered in two configurations: 11,616 LEDs at 1500 W or 28,512 LEDs at 3000 W.",
    ],
    mechanismOfAction: {
      heading: "Enclosed Full-Body LED Exposure",
      description: "Top and bottom LED shells deliver multi-wavelength light around the whole body, with cabin temperature sensed and managed automatically.",
      points: [
        "Four wavelengths: 633, 660, 850 and 940 nm (customisable).",
        "11,616 or 28,512 Taiwan Epistar LEDs depending on configuration.",
        "Intelligent temperature sensing and control.",
        "IoT management with pulse modulation.",
      ],
    },
    features: [
      { title: "Full-Body Clamshell", description: "Lying-down canopy covers the whole body.", iconName: "Layers" },
      { title: "Silent Cooling", description: "Fresh air circulation with silent thermal dissipation.", iconName: "Wind" },
      { title: "Surround Sound", description: "Bluetooth surround-sound system.", iconName: "Speaker" },
      { title: "Smart Temperature Control", description: "Intelligent temperature sensing and control.", iconName: "ThermometerSnowflake" },
      { title: "IoT Management", description: "Wireless IoT system with pulse modulation.", iconName: "Smartphone" },
      { title: "Stable Build", description: "European-style structural stability.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Two Power Levels", description: "1500 W or 3000 W configurations.", metric: "1500 / 3000 W" },
      { title: "High LED Count", description: "Up to 28,512 LEDs for full coverage.", metric: "Up to 28,512" },
    ],
    specGroups: [
      {
        category: "Light & Power (two configurations)",
        items: [
          { label: "Light Source", value: "Taiwan Epistar LED" },
          { label: "LED Count", value: "11,616 / 28,512 pcs" },
          { label: "Power", value: "1500 W / 3000 W" },
          { label: "Irradiance", value: "220 / 529 W/m²" },
          { label: "Wavelengths", value: "633 + 660 + 850 + 940 nm (customisable)" },
          { label: "Input Voltage", value: "110 V / 220 V" },
        ],
      },
      {
        category: "Build",
        items: [
          { label: "Dimensions", value: "1935 × 855 × 990 mm" },
          { label: "Weight", value: "110 kg" },
          { label: "Use", value: "Commercial and household" },
        ],
      },
    ],
    whatsIncluded: ["Luma Cocoon 1 (M4) two-piece clamshell bed", "Bluetooth surround-sound system", "IoT wireless management system", "Power cable"],
    protocol: bedProtocol,
    suitableEnvironments: SPACES,
    faqs: [
      { question: "What configurations are available?", answer: "11,616 LEDs at 1500 W (220 W/m²) or 28,512 LEDs at 3000 W (529 W/m²)." },
      { question: "Does it have audio?", answer: "Yes, a Bluetooth surround-sound system." },
    ],
    relatedProductIds: ["led-therapy-full-body-clam-2-m6l", "led-therapy-full-stand", "led-therapy-full-stand-2"],
  },

  "led-therapy-full-body-clam-2-m6l": {
    id: "led-therapy-full-body-clam-2-m6l",
    subtitle: "Moonlight Capsule Full-Body LED Light Therapy Bed (Catalog Model: MMB)",
    tagline: "A moonlight therapy capsule, born under gentle light: a crescent dome cabin with five-wavelength coverage.",
    overview: [
      "The Luma Cocoon 2 Advanced (Catalog Model MMB, Moonlight Capsule) is a curved dome capsule bed in a high-end crescent cabin design with dynamic ambient glow.",
      "It covers five wavelengths (633, 660, 810, 850 and 940 nm), including the 810 nm band, with high-efficiency thermal dissipation and intelligent cabin temperature control. Environmental surround sound with Bluetooth and a wireless IoT smart control system with pulse frequency modulation round out the experience.",
      "The spacious interior has skin-friendly contact surfaces. Two configurations are offered: 13,440 LEDs at 2500 W or 26,880 LEDs at 4500 W.",
    ],
    mechanismOfAction: {
      heading: "Dome Capsule Full-Spectrum LED Exposure",
      description: "A curved capsule surrounds the body with five-wavelength LED light, while the system manages cabin temperature and pulse settings.",
      points: [
        "Five wavelengths: 633, 660, 810, 850 and 940 nm.",
        "13,440 or 26,880 Taiwan Epistar LEDs depending on configuration.",
        "Intelligent cabin temperature control with high-efficiency cooling.",
        "IoT management with pulse frequency modulation.",
      ],
    },
    features: [
      { title: "Crescent Dome Cabin", description: "High-end design with dynamic ambient glow.", iconName: "Sun" },
      { title: "Five-Wavelength Coverage", description: "Full spectrum including the 810 nm band.", iconName: "Zap" },
      { title: "Thermal Management", description: "Efficient heat dissipation and intelligent temperature control.", iconName: "ThermometerSnowflake" },
      { title: "Surround Sound", description: "Environmental audio with Bluetooth connectivity.", iconName: "Speaker" },
      { title: "Wireless IoT Control", description: "Smart control with pulse frequency modulation.", iconName: "Smartphone" },
      { title: "Skin-Friendly Interior", description: "Spacious cabin with skin-friendly contact surfaces.", iconName: "Sparkles" },
    ],
    benefits: [
      { title: "Premium Format", description: "Designed for luxury spas, clinics and wellness centres.", metric: "Capsule" },
      { title: "Two Power Levels", description: "2500 W or 4500 W configurations.", metric: "2500 / 4500 W" },
    ],
    specGroups: [
      {
        category: "Light & Power (two configurations)",
        items: [
          { label: "Light Source", value: "Taiwan Epistar LED" },
          { label: "LED Count", value: "13,440 / 26,880 pcs" },
          { label: "Power", value: "2500 W / 4500 W" },
          { label: "Irradiance", value: "411 / 800 W/m²" },
          { label: "Wavelengths", value: "633 + 660 + 810 + 850 + 940 nm" },
          { label: "Input Voltage", value: "220 V" },
        ],
      },
      {
        category: "Build & Control",
        items: [
          { label: "Control System", value: "IoT management system (pulse frequency modulation)" },
          { label: "Dimensions", value: "2145 × 1060 × 910 mm" },
          { label: "Weight", value: "200 kg" },
          { label: "Use", value: "Commercial wellness centres, luxury spas, clinics" },
        ],
      },
    ],
    whatsIncluded: ["Luma Cocoon 2 (MMB) capsule bed", "Bluetooth surround-sound system", "IoT smart control system", "Power cable"],
    protocol: bedProtocol,
    suitableEnvironments: SPACES.slice(0, 2),
    faqs: [
      { question: "What power does it need?", answer: "220 V input; 2500 W or 4500 W depending on configuration." },
      { question: "How is it controlled?", answer: "Through a wireless IoT management system with pulse frequency modulation." },
    ],
    relatedProductIds: ["led-therapy-full-body-clam-1-m6", "led-therapy-full-stand", "led-therapy-full-stand-2"],
  },

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
    subtitle: "Tall Mobile Red Light Therapy Stand (Catalog Model: GY-T320)",
    tagline: "A tall vertical tower on rolling wheels with 320 LEDs at 660 nm + 850 nm and preset programmes.",
    overview: [
      "The Luma Tower (Catalog Model GY-T320) is a tall vertical stand with a base and rolling wheels for easy movement between rooms. It carries 320 LEDs in a dual 660 nm red and 850 nm near-infrared combination.",
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
    subtitle: "Handheld 4-in-1 Laser, TENS & Ultrasound Device (Catalog Model: GY-EUST-001)",
    tagline: "A rechargeable handheld that combines TENS, a 650 nm red laser, an 808 nm infrared laser and 1 MHz ultrasound.",
    overview: [
      "The Luma Beam Quad (Catalog Model GY-EUST-001) is an ergonomic handheld device that brings four modalities into one unit: TENS, a 650 nm red laser, an 808 nm infrared laser and 1 MHz ultrasound.",
      "It is powered by 100–240 V AC (DC 5 V/3 A) charging and a built-in 1,850 mAh rechargeable battery, with a 5 W power output and a 4 cm² red-light effective area.",
      "This is a laser device. Follow the manufacturer's safety instructions and use only as directed by a qualified professional.",
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
        { step: "Prepare", instruction: "Read the manufacturer's safety instructions and select the mode." },
        { step: "Use", instruction: "Apply as directed by a qualified professional." },
        { step: "Finish", instruction: "Switch off, clean the head and recharge." },
      ],
      ["Laser device: follow the manufacturer's eye-safety guidance.", "Intended for use by trained operators."],
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
    subtitle: "Handheld Red & Infrared Laser Wand (Catalog Model: GY-HL-001)",
    tagline: "A handheld wand with 9 red 650 nm and 4 infrared 808 nm laser diodes, continuous and pulsed modes.",
    overview: [
      "The Luma Beam Wand (Catalog Model GY-HL-001) is a handheld laser wand with nine 650 nm red laser diodes and four 808 nm infrared laser diodes.",
      "It offers continuous-wave and pulsed working modes, accepts 100–240 V AC charging and has a built-in 1,500 mAh rechargeable battery.",
      "This is a laser device. Follow the manufacturer's safety instructions and use only as directed by a qualified professional.",
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
        { step: "Prepare", instruction: "Read the manufacturer's safety instructions and pick the mode." },
        { step: "Use", instruction: "Apply as directed by a qualified professional." },
        { step: "Finish", instruction: "Switch off, clean the head and recharge." },
      ],
      ["Laser device: follow the manufacturer's eye-safety guidance.", "Intended for use by trained operators."],
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
    subtitle: "Wearable Red Laser Cap (Catalog Model: GY-HGC1)",
    tagline: "A wearable cap with 200 laser diodes at 650 nm, designed for hands-free scalp sessions.",
    overview: [
      "The Luma Beam Crown (Catalog Model GY-HGC1) is a wearable cap carrying 200 laser diodes at 650 nm, with a total working power of 1 W for the whole unit.",
      "Integrated head sensors are built into the cap, and the unit can run from a power bank for cordless use.",
      "This is a laser device (laser diodes, not LEDs). Follow the manufacturer's safety instructions and use only as directed.",
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
        { step: "Prepare", instruction: "Read the manufacturer's safety instructions." },
        { step: "Wear", instruction: "Fit the cap and start the programme." },
        { step: "Finish", instruction: "Remove the cap and wipe it down." },
      ],
      ["Laser device: follow the manufacturer's eye-safety guidance."],
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
    subtitle: "7-Colour LED Face & Neck Mask (Catalog Model: GY-009)",
    tagline: "A flexible silicone face mask with a matching neck piece: 105 + 114 LEDs in seven light modes.",
    overview: [
      "The Luma Mask Duo (Catalog Model GY-009) is a flexible face mask with a dedicated matching neck piece, with 105 LEDs on the face and 114 on the neck (219 in total).",
      "It is made from medical-grade soft silica gel, offers seven light-colour modes, and works with mobile power banks for cordless use.",
    ],
    mechanismOfAction: {
      heading: "Seven-Colour LED Mask",
      description: "A soft silicone mask and neck piece put LEDs close to the skin, with seven colour modes selected from the controller.",
      points: [
        "105 LEDs on the face mask and 114 on the neck piece.",
        "Seven colour modes.",
        "Medical-grade soft silica gel.",
        "Compatible with power banks.",
      ],
    },
    features: [
      { title: "Face + Neck", description: "Matching neck piece extends coverage.", iconName: "Layers" },
      { title: "7 Colour Modes", description: "Select the colour for each session.", iconName: "Sun" },
      { title: "Soft Silicone", description: "Medical-grade soft silica gel.", iconName: "Sparkles" },
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
          { label: "Material", value: "Medical-grade soft silica gel" },
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
    subtitle: "7-Mode Hard-Shell LED Face Mask (Catalog Model: GY-BMH)",
    tagline: "A rigid ergonomic mask with 50 high-output LEDs and seven adjustable modes.",
    overview: [
      "The Luma Shell (Catalog Model GY-BMH) is a rigid, ergonomic face mask with 50 high-output LED beads and seven adjustable light modes.",
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
    subtitle: "Multi-Wavelength Hard-Shell LED Face Mask (Catalog Model: GY-106A)",
    tagline: "A rechargeable hard-shell mask with 78 LEDs, seven modes and wavelengths from 390 to 630 nm plus white light.",
    overview: [
      "The Luma Shell 2 (Catalog Model GY-106A) is an advanced hard-shell face mask with 78 LED beads and seven adjustable spectrum modes.",
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
    subtitle: `Portable Red Light Therapy Stand, Size ${o.size} (Catalog Model: ${o.model})`,
    tagline: `A portable ${o.leds}-LED panel stand at 660 nm + 850 nm, with 1 to 20 minute sessions.`,
    overview: [
      `The Luma Go ${o.size} (Catalog Model ${o.model}) is a portable red-light panel stand with ${o.leds} LEDs combining 660 nm red and 850 nm near-infrared light. Dimensions are ${o.dims}.`,
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
