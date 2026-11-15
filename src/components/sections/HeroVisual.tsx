import React from 'react';
import { Code2, Sparkles, Terminal, CheckCircle2, Layers } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* 50% Midnight Navy Architectural Showcase Frame */}
      <div className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-navy via-navy-deep to-[#0e1628] border border-powder/25 shadow-[0_20px_50px_-15px_rgba(16,26,50,0.25)] overflow-hidden">
        {/* 30% Powder Blue Radial Ambient Glow */}
        <div
          className="absolute -top-16 -right-16 w-56 h-56 bg-powder/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        {/* 20% Sunflower Yellow Highlight Glow */}
        <div
          className="absolute -bottom-16 -left-16 w-48 h-48 bg-sunflower/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Studio System Specimen Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-powder/20 text-[11px] font-ui relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sunflower shadow-[0_0_8px_rgba(245,197,66,0.6)]" />
            <span className="text-white font-semibold tracking-wider uppercase text-[10px]">
              STUP // ARCHITECTURAL SPECIMEN
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-sunflower/20 text-sunflower font-mono text-[10px] font-bold border border-sunflower/30">
            Next.js 14 · Production
          </span>
        </div>

        {/* 30% Powder Blue & Editorial Typography Layer */}
        <div className="bg-gradient-to-br from-powder-soft via-white to-powder/30 rounded-xl p-4 sm:p-4.5 border border-powder/40 shadow-sm relative z-10 text-navy">
          <div className="flex items-center justify-between pb-2.5 border-b border-powder/40 text-[10px] font-ui">
            <span className="font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-navy" />
              <span>Design System Foundations</span>
            </span>
            <span className="font-mono text-ink-muted">Token Hierarchy</span>
          </div>

          <div className="mt-3 grid grid-cols-12 gap-2 text-[11px]">
            <div className="col-span-7 bg-white/90 p-2.5 rounded-md border border-slate-200/80 shadow-2xs">
              <span className="font-display text-sm font-bold block text-navy leading-snug">
                Playfair Display
              </span>
              <span className="text-[10px] text-ink-muted font-sans mt-0.5 block">
                Editorial Display Typography
              </span>
            </div>

            <div className="col-span-5 bg-sunflower p-2.5 rounded-md text-navy flex flex-col justify-between shadow-xs">
              <span className="font-ui text-[10px] font-bold uppercase tracking-wider block">
                20% Energy
              </span>
              <span className="font-ui font-extrabold text-xs">Sunflower Accent</span>
            </div>
          </div>
        </div>

        {/* Midnight Navy & TypeScript Architecture Block */}
        <div className="mt-3.5 bg-navy-900/90 rounded-xl p-4 text-white border border-powder/15 shadow-float relative z-10 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-powder/15 text-[11px] text-powder/80">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sunflower" />
              <span>core-architecture.ts</span>
            </div>
            <span className="text-[10px] text-powder/60">Strict TypeScript</span>
          </div>

          <div className="space-y-1 text-powder/90 text-[11px] leading-relaxed">
            <p>
              <span className="text-sunflower">interface</span> <span className="text-white font-semibold">StudioPlatform</span> {'{'}
            </p>
            <p className="pl-3 text-slate-300">
              design: <span className="text-powder">&apos;Editorial Typography &amp; Fluid Grid&apos;</span>;
            </p>
            <p className="pl-3 text-slate-300">
              stack: <span className="text-powder">&apos;Next.js 14 App Router + Tailwind&apos;</span>;
            </p>
            <p className="pl-3 text-slate-300">
              ownership: <span className="text-sunflower font-semibold">&apos;100% Client Source Handover&apos;</span>;
            </p>
            <p>{'}'}</p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-powder/15 flex items-center justify-between text-[10px] font-ui text-powder/75">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-sunflower" />
              <span>Zero-Bloat Handover</span>
            </span>
            <span className="text-sunflower font-semibold">Type-Safe &amp; Scalable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
