import type { ProductDetail, ProductProtocol } from "./products-data";

/**
 * Detail pages for the Mobility line: Glide (folding electric wheelchairs) and Rise (standing wheelchairs).
 * Source: "2026 Mobility&homecare Sep Rev.20(2).pdf" (Glide) and "Standying wheelchair series.pdf" (Rise).
 * Wellness / product wording only: no medical or therapeutic claims, no pricing.
 */

const SUITABILITY_NOTE =
  "A mobility product should be matched to the user. Have a clinician or mobility specialist confirm suitability and seating, and never exceed the stated weight capacity.";

const protocol = (extraPrep: string[] = []): ProductProtocol => ({
  recommendedDuration: "Daily use as needed",
  frequency: "As needed",
  preparation: ["Charge the battery fully before first use and check the charge level before each trip.", "Check tyres, brakes and the folding lock, and adjust the seat to the user.", ...extraPrep],
  protocolSteps: [
    { step: "Check", instruction: "Inspect the chair, switch it on and check the battery indicator." },
    { step: "Operate", instruction: "Use the controller at a speed suited to the surroundings and stay within the weight capacity." },
    { step: "Store", instruction: "Switch off, fold or park on level ground, and recharge after use." },
  ],
  contraindications: [SUITABILITY_NOTE],
});

const HOME_AND_CARE = [
  { type: "Homecare & Individuals", description: "Personal mobility for everyday life at home and outdoors." },
  { type: "Senior Living", description: "A dependable chair for residents and care teams." },
  { type: "Hospitals & Clinics", description: "A reliable chair for patient movement and rehabilitation settings." },
];

export const mobilityDetails: Record<string, ProductDetail> = {
  "glide-flex-foldable-electric-wheelchair": {
    id: "glide-flex-foldable-electric-wheelchair",
    subtitle: "Foldable Electric Wheelchair with X-Fold and Adjustable Seat Height (Dragon Glide Flex)",
    tagline: "A space-saving X-Fold electric wheelchair with a seat that adjusts from 570 to 720 mm.",
    overview: [
      "The Glide Flex (Dragon Glide Flex) is a foldable electric wheelchair built around two ideas: it folds flat with an intuitive upright gesture, so the user or carer does not need to bend down, and its seat height adjusts from 570 mm to 720 mm to line up with dining tables, desks or the user's own needs.",
      "Two 200 W motors and a 20 Ah lithium battery provide a driving range of 20 km or more at under 6 km/h, with a weight capacity of 159 kg. Climbing gradient is 0° to 9°.",
      "It includes a foam cushion, adjustable armrests, swing-away footrest, joystick controller, turn signals, backrest adjustment plate and a charging port.",
    ],
    mechanismOfAction: {
      heading: "X-Fold Frame and Electric Drive",
      description: "The X-Fold frame closes flat for storage and transport, while two 200 W motors drive the rear wheels from a joystick and an integrated electric braking system holds the chair.",
      points: [
        "X-Fold technology folds flat with an upright gesture.",
        "Seat height adjusts from 570 mm to 720 mm.",
        "200 W × 2 motors on a 21–29.4 V / 20 Ah lithium battery.",
        "Integrated electric braking system.",
      ],
    },
    features: [
      { title: "Space-Saver X-Fold", description: "Folds flat with an intuitive, upright gesture, with no bending down.", iconName: "Maximize" },
      { title: "Adaptive Seat Height", description: "Seat adjusts from 570 mm to 720 mm.", iconName: "Move" },
      { title: "Joystick Control", description: "Joystick controller with turn signals.", iconName: "Sliders" },
      { title: "Lithium Battery", description: "20 Ah lithium battery for 20 km or more of range.", iconName: "BatteryCharging" },
      { title: "Comfort Details", description: "Foam cushion, adjustable armrests, swing-away footrest and backrest adjustment plate.", iconName: "Sparkles" },
      { title: "Electric Braking", description: "Integrated electric braking system.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Compact Storage", description: "Folds to 82 × 52 × 64 cm.", metric: "82 × 52 × 64 cm" },
      { title: "High Capacity", description: "Supports up to 159 kg.", metric: "159 kg" },
      { title: "Long Range", description: "20 km or more on a charge.", metric: "≥ 20 km" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Speed", value: "< 6 km/h" },
          { label: "Driving Range", value: "≥ 20 km" },
          { label: "Climbing Gradient", value: "0° – 9°" },
          { label: "Weight Capacity", value: "159 kg" },
          { label: "Motors", value: "200 W × 2" },
          { label: "Brakes", value: "Integrated electric braking system" },
        ],
      },
      {
        category: "Battery & Wheels",
        items: [
          { label: "Battery", value: "21–29.4 V / 20 Ah lithium" },
          { label: "Charger", value: "DC 24 V / 2.0 A" },
          { label: "Front Wheels", value: "10-inch swivel casters" },
          { label: "Rear Wheels", value: "10-inch fixed wheels" },
        ],
      },
      {
        category: "Dimensions & Weight",
        items: [
          { label: "Unfolded (L × W × H)", value: "96 × 91.2 × 64 cm" },
          { label: "Folded (L × W × H)", value: "82 × 52 × 64 cm" },
          { label: "Net Weight", value: "46.4 kg" },
          { label: "Seat Height Range", value: "570 – 720 mm" },
        ],
      },
    ],
    whatsIncluded: ["Glide Flex foldable electric wheelchair", "Lithium battery and DC 24 V / 2.0 A charger", "Foam cushion, adjustable armrests, swing-away footrest", "Joystick controller with turn signals"],
    protocol: protocol(),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "How does it fold?", answer: "The X-Fold frame folds flat with an upright gesture, so the user or operator doesn't need to bend down." },
      { question: "What is the weight capacity?", answer: "159 kg." },
      { question: "How far does it go on a charge?", answer: "A driving range of 20 km or more." },
    ],
    relatedProductIds: ["glide-trek-1-electric-wheelchair", "glide-trek-2-electric-wheelchair", "glide-core-wheelchair"],
  },

  "glide-trek-1-electric-wheelchair": {
    id: "glide-trek-1-electric-wheelchair",
    subtitle: "Compact Folding Electric Wheelchair (Catalog Model: DW-EW2601A)",
    tagline: "A light 22 kg folding power chair with 250 W × 2 motors and a choice of 6 Ah or 10 Ah lithium battery.",
    overview: [
      "The Glide Trek 1 (Catalog Model DW-EW2601A) is a compact, lightweight folding power chair with a steel frame and a net weight of 22 kg. It folds to 56 × 29 × 78 cm for storage and travel.",
      "Two 250 W brushed motors, a 6 Ah or 10 Ah lithium battery option and an electronic brake give a driving range of 9 km. Weight capacity is 100 kg.",
      "It rolls on 7-inch front and 9-inch rear PU solid wheels.",
    ],
    mechanismOfAction: {
      heading: "Folding Frame with Dual Brushed Motors",
      description: "A lightweight steel frame folds compactly, and two brushed motors drive the chair with an electronic brake on stop.",
      points: [
        "Steel folding frame, 22 kg net weight.",
        "250 W × 2 brushed motors.",
        "6 Ah / 10 Ah lithium battery options.",
        "Electronic brake.",
      ],
    },
    features: [
      { title: "Lightweight Folding Frame", description: "22 kg net weight, folds to 56 × 29 × 78 cm.", iconName: "Maximize" },
      { title: "Lithium Battery Options", description: "Choose a 6 Ah or 10 Ah battery.", iconName: "BatteryCharging" },
      { title: "PU Solid Wheels", description: "7-inch front and 9-inch rear PU solid wheels.", iconName: "Move" },
      { title: "Electronic Brake", description: "Electronic braking system.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Easy to Carry", description: "22 kg net weight.", metric: "22 kg" },
      { title: "Compact Fold", description: "Folds to 56 × 29 × 78 cm.", metric: "56 × 29 × 78 cm" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Motors", value: "250 W × 2 brushed motors" },
          { label: "Battery", value: "6 Ah / 10 Ah lithium options" },
          { label: "Driving Range", value: "9 km" },
          { label: "Weight Capacity", value: "100 kg" },
          { label: "Braking", value: "Electronic brake" },
        ],
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Frame", value: "Steel" },
          { label: "Unfolded (L × W × H)", value: "98 × 56 × 95 cm" },
          { label: "Folded (L × W × H)", value: "56 × 29 × 78 cm" },
          { label: "Package (L × W × H)", value: "58 × 31 × 80 cm" },
          { label: "Net Weight", value: "22 kg" },
          { label: "Wheels", value: "7\" PU solid front, 9\" PU solid rear" },
        ],
      },
    ],
    whatsIncluded: ["Glide Trek 1 folding electric wheelchair", "Lithium battery (6 Ah or 10 Ah) and charger"],
    protocol: protocol(),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "What battery options are there?", answer: "6 Ah or 10 Ah lithium." },
      { question: "How much does it weigh?", answer: "22 kg net weight." },
    ],
    relatedProductIds: ["glide-trek-2-electric-wheelchair", "glide-core-wheelchair", "glide-flex-foldable-electric-wheelchair"],
  },

  "glide-trek-2-electric-wheelchair": {
    id: "glide-trek-2-electric-wheelchair",
    subtitle: "Folding Electric Wheelchair with Large Rear Wheels (Catalog Model: DW-EW2603A)",
    tagline: "An aluminium-alloy folding power chair with carbon-transfer finish, 12-inch rear wheels and up to 15 km of range.",
    overview: [
      "The Glide Trek 2 (Catalog Model DW-EW2603A) is an enhanced folding electric wheelchair with an aluminium-alloy frame finished with surface carbon-transfer printing. Net weight is 22.4 kg, and it folds to 58 × 38 × 83 cm.",
      "Two 250 W brushed motors and a 6 Ah or 10 Ah lithium battery give a range of 9 km or 15 km depending on the battery configuration. Weight capacity is 100 kg.",
      "Large 12-inch PU solid rear wheels pair with 7-inch PU solid front wheels and an electronic brake.",
    ],
    mechanismOfAction: {
      heading: "Folding Aluminium Frame with Dual Motors",
      description: "A lightweight aluminium frame folds compactly, and two brushed motors drive the large rear wheels with an electronic brake.",
      points: [
        "Aluminium alloy frame with carbon-transfer finish.",
        "250 W × 2 brushed motors.",
        "6 Ah / 10 Ah lithium battery for 9 km / 15 km range.",
        "12-inch rear PU solid wheels.",
      ],
    },
    features: [
      { title: "Aluminium Frame", description: "Aluminium alloy with surface carbon-transfer printing.", iconName: "Layers" },
      { title: "Large Rear Wheels", description: "12-inch PU solid rear wheels.", iconName: "Move" },
      { title: "Two Battery Options", description: "6 Ah or 10 Ah lithium for 9 km or 15 km range.", iconName: "BatteryCharging" },
      { title: "Electronic Brake", description: "Electronic braking system.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Up to 15 km", description: "Range depends on the battery configuration.", metric: "9 / 15 km" },
      { title: "Light Folding Chair", description: "22.4 kg net weight.", metric: "22.4 kg" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Motors", value: "250 W × 2 brushed motors" },
          { label: "Battery", value: "6 Ah / 10 Ah lithium options" },
          { label: "Driving Range", value: "9 km / 15 km (by battery)" },
          { label: "Weight Capacity", value: "100 kg" },
          { label: "Braking", value: "Electronic brake" },
        ],
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Frame", value: "Aluminium alloy with carbon-transfer printing" },
          { label: "Unfolded (L × W × H)", value: "112 × 58 × 94 cm" },
          { label: "Folded (L × W × H)", value: "58 × 38 × 83 cm" },
          { label: "Package (L × W × H)", value: "58 × 38 × 83 cm" },
          { label: "Net Weight", value: "22.4 kg" },
          { label: "Wheels", value: "7\" PU solid front, 12\" PU solid rear" },
        ],
      },
    ],
    whatsIncluded: ["Glide Trek 2 folding electric wheelchair", "Lithium battery (6 Ah or 10 Ah) and charger"],
    protocol: protocol(),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "How far does it go?", answer: "9 km or 15 km, depending on the battery configuration." },
      { question: "What is the frame made of?", answer: "Aluminium alloy with a carbon-transfer finish." },
    ],
    relatedProductIds: ["glide-trek-1-electric-wheelchair", "glide-core-wheelchair", "glide-flex-foldable-electric-wheelchair"],
  },

  "glide-core-wheelchair": {
    id: "glide-core-wheelchair",
    subtitle: "Folding Electric Wheelchair (Catalog Model: DW-605J)",
    tagline: "An ergonomic aluminium folding chair with 250 W × 2 motors, 45 cm seat (51 cm optional) and a 20 km range.",
    overview: [
      "The Glide Core (Catalog Model DW-605J) is an ergonomic, heavy-duty folding electric wheelchair with an aluminium-alloy frame. It weighs 23.3 kg without the battery and folds to 68 × 42 × 73 cm.",
      "Two 250 W DC motors run from a 24 V 12 Ah or 20 Ah lithium-ion battery to a top speed of 6 km/h and a driving range of 20 km. Weight capacity is 100 kg, and an electromagnetic brake holds the chair.",
      "Standard seat width is 45 cm with a 51 cm option. An adjustable headrest and a manual rear recline mechanism are available as options.",
    ],
    mechanismOfAction: {
      heading: "Folding Aluminium Frame with DC Motors",
      description: "Two DC motors drive the 12-inch rear wheels, and an electromagnetic brake holds the chair when stopped.",
      points: [
        "Aluminium alloy frame, 23.3 kg without battery.",
        "250 W × 2 DC motors.",
        "24 V 12 Ah / 20 Ah Li-ion battery options.",
        "Electromagnetic brake.",
      ],
    },
    features: [
      { title: "Heavy-Duty Folding Frame", description: "Aluminium alloy, folds to 68 × 42 × 73 cm.", iconName: "Maximize" },
      { title: "Seat Width Options", description: "45 cm standard, 51 cm optional.", iconName: "Users" },
      { title: "Optional Comfort Upgrades", description: "Adjustable headrest and manual rear recline mechanism.", iconName: "Sliders" },
      { title: "Electromagnetic Brake", description: "Electromagnetic braking system.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "20 km Range", description: "Li-ion options of 12 Ah or 20 Ah.", metric: "20 km" },
      { title: "6 km/h Top Speed", description: "Controlled pace for indoor and outdoor.", metric: "6 km/h" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Max Speed", value: "6 km/h" },
          { label: "Driving Range", value: "20 km" },
          { label: "Motors", value: "250 W × 2 DC motors" },
          { label: "Battery", value: "24 V 12 Ah / 20 Ah Li-ion options" },
          { label: "Weight Capacity", value: "100 kg" },
          { label: "Braking", value: "Electromagnetic brake" },
        ],
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Frame", value: "Aluminium alloy" },
          { label: "Unfolded (L × W × H)", value: "93 × 68 × 98 cm" },
          { label: "Folded (L × W × H)", value: "68 × 42 × 73 cm" },
          { label: "Package (L × W × H)", value: "74 × 45 × 86 cm" },
          { label: "Net Weight", value: "23.3 kg (without battery)" },
          { label: "Wheels", value: "8\" solid front, 12\" drive rear" },
          { label: "Seat Width", value: "45 cm (51 cm optional)" },
        ],
      },
    ],
    whatsIncluded: ["Glide Core folding electric wheelchair", "Li-ion battery and charger", "Optional: 51 cm seat, adjustable headrest, manual rear recline"],
    protocol: protocol(),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "What seat widths are available?", answer: "45 cm as standard, with 51 cm as an option." },
      { question: "What are the optional extras?", answer: "An adjustable headrest and a manual rear recline mechanism." },
    ],
    relatedProductIds: ["glide-trek-2-electric-wheelchair", "glide-trek-1-electric-wheelchair", "glide-junior-pediatric-electric-wheelchair"],
  },

  "glide-junior-pediatric-electric-wheelchair": {
    id: "glide-junior-pediatric-electric-wheelchair",
    subtitle: "Compact Electric Wheelchair for Junior Users (Catalog Model: DW-703LJ)",
    tagline: "A compact aluminium frame with 24 V 250 W × 2 brushless motors, folding to 69 × 45 × 77 cm.",
    overview: [
      "The Glide Junior (Catalog Model DW-703LJ) is a compact, lightweight electric wheelchair frame engineered for junior and pediatric users. The aluminium-alloy frame weighs 22.6 kg without the battery and folds to 69 × 45 × 77 cm.",
      "Two 24 V 250 W brushless motors run from a 24 V 12 Ah lead-acid battery to a top speed of 6 km/h and a driving range of 20 km or more. Weight capacity is 100 kg.",
      "It uses 8-inch front wheels, 12-inch rear drive wheels and an electromagnetic brake.",
    ],
    mechanismOfAction: {
      heading: "Compact Frame with Brushless Drive",
      description: "Two brushless motors drive the 12-inch rear wheels, and an electromagnetic brake holds the chair when stopped.",
      points: [
        "Aluminium alloy frame, 22.6 kg without battery.",
        "24 V 250 W × 2 brushless motors.",
        "24 V 12 Ah lead-acid battery.",
        "Electromagnetic brake.",
      ],
    },
    features: [
      { title: "Compact Folding Frame", description: "Folds to 69 × 45 × 77 cm.", iconName: "Maximize" },
      { title: "Brushless Motors", description: "24 V 250 W × 2 brushless motors.", iconName: "Zap" },
      { title: "Electromagnetic Brake", description: "Electromagnetic braking system.", iconName: "ShieldCheck" },
      { title: "Junior-Sized", description: "Engineered for junior / pediatric users.", iconName: "Users" },
    ],
    benefits: [
      { title: "Lightweight", description: "22.6 kg without the battery.", metric: "22.6 kg" },
      { title: "20 km+ Range", description: "Driving range of 20 km or more.", metric: "≥ 20 km" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Max Speed", value: "6 km/h" },
          { label: "Driving Range", value: "≥ 20 km" },
          { label: "Motors", value: "24 V 250 W × 2 brushless" },
          { label: "Battery", value: "24 V 12 Ah lead-acid" },
          { label: "Weight Capacity", value: "100 kg" },
          { label: "Braking", value: "Electromagnetic brake" },
        ],
      },
      {
        category: "Build & Dimensions",
        items: [
          { label: "Frame", value: "Aluminium alloy" },
          { label: "Unfolded (L × W × H)", value: "87.5 × 53 × 96.5 cm" },
          { label: "Folded (L × W × H)", value: "69 × 45 × 77 cm" },
          { label: "Package (L × W × H)", value: "70.5 × 46.5 × 82 cm" },
          { label: "Net Weight", value: "22.6 kg (without battery)" },
          { label: "Wheels", value: "8\" front, 12\" rear drive" },
        ],
      },
    ],
    whatsIncluded: ["Glide Junior electric wheelchair", "24 V 12 Ah lead-acid battery and charger"],
    protocol: protocol(["For young users, an adult should supervise use and a clinician should confirm seating."]),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "Who is it designed for?", answer: "Junior and pediatric users." },
      { question: "What battery does it use?", answer: "A 24 V 12 Ah lead-acid battery." },
    ],
    relatedProductIds: ["glide-core-wheelchair", "glide-trek-1-electric-wheelchair", "glide-trek-2-electric-wheelchair"],
  },

  "rise-1-standing-wheelchair": {
    id: "rise-1-standing-wheelchair",
    subtitle: "Electric Standing Wheelchair with Mid-Mounted Motor (Catalog Model: DW-EW103)",
    tagline: "A heavy-duty chair with an electric standing function, a 48 V 600 W mid-mounted motor and dual-handle control.",
    overview: [
      "The Rise 1 (Catalog Model DW-EW103, electric standing function as detailed under DW-T103-1) is a heavy-duty electric wheelchair with an integrated standing function that assists the user to stand up, easing the long hours of prolonged sitting.",
      "A high-power 48 V 600 W mid-mounted differential motor (upgradeable to 60 V 1000 W) and a standard 48 V 20 Ah lead-acid battery deliver a speed of 0–20 km/h and a range of 25–100 km depending on the battery configuration.",
      "The chair has a thick integrated front and rear steel frame, foldable armrests, foot pedals, leg rests, double handles and a recline-capable backrest. Double springs and four front fork springs give multi-point shock absorption, and full customisation is supported.",
    ],
    mechanismOfAction: {
      heading: "Mid-Mounted Differential Drive with Standing Assist",
      description: "A mid-mounted differential motor drives the chair from dual-handle controls, and the electric standing function raises the user to a standing position.",
      points: [
        "48 V 600 W mid-mounted differential motor (upgradeable to 60 V 1000 W).",
        "Electric standing function.",
        "Double rear-wheel mechanical drum brake (electromagnetic or hydraulic disc optional).",
        "Double springs and four front fork springs for shock absorption.",
      ],
    },
    features: [
      { title: "Electric Standing Function", description: "Assists the user to stand up.", iconName: "Move" },
      { title: "Heavy-Duty Drive", description: "High-power mid-mounted differential motor with dual-handle control.", iconName: "Zap" },
      { title: "Integrated Steel Frame", description: "Thick front and rear steel frame.", iconName: "ShieldCheck" },
      { title: "Multi-Point Suspension", description: "Double springs plus four front fork springs.", iconName: "Layers" },
      { title: "Comfort Features", description: "Foldable armrests, foot pedals, leg rests and recline-capable backrest.", iconName: "Sparkles" },
      { title: "Customisation", description: "Full vehicle customisation supported.", iconName: "Sliders" },
    ],
    benefits: [
      { title: "Long Range", description: "25 to 100 km depending on the battery configuration.", metric: "25–100 km" },
      { title: "Powerful Motor", description: "600 W, upgradeable to 1000 W.", metric: "600–1000 W" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Motor", value: "48 V 600 W mid-mounted differential (upgradeable to 60 V 1000 W)" },
          { label: "Battery", value: "Standard 48 V 20 Ah lead-acid" },
          { label: "Speed", value: "0–20 km/h" },
          { label: "Driving Range", value: "25–100 km (by battery configuration)" },
          { label: "Control", value: "Dual-handle control" },
          { label: "Braking", value: "Double rear-wheel mechanical drum brake (electromagnetic or hydraulic oil disc optional)" },
        ],
      },
      {
        category: "Dimensions & Weight",
        items: [
          { label: "Dimensions (L × W × H)", value: "125 × 65 × 125 cm" },
          { label: "Packaging", value: "125 × 70 × 68 cm (or 115 × 65 × 64 cm)" },
          { label: "Bare Weight", value: "67–79 kg" },
          { label: "With 48 V 20 Ah Battery", value: "91–103 kg" },
        ],
      },
      {
        category: "Wheels & Seating",
        items: [
          { label: "Front Tyre", value: "13-inch inflatable (350-6), 9.5 cm width" },
          { label: "Rear Tyre", value: "14-inch (300-8), 8 cm width" },
          { label: "Seat Cushion", value: "45 cm W × 45–49 cm D × 53 cm ground height" },
          { label: "Backrest", value: "45 cm W × 57 cm H" },
          { label: "Headrest", value: "22 cm W × 15 cm H" },
          { label: "Armrests", value: "46–47 cm inner width, 56–58 cm outer width" },
        ],
      },
    ],
    whatsIncluded: ["Rise 1 electric standing wheelchair", "48 V 20 Ah lead-acid battery and charger", "Foldable armrests, foot pedals and leg rests"],
    protocol: protocol(["Use the standing function only as instructed, with the chair on level ground."]),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "How fast does it go?", answer: "0–20 km/h." },
      { question: "How far does it travel?", answer: "25 to 100 km, depending on the battery configuration." },
      { question: "Can the motor be upgraded?", answer: "Yes, from 48 V 600 W up to 60 V 1000 W." },
    ],
    relatedProductIds: ["rise-2-standing-wheelchair", "rise-3-standing-wheelchair", "glide-core-wheelchair"],
  },

  "rise-2-standing-wheelchair": {
    id: "rise-2-standing-wheelchair",
    subtitle: "Sit-and-Stand Electric Wheelchair (Catalog Model: DW-EW201 / DW-EW201C)",
    tagline: "A dual-function electric chair for sitting and standing with a widened anti-rollover chassis.",
    overview: [
      "The Rise 2 (Catalog Model DW-EW201, standing variant DW-EW201C / Little Bee) offers electrically controlled sitting and standing for home and outdoor travel.",
      "Integrated protective gear and a widened anti-rollover chassis are designed to keep the user secure while standing. Armrests and leg protectors fold over, and the waist guard and knee pads adjust in height. The front handle adjusts up or down by 30 cm (ground height 83 to 115 cm).",
      "Two 24 V 250 W motors run from a 24 V 12 Ah or 20 Ah lead-acid battery for a range of 10 to 20 km.",
    ],
    mechanismOfAction: {
      heading: "Sit-and-Stand Electric Drive",
      description: "Two motors drive the chair from a 360° joystick, and an electronic brake plus electromagnetic brake hold it when stopped.",
      points: [
        "24 V 250 W × 2 motors.",
        "Universal 360° joystick controller.",
        "Electronic brake + electromagnetic brake.",
        "Widened anti-rollover chassis.",
      ],
    },
    features: [
      { title: "Sit & Stand", description: "Electrically controlled sitting and standing.", iconName: "Move" },
      { title: "Anti-Rollover Chassis", description: "Widened chassis with integrated protective gear.", iconName: "ShieldCheck" },
      { title: "Adjustable Fit", description: "Fold-over armrests and leg protectors; adjustable waist guard and knee pads.", iconName: "Sliders" },
      { title: "Height-Adjustable Handle", description: "Front handle adjusts by 30 cm (83–115 cm from the ground).", iconName: "Maximize" },
      { title: "360° Joystick", description: "Universal joystick controller.", iconName: "Target" },
    ],
    benefits: [
      { title: "Compact Footprint", description: "93 × 62 × 90 cm.", metric: "93 × 62 cm" },
      { title: "10–20 km Range", description: "On a 12 Ah or 20 Ah battery.", metric: "10–20 km" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Motors", value: "24 V 250 W × 2" },
          { label: "Battery", value: "24 V 12 Ah / 20 Ah lead-acid" },
          { label: "Speed", value: "3–5 km/h (standing variant); 0–8 km/h on the conventional 201 base" },
          { label: "Driving Range", value: "10–20 km" },
          { label: "Control", value: "Universal 360° joystick" },
          { label: "Braking", value: "Electronic brake + electromagnetic brake" },
        ],
      },
      {
        category: "Dimensions & Weight",
        items: [
          { label: "Dimensions (L × W × H)", value: "93 × 62 × 90 cm" },
          { label: "Packaging", value: "115 × 65 × 64 cm" },
          { label: "Weight", value: "63 kg bare; 78 kg with standard battery" },
          { label: "Tyres", value: "6-inch solid front, 10-inch solid rear (conventional 201 base: 25 cm PU front, 22\" rear hand-rim)" },
        ],
      },
      {
        category: "Seating",
        items: [
          { label: "Seat Cushion", value: "47 cm W × 37 cm D × 53 cm ground height" },
          { label: "Backrest", value: "28 cm W × 28 cm H" },
          { label: "Armrests", value: "48 cm inner width" },
          { label: "Foot Pedal", value: "45 cm W × 32 cm L" },
        ],
      },
    ],
    whatsIncluded: ["Rise 2 sit-and-stand electric wheelchair", "24 V lead-acid battery and charger", "Protective gear: waist guard and knee pads"],
    protocol: protocol(["Use the standing function only as instructed, with the chair on level ground."]),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "How does the standing function work?", answer: "It is electrically controlled, with protective gear and a widened anti-rollover chassis." },
      { question: "How far does it travel?", answer: "10 to 20 km on a charge." },
    ],
    relatedProductIds: ["rise-1-standing-wheelchair", "rise-3-standing-wheelchair", "glide-core-wheelchair"],
  },

  "rise-3-standing-wheelchair": {
    id: "rise-3-standing-wheelchair",
    subtitle: "5-in-1 Electric Standing Wheelchair (Catalog Model: DW-EW307-5)",
    tagline: "A five-function electric chair with vertical lift, standing, lie-flat recline and seat tilt, lifting to a 1 m hover height.",
    overview: [
      "The Rise 3 (Catalog Model DW-EW307-5) is a 5-in-1 multi-functional electric chair: fully powered vertical lift, standing, lying flat (recline) and buttock lift / tilt. The seat lifts to a hovering height of 95 to 100 cm from the ground.",
      "A self-locking motor push-rod system helps prevent unintended drops or shifts, and rear anti-roll wheels add stability. Quick-release armrests and foot pedals, an adjustable backrest angle and an optional electric leg-lift package make it modular.",
      "Two 24 V 350 W motors run from a 24 V 40 Ah lead-acid battery to a speed of 0–8 km/h and a range of 25 km, controlled by a single-handed 360° joystick.",
    ],
    mechanismOfAction: {
      heading: "Powered Lift, Stand and Recline",
      description: "Electric actuators raise and recline the seat, locked by a self-locking push-rod system, while two 350 W motors drive the chair.",
      points: [
        "Powered vertical lift to 95–100 cm.",
        "Standing, lie-flat recline and seat tilt functions.",
        "Self-locking motor push-rod system and rear anti-roll wheels.",
        "Electronic brake + electromagnetic brake.",
      ],
    },
    features: [
      { title: "5-in-1 Articulation", description: "Vertical lift, standing, lying flat and buttock lift / tilt.", iconName: "Layers" },
      { title: "1 m Hover Height", description: "Seat lifts to 95–100 cm from the ground.", iconName: "Maximize" },
      { title: "Safety Lock", description: "Self-locking push-rod system with rear anti-roll wheels.", iconName: "ShieldCheck" },
      { title: "Modular Design", description: "Quick-release armrests and foot pedals, adjustable backrest, optional electric leg-lift.", iconName: "Sliders" },
      { title: "Single-Handed Joystick", description: "360° universal joystick controller.", iconName: "Target" },
    ],
    benefits: [
      { title: "Five Functions", description: "One chair covers lift, stand, recline and tilt.", metric: "5-in-1" },
      { title: "Big Battery", description: "24 V 40 Ah for a 25 km range.", metric: "25 km" },
    ],
    specGroups: [
      {
        category: "Performance",
        items: [
          { label: "Motors", value: "24 V 350 W × 2" },
          { label: "Battery", value: "24 V 40 Ah lead-acid" },
          { label: "Speed", value: "0–8 km/h" },
          { label: "Driving Range", value: "25 km" },
          { label: "Control", value: "Single-handed 360° universal joystick" },
          { label: "Braking", value: "Electronic brake + electromagnetic brake" },
        ],
      },
      {
        category: "Dimensions & Weight",
        items: [
          { label: "Dimensions (L × W × H)", value: "115 × 65 × 110 cm" },
          { label: "Packaging", value: "115 × 65 × 64 cm" },
          { label: "Weight", value: "76.5 kg bare; 100.5 kg with 24 V 40 Ah battery" },
          { label: "Tyres", value: "10-inch inflatable front (350-4), 14-inch vacuum rear (350-4)" },
        ],
      },
      {
        category: "Seating",
        items: [
          { label: "Seat Cushion", value: "45 cm W × 46 cm D × 46 cm base ground height (lifts to 95 cm)" },
          { label: "Backrest", value: "45 cm W × 58 cm H" },
          { label: "Headrest", value: "21 cm W × 15 cm H" },
          { label: "Armrests", value: "49 cm inner × 59 cm outer width, 75 cm ground height" },
        ],
      },
    ],
    whatsIncluded: ["Rise 3 5-in-1 electric wheelchair", "24 V 40 Ah lead-acid battery and charger", "Quick-release armrests and foot pedals", "Optional: electric leg-lift package"],
    protocol: protocol(["Use lift and standing functions only as instructed, with the chair on level ground."]),
    suitableEnvironments: HOME_AND_CARE,
    faqs: [
      { question: "What are the five functions?", answer: "Vertical lift, standing, lying flat (recline), and buttock lift / tilt." },
      { question: "How high does it lift?", answer: "To a hovering height of 95 to 100 cm." },
    ],
    relatedProductIds: ["rise-2-standing-wheelchair", "rise-1-standing-wheelchair", "glide-core-wheelchair"],
  },
};
