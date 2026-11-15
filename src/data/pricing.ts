import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Sprint',
    badge: 'Single Page',
    priceINR: 14999,
    priceDisplay: '₹14,999',
    billingPeriod: 'fixed one-time project fee',
    pageScope: '1 Longform Responsive Page',
    targetAudience: 'For individuals, founders, and early-stage ventures establishing a clear, authoritative market presence.',
    description: 'A focused, high-performance single-page digital presence engineered to communicate value and convert visitors with speed.',
    popular: false,
    ctaLabel: 'Select Starter Plan',
    features: [
      'Bespoke single-page longform layout engineered from scratch',
      'Flawless responsive design across mobile, tablet, and desktop',
      'Editorial typography pairing (Playfair Display, Manrope, Inter)',
      'Client enquiry form with client-side validation',
      'Foundational SEO schema, OpenGraph tags, and XML sitemap',
      'Sub-second Core Web Vitals optimization on Google Lighthouse',
      'Production deployment to Vercel or your hosting environment',
    ],
    deliverables: [
      'Complete Next.js 14 Production Codebase',
      'Figma Design Assets & Token Export',
      'Production Deployment Configuration',
      '14-Day Post-Launch Warranty & Handover Walkthrough',
    ],
    exclusions: [
      'Multi-page navigation or sub-routes',
      'Headless CMS content management dashboard',
      'Database backend or user login systems',
      'Custom third-party API webhooks',
    ],
    maintenanceNote:
      'Domain registration and cloud hosting costs (approx. $0–$20/mo on Vercel) are billed directly by infrastructure providers. Optional monthly retainer available post-warranty.',
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Recommended',
    priceINR: 29999,
    priceDisplay: '₹29,999',
    billingPeriod: 'fixed one-time project fee',
    pageScope: 'Up to 5 Custom Pages',
    targetAudience: 'For established studios, consultancies, and growing businesses elevating their digital authority.',
    description: 'A comprehensive multi-page agency website architected for brand positioning, service explanation, and lead qualification.',
    popular: true,
    ctaLabel: 'Select Professional Plan',
    features: [
      'Up to five (5) bespoke art-directed responsive page layouts',
      'Dedicated service breakdown pages and portfolio showcase',
      'Next.js 14 App Router architecture with SSG pre-rendering',
      'Multi-field structured inquiry form with project qualification',
      'Full technical SEO: structured JSON-LD, sitemaps, and robots.txt',
      'Privacy-first analytics integration (Plausible or Google Analytics)',
      'Performance audit guaranteeing 95+ Core Web Vitals',
    ],
    deliverables: [
      'Full Multi-Page Next.js Codebase & GitHub Repository',
      'Comprehensive Figma Design System with Reusable Tokens',
      'Staging and Production CI/CD Pipeline Setup',
      '30-Day Post-Launch Technical Support Warranty',
    ],
    exclusions: [
      'Custom SQL/NoSQL database architecture',
      'Role-based administrative control planes',
      'Native iOS / Android mobile applications',
    ],
    maintenanceNote:
      'Standard hosting costs on Vercel Pro ($20/mo) paid directly to host. Optional monthly engineering retainer (₹7,500/mo) covers security updates, dependency patches, and small layout adjustments.',
  },
  {
    id: 'business-pro',
    name: 'Business Pro',
    badge: 'Complete Engine',
    priceINR: 59999,
    priceDisplay: '₹59,999',
    billingPeriod: 'fixed one-time project fee',
    pageScope: 'Up to 10 Custom Pages',
    targetAudience: 'For scaling companies requiring dynamic content pipelines, backend database persistence, and administrative control.',
    description: 'A high-powered digital platform equipped with relational database schemas, admin tooling, and custom functionality.',
    popular: false,
    ctaLabel: 'Select Business Pro',
    features: [
      'Up to ten (10) custom responsive page layouts and views',
      'Relational database integration (PostgreSQL via Supabase or Prisma)',
      'Custom admin dashboard for content management and inquiry review',
      'Type-safe backend API routes with Zod schema validation',
      'Dynamic case study or blog publishing pipeline with tags and filters',
      'Role-based access controls and secure authentication scaffolding',
      'Comprehensive product analytics and event telemetry setup',
    ],
    deliverables: [
      'Enterprise-Ready Next.js & TypeScript Monorepo',
      'Normalized SQL Database Schema & Migration Scripts',
      'Administrative Control Panel Codebase',
      'Automated Staging Environment & CI/CD Pipeline',
      '60-Day Priority Technical Support Warranty',
    ],
    exclusions: [
      'Multi-region high-concurrency microservice clusters',
      'Native iOS / Android mobile applications (available in Enterprise)',
    ],
    maintenanceNote:
      'Database and serverless hosting costs (approx. $25–$50/mo) paid directly to cloud vendors. Optional ongoing retainer (₹15,000/mo) includes 24h SLA, backups, and 8 dedicated engineering hours/month.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise / Custom',
    badge: 'Tailored Scope',
    priceINR: null,
    priceDisplay: 'Custom Quotation',
    billingPeriod: 'milestone-based sprint contracts',
    pageScope: 'Uncapped Custom Architecture',
    targetAudience: 'For funded tech ventures, distributed platforms, and complex multi-service digital ecosystems.',
    description: 'Fully bespoke software engineering, multi-cloud architecture, and dedicated engineering partnership.',
    popular: false,
    ctaLabel: 'Request Custom Proposal',
    features: [
      'Uncapped views, portals, and service workflows tailored to roadmap',
      'High-concurrency web applications and cross-platform mobile apps',
      'Custom third-party integrations (ERP, CRM, payment systems, APIs)',
      'Dense data dashboards, control planes, and real-time visualization',
      'Scalable backend with microservices, Redis caching, and task queues',
      'Defensive security architecture, audit logging, and penetration test prep',
      'Multi-cloud deployment configurations (AWS / GCP / Vercel Edge)',
    ],
    deliverables: [
      'Full Intellectual Property & Production Repositories',
      'Comprehensive Architectural & API Documentation',
      'Infrastructure as Code (Terraform / Docker) Templates',
      'Dedicated Engineering Lead & Executive Architecture Advisory',
    ],
    exclusions: [],
    maintenanceNote:
      'Cloud compute, database tiers, and third-party API licenses billed directly to client account. Custom ongoing SLA retainer tailored to operational requirements.',
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
    category: 'Architecture & Page Scope',
    features: [
      {
        name: 'Page Limit Included',
        starter: '1 Longform Page',
        professional: 'Up to 5 Pages',
        businessPro: 'Up to 10 Pages',
        enterprise: 'Uncapped / Custom',
      },
      {
        name: 'Design System Delivery',
        starter: 'Component Guide',
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
        name: 'Dynamic Content / CMS',
        starter: false,
        professional: 'Static MDX / Case Studies',
        businessPro: 'Custom Admin Database',
        enterprise: 'Multi-Channel Headless',
      },
    ],
  },
  {
    category: 'Backend & Data Capabilities',
    features: [
      {
        name: 'Inquiry Form Validation',
        starter: 'Client Validated',
        professional: 'Structured Multi-step',
        businessPro: 'DB Stored + Alerts',
        enterprise: 'CRM Integrated + Webhooks',
      },
      {
        name: 'Relational Database (SQL)',
        starter: false,
        professional: false,
        businessPro: true,
        enterprise: true,
      },
      {
        name: 'Admin Dashboard Portal',
        starter: false,
        professional: false,
        businessPro: true,
        enterprise: 'Custom Multi-role Suite',
      },
      {
        name: 'Third-party API Integrations',
        starter: 'Analytics & Social',
        professional: 'Up to 3 Services',
        businessPro: 'Up to 8 Services',
        enterprise: 'Unlimited APIs',
      },
    ],
  },
  {
    category: 'Quality, SEO & Support Commitments',
    features: [
      {
        name: 'Core Web Vitals Standard',
        starter: 'Sub-1.2s LCP',
        professional: 'Sub-1.0s LCP',
        businessPro: 'Sub-0.8s LCP',
        enterprise: 'Strict SLA Guaranteed',
      },
      {
        name: 'Technical SEO Microdata',
        starter: 'Basic Meta + OG',
        professional: 'Schema.org JSON-LD',
        businessPro: 'Advanced Programmatic',
        enterprise: 'Full International SEO',
      },
      {
        name: 'Included Post-Launch Warranty',
        starter: '14 Days Support',
        professional: '30 Days Support',
        businessPro: '60 Days Priority',
        enterprise: 'Custom Retainer SLA',
      },
      {
        name: 'Complete Source Code Handover',
        starter: true,
        professional: true,
        businessPro: true,
        enterprise: true,
      },
    ],
  },
];
