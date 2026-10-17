export type BlogCategory =
  | "Longevity & Tech"
  | "Recovery & Biohacking"
  | "Commercial Suites & Spas"
  | "Science & Modalities";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
};

export type BlogSection = {
  id: string;
  heading: string;
  content: string[];
  callout?: {
    type: "tip" | "science" | "quote";
    text: string;
    source?: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  /** ISO date (YYYY-MM-DD) for <time> and structured data */
  publishedAtISO?: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
  author: BlogAuthor;
  featured?: boolean;
  tags: string[];
  keyTakeaways: string[];
  sections: BlogSection[];
  relatedEquipment?: {
    name: string;
    category: string;
    image: string;
    link: string;
    description: string;
  }[];
};

export const AUTHORS: Record<string, BlogAuthor> = {
  "marcus-vance": {
    name: "Marcus Vance",
    role: "Head of Wellness Architecture & Equipment Solutions",
    avatar: "/Target client/audience-longevity.png",
    bio: "Marcus consults with premier wellness clubs, luxury hospitality groups, and longevity clinics across APAC and Europe on recovery facility design and operational ergonomics.",
  },
  "elena-rostova": {
    name: "Dr. Elena Rostova",
    role: "Physiological Research & Bio-Integration Advisor",
    avatar: "/Target client/audience-physio.jpg",
    bio: "Specializing in sports biomechanics and non-invasive recovery modalities, Elena collaborates with GreenPulse to review technical specifications and optimal protocol workflows.",
  },
  "david-chen": {
    name: "David Chen",
    role: "Commercial Wellness & Operations Strategist",
    avatar: "/Target client/audience-hotel.jpg",
    bio: "David advises hotel operators and fitness founders on wellness suite unit economics, membership tiers, and seamless guest recovery onboarding.",
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "science-of-photobiomodulation-infrared-saunas",
    title: "The Science of Photobiomodulation: How Full-Spectrum Infrared Alters Cellular Recovery",
    excerpt:
      "A deep dive into near, mid, and far infrared wavelengths—and how full-spectrum thermal cabins activate heat-shock proteins and optimize circulation without oppressive air temperatures.",
    category: "Longevity & Tech",
    publishedAt: "May 28, 2026",
    readTime: "7 min read",
    coverImage: "/sauna hero.jpg",
    coverAlt: "Modern full-spectrum infrared wellness cabin in a luxury studio",
    featured: true,
    author: AUTHORS["elena-rostova"],
    tags: ["Infrared Saunas", "Photobiomodulation", "Cellular Health", "Recovery"],
    keyTakeaways: [
      "Near-infrared (NIR) targets cytochrome c oxidase in the mitochondria, supporting cellular ATP output.",
      "Far-infrared (FIR) delivers gentle radiant warmth that promotes deep tissue perspiration at 45–60°C instead of conventional 90°C steam.",
      "Commercial wellness facilities utilize full-spectrum cabins to cater to both high-performance athletes and heat-sensitive clients.",
      "Pairing infrared sessions with hydration protocols and 10-minute cool-downs creates optimal parasympathetic transition.",
    ],
    sections: [
      {
        id: "beyond-traditional-heat",
        heading: "Beyond Traditional Convection: Radiant vs Ambient Warmth",
        content: [
          "For decades, the standard Finnish sauna relied on high ambient temperatures—often 85°C to 100°C—to heat the surrounding air and gradually elevate internal body temperature. While highly respected, this extreme thermal load poses comfort barriers for clients with respiratory sensitivity or cardiovascular fatigue.",
          "Full-spectrum infrared technology shifts the fundamental mechanism of heat transfer from convection to radiation. By projecting specific light wavelengths directly into the body's superficial and subcutaneous layers, over 80% of radiant energy is absorbed by the body rather than dissipated in heating the air.",
          "The practical result: users experience intense, restorative perspiration and systemic microcirculation at much milder chamber temperatures (48°C to 58°C), making sessions accessible, sustainable, and remarkably pleasant.",
        ],
        callout: {
          type: "science",
          text: "Wavelength specificity matters: NIR (700–1400 nm) promotes superficial skin and mitochondrial signaling; FIR (3000–100,000 nm) induces deep vibrational resonance in water molecules, accelerating fluid movement and relaxation.",
        },
      },
      {
        id: "mitochondrial-mechanics",
        heading: "Mitochondrial Mechanics: Photobiomodulation at 810–850nm",
        content: [
          "The core breakthrough in modern wellness technology is photobiomodulation (PBM). When near-infrared photons in the therapeutic window (specifically 810nm to 850nm) penetrate the dermal layers, they are absorbed by cytochrome c oxidase, a pivotal enzyme within mitochondrial electron transport chains.",
          "This light absorption helps detach inhibitory nitric oxide from cytochrome c oxidase, allowing oxygen binding to resume efficiently and stimulating enhanced ATP (adenosine triphosphate) synthesis. Increased cellular energy availability naturally facilitates tissue rejuvenation and accelerates turnaround times after intense athletic exertion.",
          "For commercial suites, integrating multi-wavelength carbon-ceramic emitters ensures that the entire spectrum is maintained evenly across the user's body, eliminating hot spots and maximizing physiological consistency.",
        ],
      },
      {
        id: "heat-shock-proteins",
        heading: "Heat Shock Proteins & Cardiovascular Conditioning",
        content: [
          "Mild thermal stress from regular infrared sessions induces the transcription of Heat Shock Proteins (HSP70 and HSP90). These molecular chaperones prevent protein misfolding, refold damaged polypeptides, and preserve structural cellular integrity.",
          "Concurrently, radiant heat induces mild vasodilation, resulting in a gentle uptick in heart rate equivalent to a brisk walk (100–120 bpm) while stroke volume and cardiac output rise. This produces cardiovascular conditioning benefits with zero orthopaedic impact on tendons or joints.",
        ],
        callout: {
          type: "quote",
          text: "“By eliminating the suffocating sensation of boiling air, full-spectrum infrared democratizes thermal recovery for elite athletes and corporate executives alike.”",
          source: "GreenPulse Longevity Technical Notes",
        },
      },
      {
        id: "integrating-into-suites",
        heading: "Architectural & Suite Integration",
        content: [
          "When engineering a recovery suite, positioning the infrared cabin adjacent to passive rest lounges or cold immersion zones creates a natural contrast therapy journey.",
          "Ensure adequate ventilation, dedicated 220–240V isolated circuits, and acoustic isolation so that clients can enjoy integrated chromotherapy and soundscapes in complete calm.",
        ],
      },
    ],
    relatedEquipment: [
      {
        name: "Halo 2 Infrared Sauna (2 Person, Full Spectrum)",
        category: "Heat & Thermal Therapy",
        image: "/GPW Product mockup/Heat/Halo 2 Infrared Sauna (2 Person, Full Spectrum)/halo 2.png",
        link: "/products/infrared-sauna-double-full-spectrum-mstar",
        description:
          "Two-person full-spectrum infrared sauna with Canadian hemlock, tourmaline stones, oxygen ionizer and Bluetooth sound.",
      },
    ],
  },
  {
    slug: "designing-commercial-recovery-suites-for-luxury-hotels",
    title: "Designing the Modern Recovery Suite: Why 5-Star Hospitality is Investing in Longevity Tech",
    excerpt:
      "How luxury urban hotels and destination resorts are evolving past the standard steam room to install turnkey bio-recovery suites that drive RevPAR and extended stays.",
    category: "Commercial Suites & Spas",
    publishedAt: "Jun 14, 2026",
    readTime: "8 min read",
    coverImage: "/hero-wellness-sanctuary.jpg",
    coverAlt: "Minimalist luxury hotel recovery suite with modern equipment",
    featured: false,
    author: AUTHORS["david-chen"],
    tags: ["Hospitality", "Spa Design", "Longevity Suites", "Turnkey Equipment"],
    keyTakeaways: [
      "Modern travelers actively seek functional recovery solutions (jet-lag relief, sleep optimization, athletic reset) over passive spa treatments.",
      "Turnkey self-service recovery lounges require significantly lower labor overhead than traditional therapist-dependent treatment rooms.",
      "A 30–45 sq.m space can comfortably house a tri-modality suite: Infrared Cabin, Hyperbaric Chamber, and Zero-Gravity Compression Lounge.",
      "Premium hotel suites featuring private in-room wellness tech command a 35–45% rate premium.",
    ],
    sections: [
      {
        id: "the-shift-in-guest-demands",
        heading: "The Paradigm Shift: From Pampering to Measurable Vitality",
        content: [
          "For decades, the five-star hotel spa was defined by Swedish massages, eucalyptus-scented steam chambers, and dimly lit cucumber-water lounges. While these amenities provide tactile relaxation, contemporary luxury travelers—executives fighting circadian desynchronization, marathoners on destination races, and wellness travelers—demand measurable, objective physiological reset.",
          "Guests now arrive wearing smart rings, biometric watches, and continuous glucose monitors. They evaluate spa visits not merely by ambiance, but by HRV (Heart Rate Variability) recovery, deep sleep percentages, and inflammation attenuation.",
          "Properties that have upgraded their footprint to include touchless longevity modalities report higher utilization, broader demographic appeal (especially attracting younger male and executive demographics), and strong recurring ancillary revenue.",
        ],
      },
      {
        id: "the-tri-modality-footprint",
        heading: "The Tri-Modality Blueprint: 35 to 50 Square Metres",
        content: [
          "One of the biggest misconceptions in hospitality design is that a high-tech recovery suite requires expansive real estate. In reality, a masterfully engineered 40 sq.m suite can deliver an extraordinary guest journey through three coordinated stations:",
          "1. **Station A (Compression & Lymphatic Flush):** Two zero-gravity ergonomic loungers paired with multi-chamber pneumatic compression boots for immediate post-flight circulation.",
          "2. **Station B (Full-Spectrum Infrared Sanctuary):** A 2-person cabin with chromotherapy and integrated meditative audio for cellular warm-up and deep relaxation.",
          "3. **Station C (Mild Hyperbaric Chamber or Contrast Zone):** A quiet, acoustic-baffled zone providing oxygen-enriched pressure sessions or thermal contrast.",
        ],
        callout: {
          type: "tip",
          text: "Space Efficiency: High-end equipment like pneumatic compression boots and infrared cabins operate on standard electrical loads and require minimal plumbing compared to wet hydrotherapy facilities.",
        },
      },
      {
        id: "turnkey-economics",
        heading: "Touchless Revenue & Operational Simplicity",
        content: [
          "Traditional spa treatments carry high labor costs—therapist payroll, scheduling logistics, and low throughput during off-peak hours. Self-guided recovery suites, by contrast, operate autonomously after a 3-minute concierge orientation.",
          "Hotels can monetize these suites through 45-minute private bookings, inclusive wellness packages, or subscription access for local residents. The result is gross margins often exceeding 75% on suite revenue.",
        ],
      },
    ],
    relatedEquipment: [
      {
        name: "Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)",
        category: "Oxygen & Hyperbaric (Air)",
        image: "/GPW Product mockup/Air/Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)/34D447C1-0498-4EA8-AC53-7FE942251360.png",
        link: "/products/hbot-double-cube-chamber",
        description:
          "Two-user 2.0 ATA steel-cabin chamber with an integrated oxygen generator, installed and operated by a trained operator.",
      },
      {
        name: "PulseWave Go Wireless Air Compression Boots",
        category: "Active Recovery & Massage (Relax)",
        image: "/GPW Product mockup/Compression/PulseWave Go Wireless Air Compression Boots/PulseWave Go.png",
        link: "/products/compression-boots-dj-sets",
        description:
          "Cordless air-compression boots with an on-boot LED controller, Bluetooth sync and five overlapping chambers.",
      },
    ],
  },
  {
    slug: "mild-hyperbaric-oxygen-therapy-recovery-guide",
    title: "Mild Hyperbaric Oxygen (mHBOT): The Complete Facility & Protocol Guide",
    excerpt:
      "Understanding ambient pressure ranges (1.3 to 1.5 ATA), dissolved plasma oxygen kinetics, and safe facility requirements for commercial wellness spaces.",
    category: "Science & Modalities",
    publishedAt: "Jul 02, 2026",
    readTime: "9 min read",
    coverImage: "/longivity.png",
    coverAlt: "High-grade mild hyperbaric oxygen chamber in modern clinic setting",
    featured: false,
    author: AUTHORS["marcus-vance"],
    tags: ["mHBOT", "Oxygen Therapy", "Clinic Design", "Facility Setup"],
    keyTakeaways: [
      "mHBOT delivers pressurized oxygen at 1.3 to 1.5 ATA, increasing the amount of oxygen dissolved directly in blood plasma.",
      "Unlike pure medical 2.0+ ATA chambers requiring explosive-gas certifications, mild wellness chambers are safe, quiet, and user-friendly.",
      "Ideal for post-workout soreness, mental fatigue, jet-lag recovery, and general longevity routines.",
      "Requires adequate airflow, oil-free medical air compressors, and calibrated digital pressure regulators.",
    ],
    sections: [
      {
        id: "physics-of-dissolved-oxygen",
        heading: "The Physics: Henry's Law and Plasma Diffusion",
        content: [
          "Under standard atmospheric conditions (1.0 ATA), roughly 98% of oxygen transport is bound to red blood cell haemoglobin. Red blood cells are relatively large (approx. 7–8 microns) and must pass sequentially through micro-capillaries.",
          "According to Henry's Law, the amount of gas dissolved in a liquid is proportional to its partial pressure. When chamber pressure is increased to 1.3 to 1.5 ATA with supplemental oxygen, oxygen physically dissolves directly into blood plasma, cerebrospinal fluid, and interstitial fluids.",
          "Because plasma flows unimpeded through areas where swollen tissues or tight micro-circulation may restrict red blood cell passage, this dissolved oxygen gently diffuses into deep tissues, fostering optimal cellular respiration.",
        ],
        callout: {
          type: "science",
          text: "Henry's Law Formula: C = k · P. By raising chamber pressure by 30% to 50% and elevating FiO2, plasma oxygen saturation increases several-fold over standard room conditions.",
        },
      },
      {
        id: "safety-and-compliance",
        heading: "Facility Engineering: Safety, Power & Acoustics",
        content: [
          "Installing a commercial hyperbaric chamber requires meticulous engineering to ensure guest comfort and frictionless operation:",
          "• **Continuous Ambient Airflow:** Modern chambers must cycle conditioned, dehumidified air continuously to prevent CO2 buildup and regulate internal temperatures.",
          "• **Oil-Free Compressor Placement:** We recommend locating the compressor unit in an adjacent utility space or insulated equipment housing to keep internal chamber noise below 45 dB.",
          "• **Dual Control Interfaces:** Both external staff and internal occupants must have access to calibrated depressurization valves and emergency release mechanisms.",
        ],
      },
      {
        id: "wellness-protocols",
        heading: "Curating the Optimal Session Protocol",
        content: [
          "Standard wellness sessions run for 45 to 60 minutes at target pressure. A 5-minute gradual pressurization phase allows guests to equalize ear pressure comfortably (using swallowing or the Valsalva maneuver), followed by 35–45 minutes of rest, reading, or meditation at peak pressure, followed by a gentle 5-minute descent.",
          "Guests emerge feeling clear-headed and refreshed, without the grogginess often associated with heavy sedentary rest.",
        ],
      },
    ],
    relatedEquipment: [
      {
        name: "Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)",
        category: "Oxygen & Hyperbaric (Air)",
        image: "/GPW Product mockup/Air/Oxa Cube Duo Hyperbaric Oxygen Chamber (HBOT, Double)/34D447C1-0498-4EA8-AC53-7FE942251360.png",
        link: "/products/hbot-double-cube-chamber",
        description:
          "Two-user 2.0 ATA steel-cabin chamber with an integrated oxygen generator, installed and operated by a trained operator.",
      },
    ],
  },
  {
    slug: "contrast-therapy-infrared-cold-water-immersion",
    title: "Contrast Therapy at Scale: The Physiological Benefits of Pairing Infrared with Thermal Reset",
    excerpt:
      "Vascular pumping, norepinephrine surge, and autonomic nervous system regulation: how thermal cycling revitalizes both mental resilience and physical recovery.",
    category: "Recovery & Biohacking",
    publishedAt: "Aug 11, 2026",
    readTime: "6 min read",
    coverImage: "/recoverandrestore/recoverandrestoremain.png",
    coverAlt: "Contrast therapy room with wooden sauna and cold plunge tub",
    featured: false,
    author: AUTHORS["elena-rostova"],
    tags: ["Contrast Therapy", "Cold Plunge", "Vascular Pumping", "Heart Rate Variability"],
    keyTakeaways: [
      "Thermal cycling alternates vasodilation (via infrared warmth) and vasoconstriction (via cold immersion) to encourage vascular flushing.",
      "Cold water exposure stimulates a robust, sustained release of norepinephrine, enhancing alertness and mood.",
      "Ending on cold is favored for daytime alertness and acute inflammation control, while ending on warmth promotes parasympathetic rest and sleep.",
      "Modern contrast suites combine dry infrared saunas with precision-chilled, UV-filtered immersion tubs.",
    ],
    sections: [
      {
        id: "the-vascular-pump",
        heading: "The Biological Mechanism: The Vascular Pumping Effect",
        content: [
          "Thermal contrast therapy is one of the most effective non-invasive modalities for systemic recovery. The foundational principle relies on the contrasting responses of the vascular smooth muscles to temperature shifts.",
          "During a 15-minute infrared session, capillary beds expand and blood flows toward peripheral tissues. When the individual transitions into a 3-minute cold immersion (10°C to 12°C), peripheral vasoconstriction forces blood back toward central vital organs, shunting metabolic by-products through the liver and kidneys.",
          "Repeating this cycle 2–3 times acts as an active hydraulic pump for the circulatory and lymphatic networks, helping clear post-exercise soreness without physical impact.",
        ],
      },
      {
        id: "neurochemistry-and-hrv",
        heading: "Neurochemistry: The Norepinephrine & Dopamine Cascade",
        content: [
          "Cold water immersion triggers immediate sympathetic activation, causing a dramatic surge in circulating norepinephrine (often up to 200–300% above baseline) and prolonged elevation of dopamine.",
          "Crucially, unlike psychological stress which wears down the nervous system, deliberate short cold exposure paired with steady nasal breathing trains autonomic agility: the ability to shift from heightened arousal into deep calm within seconds.",
        ],
        callout: {
          type: "quote",
          text: "“Contrast therapy is not just about muscle relief; it is a masterclass in nervous system regulation and mental composure under controlled stress.”",
        },
      },
      {
        id: "suite-guidelines",
        heading: "Commercial Suite Protocol Recommendations",
        content: [
          "For wellness facilities, we recommend configuring suites with slip-resistant drains, ambient temperature control between zones, and an intuitive timer system.",
          "A classic 40-minute contrast circuit: 15 min Infrared Cabin (50°C) → 3 min Cold Immersion (11°C) → 12 min Infrared Cabin → 3 min Cold Immersion → 7 min Warm Robe Rest. Guests report immediate lightness in their limbs and remarkable clarity.",
        ],
      },
    ],
  },
  {
    slug: "dynamic-compression-for-athletic-recovery-normatec",
    title: "Pneumatic Compression Systems: Enhancing Lymphatic Flow and Accelerated Turnaround",
    excerpt:
      "A clinical look at sequential dynamic compression technology, biomimetic pulse gradients, and why recovery lounges consider compression boots an essential foundation.",
    category: "Recovery & Biohacking",
    publishedAt: "Sep 03, 2026",
    readTime: "5 min read",
    coverImage: "/Target client/audience-gyms.jpg",
    coverAlt: "Athletes utilizing dynamic pneumatic compression boots in a recovery club",
    featured: false,
    author: AUTHORS["marcus-vance"],
    tags: ["Pneumatic Compression", "Lymphatic Drainage", "Athletic Recovery", "Sports Club"],
    keyTakeaways: [
      "Dynamic pneumatic compression replicates the muscle pump of the calves, moving fluid up the leg via overlapping graduated chambers.",
      "The hold-and-release cycle prevents backflow while preventing ischemic pressure spikes.",
      "Proven to decrease feelings of muscle stiffness and improve passive range of motion within a single 30-minute session.",
      "Plug-and-play operation makes it the easiest recovery modality to implement in gym lounges and sports clinics.",
    ],
    sections: [
      {
        id: "how-pneumatic-compression-works",
        heading: "Biomimetic Pulsing vs Static Pressure",
        content: [
          "Unlike static compression garments (which deliver constant, uniform pressure), dynamic pneumatic compression systems utilize patented pulse technology that mimics natural peristalsis.",
          "The boots feature five overlapping zones extending from the foot to the upper hip. Each chamber inflates sequentially with precise pressure waves, holding pressure momentarily to prevent fluids from moving downward, before releasing and ascending to the next chamber.",
          "This dynamic sequence assists the lymphatic system and deep venous valves, expediting the removal of metabolic metabolites and fluid accumulation from heavy training.",
        ],
      },
      {
        id: "why-lounges-start-here",
        heading: "The Ideal First Step for Any Wellness Studio",
        content: [
          "For boutique fitness studios, CrossFit boxes, and physio clinics wanting to introduce recovery technology, pneumatic compression boots represent the lowest friction entry point:",
          "• **Zero Plumbing or Water Required:** Runs on rechargeable battery or standard 110/220V wall outlets.",
          "• **Fast Sanitation:** Medical-grade wipe-down fabrics sanitize in under 45 seconds between clients.",
          "• **Multi-Client Lounges:** 4 to 8 stations can operate simultaneously with high community buzz and social engagement.",
        ],
      },
    ],
    relatedEquipment: [
      {
        name: "PulseWave Go Wireless Air Compression Boots",
        category: "Active Recovery & Massage (Relax)",
        image: "/GPW Product mockup/Compression/PulseWave Go Wireless Air Compression Boots/PulseWave Go.png",
        link: "/products/compression-boots-dj-sets",
        description:
          "Cordless air-compression boots with an on-boot LED controller, Bluetooth sync and five overlapping chambers.",
      },
    ],
  },
  {
    slug: "wellness-roi-how-gyms-and-spas-monetize-recovery-tech",
    title: "The Economics of Longevity: How Boutique Studios and Spas Monetize Recovery Lounges",
    excerpt:
      "A pragmatic financial breakdown of equipment leasing, tier-based memberships, per-session booking models, and payback periods for commercial wellness operators.",
    category: "Commercial Suites & Spas",
    publishedAt: "Sep 22, 2026",
    readTime: "8 min read",
    coverImage: "/Target client/audience-seniorliving.jpg",
    coverAlt: "Executive consulting over commercial wellness facility plans",
    featured: false,
    author: AUTHORS["david-chen"],
    tags: ["Wellness ROI", "Gym Monetization", "Unit Economics", "Equipment Rental"],
    keyTakeaways: [
      "Adding a dedicated recovery lounge typically reduces member churn by 18–25% in high-end fitness facilities.",
      "Most studio operators achieve cashflow positivity on recovery equipment suites within 4 to 6 months of installation.",
      "Tiered membership structures (e.g. +$49/mo for unlimited compression & red light) create stable recurring revenue streams.",
      "Equipment leasing programs minimize initial capital expenditure while preserving working capital.",
    ],
    sections: [
      {
        id: "the-retention-revolution",
        heading: "Retention is the New Acquisition: The True Value of Recovery",
        content: [
          "Gym and boutique fitness operators routinely face annual member attrition rates of 30% to 50%. The primary drivers of churn are injury, chronic fatigue, or burnout. When members fail to recover adequately, workouts become daunting rather than energizing.",
          "By introducing recovery amenities—infrared cabins, compression boots, and contrast stations—studios fundamentally change their relationship with their members. A facility is no longer just a place to exert energy; it becomes the sanctuary where energy is replenished.",
          "Data from GreenPulse-equipped commercial partners shows that members who utilize the recovery lounge at least twice per week demonstrate an 82% retention rate year-over-year.",
        ],
      },
      {
        id: "the-two-pricing-models",
        heading: "Pricing Strategies: All-Inclusive Tiers vs Pay-Per-Session",
        content: [
          "Successful operators generally employ one of two monetization structures depending on their clientele:",
          "**Model A: The Hybrid Upgrade Tier:**\nBase gym membership is priced at $120/month. A 'Recovery Plus' tier at $179/month grants unlimited off-peak access to compression lounges and 4 infrared sessions monthly. Adoption rates typically average 22% of total members within 90 days.",
          "**Model B: Private Suite Booking (High-End Hospitality & Spas):**\nDedicated 45-minute private suite sessions priced at $75–$120 per session. With 4 sessions per day, a single suite generates $9,000 to $14,000 monthly against a minimal lease cost.",
        ],
      },
      {
        id: "equipment-turnkey-support",
        heading: "Why Turnkey Support & Servicing Matters",
        content: [
          "Commercial wellness equipment is an active business asset. Equipment downtime directly damages reputation and revenue.",
          "GreenPulse's turnkey commercial offering includes white-glove delivery, site electrical assessments, certified staff protocol training, and ongoing preventative maintenance SLA agreements, giving operators complete peace of mind.",
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getFeaturedPost(): BlogPost {
  const featured = BLOG_POSTS.find((p) => p.featured);
  return featured || BLOG_POSTS[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return BLOG_POSTS.slice(0, count);
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, count);
}

export function getAllCategories(): string[] {
  return ["All", "Longevity & Tech", "Recovery & Biohacking", "Commercial Suites & Spas", "Science & Modalities"];
}
