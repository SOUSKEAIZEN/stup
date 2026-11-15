import { CaseStudy } from '@/types';

export const projectsData: CaseStudy[] = [
  {
    id: 'finora',
    slug: 'finora',
    title: 'Finora',
    typology: 'Institutional Wealth Intelligence Prototype',
    industry: 'Financial Technology & Wealth Management',
    category: 'applications',
    categoryLabel: 'Web Application & UI/UX',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    summary: 'A conceptual wealth intelligence dashboard designed to display high-frequency asset allocations, liquidity tables, and risk metrics with zero interface lag.',
    overview:
      'Finora was developed by STUP Studio as an architectural prototype exploring how dense financial telemetry can be rendered with calming editorial clarity. The project explores the intersection of real-time calculations and low-fatigue visual ergonomic systems.',
    objectives:
      'Prove that complex multi-currency portfolios can render 100+ live securities positions within sub-second thresholds without overwhelming users with visual noise.',
    challenge:
      'Financial dashboards often struggle with high CPU overhead caused by un-virtualized DOM elements and erratic re-renders during high-frequency data ticks.',
    designDecisions:
      'We established a 4px modular baseline grid, monospaced tabular numerals for financial figures, and a low-saturation Midnight Navy and Powder Blue surface structure that minimizes visual fatigue during prolonged analytical sessions.',
    engineeringApproach:
      'Decoupled market feed processing into Web Workers, paired with Next.js 14 server components for initial baseline paint and lightweight client state for interactive charting.',
    keyFeatures: [
      'Simulated multi-currency liquidity rebalancer with real-time slippage calculations',
      'Virtual table rendering handling 5,000+ data rows with 60fps scrolling',
      'Configurable risk exposure heatmaps with customizable thresholds',
      'Keyboard-first command palette for instant security lookups',
    ],
    deliverables: [
      'Interactive Next.js 14 Application Prototype',
      'Figma Design Tokens Library (Color, Type, Spacing)',
      'TypeScript Data Model & API Specifications',
      'Performance Benchmark Audit Document',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Web Workers', 'Zod', 'PostgreSQL Schema'],
    benchmarks: [
      { label: 'Initial Paint (FCP)', value: '0.62s' },
      { label: 'DOM Virtualization Rate', value: '60 FPS' },
      { label: 'Lighthouse Performance', value: '99/100' },
    ],
  },
  {
    id: 'forma',
    slug: 'forma',
    title: 'Forma',
    typology: 'Architectural Monograph & Studio Website Concept',
    industry: 'Architecture & Spatial Design',
    category: 'websites',
    categoryLabel: 'Website Design & Editorial',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    summary: 'A minimalist digital monograph concept presenting modernist residential structures, structural blueprints, and material studies through deliberate spatial pacing.',
    overview:
      'Forma is an architectural studio concept created to demonstrate editorial web design principles. The design balances generous negative space, high-resolution architectural photography, and understated typography.',
    objectives:
      'Deliver an online monograph that mirrors the quiet grandeur of physical architecture while maintaining strict web accessibility and sub-second asset delivery.',
    challenge:
      'High-resolution architectural photography can easily lead to layout shifts and slow mobile loading if assets are not rigorously optimized and sized.',
    designDecisions:
      'We utilized Playfair Display for editorial project titles paired with Manrope for structural annotations and technical dimensions. Generous vertical margins give photography room to breathe.',
    engineeringApproach:
      'Automated next/image optimization generating modern AVIF/WebP formats with explicit aspect ratios to guarantee zero Cumulative Layout Shift (CLS).',
    keyFeatures: [
      'Progressive image loading with zero layout shift during asset paint',
      'Interactive structural drawing viewer with vectorized blueprints',
      'Architectural typology categorization by material and geography',
      'Direct studio inquiry flow with appointment scheduling integration',
    ],
    deliverables: [
      'Complete Responsive Web Monograph',
      'Custom Typography & Layout Styleguide',
      'Asset Optimization & CDN Pipeline Spec',
      'CMS Content Schema for Project Monograph Entries',
    ],
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'CSS Grid', 'AVIF / WebP'],
    benchmarks: [
      { label: 'Cumulative Layout Shift', value: '0.000' },
      { label: 'Average Image Byte Weight', value: '< 65 KB' },
      { label: 'Mobile Usability Score', value: '100/100' },
    ],
  },
  {
    id: 'nourish',
    slug: 'nourish',
    title: 'Nourish',
    typology: 'Preventative Health & Nutrition Platform Concept',
    industry: 'Health & Preventive Wellness',
    category: 'applications',
    categoryLabel: 'Mobile & Web Application',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80',
    summary: 'A preventative health companion concept exploring streamlined physiological bio-data ingestion and daily nutritional protocols.',
    overview:
      'Nourish investigates how complex metabolic biomarkers and daily health metrics can be converted into accessible, actionable guidance without inducing cognitive fatigue.',
    objectives:
      'Design a health application interface that avoids anxiety-inducing medical graphs by focusing user attention on daily high-impact habits.',
    challenge:
      'Traditional wellness applications suffer from data fragmentation and tedious manual logging steps that lead to high user abandonment.',
    designDecisions:
      'Gentle powder blue and soft neutral surfaces paired with high-contrast Sunflower Yellow accents for key daily action highlights and progress bars.',
    engineeringApproach:
      'Local-first data architecture allowing instantaneous offline habit logging with background sync to an encrypted PostgreSQL database.',
    keyFeatures: [
      'Single-action daily focus dashboard prioritizing morning protocols',
      'Encrypted clinical communication channel mockup with end-to-end schemas',
      'Nutrient density scoring engine calculated via standardized dietary models',
      'Offline-capable local storage with automatic state reconciliation',
    ],
    deliverables: [
      'Web Application Design System & Interactive Prototype',
      'Responsive Mobile Viewports Specification',
      'HIPAA-Aware Database Schema Blueprint',
      'User Onboarding & Data Flow Diagrams',
    ],
    techStack: ['React Native Web', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'IndexedDB'],
    benchmarks: [
      { label: 'Offline Sync Latency', value: '< 80ms' },
      { label: 'Bundle First Load JS', value: '92 KB' },
      { label: 'Lighthouse Accessibility', value: '100/100' },
    ],
  },
  {
    id: 'maison',
    slug: 'maison',
    title: 'Maison',
    typology: 'Headless Luxury E-commerce Architecture Concept',
    industry: 'Artisanal Design & Luxury Retail',
    category: 'ecommerce',
    categoryLabel: 'Headless E-commerce',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    summary: 'A headless e-commerce storefront prototype engineered for limited-edition artisanal ceramics, bespoke furniture, and sculptural lighting objects.',
    overview:
      'Maison explores how high-end editorial storytelling can be harmonized with frictionless sub-second checkout mechanics on a modern headless commerce foundation.',
    objectives:
      'Eliminate client-side cart friction and page reloads while showcasing artisanal craftsmanship through high-fidelity visual presentation.',
    challenge:
      'Conventional commerce storefronts often sacrifice performance for aesthetic richness, leading to sluggish cart updates and cart abandonment.',
    designDecisions:
      'Asymmetric layout grids that pair maker narratives with purchase actions, supported by high-contrast typography and subtle hover zooms.',
    engineeringApproach:
      'Headless commerce architecture decoupling front-end presentation from inventory backends, utilizing edge caching and optimistic UI updates.',
    keyFeatures: [
      'Instant slide-over cart drawer with optimistic inventory reservation',
      'Artisanal studio provenance map detailing material origins',
      'Responsive image galleries with lazy-loaded thumbnail strips',
      'Streamlined two-step checkout mockup with regional currency selection',
    ],
    deliverables: [
      'Headless Next.js Storefront Prototype',
      'Component Library for Catalog, PDP, and Checkout',
      'Storefront API Schema Definitions',
      'Core Web Vitals Performance Audit',
    ],
    techStack: ['Next.js 14', 'Shopify Storefront API Spec', 'Tailwind CSS', 'TypeScript', 'Edge Workers'],
    benchmarks: [
      { label: 'Cart Interaction Time', value: '< 16ms' },
      { label: 'Time to Interactive (TTI)', value: '0.9s' },
      { label: 'Lighthouse Best Practices', value: '100/100' },
    ],
  },
  {
    id: 'orbit',
    slug: 'orbit',
    title: 'Orbit',
    typology: 'Developer Observability Control Plane Concept',
    industry: 'B2B SaaS & Cloud Infrastructure',
    category: 'applications',
    categoryLabel: 'SaaS Platform & Dashboard',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
    summary: 'A high-density control plane interface concept for DevOps teams debugging distributed container incidents and trace telemetry.',
    overview:
      'Orbit explores information density in developer tooling. The prototype demonstrates how thousands of log lines and anomaly signals can be structured for instant scanning.',
    objectives:
      'Enable rapid incident triage through keyboard-driven command navigation, intelligent alert correlation, and zero-latency log filtering.',
    challenge:
      'Dense data dashboards frequently become unreadable on standard laptop displays if typography scales and contrast ratios are not rigorously tuned.',
    designDecisions:
      'Dark mode control surfaces following WCAG AAA contrast standards, syntax-highlighted log streams, and strict optical column alignment.',
    engineeringApproach:
      'Client-side log stream parsing simulated with WebAssembly modules to achieve instantaneous keyword search across thousands of log rows.',
    keyFeatures: [
      'Keyboard-first command palette (Cmd+K) for rapid service navigation',
      'Sub-second query filtering across simulated distributed log events',
      'Configurable alert severity thresholds with status pill indicators',
      'Interactive latency distribution charts with zoomable time windows',
    ],
    deliverables: [
      'High-Density Control Plane Interface Prototype',
      'Developer Theme Token Guide (Dark Surface System)',
      'Telemetry Data Visualization Specifications',
      'Keyboard Navigation Shortcuts Matrix',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'SVG Canvas', 'Zod'],
    benchmarks: [
      { label: 'Query Filter Latency', value: '< 120ms' },
      { label: 'Render Refresh Rate', value: '60 FPS' },
      { label: 'Lighthouse Performance', value: '98/100' },
    ],
  },
  {
    id: 'terra',
    slug: 'terra',
    title: 'Terra',
    typology: 'Ecological Restoration & Carbon Accounting Platform Concept',
    industry: 'Climate Tech & Sustainable Enterprise',
    category: 'websites',
    categoryLabel: 'Digital Platform & Brand',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80',
    summary: 'An institutional sustainability portal concept combining geospatial reforestation tracking, biomass telemetry, and transparent accounting.',
    overview:
      'Terra investigates how scientific environmental data and carbon accounting can be communicated with institutional gravitas to corporate sustainability officers.',
    objectives:
      'Bridge complex satellite biomass measurements with intuitive public-facing impact dashboards that withstand rigorous stakeholder scrutiny.',
    challenge:
      'Environmental platforms often oscillate between superficial greenwashing marketing and dry, impenetrable academic spreadsheets.',
    designDecisions:
      'Earthy neutrals paired with deep Midnight Navy structures and Powder Blue information surfaces that convey scientific rigor and institutional poise.',
    engineeringApproach:
      'Server-side rendered interactive SVG GIS components displaying regional biomass recovery layers with zero heavy external map SDK bloat.',
    keyFeatures: [
      'Interactive geospatial project explorer prototype with layer toggles',
      'Verifiable ecological impact metric cards with calculation methodology notes',
      'Corporate sustainability inquiry module with scope-level calculators',
      'Printable executive summary PDF generation templates',
    ],
    deliverables: [
      'Interactive Environmental Platform Prototype',
      'GIS Data Visualization Component Kit',
      'Accessible Carbon Accounting Data Table',
      'Technical SEO & Structured Microdata Spec',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'SVG Cartography', 'Node.js'],
    benchmarks: [
      { label: 'Core Web Vitals LCP', value: '0.74s' },
      { label: 'Asset Payload Size', value: '88 KB' },
      { label: 'WCAG Compliance', value: 'Level AA' },
    ],
  },
  {
    id: 'atelier',
    slug: 'atelier',
    title: 'Atelier',
    typology: 'Avant-Garde Design Monograph & Portfolio Concept',
    industry: 'Contemporary Spatial Design & Photography',
    category: 'branding',
    categoryLabel: 'Brand Identity & Web Monograph',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80',
    summary: 'A minimalist digital portfolio exploring asymmetric grid composition, generous negative space, and disciplined typographic hierarchies.',
    overview:
      'Atelier was created to test the boundaries of digital editorial design. The concept treats web pages like exhibition catalogs for physical galleries.',
    objectives:
      'Create an unforgettable visual identity that honors Japanese minimalist spatial principles (Ma) while maintaining strict mobile performance.',
    challenge:
      'Asymmetric and non-standard grid compositions often degrade severely on mobile screens without deliberate responsive breakpoint rules.',
    designDecisions:
      'We composed a monochrome canvas punctuated by warm sunflower-yellow highlights, bespoke vertical typography treatments, smooth fluid page transitions, and tactile hover states.',
    engineeringApproach:
      'Carefully calibrated CSS grid rules with dynamic aspect ratio preservation ensuring visual stability across mobile, tablet, and desktop screens.',
    keyFeatures: [
      'Asymmetric multi-column portfolio index with category filter toggles',
      'Zero-layout-shift image gallery with responsive srcset definitions',
      'Curated typographic pairing of Playfair Display and Manrope',
      'Accessible keyboard-navigable image inspection dialogs',
    ],
    deliverables: [
      'Digital Monograph Website Prototype',
      'Custom Layout Grid & Responsive Breakpoints Matrix',
      'Digital Brand Token Architecture',
      'Accessibility Audit & Focus Management Spec',
    ],
    techStack: ['Next.js 14', 'CSS Grid', 'Tailwind CSS', 'TypeScript', 'WebP'],
    benchmarks: [
      { label: 'Layout Shift (CLS)', value: '0.000' },
      { label: 'Time to First Byte (TTFB)', value: '64ms' },
      { label: 'Lighthouse SEO', value: '100/100' },
    ],
  },
  {
    id: 'flowspace',
    slug: 'flowspace',
    title: 'Flowspace',
    typology: 'Calm Productivity Workspace Interface Concept',
    industry: 'Productivity Software & Distributed Work',
    category: 'applications',
    categoryLabel: 'Productivity App & Desktop Suite',
    year: '2024',
    isConceptual: true,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80',
    summary: 'A distraction-free web workspace prototype designed for focused asynchronous writing, sprint planning, and knowledge management.',
    overview:
      'Flowspace explores the aesthetic of "calm software"—interfaces engineered to reduce notification anxiety and support prolonged periods of deep creative concentration.',
    objectives:
      'Demonstrate that web productivity tools can feel as fast and lightweight as native desktop applications through local-first state patterns.',
    challenge:
      'Rich text editing and multi-panel workspaces often introduce sluggish keyboard response and bloated JavaScript bundles.',
    designDecisions:
      'Low-saturation powder blue backgrounds, generous padding around text columns, and distraction-free collapsible control panes.',
    engineeringApproach:
      'Optimistic state updates paired with client-side IndexedDB caching to ensure zero typing latency and instant search filtering.',
    keyFeatures: [
      'Keyboard-driven document switcher and command launcher',
      'Minimalist markdown writing canvas with typography focus mode',
      'Lightweight local search engine indexing local documents',
      'Collapsible context sidebar with workspace navigation hierarchy',
    ],
    deliverables: [
      'Interactive Workspace Prototype Codebase',
      'Ergonomic UI System & Keyboard Shortcuts Spec',
      'State Management & Local Cache Architecture',
      'Performance Profiling Report',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Zod'],
    benchmarks: [
      { label: 'Keypress Input Latency', value: '< 8ms' },
      { label: 'Search Query Speed', value: '< 25ms' },
      { label: 'Lighthouse Performance', value: '99/100' },
    ],
  },
];
