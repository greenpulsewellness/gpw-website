import { CATALOGUE, COMBOS, L, P, SLUG, SOLUTION, type BlogExtras } from "./helpers";

export const AIR_EXTRAS: BlogExtras = {
  [SLUG.hbotGuide]: {
    sections: [
      {
        id: "questions-for-suppliers",
        heading: "Questions to ask any chamber supplier",
        content: [
          `A hyperbaric chamber is a serious purchase, so interview your supplier the way you would a contractor.`,
          `1. Which regulations apply to this model in my country and setting, and can you share the documentation?`,
          `2. What are the pressure rating (ATA) and the working pressure range?`,
          `3. What safety systems are fitted, and how are they tested?`,
          `4. What training is provided for operators, and is it on site?`,
          `5. What does installation involve, and what does the room need to provide?`,
          `6. What is covered by the warranty, and who services the chamber?`,
          `The answers tell you more about the supplier than any brochure. Our ${L("buying", "guide to buying, installation and support")} expands on these questions.`,
        ],
        callout: {
          type: "tip",
          text: "Ask for the full specification sheet, not a summary. Door material, oxygen generator size and weight, and pressurisation rates all affect your plan.",
        },
      },
      {
        id: "fit-in-your-menu",
        heading: "Where a chamber fits in a wellness menu",
        content: [
          `A chamber is a quiet, appointment-based service with a clear operator role. It sits well beside other low-impact recovery services such as ${L("bootsGuide", "compression")} and ${L("saunaGuide", "infrared")}, and many centres schedule it in blocks to make the most of staff time.`,
          `Be honest in your marketing. Describe the experience and the equipment, avoid medical claims and make screening a visible part of your process. For the wider business plan, see ${L("lounge", "how to start a recovery lounge")}, and for clinics, ${L("clinic", "equipping a physio or chiropractic clinic")}.`,
        ],
      },
      {
        id: "comfort-and-experience",
        heading: "Comfort and client experience",
        content: [
          `These chambers are designed for comfort as well as function. The cabin interior includes wall panels, a sofa and interior upholstery, lighting and an intelligent control panel, with internal noise of 45 dB or less and an intercom for communication with the operator.`,
          `Treat the experience as part of the service: greeting, briefing, a calm room and an unhurried exit. Clients return to places that made them feel looked after.`,
        ],
      },
    ],
    faqs: [
      {
        question: "What does ATA mean on a hyperbaric chamber?",
        answer: `ATA stands for atmospheres absolute. 1.0 ATA is normal air pressure at sea level. Our chambers are rated at 1.5 or 2.0 ATA depending on the model.`,
      },
      {
        question: "Do I need a licence or approval to operate a hyperbaric chamber?",
        answer: `Requirements vary by country and setting. You must check local regulations, insurance and operator training requirements before purchase and installation.`,
      },
      {
        question: "Is a hyperbaric chamber safe?",
        answer: `Modern chambers include multiple safety systems and controlled pressure changes, but safety depends on correct installation, trained operators, client screening and following procedures.`,
      },
      {
        question: "Do you make medical claims about hyperbaric oxygen?",
        answer: `No. We supply equipment for appropriately regulated wellness settings and describe it in product terms only. Speak to a medical professional about any health question.`,
      },
    ],
  },

  [SLUG.hbotSizes]: {
    sections: [
      {
        id: "client-experience",
        heading: "The client experience in each format",
        content: [
          `A single chamber feels private and personal, which suits one-to-one appointments and premium pricing. A double chamber feels social, which suits couples or friends. The cabin interior, with its sofa, upholstery, lighting and intercom, is designed to feel more like a quiet lounge than a machine.`,
          `Think about arrival and exit too. Clients need a calm, unhurried moment before and after each session, so plan a small waiting area close by rather than a corridor.`,
        ],
      },
      {
        id: "what-the-numbers-mean",
        heading: "What the spec numbers mean for you",
        content: [
          `• **ATA:** the pressure rating. The Oxa chambers are rated 2.0 ATA, and the Oxy 1 and Oxy 2 are offered at 1.5 or 2.0 ATA.`,
          `• **Oxygen flow (L/min):** the generator's output, 10 L/min for single units and 15 L/min for double and some compact models.`,
          `• **Oxygen concentration:** the generator supplies about 93% ± 3% oxygen. Cabin oxygen concentration is listed at 21–25%.`,
          `• **Noise:** internal noise of 45 dB or less and external 58 dB or less. Check this if the chamber sits next to a quiet treatment room.`,
          `• **Dimensions and weight:** include the generator, roughly 450 × 520 × 870 mm and 75 kg.`,
        ],
      },
      {
        id: "planning-the-purchase",
        heading: "Planning the purchase",
        content: [
          `Do not buy on size alone. Start with regulation and operator availability, then room and power, then capacity. Walk through the room needs in ${L("hbotRoom", "setting up a hyperbaric oxygen room safely")} and the principles in the ${L("hbotGuide", "hyperbaric chamber guide")}.`,
          `If you are weighing it against other investments for the same budget, compare it with the equipment in a ${L("lounge", "recovery lounge")}, such as heat, cold and compression. A chamber is a premium add-on rather than a starting point for most venues.`,
          `Ask about delivery routes and warranty terms, which we cover in ${L("buying", "our buying guide")}. And browse the ${CATALOGUE("Air & Oxygen category")} to see current models.`,
        ],
        callout: {
          type: "tip",
          text: "Measure the door, the corridor and the lift before you order. A modular cabin helps, but the generator and compressor are still heavy.",
        },
      },
    ],
    faqs: [
      {
        question: "What is the difference between Oxa and Oxy chambers?",
        answer: `Both are hyperbaric oxygen chambers. The Oxa Cube and Mini models are rated 2.0 ATA, while the Oxy 1 and Oxy 2 are available at 1.5 or 2.0 ATA with custom colours and an optional red-light version.`,
      },
      {
        question: "Which hyperbaric chamber suits a small studio?",
        answer: `A single-user chamber such as the Oxa Cube Solo or the more compact Oxa Mini, provided you can meet regulatory, space and operator requirements.`,
      },
      {
        question: "How loud is the chamber?",
        answer: `Internal noise is listed at 45 dB or below and external noise at 58 dB or below, based on the supplied specifications.`,
      },
      {
        question: "Can two people use a hyperbaric chamber together?",
        answer: `Yes, in the two-seat models such as the Oxa Cube Duo and Oxy 2, in line with the operator's procedures and local regulations.`,
      },
    ],
  },

  [SLUG.hbotRoom]: {
    sections: [
      {
        id: "client-flow",
        heading: "Designing the client flow",
        content: [
          `A safe room is also a calm room. Plan a short, clear journey: reception, screening, briefing, a small waiting area, the chamber room and a place to rest afterwards. Keep the corridor clear and the signage simple.`,
          `Offer lockers or a clear place to store anything that should not enter the cabin, and brief every client on what that includes. A consistent, friendly routine helps everyone feel at ease and reduces mistakes.`,
        ],
      },
      {
        id: "checklist",
        heading: "A pre-installation checklist",
        content: [
          `1. Regulatory approval and insurance confirmed`,
          `2. Qualified operator(s) identified and trained`,
          `3. Room dimensions, door width and floor loading checked`,
          `4. Dedicated electrical supply and earthing installed by a qualified electrician`,
          `5. Space for the oxygen generator, compressor and service access`,
          `6. Ventilation and temperature within the operating range (0–40 °C, 30–90% humidity)`,
          `7. Emergency plan, signage and extinguishers in place`,
          `8. Client screening forms and session logs ready`,
          `Work through the list with your supplier. The ${L("hbotSizes", "single vs double vs portable guide")} helps you match the chamber to the room.`,
        ],
      },
      {
        id: "daily-routine",
        heading: "A daily safety routine",
        content: [
          `Before the first client: inspect the cabin, door seals, valves, emergency switch and intercom. Before each session: confirm the client's screening, brief them, check their clothing and items brought into the cabin. After each session: log the details, wipe surfaces and note any issues.`,
          `Keep maintenance records and arrange periodic professional servicing. If you also run heat or cold facilities, such as an ${L("saunaGuide", "infrared sauna")}, keep a consistent hygiene and logging system across the whole space.`,
        ],
        callout: {
          type: "tip",
          text: "Laminate a one-page emergency procedure and fix it beside the chamber and at reception. Review it with the whole team every quarter.",
        },
      },
    ],
    faqs: [
      {
        question: "What room does a hyperbaric chamber need?",
        answer: `A well-ventilated room with space for the cabin, generator and compressor, a dedicated electrical supply, service access and a clear exit. Exact needs depend on the model.`,
      },
      {
        question: "Can a hyperbaric chamber be installed at home?",
        answer: `Local regulations and the supplied requirements apply, and a trained operator and medical suitability check are required. We recommend discussing your situation with us and your local authority first.`,
      },
      {
        question: "What power supply do the chambers need?",
        answer: `The listed supply is 220 V / 50 Hz, with 110–120 V / 60 Hz also noted. A qualified electrician should plan the circuit.`,
      },
      {
        question: "Who should be present during a session?",
        answer: `A trained operator, following the supplied procedures and your local regulations, should supervise sessions via the control panel and intercom.`,
      },
    ],
  },
};
