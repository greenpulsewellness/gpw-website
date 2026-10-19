import { AUTHORS } from "@/data/blog-types";
import { CATALOGUE, COMBOS, eq, L, P, SOLUTION, type BlogInput } from "./helpers";

export const LIGHT_POSTS: BlogInput[] = [
  /* ------------------------------------------------------------------ */
  /* PILLAR                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "red-light-therapy-complete-guide",
    cluster: "light",
    pillar: true,
    date: "2026-07-12",
    title: "Red Light Therapy: A Plain-English Guide for Homes, Studios and Clinics",
    excerpt:
      "What red light therapy is, how the main formats compare (masks, panels, stands, beds, handhelds) and how to choose the right one without wading through marketing claims.",
    coverAlt: "Illustration of a red light therapy panel on a stand projecting a beam of red light",
    author: AUTHORS["elena-rostova"],
    tags: ["Red Light Therapy", "Photobiomodulation", "LED Therapy", "Buying Guide"],
    keywords: ["red light therapy guide", "what is red light therapy", "best red light therapy device", "red light therapy panel", "photobiomodulation"],
    relatedSlugs: ["red-vs-near-infrared-light-wavelengths", "red-light-bed-vs-panel-vs-stand", "led-face-masks-buying-guide"],
    keyTakeaways: [
      "Red light therapy uses low-level red and near-infrared light, usually around 630–660 nm and 810–850 nm.",
      "It comes in several formats. The right one depends on how much of the body you want to cover and how often you will use it.",
      "Be sceptical of big promises. Look for transparent specs: wavelengths, LED count, power and session guidance.",
      "Everything here is wellness use, not medical treatment.",
    ],
    sections: [
      {
        id: "what-it-is",
        heading: "What red light therapy is (and isn't)",
        content: [
          `Red light therapy, often called photobiomodulation, uses low-level red and near-infrared light delivered by LEDs or low-power lasers. There is no heat to speak of and no UV. You simply sit or stand in front of a device for a few minutes.`,
          `People use it as part of wellness routines for skin, recovery and general relaxation. We are not a clinic, so we keep our language to wellness. If you have a medical condition, speak to your doctor, and never treat a device as a replacement for medical care.`,
        ],
      },
      {
        id: "the-formats",
        heading: "The main formats at a glance",
        content: [
          `• **Face and neck masks:** wearable and personal. See ${L("masks", "our LED face mask guide")}.`,
          `• **Panels and lamps:** target an area or the whole body from a stand or wall. The ${P("lumaPanel", "Luma Panel")} and ${P("lumaSpot", "Luma Spot")} are examples.`,
          `• **Stands:** taller devices that cover more of the body, like the ${P("lumaStand1", "Luma Stand 1")} (12,312 LEDs, five wavelengths) and ${P("lumaTower", "Luma Tower")} (320 LEDs on wheels).`,
          `• **Beds and chambers:** full-body formats for studios and clinics, such as the ${P("lumaCocoon1", "Luma Cocoon 1")} bed and ${P("lumaDome", "Luma Dome")} chamber.`,
          `• **Handhelds:** targeted devices for specific areas. See ${L("handheld", "handheld red light and laser devices")}.`,
          `We compare the large formats head-to-head in ${L("lightFormat", "red light bed vs panel vs stand")}.`,
        ],
      },
      {
        id: "reading-the-specs",
        heading: "How to read a spec sheet",
        content: [
          `Look for wavelengths first. Most quality devices include red (around 660 nm) and near-infrared (around 850 nm). Our guide to ${L("wavelengths", "red vs near-infrared wavelengths")} explains why.`,
          `Then check LED count, total power, the size of the treatment area and the session timer. More LEDs does not automatically mean better, but a larger, well-built panel covers more of you in less time.`,
          `Finally, look for cooling and build quality, especially for commercial use, plus clear instructions about safe distances and eye protection.`,
        ],
        callout: {
          type: "science",
          text: "Light dose depends on power, distance and time. Two devices with the same LED count can deliver different doses. Follow the manufacturer's distance and session guidance rather than guessing.",
        },
      },
      {
        id: "who-uses-it",
        heading: "Who uses it, and where",
        content: [
          `At home, people tend to choose a mask or a mid-size panel. In studios and spas, full-body beds and stands create a premium, repeatable session. In clinics, handhelds and panels sit alongside other tools. Many venues combine red light with a sauna or compression, as shown in our ${COMBOS("combos")}.`,
          `Red light pairs particularly well with heat. Our ${L("saunaBlanket", "sauna blanket guide")} looks at one product that offers both, the ${P("auroraWrap", "Aurora Wrap")}. For businesses, see the ${SOLUTION("recover", "Recover & Restore solutions")} and our ${CATALOGUE("full light therapy range")}.`,
        ],
      },
      {
        id: "keep-reading",
        heading: "Where to go next",
        content: [
          `If skin is your focus, start with the ${L("masks", "face mask guide")}. If you want to cover your whole body, jump to ${L("lightFormat", "beds, panels and stands")}. If you like the science, read ${L("wavelengths", "the wavelengths explainer")}. And for targeted areas, there is ${L("handheld", "the handheld guide")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("lumaStand1", "Mobile full-body stand with five wavelengths and 12,312 LEDs."),
      eq("lumaPanel", "Height-adjustable panel with separate red and infrared control."),
      eq("maskDuo", "Wearable face and neck mask with seven colour modes."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "led-face-masks-buying-guide",
    cluster: "light",
    date: "2026-07-16",
    title: "LED Face Masks: How to Choose One (and Use It Properly)",
    excerpt:
      "Silicone or hard shell? Face only or face and neck? How many modes do you really need? A grounded guide to choosing an LED face mask and building a routine around it.",
    coverAlt: "Illustration of an LED light therapy face mask glowing red on a face and neck",
    author: AUTHORS["elena-rostova"],
    tags: ["LED Face Mask", "Skincare Tech", "Red Light", "Beauty Devices"],
    keywords: ["LED face mask buying guide", "best LED face mask", "silicone vs hard shell LED mask", "red light face mask"],
    relatedSlugs: ["red-light-therapy-complete-guide", "red-vs-near-infrared-light-wavelengths", "handheld-red-light-and-laser-devices"],
    keyTakeaways: [
      "Silicone masks are flexible and comfortable; hard-shell masks are sturdy and easy to wipe clean.",
      "More colour modes are only useful if you will use them. Start with the basics: red and near-infrared.",
      "Eye comfort matters, so check the eye protection and follow the session timer.",
      "A mask is a wellness gadget, not a medical device, so keep expectations realistic.",
    ],
    sections: [
      {
        id: "why-masks-are-popular",
        heading: "Why masks have taken off",
        content: [
          `A mask is the easiest way into light therapy. You put it on, press a button and sit with your eyes closed for ten or fifteen minutes. There is nothing to set up and no stand to store.`,
          `That convenience is why masks are the first LED device many people buy. If you want the bigger picture first, read our ${L("lightGuide", "red light therapy guide")}.`,
        ],
      },
      {
        id: "silicone-or-hard-shell",
        heading: "Silicone or hard shell?",
        content: [
          `**Silicone masks** flex to the contours of your face and feel comfortable against the skin. The ${P("maskDuo", "Luma Mask Duo")} is a silicone mask with a matching neck piece: 105 LEDs for the face and 114 for the neck, across seven colour modes.`,
          `**Hard-shell masks** hold their shape and wipe clean easily, with a more structured fit. The ${P("shell", "Luma Shell")} has 50 high-output LEDs and seven modes in an ABS shell. The ${P("shell2", "Luma Shell 2")} steps up to 78 LEDs and seven modes, with wavelengths from 390 to 630 nm plus white light and a rechargeable 800 mAh battery.`,
        ],
        callout: {
          type: "tip",
          text: "If you share a mask with a partner, a hard shell is easier to clean between users. If you want maximum comfort, go silicone.",
        },
      },
      {
        id: "modes-and-colours",
        heading: "Do you need seven colours?",
        content: [
          `Probably not on day one. Red is the one most people start with, and near-infrared adds a different type of warmth. Other colours are a bonus to explore. What matters more is a clear timer, a comfortable fit and a mask that stays cool.`,
          `For the science of what different wavelengths do, our ${L("wavelengths", "wavelengths explainer")} will help you read the spec sheet with confidence.`,
        ],
      },
      {
        id: "using-it-well",
        heading: "Using it well",
        content: [
          `Cleanse your skin first, remove make-up and heavy products, and follow the manufacturer's session length. Consistency matters more than marathon sessions. Pick a few fixed days a week and attach it to a habit, like your evening wind-down.`,
          `Keep your eyes closed, and stop if you feel any discomfort. If you have sensitive skin, a skin condition, are pregnant or use photosensitising medication, speak to a professional first. No LED mask is a cure for anything.`,
        ],
      },
      {
        id: "going-further",
        heading: "Going further",
        content: [
          `If you like how a mask feels, you might add a panel for the body. See ${L("lightFormat", "bed vs panel vs stand")} for the next step, or look at ${L("handheld", "handheld devices")} for targeted use. Businesses such as salons can build an add-on service around masks and panels. Browse the ${CATALOGUE("light therapy collection")} for options.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("maskDuo", "Silicone face and neck mask with 219 LEDs and seven colour modes."),
      eq("shell2", "Hard-shell mask with 78 LEDs, 390–630 nm plus white light, rechargeable."),
      eq("shell", "Hard-shell mask with 50 high-output LEDs and seven modes."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "red-light-bed-vs-panel-vs-stand",
    cluster: "light",
    date: "2026-07-20",
    title: "Red Light Bed vs Panel vs Stand: Choosing the Right Format",
    excerpt:
      "Full-body beds, tall stands and wall or floor panels all deliver red and near-infrared light, but they suit very different spaces and budgets. Here is how to decide.",
    coverAlt: "Illustration of a full-body red light bed next to a tall red light stand",
    author: AUTHORS["marcus-vance"],
    tags: ["Red Light Bed", "LED Panel", "Light Therapy Stand", "Commercial Wellness"],
    keywords: ["red light therapy bed vs panel", "full body red light therapy", "red light therapy stand", "commercial red light therapy bed"],
    relatedSlugs: ["red-light-therapy-complete-guide", "equipping-a-physio-or-chiropractic-clinic", "how-to-start-a-recovery-lounge"],
    keyTakeaways: [
      "Beds give the most immersive full-body session and suit studios and clinics with space.",
      "Stands cover a lot of the body, can move on wheels and fit more rooms.",
      "Panels are the most affordable and flexible, best for targeted or smaller spaces.",
      "Check cooling, power draw and the footprint before you choose.",
    ],
    sections: [
      {
        id: "same-light-different-delivery",
        heading: "Same light, different delivery",
        content: [
          `All three formats deliver red and near-infrared light. The difference is how much of your body they reach, how comfortable the session is and how much space and money they take. If you need a primer, start with our ${L("lightGuide", "red light therapy guide")}.`,
        ],
      },
      {
        id: "beds",
        heading: "Beds and chambers: the full experience",
        content: [
          `Lying down in a full-body bed wraps you in light from above (and sometimes below), so you get a complete session in one go. The ${P("lumaCocoon1", "Luma Cocoon 1")} is a clamshell bed with up to 28,512 LEDs, silent cooling and Bluetooth surround sound. The ${P("lumaCocoon2", "Luma Cocoon 2")} is a dome capsule with up to 26,880 LEDs, while the ${P("lumaDome", "Luma Dome")} is a walk-in chamber.`,
          `These are the premium choice for studios, spas and clinics: a signature service that feels special and runs on a timer. The trade-offs are price, footprint and power. Plan the room accordingly using lessons from ${L("lounge", "our recovery lounge guide")}.`,
        ],
      },
      {
        id: "stands",
        heading: "Stands: tall, mobile and flexible",
        content: [
          `A stand puts a tall panel in front of you and covers most of the body. The ${P("lumaStand1", "Luma Stand 1")} has 12,312 LEDs across five wavelengths on caster wheels, and the ${P("lumaStand2", "Luma Stand 2")} adds a motorised lift for effortless height adjustment. The ${P("lumaTower", "Luma Tower")} is a tall, mobile stand with 320 LEDs.`,
          `Stands suit venues that do not have room for a bed, or those who want to move the device between treatment rooms.`,
        ],
        callout: {
          type: "tip",
          text: "Standing sessions keep guests upright and quick, which makes stands good for short, high-turnover appointments. Beds suit longer, relaxation-focused bookings.",
        },
      },
      {
        id: "panels",
        heading: "Panels: affordable and targeted",
        content: [
          `Panels are the entry point. The ${P("lumaPanel", "Luma Panel")} has 75 dual-chip LEDs with separate red and infrared control and 10 Hz and 40 Hz pulse modes, on a height-adjustable stand. Smaller options like the ${P("lumaSpot", "Luma Spot")} and the ${P("lumaGo500", "Luma Go")} range suit specific areas and home use.`,
          `A panel covers less area, so sessions focus on one part of the body at a time, but the cost and space savings are significant.`,
        ],
      },
      {
        id: "decide",
        heading: "How to decide",
        content: [
          `• **Home, one or two users:** a panel or Go stand.`,
          `• **Gym or small clinic:** a stand, or a panel plus a stand.`,
          `• **Spa or premium studio:** a bed, ideally with a sauna and ${L("bootsGuide", "compression")} nearby.`,
          `If you are fitting out a clinic, read our guide to ${L("clinic", "equipping a physio or chiropractic clinic")}. And for a combined heat-and-light option, see how a blanket compares in ${L("saunaBlanket", "blanket vs cabin")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("lumaCocoon1", "Clamshell bed with up to 28,512 LEDs and silent cooling."),
      eq("lumaStand2", "Motorised full-body stand with automatic height lift."),
      eq("lumaPanel", "Affordable, height-adjustable panel for targeted use."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "red-vs-near-infrared-light-wavelengths",
    cluster: "light",
    date: "2026-07-24",
    title: "Red vs Near-Infrared Light: What the Wavelengths Do",
    excerpt:
      "660 nm, 810 nm, 850 nm. Why do red light devices list numbers like these, and what does each wavelength mean for how a session feels? A beginner-friendly explainer.",
    coverAlt: "Illustration of coloured light wave curves above a spectrum bar",
    author: AUTHORS["elena-rostova"],
    tags: ["Wavelengths", "660nm", "850nm", "Near Infrared", "Photobiomodulation"],
    keywords: ["660nm vs 850nm", "red light vs near infrared", "red light therapy wavelengths", "what nm for red light therapy"],
    relatedSlugs: ["red-light-therapy-complete-guide", "how-infrared-saunas-work", "led-face-masks-buying-guide"],
    keyTakeaways: [
      "Red light (around 630–670 nm) is visible; near-infrared (around 800–880 nm) is invisible.",
      "Near-infrared passes deeper into tissue than red, so many devices combine both.",
      "A nanometre figure on a spec sheet is useful only if the maker also states power and distance.",
      "This is a wellness explainer. It is not medical advice.",
    ],
    sections: [
      {
        id: "what-nm-means",
        heading: "What 'nm' means",
        content: [
          `Light is a wave, and a nanometre (nm) is how we measure the distance between its peaks. Different wavelengths give different colours (and invisible colours, too). Red sits at roughly 620–700 nm. Beyond that, past the edge of what your eyes can see, is near-infrared.`,
          `Why does that matter? Because light of different wavelengths interacts with the body differently, so devices often combine a few of them.`,
        ],
      },
      {
        id: "red",
        heading: "Red light: around 660 nm",
        content: [
          `Red light is visible, bright and absorbed mostly in the outer layers of the skin. It is the headline wavelength in many panels, masks and wearables. Our ${P("auroraWrap", "Aurora Wrap")} uses 660 nm red alongside 850 nm near-infrared, and the ${P("lumaGo500", "Luma Go 500")} stand does the same.`,
        ],
      },
      {
        id: "near-infrared",
        heading: "Near-infrared: around 810–850 nm",
        content: [
          `Near-infrared is invisible to the eye, but you may feel a gentle warmth. It travels further into tissue than red, which is why devices built for the body, not just the face, usually include it. The ${P("beamQuad", "Luma Beam Quad")} pairs a 650 nm red laser with an 808 nm infrared laser, and the ${P("beamWand", "Luma Beam Wand")} has 650 nm and 808 nm diodes in one handheld.`,
        ],
        callout: {
          type: "science",
          text: "In the research literature, red and near-infrared light are described as acting on cellular components such as mitochondria. Results vary between studies and devices, so treat claims with healthy scepticism and look for transparent specs.",
        },
      },
      {
        id: "infrared-saunas-too",
        heading: "How is this different from an infrared sauna?",
        content: [
          `Infrared saunas use infrared as a heat source, often far-infrared, which is felt as warmth. Light panels use red and near-infrared at low power mainly for the light itself. There is overlap at the near-infrared end, which is why full-spectrum cabins exist. We explain this in ${L("saunaWorks", "how infrared saunas work")}.`,
        ],
      },
      {
        id: "reading-a-spec-sheet",
        heading: "Reading a spec sheet in practice",
        content: [
          `Check four things: wavelengths, LED count, total power and the recommended distance and session time. If a seller lists only vague 'full spectrum' marketing with no numbers, ask for details.`,
          `Once you know what you want, move on to ${L("lightFormat", "choosing a format")} or the ${L("lightGuide", "complete red light guide")}.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("beamWand", "Handheld wand with 650 nm and 808 nm diodes."),
      eq("lumaGo500", "Portable stand with 660 nm and 850 nm LEDs."),
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "handheld-red-light-and-laser-devices",
    cluster: "light",
    date: "2026-07-28",
    title: "Handheld Red Light and Laser Devices: Where They Fit",
    excerpt:
      "Wands, 4-in-1 devices and scalp caps put light where you want it. Here is how they differ from panels and masks, and how to use them safely.",
    coverAlt: "Illustration of a handheld red light wand projecting light onto a shoulder",
    author: AUTHORS["marcus-vance"],
    tags: ["Handheld Laser", "Red Light Wand", "TENS", "Targeted Therapy"],
    keywords: ["handheld red light therapy device", "red light wand", "low level laser device", "4 in 1 therapy device"],
    relatedSlugs: ["red-light-therapy-complete-guide", "equipping-a-physio-or-chiropractic-clinic", "massage-gun-buying-guide"],
    keyTakeaways: [
      "Handheld devices are precise and portable, ideal for small, specific areas.",
      "A 4-in-1 unit combines light, TENS and ultrasound, so read the instructions for each mode.",
      "Always protect your eyes and follow the manufacturer's safety guidance.",
      "Treat them as wellness tools, not replacements for professional care.",
    ],
    sections: [
      {
        id: "why-handheld",
        heading: "Why choose a handheld?",
        content: [
          `Panels and beds cover a lot of ground. A handheld does the opposite: it goes exactly where you point it. That makes it handy for a sore shoulder, a stiff neck or any area where you want precise, short sessions. It also travels in a bag.`,
          `For the wider landscape of light formats, see our ${L("lightGuide", "red light therapy guide")}.`,
        ],
      },
      {
        id: "meet-the-devices",
        heading: "The devices in our range",
        content: [
          `• ${P("beamWand", "Luma Beam Wand")}: nine 650 nm red and four 808 nm infrared laser diodes, with continuous and pulsed modes and a 1,500 mAh battery.`,
          `• ${P("beamQuad", "Luma Beam Quad")}: a 4-in-1 handheld combining TENS, a 650 nm red laser, an 808 nm infrared laser and 1 MHz ultrasound, with a rechargeable battery.`,
          `• ${P("beamCrown", "Luma Beam Crown")}: a wearable cap with 200 laser diodes at 650 nm and power-bank compatibility, used by many people as part of a scalp-care routine. As with everything here, results vary and we make no medical claims.`,
        ],
      },
      {
        id: "safe-use",
        heading: "Using them safely",
        content: [
          `Never shine laser light into your eyes or anyone else's, and use the supplied eye protection. Keep sessions within the manufacturer's guidance, avoid broken skin and do not use over areas your doctor has asked you to avoid. TENS and ultrasound modes have their own rules, so read the manual for each.`,
          `If you are pregnant, have an implanted device such as a pacemaker or have a medical condition, ask your doctor before using any of these.`,
        ],
        callout: {
          type: "tip",
          text: "Keep a simple log of where you used the device, for how long and how you felt. It stops you overdoing a single spot and tells you whether the routine is working for you.",
        },
      },
      {
        id: "in-a-clinic",
        heading: "In a clinic or studio",
        content: [
          `Practitioners value handhelds because they are quick to deploy between clients and complement larger devices. A physio room might combine a handheld with a ${L("lightFormat", "stand or panel")} and a ${L("gun", "massage gun")}. We discuss a full room set-up in ${L("clinic", "equipping a physio or chiropractic clinic")}, and you can browse the ${SOLUTION("rehabilitate", "Rehabilitate solutions")} for ready-made kits.`,
        ],
      },
    ],
    relatedEquipment: [
      eq("beamWand", "Handheld wand with red and infrared laser diodes."),
      eq("beamQuad", "4-in-1 handheld: TENS, red laser, infrared laser and ultrasound."),
      eq("beamCrown", "Wearable red-light laser cap with 200 diodes."),
    ],
  },
];
