import { CATALOGUE, COMBOS, L, P, SLUG, SOLUTION, type BlogExtras } from "./helpers";

export const AGEING_EXTRAS: BlogExtras = {
  [SLUG.senior]: {
    sections: [
      {
        id: "a-first-month",
        heading: "A first-month plan",
        content: [
          `**Week 1:** install one device, train two or three staff and invite a small group of residents for a demonstration.`,
          `**Week 2:** open the lounge for short, supervised sessions. Collect feedback after each one.`,
          `**Week 3:** adjust seating, lighting and schedule based on what you heard.`,
          `**Week 4:** review usage, share positive stories with residents and families, and decide what to add next.`,
          `Small steps build trust and avoid expensive mistakes.`,
        ],
      },
      {
        id: "designing-the-room",
        heading: "Designing a room people want to be in",
        content: [
          `Think café, not clinic. Warm lighting, comfortable seating, a few plants, soft music and a visible, friendly staff member. Residents are more likely to try something new in a space that feels welcoming.`,
          `Keep floors non-slip, entrances step-free and pathways clear. Give each device space so a resident, and a carer if needed, can get in and out comfortably. Put the controls where staff can reach them easily and place a call button nearby.`,
          `Consider schedules, too. A weekly 'wellness hour' gives residents something to look forward to and helps staff plan their time. Social sessions, where residents sit together, often work better than solo slots.`,
        ],
        callout: {
          type: "tip",
          text: "Ask a few residents to test the room before you finalise it. They will spot issues with height, glare and noise that designers miss.",
        },
      },
      {
        id: "staff-and-families",
        heading: "Involving staff, residents and families",
        content: [
          `The best lounges are built with the people who use them. Talk to residents about what they enjoy, involve nursing and activity teams early and keep families informed. A short information sheet and a consent process for each device build trust.`,
          `Think about training, record-keeping and how you will handle residents who feel unwell. Our ${L("buying", "guide to installation and after-sales support")} describes what to ask suppliers, and the ${L("hotel", "hospitality guide")} offers ideas from the way hotels welcome guests.`,
          `If you are building a wider programme, the ${SOLUTION("agewell", "AgeWell solution")} and ${COMBOS("combos")} offer starting points.`,
        ],
      },
    ],
    faqs: [
      {
        question: "What wellness equipment suits senior living communities?",
        answer: `Seated, low-effort options such as massage chairs, gentle leg compression and soft light lamps are common choices. Always involve clinical staff and respect each resident's medical advice.`,
      },
      {
        question: "Is it safe for older adults to use compression boots?",
        answer: `Many older adults enjoy them, but circulation conditions, clotting concerns and skin fragility are common and need a doctor's guidance. Start on gentle settings with supervision.`,
      },
      {
        question: "Should a senior living community have a sauna?",
        answer: `Only with clinical input. Heat affects blood pressure and hydration, so residents should be screened and supervised, and sessions kept short.`,
      },
      {
        question: "How can homecare providers use wellness equipment?",
        answer: `Compact, easy-to-use devices such as a leg massager or a portable chair can support a comfortable routine at home. Provide training and confirm suitability with the client's care team.`,
      },
    ],
  },

  [SLUG.wheelchair]: {
    sections: [
      {
        id: "trying-before-buying",
        heading: "Trying before buying, and what to measure",
        content: [
          `If possible, test a chair in the places it will be used: at home, in the car boot, at the front door and on the usual route. Check turning space, doorway width, ramp or kerb height and how easy it is to transfer in and out.`,
          `Comfort at the destination matters as much as comfort on the move. If the chair is for someone who loves to relax after an outing, a quiet, seated ${L("chair", "massage chair")} in the lounge is a lovely end to the day.`,
          `Measure the user (seat width, depth, back height and weight), the chair's folded size, and the car or lift it must fit. Check the maximum user weight (the ${P("glideFlex", "Glide Flex")}, for example, lists a 159 kg capacity) and the battery range under real conditions.`,
        ],
      },
      {
        id: "cost-and-support",
        heading: "Maintenance, batteries and support",
        content: [
          `A wheelchair is something people rely on every day, so plan for upkeep. Ask about battery life and replacement, tyres, controllers and spare parts, and who services the chair locally. If you are buying for an organisation, see ${L("buying", "our guide to warranty and after-sales support")}.`,
          `Think beyond the chair. Where will it be stored and charged? How will the user get to the places they enjoy? A comfortable lounge or garden is a great destination, which is why we cover it in ${L("senior", "wellness lounges for senior living")}. For hotels and venues, the ${L("hotel", "hotel suite guide")} touches on accessibility.`,
          `Explore the ${CATALOGUE("mobility range")} or ask our team about the ${SOLUTION("agewell", "AgeWell solution")}.`,
        ],
        callout: {
          type: "tip",
          text: "Keep a spare charger at the user's usual destination (a relative's home, a day centre) so range anxiety never limits outings.",
        },
      },
    ],
    faqs: [
      {
        question: "How do I choose between a foldable and a standing wheelchair?",
        answer: `Foldable chairs prioritise portability and storage. Standing chairs add the ability to change position but are bulkier and more complex. A clinician can advise which suits the user.`,
      },
      {
        question: "How far can an electric wheelchair go on a charge?",
        answer: `It depends on the model, battery and conditions. Listed ranges include up to 15 km for the Glide Trek 2 and up to 20 km for the Glide Core. Hills, weight and terrain reduce range.`,
      },
      {
        question: "Can an electric wheelchair be taken in a car?",
        answer: `Many folding models can, but check the folded dimensions and the weight of the heaviest component. The Glide Trek 1 weighs 22 kg and the Trek 2 weighs 22.4 kg.`,
      },
      {
        question: "Is there a wheelchair for children?",
        answer: `Yes. The Glide Junior is a compact electric chair for junior users. Because children grow, involve their care team and review the fit regularly.`,
      },
    ],
  },
};
