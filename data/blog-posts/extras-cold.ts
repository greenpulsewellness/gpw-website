import { CATALOGUE, COMBOS, L, P, SLUG, SOLUTION, type BlogExtras } from "./helpers";

export const COLD_EXTRAS: BlogExtras = {
  [SLUG.coldGuide]: {
    sections: [
      {
        id: "temperature-and-time",
        heading: "Temperature and time: how cold, how long?",
        content: [
          `This is the question everyone asks, and the honest answer is that it depends on you. Our plunges can chill the water as low as 3 °C, but you do not have to run it that cold. Many people start in a milder range and work down as they get used to it.`,
          `Start with short dips, enter slowly, breathe calmly and get out if you feel unwell. A short, pleasant dip is better than an endurance test. Always follow the guidance of a medical professional, especially if you have a heart or circulation condition.`,
          `Warm up gradually afterwards. A ${L("saunaGuide", "sauna")} is a popular follow-up, and our ${L("contrast", "contrast therapy guide")} explains how to string the two together.`,
        ],
        callout: {
          type: "tip",
          text: "Set the chiller a few degrees warmer than the maximum it can achieve. It runs less hard, uses less power and you keep room to go colder when you want to.",
        },
      },
      {
        id: "home-or-commercial",
        heading: "Home or commercial: what changes?",
        content: [
          `At home, one or two people use the plunge, so water care is light and a compact ${P("arcticRing", "Arctic Ring")} may be all you need. In a business, usage multiplies, so you need stronger filtration, a clear cleaning schedule, safe access and staff training.`,
          `The ${P("arcticTub", "Arctic Tub")} is built with commercial thinking in mind: two-stage filtration, patented nozzles, a VGB safety-certified drain and a high-power chiller. If you are planning a venue, read ${L("lounge", "how to start a recovery lounge")} and ${L("coldCare", "our water-care guide")}.`,
          `Portable plunges like the ${P("arcticFold", "Arctic Fold")} suit events and flexible spaces, but permanent venues should usually install a fixed, filtered tub.`,
        ],
      },
      {
        id: "what-it-costs-to-run",
        heading: "What it costs to run",
        content: [
          `Running costs come from electricity for the chiller and pump, water and treatment, and maintenance. A well-insulated tub with a cover wastes less energy, because the chiller does not fight the sun and the air all day. Keep the unit ventilated and clean for efficiency.`,
          `Ask your supplier for the power rating and an idea of daily consumption in your climate. For a business, include these numbers in your plan, and review the ${L("buying", "installation and support guide")} to avoid surprises.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How cold can a cold plunge get?",
        answer: `The Arctic Ring's built-in 0.8 HP chiller can cool the water to 3 °C (37.4 °F). You can set it warmer if you prefer, and many beginners do.`,
      },
      {
        question: "Do I need a chiller, or can I just use ice?",
        answer: `You can use ice, but it is expensive, labour-intensive and hard to keep consistent. A chiller holds the temperature and filters the water, which is why most regular users choose one.`,
      },
      {
        question: "Can I use a cold plunge outdoors?",
        answer: `Some models can. The Arctic Ring is suitable for indoor or outdoor installation. Check the rating for your unit, protect electrical connections from rain and consider shade.`,
      },
      {
        question: "Is a cold plunge safe for everyone?",
        answer: `No. Cold-water immersion is not suitable for everyone, especially people with heart or circulation conditions. Speak to your doctor before starting and always enter slowly.`,
      },
      {
        question: "How heavy is a filled plunge?",
        answer: `A full-size tub holds hundreds of litres (the Arctic Tub is 421 or 483 L), and water weighs about a kilo per litre, so plan for a strong, level floor and check with a builder if unsure.`,
      },
    ],
  },

  [SLUG.contrast]: {
    sections: [
      {
        id: "timing-and-order",
        heading: "Which first, heat or cold?",
        content: [
          `Most contrast routines start with heat so your body is warm and relaxed, then move to cold. Some people prefer to start with cold and finish with warmth. Try both and see which leaves you feeling best.`,
          `A common pattern is heat, cold, rest, repeated once or twice. Keep cold dips short at first, rest between rounds and leave plenty of time to dry off and warm up gradually at the end.`,
          `Whatever order you pick, hydration matters. Keep water close, and keep a robe or towel by the plunge so the transition is pleasant.`,
        ],
        callout: {
          type: "science",
          text: "Heat tends to widen blood vessels near the skin and cold tends to narrow them. Alternating the two is the idea behind contrast routines. The experience is the main reason most people enjoy them.",
        },
      },
      {
        id: "building-a-contrast-corner",
        heading: "Building a contrast corner",
        content: [
          `You do not need a huge space. A compact contrast corner can be a sauna and a round plunge within a few steps of each other, plus a bench, towels and a small shelf for water.`,
          `Pairing a ${P("halo2", "Halo 2")} cabin with an ${P("arcticTub", "Arctic Tub")} gives a roomy two-person set-up. Our ${COMBOS("combos")} include a ready-made Revive Contrast Corner for studios.`,
          `Consider drainage and floor protection around the plunge, non-slip flooring and good lighting. Our ${L("coldGuide", "cold plunge buying guide")} and ${L("saunaInstall", "sauna planning guide")} cover the practical details.`,
        ],
      },
      {
        id: "cryo-as-an-alternative",
        heading: "What about cryotherapy?",
        content: [
          `Some venues use a cryosauna as the cold step instead of a plunge. It is a different experience, dry and very quick, with different logistics. Read ${L("cryoVsIce", "cryotherapy vs ice bath")} to compare them.`,
        ],
      },
    ],
    faqs: [
      {
        question: "What is contrast therapy?",
        answer: `A routine that alternates heat (like an infrared sauna) and cold (like a cold plunge). People enjoy the invigorating shift and the sense of calm afterwards.`,
      },
      {
        question: "How long should I stay in the cold plunge after the sauna?",
        answer: `Beginners should keep it short, from a few seconds up to a minute or two, entering slowly. Build up gradually and leave if you feel unwell.`,
      },
      {
        question: "Should I finish on hot or cold?",
        answer: `Many people finish on cold followed by rest, because it feels refreshing. Others prefer to end on warmth. Choose whichever you enjoy.`,
      },
      {
        question: "Can I do contrast therapy at home?",
        answer: `Yes. A compact infrared cabin and a round cold plunge are enough, provided you have a suitable power supply, floor and drainage. Check with a doctor first if you have any health conditions.`,
      },
    ],
  },

  [SLUG.coldCare]: {
    sections: [
      {
        id: "a-simple-schedule",
        heading: "A simple schedule you can copy",
        content: [
          `Print this and stick it near the tub.`,
          `• **Every use:** rinse before entering, cover afterwards.`,
          `• **Daily (busy venues):** skim the surface, wipe the rim, check level and filter flow.`,
          `• **Weekly:** inspect and rinse the filter, check the chiller vents and wipe down all surfaces.`,
          `• **Per manufacturer schedule:** replace filters, refresh the water and treat as advised.`,
          `• **Annually (or as advised):** have a technician service the chiller and check electrical connections.`,
          `Keep a log. In a venue, a clipboard on the wall protects you if there is ever a question about hygiene.`,
        ],
      },
      {
        id: "troubleshooting",
        heading: "Quick troubleshooting",
        content: [
          `• **Water cloudy:** check the filter and how long since the last water change. Rinse before use.`,
          `• **Smell or slime:** the water needs attention. Drain, clean and refill as advised.`,
          `• **Not getting cold:** check airflow around the chiller, the set temperature, the water level and whether the lid was off in the sun.`,
          `• **Weak flow:** clean or replace the filter. Check for blocked nozzles.`,
          `• **Strange noises or leaks:** stop using it and contact service.`,
        ],
        callout: {
          type: "tip",
          text: "Take a photo of the chiller's rating plate and the filter model the day it is installed. It saves enormous time when you need to order parts or call for support.",
        },
      },
      {
        id: "venue-hygiene",
        heading: "If you run a venue",
        content: [
          `Shared water needs a stricter regime than a home tub. Require a shower before entry, limit the number of users between water changes, keep a log and train staff to spot early signs of trouble. Include maintenance in your supplier agreement, as explained in ${L("buying", "our guide to warranty and after-sales support")}, and review the cold station layout in ${L("lounge", "how to start a recovery lounge")}.`,
          `For the choice of tub itself, see the ${L("coldGuide", "cold plunge buying guide")}.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How often should I change cold plunge water?",
        answer: `It depends on usage and how the water is treated. Follow the supplied guidance, and in a business set a written schedule based on how many people use the tub each day.`,
      },
      {
        question: "Why is my cold plunge water cloudy?",
        answer: `Usually the filter needs cleaning, the water is overdue for a change or people are entering without rinsing first. Check the filter first.`,
      },
      {
        question: "Does a cold plunge need chemicals?",
        answer: `Many setups use filtration plus an approved water-treatment method. Ask your supplier for the recommended approach for your tub material and usage.`,
      },
      {
        question: "Where should the chiller be placed?",
        answer: `In a ventilated spot with clear space around it, out of direct sun and standing water, and close enough to the tub for the supplied pipes.`,
      },
    ],
  },

  [SLUG.cryoVsIce]: {
    sections: [
      {
        id: "safety-and-supervision",
        heading: "Safety and supervision",
        content: [
          `Both are intense experiences and both need respect. With a cryosauna, staff must be trained to operate the machine, handle liquid nitrogen and protect clients' skin, hands, feet and airways as the supplied guidance directs. The ${P("arcticZero", "Arctic Zero")} includes overflow and level sensors, an open-door sensor, a pressure release valve and an emergency stop.`,
          `With a plunge, the main safety points are entry and exit, supervision for new users and sensible time limits. Our ${L("coldGuide", "cold plunge guide")} covers drain safety and layout, and ${L("coldCare", "water care")} covers hygiene.`,
          `Screen every client in both cases. Cold is not appropriate for everyone, and anyone with a heart or circulation condition, or who is pregnant, should speak to a doctor first.`,
        ],
      },
      {
        id: "business-case",
        heading: "The business case for each",
        content: [
          `A cryosauna is a compact, high-ticket, short-appointment service. A plunge is a lower-complexity, social, membership-friendly service. Which fits depends on your clientele, staffing and supply chain.`,
          `A small boutique studio will often start with a plunge and add a cryosauna later. A premium longevity centre may open with both. Whichever you choose, the ${L("lounge", "recovery lounge guide")} shows how to price and schedule them, and you can combine either with heat for ${L("contrast", "contrast therapy")}.`,
          `If you want a ready-made package, explore our ${COMBOS("combos")} or the ${CATALOGUE("cold & cryo range")}.`,
        ],
        callout: {
          type: "tip",
          text: "Request a written quote for liquid nitrogen supply, including delivery frequency and tank rental, before you commit to a cryosauna. It determines your real running cost.",
        },
      },
    ],
    faqs: [
      {
        question: "Is cryotherapy colder than an ice bath?",
        answer: `The air in a cryosauna runs at −110 to −180 °C, far colder than ice-bath water, but sessions are short and the air is dry. They feel and behave very differently.`,
      },
      {
        question: "How long does a cryosauna session last?",
        answer: `Sessions are short, in the region of a few minutes. The catalogue example for the Arctic Zero is a three-minute session after pre-cooling of up to five minutes.`,
      },
      {
        question: "What does a cryosauna need to run?",
        answer: `Mains power (about 1.5 kW for the Arctic Zero) and a liquid nitrogen supply from a pressurised tank or a Dewar, plus trained operators.`,
      },
      {
        question: "Which is better for a small studio?",
        answer: `A cold plunge is usually simpler to run, so many small studios start there. A cryosauna suits venues with trained staff and a reliable nitrogen supply.`,
      },
    ],
  },
};
