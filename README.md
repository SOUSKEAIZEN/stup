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
- **60% Primary Surface**: Midnight Navy (`#101A32`) and Deep Navy (`#182643`), paired with clean crisp neutrals (`#F7F8FA`, `#FFFFFF`).
- **30% Secondary Elements**: Powder Blue (`#B9D0E8`) and Soft Powder (`#E8EFF7`) used across cards, badges, subtle borders, and structural framing.
- **10% Accent Energy**: Cherry (`#BE3658`) and Deep Cherry (`#962B48`) reserved strictly for high-priority CTAs, interactive hover states, active indicators, and status badges.

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
| `/` | **Landing Page** | High-impact hero, interactive preview composition, studio philosophy & metrics, services overview grid, selected case studies, 4-step agency approach, differentiators, and final CTA. |
| `/services` | **Services & Capabilities** | Categorized into 4 domains: Design & Creative, Web Development, Application Development, and Technology & Growth. Features deliverables, tech stacks, and FAQs. |
| `/work` | **Portfolio & Case Studies** | Filterable by project category (All, Websites, Applications, UI/UX, E-commerce, Branding). Features 8 realistic demonstration case studies. |
| `/work/[slug]` | **Case Study Details** | Dynamic detail routes (`/work/finora`, `/work/forma`, `/work/nourish`, etc.) detailing client background, technical bottlenecks, architectural approaches, feature breakdowns, and conceptual performance benchmarks. |
| `/plans` | **Plans & Pricing** | 4 transparent tiers: Starter (₹14,999), Professional (₹29,999, highlighted), Business Pro (₹59,999), and Enterprise / Custom. Complete side-by-side feature comparison table and pricing FAQs. |
| `/contact` | **Contact & Inquiries** | Type-safe inquiry form with React Hook Form + Zod validation, budget/service selectors, direct email/phone/address placeholders, expected response times, and mutual NDA notice. |
| `/sitemap.xml` | **Dynamic XML Sitemap** | Programmatic search engine index mapping all static and dynamic case study routes. |
| `/robots.txt` | **Robots Configuration** | Search crawler instructions and sitemap link. |

---

## 4. Centralized Data Architecture

All content, pricing, services, and branding are decoupled from components into structured data files for effortless client customization:

- `src/data/agency.ts` — Brand identity, contact details, Bangalore studio address, response SLAs, agency values, and 4-step process.
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
