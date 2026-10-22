import { CATALOGUE, COMBOS, L, P, SLUG, SOLUTION, type BlogExtras } from "./helpers";

export const RECOVERY_EXTRAS: BlogExtras = {
  [SLUG.bootsGuide]: {
    sections: [
      {
        id: "using-them-well",
        heading: "Getting the most from a session",
        content: [
          `Sit or lie back with your legs supported, ideally slightly raised. Start on a low pressure and a standard programme, and increase gradually if you feel comfortable. Sessions are typically 20 to 30 minutes, and most units have a timer so you can relax without watching the clock.`,
          `Wear thin, comfortable clothing under the boots, and keep the hoses free of kinks. Charge wireless units fully beforehand. Many people use boots while reading, working or watching something, which is a big reason they actually stick with it.`,
          `Pressure is not a competition. Higher mmHg does not automatically mean better. The ${P("pulsewavePro6", "PulseWave Pro 6")} reaches 260 mmHg, and the ${P("pulsewaveGo", "PulseWave Go")} tops out at 150 mmHg. Choose the range that feels good for you.`,
        ],
        callout: {
          type: "tip",
          text: "If something feels painful, tingly or numb, stop and deflate the boots. Comfort is the signal to follow.",
        },
      },
      {
        id: "travel-and-daily-life",
        heading: "Travel, desk days and standing jobs",
        content: [
          `Compression is not just for athletes. Frequent flyers, retail staff, teachers, nurses and desk workers often enjoy a session at the end of a long day. Compact models like the ${P("pulsewaveEase", "PulseWave Ease")} (about four hours of battery) and the ${P("pulsewave5", "PulseWave 5")} travel well.`,
          `For older users, gentle settings and supervision are key, and a doctor's advice comes first. We talk about this in ${L("senior", "wellness lounges for senior living")}.`,
        ],
      },
      {
        id: "building-a-routine",
        heading: "Building boots into a routine",
        content: [
          `Boots are most satisfying as part of a ritual. Put them on after training, while you stretch, or on rest days with a book. Pair them with other tools as described in ${L("stack", "the post-workout recovery stack")}, and consider a ${L("gun", "massage gun")} for tight spots before you strap in.`,
          `Choosing between models? Read ${L("bootsChambers", "4 vs 6 vs 8 chambers")} before you decide.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How long should I use compression boots?",
        answer: `Typically 20 to 30 minutes per session, depending on the programme and the supplied guidance. Start shorter and lower if you are new to them.`,
      },
      {
        question: "Can I wear compression boots every day?",
        answer: `Many people use them several times a week. Daily use depends on your comfort and any advice from your doctor. Listen to your body and stop if anything feels wrong.`,
      },
      {
        question: "Are compression boots safe for everyone?",
        answer: `No. Anyone with clotting concerns, deep vein thrombosis, severe circulatory problems, infections or open wounds on the legs, or who is pregnant, should ask a doctor first.`,
      },
      {
        question: "What pressure should I use?",
        answer: `Start low and increase gradually to a level that feels firm but comfortable. Our boots range from about 30 to 260 mmHg depending on the model.`,
      },
      {
        question: "Can compression boots be used in a business?",
        answer: `Yes. They are a popular, low-footprint service for gyms, clinics and spas. See our recovery lounge guide for planning and pricing.`,
      },
    ],
  },

  [SLUG.bootsChambers]: {
    sections: [
      {
        id: "myths",
        heading: "Three myths about chamber count",
        content: [
          `**'More chambers always means more effective.'** Not necessarily. It means a finer sequence. Comfort, fit and pressure range matter just as much.`,
          `**'Wireless is weaker.'** Wireless boots like the ${P("pulsewaveGo", "PulseWave Go")} use compact pumps. They are fine for most users, but a wired, high-flow system offers a stronger pump and a wider pressure range.`,
          `**'Higher pressure is better.'** No. Many people prefer a gentler setting. Use the range that feels pleasant, and start low if you are new. Our ${L("bootsGuide", "complete guide")} covers safety.`,
        ],
      },
      {
        id: "other-features",
        heading: "Features that matter as much as chamber count",
        content: [
          `• **Wireless design:** the ${P("pulsewaveGo", "PulseWave Go")} and ${P("pulsewave4", "PulseWave 4")} have no hose tangle.`,
          `• **Control:** app, hand controller or on-boot LED. Staff often prefer physical buttons, like the ${P("pulsewave4Direct", "PulseWave 4 Direct")}'s hand controller, because they are fast and foolproof.`,
          `• **Battery life:** rechargeable models such as the ${P("pulsewaveMax", "PulseWave Max")} give you freedom to use them anywhere.`,
          `• **Timer and programmes:** the Max offers six programmes and a 15–60 minute timer.`,
          `• **Zone control:** the ${P("pulsewavePro8", "PulseWave Pro 8")} supports zone selection.`,
          `• **Heat or light add-ons:** the ${P("pulsewaveGlow", "PulseWave Glow")} includes infrared light emitters.`,
        ],
      },
      {
        id: "buying-for-a-business",
        heading: "Buying for a business",
        content: [
          `Think about throughput. A studio with six pairs can run six people at once, and a hand controller or auto-timer reduces staff time per session. Consider spare covers, cleaning wipes and storage. Boots in a rack look good and keep the room tidy.`,
          `Match chamber count to the service level you sell. Premium suites like the ones in ${L("hotel", "recovery suites for hotels and resorts")} benefit from eight-chamber systems, while a gym zone may value volume (see ${L("gym", "gym recovery zone pricing")}). Clinics lean towards the app-controlled six-chamber Pro 6, as in ${L("clinic", "equipping a clinic")}.`,
        ],
        callout: {
          type: "tip",
          text: "Start with a few pairs, track how often they are booked and add more once you see real demand.",
        },
      },
    ],
    faqs: [
      {
        question: "Do more chambers mean better compression?",
        answer: `More chambers give a smoother, more finely sequenced wave, but a well-made four- or five-chamber boot is plenty for most home users. Choose based on comfort, features and budget.`,
      },
      {
        question: "What is the difference between wireless and wired compression boots?",
        answer: `Wireless boots have the pump on the boot and are easy to move around in. Wired systems use a separate pump and hoses, often with higher pressure ranges.`,
      },
      {
        question: "Which PulseWave is best for runners?",
        answer: `Many runners like the wireless PulseWave Go or PulseWave 4 for convenience. Serious athletes may prefer the six-chamber Pro 6 for its wider pressure range and app control.`,
      },
      {
        question: "Can I use compression boots on my arms?",
        answer: `Our boots are designed for legs. Check each product's page for details before using any device on another body part.`,
      },
    ],
  },

  [SLUG.chair]: {
    sections: [
      {
        id: "comfort-and-fit",
        heading: "Fit: the part spec sheets skip",
        content: [
          `A chair that suits a 175 cm adult may not suit someone much shorter or taller. Check the track length, the leg-rest range and how the rollers sit relative to your shoulders. A body scan, like on the ${P("sereneMid", "Serene Mid")}, helps the chair adapt.`,
          `Sit in it for ten minutes if you can. Check the noise, the heat, the armrests and how easy it is to get in and out. If someone in your family has limited mobility, easy entry and exit matter more than extra programmes. For mobility equipment, see ${L("wheelchair", "choosing an electric or standing wheelchair")}.`,
        ],
      },
      {
        id: "hospitality-and-care",
        heading: "In hotels, clinics and care settings",
        content: [
          `Massage chairs are an easy, low-staff amenity. Hotels place them in spa lounges or quiet rooms, as discussed in ${L("hotel", "recovery suites for hotels and resorts")}, and senior communities value their gentle, seated experience, as in ${L("senior", "wellness lounges for senior living")}.`,
          `For heavy daily use, ask about build quality, upholstery materials and how easy covers are to clean. Compact lounge chairs like the ${P("serene360", "Serene 360")} fit smaller rooms and can run on battery, which simplifies layout.`,
          `Pair a chair with ${L("bootsGuide", "compression boots")} for a calm, full-body routine, and browse the ${CATALOGUE("Relax range")}.`,
        ],
        callout: {
          type: "tip",
          text: "Place the chair where it can recline fully without hitting a wall, and leave space for staff or family to help someone in and out.",
        },
      },
    ],
    faqs: [
      {
        question: "What is the difference between SL track and L track?",
        answer: `An L track runs from the neck down the back and then curves under the seat. An SL track follows the spine's S-curve and extends further under the seat, reaching more of your glutes and hips.`,
      },
      {
        question: "Is a 4D massage chair worth it over 3D?",
        answer: `4D adds variable speed and rhythm to the depth of 3D, so the massage feels more like a person's hands. If you value realism and can afford it, yes; otherwise a good 3D chair is excellent.`,
      },
      {
        question: "How long should a massage chair session be?",
        answer: `Most programmes run 15 to 30 minutes. Start with shorter sessions on a gentle setting and build up as you feel comfortable.`,
      },
      {
        question: "Who should avoid massage chairs?",
        answer: `People with spinal conditions, recent surgery, osteoporosis, pregnancy, implanted devices or circulation problems should ask a doctor first.`,
      },
    ],
  },

  [SLUG.gun]: {
    sections: [
      {
        id: "which-one-for-whom",
        heading: "Which Thrum for which person?",
        content: [
          `**The traveller or casual lifter:** the ${P("thrumLite", "Thrum Lite")} fits in a gym bag, charges by Type-C and the hot and cold head adds variety.`,
          `**The serious trainer or practitioner:** the ${P("thrumPro", "Thrum Pro")} gives you 30 speeds so you can go from a light warm-up to a firmer finish, plus an LCD that shows what you are doing.`,
          `**The person with big, dense muscles:** the ${P("thrumDeep", "Thrum Deep")}, with its 12 mm stroke, reaches more deeply into quads, glutes and upper back.`,
          `If you buy one gun for a shared space, such as a studio, the Pro is the safest all-rounder. Keep a spare set of heads and wipe them down between users.`,
        ],
      },
      {
        id: "technique",
        heading: "Technique: a minute per muscle",
        content: [
          `Turn the gun on before you place it on your body, start on a low speed and glide slowly. Spend about 30 to 60 seconds on large muscles like quads, glutes, calves and upper back. Pause on tight spots without pushing hard.`,
          `Use the right head for each area: a round head for large muscles, a flat head for broad areas and a bullet or fork head for precise spots (check the manual for what each head is designed for). The ${P("thrumLite", "Thrum Lite")} includes a hot and cold head too.`,
          `Avoid bony areas, joints, the front of the neck, the spine itself and any injured or swollen area.`,
        ],
      },
      {
        id: "noise-weight-battery",
        heading: "Noise, weight and battery",
        content: [
          `These are the unglamorous details that decide whether you use it. A loud, heavy gun gets left in the cupboard, so check the weight, the grip and the noise level if you can. Battery life and charging matter too, and Type-C charging is convenient for travel.`,
          `For a clinic or gym, buy one or two robust units and consider a spare charged battery or second device. Our ${L("clinic", "clinic equipment guide")} and ${L("bootsGuide", "compression boots guide")} show how guns fit alongside other tools.`,
        ],
        callout: {
          type: "tip",
          text: "Hold the gun in the hand you will use most and imagine reaching your own upper back. If it feels awkward in the shop, it will feel worse after a workout.",
        },
      },
    ],
    faqs: [
      {
        question: "What amplitude should a massage gun have?",
        answer: `Mid-range amplitudes suit most people. Deeper strokes, like the 12 mm stroke of the Thrum Deep, reach large muscles more deeply but can feel intense on smaller ones.`,
      },
      {
        question: "How long can I use a massage gun on one muscle?",
        answer: `Typically 30 to 60 seconds per area. Avoid overusing a single spot, and stop if it feels painful.`,
      },
      {
        question: "Is a massage gun good before or after a workout?",
        answer: `Many people use one before to warm up and after to relax. Keep pre-workout use brief and light.`,
      },
      {
        question: "Can a massage gun replace a physiotherapist?",
        answer: `No. It is a wellness tool for general relaxation. If you have an injury or persistent pain, see a healthcare professional.`,
      },
    ],
  },

  [SLUG.stack]: {
    sections: [
      {
        id: "weekly-templates",
        heading: "Weekly templates for different lives",
        content: [
          `**The busy professional:** boots at the desk on Tuesday and Thursday evenings, a sauna or contrast session at the weekend.`,
          `**The weekend athlete:** massage gun after a long session, boots on the evening, a plunge on rest days.`,
          `**The studio member:** a post-class ten-minute compression session, a weekly sauna and an occasional red light session.`,
          `**The older adult:** a seated massage chair session, a gentle leg massager and plenty of water, always with a doctor's advice. See ${L("senior", "wellness for senior living")} for more on this.`,
          `Change the templates to suit your body, your schedule and your space, and remember that the best routine is the one you will keep.`,
        ],
      },
      {
        id: "building-for-your-budget",
        heading: "Building the stack on a budget",
        content: [
          `You do not need all five tools. Start with the one that fits your life, then add as you go.`,
          `• **Under one tool:** a ${P("thrumLite", "Thrum Lite")} or a pair of ${P("pulsewaveGo", "PulseWave Go")} boots.`,
          `• **Two tools:** boots plus a ${L("masks", "face mask")} or ${L("lightGuide", "red light panel")}.`,
          `• **A corner of your home:** a compact ${P("halo1", "Halo 1")} cabin and a ${P("arcticRing", "round cold plunge")}.`,
          `• **A business:** our ${COMBOS("combos")} bundle several tools into one plan.`,
          `Each choice has a guide: ${L("bootsChambers", "compression boots")}, ${L("saunaGuide", "infrared saunas")}, ${L("coldGuide", "cold plunges")}, ${L("lightFormat", "red light")} and ${L("chair", "massage chairs")}.`,
        ],
      },
      {
        id: "rest-is-part-of-it",
        heading: "Rest is part of the stack",
        content: [
          `Recovery tools are pleasant, but they work alongside sleep, nutrition and sensible training. If you are sore for days, train too hard or sleep badly, no gadget will compensate. Use the tools to make rest more enjoyable and more consistent.`,
          `Keep an eye on how you feel. If a tool does not make you feel better, drop it. And if you have a health condition, always check with your doctor before using heat, cold, compression or light.`,
        ],
        callout: {
          type: "tip",
          text: "Keep a simple weekly log: what you used, for how long, and how you felt next day. After a month you will know which tools are worth keeping.",
        },
      },
    ],
    faqs: [
      {
        question: "What is the best order for recovery tools after a workout?",
        answer: `A common flow is gentle massage or compression first, then heat or cold if you want it, and finally rest. There is no single right answer; choose an order you enjoy.`,
      },
      {
        question: "Do I need a sauna and a cold plunge?",
        answer: `No. Many people use only one of them, or neither. They are optional extras for people who enjoy heat and cold.`,
      },
      {
        question: "What is the best first recovery tool to buy?",
        answer: `The one you will use most often. For many people that is compression boots or a massage gun, because they are affordable and take little space.`,
      },
      {
        question: "Can I use all these tools on the same day?",
        answer: `You can, but you do not have to. Start with one or two, keep sessions short and listen to how your body responds.`,
      },
    ],
  },
};
