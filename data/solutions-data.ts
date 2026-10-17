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
    headline: "Engineered Sanctuaries for Cellular Recovery & Longevity",
    tagline: "High-throughput contrast therapy, full-spectrum infrared, hyperbaric oxygen, and cryotherapy suites for commercial wellness operators.",
    audience: "Wellness & longevity centres, hotel spas, fitness clubs & private wellness residences",
    heroImage: "/recoverandrestore/recoverandrestoremain.png",
    heroAspect: "4:3",
    badge: "Longevity & Contrast Modalities",
    accentColor: "neutral",
    
    metrics: [
      {
        value: "450–1,200 sq.ft",
        label: "Typical Footprint",
        subtext: "Configurable modular suite layouts",
      },
      {
        value: "6–12 Clients/hr",
        label: "Operator Throughput",
        subtext: "Concurrent self-guided modalities",
      },
      {
        value: "99.4%",
        label: "Commercial Uptime",
        subtext: "Enterprise warranty & maintenance SLA",
      },
      {
        value: "Zero-Touch",
        label: "Staffing Model",
        subtext: "Automated pre-set session protocols",
      },
    ],

    overview: [
      "The modern wellness guest expects more than passive relaxation. Today's commercial longevity suites demand scientifically grounded modalities that stimulate cellular rejuvenation, accelerate autonomic nervous system resets, and deliver measurable physiological contrast.",
      "GreenPulse Wellness curates, imports, and installs commercial-grade hardware suites that combine full-spectrum infrared cabins, hard-shell hyperbaric oxygen therapy (HBOT), whole-body electric cryochambers, dynamic sequential pneumatic compression, and zero-gravity robotic massage.",
      "We handle every phase of the commissioning journey: preliminary architectural CAD space planning, specialized three-phase electrical and ventilation coordination, white-glove site delivery, technician certification, and preventative maintenance SLAs.",
    ],

    spacePlanning: {
      minimumArea: "450 sq.ft (Single Multi-Modality Recovery Room)",
      optimalArea: "850–1,400 sq.ft (3-Zone Thermal & Longevity Circuit)",
      ceilingHeight: "2.7m (8.8 ft) minimum clearance for infrared cabins and cryo enclosures",
      electrical: "Three-Phase 400V / 32A dedicated commercial supply for cryo & high-capacity saunas; dedicated 230V 16A circuits for HBOT & compression stations",
      hvacVentilation: "12–15 air changes/hour (ACH) with dedicated ducted extract for thermal cabins and positive air flow circulation",
      acoustics: "Acoustic STC rating 50+ partition walls for quiet hyperbaric and zero-gravity zones; ambient multi-zone sound masking",
      plumbingDrainage: "Floor drain in proximity to contrast units; chilled water connection if integrating hydro-plunge pods",
      layoutDescription: "Our space planning prioritizes intuitive circulation flow. Guests transition sequentially from hyperbaric oxygenation or thermal heat (infrared cabin) to cryotherapy reset, concluding in zero-gravity pneumatic compression for nervous system parasympathetic integration.",
      zones: [
        {
          zoneName: "Thermal & Infrared Pavilion",
          squareFootage: "250 sq.ft",
          modality: "Full-Spectrum Infrared & Red Light",
          description: "Curated dual and quad cabins featuring Canadian hemlock, carbon/ceramic heating arrays, and medical-grade 660nm/850nm chromotherapy panels.",
          hardwareIds: ["infrared-sauna-double-full-spectrum-mstar", "infrared-sauna-group-combination-mstar", "infrared-sauna-double-combination-mstar"],
        },
        {
          zoneName: "Cellular Hyperbaric & Cryo Chamber",
          squareFootage: "350 sq.ft",
          modality: "Hyperbaric Oxygen & Whole-Body Cryotherapy",
          description: "Quiet-running 1.5–2.0 ATA carbon composite hyperbaric chamber coupled with nitrogen-free single-user cryo enclosure.",
          hardwareIds: ["hbot-double-cube-chamber", "cryo-mini-cryome"],
        },
        {
          zoneName: "Dynamic Recovery & Zero-G Lounge",
          squareFootage: "250 sq.ft",
          modality: "Sequential Air Compression & 4D Mechanical Decompression",
          description: "Multi-station recovery bays equipped with wireless pneumatic compression boots and zero-gravity mechanical SL-track massage chairs.",
          hardwareIds: ["pulsewave-pro-8-air-compression-recovery-system-8-chamber", "massage-chair-elite-ms131", "massage-chair-mid-range-lion"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Autonomous Revenue Generation",
        description: "Modalities operate on digital timer presets, requiring minimal therapist oversight and drastically reducing operational payroll per square foot.",
        icon: "TrendingUp",
      },
      {
        title: "High-Yield Membership Add-Ons",
        description: "Recovery suites transform standard gym or spa memberships into premium recurring wellness subscriptions commanding significant monthly retention.",
        icon: "ShieldCheck",
      },
      {
        title: "Commercial-Grade Duty Cycles",
        description: "Heavy-duty industrial electronics designed for back-to-back 14-hour daily commercial operations without thermal shutdown or hardware degradation.",
        icon: "Cpu",
      },
      {
        title: "Turnkey CAD Fitout & Regulatory Compliance",
        description: "Complete MEP (mechanical, electrical, plumbing) architectural packages and CE/commercial safety documentation supplied prior to install.",
        icon: "Layers",
      },
    ],

    curatedProductIds: [
      "infrared-sauna-double-full-spectrum-mstar",
      "infrared-sauna-group-combination-mstar",
      "infrared-sauna-group-full-spectrum-mstar",
      "infrared-sauna-double-combination-mstar",
      "hbot-double-cube-chamber",
      "cryo-mini-cryome",
      "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
      "compression-system-konbest-9690k",
      "massage-chair-elite-ms131",
      "massage-chair-mid-range-lion",
    ],

    turnkeyBundles: [
      {
        id: "recover-starter",
        name: "Express Longevity Lounge",
        tagline: "Turnkey 2-modality recovery bay for luxury hotels and boutique training studios.",
        recommendedFootprint: "350–500 sq.ft",
        leadTime: "3–4 weeks",
        idealFor: "Boutique Fitness Studios, Hotel Spas, Executive Clubs",
        productIds: ["infrared-sauna-double-full-spectrum-mstar", "pulsewave-pro-8-air-compression-recovery-system-8-chamber", "massage-chair-mid-range-lion"],
        includedHighlights: [
          "1x Halo 2 Infrared Sauna (2 Person, Full Spectrum)",
          "2x PulseWave Pro 8 Compression Systems (8-Chamber)",
          "1x Serene Mid Full Body Massage Chair",
          "Complete electrical pre-commissioning documentation",
          "Staff training & hygienic sanitization operational manual",
        ],
      },
      {
        id: "recover-studio",
        name: "Comprehensive Longevity Suite",
        tagline: "Our most popular multi-modality contrast suite for dedicated recovery centres.",
        recommendedFootprint: "700–1,000 sq.ft",
        leadTime: "4–6 weeks",
        idealFor: "Dedicated Longevity Clinics, Sports Training Facilities, Luxury Resorts",
        productIds: [
          "infrared-sauna-group-combination-mstar",
          "hbot-double-cube-chamber",
          "cryo-mini-cryome",
          "massage-chair-elite-ms131",
          "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
        ],
        includedHighlights: [
          "1x Halo Hybrid 3 Infrared Sauna (3 Person, Carbon + Ceramic Heater)",
          "1x Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)",
          "1x Arctic Zero Mini Cryotherapy Chamber",
          "2x Serene Elite Premium Full Body Massage Chairs",
          "3x PulseWave Pro 6 Compression Systems (6-Chamber)",
          "Custom architectural space floorplan & acoustic schematics",
        ],
      },
      {
        id: "recover-flagship",
        name: "Flagship Medical Wellness Pavilion",
        tagline: "Enterprise multi-zone installation for high-volume wellness resorts and athletic centres.",
        recommendedFootprint: "1,200–2,500 sq.ft",
        leadTime: "6–8 weeks",
        idealFor: "Commercial Wellness Resorts, Pro Athletic Franchises, High-Net-Worth Sanctuaries",
        productIds: [
          "infrared-sauna-group-combination-mstar",
          "infrared-sauna-double-combination-mstar",
          "hbot-double-cube-chamber",
          "cryo-mini-cryome",
          "massage-chair-elite-ms131",
          "massage-chair-mid-range-lion",
          "pulsewave-pro-8-air-compression-recovery-system-8-chamber",
          "compression-system-konbest-9690k",
        ],
        includedHighlights: [
          "Dual thermal cabins (Halo Hybrid 3 + Halo Hybrid 2)",
          "Dedicated Hyperbaric O2 & Cryo therapy zones",
          "4-bay pneumatic compression and lymphatic drainage station",
          "Dedicated technician onboarding & 2-year preventative maintenance SLA",
          "Spare parts stocking kit & remote diagnostics telemetry",
        ],
      },
    ],

    workflowProtocols: [
      {
        phase: "Phase 1: Hyperbaric Cellular Priming",
        duration: "45–60 mins",
        guideline: "1.5–2.0 ATA pressure session to saturate plasma oxygen levels and prime microvascular circulation.",
      },
      {
        phase: "Phase 2: Thermal Vasodilation & HSP Induction",
        duration: "25–35 mins",
        guideline: "Full-spectrum infrared heat at 55–65°C to induce deep core thermal sweat and heat shock protein activation.",
      },
      {
        phase: "Phase 3: Cryogenic Vasoconstriction Shock",
        duration: "2.5–3.5 mins",
        guideline: "Sub-zero electric chamber immersion triggering rapid systemic endorphin release and anti-inflammatory vasoconstriction.",
      },
      {
        phase: "Phase 4: Parasympathetic Decompression & Flush",
        duration: "20–30 mins",
        guideline: "Zero-gravity mechanical massage combined with sequential pneumatic limb compression to flush metabolic waste.",
      },
    ],

    targetVenues: [
      {
        type: "Commercial Longevity Centres",
        rationale: "Delivers the core revenue-generating hardware modalities required for modern membership-based bio-optimization facilities.",
      },
      {
        type: "Luxury Resort & Destination Spas",
        rationale: "Enables touchless recovery services that increase room-guest spend without burdening massage therapists.",
      },
      {
        type: "Athletic Performance Clubs",
        rationale: "Accelerates turnaround recovery times for team sport athletes and high-intensity fitness members.",
      },
      {
        type: "Private Residential Sanctuaries",
        rationale: "Complete personal biohacking suites engineered for discreet private estates.",
      },
    ],

    faqs: [
      {
        question: "How much power and HVAC does a Recover & Restore suite require?",
        answer: "A complete multi-modality suite typically requires a dedicated 32A three-phase electrical drop for high-load equipment (such as whole-body cryo and large saunas), alongside dedicated 16A single-phase sockets for hyperbaric chambers and massage chairs. Our engineering team provides detailed Single Line Diagrams (SLD) and HVAC extract requirements during preliminary planning.",
      },
      {
        question: "Can guests operate these machines independently?",
        answer: "Yes. All curated recovery hardware is designed with intuitive touch-screen controls, automated cycle timers, and emergency release mechanisms, allowing facility operators to run automated, self-guided circuits with minimal front-desk oversight.",
      },
      {
        question: "What maintenance and warranty coverage is provided?",
        answer: "All commercial equipment is covered by our GreenPulse Commercial Warranty (up to 3 years on structural components and 2 years on electronics). We maintain regional spares inventory and provide scheduled preventative maintenance visits.",
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
    tagline: "Assistive electric mobility chairs, power recliners with sit-to-stand technology, and restorative joint therapy engineered for assisted living and residential care.",
    audience: "Senior living communities, retirement residences, memory care, assisted living & home mobility",
    heroImage: "/recoverandrestore/agewell.png",
    heroAspect: "16:10",
    badge: "Mobility & Senior Wellness",
    accentColor: "amber",

    metrics: [
      {
        value: "Zero-Strain",
        label: "Caregiver Burden",
        subtext: "Motorized sit-to-stand transitions",
      },
      {
        value: "Lightweight",
        label: "Aviation Aluminum",
        subtext: "Compact folding power wheelchairs",
      },
      {
        value: "Multi-Zone",
        label: "Targeted Circulation",
        subtext: "Gentle thermal relief for joints & feet",
      },
      {
        value: "ISO / CE",
        label: "Medical Safety",
        subtext: "Electromagnetic failsafe braking",
      },
    ],

    overview: [
      "Active aging requires equipment designed with empathy, uncompromising mechanical safety, and genuine clinical utility. The AgeWell program equips senior living communities and personal residences with hardware that safeguards independence and restores confident mobility.",
      "From ultra-lightweight folding power wheelchairs with intelligent electromagnetic braking to motorized lift recliners that eliminate knee strain during sit-to-stand transitions, our hardware empowers residents while dramatically reducing caregiver injury rates.",
      "Complementing mobility hardware, AgeWell includes gentle restorative technologies: low-intensity thermal compression boots for lower-limb circulation, zero-gravity SL-track chairs configured for senior comfort, and ergonomic warming foot-therapy systems.",
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
          modality: "Assisted Recline & Gentle Spinal Relief",
          description: "Motorized power recliners with gradual forward lift assist to support independent standing and zero-gravity pressure relief.",
          hardwareIds: ["lounge-sl-massage-chair", "comfort-sl-massage-chair"],
        },
        {
          zoneName: "Gentle Circulation & Thermal Care Bay",
          squareFootage: "180 sq.ft",
          modality: "Targeted Warmth & Lower-Limb Compression",
          description: "Soothing thermal therapy for calves, feet, and joints to support peripheral circulation and ease muscular stiffness.",
          hardwareIds: ["cold-therapy-unit-806pro", "pulsewave-ease-air-compression-leg-massager", "sauna-blanket-rl301"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Dramatically Reduced Fall Risk",
        description: "Motorized sit-to-stand recliners and electromagnetic power braking eliminate common loss-of-balance incidents during transitional movements.",
        icon: "ShieldAlert",
      },
      {
        title: "Preserves Resident Autonomy",
        description: "Intuitive joystick controls and responsive power systems give seniors the confidence to navigate community grounds without constant escort.",
        icon: "UserCheck",
      },
      {
        title: "Caregiver Ergonomics",
        description: "Eliminates repetitive lifting and manual wheelchair pushing strain for nursing and care home staff.",
        icon: "HeartHandshake",
      },
      {
        title: "Durable Commercial Grade Upholstery",
        description: "Medical-grade antimicrobial and stain-resistant PU leather options that withstand rigorous daily clinical sanitation routines.",
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
        leadTime: "1–2 weeks",
        idealFor: "Private Residences, Independent Living Suites, Executive Assisted Living",
        productIds: ["glide-flex-foldable-electric-wheelchair", "lounge-sl-massage-chair", "cold-therapy-unit-806pro"],
        includedHighlights: [
          "1x Glide Flex Foldable Electric Wheelchair",
          "1x Serene Lounge SL Track Massage Chair",
          "1x Frostfire Pad Cold, Heat & Red Light Therapy Pad",
          "In-home delivery, ergonomic setup, and family operator orientation",
        ],
      },
      {
        id: "agewell-community",
        name: "Senior Living Community Wellness Lounge",
        tagline: "Turnkey common-room installation for retirement communities and assisted care homes.",
        recommendedFootprint: "500–800 sq.ft",
        leadTime: "3–4 weeks",
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
        guideline: "Gentle foot warmth and calf compression to stimulate peripheral venous return before daily walking.",
      },
      {
        phase: "Active Community Navigation",
        duration: "Throughout day",
        guideline: "Safe independent transit via electromagnetic brake wheelchairs with programmable speed limits.",
      },
      {
        phase: "Afternoon Restorative Decompression",
        duration: "30 mins",
        guideline: "Zero-gravity spinal unloading in the Elevate recliner to relieve lumbar pressure and hip strain.",
      },
    ],

    targetVenues: [
      {
        type: "Assisted Living & Retirement Villages",
        rationale: "Upgrades common lounges and resident suites with hardware that elevates community appeal and lowers caregiver physical demands.",
      },
      {
        type: "Memory Care & Specialized Senior Units",
        rationale: "Safe, calming sensory environments with gentle warmth and supportive ergonomic seating.",
      },
      {
        type: "Private Home Senior Adaptations",
        rationale: "Empowers seniors to age in place gracefully without leaving familiar domestic surroundings.",
      },
    ],

    faqs: [
      {
        question: "Are the power wheelchairs safe for seniors with limited dexterity?",
        answer: "Glide wheelchairs use joystick control with electronic or electromagnetic braking, and top speeds of about 6 km/h. A clinician or mobility specialist should confirm the right chair and setup for each user.",
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
    headline: "Precision Clinical Hardware for Physio & Chiropractic Centers",
    tagline: "Electric multi-drop manipulation tables, motorized upright rehabilitation tilt stations, and targeted pneumatic recovery systems engineered for sports medicine and manual therapy.",
    audience: "Physiotherapy clinics, chiropractic practices, sports medicine studios & orthopedic rehabilitation",
    heroImage: "/recoverandrestore/rehabilatemain.png",
    heroAspect: "4:3",
    badge: "Clinical Rehab & Biomechanics",
    accentColor: "sky",

    metrics: [
      {
        value: "5 Drops",
        label: "Segmental Manipulation",
        subtext: "Precision tension-adjustable drop sections",
      },
      {
        value: "0°–85°",
        label: "Motorized Vertical Tilt",
        subtext: "Weight-bearing rehabilitation & tilt training",
      },
      {
        value: "Heavy-Duty",
        label: "Clinical Load Rating",
        subtext: "Smooth dual-actuator electric elevation",
      },
      {
        value: "Rapid Flush",
        label: "Targeted Compression",
        subtext: "Post-treatment edema & lymphatic recovery",
      },
    ],

    overview: [
      "Manual therapy and neurological rehabilitation require clinical furniture that functions as an extension of the practitioner's hands. The Rehabilitate program delivers heavy-duty, biomechanically engineered tables and recovery hardware built specifically for high-volume physical therapy and chiropractic clinics.",
      "Thrum percussion massage guns, Ember far-infrared blankets and Luma red-light devices give practitioners flexible tools for warm-up and soft-tissue sessions, alongside PulseWave compression systems for post-session recovery.",
      "Rise electric standing wheelchairs (Rise 1, 2 and 3) support assisted standing, and Glide folding electric wheelchairs cover everyday mobility.",
    ],

    spacePlanning: {
      minimumArea: "150 sq.ft (Per Treatment Cubicle)",
      optimalArea: "600–1,200 sq.ft (Multi-Practitioner Studio / Rehab Gym)",
      ceilingHeight: "2.7m (8.8 ft) clearance recommended for standing wheelchair use",
      electrical: "Standard 230V 16A grounded outlets placed along baseboards or floor boxes beneath table footprints to avoid trip hazards",
      hvacVentilation: "High-efficiency particulate filtration with minimum 8–10 ACH to maintain sterile clinical air quality",
      acoustics: "Acoustically isolated consultation and treatment suites; quiet motorized actuators (below 48 dB)",
      plumbingDrainage: "Wash basin and clinical sanitation sink in each primary treatment room",
      layoutDescription: "Clinical rooms are structured for 360-degree practitioner circumnavigation around the treatment table, with seamless access to therapeutic modality carts and patient changing areas.",
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
          description: "Dedicated patient lounge for post-manipulation muscle relaxation, reducing soreness and enhancing session retention.",
          hardwareIds: ["pulsewave-pro-8-air-compression-recovery-system-8-chamber", "percussion-massager-jm003", "sauna-blanket-rl301"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Practitioner Ergonomic Longevity",
        description: "Foot-pedal motorized height adjustment lets chiropractors and therapists position patients at the exact biomechanical height required, preventing chronic back strain.",
        icon: "Shield",
      },
      {
        title: "Clinical Precision & Adjustability",
        description: "Independently adjustable drop tension allows tailored force application for pediatric, geriatric, and high-impact athletic patients.",
        icon: "Sliders",
      },
      {
        title: "Enhanced Billable Modalities",
        description: "Pairing manual adjustments with post-session automated pneumatic compression creates lucrative auxiliary treatment codes and improves clinical outcomes.",
        icon: "PlusCircle",
      },
      {
        title: "Commercial Medical Durability",
        description: "High-density multi-layered foam and tear-resistant medical vinyl withstand disinfectants and tens of thousands of adjustments.",
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
        tagline: "Essential clinical setup for solo chiropractors, physical therapists, and sports massage specialists.",
        recommendedFootprint: "180–250 sq.ft",
        leadTime: "2–3 weeks",
        idealFor: "Solo Practice Clinics, Sports Physio Rooms, Private Consulting Suites",
        productIds: ["rise-2-standing-wheelchair", "percussion-massager-jm003", "sauna-blanket-rl301"],
        includedHighlights: [
          "1x Rise 2 Standing Wheelchair",
          "1x Thrum Pro Professional Massage Gun (30 Speed)",
          "1x Ember Wrap Far Infrared Sauna Blanket",
          "Complete clinic setup, leveling, and electrical safety certification",
        ],
      },
      {
        id: "rehab-sports-centre",
        name: "Comprehensive Rehabilitation & Sports Medicine Suite",
        tagline: "Full-scale multi-station clinical layout for athletic training centres and multi-doctor clinics.",
        recommendedFootprint: "600–1,000 sq.ft",
        leadTime: "4–5 weeks",
        idealFor: "Sports Medicine Hospitals, Multi-Bed Physio Practices, Pro Team Facilities",
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
          "CAD room layout and certified technician installation",
        ],
      },
    ],

    workflowProtocols: [
      {
        phase: "Patient Intake & Warm-Up",
        duration: "10 mins",
        guideline: "Targeted localized thermal percussion to loosen hypertonic muscle groups prior to spinal or joint manipulation.",
      },
      {
        phase: "Clinical Assessment & Manual Adjustment",
        duration: "20–30 mins",
        guideline: "Drop-assisted manipulation or motorized tilt positioning calibrated to patient pathology.",
      },
      {
        phase: "Lymphatic Flush & Active Recovery",
        duration: "15–20 mins",
        guideline: "Sequential air compression flushing to remove localized inflammatory metabolites and lock in structural alignment.",
      },
    ],

    targetVenues: [
      {
        type: "Physical Therapy & Orthopedic Clinics",
        rationale: "Provides the heavy-duty clinical hardware required for rehabilitating post-operative, neurological, and sports injury patients.",
      },
      {
        type: "Chiropractic Practices",
        rationale: "Precision multi-drop tables engineered for maximum thrust transfer and minimal practitioner fatigue.",
      },
      {
        type: "Elite Sports Team Training Rooms",
        rationale: "Rapid-turnaround recovery stations to keep professional athletes competing at peak performance.",
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
    headline: "Hospitals, Clinics & Restorative Homecare Systems",
    tagline: "Medical recovery suites, home convalescence setups, and accessible therapeutic loungers that bridge the gap between clinical inpatient care and comfortable home recovery.",
    audience: "Hospitals, post-op recovery clinics, private medical suites, specialized homecare & convalescence",
    heroImage: "/recoverandrestore/livewell.png",
    heroAspect: "1:1",
    badge: "Clinical Care & Home Recovery",
    accentColor: "neutral",

    metrics: [
      {
        value: "Flexible",
        label: "Rental & Purchase",
        subtext: "Month-to-month post-op convalescence leases",
      },
      {
        value: "Zero-G",
        label: "Clinical Seating",
        subtext: "Circulatory relief & spinal decompression",
      },
      {
        value: "Rapid Setup",
        label: "White-Glove Delivery",
        subtext: "Assembled and tested in 48 hours",
      },
      {
        value: "Hospital Safe",
        label: "Sanitization Standard",
        subtext: "Sterilizable medical-grade contact surfaces",
      },
    ],

    overview: [
      "Patient healing extends far beyond the hospital discharge date. The Live Well program delivers specialized recovery hardware engineered to support patients and individuals transitioning through recovery, chronic condition management, or long-term restorative wellness at home and in specialized clinical care wings.",
      "We equip medical wards, executive health clinics, and residential recovery suites with non-invasive recovery hardware: zero-gravity therapeutic loungers that enhance venous return, compact infrared cabins for home detox and cardiovascular support, and accessible mobility wheelchairs.",
      "Recognizing that post-operative recovery timelines vary, GreenPulse provides flexible commercial acquisition options, including white-glove equipment rental with scheduled home delivery, technician installation, and seamless collection once rehabilitation is complete.",
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
          modality: "Zero-Gravity Cardiac & Spinal Relief",
          description: "Therapeutic lounger elevating the legs above heart level to alleviate peripheral edema and relieve spinal compression.",
          hardwareIds: ["comfort-sl-massage-chair", "lounge-360-massage-chair", "lounge-sl-massage-chair"],
        },
        {
          zoneName: "Gentle Home Thermal & Circulatory Bay",
          squareFootage: "160 sq.ft",
          modality: "Targeted Compression & Mild Infrared Warmth",
          description: "Compact infrared sauna or localized thermal pads designed to enhance circulation and ease muscular spasms.",
          hardwareIds: ["infrared-sauna-double-full-spectrum-mstar", "pulsewave-ease-air-compression-leg-massager", "cold-therapy-unit-806pro"],
        },
        {
          zoneName: "Home Assisted Mobility Staging",
          squareFootage: "120 sq.ft",
          modality: "Electric Transit & Convalescent Mobility",
          description: "Portable powered wheelchair for independent navigation throughout domestic and outpatient spaces.",
          hardwareIds: ["glide-flex-foldable-electric-wheelchair", "lounge-sl-massage-chair"],
        },
      ],
    },

    operatorBenefits: [
      {
        title: "Bridges Clinical and Home Recovery",
        description: "Enables hospitals and surgery centers to offer patients high-tier recovery hardware upon discharge, reducing readmission rates and elevating patient satisfaction.",
        icon: "Home",
      },
      {
        title: "Flexible Rental Programs",
        description: "Patients can rent certified recovery hardware on a weekly or monthly basis without committing to outright capital purchase during temporary rehab periods.",
        icon: "Repeat",
      },
      {
        title: "Zero Domestic Renovation Needed",
        description: "Compact dimensions, standard domestic plug-and-play electrical requirements, and modular doorway-friendly assembly.",
        icon: "Wrench",
      },
      {
        title: "Dignified Patient Experience",
        description: "Combines true clinical therapeutic benefit with high-end furniture aesthetics that look stunning in luxury residences and executive suites.",
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
        name: "Post-Op Restorative Home Suite",
        tagline: "Short-term or permanent in-home recovery suite for post-surgical convalescence.",
        recommendedFootprint: "150–250 sq.ft",
        leadTime: "48–72 hours",
        idealFor: "Post-Surgery Recovery, Private Homecare, Executive Convalescence",
        productIds: ["comfort-sl-massage-chair", "pulsewave-ease-air-compression-leg-massager", "cold-therapy-unit-806pro"],
        includedHighlights: [
          "1x Serene Comfort SL Track Massage Chair",
          "1x PulseWave Ease Air Compression Leg Massager",
          "1x Frostfire Pad Cold, Heat & Red Light Therapy Pad",
          "White-glove home delivery, assembly, and patient tutorial",
          "Available via flexible monthly rental or outright purchase",
        ],
      },
      {
        id: "livewell-hospital-vip",
        name: "Hospital VIP & Executive Recovery Lounge",
        tagline: "High-comfort clinical suite for private patient rooms and executive outpatient centers.",
        recommendedFootprint: "350–600 sq.ft",
        leadTime: "2–3 weeks",
        idealFor: "Private Hospital Suites, Post-Op Rehabilitation Centers, Luxury Health Resorts",
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
          "Hygienic maintenance protocols and facility staff training",
        ],
      },
    ],

    workflowProtocols: [
      {
        phase: "Morning Circulatory Stimulation",
        duration: "20 mins",
        guideline: "Gentle calf and foot air compression to counter venous stasis after prolonged bed rest.",
      },
      {
        phase: "Midday Decompression & Nap Rest",
        duration: "45 mins",
        guideline: "Zero-gravity elevation with neutral body posture to relieve pressure on healing incisions and lumbar spine.",
      },
      {
        phase: "Evening Gentle Heat Therapy",
        duration: "20 mins",
        guideline: "Low-temperature radiant infrared warmth to promote cellular repair and facilitate deep restorative sleep.",
      },
    ],

    targetVenues: [
      {
        type: "Private Hospitals & Post-Op Wings",
        rationale: "Equips VIP suites with dignified, restorative amenities that promote swift convalescence.",
      },
      {
        type: "Homecare & Convalescent Residences",
        rationale: "Brings hospital-grade recovery technologies into residential bedrooms with zero renovation required.",
      },
      {
        type: "Executive Medical & Diagnostic Centers",
        rationale: "Provides calming recovery seating following intensive executive health screening procedures.",
      },
    ],

    faqs: [
      {
        question: "How does the home rental process work?",
        answer: "We deliver and install the selected equipment directly in your home within 48 to 72 hours. Equipment is rented on a flexible monthly basis with zero long-term commitments. Once your doctor clears you or your recovery period concludes, our white-glove logistics team handles complete disassembly and pickup.",
      },
      {
        question: "Does the equipment fit through standard home doorways?",
        answer: "Yes. All Live Well residential systems are specifically designed with modular components and transport dimensions that fit comfortably through standard 750mm–800mm domestic doorways and apartment elevators.",
      },
      {
        question: "Is zero-gravity seating safe for cardiac and post-op patients?",
        answer: "Zero-gravity positioning elevates the feet slightly above the heart, which minimizes cardiac workload, promotes venous return, and reduces edema in the lower extremities while neutralizing spinal pressure. As with any post-surgical therapy, we always recommend following your physician's specific protocol.",
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
