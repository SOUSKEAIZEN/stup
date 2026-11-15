import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    priceINR: 4999,
    priceDisplay: '₹4,999',
    billingPeriod: 'one-time development fee',
    pageScope: '1 Page',
    targetAudience: 'For individuals, portfolios and early-stage ideas needing a clean web presence.',
    description: 'A focused, single-page responsive website designed to introduce your business with clarity.',
    popular: false,
    ctaLabel: 'Choose Essential',
    features: [
      '1 responsive longform page',
      'Clean layout customization',
      'Mobile and tablet optimization',
      'Contact information section',
      'Basic search engine (SEO) setup',
      '1 round of design revisions',
      'Estimated delivery: 3–5 business days',
    ],
    deliverables: [
      'Production-ready static codebase',
      'Domain DNS mapping setup',
      'Deployment to Vercel or Netlify',
    ],
    exclusions: [
      'Multiple pages or sub-routes',
      'Interactive form validation / database',
      'Content management system (CMS)',
      'Domain and hosting costs (paid to vendor)',
    ],
    maintenanceNote: 'Hosting ($0–$10/mo on Vercel) and domain are purchased by the client directly.',
  },
  {
    id: 'starter',
    name: 'Starter',
    priceINR: 9999,
    priceDisplay: '₹9,999',
    billingPeriod: 'one-time development fee',
    pageScope: 'Up to 3 Pages',
    targetAudience: 'For small businesses and consultants needing dedicated pages for services and contact.',
    description: 'A multi-page website providing space for detailed services, background, and inquiries.',
    popular: false,
    ctaLabel: 'Choose Starter',
    features: [
      'Up to 3 responsive page layouts',
      'Customized typography and palette',
      'Working contact form',
      'Social profile integrations',
      'Basic SEO and social preview tags',
      '2 rounds of design revisions',
      'Estimated delivery: 5–7 business days',
    ],
    deliverables: [
      'Multi-page Next.js codebase',
      'Responsive navigation system',
      'Contact form configuration',
      '14-day warranty support',
    ],
    exclusions: [
      'Complex backend database architecture',
      'Custom CMS admin dashboard',
      'E-commerce shopping cart / payments',
      'Domain registration fee',
    ],
    maintenanceNote: 'Optional maintenance & update support available at ₹1,999/month.',
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Recommended',
    priceINR: 14999,
    priceDisplay: '₹14,999',
    billingPeriod: 'one-time development fee',
    pageScope: 'Up to 5 Pages',
    targetAudience: 'For established practices and businesses requiring detailed UI styling and integration.',
    description: 'A comprehensive business website built with customized UI patterns and performance tuning.',
    popular: true,
    ctaLabel: 'Choose Professional',
    features: [
      'Up to 5 custom page layouts',
      'Detailed UI design & bespoke styling',
      'Validated multi-field contact form',
      'Basic analytics & third-party tags',
      'Complete SEO & OpenGraph microdata',
      'Performance and speed optimization',
      '3 rounds of design revisions',
      'Estimated delivery: 7–10 business days',
    ],
    deliverables: [
      'Full Next.js & Tailwind codebase',
      'Figma design tokens & layout files',
      'Interactive components library',
      '30-day warranty & maintenance guide',
    ],
    exclusions: [
      'Complex custom database backends',
      'Multi-vendor marketplace functionality',
      'Third-party cloud infrastructure costs',
    ],
    maintenanceNote: 'Optional monthly maintenance retainer available at ₹2,999/month.',
  },
  {
    id: 'business-plus',
    name: 'Business Plus',
    priceINR: 24999,
    priceDisplay: '₹24,999',
    billingPeriod: 'one-time development fee',
    pageScope: 'Up to 7 Pages',
    targetAudience: 'For expanding businesses needing advanced layouts, CMS readiness, and deployment setup.',
    description: 'A complete multi-section digital platform engineered for rich storytelling and lead capture.',
    popular: false,
    ctaLabel: 'Choose Business Plus',
    features: [
      'Up to 7 custom page layouts',
      'Enhanced custom UI design',
      'Advanced section layouts and cards',
      'CMS or structured blog integration',
      'Analytics and telemetry setup',
      'Technical SEO with XML sitemaps',
      'Production deployment and staging support',
      'Estimated delivery: 10–14 business days',
    ],
    deliverables: [
      'Full TypeScript Next.js repository',
      'Configured CMS or MDX content structure',
      'Automated deployment setup',
      '45-day warranty & priority support',
    ],
    exclusions: [
      'Custom native mobile app builds',
      'Enterprise payment gateway architectures (quoted separately)',
    ],
    maintenanceNote: 'Custom ongoing retainers and feature expansions quoted based on required hours.',
  },
];

export interface FeatureComparisonRow {
  category: string;
  features: {
    name: string;
    essential: string | boolean;
    starter: string | boolean;
    professional: string | boolean;
    businessPlus: string | boolean;
  }[];
}

export const pricingComparisonData: FeatureComparisonRow[] = [
  {
    category: 'Scope & Structure',
    features: [
      {
        name: 'Page Limit',
        essential: '1 Page',
        starter: 'Up to 3 Pages',
        professional: 'Up to 5 Pages',
        businessPlus: 'Up to 7 Pages',
      },
      {
        name: 'Responsive Design',
        essential: true,
        starter: true,
        professional: true,
        businessPlus: true,
      },
      {
        name: 'Included Revisions',
        essential: '1 Round',
        starter: '2 Rounds',
        professional: '3 Rounds',
        businessPlus: '3 Rounds',
      },
      {
        name: 'Delivery Timeline',
        essential: '3–5 Days',
        starter: '5–7 Days',
        professional: '7–10 Days',
        businessPlus: '10–14 Days',
      },
    ],
  },
  {
    category: 'Features & Setup',
    features: [
      {
        name: 'Contact Flow',
        essential: 'Info Section',
        starter: 'Contact Form',
        professional: 'Validated Form',
        businessPlus: 'Advanced Form',
      },
      {
        name: 'SEO & Meta Tags',
        essential: 'Basic Setup',
        starter: 'Basic Setup',
        professional: 'Complete Setup',
        businessPlus: 'Complete + Sitemaps',
      },
    ],
  },
];
