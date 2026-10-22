import { products, type Product, type ProductId } from "./home";

export type SpaceRequirement = {
  label: string;
  value: string;
  detail: string;
};

export type SolutionTurnkeyBundle = {
  id: string;
  name: string;
  tagline: string;
  recommendedFootprint: string;
  leadTime: string;
  idealFor: string;
  productIds: ProductId[];
  includedHighlights: string[];
};

export type SolutionOperatorMetric = {
  value: string;
  label: string;
  subtext: string;
};

export type SpaceBlueprintZone = {
  zoneName: string;
  squareFootage: string;
  modality: string;
  description: string;
  hardwareIds: ProductId[];
};

export type SolutionDetail = {
  id: string;
  slug: string;
  aliases: string[];
  title: string;
  eyebrow: string;
  headline: string;
  tagline: string;
  audience: string;
  overview: string[];
  heroImage: string;
  heroAspect: string;
  badge: string;
  accentColor: string;
  
  metrics: SolutionOperatorMetric[];
  
  spacePlanning: {
    minimumArea: string;
    optimalArea: string;
    ceilingHeight: string;
    electrical: string;
    hvacVentilation: string;
    acoustics: string;
    plumbingDrainage: string;
    layoutDescription: string;
    zones: SpaceBlueprintZone[];
  };

  operatorBenefits: {
    title: string;
    description: string;
    icon: string;
  }[];

  curatedProductIds: ProductId[];
  turnkeyBundles: SolutionTurnkeyBundle[];
  
  workflowProtocols: {
    phase: string;
    duration: string;
    guideline: string;
  }[];

  targetVenues: {
    type: string;
    rationale: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];
};

export const solutionsData: Record<string, SolutionDetail> = {
  recover: {
    id: "recover",
    slug: "recover",
    aliases: ["recover-restore", "recoverandrestore", "wellness"],
    title: "Recover & Restore",
    eyebrow: "Four Ways We Equip a Space · Modality 01",
    headline: "Heat, Cold and Light, Planned as One Recovery Floor",
    tagline: "Infrared saunas, cold plunges, compression and massage chairs, laid out as one calm, well-designed recovery space.",
    audience: "Wellness & longevity centres, hotel spas, fitness clubs & private wellness residences",
    heroImage: "/recoverandrestore/recoverandrestoremain.png",
    heroAspect: "4:3",
    badge: "Heat, Cold & Relax",
    accentColor: "neutral",
    
    metrics: [
      {
        value: "450–1,200 sq.ft",
        label: "Typical Footprint",
        subtext: "Configurable modular suite layouts",
      },
      {
        value: "3 Zones",
        label: "Heat · Cold · Relax",
        subtext: "A planned flow from one station to the next",
      },
      {
        value: "Spec Sheet",
        label: "For Every Product",
        subtext: "Size, power and placement needs listed",
      },
      {
        value: "Self-Guided",
        label: "Session Flow",
        subtext: "Preset timers and simple controls",
      },
    ],

    overview: [
      "Members and guests expect a recovery space to feel as considered as the rest of your brand. The best floors are planned as a journey, with heat, cold and rest placed in a sensible order and a layout that is easy to run.",
      "GreenPulse designs, equips and launches recovery floors that combine infrared saunas, cold plunges, compression systems and massage chairs from one catalogue, so the look, the controls and the spec sheets all match.",
      "We plan the whole space: the layout, the power and ventilation, the installation, team training and your opening.",
    ],

    spacePlanning: {
      minimumArea: "450 sq.ft (Single Multi-Product Recovery Room)",
      optimalArea: "850–1,400 sq.ft (3-Zone Heat, Cold & Relax Circuit)",
      ceilingHeight: "2.7m (8.8 ft) minimum clearance for saunas and cold-plunge areas",
      electrical: "Dedicated supply for saunas and cold plunges as listed on each spec sheet; dedicated 230V 16A circuits for compression stations and chairs",
      hvacVentilation: "12–15 air changes/hour (ACH) with dedicated ducted extract for thermal cabins and positive air flow circulation",
      acoustics: "Partition walls with good sound insulation for quiet rest zones; ambient sound masking",
      plumbingDrainage: "Floor drain in proximity to contrast units; chilled water connection if integrating hydro-plunge pods",
      layoutDescription: "Our space planning prioritizes an intuitive flow. Guests move from heat (infrared cabin) to a cold plunge, then settle into compression and massage chairs to rest.",
      zones: [
        {
          zoneName: "Thermal & Infrared Pavilion",
          squareFootage: "250 sq.ft",
          modality: "Full-Spectrum Infrared & Red Light",
          description: "Dual and group cabins in warm timber with infrared heating, planned for easy cleaning and comfortable seating.",
          hardwareIds: ["infrared-sauna-double-full-spectrum-mstar", "infrared-sauna-group-combination-mstar", "infrared-sauna-double-combination-mstar"],
        },
        {
          zoneName: "Cold Plunge & Cryo Zone",
          squareFootage: "350 sq.ft",
          modality: "Cold Immersion & Cryo",
          description: "A cold plunge or cryo system placed beside the heat zone, with drainage and a clear exit path.",
          hardwareIds: ["cryo-mini-cryome"],
        },
        {
          zoneName: "Dynamic Recovery & Zero-G Lounge",
          squareFootage: "250 sq.ft",
          modality: "Compression & Massage",
          description: "Multi-station rest bays with wireless compression systems and massage chairs.",
          hardwareIds: ["pulsewave-pro-8-air-compression-recovery-system-8-chamber", "massage-chair-elite-ms131", "massage-chair-mid-range-lion"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Autonomous Revenue Generation",
        description: "Preset timers and simple controls let guests run their own session with little staff time.",
        icon: "TrendingUp",
      },
      {
        title: "High-Yield Membership Add-Ons",
        description: "A recovery floor gives your gym or spa a clear premium offer to build memberships around.",
        icon: "ShieldCheck",
      },
      {
        title: "Commercial-Grade Duty Cycles",
        description: "Durable electronics and finishes chosen for steady daily use.",
        icon: "Cpu",
      },
      {
        title: "Complete Layout & Fitout Plan",
        description: "A full layout with power, drainage and ventilation notes (MEP) provided before installation.",
        icon: "Layers",
      },
    ],

    curatedProductIds: [
      "infrared-sauna-double-full-spectrum-mstar",
      "infrared-sauna-group-combination-mstar",
      "infrared-sauna-group-full-spectrum-mstar",
      "infrared-sauna-double-combination-mstar",
      "cryo-mini-cryome",
      "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
      "compression-system-konbest-9690k",
      "massage-chair-elite-ms131",
      "massage-chair-mid-range-lion",
    ],

    turnkeyBundles: [
      {
        id: "recover-starter",
        name: "Express Recovery Lounge",
        tagline: "A compact 2-product recovery bay for hotels and boutique training studios.",
        recommendedFootprint: "350–500 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Boutique Fitness Studios, Hotel Spas, Executive Clubs",
        productIds: ["infrared-sauna-double-full-spectrum-mstar", "pulsewave-pro-8-air-compression-recovery-system-8-chamber", "massage-chair-mid-range-lion"],
        includedHighlights: [
          "1x Halo 2 Infrared Sauna (2 Person, Full Spectrum)",
          "2x PulseWave Pro 8 Compression Systems (8-Chamber)",
          "1x Serene Mid Full Body Massage Chair",
          "Complete electrical requirements documentation",
          "Staff training & cleaning guide",
        ],
      },
      {
        id: "recover-studio",
        name: "Comprehensive Recovery Suite",
        tagline: "Our multi-product contrast suite for dedicated recovery centres.",
        recommendedFootprint: "700–1,000 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Dedicated Wellness Centres, Sports Training Facilities, Resorts",
        productIds: [
          "infrared-sauna-group-combination-mstar",
          "cryo-mini-cryome",
          "massage-chair-elite-ms131",
          "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
        ],
        includedHighlights: [
          "1x Halo Hybrid 3 Infrared Sauna (3 Person, Carbon + Ceramic Heater)",
          "1x Arctic Zero Mini Cryotherapy Chamber",
          "2x Serene Elite Premium Full Body Massage Chairs",
          "3x PulseWave Pro 6 Compression Systems (6-Chamber)",
          "Custom space floorplan & sound-insulation notes",
        ],
      },
      {
        id: "recover-flagship",
        name: "Flagship Recovery Pavilion",
        tagline: "A multi-zone installation for high-volume wellness centres and athletic facilities.",
        recommendedFootprint: "1,200–2,500 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Wellness Resorts, Athletic Franchises, Premium Sanctuaries",
        productIds: [
          "infrared-sauna-group-combination-mstar",
          "infrared-sauna-double-combination-mstar",
          "cryo-mini-cryome",
          "massage-chair-elite-ms131",
          "massage-chair-mid-range-lion",
          "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
          "compression-system-konbest-9690k",
        ],
        includedHighlights: [
          "Dual thermal cabins (Halo Hybrid 3 + Halo Hybrid 2)",
          "Dedicated cold and cryo zone",
          "4-bay pneumatic compression and lymphatic drainage station",
          "Team onboarding & training",
          "Spare parts kit as agreed in your quote pack",
        ],
      },
    ],

    workflowProtocols: [
      {
        phase: "Phase 1: Warm Up",
        duration: "25–35 mins",
        guideline: "A session in the infrared cabin, following the product guidance and your own screening rules.",
      },
      {
        phase: "Phase 2: Cool Down",
        duration: "2–3 mins",
        guideline: "A short cold plunge or cryo session, with a trained person nearby.",
      },
      {
        phase: "Phase 3: Rest",
        duration: "20–30 mins",
        guideline: "Time in a massage chair or compression station to rest and unwind.",
      },
      {
        phase: "Phase 4: Reset",
        duration: "5–10 mins",
        guideline: "Water, a shower and a short rest before leaving.",
      },
    ],

    targetVenues: [
      {
        type: "Wellness & Longevity Centres",
        rationale: "The core products for a membership-based recovery space, planned as one floor.",
      },
      {
        type: "Luxury Resort & Destination Spas",
        rationale: "Self-guided recovery services that add guest spend without extra therapist time.",
      },
      {
        type: "Athletic Performance Clubs",
        rationale: "A recovery zone beside the training floor, built for daily use.",
      },
      {
        type: "Private Residential Sanctuaries",
        rationale: "Private wellness rooms designed around your home.",
      },
    ],

    faqs: [
      {
        question: "How much power and HVAC does a Recover & Restore suite require?",
        answer: "A complete suite typically needs a dedicated higher-capacity supply for saunas and cold plunges, plus 16A single-phase sockets for chairs and compression systems. Each spec sheet lists the exact requirement, and we confirm it during the site visit.",
      },
      {
        question: "Can guests operate these machines independently?",
        answer: "Yes. Products have simple touch controls and automated cycle timers, so operators can run self-guided circuits with minimal front-desk oversight, following the safety guidance supplied.",
      },
      {
        question: "What service and warranty terms apply?",
        answer: "Warranty and service terms are set out in your quote pack for each product. Ask our team and we will share them.",
      },
    ],
  },

  agewell: {
    id: "agewell",
    slug: "agewell",
    aliases: ["senior-living", "mobility", "mobility-assist"],
    title: "AgeWell",
    eyebrow: "Four Ways We Equip a Space · Modality 02",
    headline: "Dignified Mobility & Gentle Wellness for Senior Living",
    tagline: "Comfortable seating, power recliners and mobility products for assisted living and residential care.",
    audience: "Senior living communities, retirement residences, memory care, assisted living & home mobility",
    heroImage: "/recoverandrestore/agewell.png",
    heroAspect: "16:10",
    badge: "Mobility & Senior Wellness",
    accentColor: "amber",

    metrics: [
      {
        value: "Easy",
        label: "Transfers",
        subtext: "Motorized sit-to-stand transitions",
      },
      {
        value: "Lightweight",
        label: "Light Aluminium",
        subtext: "Compact folding power wheelchairs",
      },
      {
        value: "Multi-Zone",
        label: "Comfort Zones",
        subtext: "Gentle warmth for feet and legs",
      },
      {
        value: "Simple",
        label: "Controls",
        subtext: "Easy single-touch operation",
      },
    ],

    overview: [
      "Comfortable seating and mobility products make shared spaces easier to use. The AgeWell line equips senior living communities and homes with comfortable, accessible products and layouts that support independence.",
      "From lightweight folding power wheelchairs to motorised lift recliners, the products are chosen for comfort, easy transfers and simple controls.",
      "Alongside mobility products, AgeWell includes gentle comfort products: leg compression units, zero-gravity chairs configured for comfort, and warming foot-care pads.",
    ],

    spacePlanning: {
      minimumArea: "300 sq.ft (Mobility Lounge & Assistive Care Bay)",
      optimalArea: "600–900 sq.ft (Senior Wellness & Restorative Common Room)",
      ceilingHeight: "2.4m (7.8 ft) standard residential / facility height",
      electrical: "Standard 230V 10A/16A grounded sockets; multi-station smart charging docks for battery-operated mobility hardware",
      hvacVentilation: "Comfort climate control maintained at 22–24°C with gentle, draft-free laminar air diffusion",
      acoustics: "Low ambient noise threshold (below 42 dBA); whisper-quiet actuators and brushless motors prevent sensory distress",
      plumbingDrainage: "No specialized drainage required; accessible zero-threshold wide entryways (minimum 950mm clear width)",
      layoutDescription: "AgeWell floor plans emphasize barrier-free navigation, wide turning radii (minimum 1,500mm circle), non-slip commercial flooring, and stable transfer zones between mobility chairs and therapeutic recliners.",
      zones: [
        {
          zoneName: "Electric Mobility & Staging Hub",
          squareFootage: "200 sq.ft",
          modality: "Powered Wheelchair & Fleet Staging",
          description: "Dedicated parking and charging station for ultra-portable and heavy-duty folding power wheelchairs.",
          hardwareIds: ["glide-flex-foldable-electric-wheelchair", "glide-trek-2-electric-wheelchair", "glide-trek-1-electric-wheelchair", "glide-core-wheelchair"],
        },
        {
          zoneName: "Sit-to-Stand Restorative Lounge",
          squareFootage: "250 sq.ft",
          modality: "Assisted Recline & Comfort",
          description: "Motorized power recliners with gradual forward lift assist, designed to make standing up easier.",
          hardwareIds: ["lounge-sl-massage-chair", "comfort-sl-massage-chair"],
        },
        {
          zoneName: "Gentle Circulation & Thermal Care Bay",
          squareFootage: "180 sq.ft",
          modality: "Warmth & Leg Comfort",
          description: "Gentle warmth and compression products for calves and feet, placed in a comfortable seating bay.",
          hardwareIds: ["cold-therapy-unit-806pro", "pulsewave-ease-air-compression-leg-massager", "sauna-blanket-rl301"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Comfort and Easier Transfers",
        description: "Motorized sit-to-stand recliners and braking systems are designed to make transitions easier and more comfortable.",
        icon: "ShieldAlert",
      },
      {
        title: "Preserves Resident Autonomy",
        description: "Intuitive joystick controls and responsive power systems give seniors the confidence to navigate community grounds without constant escort.",
        icon: "UserCheck",
      },
      {
        title: "Caregiver Ergonomics",
        description: "Reduces repetitive lifting and manual wheelchair pushing for care staff.",
        icon: "HeartHandshake",
      },
      {
        title: "Durable Commercial Upholstery",
        description: "Stain-resistant, wipe-clean upholstery options suited to daily cleaning routines.",
        icon: "Sparkles",
      },
    ],

    curatedProductIds: [
      "glide-flex-foldable-electric-wheelchair",
      "glide-trek-2-electric-wheelchair",
      "glide-trek-1-electric-wheelchair",
      "glide-core-wheelchair",
      "lounge-sl-massage-chair",
      "comfort-sl-massage-chair",
      "cold-therapy-unit-806pro",
      "pulsewave-ease-air-compression-leg-massager",
      "sauna-blanket-rl301",
    ],

    turnkeyBundles: [
      {
        id: "agewell-starter",
        name: "Residential Assisted Independence Suite",
        tagline: "Tailored mobility and comfort setup for private senior apartments or homecare rooms.",
        recommendedFootprint: "200–350 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Private Residences, Independent Living Suites, Executive Assisted Living",
        productIds: ["glide-flex-foldable-electric-wheelchair", "lounge-sl-massage-chair", "cold-therapy-unit-806pro"],
        includedHighlights: [
          "1x Glide Flex Foldable Electric Wheelchair",
          "1x Serene Lounge SL Track Massage Chair",
          "1x Frostfire Pad Cold, Heat & Red Light Therapy Pad",
          "In-home delivery, setup and family orientation",
        ],
      },
      {
        id: "agewell-community",
        name: "Senior Living Community Wellness Lounge",
        tagline: "Turnkey common-room installation for retirement communities and assisted care homes.",
        recommendedFootprint: "500–800 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Retirement Communities, Assisted Living Facilities, Rehabilitation Residences",
        productIds: [
          "glide-trek-2-electric-wheelchair",
          "glide-trek-1-electric-wheelchair",
          "lounge-sl-massage-chair",
          "comfort-sl-massage-chair",
          "pulsewave-ease-air-compression-leg-massager",
          "cold-therapy-unit-806pro",
        ],
        includedHighlights: [
          "2x Glide Trek 2 Electric Wheelchairs",
          "1x Glide Trek 1 Electric Wheelchair",
          "2x Serene Lounge SL Track Massage Chairs",
          "1x Serene Comfort SL Track Massage Chair",
          "4x PulseWave Ease Air Compression Leg Massagers",
          "Fleet battery charging station with surge protection",
        ],
      },
    ],

    workflowProtocols: [
      {
        phase: "Morning Mobility Activation",
        duration: "15–20 mins",
        guideline: "Gentle foot warmth and leg compression as part of a morning routine.",
      },
      {
        phase: "Active Community Navigation",
        duration: "Throughout day",
        guideline: "Independent movement with braking wheelchairs and adjustable speed limits.",
      },
      {
        phase: "Afternoon Rest",
        duration: "30 mins",
        guideline: "Time in a zero-gravity recliner to rest and relax.",
      },
    ],

    targetVenues: [
      {
        type: "Assisted Living & Retirement Villages",
        rationale: "Upgrades common lounges and resident suites with comfortable products that make shared spaces more welcoming and less demanding for care staff.",
      },
      {
        type: "Memory Care & Specialized Senior Units",
        rationale: "Calm spaces with gentle warmth and supportive seating.",
      },
      {
        type: "Private Home Senior Adaptations",
        rationale: "Helps seniors stay comfortable in familiar surroundings at home.",
      },
    ],

    faqs: [
      {
        question: "Are the power wheelchairs safe for seniors with limited dexterity?",
        answer: "Glide wheelchairs use joystick control with electronic or electromagnetic braking, and top speeds of about 6 km/h. Please ask a doctor or mobility specialist to confirm the right chair and setup for each user.",
      },
      {
        question: "Can these wheelchairs be transported in standard vehicles?",
        answer: "Folding models such as the Glide Trek 1 (folds to 56 × 29 × 78 cm, about 22 kg) and Glide Trek 2 (58 × 38 × 83 cm, about 22.4 kg) are designed to be light and compact for transport.",
      },
    ],
  },

  rehabilitate: {
    id: "rehabilitate",
    slug: "rehabilitate",
    aliases: ["physio", "chiro", "physical-therapy"],
    title: "Rehabilitate",
    eyebrow: "Four Ways We Equip a Space · Modality 03",
    headline: "Practical Equipment for Physio & Chiropractic Practices",
    tagline: "Standing chairs, compression systems, percussion tools and light devices for clinics. Your clinic decides how it uses them.",
    audience: "Physiotherapy clinics, chiropractic practices and sports studios",
    heroImage: "/recoverandrestore/rehabilatemain.png",
    heroAspect: "4:3",
    badge: "Practice Equipment",
    accentColor: "sky",

    metrics: [
      {
        value: "Compact",
        label: "Practice Footprint",
        subtext: "Products sized for consulting bays",
      },
      {
        value: "Upright",
        label: "Standing Chairs",
        subtext: "Rise standing chairs for assisted standing",
      },
      {
        value: "Heavy-Duty",
        label: "Built for Daily Use",
        subtext: "Durable finishes for busy practices",
      },
      {
        value: "Post-Session",
        label: "Compression Station",
        subtext: "A rest bay with compression systems",
      },
    ],

    overview: [
      "Busy practices need equipment that is comfortable, durable and easy for staff to use. The Rehabilitate line brings together practical products for treatment rooms and recovery bays.",
      "Thrum percussion massage guns, Ember far-infrared blankets and Luma red-light devices give practitioners flexible tools for warm-up and soft-tissue sessions, alongside PulseWave compression systems for post-session recovery.",
      "Rise electric standing wheelchairs (Rise 1, 2 and 3) support assisted standing, and Glide folding electric wheelchairs cover everyday mobility.",
    ],

    spacePlanning: {
      minimumArea: "150 sq.ft (Per Treatment Cubicle)",
      optimalArea: "600–1,200 sq.ft (Multi-Practitioner Studio / Rehab Gym)",
      ceilingHeight: "2.7m (8.8 ft) clearance recommended for standing wheelchair use",
      electrical: "Standard 230V 16A grounded outlets placed along baseboards or floor boxes beneath table footprints to avoid trip hazards",
      hvacVentilation: "Good general ventilation and easy-to-clean surfaces in treatment rooms",
      acoustics: "Acoustically isolated consultation and treatment suites; quiet motorized actuators (below 48 dB)",
      plumbingDrainage: "Wash basin and clinical sanitation sink in each primary treatment room",
      layoutDescription: "Rooms are laid out so staff can move easily around each station, with simple access to product carts and changing areas.",
      zones: [
        {
          zoneName: "Percussion & Soft-Tissue Bay",
          squareFootage: "180 sq.ft",
          modality: "Percussive Therapy & Thermal Support",
          description: "Equipped with Thrum percussion massage guns and Ember far-infrared blankets for warm-up and soft-tissue work.",
          hardwareIds: ["percussion-massager-jm003", "sauna-blanket-rl301"],
        },
        {
          zoneName: "Standing & Mobility Training Bay",
          squareFootage: "220 sq.ft",
          modality: "Assisted Standing & Mobility",
          description: "Rise electric standing wheelchairs and Glide folding chairs for assisted standing practice and mobility training.",
          hardwareIds: ["rise-1-standing-wheelchair", "rise-2-standing-wheelchair", "rise-3-standing-wheelchair"],
        },
        {
          zoneName: "Active Flush & Post-Treatment Recovery Bay",
          squareFootage: "200 sq.ft",
          modality: "Percussive Therapy & Dynamic Compression",
          description: "A rest lounge for use after a session, with compression systems and warmth products.",
          hardwareIds: ["pulsewave-pro-8-air-compression-recovery-system-8-chamber", "percussion-massager-jm003", "sauna-blanket-rl301"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Easier on Staff",
        description: "Adjustable height and easy controls help staff set up each station comfortably.",
        icon: "Shield",
      },
      {
        title: "Adjustable and Flexible",
        description: "Settings can be adjusted to suit different users.",
        icon: "Sliders",
      },
      {
        title: "Add-On Services",
        description: "Pairing your own sessions with a post-session compression bay gives clients a pleasant add-on.",
        icon: "PlusCircle",
      },
      {
        title: "Built to Last",
        description: "Tear-resistant, wipe-clean upholstery that stands up to regular disinfecting.",
        icon: "CheckCircle",
      },
    ],

    curatedProductIds: [
      "rise-2-standing-wheelchair",
      "rise-3-standing-wheelchair",
      "rise-1-standing-wheelchair",
      "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
      "compression-system-konbest-9690k",
      "percussion-massager-jm003",
      "sauna-blanket-rl301",
    ],

    turnkeyBundles: [
      {
        id: "rehab-clinic-starter",
        name: "Private Practitioner Treatment Suite",
        tagline: "An essential setup for solo practitioners and sports massage specialists.",
        recommendedFootprint: "180–250 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Solo Practice Clinics, Sports Physio Rooms, Private Consulting Suites",
        productIds: ["rise-2-standing-wheelchair", "percussion-massager-jm003", "sauna-blanket-rl301"],
        includedHighlights: [
          "1x Rise 2 Standing Wheelchair",
          "1x Thrum Pro Professional Massage Gun (30 Speed)",
          "1x Ember Wrap Far Infrared Sauna Blanket",
          "Complete room setup, levelling and electrical safety check",
        ],
      },
      {
        id: "rehab-sports-centre",
        name: "Comprehensive Practice & Sports Suite",
        tagline: "A multi-station layout for athletic training centres and multi-practitioner clinics.",
        recommendedFootprint: "600–1,000 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Sports Centres, Multi-Bed Physio Practices, Team Facilities",
        productIds: [
          "rise-3-standing-wheelchair",
          "rise-1-standing-wheelchair",
          "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
          "compression-system-konbest-9690k",
          "percussion-massager-jm003",
        ],
        includedHighlights: [
          "1x Rise 3 Standing Wheelchair",
          "1x Rise 1 Standing Wheelchair",
          "2x PulseWave Pro 8 Compression Systems (8-Chamber)",
          "2x PulseWave Pro 6 Compression Systems (6-Chamber)",
          "2x Professional Percussion Massage Units",
          "Room layout and certified technician installation",
        ],
      },
    ],

    workflowProtocols: [
      {
        phase: "Warm-Up",
        duration: "10 mins",
        guideline: "Localised warmth and percussion tools as part of the practitioner's own routine.",
      },
      {
        phase: "Session",
        duration: "20–30 mins",
        guideline: "Your clinic's own session, run according to your own professional protocols.",
      },
      {
        phase: "Post-Session Rest",
        duration: "15–20 mins",
        guideline: "Sequential air compression and rest as a pleasant way to finish a visit.",
      },
    ],

    targetVenues: [
      {
        type: "Physical Therapy & Chiropractic Clinics",
        rationale: "Practical equipment for treatment rooms and recovery bays. Clinics are responsible for how they use it.",
      },
      {
        type: "Chiropractic Practices",
        rationale: "Comfortable, durable products for consulting and recovery bays.",
      },
      {
        type: "Sports Team Training Rooms",
        rationale: "Quick-turnaround recovery stations for athletes.",
      },
    ],

    faqs: [
    ],
  },

  "live-well": {
    id: "live-well",
    slug: "live-well",
    aliases: ["livewell", "homecare", "clinical-homecare"],
    title: "Live Well",
    eyebrow: "Four Ways We Equip a Space · Modality 04",
    headline: "Comfort and Recovery Products for Care Settings & Homes",
    tagline: "Comfortable loungers, mobility products and gentle warmth for clinics, care settings and home recovery rooms.",
    audience: "Clinics, care settings, private suites and homes",
    heroImage: "/recoverandrestore/livewell.png",
    heroAspect: "1:1",
    badge: "Comfort & Home Recovery",
    accentColor: "neutral",

    metrics: [
      {
        value: "Compact",
        label: "Home-Friendly",
        subtext: "Sized for domestic rooms and doorways",
      },
      {
        value: "Zero-G",
        label: "Comfort Seating",
        subtext: "Reclining, supportive seating",
      },
      {
        value: "Planned",
        label: "Delivery & Setup",
        subtext: "Delivered, assembled and tested on site",
      },
      {
        value: "Wipe-Clean",
        label: "Easy Cleaning",
        subtext: "Contact surfaces made for regular cleaning",
      },
    ],

    overview: [
      "Comfort matters most when someone is resting. The Live Well line brings together supportive seating, gentle warmth and mobility products for clinics, care settings and home rooms.",
      "We equip private suites, waiting lounges and home recovery rooms with comfortable loungers, compact infrared cabins and accessible mobility chairs.",
      "Every room is different, so we plan the layout, delivery and installation with you. Ask our team about the options available for your setting.",
    ],

    spacePlanning: {
      minimumArea: "200 sq.ft (Home Convalescence Room / Patient Bay)",
      optimalArea: "450–800 sq.ft (Hospital Executive Wellness Suite / Clinic Recovery Wing)",
      ceilingHeight: "2.4m (7.8 ft) standard room height",
      electrical: "Standard residential 230V 10A/16A outlets with circuit surge suppression; low-EMF electrical components for sensitive patients",
      hvacVentilation: "Gentle HEPA-filtered clean air flow; humidity maintained at 45–55% for optimal respiratory and skin comfort",
      acoustics: "Ultra-quiet operation (under 38 dBA) ensures patients can rest, sleep, or meditate while receiving therapy",
      plumbingDrainage: "No specialized plumbing required",
      layoutDescription: "Live Well environments are organized around rest, low sensory stress, and ease of patient access. Equipment is positioned to facilitate effortless caregiver transfers while maintaining a warm, calming aesthetic rather than a sterile clinical atmosphere.",
      zones: [
        {
          zoneName: "Clinical Zero-Gravity Rest Station",
          squareFootage: "140 sq.ft",
          modality: "Zero-Gravity Comfort Seating",
          description: "A supportive lounger with leg elevation, designed for comfortable rest.",
          hardwareIds: ["comfort-sl-massage-chair", "lounge-360-massage-chair", "lounge-sl-massage-chair"],
        },
        {
          zoneName: "Gentle Home Thermal & Circulatory Bay",
          squareFootage: "160 sq.ft",
          modality: "Compression & Gentle Warmth",
          description: "A compact infrared cabin or warming pads, for a comfortable end to the day.",
          hardwareIds: ["infrared-sauna-double-full-spectrum-mstar", "pulsewave-ease-air-compression-leg-massager", "cold-therapy-unit-806pro"],
        },
        {
          zoneName: "Home Assisted Mobility Staging",
          squareFootage: "120 sq.ft",
          modality: "Electric Mobility",
          description: "A portable powered wheelchair for easy movement around the home and outpatient spaces.",
          hardwareIds: ["glide-flex-foldable-electric-wheelchair", "lounge-sl-massage-chair"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Clinic and Home Comfort",
        description: "Lets clinics and care settings offer a comfortable, well-designed recovery corner.",
        icon: "Home",
      },
      {
        title: "Planned Around Your Room",
        description: "Layouts and product choices fitted to the room, power and doorway sizes you have.",
        icon: "Repeat",
      },
      {
        title: "No Renovation Needed",
        description: "Compact dimensions, standard domestic electrical requirements and doorway-friendly assembly.",
        icon: "Wrench",
      },
      {
        title: "Comfortable by Design",
        description: "Comfortable products with a furniture-style finish that suits homes and private suites.",
        icon: "Award",
      },
    ],

    curatedProductIds: [
      "comfort-sl-massage-chair",
      "lounge-360-massage-chair",
      "lounge-sl-massage-chair",
      "infrared-sauna-double-full-spectrum-mstar",
      "glide-flex-foldable-electric-wheelchair",
      "pulsewave-ease-air-compression-leg-massager",
      "cold-therapy-unit-806pro",
      "sauna-blanket-rl301",
    ],

    turnkeyBundles: [
      {
        id: "livewell-home-convalescence",
        name: "Home Recovery Suite",
        tagline: "A comfortable in-home recovery setup for rest at home.",
        recommendedFootprint: "150–250 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Private Homes, Home Care, Executive Suites",
        productIds: ["comfort-sl-massage-chair", "pulsewave-ease-air-compression-leg-massager", "cold-therapy-unit-806pro"],
        includedHighlights: [
          "1x Serene Comfort SL Track Massage Chair",
          "1x PulseWave Ease Air Compression Leg Massager",
          "1x Frostfire Pad Cold, Heat & Red Light Therapy Pad",
          "Home delivery, assembly and a walkthrough",
        ],
      },
      {
        id: "livewell-hospital-vip",
        name: "Private Suite Recovery Lounge",
        tagline: "A high-comfort lounge for private rooms and executive outpatient centres.",
        recommendedFootprint: "350–600 sq.ft",
        leadTime: "Confirmed in your quote pack",
        idealFor: "Private Suites, Outpatient Centres, Wellness Resorts",
        productIds: [
          "lounge-sl-massage-chair",
          "infrared-sauna-double-full-spectrum-mstar",
          "glide-flex-foldable-electric-wheelchair",
          "pulsewave-ease-air-compression-leg-massager",
        ],
        includedHighlights: [
          "1x Serene Lounge SL Track Massage Chair",
          "1x Serene 360 Lounge Massage Chair",
          "1x Halo 1 Infrared Sauna (Single Person, Full Spectrum)",
          "1x Glide Flex Foldable Electric Wheelchair for patient transport",
          "Cleaning guidance and facility staff training",
        ],
      },
    ],

    workflowProtocols: [
      {
        phase: "Morning Warmth",
        duration: "20 mins",
        guideline: "Gentle calf and foot compression as part of a morning routine.",
      },
      {
        phase: "Midday Rest",
        duration: "45 mins",
        guideline: "Time in a zero-gravity recliner to rest.",
      },
      {
        phase: "Evening Warmth",
        duration: "20 mins",
        guideline: "Low-temperature infrared warmth to wind down in the evening.",
      },
    ],

    targetVenues: [
      {
        type: "Private Clinics & Care Suites",
        rationale: "Adds comfortable, well-designed amenities to private rooms.",
      },
      {
        type: "Homecare & Convalescent Residences",
        rationale: "Brings comfortable recovery products into home rooms without renovation.",
      },
      {
        type: "Executive Health Centres",
        rationale: "Calm, comfortable seating for waiting and rest areas.",
      },
    ],

    faqs: [
      {
        question: "How are home setups arranged?",
        answer: "We plan delivery, installation and a walkthrough around your home and timeline. Ask our team about the options available in your area.",
      },
      {
        question: "Does the equipment fit through standard home doorways?",
        answer: "Products are chosen with doorway and elevator sizes in mind. Each spec sheet lists the dimensions, and we check access during the site visit.",
      },
      {
        question: "Is zero-gravity seating suitable for everyone?",
        answer: "Not for everyone. Please consult a doctor before use, especially if you have a heart condition, are pregnant or have any health concern. We cannot advise on medical conditions.",
      },
    ],
  },
};

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  const normalized = slug.toLowerCase().trim();
  
  // Direct match
  if (solutionsData[normalized]) {
    return solutionsData[normalized];
  }

  // Alias match
  return Object.values(solutionsData).find(
    (s) => s.slug === normalized || s.aliases.includes(normalized),
  );
}

export function getAllSolutions(): SolutionDetail[] {
  return Object.values(solutionsData);
}

export function getCuratedProductsForSolution(solution: SolutionDetail, all: Product[] = products): Product[] {
  return solution.curatedProductIds
    .map((id) => all.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}
