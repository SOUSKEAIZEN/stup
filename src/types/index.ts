export type ProjectCategory = 'all' | 'websites' | 'applications' | 'ui-ux' | 'ecommerce' | 'branding';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'design' | 'web' | 'apps' | 'tech';
  iconName: string;
  deliverables: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  heroImage: string;
  thumbnail: string;
  secondaryImage: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  designAndDev: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceINR: number | null; // null for custom
  priceDisplay: string;
  billingPeriod: string;
  targetAudience: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface NavItem {
  name: string;
  href: string;
}
