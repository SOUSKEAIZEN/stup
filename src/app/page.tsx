import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, Layout, Code2, Smartphone, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HeroVisual } from '@/components/sections/HeroVisual';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { agencyConfig } from '@/data/agency';
import { projectsData } from '@/data/projects';

export default function HomePage() {
  const fourFlagshipProjects = projectsData.slice(0, 4);

  const capabilityPillars = [
    {
      id: 'design',
      title: 'Design & Creative',
      desc: 'Human-centered interfaces, disciplined typographic systems, and WCAG AA accessible design tokens.',
      icon: Layout,
      href: '/services#design',
    },
    {
      id: 'web',
      title: 'Web Development',
      desc: 'Modern Next.js 14 App Router architectures, strict TypeScript safety, and low-latency serverless backends.',
      icon: Code2,
      href: '/services#web',
    },
    {
      id: 'apps',
      title: 'Application Development',
      desc: 'Cross-platform mobile applications, bespoke operational tooling, and resilient API synchronizations.',
      icon: Smartphone,
      href: '/services#apps',
    },
    {
      id: 'tech',
      title: 'Technology & Growth',
      desc: 'Technical performance audits, semantic search engine optimization, and organized cloud deployments.',
      icon: Cpu,
      href: '/services#tech',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-8 sm:pt-10 sm:pb-12 border-b border-slate-200/60 overflow-hidden bg-gradient-to-b from-powder-soft/50 via-white to-surface-bg">
        <div className="max-w-site mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-powder-soft border border-powder/60 font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                DIGITAL SOFTWARE &amp; DESIGN STUDIO
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] tracking-[-0.025em] text-navy font-bold text-balance">
                Thoughtful design. Powerful digital experiences.
              </h1>

              <p className="mt-3 font-sans text-sm sm:text-base text-ink-body max-w-lg leading-relaxed text-balance">
                STUP Studio partners with founders to design, engineer, and deploy high-performance web applications and bespoke digital products.
              </p>

              {/* CTAs: Explore Services & Contact */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button
                  href="/services"
                  variant="sunflower"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4 stroke-[2.2]" />}
                  className="text-xs font-bold text-navy shadow-xs"
                >
                  Explore Services
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="md"
                  className="text-xs font-semibold text-navy bg-white border border-slate-200 hover:border-slate-300"
                >
                  Contact Studio
                </Button>
              </div>

              {/* Technical Foundations */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 w-full flex flex-wrap items-center gap-4 text-xs font-ui text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">Next.js 14 &amp; React</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">Strict TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="p-0.5 rounded-full bg-sunflower/25 text-navy">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span className="font-medium text-navy">Full Source Handover</span>
                </div>
              </div>
            </div>

            {/* Right Column: Custom Visual Composition */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. AGENCY POSITIONING */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                AGENCY POSITIONING
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                Architectural discipline over template aesthetics.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed">
                We eliminate layers of agency bureaucracy. By collaborating directly with senior practitioners, our clients receive robust software engineering, thoughtful typography, predictable delivery schedules, and complete codebase ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE CAPABILITIES */}
      <section className="py-8 sm:py-12 bg-surface-bg border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                CORE CAPABILITIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Specialized digital engineering.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold uppercase tracking-wider text-navy hover:text-navy-deep group shrink-0"
            >
              <span>Explore Complete Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {capabilityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-sunflower/80 hover:shadow-subtle"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-powder-soft text-navy flex items-center justify-center mb-3.5">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-ink-body leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-1 text-[11px] font-ui font-semibold uppercase tracking-wider text-navy hover:text-navy-deep group"
                    >
                      <span>Explore Domain</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 text-sunflower" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK (Exactly Four Flagship Projects) */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                SELECTED WORK
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
                Featured client executions.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold uppercase tracking-wider text-navy hover:text-navy-deep group shrink-0"
            >
              <span>View All 4 Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {fourFlagshipProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-surface-bg border border-slate-200/90 rounded-2xl p-5 flex flex-col justify-between transition-all hover:border-powder hover:shadow-card group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-4">
                    <Link href={`/work/${project.slug}`} tabIndex={-1} aria-hidden="true">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} - ${project.categoryLabel}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 560px"
                        priority={idx < 2}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-ui mb-1.5">
                    <span className="font-bold uppercase tracking-wider text-navy">
                      {project.categoryLabel}
                    </span>
                    <span className="text-slate-300">/</span>
                    <span className="text-ink-muted text-[11px]">{project.industry}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy group-hover:text-navy-deep transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>

                  <p className="font-sans text-xs text-ink-body mt-1.5 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white text-ink-muted font-ui text-[10px] font-semibold border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 font-ui text-xs font-bold uppercase tracking-wider text-navy group-hover:text-sunflower-dark transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONCISE WORKING APPROACH (Horizontal Timeline on Desktop, Vertical on Mobile) */}
      <section className="py-8 sm:py-12 bg-surface-bg border-b border-slate-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-6">
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
              WORKING APPROACH
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
              A transparent, four-step development cadence.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {agencyConfig.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-navy">
                      STAGE {step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy mb-1">
                    {step.name}
                  </h3>
                  <p className="font-sans text-xs text-ink-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STRONG CONTACT CTA */}
      <FinalCTA
        title="Ready to engineer your digital presence?"
        subtitle="Share your project goals with our lead practitioners. We evaluate every inquiry with clear scopes, transparent pricing, and structured next steps."
      />
    </div>
  );
}
