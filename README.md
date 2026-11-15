# STUP Studio — Premium Digital Software & Technology Agency

> A modern, minimalist, editorial website for an independent digital software studio and creative technology consultancy. Engineered with Next.js 14 App Router, TypeScript, Tailwind CSS, and Zod.

---

## 1. Project Overview

**STUP Studio** is an independent digital agency and technology consultancy specializing in high-performance web platforms, bespoke web applications, design systems, and cloud infrastructure.

- **GitHub Repository**: [https://github.com/SOUSKEAIZEN/stup.git](https://github.com/SOUSKEAIZEN/stup.git)
- **Live Local Preview**: `http://localhost:3000`
- **Framework**: Next.js 14 (App Router) + React 18 + TypeScript

---

## 2. Design System & Aesthetics

The visual identity is designed with restraint, generous whitespace, and disciplined editorial typography, deliberately avoiding generic AI-generated templates.

### 2.1. The 60–30–10 Colour Hierarchy
- **60% Primary Surface**: Powder Blue (`#B9D0E8`) and soft light surfaces (`#E8EFF7`, `#F7F8FA`, `#FFFFFF`) used across backgrounds, cards, and structural surfaces.
- **30% Secondary Elements**: Midnight Navy (`#101A32`) and Deep Navy (`#182643`) for high-contrast typography, dark specimen cards, and deep section accents.
- **10% Accent Energy**: Sunflower Yellow (`#F5C542`) and Deep Sunflower (`#EAB52B`) reserved strictly for high-priority CTAs, interactive hover states, active navigation indicators, and status badges. High-contrast Midnight Navy text is paired with yellow surfaces for flawless WCAG AAA/AA readability.

### 2.2. The Three-Font Typographic Hierarchy
1. **Display Typography — Playfair Display**:
   - Used for editorial hero headings, case study titles, and philosophical statements.
2. **Minimalist & Interface Typography — Manrope**:
   - Used for navigation, badges, metadata, numeric benchmarks, and pricing labels.
3. **Body & Detail Typography — Inter**:
   - Used for body paragraphs, feature lists, contact forms, and legal disclosures.

---

## 3. Website Structure & Routes

| Route | Page | Purpose & Key Features |
|---|---|---|
| `/` | **Agency Overview** | High-impact hero with custom architectural visual, studio positioning statement, 4 core capability pillars linking to Services, 4-step working approach (Discovery, Planning, Design & Development, Delivery), Why STUP principles, and compact contact invitation. (Dedicated portfolio remains exclusively on `/work`). |
| `/services` | **Service Catalogue** | Organized into 4 domains: Design and Creative, Web Development, Application Development, and Technology and Growth. Features detailed breakdowns of what is included, client deliverables, relevant technologies, and direct inquiry actions. |
| `/work` | **Portfolio & Case Studies** | Dedicated solely to demonstrating work. Filterable by project category (All, Websites, Applications, UI/UX, E-commerce, Branding) featuring 8 realistic demonstration case studies. |
| `/work/[slug]` | **Case Study Details** | Dynamic detail routes (`/work/finora`, `/work/forma`, `/work/nourish`, etc.) detailing client background, technical bottlenecks, architectural approaches, feature breakdowns, and controlled benchmark simulations. |
| `/plans` | **Plans & Pricing** | 4 transparent introductory tiers: Essential (₹4,999), Starter (₹9,999), Professional (₹14,999, recommended), and Business Plus (₹24,999). Complete comparison table and scope explanations. |
| `/contact` | **Direct Inquiries** | Focused, type-safe inquiry form with React Hook Form + Zod validation, budget/service selectors, direct email and repository links. |
| `/sitemap.xml` | **Dynamic XML Sitemap** | Programmatic search engine index mapping all static and dynamic case study routes. |
| `/robots.txt` | **Robots Configuration** | Search crawler instructions and sitemap link. |

---

## 4. Centralized Data Architecture

All content, pricing, services, and branding are decoupled from components into structured data files for effortless client customization:

- `src/data/agency.ts` — Brand identity, contact details, remote studio delivery, response SLAs, agency values, and 4-step process.
- `src/data/services.ts` — All service definitions, category groupings, deliverables, and tech tags.
- `src/data/projects.ts` — Case study narratives, high-resolution imagery, technical stacks, and metrics.
- `src/data/pricing.ts` — Package pricing, feature lists, and detailed comparison matrix.
- `src/data/navigation.ts` — Header, footer, and quick link definitions.
- `src/data/faqs.ts` — Agency and pricing frequently asked questions.

---

## 5. Technical Stack

- **Framework**: Next.js 14.2 (App Router with SSG)
- **Language**: TypeScript 5 (Strict mode)
- **Styling**: Tailwind CSS 3.4 with custom typography and color tokens
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form 7 + Zod 3 + `@hookform/resolvers`
- **Animation**: CSS hardware-accelerated transitions & Framer Motion utilities
- **SEO & Accessibility**: Semantic HTML5, ARIA labels, OpenGraph tags, WCAG AA contrast, and `prefers-reduced-motion` compliance.

---

## 6. Local Development & Verification

### Prerequisites
- Node.js `v18.17.0+` (tested on Node `v24.15.0`)
- npm `v9+`

### Installation
```bash
# Clone the repository
git clone https://github.com/SOUSKEAIZEN/stup.git
cd stup

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Assurance & Production Build
```bash
# Typecheck
npx tsc --noEmit

# Lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## 7. License & Credits

Built from scratch for **STUP Studio**. All rights reserved.
