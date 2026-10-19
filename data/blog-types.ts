export type BlogCategory =
  | "Heat & Infrared"
  | "Cold & Contrast"
  | "Red Light & Photobiomodulation"
  | "Oxygen & Hyperbaric"
  | "Compression & Massage"
  | "Business & Facility Design"
  | "Healthy Ageing & Mobility";

/** Topic cluster — drives the hub-and-spoke internal linking (one pillar guide per cluster). */
export type BlogCluster = "heat" | "cold" | "light" | "air" | "recovery" | "business" | "ageing";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
};

export type BlogSection = {
  id: string;
  heading: string;
  /**
   * Paragraphs. Supports **bold**, "• " / "1. " list lines, and inline links: [anchor text](/blog/some-slug).
   */
  content: string[];
  callout?: {
    type: "tip" | "science" | "quote";
    text: string;
    source?: string;
  };
};

export type BlogFaq = { question: string; answer: string };

export type BlogEquipment = {
  name: string;
  category: string;
  image: string;
  link: string;
  description: string;
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
  relatedEquipment?: BlogEquipment[];
  /** Topic cluster this post belongs to. */
  cluster?: BlogCluster;
  /** True for the cluster's pillar guide (links out to every spoke in the cluster). */
  pillar?: boolean;
  /** Hand-picked "Continue reading" slugs, in priority order. */
  relatedSlugs?: string[];
  /** Target keywords for <meta keywords> and structured data. */
  keywords?: string[];
  /** "People also ask" questions. Rendered at the bottom of the article and emitted as FAQPage structured data. */
  faqs?: BlogFaq[];
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

export const CLUSTERS: Record<BlogCluster, { label: string; category: BlogCategory; pillar: string }> = {
  heat: { label: "Infrared & Heat", category: "Heat & Infrared", pillar: "infrared-sauna-buying-guide" },
  cold: { label: "Cold & Contrast", category: "Cold & Contrast", pillar: "cold-plunge-buying-guide" },
  light: { label: "Red Light", category: "Red Light & Photobiomodulation", pillar: "red-light-therapy-complete-guide" },
  air: { label: "Hyperbaric Oxygen", category: "Oxygen & Hyperbaric", pillar: "hyperbaric-oxygen-chamber-guide" },
  recovery: { label: "Compression & Massage", category: "Compression & Massage", pillar: "air-compression-boots-guide" },
  business: { label: "Recovery Business", category: "Business & Facility Design", pillar: "how-to-start-a-recovery-lounge" },
  ageing: { label: "Healthy Ageing & Mobility", category: "Healthy Ageing & Mobility", pillar: "wellness-lounge-for-senior-living" },
};
