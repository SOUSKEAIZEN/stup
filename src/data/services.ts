import { ServiceItem } from '@/types';

export interface ServiceCategory {
  id: 'design' | 'web' | 'apps' | 'tech';
  title: string;
  eyebrow: string;
  description: string;
  items: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  // Design & Creative
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'design',
    iconName: 'Layout',
    shortDescription: 'Human-centered digital interfaces engineered for cognitive clarity and intuitive user journeys.',
    fullDescription:
      'We design digital products that solve complex user tasks through minimal friction. From deep wireframing and user-testing to responsive interface design and design token systems, our interfaces blend editorial refinement with flawless ergonomic efficiency.',
    deliverables: ['User Flow Maps', 'Wireframes & Interactive Prototypes', 'Figma Design Tokens', 'Design System Library', 'Accessibility Compliance (WCAG AA)'],
    technologies: ['Figma', 'FigJam', 'Tokens Studio', 'Framer', 'Zeroheight'],
  },
  {
    id: 'website-design',
    slug: 'website-design',
    title: 'Website Design',
    category: 'design',
    iconName: 'Palette',
    shortDescription: 'Bespoke, art-directed websites that position your brand as an industry leader with poise.',
    fullDescription:
      'Our websites move beyond standard grid templates. We construct tailor-made editorial layouts, disciplined typographic hierarchies, and subtle micro-interactions that communicate craft, trust, and premium authority from the first fold.',
    deliverables: ['Responsive Web Layouts', 'Custom Typography Styling', 'Art Direction Guides', 'Micro-interaction Specs', 'Asset Exports for Web'],
    technologies: ['Figma', 'Adobe Suite', 'Vector Graphics', 'Tailwind Guidelines'],
  },
  {
    id: 'brand-identity',
    slug: 'brand-identity',
    title: 'Brand Identity & Systems',
    category: 'design',
    iconName: 'Sparkles',
    shortDescription: 'Timeless visual identities, bespoke marks, and comprehensive design systems built for digital scale.',
    fullDescription:
      'A digital brand requires more than a vector logo. We create unified design identities including typographic hierarchies, color theory rules, iconography standards, motion physics guidelines, and comprehensive digital brand books.',
    deliverables: ['Primary Mark & Logomarks', 'Typography Scale & Pairing', 'Color Harmonies & Neutrals', 'Digital Brand Guidelines PDF', 'Iconographic Set'],
    technologies: ['Illustrator', 'Figma', 'Typography Labs', 'Vector Formats (SVG)'],
  },

  // Web Development
  {
    id: 'web-applications',
    slug: 'web-applications',
    title: 'Custom Web Applications',
    category: 'web',
    iconName: 'Globe',
    shortDescription: 'High-performance Next.js and React applications architected for scalability, speed, and reliability.',
    fullDescription:
      'We engineer production-grade web applications utilizing Next.js App Router, TypeScript, and serverless backends. We focus on low latency, zero hydration flickers, state management simplicity, and rock-solid unit and integration testing.',
    deliverables: ['Production Next.js Codebase', 'Serverless API Routes', 'State Management Architecture', 'Role-based Access Control', 'Automated CI/CD Pipeline'],
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Query', 'PostgreSQL', 'Prisma / Drizzle'],
  },
  {
    id: 'ecommerce-platforms',
    slug: 'ecommerce-platforms',
    title: 'E-commerce Architecture',
    category: 'web',
    iconName: 'ShoppingBag',
    shortDescription: 'High-conversion headless storefronts engineered for fast checkout, smooth catalog browsing, and sales.',
    fullDescription:
      'From custom Shopify headless integrations to custom commerce engines, we build shopping experiences that eliminate checkout friction and showcase products through high-resolution editorial presentation.',
    deliverables: ['Custom Storefront Layout', 'Stripe / Payment Gateway Setup', 'Inventory & Cart Management', 'Optimized Mobile Checkout', 'Order Notification Triggers'],
    technologies: ['Shopify Storefront API', 'Stripe', 'Next.js', 'Tailwind CSS', 'Redis Caching'],
  },
  {
    id: 'custom-software-solutions',
    slug: 'custom-software-solutions',
    title: 'Custom Software Solutions',
    category: 'web',
    iconName: 'Code2',
    shortDescription: 'Tailored digital tooling, bespoke internal workflow platforms, and specialized operational engines.',
    fullDescription:
      'Off-the-shelf software rarely fits proprietary business workflows. We design and build bespoke platforms that automate repetitive tasks, synchronize data between legacy silos, and provide executives with real-time operational transparency.',
    deliverables: ['Custom Software Architecture', 'Internal Workflow Automation', 'Legacy Data Migration', 'API Integrations', 'Technical Documentation'],
    technologies: ['Node.js', 'Python', 'Go', 'Docker', 'GraphQL', 'REST'],
  },

  // Application Development
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    category: 'apps',
    iconName: 'Smartphone',
    shortDescription: 'Native-feel iOS and Android applications crafted with React Native and modern mobile standards.',
    fullDescription:
      'We deliver cross-platform mobile apps that feel genuinely native. Smooth 60fps animations, intuitive gesture handling, offline-first data synchronization, and frictionless biometric authentication.',
    deliverables: ['iOS & Android Builds', 'App Store & Play Store Submissions', 'Push Notification Service', 'Biometric Auth Integration', 'Offline Sync Engine'],
    technologies: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase / Supabase'],
  },
  {
    id: 'admin-dashboards',
    slug: 'admin-dashboards',
    title: 'Admin Dashboards & Internal Tools',
    category: 'apps',
    iconName: 'LineChart',
    shortDescription: 'Dense, scannable data visualization dashboards and control planes for operational precision.',
    fullDescription:
      'We specialize in building powerful administrative interfaces that simplify complex multi-tier data. Comprehensive filter systems, real-time analytics charts, batch editing tools, and audit logs.',
    deliverables: ['Interactive Chart Modules', 'Data Table with Server Pagination', 'CSV / Excel Export Engines', 'Audit Trail & Event Logs', 'Granular Permission Matrix'],
    technologies: ['React', 'Tremor', 'Recharts', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 'api-database-architecture',
    slug: 'api-database-architecture',
    title: 'API & Database Architecture',
    category: 'apps',
    iconName: 'Database',
    shortDescription: 'Scalable relational data schemas, RESTful & GraphQL endpoints with enterprise security guarantees.',
    fullDescription:
      'A resilient frontend is only as dependable as its backend foundation. We construct schema migrations, caching layers, rate limiting, and defensive endpoint validation to safeguard your business intelligence.',
    deliverables: ['Normalized SQL Schema', 'Swagger / OpenAPI Documentation', 'Rate Limiting & Threat Shielding', 'Automated Database Backups', 'Webhook Infrastructure'],
    technologies: ['PostgreSQL', 'Redis', 'Node.js', 'Zod', 'Docker', 'AWS / Vercel'],
  },

  // Technology and Growth
  {
    id: 'seo-performance-optimization',
    slug: 'seo-performance-optimization',
    title: 'SEO & Core Web Vitals Optimization',
    category: 'tech',
    iconName: 'Zap',
    shortDescription: 'Laser-focused technical SEO audits and code refactoring to achieve green 95+ Google Lighthouse scores.',
    fullDescription:
      'Speed and search engine discoverability go hand-in-hand. We optimize time-to-first-byte (TTFB), largest contentful paint (LCP), cumulative layout shift (CLS), semantic microdata schemas, and dynamic XML sitemaps.',
    deliverables: ['Comprehensive Speed Audit', 'Bundle Size Minimization', 'Schema.org JSON-LD Markup', 'Image Modernization (AVIF/WebP)', 'Google Search Console Config'],
    technologies: ['Lighthouse', 'Next.js Analytics', 'PageSpeed Insights', 'Schema.org'],
  },
  {
    id: 'maintenance-technical-support',
    slug: 'maintenance-technical-support',
    title: 'Maintenance & Technical Support',
    category: 'tech',
    iconName: 'ShieldCheck',
    shortDescription: 'Proactive monitoring, regular vulnerability patching, and dedicated continuous development retainers.',
    fullDescription:
      'Software requires steady stewardship. We provide round-the-clock uptime health checks, monthly package and security dependency upgrades, database tuning, and guaranteed SLA response times for any operational anomalies.',
    deliverables: ['24/7 Uptime Health Monitoring', 'Monthly Security & Dependency Patches', 'Disaster Recovery Backups', 'Dedicated Slack Channel SLA', 'Quarterly Growth Reviews'],
    technologies: ['Sentry', 'Datadog', 'GitHub Actions', 'Vercel Monitoring', 'AWS CloudWatch'],
  },
  {
    id: 'cloud-deployment-consulting',
    slug: 'cloud-deployment-consulting',
    title: 'Cloud Deployment & Consulting',
    category: 'tech',
    iconName: 'Cpu',
    shortDescription: 'Modern cloud infrastructure architecture, serverless configurations, and strategic tech guidance.',
    fullDescription:
      'We guide founders and tech executives through pivotal technology decisions. From choosing between microservices vs monoliths to setting up multi-region edge caching, our advice is grounded in pragmatic production experience.',
    deliverables: ['Cloud Architecture Blueprint', 'Edge CDN & Caching Rules', 'Environment Staging Workflows', 'Cost Optimization Report', 'Executive Advisory Sessions'],
    technologies: ['Vercel', 'AWS', 'Cloudflare', 'Terraform', 'Docker'],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'design',
    title: 'Design & Creative',
    eyebrow: 'CATEGORY A',
    description:
      'We craft thoughtful visual identities and intuitive interfaces that balance timeless editorial restraint with modern ergonomic clarity.',
    items: servicesData.filter((s) => s.category === 'design'),
  },
  {
    id: 'web',
    title: 'Web Engineering & Platforms',
    eyebrow: 'CATEGORY B',
    description:
      'Robust web applications, bespoke business platforms, and headless commerce engines engineered with type-safe modern standards.',
    items: servicesData.filter((s) => s.category === 'web'),
  },
  {
    id: 'apps',
    title: 'Application Development & Architecture',
    eyebrow: 'CATEGORY C',
    description:
      'End-to-end mobile applications, administrative control planes, and resilient API backends built for high concurrency.',
    items: servicesData.filter((s) => s.category === 'apps'),
  },
  {
    id: 'tech',
    title: 'Technology, Performance & Growth',
    eyebrow: 'CATEGORY D',
    description:
      'Sub-second Core Web Vitals optimization, technical SEO engineering, cloud infrastructure, and dependable ongoing maintenance.',
    items: servicesData.filter((s) => s.category === 'tech'),
  },
];
