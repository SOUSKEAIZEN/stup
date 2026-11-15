import React from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Ambient soft glow */}
      <div
        className="absolute -top-12 -right-12 w-80 h-80 bg-powder/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -left-10 w-72 h-72 bg-sunflower/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Layered Browser Interface Mockup */}
      <div className="relative bg-white border border-slate-200/90 rounded-sm shadow-card overflow-hidden">
        {/* Browser Top Bar */}
        <div className="bg-surface-bg border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200/80 rounded-sm text-[11px] font-ui text-ink-muted">
            <Shield className="w-3 h-3 text-navy" />
            <span>stupstudio.com/production/preview</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-ui font-semibold text-navy">
            <span className="w-2 h-2 rounded-full bg-sunflower animate-pulse" />
            <span>LIVE 60FPS</span>
          </div>
        </div>

        {/* Browser Canvas Content */}
        <div className="p-6 sm:p-7 space-y-6">
          {/* Header Preview */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-5">
            <div>
              <span className="text-[10px] font-ui font-bold uppercase tracking-[0.2em] text-navy block mb-1">
                Design Architecture
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-navy">
                Finora Intelligence OS
              </h4>
              <p className="font-sans text-xs text-ink-muted mt-1">
                Institutional Wealth Management & Real-time Analytics
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-sunflower/20 text-navy font-ui text-xs font-bold border border-sunflower/40">
              <Sparkles className="w-3.5 h-3.5 text-navy" />
              Next.js 14
            </span>
          </div>

          {/* Interactive Metric Tiles */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-surface-bg rounded-sm border border-slate-100">
              <span className="font-ui text-[10px] text-ink-muted uppercase tracking-wider block">
                Load Latency
              </span>
              <span className="font-ui text-lg sm:text-xl font-bold text-navy mt-0.5 block">
                0.78s
              </span>
              <span className="font-sans text-[10px] text-emerald-600 font-medium">99th percentile</span>
            </div>
            <div className="p-3 bg-surface-bg rounded-sm border border-slate-100">
              <span className="font-ui text-[10px] text-ink-muted uppercase tracking-wider block">
                Core Web Vitals
              </span>
              <span className="font-ui text-lg sm:text-xl font-bold text-navy mt-0.5 block">
                99/100
              </span>
              <span className="font-sans text-[10px] text-emerald-600 font-medium">All green pass</span>
            </div>
            <div className="p-3 bg-surface-bg rounded-sm border border-slate-100">
              <span className="font-ui text-[10px] text-ink-muted uppercase tracking-wider block">
                Conversion
              </span>
              <span className="font-ui text-lg sm:text-xl font-bold text-navy mt-0.5 block">
                +42.6%
              </span>
              <span className="font-sans text-[10px] text-sunflower-dark font-bold">Verified lift</span>
            </div>
          </div>

          {/* Simulated Code Architecture Preview */}
          <div className="bg-navy p-4 rounded-sm text-slate-200 font-mono text-[11px] leading-relaxed overflow-hidden">
            <div className="flex items-center justify-between text-[10px] text-powder mb-2 font-ui uppercase tracking-wider border-b border-navy-deep pb-1.5">
              <span>TypeScript Component Interface</span>
              <span className="text-sunflower font-mono font-bold">type-safe</span>
            </div>
            <p className="text-powder/80">
              <span className="text-sunflower font-semibold">export interface</span> DigitalExperience &#123;
            </p>
            <p className="pl-4 text-slate-300">
              designTokens: <span className="text-powder">&apos;Minimalist 4px Grid&apos;</span>;
            </p>
            <p className="pl-4 text-slate-300">
              engineering: <span className="text-powder">&apos;Next.js App Router + Vercel Edge&apos;</span>;
            </p>
            <p className="pl-4 text-slate-300">
              typographyScale: <span className="text-powder">&apos;Playfair Display / Manrope / Inter&apos;</span>;
            </p>
            <p className="pl-4 text-slate-300">
              performanceGuarantee: <span className="text-emerald-400">true</span>;
            </p>
            <p className="text-powder/80">&#125;</p>
          </div>
        </div>
      </div>

      {/* Floating Accent Badge 1: Quality Guarantee */}
      <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200/90 rounded-sm p-4 shadow-float hidden sm:flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sunflower/20 flex items-center justify-center text-navy shrink-0 border border-sunflower/40">
          <CheckCircle2 className="w-5 h-5 text-navy stroke-[2.2]" />
        </div>
        <div>
          <span className="font-ui text-xs font-bold text-navy block">
            Crafted for Ambition
          </span>
          <span className="font-sans text-[11px] text-ink-muted">
            0% generic templates · 100% bespoke code
          </span>
        </div>
      </div>

      {/* Floating Accent Badge 2: Bangalore Studio */}
      <div className="absolute -top-5 -right-5 bg-navy text-white rounded-sm px-4 py-2.5 shadow-float hidden sm:flex items-center gap-2 border border-powder/20">
        <span className="w-2 h-2 rounded-full bg-sunflower animate-ping" />
        <span className="font-ui text-xs font-semibold tracking-wider uppercase text-powder">
          Bangalore Studio
        </span>
        <ArrowUpRight className="w-3.5 h-3.5 text-sunflower ml-1" />
      </div>
    </div>
  );
}
