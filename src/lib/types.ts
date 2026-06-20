export type Locale = "vi" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type Program = {
  title: string;
  slug: string;
  aliases?: string[];
  category: string;
  audience: string;
  schedule: string;
  language: string;
  thumbnail: string;
  description: string;
  registrationUrl?: string;
  roadmap?: {
    summary: string;
    stagesTitle: string;
    stages: { title: string; description: string }[];
    outcomesTitle: string;
    outcomes: string[];
    featuresTitle: string;
    features: string[];
  };
};

export type Instructor = {
  name: string;
  position: string;
  avatar: string;
  description: string;
  socialLinks?: { label: string; url: string }[];
};

export type Partner = {
  name: string;
  logo: string;
  website?: string;
  description: string;
};

export type NewsArticle = {
  title: string;
  slug: string;
  featuredImage: string;
  category: string;
  author: string;
  publishDate: string;
  excerpt: string;
  content: string[];
};

export type SiteContent = {
  nav: NavItem[];
  cta: { label: string; href: string };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    body: string[];
    mission: string;
    vision: string;
  };
  features: { title: string; description: string }[];
  values: { letter: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
  programs: Program[];
  instructors: Instructor[];
  partners: Partner[];
  news: NewsArticle[];
  impact: {
    title: string;
    description: string;
    testimonials: { quote: string; source: string }[];
  };
  support: {
    title: string;
    description: string;
    actions: string[];
  };
  contact: {
    email: string;
    phone: string;
    addresses: string[];
  };
};
