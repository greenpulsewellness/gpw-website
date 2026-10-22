import { products, type Product, type ProductId } from "./home";
import { lumaDetails } from "./luma-details";
import { mobilityDetails } from "./mobility-details";
import { deviceDetails } from "./device-details";
import { compressionDetails } from "./compression-details";
import { massageChairDetails } from "./massage-chair-details";
import { hbotDetails } from "./hbot-details";

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
  ...lumaDetails,
  ...mobilityDetails,
  ...deviceDetails,
  ...compressionDetails,
  ...massageChairDetails,
  ...hbotDetails,
  "infrared-sauna-single-full-spectrum-mstar": {
    id: "infrared-sauna-single-full-spectrum-mstar",
    subtitle: "Single-Person Full Spectrum Far Infrared Sauna",
    tagline: "Compact 90 × 90 cm personal recovery chamber built with hemlock, tourmaline-embedded carbon floor heat, and fresh-air oxygen ionization.",
    overview: [
      "The Halo 1 is engineered for apartments, master bedroom corners, and dedicated treatment rooms where space is at a premium but you still want a proper commercial-grade sweat. Taking up just 90 × 90 cm of floor area and standing 190 cm tall, it gives you a complete personal thermal cabin without needing a dedicated sauna room or renovations.",
      "The cabin is built from 100% natural kiln-dried Hemlock. Hemlock is a dense, straight-grained softwood that resists warping and splitting from humidity changes, stays cool to the touch on the outside, and has zero synthetic resins or chemical odors when warmed up. An 8 mm thick tempered safety glass door seals with a magnetic strip, keeping the interior warm while giving you a clean, clear view of your room.",
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
        title: "Solid Hemlock",
        description: "Solid kiln-dried hemlock with tongue-and-groove joinery that resists splitting and releases no harsh chemical fumes when hot.",
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
        category: "Assembly",
        items: [
          { label: "Assembly Type", value: "Modular tongue-and-groove buckle-latch system (approx. 45 min setup)" },
        ]
      }
    ],
    whatsIncluded: [
      "Prefabricated modular hemlock wall, floor, and roof panels with built-in heaters",
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
        question: "How do I clean and maintain the hemlock wood?",
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
      "cryo-mini-cryome",
      "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
    ]
  },

  "infrared-sauna-double-full-spectrum-mstar": {
    id: "infrared-sauna-double-full-spectrum-mstar",
    subtitle: "Two-Person American Full Spectrum Infrared Sauna",
    tagline: "Spacious 120 × 105 cm two-person cabin with American full-spectrum heating, tourmaline floor integration, and optional hemlock or red cedar.",
    overview: [
      "The Halo 2 is our most popular two-person far infrared sauna, engineered for private homes, wellness retreats, and commercial spa suites. With exterior dimensions of 120 cm wide, 105 cm deep, and 190 cm high, it provides generous, comfortable bench seating for two adults to sit side by side without feeling cramped.",
      "Powered by an advanced 1750 W American full-spectrum heating system, the Halo 2 distributes near-, mid-, and far-infrared wavelengths evenly across your entire body. The radiant panels are placed along the backrest, front columns, side walls, and under the bench, ensuring complete 360-degree thermal coverage with minimal cold spots. It can be ordered in Hemlock or fragrant Western Red Cedar, both finished with a full-height 8 mm tempered glass front that maximizes natural light and spaciousness.",
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
        title: "Hemlock or Red Cedar",
        description: "Available in responsibly chosen Hemlock or aromatic, rot-resistant Western Red Cedar with precision tongue-and-groove joinery.",
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
          { label: "Timber Options", value: "Hemlock (Standard) / Western Red Cedar (Optional Upgrade)" }
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
          { label: "Assembly Architecture", value: "Modular tongue-and-groove panels with quick-snap locking buckles" },
        ]
      }
    ],
    whatsIncluded: [
      "Prefabricated modular wall, floor, and ceiling timber panels in Hemlock or Red Cedar",
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
        question: "What is the difference between Hemlock and Western Red Cedar?",
        answer: "Hemlock is a durable, straight-grained, hypoallergenic timber with a light blonde color and virtually no natural aroma or resin. Western Red Cedar is richer in color, naturally aromatic, and possesses natural oils that make it exceptionally resistant to moisture and mold. Both perform beautifully in dry infrared saunas."
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
      "cryo-mini-cryome",
    ]
  },

  "infrared-sauna-double-combination-mstar": {
    id: "infrared-sauna-double-combination-mstar",
    subtitle: "Two-Person Red Cedar Ceramic & Carbon Hybrid Infrared Sauna",
    tagline: "Dual-technology 120 × 105 cm sauna combining fast-acting ceramic tube heaters with wide-surface carbon panels in premium Western red cedar.",
    overview: [
      "The Halo Hybrid 2 combines two complementary infrared heating technologies inside a handcrafted red cedar cabin. While standard saunas rely entirely on either carbon panels or ceramic rods, the Hybrid 2 combines high-intensity ceramic emitters behind your back for focused, direct warmth with broad-spectrum carbon wall panels that envelop the entire cabin in consistent, gentle far-infrared heat.",
      "Built from genuine kiln-dried Western Red Cedar (with Hemlock available on request), this model stands out with its rich reddish-brown wood grain, natural aromatic cedar scent, and inherent resistance to fungal moisture and warping. At 120 cm wide, 105 cm deep, and 190 cm high with a gross weight of 150 kg, it offers a solid, substantial feel with an 8 mm tempered glass door and side viewing glass.",
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
          { label: "Wood Construction", value: "Premium Western Red Cedar (Hemlock optional)" }
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
        category: "Assembly",
        items: [
          { label: "Assembly Architecture", value: "Precision pre-fabricated tongue-and-groove modular buckle system" },
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
        question: "Why choose Western Red Cedar over Hemlock?",
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
      "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
    ]
  },

  "infrared-sauna-group-full-spectrum-mstar": {
    id: "infrared-sauna-group-full-spectrum-mstar",
    subtitle: "Three-Person Luxury Full Spectrum Quartz Combine Sauna",
    tagline: "Spacious 150 × 120 cm three-person wellness cabin combining far-infrared carbon panels with full-spectrum quartz heating, starlight chromotherapy, and oxygen ionization.",
    overview: [
      "The Halo 3 is our premier three-person luxury infrared sauna, built for commercial recovery centers, luxury villas, boutique fitness clubs, and families. With generous dimensions of 150 cm wide, 120 cm deep, and 190 cm high, it provides ample room for three adults to sit comfortably or for two adults to stretch out with legs extended on the extra-wide bench.",
      "Engineered with a powerful 2100 W hybrid heating array, the Halo 3 combines broad-surface far infrared carbon panels with high-output full-spectrum quartz heaters. The quartz tubes deliver immediate, penetrating near-, mid-, and far-infrared radiation that warms deep muscle tissue rapidly, while the carbon wall panels keep the ambient temperature steady and balanced without harsh hot spots.",
      "Available in premium Hemlock or Western Red Cedar, the cabin features a wide 8 mm tempered glass front that fills the interior with natural light and creates an open, welcoming environment. The floor integrates low-EMF carbon heating panels overlaid with natural tourmaline stones that warm the feet and release negative ions into the air.",
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
        title: "Hemlock or Red Cedar",
        description: "Precision-crafted from natural Hemlock or aromatic Western Red Cedar with tongue-and-groove joinery.",
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
          { label: "Timber Construction", value: "Hemlock (Standard) / Western Red Cedar (Optional Upgrade)" }
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
          { label: "Assembly Architecture", value: "Modular prefabricated tongue-and-groove panel system with buckle latches" },
        ]
      }
    ],
    whatsIncluded: [
      "Modular Hemlock or Western Red Cedar prefabricated panels with pre-mounted heaters",
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
      "cryo-mini-cryome",
    ]
  },

  "infrared-sauna-group-combination-mstar": {
    id: "infrared-sauna-group-combination-mstar",
    subtitle: "Three-Person Luxury Hybrid Quartz & Carbon Infrared Sauna",
    tagline: "Spacious 150 × 120 cm luxury cabin combining full-spectrum quartz heaters with wide-coverage carbon panels, red cedar craftsmanship, and starlight chromotherapy.",
    overview: [
      "The Halo Hybrid 3 is an extra-wide three-person thermal sanctuary engineered for luxury residences, commercial wellness lounges, athletic clubs, and health resorts. Measuring 150 cm wide, 120 cm deep, and 190 cm high with a gross crated weight of 153 kg, this unit delivers the ultimate multi-person infrared session with generous legroom and shoulder clearance.",
      "At the core of the Hybrid 3 is an advanced dual-system heating matrix combining high-intensity full-spectrum quartz emitters with large-format far-infrared carbon fiber wall panels. The quartz elements penetrate deep into tight lumbar muscles and spinal joints within seconds of turning on, while the low-EMF carbon panels blanket the entire interior in a smooth, continuous far-infrared field (drawing 2100 Watts on a standard single-phase 220V–240V line).",
      "Milled from premium Hemlock or Western Red Cedar with 8 mm architectural tempered glass, the cabin provides exceptional acoustic quiet and thermal efficiency. The floor is lined with carbon heating elements beneath natural tourmaline mineral stones, warming bare feet and releasing negative ions throughout your sweat session.",
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
          { label: "Timber Options", value: "Western Red Cedar or Hemlock (Tongue & Groove)" }
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
        category: "Assembly",
        items: [
          { label: "Assembly Type", value: "Modular tongue-and-groove buckle-latch system" },
        ]
      }
    ],
    whatsIncluded: [
      "Prefabricated modular Western Red Cedar or Hemlock panels with built-in heaters",
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
      "cryo-mini-cryome",
    ]
  },








  "cold-plunge-single-round-yg": {
    id: "cold-plunge-single-round-yg",
    subtitle: "Round Single-Person Cold Plunge Ice Bath",
    tagline: "A compact round ice bath with a 304 stainless steel tub, built-in 0.8 HP chiller and circulation filtration, cooling to 3 °C for indoor or outdoor spaces.",
    overview: [
      "The Arctic Ring is a single-person round cold plunge designed for gyms, spas, recovery studios and homes that want a dedicated cold-immersion station without a large footprint. The exterior measures 90 cm across and 75 cm high, with an interior of 82 cm across and 59 cm deep.",
      "The tub is lined with 304 stainless steel, and a waterproofed fabric cover keeps the water clean between sessions. A built-in 0.8 HP water chiller can bring the water down to 3 °C (37.4 °F), and a circulation and filtration system keeps the water moving.",
      "It is a plug-and-plunge unit suited to both indoor and outdoor installation. The exterior is finished with vertical panels and regulation barrel hoops, with premium cedar or hemlock options also offered.",
    ],
    mechanismOfAction: {
      heading: "Chilled, Filtered Water Immersion",
      description: "The Arctic Ring holds a body of water at a set cold temperature using its built-in chiller, while the circulation and filtration system keeps the water moving and clean between sessions.",
      points: [
        "Built-in 0.8 HP water chiller cools the water down to 3 °C (37.4 °F).",
        "Circulation filtration keeps water moving through the filter between uses.",
        "A 304 stainless steel interior gives a smooth, durable, easy-to-clean surface.",
        "A waterproofed fabric cover protects the water when the tub is not in use.",
      ],
    },
    features: [
      { title: "Temperature Control", description: "Cools the water down to 3 °C (37.4 °F) with the built-in 0.8 HP chiller.", iconName: "ThermometerSnowflake" },
      { title: "Indoor or Outdoor Use", description: "Suitable for installation indoors in a studio or outdoors in a garden or courtyard.", iconName: "Wind" },
      { title: "Circulation Filtration", description: "Water circulation and filtration system keeps the water moving.", iconName: "Sparkles" },
      { title: "Plug & Plunge", description: "Plug-and-use operation with no complicated installation.", iconName: "Zap" },
      { title: "Long-Lasting Tub", description: "304 stainless steel interior and regulation barrel hoops built for extended use.", iconName: "ShieldCheck" },
      { title: "Premium Wood Options", description: "Fine cedar or hemlock options available for the exterior.", iconName: "Trees" },
    ],
    benefits: [
      { title: "Post-Training Recovery Routine", description: "A dedicated cold-immersion station that supports a recovery routine after exercise.", metric: "Cold Immersion" },
      { title: "Compact Footprint", description: "A 90 × 75 cm round body fits studios, wellness corners and home spaces.", metric: "Ø 90 cm" },
      { title: "Easy Daily Care", description: "Stainless steel interior and fabric cover make routine cleaning simple.", metric: "304 Stainless" },
    ],
    specGroups: [
      {
        category: "Primary Specifications",
        items: [
          { label: "Model", value: "BST-1MDB (1 Person Ice Bath)" },
          { label: "Capacity", value: "1 person" },
          { label: "Water Chiller", value: "0.8 HP" },
          { label: "Lowest Water Temperature", value: "3 °C (37.4 °F)" },
          { label: "Filtration", value: "Circulation filtration system" },
          { label: "Installation", value: "Indoor or outdoor, plug & plunge" },
        ],
      },
      {
        category: "Dimensions & Build",
        items: [
          { label: "Exterior Dimensions", value: "90 × 75 cm (diameter × height)" },
          { label: "Interior Dimensions", value: "82 × 59 cm (diameter × depth)" },
          { label: "Interior Material", value: "304 stainless steel tub" },
          { label: "Exterior Material", value: "PS board with regulation barrel hoop (premium cedar / hemlock options)" },
          { label: "Cover", value: "Waterproofed fabric cover" },
        ],
      },
    ],
    whatsIncluded: [
      "BST-1MDB round ice bath tub with 304 stainless steel interior",
      "Built-in 0.8 HP water chiller",
      "Circulation filtration system",
      "Waterproofed fabric cover",
    ],
    protocol: {
      recommendedDuration: "As advised by your wellness professional",
      frequency: "Per your recovery programme",
      preparation: [
        "Check the water level and confirm the chiller has reached the set temperature.",
        "Make sure the unit is on a level surface with a suitable power supply.",
      ],
      protocolSteps: [
        { step: "Prepare", instruction: "Fill the tub, switch on the chiller and let the water reach the desired temperature." },
        { step: "Immerse", instruction: "Enter slowly and stay for the time recommended by your wellness professional." },
        { step: "Finish", instruction: "Exit carefully, warm up gradually, and cover the tub after use." },
      ],
      contraindications: [
        "Cold-water immersion is not suitable for everyone. Consult a medical professional first, especially if you have a heart or circulation condition.",
      ],
    },
    suitableEnvironments: [
      { type: "Gyms & Sports Centres", description: "A compact cold station beside training and recovery areas." },
      { type: "Spas & Wellness Centres", description: "A single-person plunge for contrast and recovery rituals." },
      { type: "Private Residences", description: "A round, self-contained cold plunge for home use, indoors or outdoors." },
    ],
    faqs: [
      { question: "How cold can the water get?", answer: "The built-in 0.8 HP chiller cools the water down to 3 °C (37.4 °F)." },
      { question: "Can it be used outdoors?", answer: "Yes. The Arctic Ring is suitable for both indoor and outdoor installation." },
      { question: "How many people can use it at once?", answer: "It is a single-person ice bath." },
    ],
    relatedProductIds: ["cold-plunge-tub-new-ice-bath", "cold-plunge-foldable-aircore", "cryo-mini-cryome"],
  },

  "cold-plunge-tub-new-ice-bath": {
    id: "cold-plunge-tub-new-ice-bath",
    subtitle: "Full-Size Composite Cold Plunge Tub",
    tagline: "A one-piece CNC-machined composite tub with purpose-designed joints, two-stage filtration and a safety drain, paired with a high-power chiller.",
    overview: [
      "The Arctic Tub is a full-size cold plunge designed as a flexible, powerful combination paired with the most powerful chiller in the range. The setup is simple and intelligent, built to deliver a smooth, cloud-like ice bath experience.",
      "The shell is a one-piece, CNC-machined composite tub made with custom-designed parts and a purpose-designed joint, and an integrated top filter housing makes filter replacement fast and easy.",
      "Water circulation is improved by purpose-designed water nozzles and return water ports, backed by a two-stage filtration system. The tub integrates a safety drain and bathtub design.",
    ],
    mechanismOfAction: {
      heading: "Circulated, Two-Stage Filtered Cold Water",
      description: "The Arctic Tub keeps chilled water circulating through purpose-designed nozzles and return ports, and passes it through a two-stage filtration system housed in the top of the unit.",
      points: [
        "Purpose-designed water nozzles and return ports improve circulation through the tub.",
        "Two-stage filtration keeps the water clean between sessions.",
        "An integrated top filter housing makes filter changes quick and simple.",
        "A safety drain is integrated into the tub design.",
      ],
    },
    features: [
      { title: "One-Piece Composite Shell", description: "Built from composite material as a one-piece CNC-machined shell.", iconName: "Layers" },
      { title: "Purpose-Designed Joint", description: "Custom-designed parts and a dedicated joint for a solid one-piece shell.", iconName: "ShieldCheck" },
      { title: "Integrated Top Filter Housing", description: "Fast and easy filter replacement from the top of the unit.", iconName: "Sliders" },
      { title: "Nozzles & Return Ports", description: "Water nozzles and return water ports are designed to enhance circulation.", iconName: "Wind" },
      { title: "Two-Stage Filtration", description: "A two-stage filtration system keeps the water clean.", iconName: "Sparkles" },
      { title: "Safety Drain", description: "Integrates a safety drain and bathtub design.", iconName: "Award" },
    ],
    benefits: [
      { title: "Roomy Full-Size Tub", description: "Up to 483 litres of capacity in a 170 × 80 cm footprint.", metric: "Up to 483 L" },
      { title: "Easy Filter Care", description: "Top-mounted filter housing speeds up routine maintenance.", metric: "Quick Swap" },
      { title: "Built for Commercial Spaces", description: "Composite one-piece shell and safety drain suit gyms, spas and recovery centres.", metric: "Durable Shell" },
    ],
    specGroups: [
      {
        category: "Tub Options",
        items: [
          { label: "Option 1 Capacity", value: "127.6 gal (483 L)" },
          { label: "Option 1 Dimensions", value: "170 × 80 × 66 cm (66.9 × 31.1 × 26 in)" },
          { label: "Option 2 Capacity", value: "111.2 gal (421 L)" },
          { label: "Option 2 Dimensions", value: "170 × 80 × 60 cm (66.9 × 31.1 × 24 in)" },
          { label: "Material", value: "Acrylic + fibre + resin composite" },
        ],
      },
      {
        category: "Filtration & Safety",
        items: [
          { label: "Filtration", value: "Two-stage filtration system" },
          { label: "Filter Housing", value: "Integrated top filter housing" },
          { label: "Circulation", value: "Water nozzles and return water ports" },
          { label: "Drain", value: "Safety drain" },
        ],
      },
    ],
    whatsIncluded: [
      "One-piece composite tub",
      "Chiller unit (the most powerful chiller in the range)",
      "Integrated top filter housing with two-stage filtration",
      "Water nozzles and return water ports",
      "Safety drain",
    ],
    protocol: {
      recommendedDuration: "As advised by your wellness professional",
      frequency: "Per your recovery programme",
      preparation: [
        "Confirm the water level and that the chiller has reached the set temperature.",
        "Check the filter housing and make sure the area around the tub is dry and non-slip.",
      ],
      protocolSteps: [
        { step: "Prepare", instruction: "Fill the tub, start the chiller and let the water settle at the desired temperature." },
        { step: "Immerse", instruction: "Enter slowly and stay for the time recommended by your wellness professional." },
        { step: "Finish", instruction: "Exit carefully, warm up gradually and let the filtration run as needed." },
      ],
      contraindications: [
        "Cold-water immersion is not suitable for everyone. Consult a medical professional first, especially if you have a heart or circulation condition.",
      ],
    },
    suitableEnvironments: [
      { type: "Gyms & Sports Teams", description: "A full-size plunge for training and recovery blocks." },
      { type: "Spas & Longevity Centres", description: "A premium contrast-therapy station alongside saunas." },
      { type: "Private Residences", description: "A durable one-piece tub for dedicated home recovery rooms." },
    ],
    faqs: [
      { question: "What sizes are available?", answer: "Two tub options: 483 L at 170 × 80 × 66 cm, and 421 L at 170 × 80 × 60 cm." },
      { question: "What is the tub made of?", answer: "A one-piece, CNC-machined composite shell made from acrylic, fibre and resin." },
      { question: "How is the water kept clean?", answer: "A two-stage filtration system with an integrated top filter housing makes replacement quick and easy." },
    ],
    relatedProductIds: ["cold-plunge-single-round-yg", "cold-plunge-foldable-aircore", "cryo-mini-cryome"],
  },

  "cryo-mini-cryome": {
    id: "cryo-mini-cryome",
    subtitle: "Compact Automated Cryosauna",
    tagline: "A fully automated cryosauna that needs no assembly, with a 7\" touch screen, a 1 m² footprint and an operating range of −110 to −180 °C.",
    overview: [
      "The Arctic Zero is a compact cryosauna built for centres that want to offer cryotherapy in a small space. It has a footprint of about 1 square metre, with overall dimensions of roughly 176 cm high, 112 cm long and 95 cm wide, and it does not require assembly.",
      "Operation is fully automated to help prevent human error, controlled from a 7\" touch screen with intuitive operation. An electric elevator adjusts the customer's position in the cabin, and the unit connects over Wi-Fi or LAN for remote maintenance and software updates.",
      "The Mini runs at −110 to −180 °C with a pre-cooling time of up to 5 minutes, and is. Liquid nitrogen can be supplied from a pressurised tank or a non-pressurised Dewar.",
    ],
    mechanismOfAction: {
      heading: "Automated Liquid-Nitrogen Cold Exposure",
      description: "The cryosauna cools its cabin using liquid nitrogen, pre-cooling in up to 5 minutes and running short sessions under automated control.",
      points: [
        "Operating temperature range of −110 to −180 °C.",
        "Pre-cooling to −100 °C uses about 3.25 litres of liquid nitrogen.",
        "A 3-minute session uses about 2.48 litres of liquid nitrogen.",
        "Fully automated operation helps prevent human error.",
      ],
    },
    features: [
      { title: "No Assembly Required", description: "Delivered ready to install, with a compact 1 m² footprint.", iconName: "Maximize" },
      { title: "7\" Touch Screen", description: "Intuitive operation from a 7\" touch screen with Wi-Fi / LAN connectivity.", iconName: "Monitor" },
      { title: "Fully Automated", description: "Automated operation is designed to prevent human error.", iconName: "Sliders" },
      { title: "Electric Elevator", description: "An electric elevator adjusts the customer's position in the cabin.", iconName: "Move" },
      { title: "Remote Support", description: "Remote maintenance and software updates over Wi-Fi / LAN.", iconName: "Smartphone" },
      { title: "Built-In Safety", description: "Nitrogen overflow and level sensors, open-door sensor, pressure release valve and emergency stop.", iconName: "ShieldCheck" },
    ],
    benefits: [
      { title: "Small Footprint", description: "Fits a treatment room with a footprint of about 1 m².", metric: "1 m²" },
      { title: "Quick to Start", description: "Pre-cooling takes 5 minutes at most.", metric: "≤ 5 min" },
      { title: "Operator Training", description: "Operator training is provided as part of your project.", metric: "Training Included" },
    ],
    specGroups: [
      {
        category: "Performance & Power",
        items: [
          { label: "Product Type", value: "Cryosauna" },
          { label: "Operating Temperature", value: "−110 to −180 °C" },
          { label: "Pre-Cooling Time", value: "5 minutes maximum" },
          { label: "Power Requirement", value: "1.5 kW" },
          { label: "Display", value: "7\" touch screen" },
          { label: "Connectivity", value: "Wi-Fi / LAN" },
        ],
      },
      {
        category: "Dimensions",
        items: [
          { label: "Overall Dimensions", value: "~176 (H) × ~112 (L) × ~95 (W) cm" },
          { label: "Footprint", value: "1 m²" },
          { label: "Standard (Medium) Cabin", value: "External 174 H × 100 L × 85 W cm; internal height 160 cm" },
          { label: "Small (S) Cabin", value: "External 174 H × 90 L × 75 W cm; internal height 160 cm" },
          { label: "Large (L) Cabin", value: "External 184 H × 100 L × 85 W cm; internal height 170 cm" },
        ],
      },
      {
        category: "Liquid Nitrogen",
        items: [
          { label: "Pre-Cooling to −100 °C", value: "3.25 litres" },
          { label: "Per 3-Minute Session", value: "2.48 litres" },
          { label: "Supply Options", value: "Pressurised tank (e.g. CrioLab4, HVM 200 L) or non-pressurised Dewar" },
        ],
      },
      {
        category: "Safety Features",
        items: [
          { label: "Sensors", value: "Nitrogen overflow sensor, nitrogen level sensor, open-door sensor" },
          { label: "Protection", value: "Nitrogen pressure release valve, emergency stop" },
        ],
      },
    ],
    whatsIncluded: [
      "Arctic Zero cryosauna (standard Medium cabin; Small and Large sizes available)",
      "Protective cover and collar for shoulders and upper torso",
      "Gloves for arm protection",
      "Footwear",
      "Elevator pads for customer position adjustment",
      "Optional: Bluetooth audio system and controllable LED mood lighting under the cabin",
      "Standard and custom colour options for the outer shell and interior upholstery",
    ],
    protocol: {
      recommendedDuration: "Sessions of around 3 minutes (as configured by the operator)",
      frequency: "Per your operator's programme",
      preparation: [
        "Operate the unit only with a trained operator, and follow the supplied training and safety procedures.",
        "Pre-cool the cabin (up to 5 minutes) before the first session.",
      ],
      protocolSteps: [
        { step: "Prepare", instruction: "Fit the protective cover and collar, gloves and footwear, and set the elevator to the guest's height." },
        { step: "Session", instruction: "Run the automated session from the touch screen for the programmed time." },
        { step: "Finish", instruction: "Leave the cabin carefully, and check nitrogen level and supply before the next guest." },
      ],
      contraindications: [
        "Cryotherapy is not suitable for everyone. Consult a medical professional before use, especially if you have a heart or circulation condition.",
      ],
    },
    suitableEnvironments: [
      { type: "Longevity & Wellness Centres", description: "A small-footprint cryo station for premium recovery menus." },
      { type: "Gyms & Sports Teams", description: "Quick sessions between training blocks." },
      { type: "Spas & Clinics", description: "An automated unit that fits a single treatment room." },
    ],
    faqs: [
      { question: "Does it need assembly?", answer: "No. The Arctic Zero does not require assembly." },
      { question: "What does it run on?", answer: "It needs a 1.5 kW power supply and liquid nitrogen, from a pressurised tank or a non-pressurised Dewar." },
      { question: "Is training provided?", answer: "Yes. Onsite operator training and a free online training course are available." },
    ],
    relatedProductIds: ["cold-plunge-tub-new-ice-bath", "cold-plunge-single-round-yg", "cold-plunge-foldable-aircore"],
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
        "Built with wipe-clean components tested for 24/7 continuous duty cycles.",
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
        description: `Non-porous, wipe-clean surfaces enable fast, non-abrasive turnaround between consecutive guests.`,
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
          { label: "Chassis / Enclosure", value: "Commercial-grade alloy / timber / durable polymer" },
          { label: "Surface Finish", value: "Antimicrobial, wipe-clean resilient formulation" },
          { label: "Operating Ambient Temp", value: "10°C to 40°C indoor climate-controlled room" },
        ],
      },
      {
        category: "Delivery & Setup",
        items: [
          { label: "Delivery & Setup", value: "Turnkey delivery, unpacking, and installation assistance" },
        ],
      },
    ],
    whatsIncluded: [
      `Primary ${baseProduct.name} unit with factory-tested core modules`,
      "Universal power supply cable and surge-protected electrical harness",
      "Digital operator console or wireless handheld controller",
      "Surface care microfiber kit and botanical sanitizing guidelines",
      "Full user guide and registration documents",
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
        answer: "GreenPulse Wellness provides delivery and assembly. Typical commissioning takes 1 to 3 hours depending on site logistics.",
      },
      {
        question: "What electrical requirements are needed?",
        answer: "The unit operates on standard 220–240V AC power. A dedicated 16A grounded circuit is recommended for continuous commercial usage.",
      },
    ],
    relatedProductIds: all
      .filter((p) => p.id !== baseProduct.id && (p.category === baseProduct.category || p.tiers.some((t) => baseProduct.tiers.includes(t))))
      .slice(0, 4)
      .map((p) => p.id),
  };
}
