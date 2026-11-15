import React from 'react';
import { Layers, Terminal, Sparkles, Code2, Cpu } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* 60% Powder Blue & Soft Surface Architectural Canvas Frame */}
      <div className="relative rounded-md p-4 sm:p-5 bg-gradient-to-br from-powder-soft via-white to-powder/20 border border-powder/70 shadow-card overflow-hidden">
        {/* Subtle ambient lighting */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 bg-powder/30 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-10 w-36 h-36 bg-sunflower/15 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Studio System Specimen Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-powder/50 text-[11px] font-ui">
          <div className="flex items-center gap-1.5 text-navy font-semibold">
            <span className="w-2 h-2 rounded-full bg-sunflower" />
            <span>STUP / ARCHITECTURAL CANVAS</span>
          </div>
          <span className="text-ink-muted font-mono text-[10px]">v2.4 · 60fps</span>
        </div>

        {/* Main Interface Composition Layer (Editorial Wireframe & Layout Grid) */}
        <div className="bg-white rounded-sm border border-slate-200/90 p-4 shadow-xs">
          {/* Top Bar Specimen */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-navy">Playfair Display</span>
              <span className="text-[10px] font-mono text-ink-muted">48px / 1.14</span>
            </div>
            <span className="px-2 py-0.5 rounded-xs bg-powder-soft text-[10px] font-ui font-semibold text-navy">
              Editorial Type
            </span>
          </div>

          {/* Grid Specimen Rows */}
          <div className="mt-3.5 space-y-2.5">
            <div className="grid grid-cols-12 gap-2 text-[10px] font-mono text-ink-muted">
              <div className="col-span-8 p-2.5 rounded-xs bg-surface-bg border border-slate-100 flex items-center justify-between">
                <span className="text-navy font-medium">Layout Grid Core</span>
                <span className="text-[9px] text-ink-muted">12-col / fluid</span>
              </div>
              <div className="col-span-4 p-2.5 rounded-xs bg-powder-soft/50 border border-powder/30 flex items-center justify-center text-navy font-semibold">
                30% Navy
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 text-[10px] font-mono">
              <div className="col-span-4 p-2 rounded-xs bg-powder-soft border border-powder/40 flex items-center justify-center text-navy font-semibold text-[10px]">
                60% Powder
              </div>
              <div className="col-span-8 p-2 rounded-xs bg-surface-bg border border-slate-100 flex items-center justify-between px-3">
                <span className="text-navy text-[11px] font-sans font-medium">Accessible WCAG AA</span>
                <span className="text-sunflower font-bold">10% Accent</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping 30% Midnight Navy Code Specimen Card */}
        <div className="mt-3.5 bg-navy rounded-sm p-3.5 sm:p-4 text-white border border-navy-deep shadow-float relative z-10">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-navy-deep text-[11px] font-mono text-powder/80">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sunflower" />
              <span>studio-engine.ts</span>
            </div>
            <span className="text-[10px] text-powder/60">Strict TypeScript</span>
          </div>

          <div className="font-mono text-xs text-powder/90 space-y-1 leading-relaxed">
            <p>
              <span className="text-sunflower">const</span> studio = {'{'}
            </p>
            <p className="pl-3 text-slate-300">
              stack: <span className="text-powder">&apos;Next.js 14 & React 18&apos;</span>,
            </p>
            <p className="pl-3 text-slate-300">
              styling: <span className="text-powder">&apos;Tailwind & Design Tokens&apos;</span>,
            </p>
            <p className="pl-3 text-slate-300">
              delivery: <span className="text-sunflower">&apos;Zero-bloat & Type-safe&apos;</span>,
            </p>
            <p>{'}'};</p>
          </div>

          <div className="mt-3 pt-2 border-t border-navy-deep/80 flex items-center justify-between text-[10px] font-ui text-powder/70">
            <span>Clean Architecture</span>
            <span className="text-sunflower font-semibold">100% Client Ownership</span>
          </div>
        </div>
      </div>
    </div>
  );
}
