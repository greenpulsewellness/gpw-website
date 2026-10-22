import type { ProductDetail, ProductProtocol } from "./products-data";

/**
 * Detail pages for the smaller recovery devices: Thrum massage guns, Ember / Aurora blankets, Frostfire pad.
 * Product detail data.
 * Wellness wording only: no treatment claims, no pricing.
 */

const SAFETY =
  "Not suitable for everyone. Consult a medical professional before use, especially if you are pregnant, have a medical implant, an injury, or reduced skin sensation, and follow the supplied instructions.";

const protocol = (recommendedDuration: string, steps: ProductProtocol["protocolSteps"], prep: string[]): ProductProtocol => ({
  recommendedDuration,
  frequency: "Per your wellness professional's programme",
  preparation: prep,
  protocolSteps: steps,
  contraindications: [SAFETY],
});

const gunProtocol = protocol(
  "As advised by your wellness professional",
  [
    { step: "Start low", instruction: "Begin on the lowest speed and choose a suitable head." },
    { step: "Glide", instruction: "Move slowly over the muscle belly without pressing hard." },
    { step: "Finish", instruction: "Switch off, clean the head and recharge." },
  ],
  ["Check the battery level and attach the chosen head firmly.", "Use over clothing or clean, dry skin."],
);

const SPACES = [
  { type: "Gyms & Sports Teams", description: "Quick warm-up and cool-down support for athletes." },
  { type: "Physio & Wellness Clinics", description: "A portable add-on for the treatment room." },
  { type: "Private Residences", description: "A personal recovery tool for home routines." },
];

export const deviceDetails: Record<string, ProductDetail> = {
  /* ---------------- Thrum massage guns ---------------- */

  "percussion-gun-jm04sa": {
    id: "percussion-gun-jm04sa",
    subtitle: "Compact Percussion Massage Gun with Hot & Cold Head",
    tagline: "A portable brushless massage gun with a built-in cooling and heating head and USB Type-C charging.",
    overview: [
      "The Thrum Lite is a compact, portable percussion massager built for gym bags, travel and desk-side use. A dual hot and cold contrast head is integrated directly into the massage head.",
      "Active semiconductor cooling and rapid heating are built in, with three cooling levels (20 °C, 15 °C and 10 °C) and multi-level heating. A low-noise brushless motor drives precise percussive speed settings.",
      "It charges over USB Type-C from an integrated lithium-ion battery.",
    ],
    mechanismOfAction: {
      heading: "Percussion with Contrast Temperature",
      description: "A brushless motor drives rapid percussive strokes, while a semiconductor head can cool or warm the contact surface.",
      points: [
        "Low-noise, high-torque brushless motor.",
        "Three rapid-cooling levels: 20 °C, 15 °C, 10 °C.",
        "Multi-level rapid heating.",
        "USB Type-C fast charging.",
      ],
    },
    features: [
      { title: "Hot & Cold Head", description: "Active semiconductor cooling and rapid heating built into the head.", iconName: "ThermometerSnowflake" },
      { title: "Portable Design", description: "Ultra-portable and ergonomic for travel and desk-side use.", iconName: "Move" },
      { title: "Brushless Motor", description: "Low-noise, high-torque brushless motor.", iconName: "Zap" },
      { title: "Type-C Charging", description: "USB Type-C fast charging with an integrated lithium-ion battery.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "Contrast Temperature", description: "Cooling to 10 °C and rapid heating in one head.", metric: "10–20 °C Cooling" },
      { title: "Quiet", description: "Low-noise brushless motor.", metric: "Low Noise" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Motor", value: "High-torque brushless" },
          { label: "Rapid Cooling", value: "3 levels: 20 °C, 15 °C, 10 °C" },
          { label: "Rapid Heating", value: "Multi-level" },
          { label: "Charging", value: "USB Type-C, integrated lithium-ion battery" },
          { label: "Heads", value: "4 heads" },
        ],
      },
    ],
    whatsIncluded: ["Thrum Lite massage gun with hot & cold head", "4 massage heads", "USB Type-C charging cable"],
    protocol: gunProtocol,
    suitableEnvironments: SPACES,
    faqs: [
      { question: "How does it charge?", answer: "Over USB Type-C." },
      { question: "What cooling levels does it have?", answer: "Three: 20 °C, 15 °C and 10 °C." },
    ],
    relatedProductIds: ["percussion-massager-jm003", "percussion-massager-jm019", "cold-therapy-unit-806pro"],
  },

  "percussion-massager-jm003": {
    id: "percussion-massager-jm003",
    subtitle: "Professional 30-Speed Percussion Massage Gun",
    tagline: "A full-size professional massager with an LCD display, 30 speeds up to 3,200+ RPM and four interchangeable heads.",
    overview: [
      "The Thrum Pro is a full-size professional percussion device for physical therapists, trainers and athletes. A digital LCD display shows the live speed level and battery percentage.",
      "Thirty continuous speed levels reach up to 3,200+ RPM from a heavy-duty brushless DC motor with high stall force. Four interchangeable heads are included: ball, U-shape fork, bullet and flat.",
      "A dynamic-balance construction keeps the grip free of vibration, and a high-capacity rechargeable lithium-ion pack gives extended run time.",
    ],
    mechanismOfAction: {
      heading: "High-Speed Percussion with Digital Control",
      description: "A heavy-duty brushless motor drives the head at a speed chosen from 30 levels, shown on an LCD display.",
      points: [
        "30 adjustable speed levels, up to 3,200+ RPM.",
        "Heavy-duty brushless DC motor with high stall force.",
        "LCD shows speed level and battery percentage.",
        "Four interchangeable heads.",
      ],
    },
    features: [
      { title: "LCD Display", description: "Real-time speed level and battery percentage.", iconName: "Monitor" },
      { title: "30 Speed Levels", description: "Continuous gradient control up to 3,200+ RPM.", iconName: "Sliders" },
      { title: "Four Heads", description: "Ball, U-shape fork, bullet and flat heads.", iconName: "Layers" },
      { title: "Balanced Grip", description: "Dynamic-balance construction for a vibration-free grip.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Fine Control", description: "30 speeds for different muscle groups and users.", metric: "30 Speeds" },
      { title: "Long Run Time", description: "High-capacity lithium-ion pack.", metric: "Multi-Hour" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Motor", value: "Heavy-duty brushless DC (high stall force)" },
          { label: "Speed Settings", value: "30 levels, up to 3,200+ RPM" },
          { label: "Display", value: "Digital LCD (speed level, battery %)" },
          { label: "Heads", value: "Ball, U-shape fork, bullet, flat" },
          { label: "Battery", value: "High-capacity rechargeable lithium-ion" },
        ],
      },
    ],
    whatsIncluded: ["Thrum Pro massage gun", "4 interchangeable heads", "Charging cable"],
    protocol: gunProtocol,
    suitableEnvironments: SPACES,
    faqs: [
      { question: "How many speeds does it have?", answer: "30 adjustable levels, up to 3,200+ RPM." },
      { question: "Which heads come with it?", answer: "Ball, U-shape fork, bullet and flat." },
    ],
    relatedProductIds: ["percussion-massager-jm019", "percussion-gun-jm04sa", "cold-therapy-unit-806pro"],
  },

  "percussion-massager-jm019": {
    id: "percussion-massager-jm019",
    subtitle: "Deep-Amplitude 12 mm Percussion Massage Gun",
    tagline: "A high-amplitude massage gun with a 12 mm stroke, professional brushless motor and three speeds.",
    overview: [
      "The Thrum Deep is a high-amplitude percussion gun with a 12 mm stroke length for firm, deep-reaching percussion.",
      "A professional brushless motor with high stall-force resistance keeps the head from stalling under firm pressure. A streamlined three-speed interface covers warm-up, release and deeper work, and a long-lasting rechargeable lithium battery powers it.",
    ],
    mechanismOfAction: {
      heading: "12 mm Stroke Percussion",
      description: "A long 12 mm stroke carries each strike deeper, driven by a brushless motor built to resist stalling under pressure.",
      points: [
        "12 mm stroke amplitude.",
        "Professional brushless motor with high stall-force resistance.",
        "Three dedicated speed settings.",
        "Long-lasting rechargeable lithium battery.",
      ],
    },
    features: [
      { title: "12 mm Amplitude", description: "Long stroke for firm percussion.", iconName: "Target" },
      { title: "Stall-Resistant Motor", description: "Brushless motor with high stall-force resistance.", iconName: "Zap" },
      { title: "3-Speed Interface", description: "Simple step interface for warm-up through deeper work.", iconName: "Sliders" },
      { title: "Rechargeable", description: "Long-lasting lithium battery.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "Deep Reach", description: "12 mm stroke for firm percussion.", metric: "12 mm" },
      { title: "Simple Controls", description: "Three speeds, no menus.", metric: "3 Speeds" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Motor", value: "Professional brushless" },
          { label: "Amplitude", value: "12 mm stroke length" },
          { label: "Speed Levels", value: "3 dedicated settings" },
          { label: "Battery", value: "Long-lasting rechargeable lithium" },
        ],
      },
    ],
    whatsIncluded: ["Thrum Deep massage gun", "Massage heads", "Charging cable"],
    protocol: gunProtocol,
    suitableEnvironments: SPACES,
    faqs: [
      { question: "What is the stroke length?", answer: "12 mm." },
      { question: "How many speeds?", answer: "Three dedicated settings." },
    ],
    relatedProductIds: ["percussion-massager-jm003", "percussion-gun-jm04sa", "cold-therapy-unit-806pro"],
  },

  /* ---------------- Ember / Aurora blankets ---------------- */

  "sauna-blanket-rl301": {
    id: "sauna-blanket-rl301",
    subtitle: "5-in-1 Far-Infrared & Red Light Thermal Dome / Blanket",
    tagline: "Far-infrared heat, 660 / 850 nm red light, PEMF, terahertz and negative-ion stones in a 3-zone, 1200–1300 W blanket system.",
    overview: [
      "The Ember Wrap is a five-in-one thermal dome / blanket that combines far-infrared (FIR) heat, 660 nm / 850 nm red light, PEMF (pulsed electromagnetic field), terahertz and negative-ion mineral stone therapy.",
      "Three independent zones (upper body, waist / core and lower body) set the temperature separately, up to 90 °C in the dome and 80 °C on the mat. Low-EMF carbon-fibre heating wires sit inside a fireproof, waterproof, corrosion-resistant PU / TPU leather cover.",
      "Light output comes from 896 red 660 nm LEDs and 224 three-chip 850 nm near-infrared LEDs, with PEMF adjustable from 1 to 30 Hz and a timer from 5 to 60 minutes.",
    ],
    mechanismOfAction: {
      heading: "Zoned Far-Infrared Heat with Multi-Modal Add-Ons",
      description: "Carbon-fibre heating wires warm three independent zones, while red / near-infrared LEDs, PEMF and mineral stones add further modalities in the same session.",
      points: [
        "Far-infrared heat with 3 independent temperature zones.",
        "896 × 660 nm red LEDs + 224 × 850 nm (3-chip) LEDs, 120–130 mW/cm².",
        "PEMF adjustable from 1 to 30 Hz.",
        "Terahertz and negative-ion mineral stone elements.",
      ],
    },
    features: [
      { title: "5-in-1 System", description: "FIR heat, red light, PEMF, terahertz and negative-ion stones.", iconName: "Layers" },
      { title: "3-Zone Control", description: "Independent temperatures for upper body, core and lower body.", iconName: "Sliders" },
      { title: "Low-EMF Heating Wires", description: "Carbon-fibre heating wires.", iconName: "Flame" },
      { title: "Durable Cover", description: "Fireproof, waterproof, corrosion-resistant PU / TPU leather.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Zone-by-Zone Heat", description: "Set each part of the body separately.", metric: "3 Zones" },
      { title: "Wide Temperature Range", description: "Dome 25–90 °C; mat 25–80 °C.", metric: "Up to 90 °C" },
    ],
    specGroups: [
      {
        category: "Heat & Light",
        items: [
          { label: "Rated Power", value: "1200–1300 W" },
          { label: "Temperature Range", value: "Dome 25–90 °C; mat 25–80 °C" },
          { label: "Red / NIR LEDs", value: "896 × 660 nm + 224 × 850 nm (3-chip)" },
          { label: "Light Density", value: "120–130 mW/cm²" },
          { label: "PEMF Frequency", value: "1–30 Hz adjustable" },
          { label: "Timer", value: "5–60 minutes" },
        ],
      },
      {
        category: "Build",
        items: [
          { label: "Dimensions", value: "180 (L) × 80 (W) × 45 (H) cm" },
          { label: "Weight", value: "35 kg" },
          { label: "Cover", value: "Fireproof, waterproof, anti-corrosion PU / TPU leather" },
          { label: "Heating Wires", value: "Low-EMF carbon fibre" },
        ],
      },
    ],
    whatsIncluded: ["Ember Wrap dome / blanket with controller", "Power cable"],
    protocol: protocol(
      "5 to 60 minutes (adjustable timer)",
      [
        { step: "Set zones", instruction: "Choose the temperature for each of the three zones and the timer." },
        { step: "Session", instruction: "Lie down comfortably and stay hydrated while the programme runs." },
        { step: "Finish", instruction: "Let the unit cool, then wipe down the cover." },
      ],
      ["Check the room power supply and place the unit on a flat surface.", "Start at a lower temperature and increase gradually."],
    ),
    suitableEnvironments: SPACES.slice(1).concat([{ type: "Spas & Wellness Centres", description: "A heat-and-light blanket station for recovery menus." }]),
    faqs: [
      { question: "How many heat zones are there?", answer: "Three: upper body, waist / core and lower body." },
      { question: "What is the timer range?", answer: "5 to 60 minutes." },
      { question: "How hot does it get?", answer: "The dome reaches 90 °C and the mat 80 °C." },
    ],
    relatedProductIds: ["red-light-blanket-rl302", "cold-therapy-unit-806pro", "percussion-massager-jm003"],
  },

  "red-light-blanket-rl302": {
    id: "red-light-blanket-rl302",
    subtitle: "Full-Body Red & Near-Infrared Light Blanket",
    tagline: "A 180 × 180 cm flexible blanket with 2,240 LEDs at 660 nm + 850 nm, three light modes and five intensity levels.",
    overview: [
      "The Aurora Wrap is a full-body, wrap-around flexible light blanket delivering 660 nm red and 850 nm near-infrared light together. It opens to 180 × 180 cm for full-body coverage.",
      "Three light modes (constant wave, 10 Hz pulse and 40 Hz pulse) and five intensity levels are available, with a 10 to 60 minute timer. The flexible, foldable waterproof PU + TPU casing runs on a safe DC 24 V low-voltage supply.",
      "Light comes from 2,240 LED units (6,720 high-output chips, 660 nm : 850 nm in a 1 : 2 ratio) at 112–130 mW/cm² and 200 W rated power.",
    ],
    mechanismOfAction: {
      heading: "Wrap-Around Red & Near-Infrared LED Array",
      description: "A flexible LED blanket surrounds the body with two wavelengths, with constant or pulsed output set from the controller.",
      points: [
        "2,240 LEDs / 6,720 chips, 660 nm : 850 nm = 1 : 2.",
        "Optical power density 112–130 mW/cm².",
        "Constant wave, 10 Hz pulse and 40 Hz pulse modes.",
        "Five intensity levels and a 10–60 minute timer.",
      ],
    },
    features: [
      { title: "Full-Body Coverage", description: "180 × 180 cm flexible blanket.", iconName: "Maximize" },
      { title: "Dual Wavelength", description: "660 nm red + 850 nm near-infrared.", iconName: "Sun" },
      { title: "3 Modes, 5 Levels", description: "Constant, 10 Hz and 40 Hz pulse with five intensity levels.", iconName: "Sliders" },
      { title: "Low-Voltage Design", description: "DC 24 V supply in a waterproof PU + TPU casing.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "High LED Count", description: "2,240 LEDs across the blanket.", metric: "2,240 LEDs" },
      { title: "Packs Down Small", description: "Folds to 103 × 18 × 31.5 cm.", metric: "8.1 kg" },
    ],
    specGroups: [
      {
        category: "Light & Power",
        items: [
          { label: "Rated Power", value: "200 W" },
          { label: "Total LEDs", value: "2,240 units (6,720 high-output chips)" },
          { label: "Wavelength Ratio", value: "660 nm : 850 nm = 1 : 2" },
          { label: "Optical Power Density", value: "112–130 mW/cm²" },
          { label: "Light Modes", value: "Constant wave, 10 Hz pulse, 40 Hz pulse" },
          { label: "Intensity Levels", value: "5" },
          { label: "Timer", value: "10–60 minutes" },
          { label: "Supply", value: "DC 24 V" },
        ],
      },
      {
        category: "Dimensions",
        items: [
          { label: "Unfolded", value: "180 × 180 cm" },
          { label: "Folded / Packaging", value: "103 × 18 × 31.5 cm" },
          { label: "Gross Weight", value: "8.1 kg" },
          { label: "Casing", value: "Waterproof PU + TPU, flexible and foldable" },
        ],
      },
    ],
    whatsIncluded: ["Aurora Wrap light blanket", "Controller", "DC 24 V power adapter"],
    protocol: protocol(
      "10 to 60 minutes (adjustable timer)",
      [
        { step: "Set up", instruction: "Lay the blanket flat, then choose the mode, intensity and timer." },
        { step: "Session", instruction: "Lie on or under the blanket and relax for the set time." },
        { step: "Finish", instruction: "Switch off, fold the blanket and wipe the casing." },
      ],
      ["Clean, dry skin free of products.", "Follow the supplied safety and eye-protection instructions."],
    ),
    suitableEnvironments: [
      { type: "Wellness & Longevity Centres", description: "A full-body light station that packs away easily." },
      { type: "Spas & Clinics", description: "Compact storage for shared treatment rooms." },
      { type: "Private Residences", description: "A foldable home option." },
    ],
    faqs: [
      { question: "What wavelengths does it use?", answer: "660 nm red and 850 nm near-infrared." },
      { question: "What modes are there?", answer: "Constant wave, 10 Hz pulse and 40 Hz pulse, with five intensity levels." },
      { question: "How does it pack away?", answer: "It folds to 103 × 18 × 31.5 cm." },
    ],
    relatedProductIds: ["sauna-blanket-rl301", "cold-therapy-unit-806pro", "luma-go-portable-red-light-stand"],
  },

  /* ---------------- Frostfire pad ---------------- */

  "cold-therapy-unit-806pro": {
    id: "cold-therapy-unit-806pro",
    subtitle: "Wearable Cold, Heat & Red Light Therapy Pad",
    tagline: "A semiconductor pad that cools, heats, vibrates and delivers 660 / 850 nm red light, with no ice needed.",
    overview: [
      "The Frostfire Pad is a wearable semiconductor pad combining rapid cooling, rapid heating, vibration massage and red / infrared light (660 nm + 850 nm) in one device, without needing ice.",
      "Four adjustable temperature levels span 3 °C to 45 °C. A flexible pad and elastic body straps hold it to the lower back, torso or thigh.",
      "It runs at 42 W from a 7.4 V / 5,000 mAh rechargeable battery with 5 V / 2 A Type-C charging, and weighs 1.2 kg.",
    ],
    mechanismOfAction: {
      heading: "Thermoelectric Cooling & Heating with Light",
      description: "A semiconductor (thermoelectric) pad actively cools or heats the contact surface, while red / near-infrared LEDs and a vibration motor add further modes.",
      points: [
        "Active thermoelectric cooling and heating, no ice required.",
        "Four temperature levels between 3 °C and 45 °C.",
        "Red light at 660 nm + 850 nm.",
        "Vibration massage mode.",
      ],
    },
    features: [
      { title: "Four Modes in One", description: "Cold, heat, vibration and red light.", iconName: "Layers" },
      { title: "No Ice Needed", description: "Active thermoelectric cooling and heating.", iconName: "ThermometerSnowflake" },
      { title: "Wearable", description: "Elastic body straps for lower back, torso and thigh.", iconName: "Move" },
      { title: "Rechargeable", description: "7.4 V / 5,000 mAh battery with 5 V / 2 A Type-C input.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "Wide Temperature Range", description: "3 °C to 45 °C in four levels.", metric: "3–45 °C" },
      { title: "Light & Portable", description: "1.2 kg and rechargeable.", metric: "1.2 kg" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Therapy Modes", value: "Rapid cold, rapid heat, vibration massage, red light (660 nm + 850 nm)" },
          { label: "Temperature Settings", value: "4 adjustable levels, 3 °C to 45 °C" },
          { label: "Rated Power", value: "42 W" },
          { label: "Battery / Input", value: "7.4 V / 5,000 mAh rechargeable; 5 V / 2 A Type-C" },
          { label: "Dimensions", value: "335 × 315 × 50 mm" },
          { label: "Weight", value: "1.2 kg" },
        ],
      },
    ],
    whatsIncluded: ["Frostfire Pad", "Elastic body straps", "Type-C charging cable"],
    protocol: protocol(
      "As advised by your wellness professional",
      [
        { step: "Set up", instruction: "Fit the pad with the straps and choose a mode and temperature." },
        { step: "Session", instruction: "Stay relaxed and check the skin regularly during use." },
        { step: "Finish", instruction: "Remove the pad, switch off and recharge." },
      ],
      ["Use over clean, dry skin and start at a moderate temperature.", "Follow the supplied instructions."],
    ),
    suitableEnvironments: SPACES,
    faqs: [
      { question: "Does it need ice?", answer: "No. It uses an active semiconductor system to cool and heat." },
      { question: "What temperatures does it reach?", answer: "Four levels between 3 °C and 45 °C." },
      { question: "How does it charge?", answer: "5 V / 2 A over Type-C." },
    ],
    relatedProductIds: ["percussion-gun-jm04sa", "red-light-blanket-rl302", "sauna-blanket-rl301"],
  },
};
