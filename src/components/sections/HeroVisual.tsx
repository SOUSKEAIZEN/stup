import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Restrained subtle ambient glow */}
      <div
        className="absolute -top-8 -right-8 w-64 h-64 bg-powder/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 -left-8 w-60 h-60 bg-sunflower/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Layered Browser Interface Mockup */}
      <div className="relative bg-white border border-slate-200/90 rounded-sm shadow-card overflow-hidden">
        {/* Browser Top Bar */}
        <div className="bg-surface-bg border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-2 px-3 py-0.5 bg-white border border-slate-200/80 rounded-sm text-[11px] font-ui text-ink-muted">
            <Shield className="w-3 h-3 text-navy" />
            <span>stupstudio.com/architecture/preview</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-ui font-semibold text-navy">
            <span className="w-1.5 h-1.5 rounded-full bg-sunflower animate-pulse" />
            <span>PROD 60FPS</span>
          </div>
        </div>

        {/* Browser Canvas Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Header Preview */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-navy block mb-0.5">
                Architecture Standard
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-navy">
                Finora Intelligence Prototype
              </h4>
              <p className="font-sans text-xs text-ink-muted mt-0.5">
                Multi-Currency Wealth Analytics & Real-Time DOM Virtualization
              </p>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-sunflower/20 text-navy font-ui text-[11px] font-bold border border-sunflower/40 shrink-0">
              <Sparkles className="w-3 h-3 text-navy" />
              Next.js 14
            </span>
          </div>

          {/* Interactive Metric Tiles */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2.5 bg-surface-bg rounded-sm border border-slate-100">
              <span className="font-ui text-[10px] text-ink-muted uppercase tracking-wider block">
                Paint (FCP)
              </span>
              <span className="font-ui text-base sm:text-lg font-bold text-navy mt-0.5 block">
                0.62s
              </span>
              <span className="font-sans text-[10px] text-emerald-600 font-medium">Sub-second</span>
            </div>
            <div className="p-2.5 bg-surface-bg rounded-sm border border-slate-100">
              <span className="font-ui text-[10px] text-ink-muted uppercase tracking-wider block">
                Core Vitals
              </span>
              <span className="font-ui text-base sm:text-lg font-bold text-navy mt-0.5 block">
                99/100
              </span>
              <span className="font-sans text-[10px] text-emerald-600 font-medium">All green</span>
            </div>
            <div className="p-2.5 bg-surface-bg rounded-sm border border-slate-100">
              <span className="font-ui text-[10px] text-ink-muted uppercase tracking-wider block">
                Type Safety
              </span>
              <span className="font-ui text-base sm:text-lg font-bold text-navy mt-0.5 block">
                100%
              </span>
              <span className="font-sans text-[10px] text-sunflower-dark font-bold">Strict TS</span>
            </div>
          </div>

          {/* Code Architecture Preview */}
          <div className="bg-navy p-3.5 rounded-sm text-slate-200 font-mono text-[11px] leading-relaxed overflow-hidden">
            <div className="flex items-center justify-between text-[10px] text-powder mb-2 font-ui uppercase tracking-wider border-b border-navy-deep pb-1">
              <span>TypeScript Component Interface</span>
              <span className="text-sunflower font-mono font-bold">type-safe</span>
            </div>
            <p className="text-powder/80">
              <span className="text-sunflower font-semibold">export interface</span> DigitalArchitecture &#123;
            </p>
            <p className="pl-3.5 text-slate-300">
              framework: <span className="text-powder">&apos;Next.js 14 App Router&apos;</span>;
            </p>
            <p className="pl-3.5 text-slate-300">
              designTokens: <span className="text-powder">&apos;4px Modular Baseline&apos;</span>;
            </p>
            <p className="pl-3.5 text-slate-300">
              accessibility: <span className="text-powder">&apos;WCAG Level AA&apos;</span>;
            </p>
            <p className="pl-3.5 text-slate-300">
              clientCodeOwnership: <span className="text-emerald-400">true</span>;
            </p>
            <p className="text-powder/80">&#125;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
