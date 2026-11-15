import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, AlertCircle, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/sections/FinalCTA';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — ${project.typology} | STUP Studio`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | STUP Studio`,
      description: project.summary,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const projectIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const project = projectsData[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="flex flex-col pt-24 sm:pt-28">
      {/* BACK NAVIGATION */}
      <div className="max-w-site mx-auto px-4 sm:px-6 w-full mb-6">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunflower rounded-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* CASE STUDY HEADER */}
      <section className="pb-8 sm:pb-12 border-b border-slate-200/70 bg-gradient-to-b from-powder-soft/40 via-white to-white">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-ui mb-3">
            <span className="font-bold uppercase tracking-widest text-navy flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sunflower" />
              {project.categoryLabel}
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-ink-muted uppercase tracking-wider">{project.industry}</span>
            <span className="text-slate-300">/</span>
            <span className="text-ink-muted">{project.year}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight max-w-3xl text-balance">
            {project.title}
          </h1>

          <p className="mt-3 font-sans text-sm sm:text-base text-ink-body max-w-2xl leading-relaxed text-balance">
            {project.summary}
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/70">
            <div>
              <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                Project Typology
              </span>
              <p className="font-ui text-xs sm:text-sm font-bold text-navy mt-1">{project.typology}</p>
            </div>
            <div>
              <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                Project Status
              </span>
              <p className="font-ui text-xs sm:text-sm font-bold text-navy mt-1">Conceptual Studio Demo</p>
            </div>
            <div>
              <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                Framework Core
              </span>
              <p className="font-ui text-xs sm:text-sm font-bold text-navy mt-1">Next.js 14 App Router</p>
            </div>
            <div>
              <span className="font-ui text-[11px] font-bold uppercase tracking-wider text-ink-muted block">
                Type Safety
              </span>
              <p className="font-ui text-xs sm:text-sm font-bold text-navy mt-1">Strict TypeScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED HERO IMAGE */}
      <section className="py-8 max-w-site mx-auto px-4 sm:px-6 w-full">
        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-slate-200/90 shadow-card">
          <Image
            src={project.heroImage}
            alt={`${project.title} preview hero image`}
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover"
          />
        </div>
      </section>

      {/* CASE STUDY CONTENT SECTIONS */}
      <section className="py-12 sm:py-16">
        <div className="max-w-site mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Deep Narrative */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. Context & Objectives */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  01 / CONTEXT & OBJECTIVES
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Prototype Objectives
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed">
                  {project.overview}
                </p>
                <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed mt-3">
                  <strong>Target Objective:</strong> {project.objectives}
                </p>
              </div>

              {/* 2. Challenge & Design Decisions */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  02 / ARCHITECTURAL CHALLENGE & DESIGN
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Design & Ergonomic Decisions
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed">
                  {project.challenge}
                </p>
                <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed mt-3">
                  {project.designDecisions}
                </p>
              </div>

              {/* Secondary Image */}
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-slate-200/90 shadow-subtle">
                <Image
                  src={project.secondaryImage}
                  alt={`${project.title} detailed interface execution`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* 3. Engineering Strategy */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  03 / ENGINEERING EXECUTION
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Technical Architecture
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-body leading-relaxed">
                  {project.engineeringApproach}
                </p>
              </div>

              {/* 4. Delivered Features */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  04 / KEY CAPABILITIES
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-4">
                  Implemented Features
                </h2>
                <div className="space-y-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-slate-200/90 rounded-sm flex items-start gap-3"
                    >
                      <span className="mt-0.5 p-0.5 rounded-full bg-sunflower/25 text-navy shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-ink-body leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Architectural Deliverables */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold uppercase tracking-[0.2em] text-navy block mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                  05 / DELIVERABLES PACKAGE
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-4">
                  Delivered Artifacts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-surface-bg border border-slate-200 rounded-sm flex items-center gap-2.5 text-xs font-ui font-semibold text-navy"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-sunflower shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Sidebar with Benchmarks & Tech Stack */}
            <div className="lg:col-span-4 space-y-6">
              {/* Performance Benchmarks */}
              <div className="bg-white border border-slate-200/90 rounded-sm p-6 shadow-sm">
                <span className="font-ui text-xs font-bold uppercase tracking-wider text-navy block mb-4 border-b border-slate-100 pb-2.5">
                  Controlled Benchmarks
                </span>
                <div className="space-y-4">
                  {project.benchmarks.map((metric, idx) => (
                    <div key={idx}>
                      <span className="font-display text-2xl sm:text-3xl font-bold text-navy block">
                        {metric.value}
                      </span>
                      <span className="font-ui text-[11px] text-ink-muted uppercase tracking-wider block mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Conceptual Notice */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-2 text-ink-muted">
                  <AlertCircle className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                  <p className="font-sans text-[11px] leading-relaxed">
                    <strong>Conceptual Portfolio Case Study:</strong> Metrics displayed are demonstration benchmarks recorded under controlled staging environments to illustrate performance capabilities.
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="bg-white border border-slate-200/90 rounded-sm p-6 shadow-sm">
                <span className="font-ui text-xs font-bold uppercase tracking-wider text-navy block mb-3 border-b border-slate-100 pb-2.5">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-surface-bg rounded-sm font-ui text-xs font-medium text-navy border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sidebar Action CTA */}
              <div className="bg-powder-soft/50 border border-powder/50 rounded-sm p-5">
                <h4 className="font-display text-lg font-bold text-navy mb-1.5">
                  Require Similar Architecture?
                </h4>
                <p className="font-sans text-xs text-ink-body leading-relaxed mb-4">
                  Schedule a preliminary discovery review with our senior engineering squad.
                </p>
                <Button
                  href="/contact"
                  variant="sunflower"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4 stroke-[2.2]" />}
                  className="w-full justify-center text-xs tracking-wider uppercase font-bold text-navy"
                >
                  Start a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT NAVIGATION BAR */}
      <section className="py-10 bg-white border-y border-slate-200/70">
        <div className="max-w-site mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/work"
            className="font-ui text-xs font-semibold uppercase tracking-wider text-ink-muted hover:text-navy transition-colors"
          >
            ← View All Case Studies
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center gap-3 text-right"
          >
            <div>
              <span className="font-ui text-[10px] font-bold uppercase tracking-wider text-navy block">
                Next Case Study
              </span>
              <span className="font-display text-lg font-bold text-navy group-hover:text-navy-deep transition-colors">
                {nextProject.title} — {nextProject.industry}
              </span>
            </div>
            <div className="p-2.5 rounded-full bg-powder-soft text-navy group-hover:bg-sunflower group-hover:text-navy transition-colors">
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </div>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
