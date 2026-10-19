import { CATALOGUE, COMBOS, L, P, SLUG, SOLUTION, type BlogExtras } from "./helpers";

export const BUSINESS_EXTRAS: BlogExtras = {
  [SLUG.lounge]: {
    sections: [
      {
        id: "staffing-and-operations",
        heading: "Staffing and day-to-day operations",
        content: [
          `A recovery lounge runs on routine. You need someone to greet, explain, set up equipment, clean between guests and handle bookings. For many small venues that is one or two people, trained on each device and confident about screening clients politely.`,
          `Write simple standard operating procedures: opening checks, cleaning schedules, what to do if a guest feels unwell, how to log sessions. Keep them short and visible. Train for the unglamorous things first, such as towels, laundry and keeping the floor dry around the plunge.`,
          `Choose a booking system that shows availability by device and room. Sessions that run late ruin the next booking, so build in buffer time.`,
        ],
        callout: {
          type: "tip",
          text: "Appoint one 'equipment champion' who checks every device at opening and closing. Small faults caught early rarely become expensive.",
        },
      },
      {
        id: "specialist-formats",
        heading: "Premium and specialist add-ons",
        content: [
          `Once the basics run smoothly, consider adding a premium service. A cryosauna suits venues with a trained team, as discussed in ${L("cryoVsIce", "cryotherapy vs ice bath")}. A hyperbaric chamber is a regulated, staff-intensive service. Read the ${L("hbotGuide", "hyperbaric chamber guide")} and ${L("hbotSizes", "single vs double vs portable")} before considering one.`,
          `For a hospitality setting, borrow ideas from ${L("hotel", "hotel and resort recovery suites")}. For community and care settings, see ${L("senior", "senior living wellness lounges")}, and for practitioners adding a lounge-style service to a treatment room, see ${L("clinic", "equipping a physio or chiropractic clinic")}.`,
          `Choose compression to match your service level, as explained in ${L("bootsChambers", "4 vs 6 vs 8 chambers")}.`,
        ],
      },
      {
        id: "marketing-without-hype",
        heading: "Marketing without hype",
        content: [
          `The strongest marketing is a clear, honest promise: a calm hour, a reset after training, a place to unwind. Avoid medical claims, avoid 'miracle' language and let the experience speak. Good photography, honest descriptions and a clear first-visit offer do more than big claims.`,
          `Partner with local gyms, physios, corporate wellness managers and hotels, and invite them for a trial. Collect testimonials from real members and ask permission before sharing them.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How much space do I need for a recovery lounge?",
        answer: `A starter lounge can fit in a few rooms. A sauna cabin, a plunge, a compression area and a small reception can work in a modest floor area. Our floor-planning advice and combos can help you size it.`,
      },
      {
        question: "What equipment should a recovery lounge start with?",
        answer: `A lean start of infrared sauna, cold plunge and compression boots covers heat, cold and recovery. Add red light or a massage chair as premium extras.`,
      },
      {
        question: "How do I price recovery sessions?",
        answer: `Most venues offer single sessions, packs and memberships. Calculate your costs and realistic bookings, then set prices that cover them and fit your market.`,
      },
      {
        question: "Do I need a licence for a recovery lounge?",
        answer: `Requirements vary by location and by which services you offer. Check local business, health and safety and electrical rules, and take extra care with regulated equipment such as hyperbaric chambers.`,
      },
    ],
  },

  [SLUG.hotel]: {
    sections: [
      {
        id: "staff-and-service",
        heading: "Staff, scripts and service",
        content: [
          `Hotels know hospitality. Apply it here: a warm welcome, a clear explanation of each service, a quiet handover and a thoughtful goodbye. Give staff a short script for describing each service in plain words, and for explaining health screening without sounding clinical.`,
          `Train a core team of two or three people on every device so the suite never closes because one person is off. Keep a one-page 'if something goes wrong' card at the front desk, and make sure night staff know how to reach support.`,
        ],
      },
      {
        id: "accessibility",
        heading: "Accessibility and inclusivity",
        content: [
          `A recovery suite should welcome everyone. Plan step-free access, wide doors, grab rails where appropriate and seating at a sensible height. Offer options for guests who prefer not to use heat or cold. Quiet, seated services such as a massage chair or gentle compression suit many guests.`,
          `Make sure staff are comfortable helping guests who use mobility equipment, and think about the route from rooms to the suite. Our guide to ${L("wheelchair", "choosing mobility equipment")} gives you a sense of what guests may be using.`,
        ],
      },
      {
        id: "seasonal-and-local",
        heading: "Seasonal and local touches",
        content: [
          `Adapt the menu to your climate and guests. A warm-weather resort may lead with cold and contrast. A hill station or winter destination might lead with infrared and massage. Our ${L("contrast", "contrast therapy guide")} shows how to build a signature heat and cold ritual, and our ${L("chair", "massage chair guide")} covers the quiet, seated side.`,
          `Think about sound, scent and light, because they make the difference between a gym room and a sanctuary. Cabins with chromotherapy lighting and Bluetooth sound, like the ${P("halo3", "Halo 3")}, help set the tone.`,
        ],
        callout: {
          type: "tip",
          text: "Offer in-room recovery too: a pair of compression boots like the PulseWave Go delivered to a guest's room is a lovely, low-cost touch.",
        },
      },
      {
        id: "from-pilot-to-signature",
        heading: "From pilot to signature experience",
        content: [
          `Start with a pilot: one suite, a short menu and a handful of staff. Measure bookings, feedback and which services guests choose. Then expand. Our ${COMBOS("combos")} and ${SOLUTION("recover", "Recover & Restore solutions")} show how venues scale up, and ${L("lounge", "how to start a recovery lounge")} covers the business planning.`,
        ],
      },
    ],
    faqs: [
      {
        question: "What equipment does a hotel recovery suite need?",
        answer: `A common starting point is an infrared sauna, compression boots and a massage chair, with a cold plunge, a red light bed or a contrast corner added for a premium experience.`,
      },
      {
        question: "How do hotels price wellness suite sessions?",
        answer: `Hotels usually sell timed private sessions and bundle them into stay packages or day passes. Work out your costs and realistic bookings, then price to your market.`,
      },
      {
        question: "How much space does a hotel recovery suite need?",
        answer: `It can be as small as a single treatment room for a sauna cabin and a chair, or a larger suite with several zones. Plan around guest flow, privacy and utilities.`,
      },
      {
        question: "Can a small boutique hotel offer recovery services?",
        answer: `Yes. A compact infrared cabin, a pair of compression boots and a massage chair make a simple, appealing recovery nook for a boutique property.`,
      },
    ],
  },

  [SLUG.gym]: {
    sections: [
      {
        id: "worked-example",
        heading: "A worked example (illustration only)",
        content: [
          `Imagine a studio with 250 members that launches a recovery add-on with three pairs of boots, a two-person sauna and a red light stand. Suppose 40 members take a ₹1,500 monthly add-on, which gives ₹60,000 a month. Add pay-per-session visitors, say 30 sessions a month at ₹500, for another ₹15,000.`,
          `Now subtract the real costs: extra power, cleaning, staff time, consumables, maintenance and a share of rent. What is left, divided into the equipment cost, is your payback period. If the number looks long, you can raise the price, add off-peak slots, bundle it with personal training or start with fewer devices.`,
          `These figures are illustrative only. Your members, prices and costs will be different, so build your own sheet. Our ${L("lounge", "recovery lounge guide")} has a template mindset you can borrow.`,
        ],
      },
      {
        id: "integrating-with-training",
        heading: "Weaving recovery into the training programme",
        content: [
          `Recovery sells best when coaches talk about it. Build it into onboarding, programming and class endings. A post-class cool-down in the compression area, a Friday contrast session or a monthly recovery workshop all help members see it as part of training.`,
          `Train your coaches to explain what each device is, who should check with a doctor first and how to use it. This builds trust and keeps usage safe. Our ${L("stack", "post-workout recovery stack")} gives you a simple script to share.`,
        ],
      },
      {
        id: "premium-venues",
        heading: "For premium and boutique studios",
        content: [
          `If your clients expect a higher-end experience, borrow ideas from hospitality: private slots, a calm lobby and a signature ritual. Read ${L("hotel", "recovery suites for hotels and resorts")} for inspiration, and ${L("lounge", "how to start a recovery lounge")} if you are planning a dedicated space.`,
          `Keep the offer simple. A ${P("halo2", "Halo 2")}, a few pairs of boots and a ${L("coldGuide", "cold plunge")} are enough to launch.`,
        ],
        callout: {
          type: "tip",
          text: "Photograph and film the zone. A beautiful recovery room is the best marketing a studio can have.",
        },
      },
    ],
    faqs: [
      {
        question: "Should a gym include recovery in the membership?",
        answer: `It depends on your members. Premium studios often charge for recovery, while budget gyms may include a basic offering. Test with a small group before deciding.`,
      },
      {
        question: "How many pairs of compression boots does a gym need?",
        answer: `Start with a few pairs and add as demand grows. Track peak-hour usage to decide.`,
      },
      {
        question: "What recovery equipment gives the best return for a gym?",
        answer: `Low-footprint, high-throughput tools such as compression boots and massage guns are the easiest to fill. A sauna or contrast corner can become your signature feature.`,
      },
      {
        question: "How do I stop recovery equipment being overused?",
        answer: `Use a booking system, session time limits and clear etiquette, and consider peak and off-peak pricing.`,
      },
    ],
  },

  [SLUG.clinic]: {
    sections: [
      {
        id: "patient-conversations",
        heading: "Talking to patients about wellness devices",
        content: [
          `Patients ask 'will this help me?' and the honest answer is that it depends. Say what the device does (applies compression, light, vibration or heat), what the session feels like and how long it lasts. Avoid promising outcomes, and never position a wellness device as a replacement for the treatment plan you have agreed.`,
          `Document consent and any contraindications you screened for. It protects the patient, the practitioner and the clinic, and it shows you take safety seriously. Patients notice when a clinic is careful, and they trust it more.`,
        ],
      },
      {
        id: "room-layout",
        heading: "Laying out a treatment room that works",
        content: [
          `Most clinic rooms are small, so every device has to earn its footprint. Keep the table or chair as the centre, wall-mount or park wheeled devices like the ${P("lumaTower", "Luma Tower")} in a corner and keep a clear path for the practitioner. Plan power outlets at table height so cables do not cross the floor.`,
          `Storage matters. A small cabinet for handhelds, gun heads, covers and wipes keeps the space calm and hygienic. Label each shelf. If compression boots are used regularly, a wall rack stops the hoses from tangling.`,
          `Finally, think about the patient's experience. Soft lighting, a warm welcome and a clear explanation of what each device does, and does not do, build trust faster than a big machine in the corner.`,
        ],
      },
      {
        id: "what-not-to-buy",
        heading: "What not to buy (yet)",
        content: [
          `Equipment that does not fit your caseload becomes expensive furniture. Skip anything you cannot explain to a patient in two sentences, anything you cannot clean in two minutes and anything nobody on the team is willing to learn.`,
          `Regulated devices need extra care. If you are thinking of adding a hyperbaric chamber, read the ${L("hbotGuide", "hyperbaric chamber guide")} first, because regulation, training and room requirements are significant.`,
        ],
      },
      {
        id: "phased-rollout",
        heading: "A phased rollout",
        content: [
          `Phase 1: a massage gun, a panel and a set of compression boots. Phase 2: a stand or additional boots as demand grows. Phase 3: specialist devices once the team is confident. At each step, measure how often each device is used and what patients say.`,
          `Understanding light is useful for your team, so share ${L("wavelengths", "red vs near-infrared wavelengths")} and ${L("lightGuide", "the red light guide")} internally. And if you are expanding into wellness packages, ${L("lounge", "how to start a recovery lounge")} describes how clinics add a lounge-style service.`,
        ],
        callout: {
          type: "tip",
          text: "Put a laminated one-page guide beside each device: what it is, how long to use it, who to avoid and how to clean it.",
        },
      },
    ],
    faqs: [
      {
        question: "What recovery equipment should a physio clinic start with?",
        answer: `A massage gun, a red light panel or stand and compression boots are common starting points, because they are quick to use and easy to clean.`,
      },
      {
        question: "Do clinic devices need regulatory approval?",
        answer: `Some devices, especially those using lasers, TENS or ultrasound, may fall under medical-device regulations in your region. Check with your regulator and insurer before purchasing.`,
      },
      {
        question: "How do I train clinic staff on new devices?",
        answer: `Ask your supplier for onsite or online training, write short guides for each device and have each team member practise before using it with patients.`,
      },
      {
        question: "Can a clinic offer wellness services as well?",
        answer: `Yes, many do. Keep clinical and wellness offerings clearly separated and describe each honestly.`,
      },
    ],
  },

  [SLUG.importing]: {
    sections: [
      {
        id: "red-flags",
        heading: "Red flags when comparing quotes",
        content: [
          `Quotes can look similar and hide very different things. Watch for these warning signs.`,
          `• **Vague specifications:** no wattage, no dimensions, no model numbers.`,
          `• **No named service contact:** a generic email address and no phone number.`,
          `• **Warranty only in conversation:** if it is not in the quote, it does not exist.`,
          `• **Pressure to pay in full immediately:** reasonable suppliers agree sensible payment milestones.`,
          `• **Photos that look like other people's products:** ask for a video call showing the real unit.`,
          `• **Refusing to discuss regulation:** especially for devices such as hyperbaric chambers, lasers or ultrasound.`,
          `A good supplier welcomes these questions. If you would like to see how we answer them, start from our ${SOLUTION("recover", "Recover & Restore")} page or browse the ${CATALOGUE("catalogue")}.`,
        ],
      },
      {
        id: "delivery-and-handover",
        heading: "Delivery day and handover",
        content: [
          `Delivery day should be boring. Have a named person on site, a clear unloading route and the electrical supply tested and ready. Inspect packages for damage before signing, and photograph anything unusual.`,
          `At handover, ask for a walk-through of each device, the manuals, warranty documents, cleaning instructions and a contact for service. Run each machine once before the installer leaves. This is also a good time to schedule staff training.`,
        ],
      },
      {
        id: "by-equipment-type",
        heading: "What to ask for each equipment type",
        content: [
          `• **Saunas:** electrical specs, heater replacement, floor and ventilation needs. See ${L("saunaInstall", "our sauna planning guide")} and ${L("saunaHeaters", "heater comparison")}.`,
          `• **Cold plunges:** chiller service, filter supply, water-care advice. See ${L("coldCare", "cold plunge maintenance")}.`,
          `• **Hyperbaric chambers:** regulation, operator training, safety testing. See ${L("hbotSizes", "choosing a chamber")} and ${L("hbotRoom", "room set-up")}.`,
          `• **Mobility equipment:** battery supply, spare parts, service network. See ${L("wheelchair", "choosing mobility equipment")}.`,
          `• **Light and compression devices:** replacement parts, cleaning guidance and consumables.`,
        ],
        callout: {
          type: "tip",
          text: "Ask for a written service plan that lists response times and escalation steps. Pin it to the staff room wall.",
        },
      },
    ],
    faqs: [
      {
        question: "Who handles customs and import duties?",
        answer: `This depends on the terms of sale. Always ask who is responsible for freight, customs clearance, duties and taxes, and have your accountant or customs broker confirm the amounts.`,
      },
      {
        question: "What warranty should I expect on wellness equipment?",
        answer: `Warranties vary by product and by whether use is personal or commercial. Get the terms in writing and ask who services the equipment locally. For example, the Arctic Zero cryosauna is supplied with a 3-year warranty.`,
      },
      {
        question: "Is installation included?",
        answer: `It varies by product and supplier. Ask what installation covers, what the site must prepare and whether training is included.`,
      },
      {
        question: "How do I check a supplier is reliable?",
        answer: `Ask for references, product certifications, written warranty terms and a named service contact, and talk to existing customers if possible.`,
      },
    ],
  },
};
