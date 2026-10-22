import { AUTHORS } from "@/data/blog-types";
import { CATALOGUE, COMBOS, eq, L, P, SOLUTION, type BlogInput } from "./helpers";

export const HEAT_POSTS: BlogInput[] = [
  /* ------------------------------------------------------------------ */
  /* PILLAR                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "infrared-sauna-buying-guide",
    cluster: "heat",
    pillar: true,
    featured: true,
    date: "2026-06-02",
    title: "Infrared Sauna Buying Guide: How to Choose the Right One (2026)",
    excerpt:
      "Thinking about an infrared sauna for your home, studio or spa? Here is a plain-English guide to sizes, heater types, wood, power and the questions worth asking before you pay.",
    coverAlt: "Illustration of a wooden infrared sauna cabin glowing with warm heater strips",
    author: AUTHORS["marcus-vance"],
    tags: ["Infrared Sauna", "Buying Guide", "Full Spectrum", "Home Sauna", "Commercial Sauna"],
    keywords: ["infrared sauna buying guide", "best infrared sauna", "how to choose an infrared sauna", "full spectrum infrared sauna", "infrared sauna India"],
    relatedSlugs: ["how-infrared-saunas-work", "full-spectrum-vs-carbon-vs-ceramic-infrared-heaters", "infrared-sauna-size-power-and-installation"],
    keyTakeaways: [
      "Start with who will use it and where it will sit. Size, power and budget all follow from those two answers.",
      "Heater type matters more than the brochure suggests: carbon panels, ceramic tubes and full-spectrum quartz feel different.",
      "A cabin runs at roughly 45–60 °C, far gentler than a traditional steam sauna, which is why many people can sit through a whole session.",
      "Ask about wood, electrical needs, warranty and who services it before you ask about the price.",
    ],
    sections: [
      {
        id: "start-with-the-person-not-the-product",
        heading: "Start with the person, not the product",
        content: [
          `Every sauna enquiry we get begins with a model number. The conversation that actually helps begins somewhere else: who is going to use this, how often, and where will it live?`,
          `A couple in a flat who want a twenty-minute wind-down three evenings a week need something very different from a boutique studio running back-to-back bookings. One wants a cabin that fits a spare corner. The other wants capacity, fast heat-up and easy cleaning.`,
          `Write down three things before you look at a single spec sheet: the number of people using it at once, the room (or space) you have, and the electricity available there. If you can answer those, the shortlist writes itself.`,
        ],
      },
      {
        id: "pick-a-size",
        heading: "Pick a size you will actually use",
        content: [
          `Our ${CATALOGUE("infrared sauna range")} comes in one-, two- and three-person cabins. The ${P("halo1", "Halo 1")} is a compact 90 × 90 cm cabin that suits a single user in a bedroom, a home gym or a physio room. The ${P("halo2", "Halo 2")} (120 × 105 cm) is the sweet spot for couples and small studios. The ${P("halo3", "Halo 3")} (150 × 120 cm) is built for groups and busy commercial rooms.`,
          `Buyers tend to under-buy on size and regret it. If two people might ever want to sit together, go for the two-person cabin. It also gives a solo user room to stretch out and sit comfortably, which affects how often the sauna gets used. We go through the numbers in more detail in ${L("saunaInstall", "our sizing, power and installation guide")}.`,
        ],
        callout: {
          type: "tip",
          text: "Measure the door and the stairwell, not just the room. Cabins ship as panel sets and assemble on site, but you still want a clear path and about 190 cm of ceiling height.",
        },
      },
      {
        id: "heater-types",
        heading: "Heater type: the choice brochures skip over",
        content: [
          `Infrared saunas are not all the same inside. Carbon panels give a broad, even, gentle warmth. Ceramic tubes heat faster and feel more intense. Full-spectrum setups add near-infrared on top of far-infrared. Each suits a different person.`,
          `The ${P("haloHybrid2", "Halo Hybrid 2")} and ${P("haloHybrid3", "Halo Hybrid 3")} combine carbon panels with ceramic heaters for people who like a stronger, faster heat. The standard Halo range leans into full-spectrum. We unpack this properly in ${L("saunaHeaters", "full-spectrum vs carbon vs ceramic heaters")}, and if you want the physics behind it, read ${L("saunaWorks", "how infrared saunas actually work")}.`,
        ],
      },
      {
        id: "wood-and-build",
        heading: "Wood, build quality and the little things",
        content: [
          `You will sit against the wood, breathe next to it and clean it, so it matters. hemlock is light, smooth and low in scent. Red cedar is warmer in colour and has a pleasant natural aroma, but some people find it a little strong in a small cabin.`,
          `Look past the wood too. A tourmaline floor, a built-in ionizer, chromotherapy lighting and Bluetooth sound are not essentials, but they change how a session feels. Ask to see a cabin in person or on a video call and check the door seal, glass quality and how the control panel behaves.`,
        ],
      },
      {
        id: "questions-before-you-pay",
        heading: "Five questions to ask before you pay",
        content: [
          `1. What is the real electrical requirement, and will I need a dedicated circuit?`,
          `2. Which heater technology is inside, and are replacement parts available locally?`,
          `3. What does the warranty cover, and who services the cabin if something fails?`,
          `4. Is installation included, and how long does it take on site?`,
          `5. Can you share the certification and safety documents for the heaters and wiring?`,
          `A supplier who answers these without hesitation is usually the one you want. If you are buying for a business, read ${L("buying", "our guide to buying, installation and support")} first. And if you would like a person to talk it through, our team can help via the ${SOLUTION("recover", "Recover & Restore solutions")} page or the enquiry form.`,
        ],
      },
      {
        id: "what-next",
        heading: "What to read next",
        content: [
          `Once you have chosen a cabin, the next question is how to use it well. Our ${L("saunaSession", "beginner's session guide")} covers timing, hydration and what to expect. If you would rather not commit to a full cabin yet, compare it with a ${L("saunaBlanket", "sauna blanket")}. And if you are curious about pairing heat with cold, ${L("contrast", "contrast therapy")} is the natural next step.`,
          `For businesses, a sauna is rarely bought alone. Our ${COMBOS("equipment combos")} show how studios and clinics bundle infrared with cold, red light and compression.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("halo2", "Our best all-rounder: two-person full-spectrum cabin for couples, small studios and home spas."),
      eq("halo1", "A compact single-person cabin when floor space is tight."),
      eq("haloHybrid3", "Carbon plus ceramic heating in a roomy three-person cabin for groups."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "how-infrared-saunas-work",
    cluster: "heat",
    date: "2026-06-06",
    title: "How Infrared Saunas Actually Work: Near, Mid and Far Infrared Explained",
    excerpt:
      "No jargon, promise. Here is how infrared heat differs from a steam sauna, what near, mid and far infrared mean, and why the air in the cabin stays much cooler than you would expect.",
    coverAlt: "Illustration of infrared wavelength curves above a small sauna cabin",
    author: AUTHORS["elena-rostova"],
    tags: ["Infrared Sauna", "Near Infrared", "Far Infrared", "How It Works"],
    keywords: ["how do infrared saunas work", "near infrared vs far infrared", "infrared sauna vs traditional sauna", "infrared sauna temperature"],
    relatedSlugs: ["full-spectrum-vs-carbon-vs-ceramic-infrared-heaters", "red-vs-near-infrared-light-wavelengths", "infrared-sauna-session-guide-for-beginners"],
    keyTakeaways: [
      "A traditional sauna heats the air; an infrared sauna heats you directly with radiant energy.",
      "That is why an infrared cabin can sit around 45–60 °C and still make you sweat, while a Finnish sauna runs far hotter.",
      "Near, mid and far infrared are simply different wavelengths, and they feel different on the skin.",
      "Full-spectrum cabins combine several wavelength bands in one session.",
    ],
    sections: [
      {
        id: "the-short-version",
        heading: "The short version",
        content: [
          `Picture standing in the sun on a cold day. The air is chilly, yet your face feels warm. That is radiant heat: energy travelling as light, absorbed by whatever it hits. An infrared sauna works on the same idea.`,
          `A traditional sauna heats the air (often to 80–100 °C) and the air heats you. An infrared sauna warms you directly, so the cabin air stays much lower, typically in the 45–60 °C range. For many people that makes the experience easier to sit through, especially if very hot, humid rooms leave them uncomfortable.`,
        ],
      },
      {
        id: "near-mid-far",
        heading: "Near, mid and far infrared in plain words",
        content: [
          `Infrared is the part of the light spectrum just beyond what we can see. It is usually split into three bands, and the names are only about wavelength.`,
          `• **Near-infrared (about 700–1,400 nm):** closest to visible red light. It reaches the shallowest, and it is the same region used in ${L("lightGuide", "red light devices")}.`,
          `• **Mid-infrared:** sits in the middle and is often described as a comfortable, penetrating warmth.`,
          `• **Far-infrared (longer wavelengths):** the classic deep, soothing heat most people picture when they think of an infrared sauna.`,
          `Our two-person ${P("halo2", "Halo 2")} is a full-spectrum cabin, meaning it is designed to deliver more than one band rather than only far-infrared.`,
        ],
        callout: {
          type: "science",
          text: "Infrared photons carry energy that is absorbed as heat by skin and the tissue just beneath it. The exact depth depends on wavelength, which is why different bands feel different even at the same cabin temperature.",
        },
      },
      {
        id: "why-the-air-stays-cooler",
        heading: "Why the air stays cooler (and why that matters)",
        content: [
          `Because the heaters aim energy at your body rather than boiling the air, you can reach a good sweat at a lower air temperature. Many people tell us they can stay in longer and come out feeling relaxed rather than wrung out.`,
          `It also affects the room. Cabins heat up in a matter of minutes instead of the long preheat of a stove sauna, and they use far less power than you might fear. A ${P("halo1", "single-person cabin like the Halo 1")} is rated around 1,350 W, similar to a strong kettle.`,
        ],
      },
      {
        id: "what-it-does-not-do",
        heading: "What infrared does not do",
        content: [
          `We would rather be straight with you. An infrared sauna is a wellness experience: warmth, relaxation, a good sweat, a calm hour in your day. It is not a medical treatment, and we do not claim it cures anything. If you have a heart condition, are pregnant or take medication that affects heat tolerance, speak to your doctor before starting.`,
          `If you enjoy the idea, the next step is practical: ${L("saunaHeaters", "which heater type suits you")} and ${L("saunaSession", "how to run your first session")}. The full overview lives in our ${L("saunaGuide", "infrared sauna buying guide")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("halo2", "Full-spectrum heating for two people, with tourmaline floor and oxygen ionizer."),
      eq("halo1", "The same full-spectrum approach in a compact single-person footprint."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "full-spectrum-vs-carbon-vs-ceramic-infrared-heaters",
    cluster: "heat",
    date: "2026-06-10",
    title: "Full-Spectrum vs Carbon vs Ceramic Infrared Heaters: Which Is Better?",
    excerpt:
      "Carbon panels, ceramic tubes, full-spectrum quartz. Each heats differently, feels different and suits a different user. Here is how to choose without needing an engineering degree.",
    coverAlt: "Illustration comparing a carbon heater panel with glowing ceramic heater tubes",
    author: AUTHORS["elena-rostova"],
    tags: ["Carbon Heaters", "Ceramic Heaters", "Full Spectrum", "Infrared Sauna Comparison"],
    keywords: ["full spectrum vs carbon infrared sauna", "ceramic vs carbon infrared heaters", "best infrared sauna heater type", "hybrid infrared sauna"],
    relatedSlugs: ["infrared-sauna-buying-guide", "how-infrared-saunas-work", "infrared-sauna-size-power-and-installation"],
    keyTakeaways: [
      "Carbon panels give a gentle, even, wide-area warmth and are popular for long, relaxing sessions.",
      "Ceramic tubes heat up faster and feel more intense, a good match for people who like a stronger heat.",
      "Full-spectrum setups add near-infrared to far-infrared in one cabin.",
      "A hybrid cabin combines carbon and ceramic so two people can enjoy the same session differently.",
    ],
    sections: [
      {
        id: "why-it-matters",
        heading: "Why the heater matters more than the cabin shell",
        content: [
          `Two infrared saunas can look identical from the outside and feel completely different inside. The difference is the heater. It decides how fast the cabin warms up, how the heat feels on your skin and how even it is from head to toe.`,
          `If you have not read it yet, our ${L("saunaWorks", "explainer on how infrared saunas work")} covers the basics of wavelengths. This article is the practical follow-up: which technology should you actually buy?`,
        ],
      },
      {
        id: "carbon-panels",
        heading: "Carbon panels: gentle and even",
        content: [
          `Carbon heaters are large, flat panels that spread low-intensity warmth over a wide area. There is no single hot spot. The heat feels broad and soft, which is why they are loved for long, slow evening sessions.`,
          `They suit people who find intense heat uncomfortable, sit for longer sessions or want a calm, meditative experience. The trade-off is that the cabin can take a little longer to feel properly warm.`,
        ],
      },
      {
        id: "ceramic-tubes",
        heading: "Ceramic tubes: quick and punchy",
        content: [
          `Ceramic heaters are the glowing tubes you often see in the corners of a cabin. They get hot fast and project a more concentrated heat. If you like to step in and feel it straight away, ceramic delivers.`,
          `The flip side is that the warmth is less uniform, and some users find it too intense at close range. Good cabin design places them so you are not sitting right next to one.`,
        ],
      },
      {
        id: "full-spectrum-and-hybrid",
        heading: "Full-spectrum and hybrid: the best of both?",
        content: [
          `Full-spectrum cabins use quartz-style heaters to add near-infrared alongside the far-infrared. Our ${P("halo2", "Halo 2")} and ${P("halo3", "Halo 3")} take this approach, which many users describe as a brighter, more enveloping warmth.`,
          `Hybrid cabins take a different route: carbon panels for wide, gentle coverage plus ceramic heaters for faster, stronger heat. The ${P("haloHybrid2", "Halo Hybrid 2")} (two people) and ${P("haloHybrid3", "Halo Hybrid 3")} (three people) are built this way, which is handy when users have different heat preferences.`,
        ],
        callout: {
          type: "tip",
          text: "Not sure which you will like? If possible, sit in a cabin before buying. If you cannot, choose a hybrid or full-spectrum model, which gives you more range to adjust the feel.",
        },
      },
      {
        id: "quick-chooser",
        heading: "A quick chooser",
        content: [
          `• **I want a calm, long session:** carbon-led heating.`,
          `• **I want fast, strong heat:** ceramic or hybrid.`,
          `• **I want the widest range of wavelengths:** full-spectrum.`,
          `• **We are a couple with different tastes:** a hybrid two-person cabin.`,
          `Next, size and power. Our ${L("saunaInstall", "planning guide")} covers both, and the ${L("saunaGuide", "complete buying guide")} ties it all together. If you are curious about using heat alongside other tools, see how studios build a ${L("stack", "recovery stack")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("haloHybrid2", "Carbon panels plus ceramic heaters in a two-person red cedar cabin."),
      eq("halo3", "Full-spectrum quartz heating for up to three people."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "infrared-sauna-size-power-and-installation",
    cluster: "heat",
    date: "2026-06-14",
    title: "Infrared Sauna Size, Power and Installation: A Practical Planning Guide",
    excerpt:
      "How much space does an infrared sauna need, what electrical supply does it draw, and what should be ready before delivery day? A checklist for homes, studios and spas.",
    coverAlt: "Illustration of a floor plan with sauna, cold plunge and treatment areas laid out",
    author: AUTHORS["marcus-vance"],
    tags: ["Sauna Installation", "Electrical Planning", "Room Size", "Commercial Fit-out"],
    keywords: ["infrared sauna size", "infrared sauna power requirements", "infrared sauna installation", "how much space for infrared sauna"],
    relatedSlugs: ["infrared-sauna-buying-guide", "buying-wellness-equipment-installation-and-support", "how-to-start-a-recovery-lounge"],
    keyTakeaways: [
      "Our cabins are 90 × 90, 120 × 105 and 150 × 120 cm, all 190 cm tall. Leave extra room for the door swing and airflow.",
      "Power ranges from about 1,350 W (one person) to about 2,100 W (three people). Have a qualified electrician confirm the circuit.",
      "Choose a level, dry, well-ventilated floor, and avoid placing the cabin next to heavy moisture.",
      "Plan delivery access, assembly time and after-sales support before the cabin arrives.",
    ],
    sections: [
      {
        id: "footprints",
        heading: "Know the footprints",
        content: [
          `Here is what our cabins ask of your room, taken from the catalogue.`,
          `• ${P("halo1", "Halo 1")}: 90 × 90 × 190 cm, around 1,350 W, one person`,
          `• ${P("halo2", "Halo 2")}: 120 × 105 × 190 cm, around 1,750 W, two people`,
          `• ${P("halo3", "Halo 3")}: 150 × 120 × 190 cm, around 2,100 W, three people`,
          `Add roughly 60 cm in front for opening the door and getting in and out comfortably. If you plan to place a cold plunge nearby for ${L("contrast", "contrast therapy")}, sketch both on the same plan.`,
        ],
      },
      {
        id: "power",
        heading: "Power: do the maths early",
        content: [
          `At 1,350–2,100 W, these cabins draw less than many people expect, but they do run for long stretches. We recommend a dedicated, properly earthed circuit and a qualified electrician to confirm the wiring, breaker rating and socket in your building. We cannot give you a one-size-fits-all rule because every building is different.`,
          `For a studio that runs several devices at once (cabin, ${L("lightFormat", "red light")}, ${L("bootsGuide", "compression")}), add up the load of everything on the same board. Peak demand is what trips a breaker.`,
        ],
        callout: {
          type: "tip",
          text: "Ask your electrician to size the circuit for the cabin's maximum rated wattage plus a safety margin, and to fit an RCD or equivalent protection where your local code requires it.",
        },
      },
      {
        id: "the-room",
        heading: "Choosing the room",
        content: [
          `A dry, level, well-ventilated space is best. A spare bedroom, a corner of a home gym, a studio treatment room or a spa suite all work. Avoid bathrooms with heavy steam and damp, and avoid placing the cabin where its back panel is pressed hard against an outer wall that gets wet.`,
          `Cabins arrive as a panel set and are assembled on site. Check lift access, corridor widths and stairwells. It sounds boring until a panel will not clear a turn.`,
        ],
      },
      {
        id: "delivery-day",
        heading: "Delivery-day checklist",
        content: [
          `1. Electrical supply installed and tested`,
          `2. Floor level and protected`,
          `3. Clear route from the door to the room`,
          `4. Someone on site to approve placement`,
          `5. Warranty and service details in writing`,
          `For commercial buyers, the logistics get bigger, which is why we wrote a separate piece on ${L("buying", "buying, installation and support")}. If you are fitting out a whole space, see ${L("lounge", "how to start a recovery lounge")} for layout ideas, or explore our ${COMBOS("ready-made combos")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("halo1", "Smallest footprint: 90 × 90 cm."),
      eq("halo3", "Largest cabin: 150 × 120 cm for groups and commercial rooms."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "infrared-sauna-blanket-vs-cabin",
    cluster: "heat",
    date: "2026-06-18",
    title: "Infrared Sauna Blanket vs Cabin: Which One Should You Buy?",
    excerpt:
      "A sauna blanket is cheaper and fits in a cupboard. A cabin gives you the full experience. Here is an honest comparison of space, comfort, cost and who each one suits.",
    coverAlt: "Illustration of an infrared sauna blanket beside a small sauna cabin",
    author: AUTHORS["marcus-vance"],
    tags: ["Sauna Blanket", "Infrared Cabin", "Home Wellness", "Comparison"],
    keywords: ["infrared sauna blanket vs sauna", "sauna blanket review", "are sauna blankets worth it", "portable infrared sauna"],
    relatedSlugs: ["infrared-sauna-buying-guide", "red-light-therapy-complete-guide", "infrared-sauna-session-guide-for-beginners"],
    keyTakeaways: [
      "A blanket suits small spaces, travel and first-timers; a cabin suits regular, shared and commercial use.",
      "Blankets warm you while you lie down, so they feel different from sitting upright in a cabin.",
      "Some blankets add red light, PEMF or negative-ion features, so compare what is actually included.",
      "If you are unsure, start with a blanket and keep the cabin as the upgrade.",
    ],
    sections: [
      {
        id: "two-ways-to-get-heat",
        heading: "Two very different ways to get infrared warmth",
        content: [
          `A cabin is a room you step into. A blanket is something you lie in. Both use infrared heat, but the experience, price and practicality are not the same.`,
          `If you are still weighing up the whole category, our ${L("saunaGuide", "infrared sauna buying guide")} is the best place to start. This piece is for people stuck between the two formats.`,
        ],
      },
      {
        id: "where-blankets-win",
        heading: "Where a blanket wins",
        content: [
          `• **Space:** a blanket folds away. Perfect for a flat or a shared home.`,
          `• **Price:** a blanket costs a fraction of a cabin.`,
          `• **Warm-up:** heat arrives quickly, and you can lie down and switch off.`,
          `• **Features:** the ${P("emberWrap", "Ember Wrap")} is a 5-in-1 far-infrared dome blanket with three heat zones, red light, PEMF, terahertz and negative-ion stones, with temperatures up to 90 °C. The ${P("auroraWrap", "Aurora Wrap")} focuses on red light: 2,240 LEDs at 660 nm and 850 nm over a 180 × 180 cm surface.`,
        ],
      },
      {
        id: "where-cabins-win",
        heading: "Where a cabin wins",
        content: [
          `A cabin gives you a full-body, upright, room-style session with a wood interior, music, lighting and an ambience you simply cannot recreate under a blanket. It also takes two or three people, which matters for couples, families and any business.`,
          `If this is going to be a shared or revenue-generating asset, a cabin is the only serious option. Our ${P("halo2", "Halo 2")} is the usual starting point for homes and boutique studios.`,
        ],
        callout: {
          type: "tip",
          text: "Lying flat with your head out of the blanket is a more passive experience than sitting upright in a cabin. If relaxation is the goal, many people prefer it. If ritual and ambience are the goal, they prefer a cabin.",
        },
      },
      {
        id: "how-to-decide",
        heading: "How to decide",
        content: [
          `Ask yourself three questions: Do I have a permanent place for a cabin? Will more than one person use it? Do I want a ritual or just a quick, warm reset?`,
          `If the answers are no, no and quick reset, a blanket is a smart buy. If they are yes, yes and ritual, go for a cabin. A lot of our customers start with a blanket and add a cabin later. For tips on getting the most from either, read our ${L("saunaSession", "session guide")}, and if the red light side of the Aurora Wrap interests you, see our ${L("lightGuide", "plain-English red light guide")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("emberWrap", "5-in-1 far-infrared blanket with three heat zones and negative-ion stones."),
      eq("auroraWrap", "Full-body flexible red light blanket, 660 nm and 850 nm."),
      eq("halo2", "The cabin upgrade when you are ready for the full ritual."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "infrared-sauna-session-guide-for-beginners",
    cluster: "heat",
    date: "2026-06-22",
    title: "Your First Infrared Sauna Session: How Long, How Often and What to Expect",
    excerpt:
      "New to infrared saunas? A friendly walkthrough of temperature, session length, hydration and the small habits that make the experience better.",
    coverAlt: "Illustration of a timer dial beside a thermometer for a sauna session",
    author: AUTHORS["elena-rostova"],
    tags: ["Sauna Tips", "Beginner Guide", "Hydration", "Session Length"],
    keywords: ["how long to stay in infrared sauna", "infrared sauna for beginners", "how often use infrared sauna", "infrared sauna tips"],
    relatedSlugs: ["how-infrared-saunas-work", "contrast-therapy-infrared-and-cold-plunge", "post-workout-recovery-stack"],
    keyTakeaways: [
      "Start low and short, around 10–15 minutes, and build up as you feel comfortable.",
      "Hydrate before and after, and listen to your body rather than the clock.",
      "Cool down gradually, then rest. The after-session calm is half the point.",
      "Check with your doctor first if you have a health condition or take medication.",
    ],
    sections: [
      {
        id: "before-you-start",
        heading: "Before you step in",
        content: [
          `Drink a glass of water about half an hour before. Avoid a heavy meal right before, and skip alcohol. Remove jewellery that gets hot, and bring a towel to sit on.`,
          `If you have a heart or blood pressure condition, are pregnant, or take medication that affects how you handle heat, talk to your doctor first. This is general guidance, not medical advice.`,
        ],
      },
      {
        id: "temperature-and-time",
        heading: "Temperature and time",
        content: [
          `Because infrared heats you directly, the cabin air is lower than in a steam sauna. Many people are comfortable somewhere in the mid-40s to high-50s °C. If you are new, begin at the lower end.`,
          `For your first few sessions, aim for roughly 10 to 15 minutes. As you get used to it, you can extend to 20 to 30 minutes. Longer is not better. If you feel dizzy, uncomfortable or unwell, step out.`,
        ],
        callout: {
          type: "tip",
          text: "Use the timer on the control panel and set an alarm for the last two minutes. Many beginners lose track of time because infrared feels so gentle.",
        },
      },
      {
        id: "during",
        heading: "During the session",
        content: [
          `Sit comfortably and breathe slowly. Some people read, listen to music (our cabins have Bluetooth sound) or simply close their eyes. Try putting your phone down. It is one of the few places where you can be genuinely unreachable for twenty minutes.`,
          `Towel off sweat as you go, which helps you stay comfortable.`,
        ],
      },
      {
        id: "after",
        heading: "After: the part people skip",
        content: [
          `Cool down gradually. Sit for a few minutes, sip water and let your body temperature settle before getting dressed. Rehydrate well, especially if you sweated heavily.`,
          `Once you are comfortable with heat, some people add a short ${L("coldGuide", "cold plunge")} afterwards, a routine we cover in ${L("contrast", "our contrast therapy guide")}. Others use infrared on rest days alongside a ${L("stack", "full recovery routine")}.`,
        ],
      },
      {
        id: "how-often",
        heading: "How often?",
        content: [
          `Most home users settle into two to four sessions a week. Consistency beats intensity. Pick a rhythm you can keep up.`,
          `If you have not bought a cabin yet, our ${L("saunaGuide", "buying guide")} and our explanation of ${L("saunaWorks", "how infrared actually works")} will help you decide. You can also look at the ${P("halo2", "Halo 2")}, a popular choice for couples who want to build a shared routine.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("halo2", "Two-person cabin with Bluetooth sound and chromotherapy lighting for a shared routine."),
    ],
  },
];
