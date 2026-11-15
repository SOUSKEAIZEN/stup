import React from 'react';
import Image from 'next/image';

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Sophisticated Navy-to-Powder-Blue gradient card frame */}
      <div className="relative rounded-md p-3 sm:p-4 bg-gradient-to-br from-navy via-navy-deep to-[#1c2c4e] border border-powder/20 shadow-card overflow-hidden">
        {/* Subtle interior glow */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 bg-powder/15 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 w-40 h-40 bg-sunflower/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Primary Desktop Website Mockup Frame */}
        <div className="relative bg-white rounded-sm overflow-hidden border border-slate-200/90 shadow-sm">
          {/* Minimalist Browser Chrome */}
          <div className="bg-surface-bg border-b border-slate-200/80 px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="w-2 h-2 rounded-full bg-slate-300" />
            </div>
            <div className="px-2.5 py-0.5 bg-white border border-slate-200/70 rounded-xs text-[10px] font-ui text-ink-muted">
              stupstudio.com/work/preview
            </div>
            <div className="w-2 h-2 rounded-full bg-sunflower" />
          </div>

          {/* Desktop Web Preview Image */}
          <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
              alt="Digital Interface Preview"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Secondary Overlapping Mobile Showcase Frame */}
        <div className="absolute -bottom-2 right-4 sm:right-6 w-32 sm:w-36 bg-white rounded-sm overflow-hidden border-2 border-navy-deep shadow-float">
          {/* Mobile Phone Top Bar */}
          <div className="bg-navy px-2 py-1 flex items-center justify-between">
            <div className="w-6 h-1 rounded-full bg-powder/40 mx-auto" />
          </div>
          {/* Mobile Preview Image */}
          <div className="relative aspect-[9/16] w-full bg-slate-100 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
              alt="Mobile Responsive Interface Preview"
              fill
              sizes="150px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Studio Capability Pill */}
        <div className="mt-3 pt-2.5 border-t border-navy-light/60 flex items-center justify-between text-[11px] font-ui text-powder/80">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sunflower" />
            <span className="text-white font-medium">Bespoke Digital Platforms</span>
          </div>
          <span className="text-powder/60 text-[10px]">Responsive Web & Mobile</span>
        </div>
      </div>
    </div>
  );
}
