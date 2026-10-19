import { AUTHORS } from "@/data/blog-types";
import { CATALOGUE, COMBOS, eq, L, P, SOLUTION, type BlogInput } from "./helpers";

export const COLD_POSTS: BlogInput[] = [
  /* ------------------------------------------------------------------ */
  /* PILLAR                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "cold-plunge-buying-guide",
    cluster: "cold",
    pillar: true,
    date: "2026-06-26",
    title: "Cold Plunge Buying Guide: Tubs, Chillers and What to Look For",
    excerpt:
      "Round or rectangular? Portable or permanent? Built-in chiller or separate? Here is a clear, no-hype guide to choosing a cold plunge for your home, gym or spa.",
    coverAlt: "Illustration of a cold plunge tub filled with ice-cold water beside its chiller unit",
    author: AUTHORS["marcus-vance"],
    tags: ["Cold Plunge", "Ice Bath", "Buying Guide", "Chiller", "Cold Therapy"],
    keywords: ["cold plunge buying guide", "best cold plunge tub", "ice bath with chiller", "cold plunge for home", "commercial cold plunge"],
    relatedSlugs: ["contrast-therapy-infrared-and-cold-plunge", "cold-plunge-water-care-and-chiller-maintenance", "cryotherapy-vs-ice-bath"],
    keyTakeaways: [
      "A chiller keeps the water cold and clean without you buying ice every day, which is what makes a plunge sustainable.",
      "Round tubs save space; rectangular tubs give you room to stretch out and share the space.",
      "Filtration and a safe drain are not optional extras. They keep the water healthy and the tub safe.",
      "Plan the electricity, drainage and floor strength before you choose the tub.",
    ],
    sections: [
      {
        id: "why-a-chiller",
        heading: "Why a chiller changes everything",
        content: [
          `Anyone can fill a tub with ice. Almost nobody keeps doing it. Buying, hauling and melting ice every few days turns a good habit into a chore, and the water gets cloudy.`,
          `A cold plunge with a built-in or paired chiller solves this. It holds the water at a set temperature, circulates it through a filter and lets you step in whenever you like. That convenience is the reason people stick with it.`,
        ],
      },
      {
        id: "round-or-rectangular",
        heading: "Round or rectangular?",
        content: [
          `The ${P("arcticRing", "Arctic Ring")} is a round, single-person plunge, 90 cm across and 75 cm high, with a 304 stainless steel interior, a 0.8 HP chiller and filtration that cools the water down to 3 °C. It is the compact choice for a gym corner, a courtyard or a studio treatment room.`,
          `The ${P("arcticTub", "Arctic Tub")} is a full-size one-piece composite tub, 170 × 80 cm, available in 421 L and 483 L capacities, with two-stage filtration, patented water nozzles and a VGB safety-certified drain, paired with a high-power chiller. It suits people who want to stretch out, and venues where more than one person might use it.`,
          `If you move house often, run pop-up events or have no permanent spot, the ${P("arcticFold", "Arctic Fold")} is our portable, foldable option.`,
        ],
      },
      {
        id: "features-that-matter",
        heading: "Features that actually matter",
        content: [
          `• **Filtration:** a circulation filter keeps the water clear between uses. Two-stage systems do more of the work.`,
          `• **Safe drain:** look for a certified, entrapment-safe drain on any tub you can sit in.`,
          `• **Cover:** a proper cover keeps debris and light out.`,
          `• **Indoor or outdoor:** check the rating and how it copes with sun and rain.`,
          `• **Materials:** stainless steel and one-piece composites are easy to wipe down and long-lasting.`,
        ],
        callout: {
          type: "tip",
          text: "Ask the seller what the chiller does in your climate. A unit that holds 3 °C in a cool room may work harder on a hot terrace, so tell them where it will sit.",
        },
      },
      {
        id: "plan-the-space",
        heading: "Plan the space before you buy",
        content: [
          `Water is heavy. A filled full-size tub can weigh around half a tonne, so check the floor, and think about where water drains when you empty it. You will also need a suitable power supply for the chiller.`,
          `Think about the whole routine too. Cold works best as part of a flow, which is why many buyers place it next to a sauna, as we explain in ${L("contrast", "our contrast therapy guide")}. Our ${L("saunaInstall", "sauna planning guide")} has layout ideas that apply to a plunge as well.`,
        ],
      },
      {
        id: "keeping-it-clean",
        heading: "And then keep it clean",
        content: [
          `Water care is the unglamorous part of owning a plunge, and doing it right saves you money and keeps the water pleasant. We have written a short, practical guide: ${L("coldCare", "cold plunge water care and chiller maintenance")}.`,
          `Curious how a plunge compares with a cryosauna? See ${L("cryoVsIce", "cryotherapy vs ice bath")}. And if you are building a commercial space, browse our ${COMBOS("combos")} or talk to the team about ${SOLUTION("recover", "Recover & Restore")} fit-outs. You can also browse the full ${CATALOGUE("cold & cryo range")}.`,
          `One important note: cold immersion is not for everyone. If you have a heart or circulation condition, or you are unsure, check with a medical professional first.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("arcticRing", "Compact round plunge with built-in 0.8 HP chiller and filtration."),
      eq("arcticTub", "Full-size composite tub with two-stage filtration and safe drain."),
      eq("arcticFold", "Portable, foldable cold plunge for flexible spaces."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "contrast-therapy-infrared-and-cold-plunge",
    cluster: "cold",
    date: "2026-06-30",
    title: "Contrast Therapy: How to Pair an Infrared Sauna with a Cold Plunge",
    excerpt:
      "Heat, then cold, then rest. Here is how to build a simple contrast routine at home or in a studio, with timings, order and the common mistakes to avoid.",
    coverAlt: "Illustration of a warm infrared sauna on one side and a chilled cold plunge on the other",
    author: AUTHORS["elena-rostova"],
    tags: ["Contrast Therapy", "Infrared Sauna", "Cold Plunge", "Recovery Routine"],
    keywords: ["contrast therapy", "sauna and cold plunge", "hot cold therapy routine", "contrast therapy at home", "contrast therapy studio"],
    relatedSlugs: ["infrared-sauna-buying-guide", "cold-plunge-buying-guide", "post-workout-recovery-stack"],
    keyTakeaways: [
      "Contrast therapy simply alternates warmth and cold, usually finishing on cold or a calm rest.",
      "Keep it gentle to start: a short sauna session, a brief plunge, then rest.",
      "Place the two close together so the transition is quick and safe.",
      "Studios use it as a signature experience because it is easy to explain and memorable to try.",
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What contrast therapy actually is",
        content: [
          `Strip away the buzzwords and contrast therapy is a routine: spend a little time in heat, then a little time in cold, and repeat if you like. People enjoy the invigorating shift and the deep calm afterwards.`,
          `You do not need an elaborate setup to try it. An ${L("saunaGuide", "infrared sauna")} for the heat and a ${L("coldGuide", "cold plunge")} for the cold are enough.`,
        ],
      },
      {
        id: "a-simple-routine",
        heading: "A simple routine to start with",
        content: [
          `1. **Warm-up:** 10–15 minutes in the infrared cabin, hydrated and relaxed.`,
          `2. **Transition:** step out, towel off and walk straight to the plunge.`,
          `3. **Cold:** a short dip. Beginners should start with seconds to a minute or two, not a long soak.`,
          `4. **Rest:** sit, wrap up and let your body settle for 5–10 minutes.`,
          `5. **Optional round two:** repeat once if you feel good, then finish with rest.`,
          `Go gently. The goal is a pleasant contrast, not a test of endurance. We cover the heat side in detail in our ${L("saunaSession", "beginner's session guide")}.`,
        ],
        callout: {
          type: "tip",
          text: "Many people finish on cold, then rest, because it leaves them feeling awake and calm. Others prefer to end on warmth. Experiment and note what suits you.",
        },
      },
      {
        id: "layout",
        heading: "Layout: keep heat and cold close",
        content: [
          `The shorter the walk between the two, the safer and more pleasant the routine. In a home, that could be a sauna and a plunge on the same terrace or in the same garage room. In a studio, it is a dedicated contrast corner.`,
          `A compact pairing is the ${P("halo1", "Halo 1")} cabin with an ${P("arcticRing", "Arctic Ring")} round plunge, both of which suit small footprints. For busier spaces, step up to the ${P("halo3", "Halo 3")} with an ${P("arcticTub", "Arctic Tub")}. Our ${COMBOS("equipment combos")} include ready-made contrast corners if you would rather not piece it together yourself.`,
        ],
      },
      {
        id: "for-businesses",
        heading: "Why studios love it",
        content: [
          `For a gym, spa or clinic, contrast therapy is an easy story to sell: simple, social and memorable. Members try it once and tell friends. It also pairs well with other services, which we explore in ${L("lounge", "how to start a recovery lounge")} and ${L("gym", "gym recovery zone pricing")}.`,
          `A safety note: cold immersion and heat both affect heart rate and blood pressure. If you have a medical condition, check with your doctor. Venues should display clear guidance and brief staff on what to do if someone feels unwell.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("halo1", "Compact sauna for a contrast corner."),
      eq("arcticRing", "Round cold plunge that sits neatly next to a cabin."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "cold-plunge-water-care-and-chiller-maintenance",
    cluster: "cold",
    date: "2026-07-04",
    title: "Cold Plunge Water Care and Chiller Maintenance, Made Simple",
    excerpt:
      "Clear water, a healthy chiller and a tub you are happy to step into. A friendly maintenance routine for home owners and facility managers.",
    coverAlt: "Illustration of a filter canister with a water droplet and a check mark",
    author: AUTHORS["marcus-vance"],
    tags: ["Cold Plunge Maintenance", "Water Care", "Filtration", "Chiller"],
    keywords: ["cold plunge water maintenance", "how often change cold plunge water", "cold plunge filter", "cold plunge chiller maintenance"],
    relatedSlugs: ["cold-plunge-buying-guide", "contrast-therapy-infrared-and-cold-plunge", "importing-wellness-equipment-installation-and-warranty"],
    keyTakeaways: [
      "Cover the tub when not in use and rinse before you step in. Most dirty water is preventable.",
      "Check and clean the filter on a regular schedule; commercial use needs a stricter one.",
      "Keep airflow clear around the chiller, and keep the unit level and dry.",
      "Write the routine down. Consistency beats occasional deep cleans.",
    ],
    sections: [
      {
        id: "why-it-matters",
        heading: "Why water care deserves five minutes of your attention",
        content: [
          `The best plunge in the world is no fun if the water looks cloudy or smells off. Good care keeps the water pleasant, protects the equipment and makes sure that stepping in stays something you look forward to.`,
          `If you have not chosen a tub yet, start with our ${L("coldGuide", "cold plunge buying guide")}. This piece assumes you already own one.`,
        ],
      },
      {
        id: "daily-habits",
        heading: "The daily and weekly habits",
        content: [
          `• **Shower or rinse first.** Oils, lotions and sweat are the main sources of dirty water.`,
          `• **Cover it every time.** The waterproofed cover on a unit like the ${P("arcticRing", "Arctic Ring")} keeps out dust, leaves and light.`,
          `• **Skim and wipe.** Remove surface debris and wipe the rim.`,
          `• **Check the level.** Top up if the water has dropped.`,
          `• **Peek at the filter.** If flow looks weak, the filter likely needs attention.`,
        ],
      },
      {
        id: "filters-and-water-changes",
        heading: "Filters and water changes",
        content: [
          `Filtration keeps water moving through a filter between sessions. On the ${P("arcticTub", "Arctic Tub")}, a two-stage filtration system and an integrated top filter housing make filter swaps quick. Follow the schedule in your product manual and the water treatment guidance you are given at handover.`,
          `How often to drain and refill depends on how many people use the tub and how it is treated. A private tub used by one person is far gentler than a studio plunge used by dozens of members a week. If you run a business, set a written schedule and log each service.`,
        ],
        callout: {
          type: "tip",
          text: "Ask your supplier for a water-care sheet specific to your tub. Treatment methods differ between stainless steel, composite and portable tubs, so use what the manufacturer recommends.",
        },
      },
      {
        id: "the-chiller",
        heading: "Looking after the chiller",
        content: [
          `Chillers need to breathe. Keep the unit in a ventilated spot with clear space around it, away from direct sun and standing water. Keep vents and fan grilles free of dust and leaves, and have a technician check refrigerant and electrical connections during routine servicing.`,
          `For outdoor installations, protect power connections from rain and plan for cold or hot extremes. If you are a business, include maintenance in the contract from day one. Our ${L("importing", "guide to installation, warranty and after-sales support")} explains what to ask for.`,
        ],
      },
      {
        id: "when-to-call-for-help",
        heading: "When to call for help",
        content: [
          `Call your supplier if the water will not get cold, the chiller makes new noises, you see leaks, or the filter flow drops after cleaning. Do not open electrical components yourself.`,
          `Once the routine is in place, the plunge becomes effortless. Pair it with a sauna for ${L("contrast", "contrast therapy")}, or compare it with a ${L("cryoVsIce", "cryosauna")} if you are choosing between cold formats.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("arcticTub", "Two-stage filtration and an integrated top filter housing for quick swaps."),
      eq("arcticRing", "304 stainless steel interior and fabric cover for easy upkeep."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "cryotherapy-vs-ice-bath",
    cluster: "cold",
    date: "2026-07-08",
    title: "Cryotherapy vs Ice Bath: What's the Difference and Which Suits You?",
    excerpt:
      "A whole-body cryosauna and a cold plunge both use cold, but they feel and work very differently. Here is how they compare on experience, space, running costs and who they suit.",
    coverAlt: "Illustration of a standing cryotherapy chamber next to a round ice bath",
    author: AUTHORS["elena-rostova"],
    tags: ["Cryotherapy", "Ice Bath", "Cold Exposure", "Cryosauna"],
    keywords: ["cryotherapy vs ice bath", "cryosauna vs cold plunge", "whole body cryotherapy chamber", "cold plunge or cryotherapy"],
    relatedSlugs: ["cold-plunge-buying-guide", "contrast-therapy-infrared-and-cold-plunge", "how-to-start-a-recovery-lounge"],
    keyTakeaways: [
      "An ice bath is water at roughly 3–15 °C; a cryosauna uses very cold, dry air in short sessions of a few minutes.",
      "Cryosaunas need liquid nitrogen, so supply logistics are part of the plan. Cold plunges mainly need power and water care.",
      "A plunge is more social and easier to run; a cryosauna is compact and high-impact for premium venues.",
      "Many venues offer both so members can choose.",
    ],
    sections: [
      {
        id: "two-kinds-of-cold",
        heading: "Two very different kinds of cold",
        content: [
          `An ice bath surrounds you with cold water. A cryosauna surrounds you with extremely cold, dry air. Both are cold exposure, but the feel, the length of a session and the equipment behind them are quite different.`,
          `Our ${P("arcticRing", "Arctic Ring")} cools water to as low as 3 °C. The ${P("arcticZero", "Arctic Zero")} cryosauna operates between −110 and −180 °C, with short automated sessions (around three minutes in the catalogue example).`,
        ],
      },
      {
        id: "experience",
        heading: "The experience",
        content: [
          `A plunge is a slow, deliberate, breathe-through-it ritual. Cold water is intense on the skin and you feel it immediately, but you control how long you stay and many people enjoy the meditative edge to it.`,
          `A cryosauna session is short and dry. You stand in a cabin with your head out and a collar and protective gear for hands and feet, while the cabin cools around you. It is over in minutes, which is why venues like it for quick, high-turnover appointments.`,
        ],
      },
      {
        id: "space-and-running",
        heading: "Space, running costs and logistics",
        content: [
          `The Arctic Zero has a footprint of about 1 m² and needs no assembly, which suits small treatment rooms. But a cryosauna runs on liquid nitrogen, supplied from a tank or Dewar. Pre-cooling and each session use a measurable amount, so you need a reliable supplier, safe storage and trained staff.`,
          `A cold plunge needs a power supply, floor strength and good water care instead. Our guide to ${L("coldCare", "water care and chiller maintenance")} shows what that routine looks like. There is no consumable gas to order.`,
        ],
        callout: {
          type: "tip",
          text: "Before choosing a cryosauna, get a quote for your local liquid nitrogen supply and ask about delivery frequency. It is the biggest running-cost variable.",
        },
      },
      {
        id: "who-should-choose-what",
        heading: "Who should choose what",
        content: [
          `• **Choose a plunge** if you want a social, low-complexity, long-lasting cold station for a home, gym or spa.`,
          `• **Choose a cryosauna** if you run a premium centre, have a trained team and want a compact, high-impact service.`,
          `• **Choose both** if you want a complete cold menu, and add heat for ${L("contrast", "contrast therapy")}.`,
          `Cold exposure is not suitable for everyone, so venues should screen clients and display clear guidance. If you are planning a commercial space, our ${L("lounge", "guide to starting a recovery lounge")} and ${L("coldGuide", "cold plunge buying guide")} can help you build the rest of the picture.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("arcticZero", "Compact, fully automated cryosauna with a 1 m² footprint and 7-inch touch screen."),
      eq("arcticRing", "Compact round cold plunge with built-in chiller."),
    ],
  },
];
