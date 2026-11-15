import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Sprint Package',
    priceINR: 14999,
    priceDisplay: '₹14,999',
    billingPeriod: 'one-time investment',
    targetAudience: 'For individuals, founders and early-stage ventures seeking a polished market entry.',
    description: 'A focused, high-conversion single-page digital presence crafted to establish immediate brand credibility.',
    popular: false,
    ctaLabel: 'Select Starter Plan',
    features: [
      'Bespoke one-page longform website architecture',
      'Flawless responsive design (mobile, tablet, desktop)',
      'Human-centered UI/UX layout and typography pairing',
      'Interactive validated contact form with email notifications',
      'Basic technical SEO and Open Graph social tags',
      'Social media and external profile integrations',
      'Standard 14-day post-launch warranty & handover support',
      'Deployment to Vercel or your hosting environment',
    ],
    notIncluded: [
      'Multi-page navigation structure',
      'Custom headless CMS or admin dashboard',
      'Backend database or user authentication',
      'Custom API development',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Most Popular',
    priceINR: 29999,
    priceDisplay: '₹29,999',
    billingPeriod: 'one-time investment',
    targetAudience: 'For established practices, growing startups and studios ready to elevate their market standing.',
    description: 'A comprehensive multi-page agency website engineered for organic search authority, storytelling, and lead generation.',
    popular: true,
    ctaLabel: 'Select Professional Plan',
    features: [
      'Up to five (5) bespoke art-directed page layouts',
      'Custom website design crafted in Figma with design tokens',
      'Next.js 14 responsive development with zero layout shifts',
      'Advanced multi-step contact & client qualification forms',
      'Comprehensive on-page SEO schema and XML sitemaps',
      'Basic headless CMS integration for blog or case studies',
      'Privacy-first analytics and conversion event tracking',
      'Performance optimization achieving 95+ Core Web Vitals',
      '30-day dedicated post-launch support and video walkthrough',
    ],
    notIncluded: [
      'Complex backend database architecture',
      'Full administrative control planes / internal portals',
      'Mobile app builds',
    ],
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    badge: 'Complete Solution',
    priceINR: 59999,
    priceDisplay: '₹59,999',
    billingPeriod: 'one-time investment',
    targetAudience: 'For scaling companies requiring custom functional workflows, CMS pipelines and dynamic customer portals.',
    description: 'A high-powered digital engine equipped with custom backend functionality, database schemas and administrative tooling.',
    popular: false,
    ctaLabel: 'Select Business Pro',
    features: [
      'Up to ten (10) custom responsive page layouts',
      'Advanced UI/UX research, user journey mapping & design system',
      'Custom functionality & interactive client portals',
      'Type-safe backend API routes and microservices',
      'Relational database integration (PostgreSQL / Supabase)',
      'Custom admin dashboard for content & user management',
      'Advanced programmatic SEO and localized schema markup',
      'Comprehensive product analytics and event telemetry',
      'Production cloud deployment, staging environment & CI/CD',
      '60-day priority support with 24h SLA response',
    ],
    notIncluded: [
      'Multi-region high-concurrency microservice clusters',
      'Native iOS / Android mobile applications',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise / Custom',
    badge: 'Tailored Architecture',
    priceINR: null,
    priceDisplay: 'Custom Quotation',
    billingPeriod: 'tailored milestone roadmap',
    targetAudience: 'For high-scale enterprises, funded tech ventures, and complex multi-platform digital ecosystems.',
    description: 'Fully bespoke software engineering, enterprise-grade cloud architecture, and strategic technology partnership.',
    popular: false,
    ctaLabel: 'Request Custom Scope',
    features: [
      'Uncapped page and view architectures tailored to your roadmap',
      'Fully customized software architecture and domain modeling',
      'High-concurrency web applications and mobile apps (iOS & Android)',
      'Advanced third-party integrations (ERP, CRM, payment systems)',
      'Bespoke executive dashboards, control planes & data visualizations',
      'Scalable backend with microservices, Redis caching & queues',
      'Comprehensive database architecture with automated failovers',
      'Security planning, vulnerability audits and penetration tests',
      'Multi-cloud deployment (AWS / GCP / Vercel Edge)',
      'Ongoing dedicated engineering retainers and executive advisory',
    ],
    notIncluded: [],
  },
];

export interface FeatureComparisonRow {
  category: string;
  features: {
    name: string;
    description?: string;
    starter: string | boolean;
    professional: string | boolean;
    businessPro: string | boolean;
    enterprise: string | boolean;
  }[];
}

export const pricingComparisonData: FeatureComparisonRow[] = [
  {
    category: 'Architecture & Scope',
    features: [
      {
        name: 'Page Count Included',
        starter: '1 Longform Page',
        professional: 'Up to 5 Pages',
        businessPro: 'Up to 10 Pages',
        enterprise: 'Custom / Uncapped',
      },
      {
        name: 'Design System & Tokens',
        starter: 'Standard Guide',
        professional: 'Custom Figma Tokens',
        businessPro: 'Full Design System',
        enterprise: 'Enterprise Library',
      },
      {
        name: 'Responsive Engineering',
        starter: true,
        professional: true,
        businessPro: true,
        enterprise: true,
      },
      {
        name: 'Headless CMS Integration',
        starter: false,
        professional: 'Basic (Articles/Work)',
        businessPro: 'Advanced Multi-model',
        enterprise: 'Custom Multi-channel',
      },
    ],
  },
  {
    category: 'Backend & Functionality',
    features: [
      {
        name: 'Interactive Contact Forms',
        starter: 'Single Form',
        professional: 'Multi-step Qualified',
        businessPro: 'Custom Flow + DB',
        enterprise: 'CRM Integrated + Logic',
      },
      {
        name: 'Relational Database (SQL)',
        starter: false,
        professional: false,
        businessPro: true,
        enterprise: true,
      },
      {
        name: 'Admin Dashboard / Control Plane',
        starter: false,
        professional: false,
        businessPro: true,
        enterprise: 'Custom Multi-role Suite',
      },
      {
        name: 'Third-party API Integrations',
        starter: 'Social / Analytics',
        professional: 'Up to 3 Services',
        businessPro: 'Up to 8 Services',
        enterprise: 'Unlimited Custom APIs',
      },
    ],
  },
  {
    category: 'Performance, SEO & Support',
    features: [
      {
        name: 'Core Web Vitals Guarantee',
        starter: '90+ Scores',
        professional: '95+ Scores',
        businessPro: '98+ Scores',
        enterprise: 'Strict SLA Guaranteed',
      },
      {
        name: 'Technical SEO & Microdata',
        starter: 'Basic Metadata',
        professional: 'Structured JSON-LD',
        businessPro: 'Advanced Programmatic',
        enterprise: 'Full International SEO',
      },
      {
        name: 'Included Warranty & Support',
        starter: '14 Days',
        professional: '30 Days',
        businessPro: '60 Days Priority',
        enterprise: 'Dedicated Ongoing Retainer',
      },
      {
        name: 'Production Cloud Deployment',
        starter: true,
        professional: true,
        businessPro: true,
        enterprise: true,
      },
    ],
  },
];
