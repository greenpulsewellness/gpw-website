import { CATALOGUE, COMBOS, L, P, SLUG, SOLUTION, type BlogExtras } from "./helpers";

export const LIGHT_EXTRAS: BlogExtras = {
  [SLUG.lightGuide]: {
    sections: [
      {
        id: "eyes-skin-and-safety",
        heading: "Eyes, skin and sensible safety",
        content: [
          `Red and near-infrared LEDs are gentle compared with the sun, but bright light is still bright. Close your eyes or wear the supplied goggles during face sessions, avoid staring into any LED array, and never look into a laser. Keep to the session time and distance in the manual.`,
          `If you use medication that makes skin sensitive to light, have a skin condition, are pregnant or have a medical implant, ask your doctor first. Stop if you feel any discomfort, and never use a device over broken skin unless advised by a professional.`,
          `And a gentle reminder on expectations: light devices are a wellness habit, not a cure. Be wary of any seller that promises dramatic results.`,
        ],
        callout: {
          type: "tip",
          text: "If a product page lists wavelengths, LED count and power but nothing about safety guidance or distance, ask the seller for the manual before you buy.",
        },
      },
      {
        id: "setting-up-a-routine",
        heading: "Setting up a routine at home",
        content: [
          `Pick a regular time, a comfortable spot and a device that you will actually reach for. Face-focused? Start with a mask, such as the ${P("maskDuo", "Luma Mask Duo")}. Whole-body? A stand like the ${P("lumaStand1", "Luma Stand")} or the portable ${P("lumaGo500", "Luma Go 500")} are friendlier than a bed for most homes.`,
          `Keep sessions short and regular rather than long and rare. Many people attach them to an existing habit, like the evening wind-down or a post-workout cool-down. Our ${L("stack", "recovery stack guide")} shows where light fits among other tools.`,
        ],
      },
      {
        id: "in-business",
        heading: "Offering light therapy as a service",
        content: [
          `For studios, salons and spas, light therapy is an easy add-on: short appointments, minimal staff time and a premium feel. A bed or stand becomes a signature service, a panel supports targeted add-ons and a handful of masks can be rented or sold as take-home retail.`,
          `Pair it with heat or compression for a package: see ${L("lounge", "how to start a recovery lounge")} for layout and pricing, and our ${COMBOS("combos")} for ready-made bundles. Clinics can look at ${L("clinic", "equipping a physio or chiropractic clinic")}.`,
        ],
      },
    ],
    faqs: [
      {
        question: "What is red light therapy?",
        answer: `Red light therapy, or photobiomodulation, uses low-level red and near-infrared light from LEDs or low-power lasers. It is used as part of wellness routines and gives no meaningful heat or UV exposure.`,
      },
      {
        question: "Which wavelengths should a red light device have?",
        answer: `Most quality devices combine red (around 660 nm) and near-infrared (around 810–850 nm). See our wavelengths explainer for what each band does.`,
      },
      {
        question: "How often should I use red light therapy?",
        answer: `Follow the supplied guidance for session length and distance. Many people use a device a few times a week; consistency matters more than long sessions.`,
      },
      {
        question: "Is red light therapy safe?",
        answer: `Used as directed, LED devices are generally gentle, but you should protect your eyes, follow the manual and ask a doctor first if you have a medical condition, are pregnant or use photosensitising medication.`,
      },
      {
        question: "Is a red light bed worth it for a business?",
        answer: `It can be a strong signature service for a spa or studio, thanks to its premium feel and short appointments. Consider footprint, power and how many sessions you can realistically fill. Our red light bed vs panel vs stand guide helps you decide.`,
      },
    ],
  },

  [SLUG.masks]: {
    sections: [
      {
        id: "mask-or-panel",
        heading: "Mask or panel: which for the face?",
        content: [
          `A mask sits on your face and delivers light at a fixed distance, so the routine is simple and hands-free. A panel covers more area and lets you treat the neck, shoulders or body too, but you need to hold a steady distance and position.`,
          `If skin is your single goal, a mask is simpler. If you want a device for the face and body, a panel like the ${P("lumaPanel", "Luma Panel")} is more flexible. We compare the large formats in ${L("lightFormat", "bed vs panel vs stand")}.`,
        ],
      },
      {
        id: "fit-comfort-and-care",
        heading: "Fit, comfort and care",
        content: [
          `Try the strap and the weight. A mask should sit comfortably without pressing on your eyes or nose, and it should not slip. Check for a comfortable eye area and a timer that switches off automatically.`,
          `To clean, wipe the inside with a soft cloth as the manual directs and let it dry. Never use harsh chemicals on the LEDs, and store it somewhere dust-free. Charge it fully before use if it is cordless, like the ${P("shell2", "Luma Shell 2")}.`,
          `If you use the mask with skincare, apply products as advised in the instructions. Some prefer to use a mask on clean, bare skin. For the science of the colours and wavelengths, see ${L("wavelengths", "our wavelengths explainer")}.`,
        ],
        callout: {
          type: "tip",
          text: "Keep a mask in a visible spot, perhaps on your bedside table. A device you can see is a device you use.",
        },
      },
      {
        id: "retail-and-salons",
        heading: "For salons and clinics",
        content: [
          `Masks are popular add-ons for facials and aesthetic services, and as retail for clients to use at home. Hard-shell masks are easier to clean between clients, and silicone masks feel luxurious for premium treatments. See the ${CATALOGUE("light therapy collection")} and read ${L("handheld", "handheld devices")} for targeted add-ons.`,
        ],
      },
    ],
    faqs: [
      {
        question: "How often should I use an LED face mask?",
        answer: `Follow the supplied session length and frequency. Many people use a mask several times a week for ten to twenty minutes. Regular, moderate use is better than long, rare sessions.`,
      },
      {
        question: "Can I wear an LED mask with skincare products?",
        answer: `Many people use masks on clean skin. Follow the product manual and your skincare professional's advice, especially with active ingredients that increase light sensitivity.`,
      },
      {
        question: "Is an LED face mask safe for my eyes?",
        answer: `Keep your eyes closed or use the supplied eye protection, follow the session timer and stop if you feel discomfort. Ask your doctor if you have eye conditions.`,
      },
      {
        question: "Silicone or hard-shell LED mask: which is better?",
        answer: `Silicone masks are flexible and comfortable. Hard-shell masks hold their shape and wipe clean more easily. Choose based on comfort and how you will use it.`,
      },
    ],
  },

  [SLUG.lightFormat]: {
    sections: [
      {
        id: "space-power-and-cooling",
        heading: "Space, power and cooling",
        content: [
          `Big light devices are a facility decision. A bed like the ${P("lumaCocoon1", "Luma Cocoon")} lists 3,000 W and the ${P("lumaCocoon2", "Luma Cocoon Pro")} lists 6,500 W, so check your supply and your cooling plan with an electrician. Stands are lighter on both counts.`,
          `Leave room around any bed for the opening and for staff to help guests in and out. Keep the room comfortably ventilated, since LEDs generate some heat, and plan floor protection beneath wheels.`,
        ],
      },
      {
        id: "small-formats",
        heading: "Do not overlook the small formats",
        content: [
          `Not every buyer needs a big device. If you only want to target the face, a ${L("masks", "face mask")} may be all you need. For small areas, a handheld works well. Our guide to ${L("handheld", "handheld red light devices")} lists options.`,
          `Many venues mix formats: a bed or stand for full-body sessions and a few small devices for add-ons. For wavelengths, remember that near-infrared goes deeper than red, which is covered in ${L("wavelengths", "red vs near-infrared")}.`,
        ],
        callout: {
          type: "tip",
          text: "Before buying a bed, ask the supplier how long it takes to cool down between sessions and whether the cooling is quiet enough for a calm treatment room.",
        },
      },
      {
        id: "paying-it-back",
        heading: "Making a bed or stand pay for itself",
        content: [
          `Treat a light device like any other asset. Estimate your realistic bookings per day, your price per session and your running costs (power, cleaning, maintenance). Divide the investment by monthly margin for a rough payback. Our ${L("lounge", "recovery lounge guide")} walks through the method, and our ${L("gym", "gym recovery zone pricing")} article shows how membership tiers help.`,
        ],
      },
    ],
    faqs: [
      {
        question: "Is a red light bed better than a panel?",
        answer: `A bed covers more of the body at once and feels more luxurious, while a panel is cheaper and more flexible. 'Better' depends on your space, budget and how many people will use it.`,
      },
      {
        question: "How many LEDs does a red light device need?",
        answer: `There is no magic number. LED count, power, wavelengths and the treatment area all matter. Look for transparent specs and follow the recommended distance and session time.`,
      },
      {
        question: "Can I use a red light stand at home?",
        answer: `Yes. Stands such as the Luma Go and Luma Tower are designed to be mobile, and they suit homes, studios and clinics with limited space.`,
      },
      {
        question: "Does a red light bed need special wiring?",
        answer: `Large beds can draw significant power (up to several kilowatts for some models), so have a qualified electrician confirm the circuit before installation.`,
      },
    ],
  },

  [SLUG.wavelengths]: {
    sections: [
      {
        id: "spec-sheet-checklist",
        heading: "A spec-sheet checklist",
        content: [
          `Before you buy any light device, run through this list:`,
          `1. Which wavelengths, in nanometres, and are they stated clearly?`,
          `2. How many LEDs or diodes, and how powerful is the whole unit?`,
          `3. What area does it cover, and from what distance?`,
          `4. What session times and frequencies does the manufacturer recommend?`,
          `5. What safety guidance and eye protection are supplied?`,
          `6. What is the warranty, and how are faults handled?`,
          `If the answers are clear, you are probably dealing with a serious supplier.`,
        ],
      },
      {
        id: "other-colours",
        heading: "What about the other colours?",
        content: [
          `Some devices add blue, green, yellow or white light. These sit in the visible spectrum and are usually marketed for skincare-style routines. For example, the ${P("shell2", "Luma Shell 2")} lists wavelengths from 390 to 630 nm plus white light across seven modes, and the ${P("maskDuo", "Luma Mask Duo")} offers seven colour modes.`,
          `If you are comparing masks, our ${L("masks", "LED face mask guide")} explains how to weigh colour modes against fit and comfort. If you are comparing body devices, see ${L("lightFormat", "bed vs panel vs stand")}.`,
        ],
      },
      {
        id: "pulse-and-dose",
        heading: "Pulsing, power and dose",
        content: [
          `Wavelength is only one dial. Power (how intense the light is), distance (how far you sit) and time (how long you stay) together make up the dose. Some devices also pulse the light at set frequencies, like the 10 Hz and 40 Hz modes on the ${P("lumaPanel", "Luma Panel")}.`,
          `Too much is not necessarily better. Follow the supplied guidance and keep notes on what you use. Handheld lasers behave differently from LED panels because their light is concentrated, so read the safety guidance in ${L("handheld", "our handheld guide")}.`,
        ],
        callout: {
          type: "science",
          text: "A device's wavelength tells you the 'colour' of the light. Its irradiance (power per area), the distance you sit and the session time determine how much light energy you actually receive.",
        },
      },
      {
        id: "sauna-or-light",
        heading: "Sauna, light or both?",
        content: [
          `Some people ask whether an infrared sauna can replace a light panel. They overlap but are not the same: saunas are designed for heat, panels for light. Many users enjoy both. See ${L("saunaWorks", "how infrared saunas work")} and our ${L("lightGuide", "red light guide")} for the differences.`,
        ],
      },
    ],
    faqs: [
      {
        question: "Which is better, 660 nm or 850 nm?",
        answer: `Neither is 'better'. They are different tools: red (around 660 nm) is absorbed nearer the surface while near-infrared (around 850 nm) travels further, so many devices combine both.`,
      },
      {
        question: "Can I see near-infrared light?",
        answer: `Not clearly. Near-infrared is just beyond visible red, so some LEDs look dim or show only a faint glow even when they are on.`,
      },
      {
        question: "Do I need pulsing modes?",
        answer: `Not necessarily. Pulsing modes are an extra. Choose them if you will use them, and otherwise prioritise power, coverage and build quality.`,
      },
      {
        question: "What does 'nm' stand for?",
        answer: `Nanometre, one billionth of a metre. It measures the wavelength of light, which determines its colour and how it interacts with the body.`,
      },
    ],
  },

  [SLUG.handheld]: {
    sections: [
      {
        id: "everyday-uses",
        heading: "Everyday uses people enjoy",
        content: [
          `Most customers use a handheld in a few simple ways: a short session on a stiff neck after a long day at the desk, a quick pass over a sore shoulder after the gym, or a calming evening routine on tired hands and feet. Because it is small, it gets used far more often than a big panel.`,
          `Keep sessions short, rotate between areas, and write down how you feel. A device that stays on the bedside table is a device you will reach for, and the habit matters more than any single session.`,
        ],
      },
      {
        id: "choosing-between-them",
        heading: "Choosing between the three",
        content: [
          `Think about the job. For a flexible, general-purpose tool, the ${P("beamWand", "Luma Beam Wand")} is a straightforward choice with red and infrared diodes and continuous or pulsed modes. If you want several modalities in one body, the ${P("beamQuad", "Luma Beam Quad")} combines TENS, laser and ultrasound. For scalp use, the ${P("beamCrown", "Luma Beam Crown")} is a wearable cap that leaves your hands free.`,
          `A handheld is also a smart complement to a larger device. If you have a mask for the face, a handheld deals with a small area elsewhere. See ${L("masks", "the LED face mask guide")} and ${L("lightFormat", "bed vs panel vs stand")} for bigger formats.`,
        ],
      },
      {
        id: "wavelength-notes",
        heading: "What the numbers on the box mean",
        content: [
          `The wand lists 650 nm red and 808 nm infrared diodes. These sit at the same end of the spectrum as LED panels, but laser diodes concentrate the light into a narrow beam, which is why the safety guidance is stricter. Read ${L("wavelengths", "red vs near-infrared wavelengths")} for the background.`,
          `Always check the power rating, battery life and recommended session length, and look for clear instructions about eye safety.`,
        ],
        callout: {
          type: "tip",
          text: "Keep the supplied goggles with the device, and store it where children cannot reach it.",
        },
      },
      {
        id: "pro-use",
        heading: "In professional use",
        content: [
          `Practitioners often keep a handheld on the desk for quick use between clients. Check what local regulations say about the features you plan to use, particularly TENS and ultrasound, and keep a cleaning routine for the surfaces that touch skin. The ${SOLUTION("rehabilitate", "Rehabilitate solutions")} page shows how clinics bundle devices.`,
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between a laser and an LED device?",
        answer: `LEDs produce broader, softer light and cover more area. Laser diodes produce a concentrated beam of a single wavelength, which needs stricter eye-safety care.`,
      },
      {
        question: "Can I use a handheld device on my face?",
        answer: `Only if the manufacturer says so, and never near your eyes. Many handhelds are designed for the body. For the face, a mask or panel with eye protection is usually more suitable.`,
      },
      {
        question: "How long should I use a handheld per area?",
        answer: `Follow the supplied guidance. Short sessions per area are typical, and you should avoid overusing a single spot.`,
      },
      {
        question: "Is the Luma Beam Crown a medical device?",
        answer: `We sell it as wellness equipment and make no medical claims. If you have a scalp or hair concern, speak to a doctor or dermatologist.`,
      },
    ],
  },
};
