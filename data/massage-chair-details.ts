import type { ProductDetail, ProductFeature, ProductSpecItem } from "./products-data";

/**
 * Detail pages for the Serene massage chairs.
 * Product detail data.
 * Wellness wording only: no treatment claims, no pricing, no carton / shipping data.
 */

const SAFETY =
  "Massage chairs are not suitable for everyone. Consult a medical professional before use, especially if you are pregnant, have a pacemaker or medical implant, an injury, or a spinal condition, and follow the supplied instructions.";

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
  specGroups: { category: string; items: ProductSpecItem[] }[];
  included: string[];
  duration?: string;
  environments: { type: string; description: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

function chair(o: Input): ProductDetail {
  return {
    id: o.id,
    subtitle: o.subtitle,
    tagline: o.tagline,
    overview: o.overview,
    mechanismOfAction: { heading: o.heading, description: o.mechanism, points: o.points },
    features: o.features,
    benefits: o.benefits,
    specGroups: o.specGroups,
    whatsIncluded: o.included,
    protocol: {
      recommendedDuration: o.duration ?? "As advised in the user manual",
      frequency: "As desired, within the supplied guidance",
      preparation: ["Place the chair on a level floor with the clearance noted in the specifications.", "Sit back fully and adjust the recline before starting."],
      protocolSteps: [
        { step: "Settle in", instruction: "Sit back against the chair and choose an automatic programme." },
        { step: "Adjust", instruction: "Fine-tune the recline, intensity and heating from the controller." },
        { step: "Finish", instruction: "Let the programme end, then rise slowly." },
      ],
      contraindications: [SAFETY],
    },
    suitableEnvironments: o.environments,
    faqs: o.faqs,
    relatedProductIds: o.related,
  };
}

export const massageChairDetails: Record<string, ProductDetail> = {
  "massage-chair-mid-range-lion": chair({
    id: "massage-chair-mid-range-lion",
    subtitle: "Mid-Range 3D Full-Body Massage Chair with SL Track",
    tagline: "A 3D mechanism on a super-long SL track, with full-body airbags, body scan, three zero-gravity positions and 12 automatic programmes.",
    overview: [
      "The Serene Mid is a full-body massage chair built around a 3D mechanism with smooth, contoured rollers that follow the body's curves. A super-long SL track runs from the neck and shoulders down the spine to the glutes and upper thighs.",
      "Full-body airbags wrap the shoulders, arms, calves and feet, and a smart body scan maps shoulder position and spine contour before each session. Heating pads in the backrest and armrests, three zero-gravity positions and an automatic leg extension complete the comfort features.",
      "Twelve automatic programmes cover recovery, relaxation, stretching and sleep. Built-in Bluetooth speakers, an onboard storage box and a USB charging port finish the experience.",
    ],
    heading: "3D Roller Mechanism on a Long SL Track",
    mechanism: "A 3D roller mechanism travels along an extended SL-shaped track while airbags and leg rollers work on the arms, legs and feet, guided by a body scan.",
    points: [
      "3D roller mechanism that follows the contour of the body.",
      "Super-long SL track from neck to upper thighs.",
      "Smart body scan before each programme.",
      "Full-body airbags plus leg and foot rollers.",
    ],
    features: [
      { title: "3D Mechanism", description: "Smooth contoured rollers that follow the body's curves.", iconName: "Layers" },
      { title: "Super-Long SL Track", description: "Extended rail from neck and shoulders to glutes and upper thighs.", iconName: "Move" },
      { title: "Smart Body Scan", description: "Maps shoulders and spine before the session.", iconName: "Target" },
      { title: "Back & Hand Heating", description: "Heating pads in the backrest and armrests.", iconName: "Flame" },
      { title: "3 Zero-Gravity Positions", description: "Multi-angle weightless recline.", iconName: "Maximize" },
      { title: "12 Auto Programmes", description: "Recovery, relaxation, stretching and sleep routines.", iconName: "Sliders" },
      { title: "Bluetooth & USB", description: "Bluetooth speakers, storage box and a USB charging port.", iconName: "Speaker" },
    ],
    benefits: [
      { title: "Full-Body Coverage", description: "Neck to feet in one session.", metric: "Full Body" },
      { title: "12 Programmes", description: "Preset routines for different moods and needs.", metric: "12 Modes" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Mechanism", value: "3D, super-long SL track" },
          { label: "Airbags", value: "Full-body (shoulders, arms, calves, feet)" },
          { label: "Zero-Gravity Positions", value: "3" },
          { label: "Automatic Programmes", value: "12" },
          { label: "Heating", value: "Back and hand heating" },
          { label: "Leg", value: "Automatic leg extension; leg & foot roller and compression" },
          { label: "Input Voltage", value: "AC 110–240 V" },
          { label: "Dimensions (L × W × H)", value: "133.6 × 89.0 × 124.0 cm" },
        ],
      },
    ],
    included: ["Serene Mid massage chair", "Controller", "Power cable"],
    environments: [
      { type: "Spas & Wellness Centres", description: "A mid-range chair for guest relaxation areas." },
      { type: "Gyms & Offices", description: "A recovery lounge corner for members or staff." },
      { type: "Private Residences", description: "A full-body massage chair for the home." },
    ],
    faqs: [
      { question: "How many programmes does it have?", answer: "12 automatic programmes." },
      { question: "Does it have audio?", answer: "Yes, Bluetooth speakers, plus a USB charging port and a storage box." },
    ],
    related: ["massage-chair-elite-ms131", "comfort-sl-massage-chair", "lounge-sl-massage-chair"],
  }),

  "massage-chair-elite-ms131": chair({
    id: "massage-chair-elite-ms131",
    subtitle: "Elite 4D Smart Full-Body Massage Chair",
    tagline: "A 4D mechanism with adjustable depth from 38 to 118 mm, super-long SL track, body scan, heel rocking and a touchscreen controller.",
    overview: [
      "The Serene Elite is a flagship 4D smart massage chair. Its in-and-out depth is adjustable from 38 mm up to 118 mm, with an up-and-down speed of 10 to 50 mm/s, designed to mimic the feel of a therapist's hands.",
      "A super-long continuous SL track covers neck to hamstrings, while full-body airbags with intelligent anti-pinch sensors add compression safely. A high-precision optical body scan tailors the session to the individual's spine.",
      "Lower-leg care includes triple foot rollers, a heel rocking massage, leg kneading plates and automatic leg extension. Three zero-gravity positions, dual heating zones (back and hands), an ultra-thin touchscreen controller, a wireless phone-charging pad and a sleep-oriented music system with high-fidelity speakers complete the chair.",
    ],
    heading: "4D Depth-Adjusting Mechanism",
    mechanism: "A 4D mechanism varies roller depth and speed along a super-long SL track, while airbags, foot rollers and leg kneading plates work on the limbs, guided by an optical body scan.",
    points: [
      "4D mechanism, depth adjustable 38–118 mm, speed 10–50 mm/s.",
      "Super-long SL track from neck to hamstrings.",
      "Intelligent anti-pinch sensors with full-body airbags.",
      "Triple foot rollers, heel rocking and leg kneading.",
    ],
    features: [
      { title: "4D Smart Mechanism", description: "Depth adjustable from 38 to 118 mm.", iconName: "Layers" },
      { title: "Super-Long SL Track", description: "Continuous rail from neck to hamstring.", iconName: "Move" },
      { title: "Optical Body Scan", description: "High-precision detection for individual spine alignment.", iconName: "Target" },
      { title: "Anti-Pinch Safety", description: "Intelligent sensors prevent pinching during articulation.", iconName: "ShieldCheck" },
      { title: "Advanced Lower-Leg Care", description: "Triple foot rollers, heel rocking, leg kneading and automatic extension.", iconName: "Footprints" },
      { title: "3 Zero-Gravity Positions", description: "Deep-angle zero-gravity recline.", iconName: "Maximize" },
      { title: "Heating", description: "Dual heating zones for back and hands.", iconName: "Flame" },
      { title: "Smart Controls", description: "Ultra-thin touchscreen, wireless phone charging and hi-fi speakers.", iconName: "Monitor" },
    ],
    benefits: [
      { title: "Adjustable Depth", description: "38 to 118 mm.", metric: "38–118 mm" },
      { title: "Premium Comfort", description: "Elite-range features throughout.", metric: "Elite" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Mechanism", value: "4D smart, 38–118 mm amplitude, 10–50 mm/s up/down speed" },
          { label: "Track", value: "Super-long SL track" },
          { label: "Rated Power", value: "170 W" },
          { label: "Input Voltage", value: "AC 110–240 V" },
          { label: "Zero-Gravity Positions", value: "3" },
          { label: "Heating", value: "Dual zones: back and hands" },
          { label: "Controller", value: "Ultra-thin touchscreen; wireless smartphone charging pad" },
        ],
      },
      {
        category: "Dimensions & Weight",
        items: [
          { label: "Length", value: "~162.5 cm upright to ~193.8 cm fully reclined" },
          { label: "Width", value: "~83.8 cm" },
          { label: "Height", value: "~137.2 cm upright to ~106.7 cm reclined" },
          { label: "Net Weight", value: "153 kg" },
        ],
      },
    ],
    included: ["Serene Elite massage chair with footrest", "Touchscreen controller", "Power cable"],
    environments: [
      { type: "Luxury Spas & Hotels", description: "A premium chair for suites and relaxation lounges." },
      { type: "Longevity & Wellness Centres", description: "A flagship feature for recovery floors." },
      { type: "Private Residences", description: "A high-end massage chair for the home." },
    ],
    faqs: [
      { question: "What does 4D mean?", answer: "The mechanism varies depth in and out (38–118 mm) as well as moving along the track." },
      { question: "Can it charge my phone?", answer: "Yes, it has an integrated wireless smartphone charging pad." },
      { question: "What power does it use?", answer: "170 W at AC 110–240 V." },
    ],
    related: ["massage-chair-mid-range-lion", "comfort-sl-massage-chair", "lounge-sl-massage-chair"],
  }),

  "lounge-sl-massage-chair": chair({
    id: "lounge-sl-massage-chair",
    subtitle: "SL-Track Lounge Massage Chair with Footstool",
    tagline: "A contemporary lounge-style chair combining SL-track massage, electric recline, waist heating and a separate footstool.",
    overview: [
      "The Serene Lounge (SL Track) is a contemporary lounge-style massage chair that brings SL-track massage into an open, lounge-chair form. Electric recline and a separate footstool support relaxed seating.",
      "Integrated waist heating, Bluetooth music and five automatic programmes round out the experience. Control is by a handrail shortcut key or a wireless controller, and the chair charges by USB / Type-C fast charging.",
      "Six airbags, a quiet 55 dB running noise and a compact 35 cm zero-wall clearance suit residential and hospitality wellness rooms.",
    ],
    heading: "SL-Track Massage in a Lounge Form",
    mechanism: "An SL-track massage mechanism and six airbags work in a lounge-style chair with electric recline and waist heating.",
    points: ["SL-track massage.", "5 automatic programmes.", "6 airbags.", "Waist heating and Bluetooth music."],
    features: [
      { title: "SL-Track Massage", description: "SL-track massage in an open lounge-chair form.", iconName: "Move" },
      { title: "Electric Recline", description: "Electric recline with a separate footstool.", iconName: "Maximize" },
      { title: "Waist Heating", description: "Integrated waist heating for restorative sessions.", iconName: "Flame" },
      { title: "USB / Type-C Charging", description: "Fast charging with a wireless controller.", iconName: "BatteryCharging" },
      { title: "Bluetooth Music", description: "Built-in Bluetooth audio.", iconName: "Speaker" },
    ],
    benefits: [
      { title: "Compact Clearance", description: "Needs only ~35 cm behind the chair.", metric: "35 cm" },
      { title: "Quiet", description: "Running noise of 55 dB or less.", metric: "≤ 55 dB" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Massage", value: "SL-track" },
          { label: "Recline", value: "Electric" },
          { label: "Footstool", value: "Separate" },
          { label: "Control", value: "Handrail shortcut key, wireless controller" },
          { label: "Heating", value: "Waist heating" },
          { label: "Audio", value: "Bluetooth music" },
          { label: "Charging", value: "USB / Type-C fast charging" },
          { label: "Automatic Programmes", value: "5" },
        ],
      },
      {
        category: "Technical",
        items: [
          { label: "Power", value: "~70 W (standby ~0.1–1 W)" },
          { label: "Airbags / Air Pump / Valves", value: "6 / 1 / 1" },
          { label: "Air Pressure", value: "~0.042 MPa" },
          { label: "Noise", value: "≤ 55 dB" },
          { label: "Net Weight", value: "~44 kg" },
          { label: "Zero-Wall Clearance", value: "~35 cm" },
        ],
      },
    ],
    included: ["Serene Lounge SL chair", "Separate footstool", "Wireless controller"],
    environments: [
      { type: "Residential Wellness Rooms", description: "A lounge-style massage chair for home relaxation." },
      { type: "Hospitality Wellness Suites", description: "A compact chair for hotel and guest suites." },
    ],
    faqs: [
      { question: "Is there a footstool?", answer: "Yes, a separate footstool." },
      { question: "How is it controlled?", answer: "By a handrail shortcut key or a wireless controller." },
    ],
    related: ["lounge-360-massage-chair", "comfort-sl-massage-chair", "massage-chair-mid-range-lion"],
  }),

  "lounge-360-massage-chair": chair({
    id: "lounge-360-massage-chair",
    subtitle: "360° Rotating Massage Lounge Chair (Slim 2D Mechanism)",
    tagline: "A compact rotating lounge chair with slim 2D massage, three programmes, a separate footstool and USB-C battery operation.",
    overview: [
      "The Serene 360 is a compact 360-degree rotating massage lounge chair. The rotating base allows flexible placement, and a slim 2D massage mechanism offers three automatic programmes across three speed levels.",
      "A separate comfort footstool completes the seating, and a 2600 mAh battery with USB-C input means the chair can run without a wall outlet. The recommended load is up to 120 kg.",
      "The chair measures about 1090 × 885 × 960 mm, and the footrest about 450 × 430 × 465 mm.",
    ],
    heading: "Slim 2D Massage on a Rotating Base",
    mechanism: "A slim 2D massage mechanism runs three programmes at three speed levels, in a chair that rotates through 360°.",
    points: ["Slim 2D mechanism.", "3 automatic programmes, 3 speed levels.", "360° rotation.", "2600 mAh battery with USB-C input."],
    features: [
      { title: "360° Rotating Base", description: "A rotating seating platform for flexible placement.", iconName: "Compass" },
      { title: "Slim 2D Massage", description: "Three automatic programmes across three speed levels.", iconName: "Layers" },
      { title: "Separate Footstool", description: "A detached comfort footstool.", iconName: "Footprints" },
      { title: "USB-C Battery", description: "2600 mAh battery with USB-C input.", iconName: "BatteryCharging" },
    ],
    benefits: [
      { title: "Cordless Use", description: "Battery-powered operation.", metric: "2600 mAh" },
      { title: "Flexible Placement", description: "Rotates through 360°.", metric: "360°" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Massage", value: "Slim 2D mechanism" },
          { label: "Rotation", value: "360°" },
          { label: "Automatic Programmes", value: "3" },
          { label: "Speed Levels", value: "3" },
          { label: "Footrest", value: "Separate comfort footstool" },
          { label: "Battery / Input", value: "2600 mAh / USB-C" },
          { label: "Rated Power / Voltage", value: "30 W / 12 V" },
          { label: "Recommended Load", value: "≤ 120 kg" },
          { label: "Rated Operating Time", value: "~20 minutes" },
          { label: "Chair Dimensions", value: "~1090 × 885 × 960 mm" },
          { label: "Footrest Dimensions", value: "~450 × 430 × 465 mm" },
        ],
      },
    ],
    included: ["Serene 360 lounge chair", "Separate footstool", "USB-C charging cable"],
    duration: "About 20 minutes (rated operating time)",
    environments: [
      { type: "Residential Wellness Rooms", description: "A compact rotating chair for home relaxation." },
      { type: "Lifestyle Wellness Environments", description: "A flexible seat for lounges and studios." },
    ],
    faqs: [
      { question: "Does it plug in?", answer: "It runs on a 2600 mAh battery charged by USB-C." },
      { question: "What load can it take?", answer: "Up to 120 kg." },
    ],
    related: ["lounge-sl-massage-chair", "comfort-sl-massage-chair", "massage-chair-mid-range-lion"],
  }),

  "comfort-sl-massage-chair": chair({
    id: "comfort-sl-massage-chair",
    subtitle: "Compact SL-Curve Zero-Gravity Massage Chair",
    tagline: "SL-curve massage, zero-gravity positioning, waist heating and leg airbags, with voice control and 8 automatic programmes.",
    overview: [
      "The Serene Comfort (SL Track) is a compact massage chair combining an SL-curve rail, zero-gravity positioning, heating and leg air-compression massage. A flip-up footrest completes the zero-gravity recline.",
      "Waist heating is paired with eight airbags, including leg airbag massage, and eight automatic programmes. Voice control, handrail shortcut controls and Bluetooth music keep operation easy.",
      "A compact 18 cm zero-wall clearance suits residential rooms and wellness studios.",
    ],
    heading: "SL-Curve Massage with Zero-Gravity Recline",
    mechanism: "An SL-curve massage rail works with eight airbags, waist heating and a zero-gravity recline for compact full-body massage.",
    points: ["SL-curve rail.", "8 automatic programmes.", "8 airbags including legs.", "Voice control and Bluetooth music."],
    features: [
      { title: "SL-Curve Rail", description: "SL-curve rail for compact full-body massage.", iconName: "Move" },
      { title: "Zero-Gravity Recline", description: "Zero-gravity positioning with a flip-up footrest.", iconName: "Maximize" },
      { title: "Waist Heating + Leg Airbags", description: "Waist heating combined with leg airbag massage.", iconName: "Flame" },
      { title: "Voice Control", description: "Voice control, handrail shortcuts and Bluetooth music.", iconName: "Speaker" },
    ],
    benefits: [
      { title: "Tight Clearance", description: "Only ~18 cm needed behind the chair.", metric: "18 cm" },
      { title: "8 Programmes", description: "Eight automatic massage programmes.", metric: "8 Modes" },
    ],
    specGroups: [
      {
        category: "Specifications",
        items: [
          { label: "Massage Rail", value: "SL curve" },
          { label: "Positioning", value: "Zero-gravity" },
          { label: "Footrest", value: "Flip-up" },
          { label: "Leg Function", value: "Airbag massage" },
          { label: "Heating", value: "Waist heating" },
          { label: "Control", value: "Voice control, handrail shortcut controls" },
          { label: "Audio", value: "Bluetooth music" },
          { label: "Automatic Programmes", value: "8" },
        ],
      },
      {
        category: "Technical",
        items: [
          { label: "Power", value: "~90 W (standby ~0.1–2 W)" },
          { label: "Airbags / Air Pump / Valves", value: "8 / 1 / 2" },
          { label: "Air Pressure", value: "~0.022–0.03 MPa" },
          { label: "Noise", value: "≤ 60 dB" },
          { label: "Net Weight", value: "~60 kg" },
          { label: "Zero-Wall Clearance", value: "~18 cm" },
        ],
      },
    ],
    included: ["Serene Comfort SL chair", "Controller", "Power cable"],
    environments: [
      { type: "Residential Wellness Rooms", description: "A compact zero-gravity chair for the home." },
      { type: "Wellness Studios", description: "A space-saving chair for studio relaxation areas." },
    ],
    faqs: [
      { question: "Does it have voice control?", answer: "Yes, as well as handrail shortcut controls." },
      { question: "How much space behind the chair?", answer: "About 18 cm of zero-wall clearance." },
    ],
    related: ["lounge-sl-massage-chair", "lounge-360-massage-chair", "massage-chair-elite-ms131"],
  }),
};
