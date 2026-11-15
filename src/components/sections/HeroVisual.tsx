'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, Lock, ArrowUpRight, Sparkles, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Ambient Lighting & Glows */}
      <div
        className="absolute -top-12 -left-12 w-64 h-64 bg-powder/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -right-10 w-60 h-60 bg-sunflower/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Outer Studio Showcase Frame */}
      <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-white via-powder-soft/40 to-slate-50 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(16,26,50,0.12)]">
        
        {/* Floating Top Badge: Creative Engineering */}
        <div className="absolute -top-3.5 right-6 z-30">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy text-white text-[11px] font-ui font-bold uppercase tracking-wider shadow-md border border-navy-deep">
            <span className="w-1.5 h-1.5 rounded-full bg-sunflower shadow-[0_0_6px_rgba(245,197,66,0.8)]" />
            <span>Digital Product Showcase</span>
          </span>
        </div>

        {/* PRIMARY LAYER: Desktop Web Application Mockup (Forma Architectural Monograph) */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Browser Window Chrome */}
          <div className="bg-slate-50/90 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>

            {/* URL Bar */}
            <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-slate-200/80 text-[11px] font-mono text-ink-muted">
              <Lock className="w-3 h-3 text-slate-400" />
              <span>stup.studio/work/forma</span>
            </div>

            <div className="w-10" />
          </div>

          {/* Website Canvas Interface */}
          <div className="p-4 sm:p-5 bg-gradient-to-b from-white via-surface-bg/30 to-powder-soft/20">
            {/* Website Mock Navigation */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-bold tracking-tight text-navy">FORMA</span>
                <span className="text-[10px] font-ui uppercase tracking-wider text-ink-muted">· Spatial Monograph</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] font-ui text-ink-muted">
                <span className="text-navy font-semibold">Works</span>
                <span>Blueprints</span>
                <span>Practice</span>
              </div>
            </div>

            {/* Website Content Grid */}
            <div className="grid grid-cols-12 gap-3.5 items-center">
              {/* Architectural Imagery Card */}
              <div className="col-span-7 relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-slate-200/70 group">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Forma Architectural Monograph"
                  fill
                  sizes="320px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-ui">
                  <span className="font-semibold tracking-wider uppercase">Residence Kyoto</span>
                  <span className="px-1.5 py-0.5 rounded bg-navy/70 backdrop-blur-xs text-[9px] font-mono">
                    AVIF · 54 KB
                  </span>
                </div>
              </div>

              {/* Editorial Description Column */}
              <div className="col-span-5 space-y-2">
                <span className="inline-block px-2 py-0.5 rounded bg-powder-soft text-navy font-ui text-[9px] font-bold uppercase tracking-wider border border-powder/50">
                  Modernist Monograph
                </span>
                <h4 className="font-display text-sm sm:text-base font-bold text-navy leading-snug">
                  Disciplined spatial geometries.
                </h4>
                <p className="font-sans text-[11px] text-ink-body leading-relaxed line-clamp-2">
                  Quiet architectural pacing paired with sub-second asset delivery and zero layout shift.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-[10px] font-ui font-bold text-navy">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3 h-3 text-sunflower stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY LAYER: Overlapping Mobile Application Preview (Nourish Mobile Companion) */}
        <div className="relative mt-3 sm:-mt-8 ml-auto w-52 sm:w-60 bg-navy rounded-2xl p-2.5 shadow-[0_16px_36px_-8px_rgba(16,26,50,0.32)] border border-navy-deep z-20 text-white">
          {/* Mobile Screen Shell */}
          <div className="bg-navy-deep rounded-xl p-3 border border-powder/15">
            {/* Mobile Header with Camera Island */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-powder/15">
              <span className="font-mono text-[9px] text-powder/80">9:41</span>
              <div className="w-12 h-2.5 rounded-full bg-navy/90 border border-powder/20" />
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
                <span className="font-ui text-[9px] text-powder font-bold">5G</span>
              </div>
            </div>

            {/* Mobile App Interface: Nourish Companion */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-ui text-[9px] font-bold uppercase tracking-wider text-powder/70 block">
                    Nourish Platform
                  </span>
                  <span className="font-display text-xs font-bold text-white">
                    Daily Bio-Protocol
                  </span>
                </div>
                <span className="px-1.5 py-0.5 rounded-full bg-sunflower/20 text-sunflower font-ui text-[9px] font-bold border border-sunflower/30">
                  Active
                </span>
              </div>

              {/* Progress Metric Bar */}
              <div className="bg-navy p-2 rounded-lg border border-powder/15 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-ui">
                  <span className="text-powder/80">Protocol Completion</span>
                  <span className="font-bold text-sunflower">88%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-700 overflow-hidden">
                  <div className="h-full bg-sunflower rounded-full w-[88%]" />
                </div>
              </div>

              {/* Quick Status Line */}
              <div className="flex items-center justify-between pt-1 text-[9px] font-ui text-powder/80">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-sunflower" />
                  <span>Sub-80ms Sync</span>
                </span>
                <span className="text-slate-300">Offline-First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Micro Floating Badge: Engineering Standard */}
        <div className="mt-3 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-ui text-ink-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
            <span className="font-semibold text-navy">Flagship Digital Delivery</span>
          </div>
          <span className="text-ink-body font-mono text-[10px]">WCAG AA · 60 FPS</span>
        </div>

      </div>
    </div>
  );
}
