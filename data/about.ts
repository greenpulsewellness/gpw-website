import { contact } from "./home";

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

export type ComparisonRow = {
  topic: string;
  greenpulse: string;
  typical: string;
};

export type AboutFaqItem = {
  question: string;
  answer: string;
};

export const aboutData = {
  hero: {
    badge: "About GreenPulse Wellness",
    subBadge: "Designed. Equipped. Launched.",
    title: "Recovery Spaces, Designed Before They Are Built",
    lead:
      "GreenPulse helps businesses build recovery and wellness spaces that work. We design them, equip them and launch them, for wellness centres, gyms, clinics, hotels, senior living and homes.",
  },

  story: {
    eyebrow: "Why GreenPulse Exists",
    headline: "A Recovery Space Should Be Planned Like a Space, Not Ordered Like a Machine",
    narrative1:
      "GreenPulse started with a simple idea: equipment is part of the experience of a space, not a line on a specification list.",
    narrative2:
      "Our founder comes from architecture and design, so we start with the room: how people move through it, where the power and water come in, and how it feels to walk in. Then we choose the heat, cold, light and relaxation products that belong there, from one catalogue.",
    narrative3:
      "We work directly with owners, architects and operators to plan the whole space around the business. Unlike a supplier who ships a machine and leaves, we stay with you through installation, training and opening.",
    quote: {
      text: "Our vision is to make recovery and wellness part of everyday life in India, in every gym, clinic, hotel, home and care setting.",
      author: "GreenPulse Wellness",
    },
    highlights: [
      {
        title: "Purpose Before Product",
        desc: "Every product has to earn its place in a space. We do not add something just because it sells.",
      },
      {
        title: "Design in Every Detail",
        desc: "Layouts, finishes, images and words should all look as premium as the space itself.",
      },
      {
        title: "Honest Claims",
        desc: "We say what a product is and what it does, and stop there.",
      },
    ],
  },

  pillars: [
    {
      number: "01",
      title: "Design",
      tagline: "We plan the whole space.",
      description:
        "Every project starts with the room. We look at the floor plan, ceiling heights, power, water, drainage and ventilation, then draw a layout that fits your business. You see where each product sits and how people move between them.",
      specs: ["2D / 3D Layouts", "Power & Drainage Checklist", "Flow & Spacing Plan"],
      icon: "Atom",
    },
    {
      number: "02",
      title: "Equip",
      tagline: "Heat, cold, light and relax from one catalogue.",
      description:
        "Our product families are built to work together: Halo saunas, Arctic cold plunges, Luma light devices, Serene massage chairs and PulseWave compression. Each one comes with a standard spec sheet covering size, weight, power and placement needs.",
      specs: ["One Catalogue, One Look", "Standard Spec Sheets", "Matched to Your Space"],
      icon: "Truck",
    },
    {
      number: "03",
      title: "Launch",
      tagline: "We help you open it and fill it.",
      description:
        "A space is only finished when people are using it. We install and test every product, train your team, and help you plan your session menu so you open with confidence.",
      specs: ["Installation & Testing", "Team Training", "Session Menu Planning"],
      icon: "HeartPulse",
    },
    {
      number: "04",
      title: "Honest Claims & Safety",
      tagline: "Clear information, careful wording.",
      description:
        "We describe products by what they are and how they fit a space, never by health outcomes. Safety guidance, user screening and operator training are part of every project, and we ask customers to consult a doctor for any medical question.",
      specs: ["Plain-Language Specs", "User Screening Guidance", "Operator Training"],
      icon: "ShieldCheck",
    },
  ] satisfies AboutPillar[],

  ecosystem: [
    {
      id: "wellness-centres",
      title: "Wellness & Longevity Centres",
      tagline: "Recovery spaces that look as premium as your brand.",
      description:
        "Recovery studios and longevity centres combining heat, cold, light and relaxation in one planned floor. We design the flow between rooms so every session feels considered.",
      image: "/Target%20client/audience-longevity.webp",
      modalities: ["Halo Infrared Cabins", "Arctic Cold Plunges", "Luma Light Devices", "Serene Massage Chairs"],
      typicalFootprint: "400 – 1,200 sq.ft across 3–5 rooms",
      outcomes: ["A complete multi-therapy floor", "Consistent look across rooms", "Clear layout before installation"],
    },
    {
      id: "sports-clubs",
      title: "Premium Gyms & Sports Centres",
      tagline: "Give members a reason to stay.",
      description:
        "A recovery zone beside the training floor, built for steady daily use. Durable finishes and a layout that keeps members moving between stations.",
      image: "/Target client/audience-gyms.jpg",
      modalities: ["PulseWave Compression", "Halo Saunas", "Arctic Cold Plunges", "Serene Massage Chairs"],
      typicalFootprint: "300 – 1,500 sq.ft recovery floor",
      outcomes: ["A clear member-facing offer", "Easy-to-clean, durable finishes", "Room to grow the zone later"],
    },
    {
      id: "clinics",
      title: "Physio & Chiropractic Practices",
      tagline: "Comfortable, practical equipment for your bays.",
      description:
        "Compact recovery products that fit consulting bays and waiting areas. Your clinic decides how it uses them; our material makes no treatment claims.",
      image: "/Target client/audience-physio.jpg",
      modalities: ["Rise Standing Chairs", "PulseWave Compression", "Luma Light Devices", "Glide Mobility Aids"],
      typicalFootprint: "150 – 500 sq.ft per bay",
      outcomes: ["Compact footprints", "Simple controls for staff", "Durable clinical finishes"],
    },
    {
      id: "hotel-spa",
      title: "Hotel Spas & Residential Wellness",
      tagline: "Wellness that suits a five-star setting.",
      description:
        "Infrared and hybrid saunas, massage lounges and cold plunges finished in warm timber, planned with architects and interior designers to match the property.",
      image: "/Target client/audience-hotel.jpg",
      modalities: ["Halo Infrared Cabins", "Halo Hybrid Saunas", "Serene Massage Chairs", "Arctic Cold Plunges"],
      typicalFootprint: "250 – 800 sq.ft suite or private cabana",
      outcomes: ["Fits the property's design language", "Quiet, guest-friendly operation", "A planned guest journey"],
    },
    {
      id: "senior-living",
      title: "Senior Living & Care Settings",
      tagline: "Comfort, accessibility and dignity.",
      description:
        "Comfortable seating and mobility products for shared lounges and care settings, with simple controls and layouts that keep movement easy.",
      image: "/Target client/audience-seniorliving.jpg",
      modalities: ["Serene Lounge Chairs", "Glide Mobility Aids", "Rise Standing Chairs", "Low-Entry Saunas"],
      typicalFootprint: "200 – 600 sq.ft shared lounge",
      outcomes: ["Accessible layouts", "Simple single-touch controls", "Comfort-first finishes"],
    },
    {
      id: "homecare",
      title: "Private Homes",
      tagline: "A recovery room designed for your home.",
      description:
        "Compact private wellness rooms planned around your home's power, space and style, with quiet products and discreet finishes.",
      image: "/hero-wellness-sanctuary.jpg",
      modalities: ["Halo 2 Infrared Cabins", "Serene Lounge Chairs", "Luma Light Devices", "Portable Heat Mats"],
      typicalFootprint: "100 – 400 sq.ft room",
      outcomes: ["Compact footprints", "Quiet residential operation", "Standard single-phase power"],
    },
  ] satisfies EcosystemSector[],

  comparison: {
    eyebrow: "GreenPulse vs. Equipment-Only Suppliers",
    headline: "What You Get With GreenPulse, and What You Usually Don't",
    intro:
      "Many suppliers ship a machine and leave. GreenPulse designs, equips and launches the whole recovery space. Here is how the two approaches compare.",
    columns: {
      topic: "What matters",
      greenpulse: "GreenPulse Wellness",
      typical: "Typical equipment-only supplier",
    },
    caption:
      "Comparison of GreenPulse Wellness with a typical equipment-only supplier across planning, products, information, installation, training, launch and support.",
    rows: [
      {
        topic: "Space planning",
        greenpulse: "We plan the whole room: layout, power, drainage and ventilation notes, drawn before you build.",
        typical: "You receive a machine and work out the room yourself.",
      },
      {
        topic: "Product range",
        greenpulse: "Heat, cold, light and relax products from one catalogue, in one consistent look.",
        typical: "One or two product types, or a mixed list of unrelated items.",
      },
      {
        topic: "Product information",
        greenpulse: "A standard spec sheet for every product: size, weight, power, placement needs and what is included.",
        typical: "A short brochure with missing or inconsistent specifications.",
      },
      {
        topic: "Design quality",
        greenpulse: "Architect-led design: finishes, layouts, images and wording all look premium.",
        typical: "Equipment chosen from a price list, with no design input.",
      },
      {
        topic: "Claims",
        greenpulse: "Plain descriptions of what a product is. No medical claims, no named conditions, no promised results.",
        typical: "Strong health claims with little or no named evidence.",
      },
      {
        topic: "Installation",
        greenpulse: "On-site assembly, testing and a safety check, signed off with you.",
        typical: "Delivery to the door, with installation left to you.",
      },
      {
        topic: "Team training",
        greenpulse: "Operator guides, user screening guidance and cleaning routines for your staff.",
        typical: "A manual in the box.",
      },
      {
        topic: "Opening your space",
        greenpulse: "Help planning your session menu and opening content, and a check-in after you open.",
        typical: "No launch help once the machine is delivered.",
      },
      {
        topic: "Point of contact",
        greenpulse: "One team from the first conversation to opening day.",
        typical: "Different people for sales, delivery and support.",
      },
    ] satisfies ComparisonRow[],
    summary:
      "In short: GreenPulse is a space partner that designs, equips and launches recovery and wellness spaces, while an equipment-only supplier sells a machine and stops there.",
  },

  methodology: [
    {
      number: "01",
      phase: "Discover",
      title: "Understand Your Business and Space",
      description:
        "We ask five things first: your type of space, the room you have, your budget band, your timeline and who decides. Then we visit or review your plans.",
      deliverables: ["Space & Goals Brief", "Site Checklist", "Photos & Measurements"],
    },
    {
      number: "02",
      phase: "Design",
      title: "Layout and Product Mix",
      description:
        "We plan the whole room: where each product goes, how power, water and drainage reach it, and how guests move through. The product mix is matched to your clients, not to a stock list.",
      deliverables: ["2D / 3D Layout", "Electrical & Drainage Plan", "Product Spec Sheets"],
    },
    {
      number: "03",
      phase: "Equip",
      title: "A Clear Quote for the Whole Space",
      description:
        "You receive a quote pack covering the products, installation, training and timeline, so there are no surprises later.",
      deliverables: ["Quote Pack", "Installation Timeline", "Payment Terms"],
    },
    {
      number: "04",
      phase: "Install",
      title: "Installation and Safety Checks",
      description:
        "Our technicians assemble, level, wire and test every product on site, then run a safety check and sign-off with you.",
      deliverables: ["On-Site Installation", "Safety & Function Testing", "Sign-Off Checklist"],
    },
    {
      number: "05",
      phase: "Train",
      title: "Team Training and Safe Operation",
      description:
        "We train your team on operation, cleaning, user screening and what to do in an emergency, and leave you with simple written guides.",
      deliverables: ["Operator Guides", "User Screening Templates", "Cleaning Routines"],
    },
    {
      number: "06",
      phase: "Launch",
      title: "Open With Confidence",
      description:
        "We help you plan your session menu, opening posts and signage, and stay in touch after you open to see how the space is running.",
      deliverables: ["Session Menu", "Launch Content", "Post-Opening Check-In"],
    },
  ] satisfies MethodologyStep[],

  standards: [
    {
      category: "Honest Claims",
      headline: "We Say What a Product Is, Not What It Cures",
      description:
        "Every product is described by its specifications and how it fits a space. We make no medical claims, and we do not name conditions or promise results.",
      metrics: [
        { label: "Product Copy", value: "Specs & Experience" },
        { label: "Health Outcomes", value: "Never Claimed" },
        { label: "Medical Questions", value: "Ask Your Doctor" },
      ],
    },
    {
      category: "Safety Guidance",
      headline: "Screening, Training and Clear Operating Rules",
      description:
        "Every project includes user screening guidance, operator training and written operating rules. Products that need a trained operator are sold for supervised settings only.",
      metrics: [
        { label: "Screening", value: "Guidance Provided" },
        { label: "Operators", value: "Trained Before Opening" },
        { label: "Supervised Products", value: "Supervised Settings Only" },
      ],
    },
    {
      category: "Spec Sheets",
      headline: "One Standard Sheet for Every Product",
      description:
        "Each product has a standard spec sheet: size, weight, power, placement needs, capacity, materials and what is included, so you can plan before you decide.",
      metrics: [
        { label: "Size & Weight", value: "Listed" },
        { label: "Power & Placement", value: "Listed" },
        { label: "What's Included", value: "Listed" },
      ],
    },
    {
      category: "Product Families",
      headline: "One Catalogue, Named and Organised the Same Way",
      description:
        "Products are grouped into families such as Halo, Arctic, Luma, Serene and PulseWave, and presented in the same order everywhere: Relax, Heat, Light, Cold.",
      metrics: [
        { label: "Naming", value: "Family + Model" },
        { label: "Order", value: "Relax · Heat · Light · Cold" },
        { label: "Images", value: "Exact Model Only" },
      ],
    },
  ] satisfies StandardItem[],

  faqs: [
    {
      question: "What is GreenPulse Wellness and what do you do?",
      answer:
        "GreenPulse helps businesses build recovery and wellness spaces. We design the layout, equip it from one catalogue of heat, cold, light and relaxation products, and help you launch it. We work with wellness centres, gyms, clinics, hotels, senior living and homes.",
    },
    {
      question: "Who do you work with?",
      answer:
        "Owners and operators opening or upgrading a recovery or wellness space, along with their architects and interior designers. We start with wellness centres and premium gyms, and also work with physio clinics, hotel spas, senior living and private homes.",
    },
    {
      question: "What does a project look like from start to finish?",
      answer:
        "We start with a conversation about your space and goals, then a site visit or plan review. You receive a layout and a quote pack. After approval we install and test the products, train your team and help you plan your opening.",
    },
    {
      question: "What electrical and plumbing provisions do we need to prepare?",
      answer:
        "Many of our products, including massage chairs and compression systems, run on a standard single-phase connection. Larger saunas and cold plunges may need a dedicated power line, water and drainage. Each spec sheet lists the requirements, and we confirm them during the site visit.",
    },
    {
      question: "Do you publish prices?",
      answer:
        "Prices are shared in your quote pack, because the right mix depends on your space. Tell us about your space and we will send you a plan.",
    },
    {
      question: "Can I see the products before I decide?",
      answer:
        "Get in touch and we will talk you through the products, share spec sheets and arrange a demonstration where possible.",
    },
    {
      question: "Can you give medical advice about using the products?",
      answer:
        "No. We cannot advise on medical conditions, so please ask your doctor. Products are not a substitute for medical advice, and anyone with a heart condition, who is pregnant or who has any health concern should consult a doctor before use.",
    },
  ] satisfies AboutFaqItem[],

  cta: {
    eyebrow: "Plan Your Space",
    headline: "Let's Plan Your Recovery Space",
    subtext:
      "Whether you are opening a wellness centre, adding a recovery zone to a gym or fitting out a hotel spa, tell us about your space and we will help with the layout and the right product mix.",
    primaryCta: {
      label: "Schedule a Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Chat with Us",
      whatsappMessage: "Hi GreenPulse Wellness, I would like to schedule a consultation regarding a wellness space.",
    },
    catalogCta: {
      label: "Explore the Catalogue",
      href: "/products",
    },
  },
};
