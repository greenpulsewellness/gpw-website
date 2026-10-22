import { AUTHORS } from "@/data/blog-types";
import { CATALOGUE, COMBOS, eq, L, P, SOLUTION, type BlogInput } from "./helpers";

export const AIR_POSTS: BlogInput[] = [
  /* ------------------------------------------------------------------ */
  /* PILLAR                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "hyperbaric-oxygen-chamber-guide",
    cluster: "air",
    pillar: true,
    date: "2026-08-01",
    title: "Hyperbaric Oxygen Chambers for Wellness Centres: A Straight-Talking Guide",
    excerpt:
      "What an HBOT chamber is, how the equipment works, what regulation and training involve, and how to decide whether it belongs in your wellness centre. No hype, just facts.",
    coverAlt: "Illustration of a hyperbaric oxygen chamber with a round window and pressure gauge",
    author: AUTHORS["elena-rostova"],
    tags: ["HBOT", "Hyperbaric Oxygen", "Wellness Centre", "Buying Guide", "Safety"],
    keywords: ["hyperbaric oxygen chamber guide", "HBOT chamber for wellness centre", "buy hyperbaric chamber", "hyperbaric oxygen therapy equipment", "mild hyperbaric chamber"],
    relatedSlugs: ["hyperbaric-chamber-single-vs-double-vs-portable", "setting-up-a-hyperbaric-oxygen-room-safely", "how-to-start-a-recovery-lounge"],
    keyTakeaways: [
      "A hyperbaric chamber raises cabin pressure while the user breathes oxygen-enriched air from a separate oxygen source.",
      "Our Oxa and Oxy chambers are offered at 1.5 or 2.0 ATA, depending on model.",
      "Regulation, a trained operator and a medical suitability check are not optional. Confirm the local rules before you buy.",
      "We describe the equipment in wellness terms and make no treatment claims.",
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What a hyperbaric chamber is",
        content: [
          `A hyperbaric oxygen chamber is a sealed cabin that can be pressurised above normal atmospheric pressure. The user sits or lies inside while the cabin is pressurised with filtered air and an oxygen generator supplies oxygen-enriched air to breathe.`,
          `Pressure is measured in ATA (atmospheres absolute). Normal air pressure at sea level is 1.0 ATA. The chambers in our range are rated at 1.5 or 2.0 ATA depending on the model, and the cabin pressure is raised and lowered gradually at controlled rates.`,
        ],
      },
      {
        id: "what-is-inside",
        heading: "What is inside the system",
        content: [
          `A chamber is really a small system of parts working together:`,
          `• **The cabin:** steel construction, with a transparent door so staff and user can see each other.`,
          `• **The air compressor:** an oil-free compressor delivering clean air.`,
          `• **The oxygen generator:** a PSA unit that supplies oxygen at about 93% ± 3%, with 10 or 15 L/min depending on model.`,
          `• **Safety hardware:** a manual pressure relief valve, an emergency switch and an automatic safety valve.`,
          `• **Controls and comfort:** touch screens inside and out, an intercom, lighting and a comfortable interior.`,
        ],
        callout: {
          type: "science",
          text: "Cabin pressure is increased and decreased slowly, with maximum boost and release rates set in the system specification. Slow, controlled changes are a core part of safe operation.",
        },
      },
      {
        id: "regulation-and-people",
        heading: "Regulation, training and suitability",
        content: [
          `This is the section to read twice. Hyperbaric equipment must only be installed and operated in line with the regulations where you are, by a trained operator following the supplied safety procedures. Requirements vary by country and sometimes by state, so we ask every buyer to confirm them before an order is placed.`,
          `A chamber is not suitable for everyone, and a medical professional should confirm a person is suitable before any session. Reputable centres screen clients and keep records.`,
          `We do not claim that hyperbaric sessions treat or cure any condition. We supply equipment for use in appropriately regulated wellness settings.`,
        ],
      },
      {
        id: "choose-your-chamber",
        heading: "Choosing a chamber",
        content: [
          `Capacity and footprint drive most decisions. The ${P("oxaSolo", "Oxa Cube Solo")} (1,900 × 900 × 1,950 mm) is a single-user chamber, while the ${P("oxaDuo", "Oxa Cube Duo")} (2,000 × 1,800 × 1,900 mm) seats two. The ${P("oxaMini", "Oxa Mini")} is a compact single-user unit at 1,500 × 900 × 1,950 mm. The ${P("oxy1", "Oxy 1")} and ${P("oxy2", "Oxy 2")} give you a choice of 1.5 or 2.0 ATA and optional red-light versions.`,
          `We break down the trade-offs in ${L("hbotSizes", "single vs double vs portable chambers")}.`,
        ],
      },
      {
        id: "setting-up",
        heading: "Setting it up properly",
        content: [
          `A chamber is a facility project, not just a delivery. You need space, power, ventilation, a safe place for the oxygen generator and a clear emergency plan. Read our guide to ${L("hbotRoom", "setting up a hyperbaric oxygen room safely")}.`,
          `If this is part of a bigger wellness menu, see ${L("lounge", "how to start a recovery lounge")} and our ${SOLUTION("recover", "Recover & Restore solutions")}. You can also browse the ${CATALOGUE("full Air & Oxygen range")}, or ask about a ${COMBOS("combo")} that includes it.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("oxaSolo", "Single-user, 2.0 ATA cabin with a 10 L/min oxygen generator."),
      eq("oxaDuo", "Two-user, 2.0 ATA cabin with a 15 L/min oxygen generator."),
      eq("oxy2", "Two-seat chamber offered at 1.5 or 2.0 ATA, with an optional red-light version."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hyperbaric-chamber-single-vs-double-vs-portable",
    cluster: "air",
    date: "2026-08-05",
    title: "Single, Double or Portable HBOT Chamber? How to Pick",
    excerpt:
      "Solo, Duo, Mini, Oxy 1 and Oxy 2: what the dimensions, capacity and oxygen flow mean for your space, your bookings and your team.",
    coverAlt: "Illustration comparing a larger and a smaller hyperbaric oxygen chamber",
    author: AUTHORS["marcus-vance"],
    tags: ["HBOT Chamber", "Single vs Double", "Portable Chamber", "Equipment Selection"],
    keywords: ["single vs double hyperbaric chamber", "portable hyperbaric chamber", "hyperbaric chamber size", "buy hbot chamber"],
    relatedSlugs: ["hyperbaric-oxygen-chamber-guide", "setting-up-a-hyperbaric-oxygen-room-safely", "gym-recovery-zone-membership-pricing"],
    keyTakeaways: [
      "Single chambers are simpler and cheaper to site; double chambers offer capacity for shared or busier sessions.",
      "The compact Oxa Mini fits tighter rooms at 1,500 mm long.",
      "Check ATA options, oxygen flow rate and door type, not just the footprint.",
      "Always confirm local regulations and operator requirements before choosing.",
    ],
    sections: [
      {
        id: "start-with-people",
        heading: "Start with people and bookings",
        content: [
          `The first question is not 'which chamber?', it is 'how many people will use it at once, and how many sessions a day?' A boutique studio doing a handful of one-to-one appointments needs something different from a longevity centre with a full calendar.`,
          `If you are new to the category, read our ${L("hbotGuide", "hyperbaric chamber guide")} first, especially the sections on regulation and training.`,
        ],
      },
      {
        id: "the-lineup",
        heading: "The line-up, side by side",
        content: [
          `• ${P("oxaSolo", "Oxa Cube Solo")}: 1 person, 2.0 ATA, 1,900 × 900 × 1,950 mm, 10 L/min oxygen generator, acrylic door.`,
          `• ${P("oxaDuo", "Oxa Cube Duo")}: 2 people, 2.0 ATA, 2,000 × 1,800 × 1,900 mm, 15 L/min oxygen generator.`,
          `• ${P("oxaMini", "Oxa Mini")}: 1 person, 2.0 ATA, 1,500 × 900 × 1,950 mm, 15 L/min, compact for smaller rooms.`,
          `• ${P("oxy1", "Oxy 1")}: single seat, 1.5 or 2.0 ATA, 10 L/min, custom colours and an optional red-light version.`,
          `• ${P("oxy2", "Oxy 2")}: two seats, 1.5 or 2.0 ATA, 15 L/min, custom colours and an optional red-light version.`,
        ],
        callout: {
          type: "tip",
          text: "Ask for the full specification sheet for your chosen model. Door material, cabin interior and the oxygen generator's size and weight all affect installation.",
        },
      },
      {
        id: "single-vs-double",
        heading: "Single vs double",
        content: [
          `A single chamber is quieter to run and easier to fit, and each session is private and personal. A double chamber lets two people share a session, which suits couples, friends or a busy centre that wants more capacity from one room.`,
          `Think about staffing, too. More capacity needs the same trained operator. For a space with limited footfall, a single chamber is usually the right start.`,
        ],
      },
      {
        id: "compact-and-flexible",
        heading: "When compact makes sense",
        content: [
          `The Oxa Mini is for rooms where length is the constraint. It is not 'portable' in the sense of being carried around. It is still a pressurised steel cabin with a generator, so you plan it like any other installation.`,
          `Whichever model you choose, plan the supporting space. Our ${L("hbotRoom", "room set-up guide")} lists everything, and the ${L("lounge", "recovery lounge guide")} shows how a chamber fits into a wider business plan.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("oxaSolo", "Single-user 2.0 ATA chamber."),
      eq("oxaMini", "Compact single-user chamber at 1,500 mm long."),
      eq("oxy2", "Two-seat chamber with 1.5 or 2.0 ATA options."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "setting-up-a-hyperbaric-oxygen-room-safely",
    cluster: "air",
    date: "2026-08-09",
    title: "Setting Up a Hyperbaric Oxygen Room: Safety, Space and Oxygen Supply",
    excerpt:
      "Chambers are a facility project. Here is a checklist for space, power, ventilation, oxygen handling, emergency planning and staff training before your chamber arrives.",
    coverAlt: "Illustration of a facility floor plan next to a large safety shield with a check mark",
    author: AUTHORS["marcus-vance"],
    tags: ["HBOT Safety", "Facility Planning", "Oxygen Handling", "Operator Training"],
    keywords: ["hyperbaric chamber installation", "HBOT room requirements", "hyperbaric oxygen safety", "hyperbaric chamber operator training"],
    relatedSlugs: ["hyperbaric-oxygen-chamber-guide", "hyperbaric-chamber-single-vs-double-vs-portable", "buying-wellness-equipment-installation-and-support"],
    keyTakeaways: [
      "Plan the room around the chamber, the oxygen generator, the compressor and a clear access path.",
      "Keep ignition sources and flammable materials out of the room. Oxygen-enriched air changes how things burn.",
      "Write an emergency plan, test the safety devices and train every operator.",
      "Confirm regulations and insurance before installation, not after.",
    ],
    sections: [
      {
        id: "regulations-first",
        heading: "Regulations and insurance first",
        content: [
          `Before you sign anything, confirm what your local authority requires for installing and operating a hyperbaric chamber, and tell your insurer what you plan to do. Rules differ by country and by setting (wellness centre vs clinic), and getting this wrong is expensive.`,
          `Our pillar article, the ${L("hbotGuide", "hyperbaric chamber guide")}, explains why we ask every buyer to do this up front.`,
        ],
      },
      {
        id: "space-and-power",
        heading: "Space, power and ventilation",
        content: [
          `Work out the full footprint, not just the cabin. For example, the ${P("oxaSolo", "Oxa Cube Solo")} cabin measures 1,900 × 900 × 1,950 mm, and its separate oxygen generator is about 450 × 520 × 870 mm and weighs around 75 kg. You also need room for the compressor, service access and a safe entry and exit path.`,
          `The systems run on 220 V / 50 Hz (110–120 V / 60 Hz is also listed). Have a qualified electrician plan the circuit, and make sure the room is well ventilated. Operating limits for temperature and humidity are in the spec sheet.`,
        ],
        callout: {
          type: "tip",
          text: "Check floor loading, door width and lift access. Modular cabins are easier to bring in, but the generator and compressor are still heavy.",
        },
      },
      {
        id: "oxygen-fire-safety",
        heading: "Oxygen and fire safety",
        content: [
          `Oxygen-enriched air makes materials burn faster and hotter. The golden rules are simple: keep ignition sources away, no open flames, no unsuitable electronics, and follow the supplied guidance on what can enter the cabin. Display clear signage, and train staff to brief every client.`,
          `Install appropriate fire detection and extinguishers as your regulations require, and keep service access to the generator clear.`,
        ],
      },
      {
        id: "people-and-procedures",
        heading: "People and procedures",
        content: [
          `Every session needs a trained operator following a written protocol: pre-session checks, a suitability screen for each client, a controlled pressurisation and a controlled release. Test the manual relief valve, emergency switch, automatic safety valve and intercom before every session.`,
          `Write an emergency plan, rehearse it with your team and keep records of maintenance and sessions. Our ${L("buying", "guide to installation, warranty and after-sales support")} describes how to get these set up with your supplier.`,
        ],
      },
      {
        id: "business-fit",
        heading: "Fitting it into your business",
        content: [
          `A chamber works best inside a thought-out wellness menu, with clear client screening, an honest service description and complementary offerings such as ${L("saunaGuide", "infrared")} or ${L("bootsGuide", "compression")}. For layout and economics, read ${L("lounge", "how to start a recovery lounge")}.`,
          `If you would like help with planning, ask our team through the ${SOLUTION("live-well", "Live Well")} and ${SOLUTION("recover", "Recover & Restore")} solutions pages.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("oxaDuo", "Two-user chamber; plan for its separate 15 L/min oxygen generator."),
      eq("oxaSolo", "Single-user chamber with 10 L/min oxygen generator."),
    ],
  },
];
