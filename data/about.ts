import { contact } from "./home";

export type AboutStat = {
  value: string;
  label: string;
  subtext: string;
};

export type AboutPillar = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  specs: string[];
  icon: "Atom" | "ShieldCheck" | "Truck" | "HeartPulse";
};

export type EcosystemSector = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  modalities: string[];
  typicalFootprint: string;
  outcomes: string[];
};

export type MethodologyStep = {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type StandardItem = {
  category: string;
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
};

export type AboutFaqItem = {
  question: string;
  answer: string;
};

export const aboutData = {
  hero: {
    badge: "About GreenPulse Wellness",
    subBadge: "Established 2024 · Pan-India & Global Procurement",
    title: "Wellness-Led Design, Purpose-Built Technology",
    lead:
      "Green Pulse curates advanced technology and products designed to support better recovery, rehabilitation, mobility, independent living and wellness — for clinical sanctuaries, luxury destinations, elite athletic clubs, and discerning private residences.",
    stats: [
      {
        value: "50+",
        label: "Commercial Systems",
        subtext: "Curated across thermal, pressure, light & mechanical modalities",
      },
      {
        value: "100%",
        label: "Low-EMF & Certified",
        subtext: "CE, ISO 9001/13485 compliant manufacturing with verified testing",
      },
      {
        value: "6",
        label: "Industry Verticals",
        subtext: "From hospital rehabilitation suites to 5-star hotel spas",
      },
      {
        value: "360°",
        label: "Turnkey Integration",
        subtext: "Consultation, spatial layout, customs clearance, install & maintenance",
      },
    ] satisfies AboutStat[],
  },

  story: {
    eyebrow: "Why Green Pulse Exists",
    headline: "Equipment as Part of the Experience, Not a Line on a Spec Sheet",
    narrative1:
      "Green Pulse Wellness was created around a simple idea: equipment should be considered part of the experience of a space, not merely an item on a specification list.",
    narrative2:
      "Bringing a design-led perspective to health and wellness technology, we curate advanced solutions across recovery, rehabilitation, mobility, wellness, longevity and care — evaluated through the people, environments and outcomes they're meant to support, not just a catalogue of products.",
    narrative3:
      "Headquartered in Bengaluru with a nationwide deployment footprint, our team partners directly with developers, hospitality directors, clinical specialists, sports franchises, and private clients to create turnkey recovery spaces that elevate human performance and everyday vitality.",
    quote: {
      text: "Founded from a design and architectural perspective, Green Pulse Wellness approaches equipment sourcing with an understanding that every product ultimately sits within a larger human environment.",
      author: "Green Pulse Wellness",
    },
    highlights: [
      {
        title: "People First",
        desc: "Begin with the people who will use the environment.",
      },
      {
        title: "Space Matters",
        desc: "Consider equipment in relation to movement, layout, accessibility and experience.",
      },
      {
        title: "Thoughtful Sourcing",
        desc: "Evaluate equipment options around project needs rather than a one-size-fits-all catalogue.",
      },
    ],
  },

  pillars: [
    {
      number: "01",
      title: "Biomechanical & Biophysical Rigor",
      tagline: "Calibrated wavelengths, verified pressure curves & therapeutic precision.",
      description:
        "We reject uncalibrated novelty gear. Our photobiomodulation beds feature clinically established 660nm and 850nm dual wavelengths with tested milliwatt irradiance. Our hyperbaric chambers maintain precise 1.3 to 1.5 ATA baric plateaus with redundant mechanical safety reliefs. Every machine delivers real, repeatable physiological stimulus.",
      specs: ["Dual 660nm/850nm Irradiance", "1.3–1.5 ATA Baric Stability", "True SL-Track Biomechanics"],
      icon: "Atom",
    },
    {
      number: "02",
      title: "Material Nobility & Zero-EMF Shielding",
      tagline: "Natural FSC-certified woods, aerospace alloy & zero toxic outgassing.",
      description:
        "The environment inside a wellness chamber must be pure. We build using hypoallergenic, untreated Canadian Hemlock and Western Red Cedar, food-grade silicone seals, and aerospace carbon composites. Every heating element is shielded to produce near-zero electromagnetic radiation (EMF/ELF < 0.2 mG at contact).",
      specs: ["FSC Canadian Hemlock & Cedar", "< 0.2 mG Ultra-Low EMF", "Zero-VOC Non-Toxic Adhesives"],
      icon: "ShieldCheck",
    },
    {
      number: "03",
      title: "Full-Lifecycle White-Glove Execution",
      tagline: "From electrical blueprints to customs clearance and staff certification.",
      description:
        "Purchasing commercial hardware should never mean receiving a palette at the kerb. Our engineers review your single-line electrical diagrams, structural floor loads, and acoustic isolation before dispatch. We manage international freight, customs clearance, on-site installation, and staff operating certification.",
      specs: ["Electrical & HVAC Blueprinting", "Door-to-Room Commissioning", "Staff SOP Certification"],
      icon: "Truck",
    },
    {
      number: "04",
      title: "Transparent Ethics & Safety Governance",
      tagline: "Responsible wellness classification with clear contraindication screening.",
      description:
        "We maintain uncompromising ethical boundaries. Our systems are classified as general wellness, physical conditioning, and restorative recovery equipment. We equip operators with comprehensive client screening protocols, contraindication matrices, and emergency egress protocols so every session is safe.",
      specs: ["Standardized Client Waivers", "Contraindication Protocols", "Redundant Emergency Egress"],
      icon: "HeartPulse",
    },
  ] satisfies AboutPillar[],

  ecosystem: [
    {
      id: "longevity",
      title: "Longevity & Biohacking Centers",
      tagline: "Multi-modality protocols for cellular restoration and biological rejuvenation.",
      description:
        "Turnkey treatment suites combining mild hyperbarics (mHBOT), full-body red light photobiomodulation, whole-body cryotherapy, and lymphatic drainage. Designed for high throughput with rapid turnaround between appointments.",
      image: "/Target client/audience-longevity.png",
      modalities: ["Mild Hyperbaric Chambers", "Full-Body Red Light Beds", "Dynamic Pneumatic Boots", "Cryo Recovery Systems"],
      typicalFootprint: "400 – 1,200 sq.ft across 3–5 treatment rooms",
      outcomes: ["Increased client retention", "Premium protocol ticket sizes", "12-hour commercial duty cycles"],
    },
    {
      id: "hotel-spa",
      title: "Luxury Hotel & Resort Spas",
      tagline: "Architectural wellness hardware that elevates five-star guest experiences.",
      description:
        "Infrared sauna suites, zero-gravity SL-track robotic massage lounges, and contrast therapy circuits designed with warm timber finishes that harmonize with five-star hospitality aesthetics.",
      image: "/Target client/audience-hotel.jpg",
      modalities: ["Halo Infrared Wellness Cabins", "4D Robotic Massage Chairs", "Hybrid Saunas", "Restorative Hydrotherapy"],
      typicalFootprint: "250 – 800 sq.ft suite or private cabanas",
      outcomes: ["Touchless wellness revenue", "High guest satisfaction", "Quiet operation below 45 dB"],
    },
    {
      id: "sports-clubs",
      title: "Elite Athletic Clubs & Performance Gyms",
      tagline: "Accelerating muscular recovery velocity and post-training regeneration.",
      description:
        "High-output recovery zones for athletes and fitness enthusiasts. Rapid lactic acid clearance with dynamic air compression, localized cryotherapy, and deep tissue percussive therapy stations.",
      image: "/Target client/audience-gyms.jpg",
      modalities: ["PulseWave Compression Systems", "Heavy-Duty Infrared Saunas", "Ice Bath & Contrast Stations", "Percussive Therapy Bars"],
      typicalFootprint: "300 – 1,500 sq.ft open recovery floor",
      outcomes: ["Faster player turnaround", "Reduced soft tissue downtime", "Durable sweat-resistant upholstery"],
    },
    {
      id: "clinics",
      title: "Physiotherapy & Chiropractic Practices",
      tagline: "Precision motorized biomechanics and targeted neuromuscular relief.",
      description:
        "Electric drop and flexion-distraction chiropractic tables, motorized decompression, and target pneumatic compression that amplify manual physical therapy interventions.",
      image: "/Target client/audience-physio.jpg",
      modalities: ["Rise Standing Wheelchairs", "Pneumatic Compression Systems", "Local Red Light Therapy", "Posture Alignment Tools"],
      typicalFootprint: "150 – 500 sq.ft per consulting bay",
      outcomes: ["Reduced therapist fatigue", "Quantifiable client progression", "Ergonomic clinical durability"],
    },
    {
      id: "senior-living",
      title: "Assisted Living & Senior Communities",
      tagline: "Gentle mobility assistance, joint circulation, and restful pain relief.",
      description:
        "Ergonomically contoured electric recliner massage chairs, gentle thermal leg circulation devices, and foldable electric assistive chairs that protect resident dignity and independence.",
      image: "/Target client/audience-seniorliving.jpg",
      modalities: ["Gentle SL Zero-Gravity Massage", "Thermal Knee & Joint Heaters", "Foldable Assistive Wheelchairs", "Low-Entry Saunas"],
      typicalFootprint: "200 – 600 sq.ft communal wellness lounges",
      outcomes: ["Fall prevention support", "Gentle non-invasive circulation", "Simple single-touch interfaces"],
    },
    {
      id: "homecare",
      title: "Private Sanctuaries & Homecare",
      tagline: "Bespoke residential recovery sanctuaries tailored to private estates.",
      description:
        "Custom-installed private wellness suites designed for private residences. Compact footprints, ultra-silent compressors, smart residential power compatibility, and discrete home aesthetic styling.",
      image: "/hero-wellness-sanctuary.jpg",
      modalities: ["Halo 2 Infrared Cabins", "Softshell/Hardshell mHBOT", "Lounge SL Chairs", "Full-Spectrum Portable Mats"],
      typicalFootprint: "100 – 400 sq.ft bedroom or dedicated room",
      outcomes: ["Daily therapeutic convenience", "Quiet residential operation", "Plug-and-play single-phase power"],
    },
  ] satisfies EcosystemSector[],

  methodology: [
    {
      number: "01",
      phase: "Discovery & Space Planning",
      title: "Spatial Audit & Electrical Load Planning",
      description:
        "We review your floorplans, ceiling heights, doorways, electrical panels, and HVAC capacities. We calculate exact power draws, heat dissipation, and acoustic requirements before a single machine is ordered.",
      deliverables: ["2D/3D Equipment Placement Layout", "Single-Line Electrical Load Map", "Ventilation & Drainage Checklist"],
    },
    {
      number: "02",
      phase: "Curated Selection",
      title: "Protocol-Driven Hardware Specification",
      description:
        "Rather than pushing surplus inventory, we tailor the modality mix to your demographic: whether targeting biohackers, hotel guests, rehab patients, or active seniors.",
      deliverables: ["Customized Hardware Specification Dossier", "Duty-Cycle & Throughput Forecast", "Turnkey Package Costing"],
    },
    {
      number: "03",
      phase: "Procurement & Import",
      title: "End-to-End International Logistics & Customs",
      description:
        "We manage international freight, maritime insurance, customs clearance, GST documentation, and secure warehousing. You receive zero surprise import fees or port clearance bottlenecks.",
      deliverables: ["All-Inclusive Import Clearances", "Door-to-Door Insured Freight", "Live Tracking & Arrival Coordination"],
    },
    {
      number: "04",
      phase: "On-Site Commissioning",
      title: "White-Glove Assembly & Safety Verification",
      description:
        "Our specialized technicians arrive on-site to unbox, assemble, level, wire, and test every system. We conduct pressure integrity checks on hyperbaric chambers and verify zero-EMF readings on saunas.",
      deliverables: ["Physical Commissioning & Levelling", "Pressure & Thermal Safety Testing", "Sign-Off Performance Checklist"],
    },
    {
      number: "05",
      phase: "Staff Handover",
      title: "Operator Protocols & Safety Certification",
      description:
        "We train your spa managers, trainers, or clinic staff on operating procedures, cleaning protocols, contraindication screening, client onboarding, and emergency procedures.",
      deliverables: ["Staff Operator Manuals", "Client Intake & Waiver Templates", "Sanitization & Hygiene Protocols"],
    },
    {
      number: "06",
      phase: "Lifecycle Assurance",
      title: "Preventive Servicing & Genuine Spares",
      description:
        "Our relationship begins at installation. We provide scheduled preventive maintenance checkups, guaranteed availability of genuine replacement components, and direct WhatsApp engineering support.",
      deliverables: ["Scheduled Annual Maintenance", "Stocked Pan-India Spare Parts", "Dedicated 24/7 Technical WhatsApp Desk"],
    },
  ] satisfies MethodologyStep[],

  standards: [
    {
      category: "Thermal & Timber Purity",
      headline: "FSC-Certified Canadian Woods & Non-Toxic Construction",
      description:
        "Our sauna cabins use slow-grown Canadian Hemlock and Western Red Cedar. Natural aromatic properties resist moisture, warping, and bacterial growth without toxic varnishes or chemical sealants.",
      metrics: [
        { label: "Timber Origin", value: "FSC Canadian Hemlock" },
        { label: "Adhesive Standard", value: "Zero-VOC Food Grade" },
        { label: "Bacterial Resistance", value: "Natural Antimicrobial" },
      ],
    },
    {
      category: "Electromagnetic Safety",
      headline: "Shielded Elements with Ultra-Low EMF & ELF Radiation",
      description:
        "Many cheap infrared saunas emit dangerous levels of magnetic radiation. GreenPulse heaters feature multi-layer grounded carbon shielding, keeping EMF levels well below 0.2 mG at body contact.",
      metrics: [
        { label: "EMF at Body Contact", value: "< 0.2 mG (Near Zero)" },
        { label: "ELF Electric Field", value: "< 10 V/m" },
        { label: "Shielding", value: "Double-Insulated Grounded" },
      ],
    },
    {
      category: "Pressure Engineering",
      headline: "Aviation-Grade TPU & Dual Mechanical Pressure Relief",
      description:
        "Our mild hyperbaric oxygen chambers are fabricated with heavy-duty multi-layer TPU and carbon shells, tested to 3x their maximum operating pressure. Dual mechanical pop-off valves eliminate over-pressurization risks.",
      metrics: [
        { label: "Working Pressure", value: "1.3 – 1.5 ATA (30–50 kPa)" },
        { label: "Safety Redundancy", value: "Dual Pop-Off Valves" },
        { label: "Burst Safety Factor", value: "300% Rated Margin" },
      ],
    },
    {
      category: "Global Compliance",
      headline: "Certified to International Commercial Electrical Standards",
      description:
        "All electronics, transformers, compressors, and power supplies adhere to rigorous international electrical safety standards including CE, RoHS, and ISO 9001 quality management guidelines.",
      metrics: [
        { label: "Quality System", value: "ISO 9001 / ISO 13485" },
        { label: "Electrical Compliance", value: "CE & RoHS Certified" },
        { label: "Indian Grid Match", value: "220-240V 50Hz Standard" },
      ],
    },
  ] satisfies StandardItem[],

  faqs: [
    {
      question: "What is GreenPulse Wellness and what is your business model?",
      answer:
        "GreenPulse Wellness is India's premier turnkey provider of commercial recovery, longevity, and rehabilitation hardware. We source, import, customize, install, and service cutting-edge technologies including infrared saunas, hyperbaric oxygen chambers, cryotherapy suites, red-light therapy beds, robotic SL-track massage chairs, and clinical physical therapy equipment for commercial facilities and private estates.",
    },
    {
      question: "Do you handle customs clearance, import duties, and shipping across India?",
      answer:
        "Yes, completely. All prices quoted for turnkey equipment projects include international freight, comprehensive cargo insurance, Indian customs brokerage, GST clearance, and door-to-room delivery. You never have to deal with shipping agents or freight forwarding logistics.",
    },
    {
      question: "What electrical and plumbing provisions do we need to prepare?",
      answer:
        "Most of our systems—including massage chairs, compression systems, and standard infrared cabins—operate on standard 220V–240V single-phase Indian electrical connections with a 15A or 16A socket. Larger shared cabins or commercial sauna heaters may require a dedicated 3-phase line (typically 6kW to 9kW). We provide a detailed architectural MEP (Mechanical, Electrical, Plumbing) guide prior to delivery.",
    },
    {
      question: "How do you handle warranty, maintenance, and replacement spare parts?",
      answer:
        "Every commercial system carries a comprehensive 1 to 2-year warranty covering frame, electronics, heaters, and pressure mechanics. We maintain inventory of essential replacement parts—controllers, heaters, valves, air pumps, and cables—in India for rapid dispatch. Our technicians provide on-site service and scheduled preventive audits.",
    },
    {
      question: "Can we visit to test or experience the equipment before purchasing?",
      answer:
        "Yes. We regularly host private demonstrations and exhibit at major wellness expos across India (such as IHFC Mumbai). You can reach out to our team to arrange a live demonstration or virtual video tour with our technical specialists.",
    },
    {
      question: "Do you offer equipment rental or leasing for clinics and hospitals?",
      answer:
        "Yes, we provide flexible commercial rental and lease-to-own programs for healthcare organizations, rehabilitation clinics, and senior living facilities for selected lines such as pneumatic compression, mobility wheelchairs, and recovery chairs. Contact our team to request commercial lease pricing.",
    },
    {
      question: "How long does delivery and installation take from the time of order?",
      answer:
        "In-stock inventory in our India hub delivers within 5 to 10 business days. Custom-ordered architectural saunas, hardshell hyperbaric chambers, or bespoke clinic suites typically require 4 to 8 weeks for custom manufacturing, maritime shipping, and customs clearance.",
    },
  ] satisfies AboutFaqItem[],

  cta: {
    eyebrow: "Transform Your Space",
    headline: "Equip Your Facility with the Future of Longevity Technology",
    subtext:
      "Whether you are blueprinting a flagship longevity sanctuary, upgrading a resort spa, or outfitting an elite athletic facility, our wellness engineers are ready to assist with spatial design and equipment selection.",
    primaryCta: {
      label: "Schedule a Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Chat with an Engineer",
      whatsappMessage: "Hi GreenPulse Wellness, I would like to schedule a consultation regarding wellness equipment.",
    },
    catalogCta: {
      label: "Explore Equipment Catalog",
      href: "/products",
    },
  },
};
