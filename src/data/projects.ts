import { CaseStudy } from '@/types';

export const projectsData: CaseStudy[] = [
  {
    id: 'finora',
    slug: 'finora',
    title: 'Finora',
    client: 'Finora Global Inc.',
    industry: 'Financial Technology & Wealth Management',
    category: 'applications',
    categoryLabel: 'Web Application & UI/UX',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    summary: 'A unified wealth intelligence platform providing private wealth clients and advisors with real-time portfolio analytics and liquidity management.',
    overview:
      'Finora approached our studio to replace an outdated portfolio management suite with an ultra-responsive, privacy-first financial dashboard. The goal was to transform complex institutional-grade asset allocation data into a tranquil, legible interface suitable for both desktop analysts and mobile executives.',
    challenge:
      'Institutional finance platforms are frequently plagued by extreme visual clutter, sluggish rendering with massive datasets, and fragmented reporting workflows. Finora needed to display over 100+ real-time securities positions with sub-second chart interactivity without triggering browser lag or battery drain.',
    approach:
      'We designed an ergonomic modular workspace following a strict 4px grid system and a muted, low-fatigue palette. By decoupling high-frequency tick calculations into Web Workers and using virtualized canvas charting, we eliminated interface latency entirely while maintaining bank-grade encryption at the edge.',
    designAndDev:
      'Our engineering team implemented Next.js 14 App Router paired with high-performance WebGL chart kernels and Tailwind CSS. The typography combines crisp Manrope numerics for columnar data with Inter for legal disclaimers, maintaining impeccable optical alignment across all breakpoints.',
    keyFeatures: [
      'Real-time multi-currency valuation with automated FX hedging triggers',
      'Zero-latency portfolio rebalancing simulator with historical backtesting',
      'Institutional audit trail exportable in PDF, CSV, and XBRL formats',
      'Granular biometric multi-factor authentication with hardware key support',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'WebGL Canvas', 'PostgreSQL', 'Redis', 'Zod'],
    metrics: [
      { label: 'Latency Reduction', value: '-78%' },
      { label: 'Daily Active Engagement', value: '+64%' },
      { label: 'Lighthouse Performance Score', value: '98/100' },
    ],
    testimonial: {
      quote: 'STUP transformed our dense institutional tool into an elegant financial work of art. Our clients frequently comment on how peaceful and clear the platform feels.',
      author: 'Marcus Vance',
      title: 'Chief Technology Officer, Finora Capital',
    },
  },
  {
    id: 'forma',
    slug: 'forma',
    title: 'Forma',
    client: 'Forma Architecture Studio',
    industry: 'Architecture & Interior Design',
    category: 'websites',
    categoryLabel: 'Website Design & Editorial',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    summary: 'An editorial digital monograph showcasing modernist architectural residences, structural drawings, and material studies.',
    overview:
      'Forma is an award-winning residential architecture studio renowned for minimalist timber and raw concrete residences. They sought an online presence that mirrors the quiet spatial grandeur of their physical buildings, with generous whitespace, subtle motion, and high-fidelity photography.',
    challenge:
      'Traditional architecture portfolio sites often suffer from slow image delivery, awkward image crops that misrepresent room proportions, and excessive flashy navigation effects that distract from the architectural work itself.',
    approach:
      'We treated each project page like a collectible physical monograph. We instituted asymmetrical two-column layouts, full-bleed architectural floor plans with interactive zoom, and curated typographic pairing of Playfair Display and Manrope to evoke architectural prestige.',
    designAndDev:
      'Images are automatically compressed into modern AVIF and WebP formats with responsive srcsets, ensuring instantaneous image paint even on mobile devices. Subtle parallax scroll transitions guide visitors through rooms with deliberate pacing.',
    keyFeatures: [
      'High-resolution architectural photography engine with progressive loading',
      'Interactive blueprint and material palette inspector',
      'Client inquiry portal with bespoke site-visit scheduling',
      'Archival project index organized by geography and structural typology',
    ],
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'Cloudinary CDN'],
    metrics: [
      { label: 'Average Time on Site', value: '4m 32s' },
      { label: 'Inbound Qualified Inquiries', value: '+112%' },
      { label: 'Core Web Vitals Pass Rate', value: '100%' },
    ],
    testimonial: {
      quote: 'The website reflects the exact restraint and dignity we build into our concrete and timber homes. It is rare to find engineers who understand architectural space.',
      author: 'Helena Lindqvist',
      title: 'Principal Architect, Forma',
    },
  },
  {
    id: 'nourish',
    slug: 'nourish',
    title: 'Nourish',
    client: 'Nourish Health Tech',
    industry: 'Health & Preventive Wellness',
    category: 'applications',
    categoryLabel: 'Mobile & Web Application',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80',
    summary: 'A preventative health and metabolic tracking platform connecting individuals with clinical nutritionists and continuous bio-data.',
    overview:
      'Nourish empowers health-conscious individuals to decode blood biomarkers and sleep metrics into personalized daily nutrition protocols. Our team designed and built both the member web application and clinical provider dashboard.',
    challenge:
      'Users frequently experience burnout with health logging apps due to tedious input flows and confusing medical graphs. The interface had to make complex bio-marker trends effortless to comprehend at a glance.',
    approach:
      'We devised a "daily focus" feed that surfaces only the single most impactful recommendation each morning, supported by gentle color-coded physiological ranges and conversational consultation scheduling.',
    designAndDev:
      'Built with React Native and Next.js, featuring end-to-end encrypted health data pipelines, HIPAA-compliant cloud storage, and responsive SVG trend charts that animate smoothly across devices.',
    keyFeatures: [
      'Automated lab panel ingestion with physiological benchmark overlays',
      'Real-time encrypted telehealth messaging with registered dietitians',
      'Barcode meal scanning paired with micronutrient deficiency insights',
      'Offline-first sync engine supporting intermittent connectivity',
    ],
    techStack: ['React Native', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js'],
    metrics: [
      { label: '30-Day User Retention', value: '72%' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Clinical Intake Time Saved', value: '45 mins/patient' },
    ],
    testimonial: {
      quote: 'STUP transformed our clinical vision into a calming, indispensable companion app. Our members love how gentle and empowering the product feels.',
      author: 'Dr. Aris Thorne',
      title: 'Founder & Medical Director, Nourish',
    },
  },
  {
    id: 'maison',
    slug: 'maison',
    title: 'Maison',
    client: 'Maison Objects Paris',
    industry: 'Luxury Home Goods & E-commerce',
    category: 'ecommerce',
    categoryLabel: 'Headless E-commerce',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    summary: 'A bespoke headless shopping experience for handcrafted ceramics, artisanal furniture, and sculptural lighting objects.',
    overview:
      'Maison required an e-commerce platform that felt like stepping into an intimate Parisian boutique rather than a transactional digital storefront. Every product is handcrafted in limited batches and commands a premium narrative.',
    challenge:
      'Balancing high-resolution artisan video previews and 360-degree object photography with lightning-fast checkout speeds and global currency conversion.',
    approach:
      'We engineered a headless Shopify architecture utilizing Next.js 14 on edge nodes, allowing for instantaneous client-side navigation, buttery-smooth cart drawers, and bespoke editorial story integrations between product listings.',
    designAndDev:
      'We integrated custom 3D model loaders with progressive fallback to WebP stills. The checkout flow was reduced to two effortless steps, pre-populating regional duties and taxes to ensure full price transparency.',
    keyFeatures: [
      'Instant slide-over cart with real-time stock allocation',
      'Artisanal provenance map showcasing each craftsman studio',
      'Multi-currency auto-detection with local shipping duty calculation',
      'Bespoke gift packaging and custom calligraphy message selector',
    ],
    techStack: ['Next.js 14', 'Shopify Storefront API', 'Tailwind CSS', 'Stripe', 'Redis Edge Cache'],
    metrics: [
      { label: 'Checkout Conversion', value: '+38%' },
      { label: 'Average Order Value (AOV)', value: '€340 (+24%)' },
      { label: 'Page Load Speed', value: '0.8s on 4G' },
    ],
    testimonial: {
      quote: 'Our digital boutique now rivals our flagship gallery on Rue Saint-Honoré. The conversion lift exceeded our most optimistic projections.',
      author: 'Camille de Montluc',
      title: 'Brand Director, Maison Objects',
    },
  },
  {
    id: 'orbit',
    slug: 'orbit',
    title: 'Orbit',
    client: 'Orbit Intelligence Systems',
    industry: 'B2B SaaS & Developer Infrastructure',
    category: 'applications',
    categoryLabel: 'SaaS Platform & Dashboard',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
    summary: 'An observability and log aggregation dashboard built for engineering teams managing distributed Kubernetes clusters.',
    overview:
      'Orbit needed a modern control center for DevOps teams to debug microservice incidents in seconds. The dashboard monitors thousands of metrics per second, correlating anomalies with code deployments.',
    challenge:
      'DevOps engineers were overwhelmed by wall-of-text logs. The client needed a platform that prioritizes critical alerts while enabling instant SQL-like query filtering across billions of log lines.',
    approach:
      'We designed high-density dark mode control surfaces with intelligent syntax highlighting, keyboard command shortcuts (Cmd+K), and custom sparkline charts that render tens of thousands of data points smoothly.',
    designAndDev:
      'Built on Next.js 14 with custom WebAssembly log parser plugins, Tailwind CSS for strict color tokenization, and WebSocket connections for sub-second event streaming.',
    keyFeatures: [
      'Sub-second query filtering across distributed server clusters',
      'Keyboard-first command palette for lightning incident triage',
      'Configurable alert routing with PagerDuty and Slack integrations',
      'Automated root-cause suggestion engine powered by trace correlation',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'WebAssembly', 'Tailwind CSS', 'Go Backend', 'PostgreSQL'],
    metrics: [
      { label: 'Mean Time to Resolution (MTTR)', value: '-42%' },
      { label: 'Dashboard Query Latency', value: '< 140ms' },
      { label: 'Active Daily Engineering Teams', value: '3,200+' },
    ],
    testimonial: {
      quote: 'Orbit has become our engineering team’s mission control. The speed and visual clarity during high-stress production outages is peerless.',
      author: 'Kavita Patel',
      title: 'VP of Infrastructure, Orbit Systems',
    },
  },
  {
    id: 'terra',
    slug: 'terra',
    title: 'Terra',
    client: 'Terra Ecological Capital',
    industry: 'Climate Tech & Sustainable Enterprise',
    category: 'websites',
    categoryLabel: 'Digital Platform & Brand',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80',
    summary: 'A verified carbon offset exchange and corporate sustainability tracking platform connecting institutions with vetted reforestation projects.',
    overview:
      'Terra bridges institutional capital with verified ecological restoration projects. They required a public website and investor portal that radiated scientific rigor, verifiable carbon accounting, and ecological stewardship.',
    challenge:
      'Climate tech websites often stumble between dry bureaucratic data and superficial marketing claims. Terra needed an authoritative digital platform that would inspire institutional trust among Fortune 500 sustainability heads.',
    approach:
      'We established an earth-informed editorial palette paired with satellite imagery overlays, interactive reforestation map explorers, and transparent carbon ledger visualizations that update in real time.',
    designAndDev:
      'The platform utilizes Next.js with server-side rendered GIS map components, high-efficiency SVG diagrams, and dynamic carbon credit certificate generators.',
    keyFeatures: [
      'Interactive geospatial project explorer with satellite biomass verification',
      'Live institutional carbon retirement certificates with cryptographic hash',
      'Enterprise ESG reporting calculator compliant with GHG Protocol',
      'Quarterly biodiversity impact data room for institutional investors',
    ],
    techStack: ['Next.js 14', 'Mapbox GL', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Institutional Capital Deployed', value: '$24M+' },
      { label: 'Hectares Reforested Tracked', value: '180,000 ha' },
      { label: 'Website Trust Perception Lift', value: '+88%' },
    ],
    testimonial: {
      quote: 'STUP delivered a platform that gave our scientific models the executive gravitas needed to close sovereign wealth partners.',
      author: 'Julian Sterling',
      title: 'Managing Partner, Terra Ecological',
    },
  },
  {
    id: 'atelier',
    slug: 'atelier',
    title: 'Atelier',
    client: 'Atelier Creative Agency Tokyo',
    industry: 'Creative Direction & Contemporary Design',
    category: 'branding',
    categoryLabel: 'Brand Identity & Web Monograph',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80',
    summary: 'A minimalist digital portfolio and typographic brand identity for a Tokyo-based spatial design and photography collective.',
    overview:
      'Atelier produces avant-garde runway installations and spatial brand experiences in Tokyo and Milan. They challenged our studio to design a website that feels more like an art gallery exhibition catalog than a traditional agency site.',
    challenge:
      'Creating an unforgettable visual identity that honors Japanese minimalist design principles of Ma (negative space) while maintaining strict web accessibility and mobile usability.',
    approach:
      'We composed a monochrome canvas punctuated by deep cherry highlights, bespoke vertical typography treatments, smooth fluid page transitions, and tactile hover states.',
    designAndDev:
      'Custom CSS grid layouts with dynamic aspect ratio preservation, custom audio cues for gallery interactions (with user mute toggle), and ultra-smooth barba-style Next.js navigation transitions.',
    keyFeatures: [
      'Asymmetrical multi-column portfolio index with filter by season',
      'Interactive project light-table for client presentation curations',
      'Dual-language Japanese / English typographic balancing',
      'Zero-layout-shift image gallery with lazy-loaded blur hashes',
    ],
    techStack: ['Next.js 14', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'Awwwards Recognition', value: 'Site of the Day' },
      { label: 'International Inquiries', value: '+140%' },
      { label: 'Mobile Bounce Rate', value: '21%' },
    ],
    testimonial: {
      quote: 'The typography, the silence between the images, the sheer refinement of the code—it is pure poetry in digital form.',
      author: 'Kenji Takahashi',
      title: 'Founder & Creative Director, Atelier',
    },
  },
  {
    id: 'flowspace',
    slug: 'flowspace',
    title: 'Flowspace',
    client: 'Flowspace Labs',
    industry: 'Productivity Software & Distributed Work',
    category: 'applications',
    categoryLabel: 'Productivity App & Desktop Suite',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80',
    summary: 'A distraction-free collaborative workspace combining deep work sessions, asynchronous voice notes, and contextual knowledge graphs.',
    overview:
      'Flowspace is on a mission to eliminate notification fatigue for remote product teams. They engaged us to engineer a lightning-fast web companion and marketing portal that showcases their tranquil workflow philosophy.',
    challenge:
      'Competing against entrenched workplace messaging giants by demonstrating that calm, focused asynchronous work yields superior creative output.',
    approach:
      'We crafted an interactive in-browser preview where prospective users can test the keyboard-driven workflow without signing up. The aesthetic embraces soothing powder blues and deep midnight navy backgrounds.',
    designAndDev:
      'Engineered with Next.js 14, optimistic UI updates, local-first IndexedDB storage, and end-to-end type safety across the entire API boundary.',
    keyFeatures: [
      'Interactive live product sandbox on the landing page',
      'Keyboard-first command center with universal search across notes',
      'Asynchronous voice waveform player with AI transcript generation',
      'Encrypted end-to-end sync across Mac, Windows, and Web',
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Web Audio API'],
    metrics: [
      { label: 'Beta Signups on Launch Day', value: '18,500+' },
      { label: 'Daily Session Length', value: '3.4 hours' },
      { label: 'User Satisfaction CSAT', value: '96%' },
    ],
    testimonial: {
      quote: 'STUP built an onboarding experience so smooth that our viral conversion doubled on Product Hunt launch day.',
      author: 'Evelyn Reed',
      title: 'Co-Founder & CEO, Flowspace',
    },
  },
];
