export type ProjectCategory = 'all' | 'websites' | 'applications' | 'ui-ux' | 'ecommerce' | 'branding';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  businessValue: string;
  category: 'design' | 'web' | 'apps' | 'tech';
  iconName: string;
  deliverables: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  typology: string; // e.g. "Fintech Interface Prototype"
  industry: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  isConceptual: true;
  heroImage: string;
  thumbnail: string;
  secondaryImage: string;
  summary: string;
  overview: string;
  objectives: string;
  challenge: string;
  designDecisions: string;
  engineeringApproach: string;
  keyFeatures: string[];
  deliverables: string[];
  techStack: string[];
  benchmarks: {
    label: string;
    value: string;
  }[];
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
  pageScope: string;
  features: string[];
  deliverables: string[];
  exclusions: string[];
  maintenanceNote: string;
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
