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
          hardwareIds: ["halo-2-infrared-wellness-cabin", "halo-5-infrared-wellness-cabin", "duo-hybrid-sauna"],
        },
        {
          zoneName: "Cellular Hyperbaric & Cryo Chamber",
          squareFootage: "350 sq.ft",
          modality: "Hyperbaric Oxygen & Whole-Body Cryotherapy",
          description: "Quiet-running 1.5–2.0 ATA carbon composite hyperbaric chamber coupled with nitrogen-free single-user cryo enclosure.",
          hardwareIds: ["o2-carbon-hyperbaric-chamber", "gbuilt-chillybox"],
        },
        {
          zoneName: "Dynamic Recovery & Zero-G Lounge",
          squareFootage: "250 sq.ft",
          modality: "Sequential Air Compression & 4D Mechanical Decompression",
          description: "Multi-station recovery bays equipped with wireless pneumatic compression boots and zero-gravity mechanical SL-track massage chairs.",
          hardwareIds: ["gp-normatec-3-full-body", "apex-full-body-massage-chair", "vector-sl-massage-chair"],
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
      "halo-2-infrared-wellness-cabin",
      "halo-5-infrared-wellness-cabin",
      "halo-3-infrared-cabin",
      "halo-4-infrared-cabin",
      "duo-hybrid-sauna",
      "duo-hybrid-infrared-sauna",
      "duo-hybrid-red-light-sauna",
      "o2-carbon-hyperbaric-chamber",
      "gbuilt-chillybox",
      "gp-normatec-3-full-body",
      "gpulse-normatec-elite-legs",
      "apex-full-body-massage-chair",
      "vector-sl-massage-chair",
    ],

    turnkeyBundles: [
      {
        id: "recover-starter",
        name: "Express Longevity Lounge",
        tagline: "Turnkey 2-modality recovery bay for luxury hotels and boutique training studios.",
        recommendedFootprint: "350–500 sq.ft",
        leadTime: "3–4 weeks",
        idealFor: "Boutique Fitness Studios, Hotel Spas, Executive Clubs",
        productIds: ["halo-2-infrared-wellness-cabin", "gp-normatec-3-full-body", "vector-sl-massage-chair"],
        includedHighlights: [
          "1x Halo 2 Infrared Wellness Cabin (2-Person)",
          "2x GreenPulse Normatec 3 Full-Body Compression Stations",
          "1x Vector SL Zero-Gravity Massage Chair",
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
          "halo-5-infrared-wellness-cabin",
          "o2-carbon-hyperbaric-chamber",
          "gbuilt-chillybox",
          "apex-full-body-massage-chair",
          "gp-normatec-3-full-body",
        ],
        includedHighlights: [
          "1x Halo 5 Hemlock Commercial Infrared Cabin (4–5 Person)",
          "1x O2 Carbon Hyperbaric Chamber with O2 Concentrator",
          "1x GBuilt Chillybox Whole-Body Cryo Enclosure",
          "2x Apex Commercial 4D Robotic Massage Chairs",
          "3x Normatec 3 Full-Body Compression Lounges",
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
          "halo-5-infrared-wellness-cabin",
          "duo-hybrid-red-light-sauna",
          "o2-carbon-hyperbaric-chamber",
          "gbuilt-chillybox",
          "apex-full-body-massage-chair",
          "vector-sl-massage-chair",
          "gp-normatec-3-full-body",
          "gpulse-normatec-elite-legs",
        ],
        includedHighlights: [
          "Dual thermal cabins (Halo 5 + Duo Hybrid Red-Light)",
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
          hardwareIds: ["gpw-movelite-d25-power-wheelchair", "gpw-comfortride-d26-power-wheelchair", "gp-juvo-b4-power-wheelchair", "gpw-heavy-duty-d60-power-wheelchair"],
        },
        {
          zoneName: "Sit-to-Stand Restorative Lounge",
          squareFootage: "250 sq.ft",
          modality: "Assisted Recline & Gentle Spinal Relief",
          description: "Motorized power recliners with gradual forward lift assist to support independent standing and zero-gravity pressure relief.",
          hardwareIds: ["elevate-massage-recliner", "comfort-sl-massage-chair", "lounge-sl-massage-chair"],
        },
        {
          zoneName: "Gentle Circulation & Thermal Care Bay",
          squareFootage: "180 sq.ft",
          modality: "Targeted Warmth & Lower-Limb Compression",
          description: "Soothing thermal therapy for calves, feet, and joints to support peripheral circulation and ease muscular stiffness.",
          hardwareIds: ["gsoft-feet-heat", "gsoft-compression-calf", "gsoft-flowpillow-heat"],
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
      "gpw-movelite-d25-power-wheelchair",
      "gpw-comfortride-d26-power-wheelchair",
      "gp-juvo-b4-power-wheelchair",
      "gpw-heavy-duty-d60-power-wheelchair",
      "elevate-massage-recliner",
      "comfort-sl-massage-chair",
      "lounge-sl-massage-chair",
      "gsoft-feet-heat",
      "gsoft-compression-calf",
      "gsoft-flowpillow-heat",
    ],

    turnkeyBundles: [
      {
        id: "agewell-starter",
        name: "Residential Assisted Independence Suite",
        tagline: "Tailored mobility and comfort setup for private senior apartments or homecare rooms.",
        recommendedFootprint: "200–350 sq.ft",
        leadTime: "1–2 weeks",
        idealFor: "Private Residences, Independent Living Suites, Executive Assisted Living",
        productIds: ["gpw-movelite-d25-power-wheelchair", "elevate-massage-recliner", "gsoft-feet-heat"],
        includedHighlights: [
          "1x MoveLite D25 Ultra-Light Folding Power Wheelchair",
          "1x Elevate Motorized Massage Recliner with Sit-to-Stand Assist",
          "1x Gsoft Feet Heat Therapeutic Foot Care Station",
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
          "gpw-comfortride-d26-power-wheelchair",
          "gp-juvo-b4-power-wheelchair",
          "elevate-massage-recliner",
          "comfort-sl-massage-chair",
          "gsoft-compression-calf",
          "gsoft-feet-heat",
        ],
        includedHighlights: [
          "2x ComfortRide D26 Shock-Absorbing Power Wheelchairs",
          "1x GP Juvo B4 Configurable Drive Power Wheelchair",
          "2x Elevate Sit-to-Stand Assist Massage Recliners",
          "1x Comfort SL Zero-Gravity Gentle Massage Chair",
          "4x Thermal Foot and Calf Compression Units",
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
        answer: "Yes. Our wheelchairs feature sensitive 360-degree proportional joysticks with adjustable speed limiters (1–6 km/h) and intelligent electromagnetic brakes that lock automatically the moment the joystick is released, even on steep ramps.",
      },
      {
        question: "How does the sit-to-stand recliner function?",
        answer: "The Elevate recliner features a high-torque motorized base that gently tilts the entire chair forward at a slow, calibrated angle, bringing the resident to a stable upright standing posture without putting strain on the knees or lower back.",
      },
      {
        question: "Can these wheelchairs be transported in standard vehicles?",
        answer: "Models like the MoveLite D25 and ComfortRide D26 fold down in seconds to compact dimensions that slide easily into the trunk of a standard sedan or SUV without requiring hoist ramps.",
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
      "Our ProAdjust and FlexAdjust treatment tables feature precision foot-pedal height adjustment, bilateral tension-calibrated drop mechanisms (cervical, dorsal, lumbar, and pelvic), and ergonomic contours that eliminate practitioner back fatigue during long treatment days.",
      "For neurological rehab and post-surgical load management, our Upright Rehabilitation Tilt Table offers continuous motorized tilt from horizontal supine to 85° vertical standing, supported by clinical safety harnesses and adjustable patient footplates.",
    ],

    spacePlanning: {
      minimumArea: "150 sq.ft (Per Treatment Cubicle)",
      optimalArea: "600–1,200 sq.ft (Multi-Practitioner Studio / Rehab Gym)",
      ceilingHeight: "2.7m (8.8 ft) clearance to accommodate full 85° vertical tilt table elevation",
      electrical: "Standard 230V 16A grounded outlets placed along baseboards or floor boxes beneath table footprints to avoid trip hazards",
      hvacVentilation: "High-efficiency particulate filtration with minimum 8–10 ACH to maintain sterile clinical air quality",
      acoustics: "Acoustically isolated consultation and treatment suites; quiet motorized actuators (below 48 dB)",
      plumbingDrainage: "Wash basin and clinical sanitation sink in each primary treatment room",
      layoutDescription: "Clinical rooms are structured for 360-degree practitioner circumnavigation around the treatment table, with seamless access to therapeutic modality carts and patient changing areas.",
      zones: [
        {
          zoneName: "Chiropractic & Manual Adjustment Bay",
          squareFootage: "180 sq.ft",
          modality: "Spinal Manipulation & Manual Therapy",
          description: "Equipped with multi-drop electric elevation tables and ergonomic practitioner stools for spinal adjustments and soft tissue work.",
          hardwareIds: ["proadjust-chiropractic-table", "flexadjust-chiropractic-table"],
        },
        {
          zoneName: "Motorized Tilt & Neurological Training Bay",
          squareFootage: "220 sq.ft",
          modality: "Weight-Bearing & Orthostatic Standing",
          description: "High-stability electric tilt table with securing straps, angle indicators, and walking-assist transfer space.",
          hardwareIds: ["upright-rehabilitation-tilt-table"],
        },
        {
          zoneName: "Active Flush & Post-Treatment Recovery Bay",
          squareFootage: "200 sq.ft",
          modality: "Percussive Therapy & Dynamic Compression",
          description: "Dedicated patient lounge for post-manipulation muscle relaxation, reducing soreness and enhancing session retention.",
          hardwareIds: ["gp-normatec-3-full-body", "gsoft-flowgun-air", "gsoft-flowpillow-heat"],
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
      "proadjust-chiropractic-table",
      "flexadjust-chiropractic-table",
      "upright-rehabilitation-tilt-table",
      "gp-normatec-3-full-body",
      "gpulse-normatec-elite-legs",
      "gsoft-flowgun-air",
      "gsoft-flowpillow-heat",
    ],

    turnkeyBundles: [
      {
        id: "rehab-clinic-starter",
        name: "Private Practitioner Treatment Suite",
        tagline: "Essential clinical setup for solo chiropractors, physical therapists, and sports massage specialists.",
        recommendedFootprint: "180–250 sq.ft",
        leadTime: "2–3 weeks",
        idealFor: "Solo Practice Clinics, Sports Physio Rooms, Private Consulting Suites",
        productIds: ["proadjust-chiropractic-table", "gsoft-flowgun-air", "gsoft-flowpillow-heat"],
        includedHighlights: [
          "1x ProAdjust Chiropractic Multi-Drop Electric Table",
          "1x Gsoft Air Gun High-Torque Percussive Massage System",
          "1x Gsoft Pillow Heat Deep-Tissue Thermal Recovery Unit",
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
          "flexadjust-chiropractic-table",
          "upright-rehabilitation-tilt-table",
          "gp-normatec-3-full-body",
          "gpulse-normatec-elite-legs",
          "gsoft-flowgun-air",
        ],
        includedHighlights: [
          "1x FlexAdjust Five-Drop Commercial Chiropractic Table",
          "1x Upright Rehabilitation Electric Tilt Table with Harnessing",
          "2x GreenPulse Normatec 3 Full-Body Compression Stations",
          "2x Gpulse Normatec Elite Wireless Leg Recovery Systems",
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
      {
        question: "How does the drop mechanism on the chiropractic tables work?",
        answer: "The drop sections are cocked upward using convenient side levers or foot triggers. When the practitioner delivers a high-velocity low-amplitude thrust, the section drops crisp millimeter distances against adjustable magnetic/mechanical tension, transferring kinetic force directly into the target joint with minimal force needed.",
      },
      {
        question: "What is the weight capacity of the Upright Rehabilitation Tilt Table?",
        answer: "The Upright Rehabilitation Tilt Table is certified for patient loads up to 200 kg (440 lbs) and features dual high-torque medical actuators to ensure smooth, jitter-free elevation between 0° horizontal and 85° vertical.",
      },
      {
        question: "Are the table fabrics resistant to medical-grade hospital disinfectants?",
        answer: "Yes, all our clinical tables are upholstered in heavy-duty antimicrobial, oil-resistant, and flame-retardant vinyl that can be wiped down continuously with standard hospital disinfectant solutions without cracking or peeling.",
      },
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
          hardwareIds: ["connect-zero-gravity-massage-chair", "lounge-360-massage-chair", "lounge-sl-massage-chair"],
        },
        {
          zoneName: "Gentle Home Thermal & Circulatory Bay",
          squareFootage: "160 sq.ft",
          modality: "Targeted Compression & Mild Infrared Warmth",
          description: "Compact infrared sauna or localized thermal pads designed to enhance circulation and ease muscular spasms.",
          hardwareIds: ["halo-2-infrared-cabin", "gsoft-compression-calf", "gsoft-feet-heat"],
        },
        {
          zoneName: "Home Assisted Mobility Staging",
          squareFootage: "120 sq.ft",
          modality: "Electric Transit & Convalescent Mobility",
          description: "Portable powered wheelchair for independent navigation throughout domestic and outpatient spaces.",
          hardwareIds: ["gpw-movelite-d25-power-wheelchair", "elevate-massage-recliner"],
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
      "connect-zero-gravity-massage-chair",
      "lounge-360-massage-chair",
      "lounge-sl-massage-chair",
      "elevate-massage-recliner",
      "halo-2-infrared-cabin",
      "gpw-movelite-d25-power-wheelchair",
      "gsoft-compression-calf",
      "gsoft-feet-heat",
      "gsoft-flowpillow-heat",
    ],

    turnkeyBundles: [
      {
        id: "livewell-home-convalescence",
        name: "Post-Op Restorative Home Suite",
        tagline: "Short-term or permanent in-home recovery suite for post-surgical convalescence.",
        recommendedFootprint: "150–250 sq.ft",
        leadTime: "48–72 hours",
        idealFor: "Post-Surgery Recovery, Private Homecare, Executive Convalescence",
        productIds: ["connect-zero-gravity-massage-chair", "gsoft-compression-calf", "gsoft-feet-heat"],
        includedHighlights: [
          "1x Connect Zero-Gravity Ergonomic Recovery Lounger",
          "1x GSoft Dynamic Calf Compression System",
          "1x GSoft Warming Foot Therapy Unit",
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
          "elevate-massage-recliner",
          "halo-2-infrared-cabin",
          "gpw-movelite-d25-power-wheelchair",
          "gsoft-compression-calf",
        ],
        includedHighlights: [
          "1x Lounge SL Ergonomic Therapy Chair",
          "1x Elevate Motorized Sit-to-Stand Recliner",
          "1x Halo 2 Compact Infrared Cabin",
          "1x MoveLite D25 Portable Wheelchair for patient transport",
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
