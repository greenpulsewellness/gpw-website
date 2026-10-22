import { AUTHORS } from "@/data/blog-types";
import { CATALOGUE, COMBOS, eq, L, P, SOLUTION, type BlogInput } from "./helpers";

export const AGEING_POSTS: BlogInput[] = [
  /* ------------------------------------------------------------------ */
  /* PILLAR                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "wellness-lounge-for-senior-living",
    cluster: "ageing",
    pillar: true,
    date: "2026-10-02",
    title: "A Wellness Lounge for Senior Living: Gentle Equipment Residents Will Use",
    excerpt:
      "How senior living communities and homecare providers can add a calm wellness lounge: gentle equipment, safe layouts, staff routines and the mobility tools that tie it together.",
    coverAlt: "Illustration of a welcoming house with a glowing window and a heartbeat line across the roof",
    author: AUTHORS["david-chen"],
    tags: ["Senior Living", "Healthy Ageing", "Wellness Lounge", "Homecare", "Gentle Wellness"],
    keywords: ["senior living wellness lounge", "wellness equipment for senior living", "healthy ageing equipment", "care home wellness room"],
    relatedSlugs: ["choosing-an-electric-or-standing-wheelchair", "massage-chair-buying-guide", "air-compression-boots-guide"],
    keyTakeaways: [
      "Comfort, safety and simplicity matter more than novelty. Choose equipment that is easy to use, with staff nearby.",
      "A seated, low-effort menu (massage chair, gentle compression, warm light) suits many residents.",
      "Mobility tools and wellness tools work best when planned together.",
      "Involve residents, families and clinical staff, and respect each person's medical advice.",
    ],
    sections: [
      {
        id: "start-with-comfort",
        heading: "Start with comfort and dignity",
        content: [
          `A wellness lounge in a senior living community is not a gym and not a clinic. It is a calm room where residents can relax, feel looked after and enjoy something pleasant to look forward to. If residents do not enjoy it, they will not come back, so comfort and dignity come first.`,
          `That means easy entry and exit, seating at the right height, soft lighting, low noise and staff who are nearby but not hovering.`,
        ],
      },
      {
        id: "a-gentle-menu",
        heading: "A gentle menu that works",
        content: [
          `Seated, low-effort equipment suits most communities:`,
          `• **Massage chairs:** a compact chair like the ${P("sereneComfort", "Serene Comfort")} (zero-gravity recline, voice control, eight programmes) or the quiet ${P("sereneLounge", "Serene Lounge")} offers relaxation without a therapist. Read our ${L("chair", "massage chair buying guide")} for the details.`,
          `• **Gentle leg compression:** the ${P("pulsewaveEase", "PulseWave Ease")} is a compact, battery-powered leg massager. See ${L("bootsGuide", "the compression guide")} for who should check with a doctor first.`,
          `• **Warm light:** a ${P("lumaSpot", "Luma Spot")} lamp or ${P("lumaPanel", "Luma Panel")} can add a soothing, low-effort light session. Our ${L("lightGuide", "red light guide")} explains the basics.`,
        ],
        callout: {
          type: "tip",
          text: "Introduce each device with a short demonstration and a 'try for five minutes' invitation. Familiarity builds confidence much faster than a brochure.",
        },
      },
      {
        id: "safety-and-supervision",
        heading: "Safety and supervision",
        content: [
          `Staff should know each device, who it is suitable for and when to stop. Residents with heart conditions, circulation problems, skin fragility, implants or cognitive impairment may need clinical sign-off. Keep records, and respect each resident's medical advice.`,
          `Heat and cold are powerful. Start gently, offer water, and keep sessions short. We would not usually place a full ${L("saunaGuide", "infrared sauna")} in a community without clinical input.`,
        ],
      },
      {
        id: "mobility",
        heading: "Mobility is part of wellness",
        content: [
          `The best wellness lounge is useless if residents cannot get to it. Plan for step-free access and consider how residents move around the building. Our guide to ${L("wheelchair", "choosing an electric or standing wheelchair")} covers the mobility side, and our Glide and Rise ranges include foldable, lightweight and sit-to-stand options.`,
        ],
      },
      {
        id: "getting-started",
        heading: "Getting started",
        content: [
          `Start with one or two devices, gather feedback and expand. For ready-made planning, see the ${SOLUTION("agewell", "AgeWell solution")}, the ${CATALOGUE("full catalogue")} and our ${COMBOS("combos")}. For homecare providers and hospitals, the ${SOLUTION("live-well", "Live Well solution")} may also be relevant. And if you are planning a larger space, ${L("lounge", "how to start a recovery lounge")} covers layout and business considerations.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("sereneComfort", "Compact SL-curve massage chair with voice control and zero-gravity recline."),
      eq("pulsewaveEase", "Compact, rechargeable leg massager for gentle use."),
      eq("glideCore", "Ergonomic folding electric wheelchair with a 20 km range."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "choosing-an-electric-or-standing-wheelchair",
    cluster: "ageing",
    date: "2026-10-08",
    title: "Electric vs Standing Wheelchairs: How to Choose Mobility Equipment",
    excerpt:
      "Foldable, lightweight, pediatric or sit-to-stand? A calm, practical guide to the questions that matter when choosing an electric wheelchair for yourself, a relative or a care setting.",
    coverAlt: "Illustration of an electric wheelchair with a battery pack and large rear wheel",
    author: AUTHORS["david-chen"],
    tags: ["Electric Wheelchair", "Standing Wheelchair", "Mobility", "Assistive Technology"],
    keywords: ["how to choose an electric wheelchair", "standing wheelchair guide", "foldable electric wheelchair", "lightweight electric wheelchair"],
    relatedSlugs: ["wellness-lounge-for-senior-living", "massage-chair-buying-guide", "buying-wellness-equipment-installation-and-support"],
    keyTakeaways: [
      "Start with the person: how they move, where they go, how they travel and who helps them.",
      "Weight and fold size decide whether a chair fits in a car boot or a lift.",
      "Sit-and-stand chairs add function but also complexity. Involve a clinician in the decision.",
      "Check battery range, charging, service and spare parts before you buy.",
    ],
    sections: [
      {
        id: "start-with-the-person",
        heading: "Start with the person, not the chair",
        content: [
          `Choosing a wheelchair is a personal decision. Think about how the user moves day to day, where they need to go (home, shops, outdoors), how they will travel and who will be helping them. A clinician, occupational therapist or physiotherapist can advise on fit and prescription, and we recommend involving one.`,
        ],
      },
      {
        id: "foldable-and-lightweight",
        heading: "Foldable and lightweight chairs",
        content: [
          `For people who travel or have limited storage, folding chairs make life easier. The ${P("glideTrek1", "Glide Trek 1")} is a compact folding electric chair at 22 kg with 250 W × 2 motors and a choice of 6 Ah or 10 Ah lithium battery. The ${P("glideTrek2", "Glide Trek 2")} has an aluminium frame, 12-inch rear wheels, 22.4 kg weight and up to 15 km range.`,
          `The ${P("glideFlex", "Glide Flex")} offers an X-Fold design with seat height adjustable from 570 to 720 mm, a 20 Ah lithium battery and a 159 kg capacity. The ${P("glideCore", "Glide Core")} is an ergonomic folding chair with a range of up to 20 km and a 45 cm seat (51 cm optional).`,
        ],
        callout: {
          type: "tip",
          text: "Measure the car boot, the lift and the narrowest doorway at home. Check the folded dimensions and the weight of the heaviest single component.",
        },
      },
      {
        id: "standing-chairs",
        heading: "Sit-and-stand chairs",
        content: [
          `Standing chairs let users change position, reach higher and engage with the world at eye level. The ${P("rise2", "Rise 2")} is a sit-and-stand chair with a widened anti-rollover chassis and 360° joystick. The ${P("rise3", "Rise 3")} is a 5-in-1 chair that can lift to one metre, stand, recline to lie flat and tilt, with a self-locking safety system. The ${P("rise1", "Rise 1")} is a heavy-duty electric standing chair with a 48 V, 600 W motor.`,
          `These are more complex, and a clinician should confirm suitability and set-up. Standing is not appropriate for everyone.`,
        ],
      },
      {
        id: "for-young-users",
        heading: "For younger users",
        content: [
          `The ${P("glideJunior", "Glide Junior")} is a compact electric chair for junior users, with brushless motors and a folded size of 69 × 45 × 77 cm. Growing children need regular fit checks, so involve the care team.`,
        ],
      },
      {
        id: "service-and-support",
        heading: "Battery, service and support",
        content: [
          `Check the range under real conditions (hills, passenger weight, weather), how the battery is charged and replaced, and who services the chair. For organisations buying several chairs, read ${L("buying", "our guide to warranty and after-sales support")}. Mobility works best with a comfortable destination, which is why we link it with our ${L("senior", "senior living wellness lounge guide")}. Browse the ${CATALOGUE("mobility range")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("glideTrek1", "Compact folding electric chair at 22 kg with lithium battery options."),
      eq("rise3", "5-in-1 electric standing chair that lifts to one metre."),
      eq("glideJunior", "Compact electric chair for junior users."),
    ],
  },
];
