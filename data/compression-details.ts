import type { ProductDetail, ProductFeature, ProductSpecItem } from "./products-data";

/**
 * Detail pages for the PulseWave air-compression line.
 * Product detail data.
 * Wellness wording only: no treatment claims (edema, varicose veins, cramps, lymphatic claims removed), no pricing,
 * no carton / logistics data.
 */

const SAFETY =
  "Compression is not suitable for everyone. Consult a medical professional before use, especially if you have a circulation or vein condition, an injury, or reduced skin sensation, and follow the supplied instructions. Use the emergency air-release if you feel discomfort.";

const SPACES = [
  { type: "Gyms & Sports Teams", description: "Post-training recovery stations for athletes, with individual sets per user." },
  { type: "Physio & Wellness Clinics", description: "A portable recovery service for the treatment room." },
  { type: "Spas & Hotel Wellness", description: "A relaxing leg-care add-on to the guest menu." },
  { type: "Private Residences", description: "A personal recovery routine at home." },
];

type Input = {
  id: string;
  subtitle: string;
  tagline: string;
  overview: string[];
  heading: string;
  mechanism: string;
  points: string[];
  features: ProductFeature[];
  benefits: { title: string; description: string; metric?: string }[];
  specs: ProductSpecItem[];
  included: string[];
  duration: string;
  faqs: { question: string; answer: string }[];
  related: string[];
};

function compression(o: Input): ProductDetail {
  return {
    id: o.id,
    subtitle: o.subtitle,
    tagline: o.tagline,
    overview: o.overview,
    mechanismOfAction: { heading: o.heading, description: o.mechanism, points: o.points },
    features: o.features,
    benefits: o.benefits,
    specGroups: [{ category: "Specifications", items: o.specs }],
    whatsIncluded: o.included,
    protocol: {
      recommendedDuration: o.duration,
      frequency: "Per your wellness professional's programme",
      preparation: ["Charge the battery before use.", "Fit the sleeves snugly but comfortably, with the user seated or reclined."],
      protocolSteps: [
        { step: "Fit", instruction: "Put on the sleeves and close the zip, then switch on the controller." },
        { step: "Set", instruction: "Choose the mode and a comfortable pressure level, starting low." },
        { step: "Relax", instruction: "Stay seated or reclined while the programme runs, and release the air if uncomfortable." },
      ],
      contraindications: [SAFETY],
    },
    suitableEnvironments: SPACES,
    faqs: o.faqs,
    relatedProductIds: o.related,
  };
}

export const compressionDetails: Record<string, ProductDetail> = {
  "compression-boots-dj-sets": compression({
    id: "compression-boots-dj-sets",
    subtitle: "Wireless Air Compression Boots",
    tagline: "Cordless, tubeless boots with an on-boot LED controller, Bluetooth sync and five overlapping chambers.",
    overview: [
      "The PulseWave Go is a wireless compression boot set with an all-in-one smart controller mounted directly on the boots, with an LED screen display. No tubes or cables get in the way.",
      "Bluetooth synchronises both boots so they start, run and change programmes together. Five overlapping air chambers provide continuous sequential pressure with no gaps, and 11 intensity levels cover 50–150 mmHg across three compression modes.",
      "A zipper makes the boots easy to put on and take off, and an emergency air-release button lets pressure be released quickly.",
    ],
    heading: "Sequential Overlapping-Chamber Compression",
    mechanism: "Five overlapping air chambers inflate in sequence for continuous pressure along the leg, controlled from a controller on each boot.",
    points: ["5 overlapping chambers, no gaps.", "3 compression modes.", "11 intensity levels, 50–150 mmHg.", "Bluetooth sync between both boots."],
    features: [
      { title: "Cordless & Tubeless", description: "Smart controller sits on the boots with an LED display.", iconName: "Smartphone" },
      { title: "Bluetooth Sync", description: "Both boots start, run and change programme together.", iconName: "Zap" },
      { title: "5 Overlapping Chambers", description: "Continuous sequential pressure with no gaps.", iconName: "Layers" },
      { title: "Zipper & Air Release", description: "Easy to wear, with an emergency air-release button.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Freedom to Move", description: "No tubes, no wall outlet during sessions.", metric: "Wireless" },
      { title: "Fine Pressure Control", description: "11 levels from 50 to 150 mmHg.", metric: "50–150 mmHg" },
    ],
    specs: [
      { label: "Chambers", value: "5 overlapped" },
      { label: "Compression Modes", value: "3" },
      { label: "Pressure Range", value: "50–150 mmHg (11 levels)" },
      { label: "Battery", value: "Built-in 2600 mAh rechargeable" },
      { label: "Run Time / Charge Time", value: "~2.5 hours / ~3 hours" },
      { label: "Charging", value: "5 V / 3 A, 15 W" },
    ],
    included: ["PulseWave Go boot set (pair) with on-boot controllers", "Charging cable"],
    duration: "As advised by your wellness professional",
    faqs: [
      { question: "How long does a charge last?", answer: "About 2.5 hours of use, with about 3 hours to charge." },
      { question: "Do the boots connect to each other?", answer: "Yes, Bluetooth synchronises both boots." },
    ],
    related: ["pulsewave-glow-wireless-compression-boots-with-infrared-light", "pulsewave-charge-rechargeable-air-compression-boots", "compression-system-konbest-9690k"],
  }),

  "pulsewave-glow-wireless-compression-boots-with-infrared-light": compression({
    id: "pulsewave-glow-wireless-compression-boots-with-infrared-light",
    subtitle: "Wireless Compression Boots with Infrared LED Light",
    tagline: "Wireless compression with built-in infrared light emitters for gentle warmth during the session.",
    overview: [
      "The PulseWave Glow adds infrared light emitters inside the boot sleeves to the wireless compression design of the Go, offering gentle warmth alongside dynamic compression.",
      "It has a smart controller with a clear LED display, Bluetooth synchronisation across both legs, five overlapping air chambers, a rapid front zipper and an emergency air-release button. Pressure runs from 50 to 150 mmHg in 11 levels across three modes.",
    ],
    heading: "Compression with Infrared Warmth",
    mechanism: "Overlapping air chambers inflate in sequence while built-in infrared LEDs warm the leg.",
    points: ["5 overlapping chambers.", "Built-in infrared light emitters.", "3 modes, 11 levels, 50–150 mmHg.", "Bluetooth sync between both boots."],
    features: [
      { title: "Compression + Infrared", description: "Infrared emitters inside the sleeves provide gentle warmth.", iconName: "Sun" },
      { title: "Smart Wireless Control", description: "Controller with LED display and Bluetooth sync across both legs.", iconName: "Smartphone" },
      { title: "5 Overlapping Chambers", description: "Continuous sequential pressure.", iconName: "Layers" },
      { title: "Zipper & Air Release", description: "Rapid front zipper and an emergency air-release button.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Two Modes in One", description: "Compression and infrared light in a single set.", metric: "Compression + IR" },
      { title: "Wireless", description: "No tubes or cables.", metric: "Cordless" },
    ],
    specs: [
      { label: "Chambers", value: "5 overlapped" },
      { label: "Compression Modes", value: "3" },
      { label: "Pressure Range", value: "50–150 mmHg (11 levels)" },
      { label: "Infrared", value: "Integrated infrared light emitters in the boot sleeves" },
      { label: "Battery", value: "Built-in 2600 mAh rechargeable" },
      { label: "Run Time / Charge Time", value: "~2 hours / ~3 hours" },
      { label: "Charging", value: "5 V / 3 A, 15 W" },
    ],
    included: ["PulseWave Glow boot set (pair) with infrared emitters", "Charging cable"],
    duration: "As advised by your wellness professional",
    faqs: [
      { question: "What does the infrared do?", answer: "Built-in infrared emitters provide gentle warmth in the boot sleeves during the compression session." },
      { question: "How long does a charge last?", answer: "About 2 hours of use, with about 3 hours to charge." },
    ],
    related: ["compression-boots-dj-sets", "pulsewave-charge-rechargeable-air-compression-boots", "compression-system-konbest-9690k"],
  }),

  "pulsewave-ease-air-compression-leg-massager": compression({
    id: "pulsewave-ease-air-compression-leg-massager",
    subtitle: "Air Compression Leg Massager",
    tagline: "A quiet, rechargeable four-chamber leg massager with a contoured calf fit and up to 4 hours of use.",
    overview: [
      "The PulseWave Ease is an air compression recovery system with built-in curved modules shaped to the calf for added comfort. The pump is super quiet, so sessions don't disturb the room.",
      "Four air chambers, three massage modes and eight intensity levels run at 50–120 mmHg. A portable, rechargeable all-in-one controller means no wall outlet is needed during a session, and optional hip and arm sleeves are available.",
    ],
    heading: "Quiet Four-Chamber Compression",
    mechanism: "Four air chambers inflate in sequence from a quiet pump, with curved modules following the shape of the calf.",
    points: ["4 air chambers.", "3 massage modes.", "8 levels, 50–120 mmHg.", "Rechargeable, up to ~4 hours of use."],
    features: [
      { title: "Contoured Fit", description: "Curved modules follow the calf for comfort.", iconName: "Move" },
      { title: "Whisper-Quiet Pump", description: "Super quiet operation.", iconName: "VolumeX" },
      { title: "Cordless Sessions", description: "Portable, rechargeable controller.", iconName: "BatteryCharging" },
      { title: "Optional Attachments", description: "Hip and arm sleeves available separately.", iconName: "Layers" },
    ],
    benefits: [
      { title: "Long Run Time", description: "About 4 hours of continuous use.", metric: "~4 h" },
      { title: "Fast Charging", description: "About 2 hours to charge.", metric: "~2 h" },
    ],
    specs: [
      { label: "Chambers", value: "4 air chambers" },
      { label: "Massage Modes", value: "3" },
      { label: "Pressure Range", value: "50–120 mmHg (8 levels)" },
      { label: "Battery", value: "Built-in 2500 mAh rechargeable" },
      { label: "Run Time / Charge Time", value: "~4 hours / ~2 hours" },
      { label: "Charging", value: "12 V / 1 A, 12 W" },
    ],
    included: ["PulseWave Ease leg sleeves (pair) with controller", "Charger"],
    duration: "As advised by your wellness professional",
    faqs: [
      { question: "Is it noisy?", answer: "No. The pump is designed to be super quiet." },
      { question: "Can I add arm or hip sleeves?", answer: "Yes, optional hip and arm attachments are available." },
    ],
    related: ["pulsewave-charge-rechargeable-air-compression-boots", "pulsewave-recover-air-compression-recovery-system", "compression-boots-dj-sets"],
  }),

  "pulsewave-charge-rechargeable-air-compression-boots": compression({
    id: "pulsewave-charge-rechargeable-air-compression-boots",
    subtitle: "Rechargeable Air Compression Boots",
    tagline: "Four chambers, 12 intensity levels from a gentle 40 mmHg up to 150 mmHg, and a built-in battery.",
    overview: [
      "The PulseWave Charge offers an expanded pressure range, starting at a gentle 40 mmHg and reaching 150 mmHg across 12 adjustable levels and three compression modes.",
      "Anatomical calf modules help keep pressure even, and a high-capacity built-in battery with an integrated smart controller handle keeps the set portable. Optional hip and arm attachments are compatible.",
    ],
    heading: "Wide-Range Four-Chamber Compression",
    mechanism: "Four air chambers inflate in sequence, with a wide 40–150 mmHg range across 12 levels.",
    points: ["4 air chambers.", "3 compression modes.", "12 levels, 40–150 mmHg.", "Rechargeable, ~4 hours of use."],
    features: [
      { title: "12 Pressure Levels", description: "From a gentle 40 mmHg up to 150 mmHg.", iconName: "Sliders" },
      { title: "Contoured Fit", description: "Anatomical calf modules for even pressure.", iconName: "Move" },
      { title: "Portable", description: "Built-in battery and a controller handle.", iconName: "BatteryCharging" },
      { title: "Modular Attachments", description: "Compatible with optional hip and arm attachments.", iconName: "Layers" },
    ],
    benefits: [
      { title: "Gentle Start", description: "Begin at 40 mmHg and step up.", metric: "From 40 mmHg" },
      { title: "Long Run Time", description: "About 4 hours of use.", metric: "~4 h" },
    ],
    specs: [
      { label: "Chambers", value: "4 air chambers" },
      { label: "Compression Modes", value: "3" },
      { label: "Pressure Range", value: "40–150 mmHg (12 levels)" },
      { label: "Battery", value: "Built-in 2500 mAh rechargeable" },
      { label: "Run Time / Charge Time", value: "~4 hours / ~2 hours" },
      { label: "Charging", value: "12 V / 2 A, 24 W" },
    ],
    included: ["PulseWave Charge boot set (pair) with controller handle", "Charger"],
    duration: "As advised by your wellness professional",
    faqs: [
      { question: "What is the pressure range?", answer: "40 to 150 mmHg across 12 levels." },
      { question: "Is it rechargeable?", answer: "Yes, with a built-in 2500 mAh battery." },
    ],
    related: ["pulsewave-ease-air-compression-leg-massager", "pulsewave-recover-air-compression-recovery-system", "compression-boots-dj-sets"],
  }),

  "pulsewave-recover-air-compression-recovery-system": compression({
    id: "pulsewave-recover-air-compression-recovery-system",
    subtitle: "Air Compression Recovery System",
    tagline: "Five superimposed chambers with no gaps between bags, a seamless wave of compression and an LED controller.",
    overview: [
      "The PulseWave Recover uses five superimposed air bags with zero space between them for a seamless gradient wave of compression.",
      "A dual-action sequential inflation and deflation cycle runs through three massage modes at 11 intensity levels (50–150 mmHg). An all-in-one controller with LED display, curved calf modules and a durable zipper complete the set, with optional arm and hip sleeves available.",
    ],
    heading: "Superimposed Gradient Compression",
    mechanism: "Five superimposed air bags inflate and deflate in sequence for a continuous wave along the leg.",
    points: ["5 superimposed chambers, no gaps.", "3 massage modes.", "11 levels, 50–150 mmHg.", "Sequential inflation / deflation cycle."],
    features: [
      { title: "No-Gap Chambers", description: "Five superimposed air bags with zero space between them.", iconName: "Layers" },
      { title: "Sequential Cycle", description: "Dual-action inflation and deflation.", iconName: "Activity" },
      { title: "LED Controller", description: "All-in-one controller with LED screen.", iconName: "Monitor" },
      { title: "Optional Sleeves", description: "Arm and hip sleeves available.", iconName: "Move" },
    ],
    benefits: [
      { title: "Seamless Wave", description: "Continuous compression along the leg.", metric: "5 Chambers" },
      { title: "11 Intensity Levels", description: "50 to 150 mmHg.", metric: "50–150 mmHg" },
    ],
    specs: [
      { label: "Chambers", value: "5 overlapped" },
      { label: "Massage Modes", value: "3" },
      { label: "Pressure Range", value: "50–150 mmHg (11 levels)" },
      { label: "Battery", value: "Built-in 2500 mAh rechargeable" },
      { label: "Run Time / Charge Time", value: "~2 hours / ~2 hours" },
      { label: "Charging", value: "12 V / 2 A, 24 W" },
    ],
    included: ["PulseWave Recover leg sleeves (pair) with controller", "Charger"],
    duration: "As advised by your wellness professional",
    faqs: [
      { question: "How many chambers?", answer: "Five superimposed chambers with no gaps." },
      { question: "How long does it run?", answer: "About 2 hours, with about 2 hours to charge." },
    ],
    related: ["pulsewave-charge-rechargeable-air-compression-boots", "pulsewave-ease-air-compression-leg-massager", "compression-system-konbest-9690k"],
  }),

  "pulsewave-max-8-chamber-air-compression-recovery-system": compression({
    id: "pulsewave-max-8-chamber-air-compression-recovery-system",
    subtitle: "8-Chamber Rechargeable Air Compression Recovery Boots",
    tagline: "Eight overlapping chambers, six programmes, individual chamber selection and a 15–60 minute timer.",
    overview: [
      "The PulseWave Max is the elite eight-chamber set, with eight overlapping air chambers distributing pressure from the foot to the upper thigh. A single full-length front zipper removes the need for multiple connection pieces.",
      "An all-in-one smart touch controller supports individual chamber selection, six massage programmes and 11 intensity levels (50–150 mmHg). A timer from 15 to 60 minutes can be set in 5-minute steps.",
      "A built-in 11.1 V / 4500 mAh lithium battery gives about 2.5 hours of use.",
    ],
    heading: "Eight-Chamber Programmable Compression",
    mechanism: "Eight overlapping chambers inflate in programmed sequences, with each chamber selectable from a touch controller.",
    points: ["8 overlapping chambers.", "6 massage programmes.", "11 levels, 50–150 mmHg.", "15–60 minute timer in 5-minute steps."],
    features: [
      { title: "8 Overlapping Chambers", description: "Granular pressure distribution from foot to upper thigh.", iconName: "Layers" },
      { title: "Full-Length Zipper", description: "One zipper, no separate connection pieces.", iconName: "Maximize" },
      { title: "Individual Chamber Selection", description: "Touch controller lets users choose which chambers to run.", iconName: "Sliders" },
      { title: "Precision Timer", description: "15 to 60 minutes in 5-minute steps.", iconName: "Target" },
    ],
    benefits: [
      { title: "6 Programmes", description: "A range of sequences to choose from.", metric: "6 Modes" },
      { title: "Fine Control", description: "11 pressure levels, 50–150 mmHg.", metric: "11 Levels" },
    ],
    specs: [
      { label: "Chambers", value: "8 overlapped" },
      { label: "Massage Programmes", value: "6" },
      { label: "Pressure Range", value: "50–150 mmHg (11 levels)" },
      { label: "Timer", value: "15–60 minutes (5-minute steps)" },
      { label: "Battery", value: "Built-in 11.1 V / 4500 mAh lithium" },
      { label: "Run Time / Charge Time", value: "~2.5 hours / ~2.5 hours" },
      { label: "Charging", value: "12 V / 3 A, 36 W" },
    ],
    included: ["PulseWave Max boot set (pair) with touch controller", "Charger"],
    duration: "15 to 60 minutes (set on the timer)",
    faqs: [
      { question: "Can I switch off some chambers?", answer: "Yes, the touch controller supports individual chamber selection." },
      { question: "How long can a session run?", answer: "The timer is adjustable from 15 to 60 minutes in 5-minute steps." },
    ],
    related: ["compression-system-konbest-9690k", "pulsewave-charge-rechargeable-air-compression-boots", "compression-boots-dj-sets"],
  }),

  "compression-system-konbest-9690k": compression({
    id: "compression-system-konbest-9690k",
    subtitle: "Professional 6-Chamber Compression System with App Control",
    tagline: "Six chambers, 30–260 mmHg, an LED touch screen, app control and a quiet brushless pump under 45 dB.",
    overview: [
      "The PulseWave Pro 6 is built for sports clubs, athletic trainers and physiotherapists. Six overlapping chamber cuffs cover the feet, calves, knees and thighs in a progressive sequential pattern.",
      "A high-power brushless DC pump inflates quickly and runs quietly, under 45 dB. Pressure is shown on an LED touch screen, with smart app control and a digital pressure sensor for precise regulation across 30 to 260 mmHg.",
      "Six pre-programmed modes (such as Warm Up, Deep Recovery, Rapid Recovery and All-Chamber Massage) are available. Skip Care lets selected chambers be turned off, while Intensive Care focuses on chosen areas. A 5200 mAh battery gives 2 to 5 hours of cordless use.",
    ],
    heading: "Six-Chamber Sequential Compression",
    mechanism: "Six overlapping chambers inflate in sequence from foot to thigh, with pressure regulated by a digital sensor and set from the touch screen or app.",
    points: ["6 overlapping chambers.", "6 pre-programmed modes.", "30–260 mmHg with digital sensor regulation.", "10–90 minute timer."],
    features: [
      { title: "6-Chamber Architecture", description: "Overlapping cuffs from feet to thighs.", iconName: "Layers" },
      { title: "Quiet Brushless Pump", description: "Rapid inflation at under 45 dB.", iconName: "VolumeX" },
      { title: "Touch Screen & App", description: "LED touch screen with pressure readout and smart app control.", iconName: "Smartphone" },
      { title: "Skip Care & Intensive Care", description: "Turn selected chambers off, or focus on chosen areas.", iconName: "Sliders" },
      { title: "Dynamic Air-Pressure Cycles", description: "Programmed pressure cycles across the modes.", iconName: "Activity" },
    ],
    benefits: [
      { title: "Wide Pressure Range", description: "30 to 260 mmHg.", metric: "30–260 mmHg" },
      { title: "Long Cordless Use", description: "2 to 5 hours on a charge.", metric: "2–5 h" },
    ],
    specs: [
      { label: "Chambers", value: "6" },
      { label: "Modes", value: "6 pre-programmed (Warm Up, Deep Recovery, Rapid Recovery, All-Chamber Massage, etc.)" },
      { label: "Pressure Range", value: "30–260 mmHg, digital pressure sensor" },
      { label: "Timer", value: "10–90 minutes" },
      { label: "Battery", value: "5200 mAh lithium-ion; 2–5 hours cordless" },
      { label: "Noise Level", value: "< 45 dB" },
      { label: "Main Unit", value: "132 × 212 × 89 mm, 1.5 kg" },
      { label: "Compatible Accessories", value: "Long pants, vest with arms, waist cuff, hip cuff, shoulder cuff, carry case" },
    ],
    included: ["PulseWave Pro 6 main unit with 6-chamber leg sleeves", "Charger", "Optional accessories: pants, vest, waist / hip / shoulder cuffs, carry case"],
    duration: "10 to 90 minutes (set on the timer)",
    faqs: [
      { question: "What pressure range does it cover?", answer: "30 to 260 mmHg." },
      { question: "Can I turn off some chambers?", answer: "Yes, Skip Care lets selected chambers be turned off." },
      { question: "How loud is it?", answer: "Under 45 dB." },
    ],
    related: ["pulsewave-pro-8-air-compression-recovery-system-8-chamber", "pulsewave-max-8-chamber-air-compression-recovery-system", "pulsewave-4-air-compression-boots-wireless-app-control"],
  }),

  "pulsewave-pro-8-air-compression-recovery-system-8-chamber": compression({
    id: "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
    subtitle: "Professional 8-Chamber Compression System with App Control",
    tagline: "Eight overlapping chambers, a high-flow brushless pump up to 260 mmHg, a touch screen and independent zone selection.",
    overview: [
      "The PulseWave Pro 8 is the eight-chamber version for sports clubs and rehabilitation clinics. Eight overlapping chambers deliver granular, multi-zone sequential compression from the feet to the upper thigh.",
      "A high-flow brushless pump supports pressures from 30 up to 260 mmHg, regulated by a built-in sensor. An LED touch screen shows chamber pressure readouts, with full app connectivity. Six modes and a 10 to 90 minute timer are available.",
      "Skip Care and Intensive Care let the operator bypass or focus on selected zones. A 5200 mAh lithium battery runs 2 to 5 hours at under 45 dB.",
    ],
    heading: "Eight-Chamber Sequential Compression",
    mechanism: "Eight overlapping chambers inflate in sequence, with built-in sensors regulating pressure and an app and touch screen to set zones and modes.",
    points: ["8 overlapping chambers.", "6 modes.", "30–260 mmHg, sensor-regulated.", "10–90 minute timer."],
    features: [
      { title: "8-Chamber Segmentation", description: "Granular multi-zone sequential compression from feet to high thigh.", iconName: "Layers" },
      { title: "High-Flow Pump", description: "Brushless pump supporting up to 260 mmHg.", iconName: "Zap" },
      { title: "Touch Screen & App", description: "Chamber pressure readouts and full app connectivity.", iconName: "Smartphone" },
      { title: "Independent Zone Selection", description: "Skip Care and Intensive Care for chosen zones.", iconName: "Sliders" },
    ],
    benefits: [
      { title: "Highest Resolution", description: "Eight chambers for fine pressure distribution.", metric: "8 Chambers" },
      { title: "Quiet", description: "Under 45 dB.", metric: "< 45 dB" },
    ],
    specs: [
      { label: "Chambers", value: "8 overlapping" },
      { label: "Modes", value: "6" },
      { label: "Pressure Range", value: "30–260 mmHg, built-in sensor" },
      { label: "Timer", value: "10–90 minutes" },
      { label: "Battery", value: "5200 mAh lithium; 2–5 hours" },
      { label: "Noise Level", value: "< 45 dB" },
      { label: "Main Unit", value: "132 × 212 × 89 mm, 1.5 kg" },
      { label: "Compatible Accessories", value: "8-chamber vest cuff, full overlapping recovery pants, arm cuffs, travel bags" },
    ],
    included: ["PulseWave Pro 8 main unit with 8-chamber leg sleeves", "Charger", "Optional accessories: vest cuff, recovery pants, arm cuffs, travel bag"],
    duration: "10 to 90 minutes (set on the timer)",
    faqs: [
      { question: "How is it different from the Pro 6?", answer: "It has eight chambers instead of six, for finer zone control, with the same 30–260 mmHg range." },
      { question: "How long does the battery last?", answer: "2 to 5 hours." },
    ],
    related: ["compression-system-konbest-9690k", "pulsewave-max-8-chamber-air-compression-recovery-system", "pulsewave-4-air-compression-boots-wireless-app-control"],
  }),

  "pulsewave-4-air-compression-boots-wireless-app-control": compression({
    id: "pulsewave-4-air-compression-boots-wireless-app-control",
    subtitle: "Wireless 4-Chamber Compression Boots with App Control",
    tagline: "Cordless four-chamber boots with detachable pump modules, per-leg settings, colour LCD and app control.",
    overview: [
      "The PulseWave 4 is a cordless set with fully detachable pump modules mounted directly on the boot sleeves, so there are no trailing hoses.",
      "A Motion Space pump system lets each leg run its own pressure and mode. A vibrant colour LCD and built-in app control (iOS and Android) set five modes at 30 to 240 mmHg, regulated by a digital pressure sensor. Four overlapping chambers cover the foot, calf, knee and thigh.",
      "Timers of 15, 30 and 45 minutes are available (total session up to 180 minutes), with a 3200 mAh battery giving 1 to 3 hours of cordless use at under 45 dB.",
    ],
    heading: "Wireless Four-Chamber Compression",
    mechanism: "Pump modules on each boot inflate four overlapping chambers in sequence, controlled by an LCD and app with independent settings per leg.",
    points: ["4 overlapping chambers.", "5 massage modes.", "30–240 mmHg with digital sensor.", "Independent settings per leg."],
    features: [
      { title: "Cordless Design", description: "Detachable pump modules on the boots, no external hoses.", iconName: "Smartphone" },
      { title: "Independent Legs", description: "Separate pressure and mode for each leg.", iconName: "Sliders" },
      { title: "App & Colour LCD", description: "iOS / Android app control plus a colour LCD.", iconName: "Monitor" },
      { title: "Full Leg Coverage", description: "Overlapping 4-chamber sleeves from foot to thigh.", iconName: "Layers" },
    ],
    benefits: [
      { title: "Travel Ready", description: "Cordless and portable.", metric: "1–3 h Battery" },
      { title: "Wide Pressure Range", description: "30 to 240 mmHg.", metric: "30–240 mmHg" },
    ],
    specs: [
      { label: "Chambers", value: "4 overlapped" },
      { label: "Modes", value: "5 massage modes" },
      { label: "Pressure Range", value: "30–240 mmHg, digital pressure sensor" },
      { label: "Timer", value: "15 / 30 / 45 minutes (total session up to 180 min)" },
      { label: "Battery", value: "3200 mAh lithium; 1–3 hours" },
      { label: "Noise Level", value: "< 45 dB" },
      { label: "Unit", value: "155 × 105 × 55 mm, 1.5 kg" },
    ],
    included: ["PulseWave 4 boot set (pair) with detachable pump modules", "Charger"],
    duration: "15, 30 or 45 minutes (set on the timer)",
    faqs: [
      { question: "Can each leg be set separately?", answer: "Yes, each leg can have its own pressure and mode." },
      { question: "Does it have an app?", answer: "Yes, for iOS and Android." },
    ],
    related: ["pulsewave-4-plus-air-compression-boots", "pulsewave-4-direct-air-compression-boots", "pulsewave-5-portable-air-compression-boots"],
  }),

  "pulsewave-4-plus-air-compression-boots": compression({
    id: "pulsewave-4-plus-air-compression-boots",
    subtitle: "Wireless 4-Chamber Compression Boots, App Control",
    tagline: "A cordless four-chamber set with direct-docking pump modules, colour LCD, app sync and independent limb control.",
    overview: [
      "The PulseWave 4 Plus is a wireless set for athletes, runners and sports travellers. Pump modules dock directly on the boots, so there are no external air hoses.",
      "A colour LCD and smartphone app synchronisation set customised cycling profiles, and pressure can be set independently for each leg. Four overlapping chambers run five massage modes at 30 to 240 mmHg with a digital pressure sensor.",
      "Timers of 15, 30 and 45 minutes are available, with a 3200 mAh battery giving 1 to 3 hours of use at under 45 dB.",
    ],
    heading: "Wireless Four-Chamber Compression",
    mechanism: "Direct-docking pump modules inflate four overlapping chambers in sequence, with an app and LCD for profiles and per-leg pressure.",
    points: ["4 overlapping chambers.", "5 massage modes.", "30–240 mmHg.", "Independent pressure per leg."],
    features: [
      { title: "Wireless Integrated Design", description: "Direct-docking pump modules, no external hoses.", iconName: "Smartphone" },
      { title: "Colour LCD & App", description: "App sync for customised cycling profiles.", iconName: "Monitor" },
      { title: "Independent Limb Control", description: "Set pressure separately for each leg.", iconName: "Sliders" },
    ],
    benefits: [
      { title: "On-the-Go", description: "Cordless for sports travel.", metric: "1–3 h Battery" },
      { title: "Precise Pressure", description: "Digital sensor calibration, 30–240 mmHg.", metric: "30–240 mmHg" },
    ],
    specs: [
      { label: "Chambers", value: "4 overlapped" },
      { label: "Modes", value: "5 massage modes" },
      { label: "Pressure Range", value: "30–240 mmHg, digital pressure sensor" },
      { label: "Timer", value: "15 / 30 / 45 minutes" },
      { label: "Battery", value: "3200 mAh lithium; 1–3 hours" },
      { label: "Noise Level", value: "< 45 dB" },
      { label: "Unit", value: "155 × 105 × 55 mm, 1.5 kg" },
    ],
    included: ["PulseWave 4 Plus boot set (pair) with pump modules", "Charger"],
    duration: "15, 30 or 45 minutes (set on the timer)",
    faqs: [
      { question: "Does it use hoses?", answer: "No. Pump modules dock directly on the boots." },
      { question: "How long does the battery last?", answer: "1 to 3 hours." },
    ],
    related: ["pulsewave-4-air-compression-boots-wireless-app-control", "pulsewave-4-direct-air-compression-boots", "pulsewave-5-portable-air-compression-boots"],
  }),

  "pulsewave-4-direct-air-compression-boots": compression({
    id: "pulsewave-4-direct-air-compression-boots",
    subtitle: "Hand-Controlled 4-Chamber Compression Boots",
    tagline: "A four-chamber set with an ergonomic hand controller on quick-connect hoses, large colour LCD and physical buttons.",
    overview: [
      "The PulseWave 4 Direct uses an external handheld controller connected by durable quick-connect hoses, keeping weight off the legs.",
      "A large colour LCD and tactile physical buttons make it simple to use without a smartphone. Four overlapping chambers run five massage modes at up to 240 mmHg (30–240 mmHg), with timers of 15, 30 and 45 minutes.",
      "A 3200 mAh rechargeable lithium battery gives 1 to 3 hours of use at under 45 dB. Optional arm, waist and hip cuffs are supported.",
    ],
    heading: "Hand-Controlled Four-Chamber Compression",
    mechanism: "A handheld controller drives four overlapping chambers through quick-connect hoses, with buttons and a large screen for direct control.",
    points: ["4 overlapping chambers.", "5 massage modes.", "30–240 mmHg.", "Handheld controller with physical buttons."],
    features: [
      { title: "Hand Controller", description: "External handheld controller on quick-connect hoses, keeping weight off the legs.", iconName: "Target" },
      { title: "Large Colour LCD", description: "Large display with tactile buttons, no smartphone needed.", iconName: "Monitor" },
      { title: "Wide Pressure Range", description: "Up to 240 mmHg across 4 chambers.", iconName: "Sliders" },
      { title: "Optional Cuffs", description: "Arm, waist and hip cuffs supported.", iconName: "Layers" },
    ],
    benefits: [
      { title: "Simple to Use", description: "Physical buttons, no app required.", metric: "No App Needed" },
      { title: "Light on the Legs", description: "Controller held in the hand.", metric: "Hand-Held" },
    ],
    specs: [
      { label: "Chambers", value: "4 overlapped" },
      { label: "Modes", value: "5 massage modes" },
      { label: "Pressure Range", value: "30–240 mmHg" },
      { label: "Timer", value: "15 / 30 / 45 minutes" },
      { label: "Battery", value: "3200 mAh rechargeable lithium; 1–3 hours" },
      { label: "Noise Level", value: "< 45 dB" },
      { label: "Main Unit", value: "155 × 105 × 55 mm, 1.5 kg" },
      { label: "Accessories Supported", value: "Optional arm, waist and hip cuffs" },
    ],
    included: ["PulseWave 4 Direct boot set (pair)", "Hand controller with quick-connect hoses", "Charger"],
    duration: "15, 30 or 45 minutes (set on the timer)",
    faqs: [
      { question: "Does it need a smartphone?", answer: "No. It is controlled from the handheld controller." },
      { question: "Can I add arm or hip cuffs?", answer: "Yes, optional arm, waist and hip cuffs are supported." },
    ],
    related: ["pulsewave-4-air-compression-boots-wireless-app-control", "pulsewave-4-plus-air-compression-boots", "pulsewave-5-portable-air-compression-boots"],
  }),

  "pulsewave-5-portable-air-compression-boots": compression({
    id: "pulsewave-5-portable-air-compression-boots",
    subtitle: "Portable 5-Chamber Compression Boots",
    tagline: "A cordless five-chamber set with a clear LCD, three preset modes and 50–200 mmHg, built for home and fitness use.",
    overview: [
      "The PulseWave 5 is a cordless, battery-powered five-chamber set for travel or living-room sessions.",
      "A fifth intermediate chamber gives smoother pressure transitions between the calf and upper thigh than four-chamber entry models. A clear digital LCD with essential buttons keeps operation simple across three preset modes and 50 to 200 mmHg.",
      "Timers of 10, 20 and 30 minutes are available, with a 3200 mAh battery giving 1 to 3 hours of use at under 45 dB.",
    ],
    heading: "Portable Five-Chamber Compression",
    mechanism: "Five chambers inflate in sequence, with an extra intermediate chamber smoothing the transition from calf to thigh.",
    points: ["5 chambers.", "3 preset modes.", "50–200 mmHg.", "10 / 20 / 30 minute timers."],
    features: [
      { title: "5-Chamber Layout", description: "An additional intermediate chamber for smoother transitions.", iconName: "Layers" },
      { title: "Clear LCD", description: "Digital readout with essential buttons.", iconName: "Monitor" },
      { title: "Cordless", description: "Rechargeable for travel or home use.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "Easy Operation", description: "Three preset modes and simple buttons.", metric: "3 Modes" },
      { title: "Portable", description: "150 × 100 × 51 mm unit, 1.5 kg.", metric: "1.5 kg" },
    ],
    specs: [
      { label: "Chambers", value: "5" },
      { label: "Modes", value: "3 pre-set massage modes" },
      { label: "Pressure Range", value: "50–200 mmHg" },
      { label: "Timer", value: "10 / 20 / 30 minutes" },
      { label: "Battery", value: "3200 mAh lithium; 1–3 hours" },
      { label: "Noise Level", value: "< 45 dB" },
      { label: "Unit", value: "150 × 100 × 51 mm, 1.5 kg" },
    ],
    included: ["PulseWave 5 boot set (pair)", "Charger"],
    duration: "10, 20 or 30 minutes (set on the timer)",
    faqs: [
      { question: "How many chambers?", answer: "Five." },
      { question: "What is the pressure range?", answer: "50 to 200 mmHg." },
    ],
    related: ["pulsewave-4-air-compression-boots-wireless-app-control", "pulsewave-4-direct-air-compression-boots", "pulsewave-4-plus-air-compression-boots"],
  }),
};
