import { CATALOGUE, COMBOS, L, P, SLUG, SOLUTION, type BlogExtras } from "./helpers";

export const HEAT_EXTRAS: BlogExtras = {
  [SLUG.saunaGuide]: {
    sections: [
      {
        id: "home-or-business",
        heading: "Buying for a home vs buying for a business",
        content: [
          `The same cabin can serve a family or a spa, but the buying logic is different. At home you are optimising for comfort, footprint and how often you will really use it. In a business you are optimising for capacity, turnaround, durability and the cost of keeping the room in service.`,
          `For a home, the ${P("halo1", "Halo 1")} or ${P("halo2", "Halo 2")} usually wins. For a studio, spa or clinic, the ${P("halo3", "Halo 3")} or a ${P("haloHybrid3", "Halo Hybrid 3")} gives you the capacity to run back-to-back sessions. Commercial buyers should also think about wipe-down routines, towel handling and booking flow, which we cover in ${L("lounge", "how to start a recovery lounge")}.`,
          `One more difference: businesses need a service plan. Ask who maintains the heaters, how quickly parts arrive and what the warranty says about commercial use. Our guide to ${L("buying", "buying, installation and support")} lists the questions worth asking.`,
        ],
      },
      {
        id: "mistakes-to-avoid",
        heading: "Seven mistakes we see buyers make",
        content: [
          `Most regrets are avoidable. Here are the ones we hear about most often.`,
          `1. **Buying too small.** A cabin that only just fits one person feels cramped. Size up if you can.`,
          `2. **Ignoring the electrics.** Discover the circuit is wrong after the cabin arrives, and you have a very expensive wardrobe. Read the ${L("saunaInstall", "planning guide")} first.`,
          `3. **Choosing on price alone.** Cheap cabins can skimp on wood, glass, wiring and heaters. Compare what is inside, not just the headline.`,
          `4. **Not asking about heaters.** The ${L("saunaHeaters", "heater type")} shapes the whole experience.`,
          `5. **Skipping after-sales.** If nobody can service it, it is only as good as the day it works.`,
          `6. **Forgetting the room.** Damp, unventilated or uneven floors cause trouble.`,
          `7. **Expecting a miracle.** An infrared sauna is a relaxing wellness ritual. It is not a cure for anything.`,
        ],
        callout: {
          type: "tip",
          text: "Write a one-page brief before you speak to suppliers: number of users, room size, power available, budget and whether it is for home or business. A good supplier will tell you straight away which cabin fits.",
        },
      },
      {
        id: "making-it-a-habit",
        heading: "Making it a habit, not a showpiece",
        content: [
          `The best sauna is the one you actually use. Put it where you will pass it daily, make it comfortable and keep a towel, a water bottle and a timer inside the door. Start with the ${L("saunaSession", "beginner's session guide")} and set a gentle weekly rhythm.`,
          `If you also like cold, build the two together. Our ${L("contrast", "contrast therapy guide")} shows how to pair a cabin with a plunge, and ${L("stack", "the recovery stack")} shows how heat fits into a wider routine.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How much does an infrared sauna cost?",
        answer: `It depends on size, heater type, wood and extras like chromotherapy or sound. Rather than quote a figure that may not suit your needs, we recommend sharing your space, number of users and budget with our team so we can match you to the right cabin. You can start from our [infrared sauna range](/products).`,
      },
      {
        question: "Is an infrared sauna better than a traditional sauna?",
        answer: `Neither is universally better. Traditional saunas heat the air to a high temperature, while infrared cabins warm you directly at a lower air temperature. Many people find the gentler heat easier to tolerate and the cabin quicker to warm up, but some love the intensity of steam. It comes down to preference.`,
      },
      {
        question: "How much electricity does an infrared sauna use?",
        answer: `Our cabins are rated at roughly 1,350 W (Halo 1), 1,750 W (Halo 2) and 2,100 W (Halo 3). Actual consumption depends on how long and how hot you run it. A qualified electrician should confirm the circuit for your building.`,
      },
      {
        question: "Can I put an infrared sauna outdoors or in a garage?",
        answer: `Our cabins are designed for indoor use in a dry, level, ventilated room. A garage or covered room can work if it is dry and properly wired, but avoid damp spaces and direct exposure to rain.`,
      },
      {
        question: "Is an infrared sauna safe for everyone?",
        answer: `No. People with heart or blood-pressure conditions, pregnant women and those on medication that affects heat tolerance should speak to a doctor first. Start with short sessions and stop if you feel unwell.`,
      },
    ],
  },

  [SLUG.saunaWorks]: {
    sections: [
      {
        id: "infrared-vs-steam",
        heading: "Infrared vs a traditional sauna, side by side",
        content: [
          `Both give you heat and a good sweat. How they get there is different, and that changes how a session feels.`,
          `• **Air temperature:** traditional saunas typically run around 80–100 °C. Infrared cabins sit lower, roughly 45–60 °C.`,
          `• **Warm-up:** a stove can take a long time to preheat. An infrared cabin is usually ready in a short wait.`,
          `• **Humidity:** steam saunas add humidity by throwing water on hot stones. Infrared cabins stay dry.`,
          `• **Feel:** steam is enveloping and intense. Infrared is gentler and more even, like sitting in the sun on a cool day.`,
          `• **Power and setup:** infrared cabins plug into a suitable mains circuit and need no chimney or water supply.`,
          `Neither is 'right'. Plenty of people enjoy both. If you are leaning towards infrared, our ${L("saunaGuide", "buying guide")} takes you through the decision.`,
        ],
      },
      {
        id: "sweat-and-comfort",
        heading: "Why people sweat in a cooler cabin",
        content: [
          `Sweating is your body's cooling system. Radiant infrared warms your skin and the tissue just beneath it, so your body starts to cool itself even when the air is not hot. That is why you can sweat freely at a lower cabin temperature.`,
          `The upside is comfort: you can usually breathe easily and chat, read or listen to music. The key is to listen to your body. Hydrate before and after, step out if you feel faint, and keep sessions sensible. Our ${L("saunaSession", "session guide")} walks you through it.`,
        ],
        callout: {
          type: "science",
          text: "Sweating is driven by your core and skin temperature, not by how hot the air is. Radiant heat can raise skin temperature at a much lower air temperature than a steam sauna.",
        },
      },
      {
        id: "where-light-fits",
        heading: "Where light therapy fits in",
        content: [
          `Near-infrared overlaps with the light used in red light devices, which is why some cabins describe themselves as 'full spectrum'. If you are curious about the difference between heating and light-focused devices, read ${L("wavelengths", "red vs near-infrared wavelengths")} and our ${L("lightGuide", "red light therapy guide")}.`,
          `Different heaters emphasise different bands. We compare carbon, ceramic and quartz options in ${L("saunaHeaters", "full-spectrum vs carbon vs ceramic heaters")}.`,
        ],
      },
    ],
    faqs: [
      {
        question: "Does infrared heat your body or the air?",
        answer: `Mostly your body. Infrared energy is absorbed by skin and nearby tissue and felt as warmth, so the cabin air can stay at a lower temperature than in a traditional sauna.`,
      },
      {
        question: "What is the difference between near, mid and far infrared?",
        answer: `They are bands of wavelength. Near-infrared is closest to visible red light, far-infrared has longer wavelengths and is felt as deep, soothing heat, and mid-infrared sits between them. Full-spectrum cabins aim to deliver several bands.`,
      },
      {
        question: "Why is my infrared sauna not as hot as a Finnish sauna?",
        answer: `It is designed that way. Infrared cabins work by radiant heat rather than hot air, so the air temperature is lower (around 45–60 °C) while you still warm up and sweat.`,
      },
      {
        question: "Do infrared saunas treat medical conditions?",
        answer: `No. We offer them as wellness equipment for relaxation and recovery routines. They are not a medical treatment. If you have a health condition, ask your doctor before using one.`,
      },
    ],
  },

  [SLUG.saunaHeaters]: {
    sections: [
      {
        id: "layout-and-comfort",
        heading: "Heater layout and how it feels in practice",
        content: [
          `Specs only tell part of the story. Where the heaters sit and how many there are decides whether your back, legs and chest get an even share of warmth. Good cabins place heaters around the body and keep hot surfaces out of reach.`,
          `When you try a cabin, check three things: is the warmth even, can you adjust it, and is any heater so close that it feels harsh? A well-designed cabin should feel the same whether you sit at one end of the bench or the other.`,
          `Wood and glass matter here too. Light-coloured wood reflects warmth gently, and a well-sealed glass door keeps heat in. The ${P("haloHybrid2", "Halo Hybrid 2")} pairs ceramic tube heaters with carbon panels in red cedar, while the ${P("halo2", "Halo 2")} uses full-spectrum heating with hemlock or red cedar options.`,
        ],
      },
      {
        id: "matching-to-place",
        heading: "Matching the heater to the place",
        content: [
          `• **Home bedroom or wellness corner:** carbon-led or full-spectrum for calm, even sessions.`,
          `• **Boutique studio:** a hybrid for quick warm-up between bookings and a bit more intensity.`,
          `• **Spa or clinic with mixed clients:** a hybrid or full-spectrum cabin gives you range to suit sensitive guests and heat lovers.`,
          `• **Gym with high footfall:** a larger cabin, like the ${P("halo3", "Halo 3")}, with robust build and simple controls.`,
          `Planning a space? Combine this with our ${L("saunaInstall", "size and power guide")} and the layout advice in ${L("lounge", "how to start a recovery lounge")}.`,
        ],
        callout: {
          type: "tip",
          text: "If you are buying for a business, ask how heater replacement works. Modular panels that a technician can swap in minutes keep the room earning.",
        },
      },
    ],
    faqs: [
      {
        question: "Which infrared heater is best for beginners?",
        answer: `Carbon-led or full-spectrum cabins tend to feel gentlest, because the warmth is broad and even. If you like stronger heat, a hybrid with ceramic heaters gives you more punch.`,
      },
      {
        question: "What does 'full-spectrum' mean on an infrared sauna?",
        answer: `It means the cabin is designed to emit more than one infrared band, typically near- and far-infrared together, rather than only far-infrared.`,
      },
      {
        question: "Are ceramic heaters safe?",
        answer: `Properly designed cabins position and guard ceramic heaters so they are not touched during normal use. Follow the manual, never cover the heaters and check the certification documents for your model.`,
      },
      {
        question: "Can two people with different heat preferences share a cabin?",
        answer: `Yes. A hybrid cabin such as the Halo Hybrid 2 or 3 combines carbon and ceramic heating, so the cabin can be set to a comfortable middle ground and people can sit nearer or further from the stronger heat.`,
      },
    ],
  },

  [SLUG.saunaInstall]: {
    sections: [
      {
        id: "back-to-the-guide",
        heading: "Before you plan, make sure you have the right cabin",
        content: [
          `Planning is easier when you know what you are installing. If you are still deciding between sizes and heater types, return to our ${L("saunaGuide", "infrared sauna buying guide")} and ${L("saunaHeaters", "the heater comparison")}. Both shape the footprint and power you will plan for.`,
          `If you are still deciding whether a cabin is the right format at all, ${L("saunaBlanket", "blanket vs cabin")} may save you space and money.`,
        ],
      },
      {
        id: "floor-ventilation-finish",
        heading: "Floor, ventilation and finish",
        content: [
          `A level, firm floor matters because cabins are assembled from panels. A tiled or hard floor is easiest to keep clean. If you use carpet, protect it, and consider a sauna mat. Leave a small gap around the cabin for air circulation and to avoid heat build-up against walls.`,
          `Ventilation keeps the room comfortable. A window or an extractor helps, particularly in small rooms. Avoid placing the cabin in a space with heavy steam or standing water, and keep curtains, towels and furniture clear of the heaters.`,
          `Lighting and sound are the finishing touches. Most of our cabins include chromotherapy lighting and Bluetooth sound, so think about where the control panel sits and where your phone will connect.`,
        ],
      },
      {
        id: "commercial-fit-out",
        heading: "If it is for a business",
        content: [
          `Commercial rooms add layers: fire safety, signage, accessibility, towel and laundry flow, and cleaning schedules. Speak to your electrician and local authority early. Plan the sauna next to changing facilities if you can, and put any ${L("contrast", "cold plunge")} within a few steps.`,
          `Our ${COMBOS("combos")} and ${SOLUTION("recover", "Recover & Restore solutions")} show how venues lay these rooms out, and the ${L("buying", "buying and installation guide")} covers delivery, warranty and support.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How big does a room need to be for an infrared sauna?",
        answer: `Allow the cabin footprint (90 × 90 cm for one person, 120 × 105 cm for two, 150 × 120 cm for three), plus around 60 cm in front for the door, and at least 190 cm of ceiling height.`,
      },
      {
        question: "Do I need a special electrical connection?",
        answer: `We recommend a dedicated, properly earthed circuit confirmed by a qualified electrician, based on the cabin's rated wattage (roughly 1,350–2,100 W across our range) and your building's wiring.`,
      },
      {
        question: "Is installation difficult?",
        answer: `Cabins ship as panel sets and assemble on site. The main challenges are access routes and having the electrical supply ready. Ask your supplier about installation support before ordering.`,
      },
      {
        question: "Can I move the sauna later?",
        answer: `Panel cabins can be disassembled and reassembled, but ask your supplier how this affects warranty and who should do it.`,
      },
    ],
  },

  [SLUG.saunaBlanket]: {
    sections: [
      {
        id: "blanket-care-and-safety",
        heading: "Using and caring for a blanket",
        content: [
          `A blanket is simple, but it deserves the same sensible habits as any heat device. Follow the manual's maximum time and temperature, never fall asleep inside one, and keep the controller and cables clear of the heated area. The ${P("emberWrap", "Ember Wrap")} offers temperatures up to 90 °C across three heat zones, so start low and work up.`,
          `Wipe the inner surface between sessions, let it air out and store it flat or loosely rolled. Check cables occasionally for wear. If you have circulation issues, diabetes, reduced skin sensation or a medical implant, speak to your doctor before using any heated product.`,
        ],
      },
      {
        id: "cost-of-ownership",
        heading: "Thinking about the whole cost",
        content: [
          `A blanket is cheaper to buy, but the real question is how often you will use it. A cheaper device that you use three times a week beats an expensive cabin that sits idle. Conversely, if you share the experience with a partner or run a business, a cabin spreads its cost over many users.`,
          `Think about what you will actually do: do you want a pure heat session, or a heat plus red light session like the ${P("auroraWrap", "Aurora Wrap")} provides? If you will use it with others, compare the ${P("halo2", "Halo 2")} cabin. And if you are curious about how heat fits with other tools, see ${L("stack", "the recovery stack")}.`,
          `If it is the heater technology that interests you, our ${L("saunaHeaters", "heater comparison")} explains why cabins feel different.`,
        ],
        callout: {
          type: "tip",
          text: "Buy the format that fits the habit you want. If you picture yourself lying on the sofa after work, buy the blanket. If you picture a ritual with music and a closed door, buy the cabin.",
        },
      },
    ],
    faqs: [
      {
        question: "Is a sauna blanket as good as an infrared sauna?",
        answer: `They are different experiences. A blanket warms you while you lie down and is compact and affordable. A cabin offers an upright, room-style session for more than one person. Neither is a medical treatment.`,
      },
      {
        question: "How long should I use a sauna blanket?",
        answer: `Follow the supplied guidance. As a general approach, begin with short sessions at a lower temperature and build up gradually as you feel comfortable. Never sleep in a heated blanket.`,
      },
      {
        question: "Can two people use a sauna blanket at once?",
        answer: `Generally no. Blankets are designed for one person at a time. If you want to share a session, a two-person cabin is a better fit.`,
      },
      {
        question: "Does the Aurora Wrap produce heat?",
        answer: `The Aurora Wrap is a red light blanket, built around 660 nm and 850 nm LEDs. The Ember Wrap is the far-infrared heated option, and it also includes red light and other features.`,
      },
    ],
  },

  [SLUG.saunaSession]: {
    sections: [
      {
        id: "four-week-plan",
        heading: "A gentle four-week plan",
        content: [
          `If you like structure, try this. Adjust it to how you feel, and talk to your doctor first if you have any health concerns.`,
          `1. **Week 1:** two sessions of about 10 minutes at a lower temperature. Focus on getting comfortable.`,
          `2. **Week 2:** two or three sessions of 12–15 minutes. Add a calm cool-down.`,
          `3. **Week 3:** three sessions of 15–20 minutes. If you like, add a very short cold rinse or ${L("coldGuide", "cold plunge")} afterwards.`,
          `4. **Week 4:** settle into your rhythm. Keep what you enjoy and drop what you do not.`,
          `The point is a routine you want to keep, not a test of toughness.`,
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common beginner mistakes",
        content: [
          `• **Staying too long.** Longer is not better. Leave when you feel done.`,
          `• **Skipping water.** Drink before and after. Sweating loses fluid.`,
          `• **Rushing out.** Sit and cool down properly.`,
          `• **Doing it on an empty or very full stomach.** A light snack an hour or two earlier suits most people.`,
          `• **Bringing your phone and scrolling.** The whole point is to switch off.`,
          `• **Ignoring signals.** Dizziness, nausea, a racing heart or discomfort mean stop.`,
        ],
        callout: {
          type: "tip",
          text: "Put a glass of water and a small towel just outside the door before you start. Everything you need afterwards should be within arm's reach.",
        },
      },
      {
        id: "making-it-social",
        heading: "Making it social",
        content: [
          `Many people find the sauna is where the best conversations happen. A two-person cabin like the ${P("halo2", "Halo 2")} is ideal for couples and friends. For a business, shared sessions are a selling point, as we explain in ${L("gym", "gym recovery zone pricing")}.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a beginner stay in an infrared sauna?",
        answer: `Roughly 10 to 15 minutes is a comfortable start for most people. You can build up gradually as you feel comfortable, and you should step out whenever you feel unwell.`,
      },
      {
        question: "How often can I use an infrared sauna?",
        answer: `Many home users settle on two to four sessions per week. Consistency matters more than frequency, and your doctor can advise you if you have any health conditions.`,
      },
      {
        question: "Should I shower before or after an infrared sauna?",
        answer: `Many people shower before to start clean and rinse afterwards once they have cooled down. Wait until your body temperature settles before a very cold shower.`,
      },
      {
        question: "Should I wear anything in the sauna?",
        answer: `Wear whatever is comfortable, such as a swimsuit or a towel, and sit on a towel for hygiene. In shared or commercial settings, follow the venue's rules.`,
      },
    ],
  },
};
