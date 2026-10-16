import { products, type Product, type ProductId } from "./home";

export type ProductFeature = {
  title: string;
  description: string;
  iconName?: string;
};

export type ProductBenefit = {
  title: string;
  description: string;
  metric?: string;
};

export type ProductSpecItem = {
  label: string;
  value: string;
};

export type ProductSpecGroup = {
  category: string;
  items: ProductSpecItem[];
};

export type ProductProtocol = {
  recommendedDuration: string;
  frequency: string;
  preparation: string[];
  protocolSteps: { step: string; instruction: string }[];
  contraindications: string[];
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductDetail = {
  id: ProductId;
  subtitle: string;
  tagline: string;
  overview: string[];
  mechanismOfAction: {
    heading: string;
    description: string;
    points: string[];
  };
  features: ProductFeature[];
  benefits: ProductBenefit[];
  specGroups: ProductSpecGroup[];
  whatsIncluded: string[];
  protocol: ProductProtocol;
  suitableEnvironments: {
    type: string;
    description: string;
  }[];
  faqs: ProductFaq[];
  relatedProductIds: ProductId[];
};

export const productDetails: Record<ProductId, ProductDetail> = {
  "infrared-sauna-single-full-spectrum-mstar": {
    id: "infrared-sauna-single-full-spectrum-mstar",
    subtitle: "Single-Person Full Spectrum Far Infrared Sauna (Catalog Model: MS-011FS)",
    tagline: "Compact 90 × 90 cm personal recovery chamber built with Canadian hemlock, tourmaline-embedded carbon floor heat, and fresh-air oxygen ionization.",
    overview: [
      "The Halo 1 (Catalog Model MS-011FS) is engineered for apartments, master bedroom corners, and dedicated treatment rooms where space is at a premium but you still want a proper commercial-grade sweat. Taking up just 90 × 90 cm of floor area and standing 190 cm tall, it gives you a complete personal thermal cabin without needing a dedicated sauna room or renovations.",
      "The cabin is built from 100% natural kiln-dried Canadian Hemlock. Hemlock is a dense, straight-grained softwood that resists warping and splitting from humidity changes, stays cool to the touch on the outside, and has zero synthetic resins or chemical odors when warmed up. An 8 mm thick tempered safety glass door seals with a magnetic strip, keeping the interior warm while giving you a clean, clear view of your room.",
      "Heating is delivered through a balanced combination of full-spectrum quartz heaters and carbon fiber wall panels, backed by a heated floor embedded with natural tourmaline stones. The quartz emitters provide fast surface warmth while the carbon panels surround your torso in long-wave far infrared heat. The tourmaline floor plates conduct soothing warmth directly into the soles of your bare feet, improving circulation from the ground up.",
      "Drawing only 1350 Watts, the Halo 1 runs smoothly on any standard single-phase 220V–240V domestic wall socket. Inside, you get a clean digital LCD control panel, an oxygen ionizer that keeps the air fresh during heavy sweat sessions, dual stereo Bluetooth speakers, a reading light, and a 7-color ceiling starlight chromotherapy system."
    ],
    mechanismOfAction: {
      heading: "Direct Cellular Hyperthermia & Tourmaline Mineral Ionization",
      description: "Traditional saunas heat room air to 80°C–100°C, which can make breathing feel stifling. The Halo 1 works by emitting gentle radiant infrared wavelengths (7 to 14 microns) that travel straight into your body tissue up to 4 to 5 cm deep, inducing a heavy sweat at a comfortable 45°C to 65°C.",
      points: [
        "Direct Radiant Heating: Far infrared rays vibrate water molecules inside your cells, raising your core temperature directly without requiring suffocating hot air.",
        "Capillary Dilation: Gentle heat triggers immediate peripheral vasodilation, increasing blood flow to tight muscles, easing joint stiffness, and helping flush metabolic waste.",
        "Cardiovascular Output: As blood vessels widen, your heart rate rises to between 100 and 120 bpm, giving you a mild, passive cardiovascular workout while you rest.",
        "Plantar Tourmaline Stimulation: Warm tourmaline mineral stones set into the floor emit natural negative ions and gentle heat into the reflex points on the soles of your feet.",
        "Continuous Oxygen Ionization: The onboard ionizer continuously removes airborne particles and stale odors, keeping the cabin air crisp, light, and easy to inhale."
      ]
    },
    features: [
      {
        title: "Full Spectrum & Carbon Heaters",
        description: "Strategic combination of fast-acting quartz emitters and wide-surface carbon panels provides balanced 360° warmth with zero cold corners.",
        iconName: "Flame"
      },
      {
        title: "Heated Tourmaline Stone Floor",
        description: "Embedded natural tourmaline stones warm your bare feet, stimulating foot reflex points and generating soothing negative ions.",
        iconName: "Sparkles"
      },
      {
        title: "8 mm Tempered Architectural Glass",
        description: "Heavy-duty 8 mm tempered safety glass door with magnetic latch holds heat inside while giving the cabin an open, airy feel.",
        iconName: "ShieldCheck"
      },
      {
        title: "Fresh Air Oxygen Ionizer",
        description: "Continuously purifies interior air with negative ions so the cabin stays breathable and fresh, even during intense 40-minute sessions.",
        iconName: "Zap"
      },
      {
        title: "7-Color Starlight Chromotherapy",
        description: "Ceiling-mounted multi-color starlights let you choose soothing hues to match your mood, from calming blue to energizing amber.",
        iconName: "Sun"
      },
      {
        title: "Dual Speakers with Bluetooth & USB",
        description: "Two built-in ceiling speakers connect directly to your phone via Bluetooth or USB for listening to podcasts, music, or guided audio.",
        iconName: "Speaker"
      },
      {
        title: "Certified Canadian Hemlock",
        description: "Solid kiln-dried Canadian hemlock with tongue-and-groove joinery that resists splitting and releases no harsh chemical fumes when hot.",
        iconName: "Trees"
      },
      {
        title: "Digital LCD Control Console",
        description: "Intuitive interior digital keypad lets you dial in your exact temperature (up to 65°C) and session timer without getting up.",
        iconName: "Sliders"
      }
    ],
    benefits: [
      {
        title: "Eases Tension & Mental Fatigue",
        description: "Loosens tight shoulder and neck muscles while lowering stress hormone levels, helping your body shift into deep mental calm.",
        metric: "Stress Relief"
      },
      {
        title: "Deep, Restorative Sleep",
        description: "A late-afternoon or evening sauna session raises your core temperature; the subsequent cooldown naturally triggers deeper sleep stages.",
        metric: "Deeper REM"
      },
      {
        title: "Sweat Detoxification",
        description: "Heavy sweating opens pores and helps your body push out accumulated surface impurities, cosmetic residues, and environmental grime.",
        metric: "Deep Pore Clean"
      },
      {
        title: "Circulation & Blood Pressure Support",
        description: "Expands blood vessels and promotes steady arterial blood flow throughout your limbs, supporting healthy resting blood pressure.",
        metric: "Healthy Flow"
      },
      {
        title: "Passive Cardiovascular Workout",
        description: "Elevates heart rate and cardiac output to levels similar to a brisk walk, providing heart conditioning without joint strain.",
        metric: "100–120 bpm HR"
      },
      {
        title: "Immune Support & Congestion Relief",
        description: "Mild core warming simulates your body's natural defense against seasonal bugs, while warm ionized air helps clear congested nasal passages.",
        metric: "Immune Active"
      },
      {
        title: "Healthy Skin & Sunburn Relief",
        description: "Boosts blood circulation to the dermal layers, delivering nutrients that support skin tone, cellular repair, and soothe mild sunburn.",
        metric: "Skin Radiance"
      },
      {
        title: "Burns Calories While Seated",
        description: "Your body uses significant metabolic energy sweating and regulating its temperature, burning between 200 and 400 calories in 35 minutes.",
        metric: "Up to 400 kcal"
      }
    ],
    specGroups: [
      {
        category: "Physical Dimensions & Build",
        items: [
          { label: "Capacity", value: "1 Person (Comfortable contoured hemlock bench)" },
          { label: "Exterior Dimensions", value: "90 cm (L) × 90 cm (W) × 190 cm (H) / 35.4″ × 35.4″ × 74.8″" },
          { label: "Interior Footprint", value: "82 cm (L) × 82 cm (W) × 178 cm (H)" },
          { label: "Gross Weight (G.W)", value: "100 kg (Crated) / Net Weight: ~88 kg" },
          { label: "Glass Construction", value: "8 mm Heavy Tempered Safety Glass with magnetic latch" },
          { label: "Timber Sourcing", value: "100% Certified Canadian Hemlock (Tongue & Groove)" }
        ]
      },
      {
        category: "Electrical & Heating System",
        items: [
          { label: "Catalog Model", value: "MS-011FS (Full Spectrum Infrared Sauna Room)" },
          { label: "Power Consumption", value: "1350 Watts" },
          { label: "Operating Voltage", value: "220–240 V AC / 50–60 Hz (~6.1 Amps)" },
          { label: "Plug Requirement", value: "Standard domestic 10A / 16A 3-pin earthed wall socket" },
          { label: "Heating Array", value: "Full-spectrum quartz heaters + carbon fiber wall panels" },
          { label: "Floor System", value: "Under-floor carbon heaters with natural tourmaline stones" },
          { label: "Operating Temperature", value: "20°C to 65°C (68°F to 149°F)" },
          { label: "Warm-Up Time", value: "15 to 20 minutes to reach 50°C" },
          { label: "EMF Rating", value: "Shielded low EMF (< 2.0 mG at seated position)" }
        ]
      },
      {
        category: "Lighting, Controls & Audio",
        items: [
          { label: "Control Console", value: "Digital LCD panel with timer, temperature, and power settings" },
          { label: "Air System", value: "Built-in negative ion oxygen ionizer" },
          { label: "Chromotherapy", value: "7-color LED ceiling starlight system" },
          { label: "Reading Light", value: "Warm interior reading lamp" },
          { label: "Audio System", value: "Dual ceiling speakers with Bluetooth, USB, MP3, and FM radio" }
        ]
      },
      {
        category: "Commercial Warranty & Compliance",
        items: [
          { label: "Certifications", value: "CE, RoHS, ISO 9001, ETL Electrical Safety" },
          { label: "Assembly Type", value: "Modular tongue-and-groove buckle-latch system (approx. 45 min setup)" },
          { label: "Warranty", value: "2 Years on Electronics & Heaters / 5 Years on Hemlock Shell" }
        ]
      }
    ],
    whatsIncluded: [
      "Prefabricated modular Canadian hemlock wall, floor, and roof panels with built-in heaters",
      "8 mm heavy tempered safety glass door with pre-hung hardware and wooden handle",
      "Floor heating panel embedded with natural tourmaline mineral stones",
      "Full spectrum quartz and carbon heating elements with pre-wired harnesses",
      "Internal digital LCD control console",
      "Fresh air negative ion oxygen ionizer module",
      "7-color ceiling starlight chromotherapy lighting package",
      "Twin ceiling-mounted audio speakers with Bluetooth and USB receiver",
      "Warm soft-white interior reading light",
      "Assembly hardware pack, grounded power lead, and illustrated step-by-step setup guide"
    ],
    protocol: {
      recommendedDuration: "25 to 40 minutes",
      frequency: "3 to 5 sessions per week",
      preparation: [
        "Drink 400 to 500 ml of fresh water or an electrolyte drink about 20 to 30 minutes before entering.",
        "Turn the sauna on 15 minutes before use, setting the temperature to 45°C–50°C to let the cabin pre-heat.",
        "Take a quick warm shower and dry off thoroughly; clean, dry skin sweats faster and more evenly.",
        "Place a clean cotton towel over the bench and one under your feet to absorb perspiration."
      ],
      protocolSteps: [
        {
          step: "Phase 1: Settle In (Minutes 0–10)",
          instruction: "Step inside at 45°C. Sit back, rest your bare feet on the tourmaline floor stones, and breathe steadily as the radiant heat begins warming your tissues."
        },
        {
          step: "Phase 2: Heavy Sweat (Minutes 10–30)",
          instruction: "As your core temperature climbs, you will start sweating heavily. Adjust the LCD controller to 55°C–60°C if you prefer a deeper sweat. Keep the oxygen ionizer on for crisp air."
        },
        {
          step: "Phase 3: Exit & Cool Down (Minutes 30–40)",
          instruction: "Step out into a cool room, wrap yourself in a cotton robe or towel, and sit quietly for 10 minutes. Follow with a lukewarm shower and drink another 500 ml of water."
        }
      ],
      contraindications: [
        "Uncontrolled high blood pressure or serious heart conditions without your doctor's approval.",
        "Pregnancy (thermal therapy should always be cleared by an obstetrician first).",
        "Active fevers, viral infections, or acute joint inflammation (ice active sprains for the first 48 hours).",
        "Alcohol consumption within 6 hours of use."
      ]
    },
    suitableEnvironments: [
      {
        type: "Apartments & Master Bedrooms",
        description: "Compact 90 × 90 cm footprint fits into tight corners, walk-in closets, or bedroom alcoves without crowding."
      },
      {
        type: "Home Gyms & Recovery Rooms",
        description: "Provides a private daily post-workout heat session that plugs straight into a wall socket."
      },
      {
        type: "Physiotherapy & Chiropractic Rooms",
        description: "Warms and relaxes tight spinal muscles before hands-on physical therapy or adjustments."
      },
      {
        type: "Boutique Fitness Studios",
        description: "Individual post-workout thermal recovery add-on for personal training clients."
      }
    ],
    faqs: [
      {
        question: "Can I run the Halo 1 on a standard household plug socket?",
        answer: "Yes. The Halo 1 draws 1350 Watts, which equals roughly 6 Amps at 230V. It plugs directly into any standard domestic wall socket without needing three-phase power or a specialized electrician visit."
      },
      {
        question: "What do the tourmaline stones on the floor do?",
        answer: "Tourmaline is a natural crystalline mineral that produces negative ions and gentle radiant heat when warmed from below. Having them underfoot warms the soles of your feet directly, relaxes foot tendons, and keeps the cabin feeling refreshing."
      },
      {
        question: "How does the heat feel compared to a traditional sauna?",
        answer: "In a traditional Finnish sauna, the air is baked to 80°C–100°C with hot stones, which can feel scorching to breathe. The Halo 1 heats your body directly with infrared light at 45°C to 65°C, giving you a deep, heavy sweat in air that remains comfortable and easy to breathe."
      },
      {
        question: "How do I clean and maintain the Canadian hemlock wood?",
        answer: "Always place a dry cotton towel on the bench and floor to catch perspiration. After your session, wipe away any stray sweat drops with a dry cloth and leave the glass door open for 15 minutes. Wipe down once a month with a damp cloth and mild organic soap; never use bleach, varnish, or harsh chemicals on sauna wood."
      },
      {
        question: "What is the function of the oxygen ionizer?",
        answer: "Enclosed saunas can start to smell humid when you sweat heavily. The oxygen ionizer continuously emits negative ions that clear out dust, allergens, and odors, keeping the air inside feeling light, clean, and easy to inhale."
      },
      {
        question: "How long does it take to assemble?",
        answer: "The Halo 1 comes flat-packed in heavy protective crates. The pre-built walls, floor, and roof click together with a built-in buckle system. Two people can assemble the complete unit with a basic screwdriver in around 40 to 60 minutes."
      }
    ],
    relatedProductIds: [
      "infrared-sauna-double-full-spectrum-mstar",
      "cold-plunge-single-round-yg",
      "gbuilt-chillybox",
      "gp-normatec-3-full-body"
    ]
  },

  "infrared-sauna-double-full-spectrum-mstar": {
    id: "infrared-sauna-double-full-spectrum-mstar",
    subtitle: "Two-Person American Full Spectrum Infrared Sauna (Catalog Model: MS-021HC)",
    tagline: "Spacious 120 × 105 cm two-person cabin with American full-spectrum heating, tourmaline floor integration, and optional Canadian hemlock or red cedar.",
    overview: [
      "The Halo 2 (Catalog Model MS-021HC) is our most popular two-person far infrared sauna, engineered for private homes, wellness retreats, and commercial spa suites. With exterior dimensions of 120 cm wide, 105 cm deep, and 190 cm high, it provides generous, comfortable bench seating for two adults to sit side by side without feeling cramped.",
      "Powered by an advanced 1750 W American full-spectrum heating system, the Halo 2 distributes near-, mid-, and far-infrared wavelengths evenly across your entire body. The radiant panels are placed along the backrest, front columns, side walls, and under the bench, ensuring complete 360-degree thermal coverage with minimal cold spots. It can be ordered in certified Canadian Hemlock or fragrant Western Red Cedar, both finished with a full-height 8 mm tempered glass front that maximizes natural light and spaciousness.",
      "The floor is equipped with low-EMF carbon heating panels embedded with natural tourmaline stones. As the floor warms, the tourmaline crystals emit far-infrared energy directly into your feet, promoting healthy blood flow up through your lower limbs while generating negative ions that keep the cabin fresh.",
      "Equipped with an interior digital control panel, integrated stereo sound system (Bluetooth, USB, MP3, and FM radio), oxygen ionizer, reading lamp, and a multi-color chromotherapy starlight ceiling, the Halo 2 delivers a completely self-contained recovery suite that runs reliably off a single standard 220V–240V power connection."
    ],
    mechanismOfAction: {
      heading: "Tri-Band Infrared Photobiomodulation & Whole-Body Thermal Shock",
      description: "The American full-spectrum heating architecture emits across near-infrared (NIR: 0.8–1.5 µm), mid-infrared (MIR: 1.5–5.6 µm), and far-infrared (FIR: 5.6–14 µm) bands to target different depths of human tissue simultaneously.",
      points: [
        "Near-Infrared (NIR) Dermal Rejuvenation: The shortest wavelengths penetrate the epidermal and dermal layers, stimulating mitochondrial cytochrome c oxidase and supporting natural collagen production.",
        "Mid-Infrared (MIR) Soft Tissue Relief: Mid-range waves penetrate vascular and muscular tissues, promoting vasodilation, easing tension, and encouraging temporary relief from chronic joint stiffness.",
        "Far-Infrared (FIR) Core Hyperthermia: Long-wave far infrared vibrates cellular water molecules, driving deep core heat elevation and inducing a cleansing, toxin-clearing sweat at comfortable cabin temperatures.",
        "Plantar Tourmaline Stone Conduction: Heated tourmaline stones underfoot transmit continuous warmth into the soles, relaxing tight plantar fascia and activating peripheral blood circulation.",
        "Oxygen Ion Purification: The on-board ionizer actively cleanses the air, breaking down sweat odors and particulate matter so you breathe clean, oxygen-rich air for the full duration of your session."
      ]
    },
    features: [
      {
        title: "American Full Spectrum Heating",
        description: "Advanced multi-band infrared emitters targeting near, mid, and far infrared depths for comprehensive whole-body therapy.",
        iconName: "Flame"
      },
      {
        title: "Canadian Hemlock or Red Cedar",
        description: "Available in sustainably sourced Canadian Hemlock or aromatic, rot-resistant Western Red Cedar with precision tongue-and-groove joinery.",
        iconName: "Trees"
      },
      {
        title: "8 mm Tempered Glass Front",
        description: "Full-height architectural safety glass provides a bright, open aesthetic while keeping heat securely locked inside the cabin.",
        iconName: "ShieldCheck"
      },
      {
        title: "Heated Tourmaline Stone Floor",
        description: "Floor-mounted carbon panels warm embedded tourmaline stones to gently heat the feet and generate therapeutic negative ions.",
        iconName: "Sparkles"
      },
      {
        title: "Oxygen Ionizer Air Purifier",
        description: "Continuously filters and ionizes internal air, preventing stale humidity and keeping breathing effortless during intense sweating.",
        iconName: "Zap"
      },
      {
        title: "Full Multimedia Sound System",
        description: "Twin high-fidelity ceiling speakers with Bluetooth, USB port, MP3 playback, and FM radio for listening to music or guided meditations.",
        iconName: "Speaker"
      },
      {
        title: "LED Chromotherapy Starlight System",
        description: "7-color ceiling starlight matrix allows you to select customized color frequencies to stimulate relaxation, focus, or calm.",
        iconName: "Sun"
      },
      {
        title: "Digital LED Control Console",
        description: "Intuitive digital keypad inside the cabin allows precise adjustment of target temperature, countdown timer, and lighting.",
        iconName: "Sliders"
      }
    ],
    benefits: [
      {
        title: "Deep Detoxification & Weight Support",
        description: "Heavy, profuse perspiration assists your body in expelling environmental toxins, heavy metal residues, and metabolic waste while burning 300–500 calories.",
        metric: "300–500 kcal / session"
      },
      {
        title: "Radiant, Youthful Skin",
        description: "Increased capillary blood flow brings fresh nutrients and oxygen to the skin's surface, improving elasticity, tone, and overall texture.",
        metric: "Promotes Collagen"
      },
      {
        title: "Supports Cardiovascular Health",
        description: "Thermal vasodilation lowers vascular resistance, elevates stroke volume, and gives your heart a gentle, non-strenuous workout.",
        metric: "Lower Vascular Resistance"
      },
      {
        title: "Eases Joint Pain & Stiffness",
        description: "Penetrating infrared heat soothes arthritic aches, relaxes stiff spinal joints, and accelerates post-exercise muscular repair.",
        metric: "Relieves Joint Discomfort"
      },
      {
        title: "Promotes Systemic Circulation",
        description: "Improves arterial and venous blood flow throughout the limbs, relieving heavy, tired legs and cold extremities.",
        metric: "Improves Arterial Flow"
      },
      {
        title: "Synergizes with Exercise & Therapies",
        description: "Acts as a powerful primer before stretching or massage, and serves as an ideal thermal phase for hot-cold contrast plunge therapies.",
        metric: "Contrast Ready"
      },
      {
        title: "Stimulates Immune Defenses",
        description: "Elevating your core body temperature creates an artificial fever response that stimulates white blood cell activity and natural immune resistance.",
        metric: "Activates Immune Cells"
      },
      {
        title: "Reduces Appearance of Cellulite",
        description: "Deep subcutaneous heating and improved lymphatic microcirculation help smooth trapped fluid pockets and skin irregularities.",
        metric: "Smooths Dermal Tissue"
      }
    ],
    specGroups: [
      {
        category: "Dimensions & Capacity",
        items: [
          { label: "Capacity", value: "2 Persons (Full-width ergonomic contoured bench)" },
          { label: "Exterior Dimensions", value: "120 cm (L) × 105 cm (W) × 190 cm (H) / 47.2″ × 41.3″ × 74.8″" },
          { label: "Interior Clearance", value: "112 cm (L) × 97 cm (W) × 178 cm (H)" },
          { label: "Gross Weight (G.W)", value: "130 kg (Crated) / Net Weight: ~115 kg" },
          { label: "Glass Specifications", value: "8 mm Heavy Tempered Safety Glass" },
          { label: "Timber Options", value: "Canadian Hemlock (Standard) / Western Red Cedar (Optional Upgrade)" }
        ]
      },
      {
        category: "Electrical & Heating System",
        items: [
          { label: "Catalog Model", value: "MS-021HC (American Full Spectrum Heater Far Infrared Sauna Room)" },
          { label: "Power Consumption", value: "1750 Watts" },
          { label: "Electrical Requirement", value: "220–240 V AC / 50–60 Hz (~7.6 Amps)" },
          { label: "Plug Compatibility", value: "Standard 3-pin earthed 10A / 16A domestic plug" },
          { label: "Heating Architecture", value: "American Full Spectrum Infrared Heaters + Low-EMF Carbon Panels" },
          { label: "Optional Heaters", value: "Carbon panel, ceramic heater, or magnesium oxide iron heater configurations" },
          { label: "Floor Integration", value: "Heated carbon floor with embedded natural tourmaline stones" },
          { label: "Operating Temperature", value: "20°C to 65°C (68°F to 149°F)" },
          { label: "Warm-Up Time", value: "15 to 20 minutes to reach 50°C" },
          { label: "EMF Exposure", value: "Independently verified < 2.0 mG at seated body distance" }
        ]
      },
      {
        category: "Controls, Lighting & Multimedia",
        items: [
          { label: "Control Interface", value: "Digital LED touch console with timer, temp presets, and light toggles" },
          { label: "Air Purification", value: "Built-in negative ion oxygen generator" },
          { label: "Lighting System", value: "7-color LED starlight ceiling array + warm interior reading lamp" },
          { label: "Audio Entertainment", value: "Stereo ceiling speakers with Bluetooth, USB, MP3, and FM radio" }
        ]
      },
      {
        category: "Safety & Commercial Standards",
        items: [
          { label: "Certifications", value: "CE, ISO 9001, RoHS, ETL Electrical Safety" },
          { label: "Assembly Architecture", value: "Modular tongue-and-groove panels with quick-snap locking buckles" },
          { label: "Commercial Warranty", value: "2 Years on Electronics / 5 Years on Timber Shell & Heating Elements" }
        ]
      }
    ],
    whatsIncluded: [
      "Prefabricated modular wall, floor, and ceiling timber panels in Canadian Hemlock or Red Cedar",
      "Full-height 8 mm tempered glass front door with safety magnetic latch and wooden grab handle",
      "Pre-installed American full-spectrum infrared and carbon heater panels with insulated wiring",
      "Tourmaline-embedded heated floor assembly",
      "Digital interior LED control console with temperature sensor",
      "Negative ion oxygen generator unit",
      "7-color LED starlight chromotherapy ceiling system",
      "Stereo ceiling speakers with integrated Bluetooth / USB / FM multimedia receiver",
      "Warm soft-white reading lamp",
      "Complete installation hardware pack, power cord, and illustrated user manual"
    ],
    protocol: {
      recommendedDuration: "30 to 45 minutes",
      frequency: "3 to 5 sessions per week",
      preparation: [
        "Hydrate with 500 ml of water mixed with mineral electrolytes 30 minutes before entering.",
        "Power on the cabin 15 minutes before use, setting the thermostat to 50°C.",
        "Place towels across the bench and floor to absorb sweat and protect the wood surfaces.",
        "Wear lightweight cotton clothing or swimwear to maximize direct infrared exposure."
      ],
      protocolSteps: [
        {
          step: "Phase 1: Pre-Heat & Acclimatization (Minutes 0–10)",
          instruction: "Enter the cabin at 45°C–50°C. Sit back against the infrared panels with your feet resting on the tourmaline floor tiles. Relax and let your muscles warm."
        },
        {
          step: "Phase 2: Full Sweat Activation (Minutes 10–35)",
          instruction: "As the cabin reaches 55°C–60°C, your body begins a heavy, cleansing sweat. Deepen your breathing. The oxygen ionizer keeps the cabin air fresh and breathable."
        },
        {
          step: "Phase 3: Cool-Down & Rehydration (Minutes 35–45)",
          instruction: "Step out into a cool room, wrap yourself in a cotton robe, and let your body cool down naturally for 10 minutes before taking a warm or lukewarm shower."
        }
      ],
      contraindications: [
        "Severe uncontrolled hypertension or unstable cardiac conditions.",
        "Pregnancy (always obtain medical clearance from your healthcare professional).",
        "Acute fever or active infectious disease.",
        "Alcohol consumption prior to or during the session.",
        "Severe chronic kidney disease without specialist approval."
      ]
    },
    suitableEnvironments: [
      {
        type: "Luxury Private Residences",
        description: "Perfect size for master bathrooms, home fitness suites, and dedicated recovery rooms for couples or solo users wanting extra space."
      },
      {
        type: "Commercial Spas & Wellness Retreats",
        description: "Premium turnkey cabin for day spas and hotel suites offering private guest recovery sessions."
      },
      {
        type: "Sports Performance & Athletic Clubs",
        description: "Dual-occupancy capacity enables rapid post-training recovery turnover for athletes."
      },
      {
        type: "Longevity & Contrast Therapy Centers",
        description: "Serves as the primary heat modality paired with a cold plunge tub for daily hot-cold therapy."
      }
    ],
    faqs: [
      {
        question: "Can two adults sit comfortably in the Halo 2?",
        answer: "Yes. With a width of 120 cm (nearly 4 feet) and depth of 105 cm, the full-width contoured bench provides plenty of shoulder and leg room for two adults to sit side by side comfortably."
      },
      {
        question: "Does the 1750 W power consumption require special electrical work?",
        answer: "No. At 1750 Watts on 220V–240V power, the Halo 2 draws under 8 Amps. It plugs directly into a standard 10A or 16A domestic earthed socket, so no expensive electrical rewiring or sub-panel upgrades are needed."
      },
      {
        question: "What is the difference between Canadian Hemlock and Western Red Cedar?",
        answer: "Canadian Hemlock is a durable, straight-grained, hypoallergenic timber with a light blonde color and virtually no natural aroma or resin. Western Red Cedar is richer in color, naturally aromatic, and possesses natural oils that make it exceptionally resistant to moisture and mold. Both perform beautifully in dry infrared saunas."
      },
      {
        question: "How does the full-spectrum heating differ from regular far-infrared saunas?",
        answer: "Standard far-infrared saunas only emit long-wave energy. The Halo 2 American full-spectrum system delivers near-infrared for skin collagen support, mid-infrared for joint and muscle relief, and far-infrared for deep core heating and heavy detoxification."
      },
      {
        question: "How do the tourmaline stones on the floor benefit me?",
        answer: "Tourmaline stones naturally generate negative ions and emit gentle radiant heat when warmed by the underlying carbon panels. Having them underfoot warms your feet directly, relaxes plantar tendons, and improves circulation from the ground up."
      },
      {
        question: "How do I sanitize the cabin between different guests in a commercial setting?",
        answer: "Always instruct guests to sit on towels. Between sessions, wipe the bench, door handle, and glass with an alcohol-free, non-toxic botanical sanitizer spray, and leave the door open for 5 to 10 minutes to allow the oxygen ionizer to refresh the air."
      },
      {
        question: "Can I listen to my phone's music through the speakers?",
        answer: "Yes. The built-in audio system features Bluetooth connectivity, allowing you to pair any smartphone or tablet in seconds to stream music, podcasts, or guided meditations through the dual ceiling speakers."
      }
    ],
    relatedProductIds: [
      "infrared-sauna-single-full-spectrum-mstar",
      "infrared-sauna-group-full-spectrum-mstar",
      "cold-plunge-single-round-yg",
      "gbuilt-chillybox"
    ]
  },

  "infrared-sauna-double-combination-mstar": {
    id: "infrared-sauna-double-combination-mstar",
    subtitle: "Two-Person Red Cedar Ceramic & Carbon Hybrid Infrared Sauna (Catalog Model: MS-021L)",
    tagline: "Dual-technology 120 × 105 cm sauna combining fast-acting ceramic tube heaters with wide-surface carbon panels in premium Western red cedar.",
    overview: [
      "The Halo Hybrid 2 (Catalog Model MS-021L) combines two complementary infrared heating technologies inside a handcrafted red cedar cabin. While standard saunas rely entirely on either carbon panels or ceramic rods, the Hybrid 2 combines high-intensity ceramic emitters behind your back for focused, direct warmth with broad-spectrum carbon wall panels that envelop the entire cabin in consistent, gentle far-infrared heat.",
      "Built from genuine kiln-dried Western Red Cedar (with Canadian Hemlock available on request), this model stands out with its rich reddish-brown wood grain, natural aromatic cedar scent, and inherent resistance to fungal moisture and warping. At 120 cm wide, 105 cm deep, and 190 cm high with a gross weight of 150 kg, it offers a solid, substantial feel with an 8 mm tempered glass door and side viewing glass.",
      "The ceramic heaters heat up quickly, producing an intense, deeply penetrating radiant warmth that targets tight back and shoulder muscles within minutes of stepping in. Meanwhile, the surrounding carbon panel heaters ensure that the ambient temperature remains completely balanced without cold spots, drawing a total of 1750 Watts on standard 220V–240V power.",
      "The cabin includes floor-mounted tourmaline stones for foot reflexology and negative ion emission, an oxygen ionizer for continuous fresh air, a digital LED control interface, reading lamp, and a complete multimedia sound system with Bluetooth, USB, MP3, and FM radio."
    ],
    mechanismOfAction: {
      heading: "Dual-Emitter Infrared Convergence & High-Emissivity Heat",
      description: "By pairing ceramic tube emitters with carbon fiber panels, the Hybrid 2 delivers both high-intensity concentrated radiant heat and expansive ambient far-infrared coverage.",
      points: [
        "Ceramic Focused Penetration: Ceramic tube heaters generate high-density infrared waves focused directly on the spinal column and lumbar region, helping loosen deep muscular knots.",
        "Carbon Panoramic Coverage: Wide-surface carbon panels line the side and front walls, emitting uniform long-wave far-infrared (8 to 12 microns) that envelops the occupants from all angles.",
        "Accelerated Thermal Elevation: The rapid heat-up time of ceramic emitters brings the cabin to sweating temperature faster, reducing pre-heat wait times.",
        "Tourmaline Mineral Synergy: Floor tourmaline stones warm up from underneath to stimulate plantar reflexology zones and release soothing negative ions into the air.",
        "Air Refresh via Ionization: The built-in oxygen ionizer neutralizes suspended particles and keeps the cedar-scented air crisp and comfortable throughout intense sessions."
      ]
    },
    features: [
      {
        title: "Dual Ceramic & Carbon Heating",
        description: "Combines high-penetration ceramic tubes behind the back with wide-area carbon wall panels for balanced, deep-tissue therapy.",
        iconName: "Flame"
      },
      {
        title: "Premium Western Red Cedar",
        description: "Handcrafted from durable Western Red Cedar, known for its rich aroma, antimicrobial resistance, and longevity.",
        iconName: "Trees"
      },
      {
        title: "8 mm Tempered Architectural Glass",
        description: "Heavy tempered safety glass door with clean magnetic closure provides thermal insulation and a modern aesthetic.",
        iconName: "ShieldCheck"
      },
      {
        title: "Tourmaline Stone Floor Integration",
        description: "Embedded natural tourmaline stones warm the soles of your feet directly while continuously emitting beneficial negative ions.",
        iconName: "Sparkles"
      },
      {
        title: "Active Oxygen Ionizer",
        description: "Cleanses and refreshes the internal cabin air, eliminating stale odors and keeping your breathing smooth and comfortable.",
        iconName: "Zap"
      },
      {
        title: "Integrated Multimedia Audio",
        description: "Dual stereo ceiling speakers with Bluetooth, USB, MP3, and FM radio for listening to relaxing playlists or podcasts.",
        iconName: "Speaker"
      },
      {
        title: "Digital LED Control Interface",
        description: "Simple, user-friendly interior digital console for setting target temperatures, countdown timers, and lighting modes.",
        iconName: "Sliders"
      },
      {
        title: "Interior Reading Lamp & Ambient Light",
        description: "Warm, glare-free overhead reading light allows you to read comfortably while enjoying your infrared session.",
        iconName: "Sun"
      }
    ],
    benefits: [
      {
        title: "Detoxifies Body & Supports Weight Loss",
        description: "Deep cellular sweating expels metabolic waste and environmental toxins while burning up to 400 calories in a single 35-minute session.",
        metric: "Up to 400 kcal"
      },
      {
        title: "Enhances Skin Radiance & Elasticity",
        description: "Stimulates cutaneous microcirculation, unclogging pores and leaving your skin feeling noticeably smoother, softer, and refreshed.",
        metric: "Improves Elasticity"
      },
      {
        title: "Supports Heart Health & Circulation",
        description: "Thermal vasodilation expands blood vessels, promoting healthy blood flow and supporting optimal cardiovascular response.",
        metric: "Cardiovascular Support"
      },
      {
        title: "Relieves Joint Pain & Chronic Stiffness",
        description: "Direct radiant ceramic heat penetrates deep into spinal joints, lumbar muscles, and hip tendons, easing chronic tightness.",
        metric: "Targeted Spinal Relief"
      },
      {
        title: "Combats Daily Stress & Fatigue",
        description: "Soothes an overactive central nervous system, helping you transition out of fight-or-flight into restorative parasympathetic rest.",
        metric: "Stress Reduction"
      },
      {
        title: "Synergizes with Workout Recovery",
        description: "Accelerates muscle tissue recovery and flushes lactic acid following strenuous strength training, running, or athletic sports.",
        metric: "Post-Workout Flush"
      },
      {
        title: "Wakes Up & Strengthens Immune Defenses",
        description: "Mild whole-body hyperthermia mimics the body's natural defense against pathogens, stimulating white blood cell production.",
        metric: "Immune Defense"
      }
    ],
    specGroups: [
      {
        category: "Dimensions & Capacity",
        items: [
          { label: "Capacity", value: "2 Persons" },
          { label: "Exterior Dimensions", value: "120 cm (L) × 105 cm (W) × 190 cm (H) / 47.2″ × 41.3″ × 74.8″" },
          { label: "Interior Clearance", value: "112 cm (L) × 97 cm (W) × 178 cm (H)" },
          { label: "Gross Weight (G.W)", value: "150 kg (Crated) / Net Weight: ~132 kg" },
          { label: "Glass Specifications", value: "8 mm Heavy Tempered Safety Glass" },
          { label: "Wood Construction", value: "Premium Western Red Cedar (Canadian Hemlock optional)" }
        ]
      },
      {
        category: "Electrical & Heating System",
        items: [
          { label: "Catalog Model", value: "MS-021L (Red Cedar Sauna Room Ceramic with Carbon Panel Heaters)" },
          { label: "Power Consumption", value: "1750 Watts" },
          { label: "Voltage Requirement", value: "220–240 V AC / 50–60 Hz (~7.6 Amps)" },
          { label: "Plug Compatibility", value: "Standard 3-pin earthed 10A / 16A plug" },
          { label: "Heating Architecture", value: "Hybrid Ceramic Tube Heaters + Far Infrared Carbon Fiber Panels" },
          { label: "Optional Heaters", value: "Full spectrum or magnesium oxide iron heater configurations" },
          { label: "Floor Heating", value: "Heated carbon floor with embedded natural tourmaline stones" },
          { label: "Operating Temperature", value: "20°C to 65°C (68°F to 149°F)" },
          { label: "Warm-Up Time", value: "12 to 18 minutes to reach 50°C" },
          { label: "EMF Rating", value: "Low EMF (< 2.0 mG at seated position)" }
        ]
      },
      {
        category: "Controls, Lighting & Multimedia",
        items: [
          { label: "Control Console", value: "Digital LED screen control panel" },
          { label: "Air Purification", value: "Negative ion oxygen generator unit" },
          { label: "Lighting", value: "Interior reading lamp + optional starlight chromotherapy" },
          { label: "Sound System", value: "Twin high-fidelity ceiling speakers with Bluetooth, USB, MP3, and FM radio" }
        ]
      },
      {
        category: "Standards & Certifications",
        items: [
          { label: "Certifications", value: "CE, ISO 9001, RoHS, ETL Electrical Safety" },
          { label: "Assembly Architecture", value: "Precision pre-fabricated tongue-and-groove modular buckle system" },
          { label: "Commercial Warranty", value: "2 Years on Electronics / 5 Years on Cedar Shell & Heaters" }
        ]
      }
    ],
    whatsIncluded: [
      "Modular Western Red Cedar floor, wall, and ceiling panels with pre-installed heaters",
      "8 mm tempered architectural glass door with magnetic latch and solid wood handle",
      "Ceramic rod heating elements with protective wooden backrest guards",
      "Wide-angle carbon wall heating panels with quick-connect electrical harnesses",
      "Tourmaline stone embedded heated floor section",
      "Digital LED touch control panel",
      "Negative ion oxygen ionizer unit",
      "Twin stereo ceiling speakers with Bluetooth/USB/MP3/FM module",
      "Warm interior reading lamp",
      "Complete assembly hardware, heavy-duty power lead, and user guide"
    ],
    protocol: {
      recommendedDuration: "25 to 40 minutes",
      frequency: "3 to 5 times per week",
      preparation: [
        "Drink 500 ml of water with electrolytes 20–30 minutes prior to your session.",
        "Set the digital controller to 48°C–52°C and allow 15 minutes for pre-heating.",
        "Shower lightly with warm water and dry off completely.",
        "Lay clean cotton towels over the bench and under your feet to catch sweat."
      ],
      protocolSteps: [
        {
          step: "Step 1: Initial Warm-Up (Minutes 0–10)",
          instruction: "Sit with your back aligned with the ceramic heaters. The direct infrared energy will immediately begin warming your spinal muscles and loosening stiffness."
        },
        {
          step: "Step 2: Core Sweating (Minutes 10–30)",
          instruction: "As the carbon panels bring the entire cabin into equilibrium, full-body perspiration sets in. Breathe slowly and enjoy the natural red cedar aroma."
        },
        {
          step: "Step 3: Cool Down & Hydrate (Minutes 30–40)",
          instruction: "Step out into room temperature. Wrap in a cotton towel, rest for 10 minutes, drink 500 ml of electrolyte water, and take a lukewarm shower."
        }
      ],
      contraindications: [
        "Severe or uncontrolled cardiovascular disease.",
        "Pregnancy (consult with your physician prior to heat therapy).",
        "Active fever, flu, or inflammatory flare-ups.",
        "Recent alcohol consumption or use of heavy tranquilizers."
      ]
    },
    suitableEnvironments: [
      {
        type: "Private Master Suites & Home Spas",
        description: "Aromatic red cedar and hybrid heating make this a standout centerpiece for home wellness spaces."
      },
      {
        type: "Chiropractic & Physical Therapy Clinics",
        description: "Deep ceramic radiant heat is ideal for pre-adjustment spinal muscle relaxation."
      },
      {
        type: "Fitness Centers & Sports Gyms",
        description: "Dual-occupancy setup provides fast post-workout muscular recovery and lactic acid flush."
      },
      {
        type: "Day Spas & Boutique Hotels",
        description: "High-aesthetic, low-maintenance cabin for private guest wellness packages."
      }
    ],
    faqs: [
      {
        question: "Why combine ceramic and carbon heaters in one sauna?",
        answer: "Ceramic heaters provide intense, concentrated radiant heat that quickly warms your back and spinal joints. Carbon panels provide gentle, wide-surface far-infrared heat that warms the ambient space evenly. Combining both gives you the fast relief of ceramic with the smooth, comfortable surround-warmth of carbon."
      },
      {
        question: "Why choose Western Red Cedar over Canadian Hemlock?",
        answer: "Western Red Cedar is naturally rich in essential cedar oils that give off a soothing, authentic sauna scent while acting as a natural repellent against bacteria, moisture, and mildew. It also has a distinctive, warm reddish-brown timber tone."
      },
      {
        question: "Does this unit plug into a normal wall socket?",
        answer: "Yes. The Halo Hybrid 2 uses 1750 Watts, drawing roughly 7.6 Amps at 230V. It runs safely on a standard 10A or 16A domestic plug without any special electrical wiring or dedicated sub-panels."
      },
      {
        question: "How does the oxygen ionizer keep the air fresh?",
        answer: "In an enclosed wooden sauna, heavy sweating can make the air feel humid over time. The built-in oxygen ionizer releases negative ions that bind to odor particles and dust, keeping the air light, clean, and easy to inhale throughout your session."
      },
      {
        question: "Can I install this sauna on carpet or hardwood floors?",
        answer: "Yes. The sauna has a self-contained, insulated timber floor base. It can sit safely on hardwood, tile, concrete, laminate, or low-pile commercial carpet without damaging the underlying surface."
      },
      {
        question: "How do I care for the red cedar wood?",
        answer: "Always place a cotton towel on the bench to prevent perspiration from absorbing directly into the wood. After your session, leave the glass door slightly ajar for 15 minutes to let air circulate. Clean occasionally with a damp cloth and mild organic soap."
      }
    ],
    relatedProductIds: [
      "infrared-sauna-double-full-spectrum-mstar",
      "infrared-sauna-group-full-spectrum-mstar",
      "cold-plunge-single-round-yg",
      "gp-normatec-3-full-body"
    ]
  },

  "infrared-sauna-group-full-spectrum-mstar": {
    id: "infrared-sauna-group-full-spectrum-mstar",
    subtitle: "Three-Person Luxury Full Spectrum Quartz Combine Sauna (Catalog Model: MS-031PB / MS-061PB)",
    tagline: "Spacious 150 × 120 cm three-person wellness cabin combining far-infrared carbon panels with full-spectrum quartz heating, starlight chromotherapy, and oxygen ionization.",
    overview: [
      "The Halo 3 (Catalog Model MS-031PB / MS-061PB) is our premier three-person luxury infrared sauna, built for commercial recovery centers, luxury villas, boutique fitness clubs, and families. With generous dimensions of 150 cm wide, 120 cm deep, and 190 cm high, it provides ample room for three adults to sit comfortably or for two adults to stretch out with legs extended on the extra-wide bench.",
      "Engineered with a powerful 2100 W hybrid heating array, the Halo 3 combines broad-surface far infrared carbon panels with high-output full-spectrum quartz heaters. The quartz tubes deliver immediate, penetrating near-, mid-, and far-infrared radiation that warms deep muscle tissue rapidly, while the carbon wall panels keep the ambient temperature steady and balanced without harsh hot spots.",
      "Available in premium Canadian Hemlock or Western Red Cedar, the cabin features a wide 8 mm tempered glass front that fills the interior with natural light and creates an open, welcoming environment. The floor integrates low-EMF carbon heating panels overlaid with natural tourmaline stones that warm the feet and release negative ions into the air.",
      "The cabin comes fully equipped with a high-end digital control console, ceiling starlight chromotherapy system, dedicated interior reading lamp, fresh-air oxygen ionizer, and a high-fidelity multimedia sound system supporting Bluetooth, USB, MP3, and FM radio—all operating efficiently from a single 220V–240V power connection."
    ],
    mechanismOfAction: {
      heading: "Quartz Combine Photobiomodulation & Core Thermal Acceleration",
      description: "The synergy of full-spectrum quartz tubes and large-format carbon panels produces a multi-wavelength infrared environment that addresses both deep skeletal-muscular tissues and superficial dermal layers.",
      points: [
        "Full-Spectrum Quartz Radiation: High-output quartz tubes emit near-, mid-, and far-infrared wavelengths simultaneously, penetrating up to 5 cm beneath the skin to warm dense joint and muscle tissue.",
        "Panoramic Carbon Far-Infrared: Wide-area carbon panels across the walls and bench deliver continuous 7–14 micron far-infrared waves for uniform core body temperature elevation.",
        "Enhanced Cardiovascular Output: Systemic core hyperthermia promotes peripheral vasodilation, increasing stroke volume and blood flow comparable to moderate cardiovascular exercise.",
        "Tourmaline Plantar Heating: Heated natural tourmaline stones in the floor stimulate reflexology points under the feet, encouraging lower-limb venous return and whole-body relaxation.",
        "Negative Ion Air Regeneration: The on-board oxygen ionizer actively cleanses interior air of airborne particles and humidity, ensuring clean, fresh respiration during high-heat sessions."
      ]
    },
    features: [
      {
        title: "Quartz Combine Hybrid Heating",
        description: "Combines high-intensity full-spectrum quartz emitters with large-format carbon panels for rapid warm-up and even 360-degree heat.",
        iconName: "Flame"
      },
      {
        title: "Spacious 3-Person Bench",
        description: "150 cm wide interior comfortably seats three adults side-by-side or allows two occupants to stretch out comfortably.",
        iconName: "Users"
      },
      {
        title: "8 mm Tempered Architectural Glass",
        description: "Full-height safety glass door and side panels provide maximum light, insulation, and acoustic tranquility.",
        iconName: "ShieldCheck"
      },
      {
        title: "Ceiling Starlight Chromotherapy",
        description: "High-density LED starlight system allows you to select from 7 colors to enhance mental clarity, stress relief, or physical relaxation.",
        iconName: "Sun"
      },
      {
        title: "Tourmaline Stone Floor Heating",
        description: "Floor-mounted carbon panels warm natural tourmaline stones to stimulate the soles of the feet and emit negative ions.",
        iconName: "Sparkles"
      },
      {
        title: "Oxygen Ionizer Air System",
        description: "Continuously purifies and ionizes the cabin air, keeping breathing effortless even during intense 40-minute sweat sessions.",
        iconName: "Zap"
      },
      {
        title: "High-Fidelity Bluetooth Stereo",
        description: "Twin ceiling-mounted speakers connect seamlessly via Bluetooth, USB, MP3, and FM radio for immersive audio.",
        iconName: "Speaker"
      },
      {
        title: "Canadian Hemlock or Red Cedar",
        description: "Precision-crafted from sustainably harvested Canadian Hemlock or aromatic Western Red Cedar with tongue-and-groove joinery.",
        iconName: "Trees"
      }
    ],
    benefits: [
      {
        title: "Maximum Full-Body Detoxification",
        description: "Intensive, deep-tissue sweating mobilizes stored environmental pollutants, heavy metal traces, and cellular metabolic waste.",
        metric: "Deep Sweat Cleansing"
      },
      {
        title: "Accelerated Calorie Expenditure",
        description: "Core hyperthermia prompts your body to burn significant metabolic energy, expending 400 to 600 calories per 40-minute session.",
        metric: "400–600 kcal / session"
      },
      {
        title: "Restores Youthful, Glowing Skin",
        description: "Increased dermal microcirculation flushes skin pores, improves collagen synthesis, and enhances skin elasticity and natural radiance.",
        metric: "Promotes Collagen"
      },
      {
        title: "Cardiovascular & Blood Pressure Support",
        description: "Broad vasodilation lowers peripheral resistance, assisting in lowering blood pressure and improving overall cardiac efficiency.",
        metric: "Lowers Vascular Resistance"
      },
      {
        title: "Relieves Joint Stiffness & Muscle Pain",
        description: "Penetrating radiant heat eases chronic back aches, hip tension, and arthritic joint stiffness, speeding post-workout recovery.",
        metric: "Deep Muscle Relaxation"
      },
      {
        title: "Reduces Built-Up Stress & Promotes Sleep",
        description: "Calms the nervous system and triggers parasympathetic activation, helping you fall asleep faster and achieve deeper sleep stages.",
        metric: "Parasympathetic Activation"
      },
      {
        title: "Strengthens Immune System Defenses",
        description: "Elevates internal temperature to create an artificial fever response, stimulating white blood cell production and natural defenses.",
        metric: "Immune System Stimulation"
      },
      {
        title: "Targets & Smooths Cellulite Tissue",
        description: "Deep subcutaneous heating and enhanced lymphatic drainage help break down trapped fluid pockets and smooth uneven skin texture.",
        metric: "Smooths Dermal Texture"
      }
    ],
    specGroups: [
      {
        category: "Dimensions & Capacity",
        items: [
          { label: "Capacity", value: "3 Persons (Extra-wide contoured bench)" },
          { label: "Exterior Dimensions", value: "150 cm (L) × 120 cm (W) × 190 cm (H) / 59.1″ × 47.2″ × 74.8″" },
          { label: "Interior Clearance", value: "142 cm (L) × 112 cm (W) × 178 cm (H)" },
          { label: "Gross Weight (G.W)", value: "153 kg (Crated) / Net Weight: ~135 kg" },
          { label: "Glass Specifications", value: "8 mm Heavy Tempered Safety Glass" },
          { label: "Timber Construction", value: "Canadian Hemlock (Standard) / Western Red Cedar (Optional Upgrade)" }
        ]
      },
      {
        category: "Electrical & Heating System",
        items: [
          { label: "Catalog Model", value: "MS-031PB / MS-061PB (Luxury Far Infrared Quartz Combine Sauna)" },
          { label: "Power Consumption", value: "2100 Watts" },
          { label: "Operating Voltage", value: "220–240 V AC / 50–60 Hz (~9.1 Amps)" },
          { label: "Plug Compatibility", value: "Standard 3-pin earthed 10A / 16A plug (Runs on single 16A circuit)" },
          { label: "Heating Architecture", value: "Full-Spectrum Quartz Combine Heaters + Far Infrared Carbon Fiber Panels" },
          { label: "Floor Integration", value: "Heated carbon floor with embedded natural tourmaline stones" },
          { label: "Operating Temperature", value: "20°C to 65°C (68°F to 149°F)" },
          { label: "Warm-Up Time", value: "15 to 20 minutes to reach 50°C" },
          { label: "EMF Exposure", value: "Shielded ultra-low EMF (< 2.0 mG at seated position)" }
        ]
      },
      {
        category: "Controls, Lighting & Multimedia",
        items: [
          { label: "Control Interface", value: "Digital interior control console with timer and temperature presets" },
          { label: "Air Purification", value: "Built-in negative ion oxygen generator" },
          { label: "Chromotherapy", value: "7-color LED starlight ceiling system" },
          { label: "Reading Lamp", value: "Dedicated warm interior reading light" },
          { label: "Audio Entertainment", value: "Twin high-fidelity ceiling speakers with Bluetooth, USB, MP3, and FM radio" }
        ]
      },
      {
        category: "Commercial & Manufacturing Standards",
        items: [
          { label: "Certifications", value: "CE, ISO 9001, RoHS, ETL Electrical Safety" },
          { label: "Assembly Architecture", value: "Modular prefabricated tongue-and-groove panel system with buckle latches" },
          { label: "Commercial Warranty", value: "2 Years on Electronics / 5 Years on Timber Shell & Heating Elements" }
        ]
      }
    ],
    whatsIncluded: [
      "Modular Canadian Hemlock or Western Red Cedar prefabricated panels with pre-mounted heaters",
      "8 mm heavy tempered glass front door and side glass panels with magnetic sealing",
      "Full-spectrum quartz combine heater assemblies with protective wooden slat covers",
      "Far-infrared carbon fiber wall heating panels with quick-connect wiring",
      "Heated floor section embedded with natural tourmaline mineral stones",
      "Interior digital control console with digital temperature and timer display",
      "Negative ion oxygen generator unit",
      "7-color ceiling starlight chromotherapy lighting package",
      "Dual high-fidelity ceiling speakers with integrated Bluetooth/USB/MP3/FM module",
      "Dedicated interior reading lamp",
      "Complete installation hardware pack, heavy-duty power lead, and assembly guide"
    ],
    protocol: {
      recommendedDuration: "30 to 45 minutes",
      frequency: "3 to 5 sessions per week",
      preparation: [
        "Hydrate thoroughly with 500–600 ml of water with mineral electrolytes 30 minutes before your session.",
        "Power on the sauna 15–20 minutes in advance, setting the thermostat to 50°C–55°C.",
        "Lay large cotton towels across the bench and floor to absorb sweat and protect the wood.",
        "Wear lightweight swimwear or sit directly on a towel to expose skin to radiant infrared waves."
      ],
      protocolSteps: [
        {
          step: "Phase 1: Entry & Warming (Minutes 0–10)",
          instruction: "Enter the cabin at 48°C–50°C. Settle onto the spacious bench and rest your feet on the tourmaline floor stones. Allow the quartz heaters to begin warming your tissues."
        },
        {
          step: "Phase 2: Deep Hyperthermia & Sweat (Minutes 10–35)",
          instruction: "As the cabin reaches 55°C–62°C, deep sweating commences. Enjoy your chosen audio or starlight chromotherapy. The oxygen ionizer keeps the interior air fresh."
        },
        {
          step: "Phase 3: Exit, Rest & Rehydration (Minutes 35–45)",
          instruction: "Exit the cabin, wrap in a towel, and sit in a cool room for 10 minutes. Follow with a refreshing lukewarm shower and replenish with electrolyte water."
        }
      ],
      contraindications: [
        "Severe or decompensated cardiovascular disease.",
        "Pregnancy (consult with your physician prior to heat exposure).",
        "Active febrile infections or acute inflammatory conditions.",
        "Alcohol consumption prior to or during use.",
        "Open surgical wounds or skin burns."
      ]
    },
    suitableEnvironments: [
      {
        type: "Commercial Wellness & Recovery Centers",
        description: "High-capacity 3-person cabin suitable for group or companion sessions, maximizing facility revenue."
      },
      {
        type: "Athletic Training Facilities & Sports Teams",
        description: "Ideal for group recovery routines following heavy training blocks and team workouts."
      },
      {
        type: "Luxury Private Residences & Villas",
        description: "Generous space allowing occupants to stretch out, lie down, or sauna together with family members."
      },
      {
        type: "Boutique Day Spas & Wellness Resorts",
        description: "Premium amenity for couples or small groups seeking a shared private thermal experience."
      }
    ],
    faqs: [
      {
        question: "Can three adults genuinely sit in the Halo 3 without feeling crowded?",
        answer: "Yes. With a width of 150 cm (5 feet) and depth of 120 cm, the extra-wide bench provides ample shoulder, hip, and leg room for three adults to sit comfortably side by side."
      },
      {
        question: "Can one or two people lie down inside the Halo 3?",
        answer: "Yes. With a 150 cm bench width, a single user can comfortably lie down with knees slightly bent, or two users can recline with their legs extended along the bench."
      },
      {
        question: "Does the 2100 W power consumption require three-phase electricity?",
        answer: "No. At 2100 Watts on 220V–240V, the Halo 3 draws approximately 9.1 Amps. It operates safely on a standard single-phase 16A domestic circuit without needing three-phase commercial power."
      },
      {
        question: "What is the quartz combine heating system?",
        answer: "Quartz combine heating pairs high-intensity full-spectrum quartz tubes with wide-surface far-infrared carbon panels. The quartz tubes provide fast, deep-tissue radiant warmth, while the carbon panels envelop the entire cabin in consistent, gentle heat without hot or cold spots."
      },
      {
        question: "What are the benefits of the 7-color ceiling starlight system?",
        answer: "Chromotherapy uses visible color frequencies to influence mood and relaxation. Warm hues (red, orange, yellow) promote circulation and energy, while cool tones (blue, green, indigo) calm the nervous system and prepare your body for restful sleep."
      },
      {
        question: "How does the oxygen ionizer function in a 3-person sauna?",
        answer: "When multiple people share a sauna, humidity and carbon dioxide levels rise faster. The built-in oxygen ionizer actively purifies the cabin air and releases negative ions, keeping the atmosphere feeling light, clean, and refreshing throughout the session."
      },
      {
        question: "How is the unit shipped and assembled?",
        answer: "The sauna ships in heavy-duty reinforced crates. The modular walls, ceiling, floor, and glass door assemble using an intuitive buckle-lock mechanism. Two adults can assemble the complete cabin in roughly 60 to 90 minutes with basic tools."
      }
    ],
    relatedProductIds: [
      "infrared-sauna-double-full-spectrum-mstar",
      "infrared-sauna-single-full-spectrum-mstar",
      "cold-plunge-single-round-yg",
      "gbuilt-chillybox"
    ]
  },

  "infrared-sauna-group-combination-mstar": {
    id: "infrared-sauna-group-combination-mstar",
    subtitle: "Three-Person Luxury Hybrid Quartz & Carbon Infrared Sauna (Catalog Model: MS-061PB)",
    tagline: "Spacious 150 × 120 cm luxury cabin combining full-spectrum quartz heaters with wide-coverage carbon panels, red cedar craftsmanship, and starlight chromotherapy.",
    overview: [
      "The Halo Hybrid 3 (Catalog Model MS-061PB) is an extra-wide three-person thermal sanctuary engineered for luxury residences, commercial wellness lounges, athletic clubs, and health resorts. Measuring 150 cm wide, 120 cm deep, and 190 cm high with a gross crated weight of 153 kg, this unit delivers the ultimate multi-person infrared session with generous legroom and shoulder clearance.",
      "At the core of the Hybrid 3 is an advanced dual-system heating matrix combining high-intensity full-spectrum quartz emitters with large-format far-infrared carbon fiber wall panels. The quartz elements penetrate deep into tight lumbar muscles and spinal joints within seconds of turning on, while the low-EMF carbon panels blanket the entire interior in a smooth, continuous far-infrared field (drawing 2100 Watts on a standard single-phase 220V–240V line).",
      "Milled from premium Canadian Hemlock or Western Red Cedar with 8 mm architectural tempered glass, the cabin provides exceptional acoustic quiet and thermal efficiency. The floor is lined with carbon heating elements beneath natural tourmaline mineral stones, warming bare feet and releasing negative ions throughout your sweat session.",
      "Every detail is turnkey: an intuitive digital control interface allows exact temperature and time calibration, supported by an on-board oxygen ionizer, warm interior reading light, a 7-color ceiling starlight chromotherapy array, and a high-fidelity stereo sound system with Bluetooth, USB, MP3, and FM radio."
    ],
    mechanismOfAction: {
      heading: "Quartz-Carbon Dual Wave Radiance & Negative Ion Airflow",
      description: "Combining high-intensity full-spectrum quartz tubes with wide-area carbon wall panels generates a comprehensive infrared spectrum (near, mid, and far) that elevates core body temperature safely and effectively.",
      points: [
        "Quartz Near & Mid-Infrared Transmission: Fast-acting quartz emitters transmit near and mid wavelengths that penetrate up to 5 cm into muscle tissue and joint capsules.",
        "Carbon Far-Infrared Surround: Large-format carbon wall panels emit steady 7 to 14 micron far-infrared waves that warm your entire body evenly without harsh hot spots.",
        "Deep Tissue Hyperthermia: Gently raises internal core body temperature, triggering deep cellular perspiration at comfortable ambient temperatures between 45°C and 65°C.",
        "Tourmaline Plantar Warmth: Carbon-heated tourmaline stones stimulate sole reflex points, encouraging circulation from the feet back toward the core.",
        "Oxygen Ion Air Purification: An active negative ion generator continuously refreshes the air, preventing stuffiness and supporting deep, comfortable breathing."
      ]
    },
    features: [
      {
        title: "Hybrid Quartz & Carbon Heating",
        description: "High-intensity full-spectrum quartz tubes paired with low-EMF carbon panels deliver both focused deep heat and wide ambient warmth.",
        iconName: "Flame"
      },
      {
        title: "Generous 3-Person Capacity",
        description: "150 cm wide cabin allows three adults to sit comfortably or two users to stretch out with legs elevated on the bench.",
        iconName: "Users"
      },
      {
        title: "8 mm Tempered Architectural Glass",
        description: "Full-height tempered safety glass front provides superior insulation, modern aesthetics, and open room views.",
        iconName: "ShieldCheck"
      },
      {
        title: "Tourmaline Stone Heated Floor",
        description: "Carbon heating panels warm embedded tourmaline mineral stones, soothing tired feet and releasing negative ions.",
        iconName: "Sparkles"
      },
      {
        title: "Integrated Oxygen Ionizer",
        description: "Continuously cleanses internal cabin air, removing sweat odors and allergens so breathing remains light and clear.",
        iconName: "Zap"
      },
      {
        title: "7-Color Ceiling Starlight System",
        description: "Built-in ceiling fiber-optic starlight system provides chromotherapy lighting in 7 customizable color modes.",
        iconName: "Sun"
      },
      {
        title: "Bluetooth & USB Stereo Audio",
        description: "Dual ceiling-mounted high-fidelity speakers connect to your smartphone or tablet for streaming music or podcasts.",
        iconName: "Speaker"
      },
      {
        title: "Digital Interior Control Keypad",
        description: "Clear digital display gives you direct control over temperature presets, countdown timer, and lighting inside the cabin.",
        iconName: "Sliders"
      }
    ],
    benefits: [
      {
        title: "Maximum Full-Body Detoxification",
        description: "Heavy, cellular-level sweating helps flush out stored environmental chemicals, heavy metal traces, and metabolic residue.",
        metric: "Heavy Sweat Flush"
      },
      {
        title: "Accelerated Caloric Burn",
        description: "The body expends substantial energy to cool itself down, burning 400 to 600 calories during an intensive 40-minute session.",
        metric: "400–600 kcal / session"
      },
      {
        title: "Skin Radiance & Cellulite Smoothing",
        description: "Enhanced blood flow brings nutrients to the dermal layer, supporting natural collagen repair and smoothing uneven skin texture.",
        metric: "Dermal Elasticity"
      },
      {
        title: "Cardiovascular Circulation & Pressure",
        description: "Thermal dilation expands blood vessels, lowering vascular resistance and providing a gentle, passive cardiac workout.",
        metric: "Arterial Flow"
      },
      {
        title: "Relieves Joint Stiffness & Back Aches",
        description: "Direct quartz radiant heat soothes deep lumbar soreness, hip stiffness, and tight tendons for faster post-workout recovery.",
        metric: "Joint & Spine Relief"
      },
      {
        title: "Promotes Restorative Deep Sleep",
        description: "Calms sympathetic stress responses and prompts natural sleep hormone release as your core cools down post-session.",
        metric: "Deeper Slow-Wave Sleep"
      },
      {
        title: "Boosts Immune Defenses",
        description: "Simulates the body's natural fever response to activate white blood cells, strengthening immune resistance against seasonal bugs.",
        metric: "Immune System Boost"
      }
    ],
    specGroups: [
      {
        category: "Dimensions & Capacity",
        items: [
          { label: "Capacity", value: "3 Persons (Extra-wide contoured bench)" },
          { label: "Exterior Dimensions", value: "150 cm (L) × 120 cm (W) × 190 cm (H) / 59.1″ × 47.2″ × 74.8″" },
          { label: "Interior Footprint", value: "142 cm (L) × 112 cm (W) × 178 cm (H)" },
          { label: "Gross Weight (G.W)", value: "153 kg (Crated) / Net Weight: ~135 kg" },
          { label: "Glass Construction", value: "8 mm Heavy Tempered Safety Glass" },
          { label: "Timber Options", value: "Western Red Cedar or Canadian Hemlock (Tongue & Groove)" }
        ]
      },
      {
        category: "Electrical & Heating System",
        items: [
          { label: "Catalog Model", value: "MS-061PB (Luxury Far Infrared Carbon Panel and Quartz Combine Sauna)" },
          { label: "Power Consumption", value: "2100 Watts" },
          { label: "Operating Voltage", value: "220–240 V AC / 50–60 Hz (~9.1 Amps)" },
          { label: "Plug Requirement", value: "Standard single-phase 16A 3-pin earthed wall socket" },
          { label: "Heating Array", value: "Full-spectrum quartz combine heaters + carbon fiber wall panels" },
          { label: "Floor System", value: "Under-floor carbon heaters with natural tourmaline stones" },
          { label: "Operating Temperature", value: "20°C to 65°C (68°F to 149°F)" },
          { label: "Warm-Up Time", value: "15 to 20 minutes to reach 50°C" },
          { label: "EMF Rating", value: "Shielded ultra-low EMF (< 2.0 mG at seated position)" }
        ]
      },
      {
        category: "Lighting, Controls & Audio",
        items: [
          { label: "Control Console", value: "Digital interior keypad with timer and temperature presets" },
          { label: "Air System", value: "Built-in negative ion oxygen ionizer" },
          { label: "Chromotherapy", value: "7-color LED ceiling starlight system" },
          { label: "Reading Light", value: "Warm interior reading lamp" },
          { label: "Audio System", value: "Dual ceiling speakers with Bluetooth, USB, MP3, and FM radio" }
        ]
      },
      {
        category: "Standards & Warranty",
        items: [
          { label: "Certifications", value: "CE, RoHS, ISO 9001, ETL Electrical Safety" },
          { label: "Assembly Type", value: "Modular tongue-and-groove buckle-latch system" },
          { label: "Warranty", value: "2 Years on Electronics & Heaters / 5 Years on Timber Shell" }
        ]
      }
    ],
    whatsIncluded: [
      "Prefabricated modular Western Red Cedar or Canadian Hemlock panels with built-in heaters",
      "8 mm heavy tempered safety glass door and side panels with magnetic latch",
      "Full spectrum quartz and carbon heating elements with pre-wired harnesses",
      "Floor heating panel embedded with natural tourmaline mineral stones",
      "Digital interior LED control console",
      "Fresh air negative ion oxygen ionizer module",
      "7-color ceiling starlight chromotherapy lighting package",
      "Twin ceiling-mounted audio speakers with Bluetooth and USB receiver",
      "Warm soft-white interior reading light",
      "Assembly hardware pack, grounded power lead, and illustrated step-by-step setup guide"
    ],
    protocol: {
      recommendedDuration: "30 to 45 minutes",
      frequency: "3 to 5 sessions per week",
      preparation: [
        "Drink 500 to 600 ml of fresh water or electrolyte water 30 minutes before entering.",
        "Turn the sauna on 15 to 20 minutes before use, setting the temperature to 50°C–55°C.",
        "Take a quick warm shower and dry off thoroughly.",
        "Place clean cotton towels across the bench and floor to absorb sweat and protect the wood."
      ],
      protocolSteps: [
        {
          step: "Phase 1: Entry & Acclimatization (Minutes 0–10)",
          instruction: "Step inside at 48°C–50°C. Settle onto the wide bench, rest your bare feet on the tourmaline floor stones, and let the gentle radiant heat begin warming your muscles."
        },
        {
          step: "Phase 2: Heavy Core Sweating (Minutes 10–35)",
          instruction: "As the cabin reaches 55°C–62°C, full-body sweating begins. Breathe deeply with the oxygen ionizer active. Connect your phone to stream calming audio."
        },
        {
          step: "Phase 3: Exit & Rehydrate (Minutes 35–45)",
          instruction: "Exit the cabin, wrap in a towel, and sit quietly at room temperature for 10 minutes. Follow with a lukewarm shower and drink another 500 ml of water."
        }
      ],
      contraindications: [
        "Severe uncontrolled hypertension or heart failure without physician approval.",
        "Pregnancy (thermal therapy should always be cleared by an obstetrician first).",
        "Active fevers, viral infections, or acute joint inflammation.",
        "Alcohol consumption within 6 hours of use."
      ]
    },
    suitableEnvironments: [
      {
        type: "Commercial Recovery Centers & Spas",
        description: "Spacious 3-person capacity maximizes revenue with companion or small group recovery sessions."
      },
      {
        type: "Luxury Residential Villas",
        description: "Premium large-format sauna where family members can relax together or individuals can stretch out fully."
      },
      {
        type: "Sports Teams & Athletic Clubs",
        description: "Post-training recovery station designed to handle multiple athletes after intensive field or gym sessions."
      },
      {
        type: "Contrast Therapy Suites",
        description: "Serves as the high-capacity thermal anchor alongside commercial cold plunge pools."
      }
    ],
    faqs: [
      {
        question: "Can three adults sit comfortably in the Halo Hybrid 3?",
        answer: "Yes. With a bench width of 150 cm and cabin depth of 120 cm, three adults can sit side-by-side with plenty of elbow and leg room."
      },
      {
        question: "What is the difference between quartz combine and standard infrared?",
        answer: "Standard infrared relies solely on carbon panels. The quartz combine system adds high-intensity full-spectrum quartz tubes that warm up immediately and penetrate deeper into dense muscle tissue, providing faster relief alongside the surround-warmth of carbon panels."
      },
      {
        question: "Does the 2100 W power consumption require special electrical installation?",
        answer: "No. At 2100 Watts on 220V–240V power, the unit draws approximately 9.1 Amps. It runs safely on a standard single-phase 16A domestic circuit without needing three-phase power."
      },
      {
        question: "How do the tourmaline floor stones help during sessions?",
        answer: "Tourmaline stones emit gentle negative ions and radiant warmth when heated from underneath. Resting your bare feet on them warms your soles, relieves plantar foot tension, and stimulates blood circulation from your lower extremities."
      },
      {
        question: "How do I clean and sanitize the cabin between multiple users?",
        answer: "Always require guests to sit on cotton towels. After each session, wipe the bench and glass with an alcohol-free botanical disinfectant spray, and leave the door open for 5 to 10 minutes to allow the oxygen ionizer to clear the air."
      },
      {
        question: "How long does it take to assemble?",
        answer: "The pre-fabricated wall, floor, and roof panels connect via a built-in buckle latch system. Two adults can assemble the complete cabin in approximately 60 to 90 minutes using standard hand tools."
      }
    ],
    relatedProductIds: [
      "infrared-sauna-group-full-spectrum-mstar",
      "infrared-sauna-double-full-spectrum-mstar",
      "cold-plunge-single-round-yg",
      "gbuilt-chillybox"
    ]
  },

  "halo-2-infrared-wellness-cabin": {
    id: "halo-2-infrared-wellness-cabin",
    subtitle: "Turnkey Two-Person Full-Spectrum Thermal Sanctuary",
    tagline: "Medical-grade infrared photobiomodulation paired with acoustic tranquility in a bespoke cylindrical architecture.",
    overview: [
      "The Halo 2 Infrared Wellness Cabin represents a pinnacle of contemporary recovery engineering, crafted specifically for luxury hospitality suites, longevity clinics, and high-performance sports training facilities.",
      "Engineered with a curved architectural geometry, the Halo 2 distributes therapeutic far-infrared (FIR), mid-infrared (MIR), and near-infrared (NIR) wavelengths uniformly across the occupants' entire physiological surface. Its low-EMF dual-core carbon and ceramic emitters achieve optimal core thermal elevation without harsh surface scorch.",
      "The interior is milled from sustainably harvested Grade-A Canadian Hemlock, offering non-toxic thermal stability, natural acoustic dampening, and an understated tactile warmth designed to calm the central nervous system.",
    ],
    mechanismOfAction: {
      heading: "Tri-Wave Photobiomodulation & Core Hyperthermia",
      description: "Infrared waves at 800nm–1000nm penetrate dermal and subcutaneous tissue layers up to 4cm deep, vibrating water clusters and stimulating cellular energy production.",
      points: [
        "Cytochrome c Oxidase activation stimulates mitochondrial ATP synthesis.",
        "Deep peripheral vasodilation prompts active microcirculation and nitric oxide liberation.",
        "Systemic passive cardiovascular output mimics moderate aerobic exercise (elevated stroke volume).",
        "Heat shock protein (HSP70) synthesis supports cellular proteostasis and muscle recovery.",
      ],
    },
    features: [
      {
        title: "Full-Spectrum 360° Emitters",
        description: "Strategically arrayed ceramic and carbon panel architecture blanketing anterior, posterior, and plantar zones.",
        iconName: "Flame",
      },
      {
        title: "Ultra-Low EMF Shielding",
        description: "Independently certified magnetic flux below 1.5 mG at body contact points for clean bio-hacking sessions.",
        iconName: "ShieldCheck",
      },
      {
        title: "Medical Chromotherapy & Soundscapes",
        description: "12-mode multi-diode ceiling chromotherapy array integrated with Bluetooth acoustic surround transducers.",
        iconName: "Sparkles",
      },
      {
        title: "Smart Digital Touch & Remote App",
        description: "Precision temperature presets, preheating scheduling, and session timing control from inside or concierge desk.",
        iconName: "Smartphone",
      },
    ],
    benefits: [
      {
        title: "Rapid Cellular Rejuvenation",
        description: "Accelerates tissue rebuilding and minimizes post-exertion inflammation via mitochondrial stimulation.",
        metric: "+25% Cellular ATP",
      },
      {
        title: "Deep Parasympathetic Shift",
        description: "Downregulates sympathetic fight-or-flight stress responses, significantly increasing Heart Rate Variability.",
        metric: "Lower Resting HR",
      },
      {
        title: "Microvascular Blood Flow",
        description: "Expands capillary beds, facilitating nutrient transport and efficient metabolic waste clearance.",
        metric: "3x Vasodilation",
      },
      {
        title: "Natural Detoxification",
        description: "Induces deep, non-stifling perspiration that assists in heavy metal and persistent chemical expulsion.",
        metric: "5x Sweat Toxin Ratio",
      },
    ],
    specGroups: [
      {
        category: "Dimensions & Capacity",
        items: [
          { label: "Occupancy", value: "2 Persons (Ergonomic contoured seating)" },
          { label: "Exterior Dimensions", value: "140 cm (W) × 120 cm (D) × 200 cm (H)" },
          { label: "Interior Dimensions", value: "130 cm (W) × 110 cm (D) × 188 cm (H)" },
          { label: "Net Unit Weight", value: "235 kg" },
          { label: "Door Clearance", value: "Tempered 8mm safety glass with magnetic latch" },
        ],
      },
      {
        category: "Electrical & Power",
        items: [
          { label: "Input Voltage", value: "220–240 V AC / 50–60 Hz" },
          { label: "Power Consumption", value: "2,400 Watts (11 Amps)" },
          { label: "Circuit Requirement", value: "Dedicated 16A isolated grounded line" },
          { label: "Warm-Up Time", value: "12–18 minutes to reach optimal 55°C–65°C" },
        ],
      },
      {
        category: "Thermal & Radiation",
        items: [
          { label: "Operating Temperature", value: "30°C to 70°C (Digital step regulation)" },
          { label: "Wavelength Spectrum", value: "Near (0.8–1.5µm), Mid (1.5–5.6µm), Far (5.6–15µm)" },
          { label: "EMF Safety Level", value: "< 1.2 mG at 5cm contact distance" },
          { label: "Wood Sourcing", value: "FSC-certified Canadian Hemlock (Non-allergenic)" },
        ],
      },
      {
        category: "Certifications & Warranty",
        items: [
          { label: "Certifications", value: "CE, RoHS, ISO 9001, ETL Electrical Safety" },
          { label: "Commercial Warranty", value: "3 Years Comprehensive / 5 Years Emitter Core" },
          { label: "Installation", value: "Turnkey white-glove assembly & commissioning included" },
        ],
      },
    ],
    whatsIncluded: [
      "Modular prefabricated Hemlock cylindrical cabin shell",
      "Full set of carbon & ceramic full-spectrum heating modules",
      "8mm architectural tempered glass door and stainless steel architectural hardware",
      "Digital touch control console with integrated smartphone remote gateway",
      "Medical-grade multi-wavelength chromotherapy ceiling panel",
      "Bluetooth resonance acoustic transducers with ambient amplifier",
      "Ergonomic contoured backrest supports and non-slip slatted footwell",
      "Turnkey assembly toolkit and comprehensive commissioning protocol guide",
    ],
    protocol: {
      recommendedDuration: "30 to 45 minutes",
      frequency: "3 to 5 sessions per week",
      preparation: [
        "Hydrate thoroughly with 500ml of mineralized water 30 minutes prior to entry.",
        "Remove all metal jewelry, wristwatches, and optical eyewear.",
        "Wear minimalist light cotton swimwear or dry sauna towels to maximize direct dermal exposure.",
      ],
      protocolSteps: [
        { step: "Phase 1: Induction", instruction: "Set cabin to 50°C and settle onto the ergonomic bench for 10 minutes as capillary expansion begins." },
        { step: "Phase 2: Deep Core Elevation", instruction: "Gradually allow internal temperature to elevate to 60°C–65°C; engage deep nasal breathing and dim lighting." },
        { step: "Phase 3: Integration & Cool Down", instruction: "Conclude session, towel down without immediate cold shock, rest for 10 minutes, and replenish electrolytes." },
      ],
      contraindications: [
        "Severe unstable cardiovascular conditions or decompensated heart failure.",
        "Active febrile infections or acute inflammatory flare-ups.",
        "Pregnancy (requires written medical clearance from obstetrician).",
      ],
    },
    suitableEnvironments: [
      { type: "Longevity & Bio-Hacking Centres", description: "Acts as the thermal anchor preceding cold contrast immersions or hyperbaric sessions." },
      { type: "5-Star Hotel Spas", description: "Elevates private guest wellness suites with a zero-steam, hygienic, high-aesthetic experience." },
      { type: "Athletic Performance Clubs", description: "Post-workout structural flush, reducing delayed onset muscle soreness (DOMS) for athletes." },
      { type: "Private Luxury Residences", description: "Compact cylindrical footprint integrates smoothly into residential master suites or home gyms." },
    ],
    faqs: [
      {
        question: "Does the Halo 2 require dedicated plumbing or drainage?",
        answer: "No. The Halo 2 relies purely on dry infrared radiant heat without steam or condensation. No plumbing, drainage, or water lines are required—only a dedicated 230V electrical feed.",
      },
      {
        question: "How does the Halo 2 maintain ultra-low EMF levels?",
        answer: "Every heating panel uses patented reverse-flow wiring matrices and conductive carbon shielding that cancels out electromagnetic fields at point of generation, verified below 1.5 mG.",
      },
      {
        question: "What maintenance and sanitation is required between commercial guests?",
        answer: "The non-porous hem-lock interior and glass surface are cleaned with hospital-grade, alcohol-free botanical sanitizing sprays. Towels are placed on seating surfaces, enabling a fast 5-minute guest turnaround.",
      },
      {
        question: "Can GreenPulse configure custom exterior timber stains or finishes?",
        answer: "Yes. For bespoke architectural installations, our manufacturing studio provides custom timber stains, smoked glass tints, and bespoke handle hardware to harmonize with your interior design.",
      },
    ],
    relatedProductIds: [
      "o2-carbon-hyperbaric-chamber",
      "gbuilt-chillybox",
      "gp-normatec-3-full-body",
      "apex-full-body-massage-chair",
    ],
  },

  "o2-carbon-hyperbaric-chamber": {
    id: "o2-carbon-hyperbaric-chamber",
    subtitle: "High-Flow 1.5–2.0 ATA Hard-Shell Carbon Composite Chamber",
    tagline: "Cellular hyper-oxygenation delivered within an ultra-rigid carbon monocoque with dual-operator internal controls.",
    overview: [
      "The O2 Carbon Hyperbaric Chamber represents the zenith of non-invasive regenerative medicine and recovery technology. Fabricated from advanced aerospace-grade carbon fibre composite, it delivers absolute structural rigidity and flawless acoustic isolation.",
      "Operating at variable pressures between 1.5 ATA and 2.0 ATA (Absolute Atmospheres) with an integrated medical-grade 10L/min 95%+ pure oxygen generator, the chamber dissolves gaseous oxygen directly into blood plasma, cerebrospinal fluid, and interstitial tissues.",
      "Designed for both operator-assisted clinics and independent luxury residential use, the internal cabin features a full digital touchscreen, climate control, internal intercom, wide ergonomic recline, and panoramic observation ports to eliminate claustrophobia.",
    ],
    mechanismOfAction: {
      heading: "Henry's Law & Plasma Oxygen Dissolution",
      description: "Under elevated atmospheric pressure, oxygen is driven into blood plasma in concentrations up to 10–15 times higher than normal atmospheric breathing, independent of red blood cell hemoglobin saturation.",
      points: [
        "Hyper-saturates hypoxic tissues and poorly vascularized zones (cartilage, tendons, deep brain).",
        "Triggers massive VEGF-mediated angiogenesis (sprouting of novel capillary micro-vessels).",
        "Stimulates bone marrow release of CD34+ pluripotent stem cells by up to 800%.",
        "Downregulates pro-inflammatory cytokines while dramatically enhancing bactericidal white blood cell action.",
      ],
    },
    features: [
      {
        title: "Aerospace Carbon Monocoque",
        description: "Seamless carbon fibre construction rated to 3.0 ATA safety test pressure with zero flex or pressure fatigue.",
        iconName: "Activity",
      },
      {
        title: "Dual Internal/External Touch Consoles",
        description: "Both occupant and supervising clinician can monitor real-time pressure curves, O2 concentration, and timer.",
        iconName: "Monitor",
      },
      {
        title: "High-Flow Medical O2 Concentrator",
        description: "Oil-free medical PSA molecular sieve delivering 10 L/min of continuous 95% ±3% pharmaceutical-grade oxygen.",
        iconName: "Wind",
      },
      {
        title: "Active Dehumidification & Climate Loop",
        description: "Quiet recirculating air conditioning maintains interior temperatures between 18°C and 22°C with zero humidity buildup.",
        iconName: "ThermometerSnowflake",
      },
    ],
    benefits: [
      {
        title: "Stem Cell Mobilization",
        description: "Stimulates systemic release of repair stem cells to accelerate post-surgical and athletic healing.",
        metric: "+800% CD34+ Stem Cells",
      },
      {
        title: "Deep Tissue Oxygenation",
        description: "Forces dissolved oxygen into deprived micro-vascular areas, accelerating metabolic recovery.",
        metric: "15x Dissolved Plasma O2",
      },
      {
        title: "Neuro-Cognitive Regeneration",
        description: "Enhances cerebral oxygen metabolism, reducing cognitive fatigue and promoting neuroplasticity.",
        metric: "Peak Mental Clarity",
      },
      {
        title: "Angiogenesis Stimulation",
        description: "Induces the biological formation of new micro-capillaries in recovering musculoskeletal tissues.",
        metric: "Novel Capillary Growth",
      },
    ],
    specGroups: [
      {
        category: "Chamber Specifications",
        items: [
          { label: "Working Pressure Range", value: "1.3 ATA to 2.0 ATA (30 kPa to 100 kPa relative)" },
          { label: "Chamber Shell Material", value: "Toray Aerospace-Grade Carbon Composite Monocoque" },
          { label: "Length / Outer Diameter", value: "225 cm Length × 90 cm Diameter" },
          { label: "Total System Weight", value: "165 kg (Chamber) / 85 kg (Auxiliary Support Skid)" },
          { label: "Entry Window Ports", value: "Triple 20mm optical acrylic observation ports" },
        ],
      },
      {
        category: "Oxygen & Air System",
        items: [
          { label: "Oxygen Delivery System", value: "Integrated 10 L/min 95% ±3% PSA Medical Concentrator" },
          { label: "Compressor Type", value: "Twin oil-free medical scroll compressors with dual particle filters" },
          { label: "Pressurization Rate", value: "Variable: 1.0 kPa/min to 5.0 kPa/min (occupant controlled)" },
          { label: "Emergency Depressurization", value: "Mechanical emergency dump valve opens to atmospheric in < 30s" },
        ],
      },
      {
        category: "Electrical & Facilities",
        items: [
          { label: "Power Supply", value: "220–240 V AC, 50/60 Hz, Single Phase" },
          { label: "Total Running Load", value: "1,850 Watts during pressurization / 900W continuous" },
          { label: "Internal Communication", value: "Two-way full duplex hands-free noise-cancelling intercom" },
          { label: "Cooling & Filtration", value: "Medical HEPA filter with integrated closed-loop air chiller" },
        ],
      },
      {
        category: "Compliance & Safety",
        items: [
          { label: "Certifications", value: "CE Medical Class IIa, ISO 13485, ASME PVHO Pressure Vessel Standards" },
          { label: "Warranty", value: "3 Years Comprehensive Commercial Warranty on all mechanical systems" },
        ],
      },
    ],
    whatsIncluded: [
      "Rigid carbon-fibre monocoque hyperbaric chamber with ergonomic memory foam mattress",
      "Medical-grade 10L/min 95% oxygen concentrator with dual cooling unit",
      "Oil-free silent air compressor station with sub-micron air filtration cascade",
      "Internal and external interactive touchscreen control computers with telemetry logging",
      "Dual non-rebreather oxygen delivery face masks and specialized medical nasal cannulas",
      "Two-way communications console and emergency quick-release valves",
      "White-glove delivery, pneumatic calibration, and staff clinical certification course",
    ],
    protocol: {
      recommendedDuration: "60 to 90 minutes",
      frequency: "3 to 5 sessions per week (Course of 20–40 sessions for deep protocols)",
      preparation: [
        "Wear 100% natural cotton clothing; strictly no synthetic polyesters or static-generating fibres.",
        "Remove all petroleum-based cosmetics, lotions, electronic devices, lighters, or cell phones.",
        "Practice ear-clearing techniques (Valsalva maneuver or swallowing) prior to pressurization initiation.",
      ],
      protocolSteps: [
        { step: "Phase 1: Pressurization", instruction: "Gradually increase pressure over 10–15 minutes to target ATA (1.5–2.0), clearing Eustachian tubes regularly." },
        { step: "Phase 2: Hyperoxic Plateau", instruction: "Breathe pharmaceutical oxygen via mask for 50–70 minutes while relaxing, listening to audio, or reading." },
        { step: "Phase 3: Depressurization", instruction: "Smoothly vent chamber over 10 minutes back to atmospheric baseline before unlocking the door." },
      ],
      contraindications: [
        "Untreated pneumothorax (absolute contraindication).",
        "Severe acute ear infection or blocked Eustachian tubes.",
        "High-dose active chemotherapy regimens (e.g. Doxorubicin, Cisplatin) without oncologist clearance.",
      ],
    },
    suitableEnvironments: [
      { type: "Longevity & Preventive Health Clinics", description: "Flagship biological age reversal, cognitive clarity, and vascular restoration therapy." },
      { type: "Elite Athletic Training Centres", description: "Drastically shortens soft-tissue recovery timelines and rehabilitates musculoskeletal trauma." },
      { type: "High-End Residential Estates", description: "Provides private, convenient daily cellular maintenance in executive home wellness suites." },
    ],
    faqs: [
      {
        question: "How does this hard-shell carbon chamber differ from soft inflatable bags?",
        answer: "Inflatable soft chambers cannot exceed 1.3 ATA and cannot deliver true clinical-grade hyperbaric pressures. The O2 Carbon reaches true 2.0 ATA in a rigid, safe shell that ensures maximum Henry's law oxygen dissolution.",
      },
      {
        question: "Can an individual operate the chamber alone safely from the inside?",
        answer: "Yes. The chamber features dual mirrored controls, meaning all pressurization, ventilation, lighting, and emergency release mechanisms can be managed autonomously from inside or by an outside attendant.",
      },
      {
        question: "What ear sensations occur during pressurization?",
        answer: "Similar to descending in an airplane, the occupant feels a gentle pressure in the ears. Simple swallowing, yawning, or the Valsalva maneuver equalizes the middle ear effortlessly within seconds.",
      },
      {
        question: "What maintenance is required for commercial daily operation?",
        answer: "Daily maintenance consists of wipe-down sanitation of masks and mattress. The air filtration system and oxygen concentrator molecular sieves require simple annual filter cartridge replacements.",
      },
    ],
    relatedProductIds: [
      "halo-2-infrared-wellness-cabin",
      "gbuilt-chillybox",
      "gp-normatec-3-full-body",
      "apex-full-body-massage-chair",
    ],
  },

  "gbuilt-chillybox": {
    id: "gbuilt-chillybox",
    subtitle: "Whole-Body Electric Cryotherapy Chamber (-110°C to -140°C)",
    tagline: "True nitrogen-free sub-zero cryogenic shock for systemic anti-inflammatory and endorphin release.",
    overview: [
      "The GBuilt Chillybox is an industry-defining electric whole-body cryotherapy (WBC) chamber engineered to replace hazardous liquid-nitrogen tanks with clean, breathable sub-zero chilled air.",
      "Delivering continuous true chamber temperatures down to -140°C (-220°F), the Chillybox exposes the user's entire body—including the shoulders, neck, and nervous system—to non-convective dry cold.",
      "This rapid thermal drop triggers profound vasoconstriction, an intense rush of norepinephrine, and systemic downregulation of pro-inflammatory cytokines, followed by deep secondary vasodilation upon exit.",
    ],
    mechanismOfAction: {
      heading: "Neuro-Vascular Cold Shock Kinetics",
      description: "Immediate cutaneous thermoreceptor activation stimulates the sympathetic nervous system and triggers a potent fight-or-flight metabolic flush.",
      points: [
        "Rapid peripheral vasoconstriction shunts blood from extremities to vital central organs.",
        "Triggers substantial norepinephrine and beta-endorphin release, elevating mood and suppressing pain.",
        "Post-session rapid re-perfusion delivers oxygen-rich, nutrient-dense blood back to peripheral muscles.",
        "Suppresses inflammatory markers including TNF-alpha, IL-1beta, and C-reactive protein (CRP).",
      ],
    },
    features: [
      {
        title: "100% Electric Cooling Cascade",
        description: "Zero nitrogen tanks, zero asphyxiation risk; uses medical multi-stage refrigeration compressors.",
        iconName: "Snowflake",
      },
      {
        title: "True Breathable Sub-Zero Air",
        description: "Occupants breathe pure oxygenated chilled air inside the cabin without needing head-out designs.",
        iconName: "Wind",
      },
      {
        title: "Heated Multi-Pane Observation Window",
        description: "Anti-fog condensation-free heated panoramic glass keeps the occupant visible and comfortable.",
        iconName: "Eye",
      },
      {
        title: "Rapid Pre-Chill & Rapid Turnaround",
        description: "Reaches full operating temperature in under 45 minutes; ready for back-to-back commercial client sessions.",
        iconName: "Zap",
      },
    ],
    benefits: [
      {
        title: "Intense Pain & Swelling Relief",
        description: "Dramatically reduces joint inflammation, tendonitis, and acute athletic soreness.",
        metric: "Instant Analgesia",
      },
      {
        title: "Norepinephrine & Mood Surge",
        description: "Stimulates neurochemical cascades that boost alertness, energy, and mental clarity.",
        metric: "+250% Norepinephrine",
      },
      {
        title: "Metabolic Caloric Activation",
        description: "Stimulates brown adipose tissue (BAT) thermogenesis, increasing basal metabolic calorie expenditure.",
        metric: "500–800 kcal Burn",
      },
      {
        title: "Immune System Conditioning",
        description: "Regular sub-zero exposure optimizes white blood cell counts and resilient systemic immunity.",
        metric: "Enhanced Immunity",
      },
    ],
    specGroups: [
      {
        category: "Performance & Temperature",
        items: [
          { label: "Temperature Range", value: "-110°C to -140°C (-166°F to -220°F)" },
          { label: "Cooling Medium", value: "Electric multi-stage cascade refrigeration (Eco-friendly refrigerant)" },
          { label: "Session Duration", value: "2 to 3.5 minutes per session" },
          { label: "Capacity", value: "Single occupant / Continuous commercial duty cycle" },
        ],
      },
      {
        category: "Dimensions & Footprint",
        items: [
          { label: "Chamber External", value: "115 cm (W) × 125 cm (D) × 225 cm (H)" },
          { label: "Machine Unit External", value: "120 cm (W) × 90 cm (D) × 180 cm (H)" },
          { label: "Total Footprint Needed", value: "Approximately 3.5m × 3m dedicated plant room/space" },
          { label: "Chamber Weight", value: "380 kg" },
        ],
      },
      {
        category: "Electrical & Facilities",
        items: [
          { label: "Power Requirement", value: "400 V, 3-Phase, 50 Hz (or 208V 3-Phase 60 Hz)" },
          { label: "Connected Load", value: "7.5 kW continuous / 9.5 kW peak startup" },
          { label: "Acoustic Insulation", value: "Heavy-duty thermal acoustic baffling (< 62 dBA operating)" },
          { label: "Exhaust Requirement", value: "External condenser heat rejection ducting or split water-chilled unit" },
        ],
      },
      {
        category: "Safety & Monitoring",
        items: [
          { label: "Safety Sensor Suite", value: "Dual O2 level sensors, emergency push-to-open door, internal kill-switch" },
          { label: "Certifications", value: "CE, ISO 9001, UL Electrical Safety Certified" },
          { label: "Commercial Warranty", value: "2 Years Parts & Compressor / Full remote diagnostic monitoring" },
        ],
      },
    ],
    whatsIncluded: [
      "GBuilt Chillybox insulated whole-body chamber with heated glass entry door",
      "External multi-stage electric cascade refrigeration module with digital PLC controller",
      "Operator touchscreen control tablet with client management and session presets",
      "Protective extremity wear kit (thermal gloves, earmuffs, sub-zero face masks, felt booties)",
      "Internal emergency release push-bars and audio intercom communication system",
      "Full turnkey installation, commissioning, and staff operator safety training certification",
    ],
    protocol: {
      recommendedDuration: "2.5 to 3.5 minutes",
      frequency: "2 to 4 sessions per week (Daily for acute sports training blocks)",
      preparation: [
        "Skin must be 100% dry; no sweat, moisture, lotions, or damp clothing.",
        "Wear dry wool socks, felt slippers, thermal gloves, headband/earmuffs, and a dry cotton face mask.",
        "Remove all piercings and metallic jewelry from direct skin contact.",
      ],
      protocolSteps: [
        { step: "Pre-Check", instruction: "Operator confirms baseline blood pressure and validates that skin is thoroughly dried." },
        { step: "Entry & Session", instruction: "Enter the chamber at -120°C. Walk in slow gentle circles, keeping arms relaxed away from torso." },
        { step: "Exit & Active Re-Warming", instruction: "Exit smoothly, step into ambient room temperature, and perform 5–10 minutes of gentle light mobility or stationary cycling." },
      ],
      contraindications: [
        "Severe hypertension (BP > 160/100 mmHg).",
        "Raynaud's phenomenon or cold-induced urticaria / allergy.",
        "Unstable angina, recent myocardial infarction, or deep vein thrombosis (DVT).",
      ],
    },
    suitableEnvironments: [
      { type: "Elite Sports & Recovery Studios", description: "Immediate reduction of muscular inflammation and post-match soreness." },
      { type: "Bio-Hacking & Longevity Sanctuaries", description: "Cornerstone element for contrast therapy paired with high-heat infrared saunas." },
      { type: "Premier Medical Wellness Resorts", description: "Offers guest pain relief without pharmacological intervention or downtime." },
    ],
    faqs: [
      {
        question: "Why choose electric whole-body cryotherapy over liquid nitrogen chambers?",
        answer: "Electric chambers use clean, breathable air that immerses the entire body safely including the head and vagus nerve. Liquid nitrogen chambers expose clients to hazardous gas, leave the head outside, and have inconsistent temperatures.",
      },
      {
        question: "Can someone get frostbite during the session?",
        answer: "No, because the air inside is strictly dehumidified (0% relative humidity). Dry cold transfers heat far more gently than wet cold, ensuring deep skin cooling without cellular freezing when following the 3-minute protocol.",
      },
      {
        question: "How long does the unit take to chill down in the morning?",
        answer: "The advanced cascade refrigeration system reaches operating temperature in approximately 40–50 minutes, and can be scheduled automatically via the smart scheduler.",
      },
    ],
    relatedProductIds: [
      "halo-2-infrared-wellness-cabin",
      "o2-carbon-hyperbaric-chamber",
      "gp-normatec-3-full-body",
      "duo-hybrid-sauna",
    ],
  },

  "proadjust-chiropractic-table": {
    id: "proadjust-chiropractic-table",
    subtitle: "High-Performance Multi-Drop Manual Therapy & Alignment Station",
    tagline: "Precision electric elevation with high-velocity, low-amplitude multi-segment pneumatic drops for physical therapists and chiropractors.",
    overview: [
      "The ProAdjust Chiropractic Table is engineered for uncompromising biomechanical precision in chiropractic, osteopathic, and advanced physiotherapy clinical environments.",
      "Equipped with quiet medical-grade dual electric linear actuators, the table smoothly traverses from low accessibility heights (50 cm) up to ergonomic treating heights (95 cm), protecting the clinician's spinal posture during heavy clinical caseloads.",
      "Features independent high-speed drop segments across cervical, thoracic, lumbar, and pelvic regions, calibrated with adjustable tension dials to accommodate pediatric, geriatric, and elite athletic patient profiles.",
    ],
    mechanismOfAction: {
      heading: "HVLA Drop-Assisted Biomechanics",
      description: "Drop mechanisms collapse a predetermined fraction of an inch at the termination of the clinician's thrust, harnessing momentum to reduce the manual force required to mobilize fixated joints.",
      points: [
        "Reduces patient muscular guarding through instantaneous table drop velocity.",
        "Minimizes clinician musculoskeletal strain by up to 60% compared to static manual tables.",
        "Facilitates selective directional vertebral subluxation adjustments.",
        "Allows segmented pelvic flexion-distraction for decompression of lumbar disc herniations.",
      ],
    },
    features: [
      {
        title: "Quad-Section Precision Drops",
        description: "Independent cervical, upper thoracic, lower thoracic/lumbar, and pelvic drops with dual manual cocking handles.",
        iconName: "Sliders",
      },
      {
        title: "Smooth Foot-Bar Elevation Control",
        description: "Full-perimeter foot pedal actuation permits hands-free height adjustment from any angle around the patient.",
        iconName: "Footprints",
      },
      {
        title: "Multi-Directional Headpiece",
        description: "Tilts, elevates, translates laterally, and spreads for optimal cervical alignment and patient comfort.",
        iconName: "Move",
      },
      {
        title: "Hospital-Grade Antimicrobial Vinyl",
        description: "High-density multi-layered foam upholstered in bleach-resistant, disinfectant-impervious medical vinyl.",
        iconName: "Shield",
      },
    ],
    benefits: [
      {
        title: "Superior Joint Mobilization",
        description: "Achieves clean joint cavitation and motion restoration with minimal patient discomfort.",
        metric: "Precision Drop Velocity",
      },
      {
        title: "Practitioner Ergonomic Protection",
        description: "Electric height positioning prevents lower back and shoulder fatigue for high-volume doctors.",
        metric: "-60% Joint Strain",
      },
      {
        title: "Spinal Disc Decompression",
        description: "Flexion-distraction capability relieves nerve root impingement and promotes disc rehydration.",
        metric: "Axial Traction",
      },
      {
        title: "Uncompromising Patient Comfort",
        description: "Contoured multi-density foam cradles facial, thoracic, and pelvic contours comfortably.",
        metric: "Zero Pressure Hotspots",
      },
    ],
    specGroups: [
      {
        category: "Dimensions & Capacities",
        items: [
          { label: "Table Length", value: "190 cm to 215 cm (Extendable ankle rest)" },
          { label: "Table Width", value: "58 cm (Body cushions) / 66 cm (Total base footprint)" },
          { label: "Height Adjustment", value: "52 cm to 96 cm (Continuous electric lift)" },
          { label: "Safe Working Load", value: "250 kg (550 lbs)" },
          { label: "Table Net Weight", value: "135 kg" },
        ],
      },
      {
        category: "Drop Mechanics & Adjustability",
        items: [
          { label: "Drop Mechanisms", value: "Cervical, Thoracic, Lumbar, Pelvic (Tension adjustable)" },
          { label: "Headpiece Range", value: "Tilt (-30° to +30°), Elevation (15 cm), Lateral shift (15°)" },
          { label: "Chest / Pelvic Break", value: "Manual thoracic breakaway with lock and release lever" },
          { label: "Ankle Rest", value: "Pneumatic gas-spring extension (up to 25 cm extension)" },
        ],
      },
      {
        category: "Electrical & Build",
        items: [
          { label: "Actuator Motor", value: "Linak® Medical Grade low-noise electric actuator (Made in Denmark)" },
          { label: "Input Voltage", value: "110–240 V AC, 50/60 Hz universal power" },
          { label: "Frame Material", value: "Heavy-gauge robotic welded cold-rolled tubular steel" },
          { label: "Upholstery", value: "Med-Grade flame retardant, antimicrobial PU leather" },
        ],
      },
      {
        category: "Warranty & Support",
        items: [
          { label: "Frame Warranty", value: "10 Years Structural Frame Guarantee" },
          { label: "Actuators & Electronics", value: "3 Years Comprehensive Commercial Replacement" },
          { label: "Regulatory Compliance", value: "CE Medical Device Class I, ISO 13485" },
        ],
      },
    ],
    whatsIncluded: [
      "ProAdjust Chiropractic Table fully assembled with quad-drop assembly",
      "Dual bilateral foot-bar elevation actuation rings",
      "Ergonomic cervical paper dispenser and integrated tear-off bar",
      "Comprehensive calibration manual and drop-tension maintenance toolkit",
      "Commercial clinical warranty registration and validation certificate",
    ],
    protocol: {
      recommendedDuration: "15 to 30 minutes per adjustment session",
      frequency: "As clinically prescribed in patient rehabilitation plan",
      preparation: [
        "Instruct patient to remove heavy belts, shoes, and hard pocket items.",
        "Set table height to match practitioner's standing metacarpophalangeal joint level.",
        "Calibrate drop-tension dials to match patient's body mass before applying thrust.",
      ],
      protocolSteps: [
        { step: "Patient Positioning", instruction: "Assist patient onto table prone; adjust headpiece width and extend ankle rest to alleviate pelvic tilt." },
        { step: "Assessment & Pre-Drop", instruction: "Perform static palpation and motion testing; cock appropriate drop section and dial in desired spring resistance." },
        { step: "HVLA Adjustment", instruction: "Deliver high-velocity low-amplitude thrust in line of drive; verify joint cavitation and post-adjustment motion." },
      ],
      contraindications: [
        "Severe acute bone fracture or acute spinal cord compression.",
        "Advanced osteopenia/osteoporosis without gentle low-force mobilization protocols.",
        "Suspected vertebral artery dissection or severe unmanaged myelopathy.",
      ],
    },
    suitableEnvironments: [
      { type: "Chiropractic Clinics", description: "The daily workhorse table for high-volume spinal care and adjustment protocols." },
      { type: "Physiotherapy & Physical Rehabilitation", description: "Assists in manual spinal mobilization, facet unweighting, and post-injury realignment." },
      { type: "Elite Sports Team Training Rooms", description: "Rapid pre-game spinal tune-ups and post-match musculoskeletal alignment for pro athletes." },
    ],
    faqs: [
      {
        question: "Can the drop tension be adjusted for lighter or pediatric patients?",
        answer: "Yes. Every drop segment features individual micro-adjusting tension knobs that allow the doctor to tune resistance seamlessly from featherlight releases up to heavyweight athletic settings.",
      },
      {
        question: "How quiet is the electric elevation motor during patient treatment?",
        answer: "The table utilizes premium Danish Linak® medical actuators operating below 45 dB, enabling whisper-quiet height transitions that never startle anxious patients.",
      },
      {
        question: "What maintenance do the mechanical drops require?",
        answer: "The drop mechanisms are self-lubricating sealed assemblies. A simple annual visual inspection and light silicone wipe ensure decades of crisp, flawless mechanical action.",
      },
    ],
    relatedProductIds: [
      "flexadjust-chiropractic-table",
      "upright-rehabilitation-tilt-table",
      "gp-normatec-3-full-body",
      "apex-full-body-massage-chair",
    ],
  },

  "gp-normatec-3-full-body": {
    id: "gp-normatec-3-full-body",
    subtitle: "Turnkey Dynamic Air Compression System (Legs, Hips & Arms)",
    tagline: "Biomimetic sequential pulse compression designed to accelerate venous return, flush metabolic waste, and reduce DOMS.",
    overview: [
      "The GreenPulse Normatec 3 Full Body is an elite dynamic pneumatic compression system trusted globally by Olympic athletes, premier physical therapy clinics, and luxury recovery lounges.",
      "Featuring precision overlapping compression chambers that encase the full legs, hips/lower torso, and both arms, the system replicates the body's natural venous muscle pumps to dramatically enhance lymphatic drainage and circulatory fluid return.",
      "With 7 customizable pressure intensity tiers, ZoneBoost™ targeted pressure holding, and Bluetooth mobile app integration, users receive medical-grade sequential compression tailored to their fatigue levels.",
    ],
    mechanismOfAction: {
      heading: "Sequential Biomimetic Pulse Technology",
      description: "Unlike static compression that squeezes the whole limb simultaneously, Normatec pulses sequentially along the limb, holding pressure to prevent fluid backflow before releasing.",
      points: [
        "Pulsing action mimics the muscle pump mechanism of the calves, mobilizing fluid.",
        "Gradient holding prevents backflow of interstitial lymphatic fluid toward distal limbs.",
        "Cyclic release allows normal vascular refill between successive compression waves.",
        "Significantly decreases systemic blood lactate levels and muscle stiffness within 20 minutes.",
      ],
    },
    features: [
      {
        title: "Full-Body Tri-Limb Configuration",
        description: "Includes pair of 5-chamber leg boots, contoured hip/pelvic attachment, and dual full-arm sleeves.",
        iconName: "Layers",
      },
      {
        title: "ZoneBoost™ Targeted Therapy",
        description: "Adds an extra 60 seconds of localized maximum pressure to specific fatigued muscle zones.",
        iconName: "Target",
      },
      {
        title: "Hyper-Quiet Digital Compressor",
        description: "Whisper-quiet pneumatic pump delivers rapid, smooth air displacement without intrusive buzzing.",
        iconName: "VolumeX",
      },
      {
        title: "Smart Bluetooth Connected App",
        description: "Save custom recovery protocols, track session analytics, and adjust pressure chambers via iOS/Android.",
        iconName: "Smartphone",
      },
    ],
    benefits: [
      {
        title: "Accelerated Fluid Clearance",
        description: "Mobilizes interstitial fluid pooling, drastically reducing edema and leg heaviness.",
        metric: "2x Lymphatic Flow",
      },
      {
        title: "Substantial DOMS Reduction",
        description: "Flushes exercise-induced metabolic by-products, restoring muscle suppleness quickly.",
        metric: "-45% Muscle Soreness",
      },
      {
        title: "Improved Joint Range of Motion",
        description: "Softens tight myofascial tissues, restoring hip, knee, and ankle mobility immediately.",
        metric: "+15% Active ROM",
      },
      {
        title: "Passive Relaxing Recovery",
        description: "Permits restorative downtime in recovery lounges while treatment takes place automatically.",
        metric: "Hands-Free Therapy",
      },
    ],
    specGroups: [
      {
        category: "Technical Parameters",
        items: [
          { label: "Compression Pressure Range", value: "30 mmHg to 110 mmHg (7 calibrated intensity levels)" },
          { label: "Chamber Architecture", value: "5 overlapping pneumatic zones per limb with seamless interior" },
          { label: "Battery Life", value: "Up to 3 hours continuous cordless operation per charge" },
          { label: "Recharge Time", value: "Approx. 2 hours to 100% capacity" },
        ],
      },
      {
        category: "Attachments & Sizing",
        items: [
          { label: "Leg Boots", value: "Standard size fits individuals 5'4\" to 6'3\" (Tall sizes available)" },
          { label: "Arm Attachments", value: "Pair of full-arm sleeves with contoured shoulder harnesses" },
          { label: "Hip Attachment", value: "Dual-zone pelvic/lower back adjustable belt with heavy-duty zippers" },
          { label: "Hose Connectors", value: "Quick-snap airtight snaplock pneumatic couplings" },
        ],
      },
      {
        category: "Weight & Portability",
        items: [
          { label: "Base Unit Weight", value: "1.45 kg (Ultra-portable control console)" },
          { label: "Total Package Weight", value: "6.8 kg (Including all attachments and charging unit)" },
          { label: "Power Supply", value: "Universal 100–240 V, 50/60 Hz switching power adapter" },
          { label: "TSA Compliant", value: "Approved for carry-on airline travel with battery safeguards" },
        ],
      },
      {
        category: "Warranty & Support",
        items: [
          { label: "Warranty", value: "2 Years Manufacturer Commercial Warranty on pump & attachments" },
          { label: "Certifications", value: "FDA Class II Medical Device cleared, CE certified" },
        ],
      },
    ],
    whatsIncluded: [
      "Normatec 3 compact digital compression control unit",
      "Pair of 5-chamber dynamic compression leg boots",
      "Pair of dynamic compression full-arm attachments",
      "Dynamic compression hip/pelvic lower-back attachment",
      "High-pressure flexible pneumatic connector hosing",
      "Worldwide universal power adapter with regional plug kit",
      "Quick start reference protocol manual and travel storage duffel",
    ],
    protocol: {
      recommendedDuration: "20 to 45 minutes",
      frequency: "Daily post-exercise, or 3 times per week for general circulatory wellness",
      preparation: [
        "Wear clean, dry athletic compression leggings or breathable socks.",
        "Ensure hose connectors click firmly into the base unit until latch engages.",
        "Recline comfortably in a lounge chair or on a therapy mat with legs level or elevated.",
      ],
      protocolSteps: [
        { step: "Calibration", instruction: "System runs a 60-second diagnostic inflation to map limb volume and contour precisely." },
        { step: "Sequential Pulsing", instruction: "Chambers inflate from foot upward, pulsing rhythmically before venting sequentially." },
        { step: "Completion", instruction: "Zippers unlock effortlessly upon completion for instant sensation of light, refreshed limbs." },
      ],
      contraindications: [
        "Suspected or acute Deep Vein Thrombosis (DVT) or phlebothrombosis.",
        "Active acute pulmonary edema or severe congestive cardiac failure.",
        "Open wounds, active infected lesions, or fresh surgical incisions on limbs.",
      ],
    },
    suitableEnvironments: [
      { type: "Commercial Recovery Lounges", description: "High-throughput, plug-and-play recovery station yielding high customer satisfaction." },
      { type: "Gyms & CrossFit Boxes", description: "Immediate athlete post-workout recovery zone for quick turnarounds between training sessions." },
      { type: "Physical Therapy & Orthopedic Clinics", description: "Post-operative lymphatic drainage, swelling management, and joint mobilization." },
    ],
    faqs: [
      {
        question: "Can multiple attachments be used at the same time?",
        answer: "The base console powers one set of attachments at a time (e.g., both legs, both arms, or the hip piece) to guarantee consistent high-pressure pneumatic delivery to each chamber.",
      },
      {
        question: "How loud is the pump when relaxing or reading?",
        answer: "Normatec 3 is engineered with acoustic dampening that keeps noise under 48 dBA—comparable to a gentle refrigerator hum, making it ideal for quiet spa recovery rooms.",
      },
      {
        question: "Can the fabric be sanitized between gym or clinic guests?",
        answer: "Yes. The interior and exterior are crafted from medical-grade ballistic nylon with wipedown-ready laminates compatible with standard alcohol-free surface sanitizing wipes.",
      },
    ],
    relatedProductIds: [
      "gpulse-normatec-elite-legs",
      "gsoft-compression-calf",
      "halo-2-infrared-wellness-cabin",
      "apex-full-body-massage-chair",
    ],
  },

  "apex-full-body-massage-chair": {
    id: "apex-full-body-massage-chair",
    subtitle: "Flagship 4D Dual-Core AI Zero-Gravity Massage Chair",
    tagline: "Biometric optical body scanning, zero-gravity weightlessness, and heated multi-axis quad-roller deep tissue release.",
    overview: [
      "The Apex Full-Body Massage Chair is our flagship robotic restorative seating system, bridging the gap between clinical physical therapy and opulent executive relaxation.",
      "Driven by an advanced AI micro-processor and optical acupressure sensors, the chair dynamically maps the occupant's spinal curvature, shoulder height, and muscular tension points in 30 seconds prior to initiating massage programs.",
      "An extended 138 cm hyper-curved SL-track guides heated quad-rollers from the base of the cranium all the way down through the gluteal muscles and hamstrings, while 64 dual-layer airbags deliver rhythmic compression to arms, hips, calves, and feet.",
    ],
    mechanismOfAction: {
      heading: "4D Mechanical Myofascial Release & Zero-G Decompression",
      description: "Combining 4-dimensional roller articulation with 165° NASA-inspired zero-gravity tilt positions the knees above the heart, eliminating axial spinal compression.",
      points: [
        "Zero-gravity angle reduces gravitational pressure on intervertebral discs to near zero.",
        "Deep 4D silicone rollers knead, tap, roll, and perform shiatsu down to 12cm into deep myofascia.",
        "Carbon-fibre graphene lumbar and calf heating elevates local tissue elasticity.",
        "Triple-stage enclosed foot rollers stimulate plantar reflexology zones and venous return.",
      ],
    },
    features: [
      {
        title: "Extended 138cm Hyper-SL Track",
        description: "Seamless roller travel extending from cervical vertebrae through lumbar spine down to lower hamstrings.",
        iconName: "Compass",
      },
      {
        title: "Dual-Stage Zero-Gravity Incline",
        description: "Two clinical zero-gravity tilt stages distributing total body weight evenly across the entire frame.",
        iconName: "Maximize",
      },
      {
        title: "64 Airbag Compression Array",
        description: "Envelops shoulders, forearms, hips, calves, and feet in rhythmic cyclical air pressure waves.",
        iconName: "ShieldCheck",
      },
      {
        title: "Graphene Rapid Thermal Heat",
        description: "Instantaneous far-infrared heat across the lower back and calves enhances muscle relaxation.",
        iconName: "Flame",
      },
    ],
    benefits: [
      {
        title: "Spinal Decompression & Alignment",
        description: "Relieves chronic lumbar compressive fatigue caused by prolonged sitting or intense training.",
        metric: "Zero-G Relief",
      },
      {
        title: "Targeted Trigger Point Relief",
        description: "Dissolves stubborn myofascial knots along the cervical, levator scapulae, and piriformis muscles.",
        metric: "12cm Roller Depth",
      },
      {
        title: "Stress & Cortisol Reduction",
        description: "Induces deep autonomic relaxation, significantly lowering salivary cortisol and systolic tension.",
        metric: "-35% Stress Index",
      },
      {
        title: "Circulatory & Plantar Rejuvenation",
        description: "Triple foot rollers and calf kneading relieve tired, swollen feet and restore plantar vitality.",
        metric: "Full Plantar Reflexology",
      },
    ],
    specGroups: [
      {
        category: "Dimensions & Spatial Requirements",
        items: [
          { label: "Upright Dimensions", value: "155 cm (L) × 82 cm (W) × 124 cm (H)" },
          { label: "Reclined Dimensions", value: "192 cm (L) × 82 cm (W) × 98 cm (H)" },
          { label: "Zero-Wall Clearance", value: "Requires only 5 cm clearance from rear wall (Space-saving slide)" },
          { label: "Net Chair Weight", value: "128 kg" },
          { label: "Maximum User Weight", value: "160 kg (350 lbs)" },
        ],
      },
      {
        category: "Massage Mechanics & Programs",
        items: [
          { label: "Track Architecture", value: "138 cm Ergonomic SL-Track (High-tensile alloy rail)" },
          { label: "Roller Mechanism", value: "4D Quad-head heated silicone roller mechanism with 6 speed levels" },
          { label: "Airbag Count", value: "64 Full-body dual-layer TPU compression airbags" },
          { label: "Auto Programs", value: "24 Curated clinical programs (Recovery, Deep Tissue, Thai Stretch, etc.)" },
        ],
      },
      {
        category: "Electronics & Audio",
        items: [
          { label: "Control System", value: "7-inch HD touchscreen tablet + Quick armrest dial + Voice control" },
          { label: "Sound System", value: "Hi-Fi Bluetooth stereo speakers embedded into headrest surround" },
          { label: "Device Charging", value: "Wireless Qi fast-charging pad on armrest + USB charging port" },
          { label: "Power Draw", value: "220–240 V AC, 50/60 Hz, 220 Watts operating" },
        ],
      },
      {
        category: "Materials & Warranty",
        items: [
          { label: "Upholstery", value: "Breathable, wear-resistant medical-grade Eco-Microfiber Leather" },
          { label: "Warranty", value: "3 Years Full Commercial Replacement Warranty on motors & chassis" },
          { label: "Certifications", value: "CE, RoHS, FCC, ISO 9001" },
        ],
      },
    ],
    whatsIncluded: [
      "Apex Full-Body 4D Massage Chair with integrated retractable footrest",
      "7-inch touch control console with articulated aluminum mounting arm",
      "Dedicated wireless smartphone charging deck and quick-dial armrest knob",
      "Hi-Fi headrest Bluetooth surround sound system",
      "Detachable head cushion and lumbar support comfort padding",
      "Heavy-duty power cable, surge protection module, and user protocol manual",
    ],
    protocol: {
      recommendedDuration: "15 to 30 minutes",
      frequency: "Daily for stress relief, or 3 times per week for deep musculoskeletal recovery",
      preparation: [
        "Wear comfortable, non-restrictive clothing without sharp studs, buttons, or metal zippers.",
        "Empty pockets and remove jewelry, watches, and bulky neckwear.",
        "Settle into the chair so the lower back is flush against the lumbar backrest.",
      ],
      protocolSteps: [
        { step: "Optical Scan", instruction: "Hold still for 30 seconds as the optical sensor determines shoulder height and spine curve." },
        { step: "Zero-G Initiation", instruction: "Select desired preset program; chair reclines to zero-gravity and commences rhythmic kneading." },
        { step: "Completion", instruction: "Chair automatically returns to gentle upright exit position at the end of the session." },
      ],
      contraindications: [
        "Unstable acute spinal fractures, acute herniations, or recent spinal fusion (< 6 months).",
        "Implanted cardiac pacemaker (maintain distance from magnetic speaker drivers).",
        "Severe deep vein thrombosis (DVT) or active unexplained calf inflammation.",
      ],
    },
    suitableEnvironments: [
      { type: "Executive Corporate Suites", description: "Rapid 15-minute mental reset and muscular decongestion for high-performance leaders." },
      { type: "Luxury Hotel Spas & Lounges", description: "Self-service premium amenity that delights guests without requiring therapist labor." },
      { type: "Elite Athletic Training Facilities", description: "Unweights spine and releases tightness in gluteals, quads, and calves post-session." },
    ],
    faqs: [
      {
        question: "Does the chair need a lot of space behind it to recline?",
        answer: "No. Apex is engineered with a Zero-Wall sliding pivot chassis that slides forward as it reclines, requiring only 5 cm of clearance between the backrest and the wall.",
      },
      {
        question: "Can the roller intensity be reduced for sensitive users?",
        answer: "Yes. The 4D mechanism provides 6 micro-adjustable depth stages, and additional removable buffer pads are included to soften intensity for gentler restorative sessions.",
      },
      {
        question: "How tall or short of a person can use the chair comfortably?",
        answer: "The automatic motorized footrest extends up to 20 cm, comfortably accommodating individuals ranging from 150 cm (4'11\") to 198 cm (6'6\").",
      },
    ],
    relatedProductIds: [
      "vector-sl-massage-chair",
      "elevate-massage-recliner",
      "halo-2-infrared-wellness-cabin",
      "gp-normatec-3-full-body",
    ],
  },

  "gp-juvo-b4-power-wheelchair": {
    id: "gp-juvo-b4-power-wheelchair",
    subtitle: "Configurable Rear-Wheel Drive Everyday Mobility Platform",
    tagline: "Engineered German-inspired stability, modular ergonomic seating, and outdoor/indoor multi-terrain agility.",
    overview: [
      "The GP Juvo B4 Power Wheelchair is an exceptionally reliable motorized mobility platform designed to deliver dignified, effortless daily independence across domestic, clinical, and outdoor environments.",
      "Engineered with a modular chassis and low centre of gravity, the Juvo B4 effortlessly negotiates threshold transitions, outdoor curb ramps, cobblestones, and tight indoor doorways with predictable stability.",
      "Equipped with advanced programmable electronics, customizable seating widths, adjustable backrest angles, and high-torque low-maintenance motors, it adapts seamlessly to degenerative neuromuscular and orthopedic mobility needs.",
    ],
    mechanismOfAction: {
      heading: "Low-Center-of-Gravity Chassis & Drive Dynamics",
      description: "Rear-wheel drive configuration paired with drive-wheel suspension dampens road vibrations, ensuring smooth traction and consistent directional tracking.",
      points: [
        "Rear-wheel drive provides superior directional stability and intuitive steering on slopes.",
        "Drive-wheel swing axle suspension absorbs shock from uneven terrain.",
        "Programmable joystick control allows micro-tuning of acceleration curves and turning sensitivity.",
        "Automatic electromagnetic failsafe brakes engage instantly whenever joystick is released.",
      ],
    },
    features: [
      {
        title: "Multi-Terrain Rear-Wheel Drive",
        description: "14-inch pneumatic drive wheels with puncture-proof front casters handle grass, gravel, and urban curbs.",
        iconName: "Compass",
      },
      {
        title: "Modular Ergonomic Seating",
        description: "Seat width, depth, back angle, and armrest heights adjust without requiring replacement components.",
        iconName: "Sliders",
      },
      {
        title: "Extended Driving Range",
        description: "Heavy-duty 53 Ah or 63 Ah gel batteries offer up to 35 km of daily driving independence on a single charge.",
        iconName: "BatteryCharging",
      },
      {
        title: "Precision Programmable Joystick",
        description: "Intuitive VR2 controller with diagnostic LCD, battery indicator, and multiple drive speed profiles.",
        iconName: "Crosshair",
      },
    ],
    benefits: [
      {
        title: "Unrestricted Personal Autonomy",
        description: "Empowers users to navigate indoor living spaces and outdoor communities without external assistance.",
        metric: "35 km Range",
      },
      {
        title: "Postural & Pressure Management",
        description: "Anatomical seat contours and pressure-relieving cushions prevent pressure ulcer formation.",
        metric: "Ergonomic Positioning",
      },
      {
        title: "Effortless Threshold Crossing",
        description: "Overcomes curbs up to 50 mm without tipping hazard, keeping the user level and secure.",
        metric: "50mm Curb Clearance",
      },
      {
        title: "Smooth Urban Navigation",
        description: "Tight 85 cm turning radius permits effortless rotation inside standard elevators and tight hallways.",
        metric: "85cm Turning Radius",
      },
    ],
    specGroups: [
      {
        category: "Drive & Performance",
        items: [
          { label: "Drive Configuration", value: "Rear-Wheel Drive (RWD) with dual 250W motors" },
          { label: "Maximum Speed", value: "6 km/h (Standard) or 10 km/h (High-speed option)" },
          { label: "Operating Range", value: "Up to 35 km (Depending on user weight and terrain)" },
          { label: "Max Obstacle / Curb Height", value: "50 mm (60 mm with optional curb climber)" },
          { label: "Max Incline Capability", value: "8° (14% grade) safe slope rating" },
        ],
      },
      {
        category: "Dimensions & Weight",
        items: [
          { label: "Overall Width", value: "59.5 cm to 64 cm (Slim enough for standard 70cm doors)" },
          { label: "Overall Length", value: "107 cm (Including footplates)" },
          { label: "Turning Radius", value: "85 cm" },
          { label: "Seat Width Range", value: "38 cm to 54 cm (Adjustable in 2cm increments)" },
          { label: "Seat Depth Range", value: "40 cm to 50 cm" },
          { label: "Maximum User Weight", value: "140 kg (308 lbs) / Heavy-duty option up to 160 kg" },
        ],
      },
      {
        category: "Electrical & Battery",
        items: [
          { label: "Battery Chemistry", value: "Dual 12V 53Ah Sealed Maintenance-Free AGM Gel Batteries" },
          { label: "Charger", value: "Off-board 8A smart charger with automatic shutoff" },
          { label: "Braking System", value: "Intelligent regenerative braking + fail-safe electromagnetic park brake" },
          { label: "Crash Test Compliance", value: "ISO 7176-19 crash-tested for occupied transport in motor vehicles" },
        ],
      },
      {
        category: "Warranty & Certification",
        items: [
          { label: "Chassis Guarantee", value: "5 Years Structural Chassis Warranty" },
          { label: "Electronics & Motors", value: "2 Years Commercial Warranty" },
          { label: "Medical Device Class", value: "CE Medical Class I, MDR Compliant" },
        ],
      },
    ],
    whatsIncluded: [
      "GP Juvo B4 base chassis with dual high-torque German drive motors",
      "Ergonomic adjustable seating system with contoured backrest cushion",
      "Swing-away VR2 joystick controller mount (ambidextrous configuration)",
      "Height and angle adjustable flip-back armrests with soft PU pads",
      "Split individual swing-away, height-adjustable composite footplates",
      "High-output automatic smart battery charger and safety lap belt",
      "Comprehensive operator handbook and clinical adjustment toolkit",
    ],
    protocol: {
      recommendedDuration: "All-day mobility support",
      frequency: "Daily usage as primary personal transit",
      preparation: [
        "Charge battery overnight using the supplied 8A smart charger until the green LED illuminates.",
        "Adjust seat belt and armrest height to guarantee relaxed 90-degree elbow flexion at the joystick.",
        "Ensure tires are inspected for correct pneumatic pressure (approx. 35 PSI).",
      ],
      protocolSteps: [
        { step: "Power On", instruction: "Depress power switch; observe battery gauge and select appropriate indoor/outdoor speed profile (1–5)." },
        { step: "Navigation", instruction: "Gently deflect joystick in desired travel direction; speed scales proportionally with joystick deflection." },
        { step: "Stopping", instruction: "Release joystick to centre position; regenerative braking decelerates smoothly before park brake snaps locked." },
      ],
      contraindications: [
        "Severe cognitive impairment preventing safe directional control.",
        "Operating on gradients exceeding 8 degrees or near uncurbed open water.",
        "Driving across deep loose sand or soft mud exceeding caster radius.",
      ],
    },
    suitableEnvironments: [
      { type: "Senior Living Residences", description: "Compact dimensions facilitate smooth apartment and dining hall navigation." },
      { type: "Hospitals & Rehabilitation Facilities", description: "Configurable patient discharge platform promoting autonomous mobility." },
      { type: "Independent Homecare", description: "Durable, low-maintenance outdoor/indoor wheelchair for active daily routines." },
    ],
    faqs: [
      {
        question: "Can this wheelchair be transported in an accessible van or taxi?",
        answer: "Yes. The Juvo B4 is fully crash-tested and certified under ISO 7176-19, equipped with four integrated tie-down eyelets for secure vehicle transit while occupied.",
      },
      {
        question: "Can the joystick controller be moved to the left hand?",
        answer: "Yes. The swing-away controller mounting arm can be switched between right and left armrests in less than 5 minutes using the included hex key.",
      },
      {
        question: "What happens if the battery runs out while away from home?",
        answer: "Both drive motors feature manual freewheel disengage levers located above the rear wheels, allowing an attendant to push the wheelchair easily in neutral mode.",
      },
    ],
    relatedProductIds: [
      "gpw-movelite-d25-power-wheelchair",
      "gpw-comfortride-d26-power-wheelchair",
      "gpw-heavy-duty-d60-power-wheelchair",
      "elevate-massage-recliner",
    ],
  },
};

// Helper function to synthesize detailed data for any remaining products that use default architecture
export function getProductDetail(id: ProductId): ProductDetail {
  if (productDetails[id]) {
    return productDetails[id];
  }

  return synthesizeProductDetail(products.find((p) => p.id === id) || products[0]);
}

/** Generic detail content for a product without hand-written details. */
export function synthesizeProductDetail(baseProduct: Product, all: Product[] = products): ProductDetail {
  // Intelligent fallback synthesis based on category and specs
  const isInfrared = baseProduct.category === "Wellness & Recovery Technology" && (baseProduct.name.toLowerCase().includes("cabin") || baseProduct.name.toLowerCase().includes("sauna"));
  const isMassage = baseProduct.name.toLowerCase().includes("massage") || baseProduct.name.toLowerCase().includes("recliner");
  const isCompression = baseProduct.name.toLowerCase().includes("compression") || baseProduct.name.toLowerCase().includes("normatec") || baseProduct.name.toLowerCase().includes("calf");
  const isMobility = baseProduct.category === "Mobility & Assistive Technology";
  const isRehab = baseProduct.category === "Rehabilitation & Physical Therapy";

  return {
    id: baseProduct.id,
    subtitle: `${baseProduct.tiers.join(" & ")} Tier ${baseProduct.category}`,
    tagline: `Professional-grade ${baseProduct.name.toLowerCase()} engineered for modern longevity, recovery, and clinical wellness spaces.`,
    overview: [
      baseProduct.description,
      `Engineered to meet the stringent demands of high-throughput commercial wellness facilities and discerning private estates, the ${baseProduct.name} integrates clinical-grade reliability with contemporary minimalist ergonomics.`,
      `Every component is selected for longevity, acoustic tranquility, and seamless integration into turnkey recovery suites.`,
    ],
    mechanismOfAction: {
      heading: isInfrared ? "Targeted Thermal Photobiomodulation" : isMassage ? "AI-Guided Mechanical Acupressure" : isCompression ? "Pneumatic Gradient Hemodynamic Flush" : isMobility ? "Precision Electric Drive Mobility" : "Ergonomic Therapeutic Support",
      description: `The ${baseProduct.name} harnesses calibrated therapeutic kinetics to optimize physiological recovery, decrease metabolic fatigue, and restore physical ease.`,
      points: [
        "Stimulates peripheral blood flow and lymphatic microcirculation.",
        "Relieves muscular tension, joint stiffness, and postural fatigue.",
        "Built with medical-grade components tested for 24/7 continuous duty cycles.",
        "Supports autonomic nervous system balance and physical relaxation.",
      ],
    },
    features: [
      {
        title: "Precision Engineering",
        description: `Crafted with heavy-duty structural components and calibrated therapeutic sensors for consistent results.`,
        iconName: "ShieldCheck",
      },
      {
        title: "Intuitive Digital Interface",
        description: `Simplified controls allowing effortless session setup, duration adjustment, and customized intensity levels.`,
        iconName: "Sliders",
      },
      {
        title: "Commercial-Grade Durability",
        description: `Built for continuous duty cycles in high-volume spas, athletic clubs, and clinical suites.`,
        iconName: "Award",
      },
      {
        title: "Rapid Hygienic Sanitation",
        description: `Non-porous, medical-grade surfaces enable fast, non-abrasive turnaround between consecutive guests.`,
        iconName: "Sparkles",
      },
    ],
    benefits: [
      {
        title: "Accelerated Recovery Time",
        description: "Flushes accumulated lactic acid and metabolic by-products to restore physical readiness.",
        metric: "Fast Restoration",
      },
      {
        title: "Deep Physical Ease",
        description: "Dissolves systemic muscle tightness and relieves spinal compressive strain.",
        metric: "Immediate Relief",
      },
      {
        title: "Enhanced Microcirculation",
        description: "Promotes localized vascular dilation and tissue oxygen delivery.",
        metric: "Active Circulation",
      },
      {
        title: "Commercial Reliability",
        description: "Zero maintenance downtime with modular parts and local technical support backing.",
        metric: "Turnkey Ready",
      },
    ],
    specGroups: [
      {
        category: "Primary Specifications",
        items: [
          { label: "Product Classification", value: baseProduct.category },
          { label: "Available Tiers", value: baseProduct.tiers.join(", ") },
          { label: "Key Features", value: baseProduct.specs.join(" • ") },
          { label: "Power Requirements", value: "220–240 V AC, 50/60 Hz Standard Grounded" },
        ],
      },
      {
        category: "Build & Materials",
        items: [
          { label: "Chassis / Enclosure", value: "Commercial-grade alloy / FSC-certified timber / medical polymer" },
          { label: "Surface Finish", value: "Antimicrobial, wipe-clean resilient formulation" },
          { label: "Operating Ambient Temp", value: "10°C to 40°C indoor climate-controlled room" },
          { label: "Safety Rating", value: "CE Marked, RoHS compliant, Low EMF engineered" },
        ],
      },
      {
        category: "Warranty & Support",
        items: [
          { label: "Standard Warranty", value: "2 Years Commercial Comprehensive Warranty" },
          { label: "Delivery & Setup", value: "Turnkey delivery, unpacking, and installation assistance" },
          { label: "Spare Parts Availability", value: "Guaranteed 10-year component supply chain" },
        ],
      },
    ],
    whatsIncluded: [
      `Primary ${baseProduct.name} unit with factory-tested core modules`,
      "Universal power supply cable and surge-protected electrical harness",
      "Digital operator console or wireless handheld controller",
      "Surface care microfiber kit and botanical sanitizing guidelines",
      "Full manufacturer user dossier and warranty registration credentials",
    ],
    protocol: {
      recommendedDuration: "15 to 45 minutes",
      frequency: "3 to 5 times weekly or per clinical program",
      preparation: [
        "Review user guide and verify correct room electrical supply.",
        "Ensure user is comfortably positioned and appropriate settings are dialed in.",
      ],
      protocolSteps: [
        { step: "Initiation", instruction: "Select desired intensity or auto program on the digital console." },
        { step: "Active Phase", instruction: "Remain relaxed and breathe deeply as the therapy sequence executes." },
        { step: "Conclusion", instruction: "Allow system to power down gracefully; wipe clean before subsequent session." },
      ],
      contraindications: [
        "Consult medical practitioner if carrying cardiac electronic implants or severe acute conditions.",
      ],
    },
    suitableEnvironments: [
      { type: "Wellness & Longevity Centres", description: "Acts as a core recovery modality for client health optimization." },
      { type: "Hotel Spas & Luxury Resorts", description: "Enhances private guest suite amenities with turnkey wellness technology." },
      { type: "Clinics & Physical Therapy", description: "Reliable equipment for assisted patient rehabilitation and musculoskeletal care." },
      { type: "Private Residences", description: "Bespoke home installation for private health and daily recovery routines." },
    ],
    faqs: [
      {
        question: `How quickly can the ${baseProduct.name} be installed and commissioned?`,
        answer: "GreenPulse Wellness provides turnkey white-glove delivery and assembly. Typical commissioning takes 1 to 3 hours depending on site logistics.",
      },
      {
        question: "What electrical requirements are needed?",
        answer: "The unit operates on standard 220–240V AC power. A dedicated 16A grounded circuit is recommended for continuous commercial usage.",
      },
      {
        question: "What warranty coverage is included?",
        answer: "Every unit includes a comprehensive commercial warranty covering all structural parts, electronics, and technical service support.",
      },
    ],
    relatedProductIds: all
      .filter((p) => p.id !== baseProduct.id && (p.category === baseProduct.category || p.tiers.some((t) => baseProduct.tiers.includes(t))))
      .slice(0, 4)
      .map((p) => p.id),
  };
}
