import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/properties';

interface HeroSectionProps {
  onExploreProperties: () => void;
  onBookCall: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProperties,
  onBookCall,
}) => {
  return (
    <section id="hero-section" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Headline & Supporting Paragraph Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 sm:mb-12">
          {/* Left Column: Marquee Headline */}
          <div className="lg:col-span-7">
            <h1 className="font-['Manrope'] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-[-0.035em] text-[#151515] leading-[1.05] text-balance">
              Find a place you <br className="hidden sm:inline" />
              will call home
            </h1>

            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#151515] hover:bg-[#333333] text-white text-xs sm:text-sm font-medium tracking-wide rounded-md transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Book a call</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B39A72]" />
              </button>

              <button
                onClick={onExploreProperties}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-[#444444] hover:text-[#151515] hover:bg-black/5 rounded-md transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#B39A72]" />
                <span>Explore collection</span>
              </button>
            </div>
          </div>

          {/* Right Column: Supporting Paragraph matching reference text */}
          <div className="lg:col-span-5 lg:pt-2">
            <p className="font-['Inter'] text-sm sm:text-base text-[#666666] leading-relaxed max-w-md">
              With us you will find not just accommodation, but a place where your new life begins,
              full of coziness and possibilities. Every residence is meticulously evaluated for
              architectural excellence, privacy, and lasting value.
            </p>

            {/* Quiet metadata markers */}
            <div className="mt-6 pt-5 border-t border-[#EAEAEA] flex items-center gap-6 text-xs text-[#777777]">
              <div>
                <span className="font-['Manrope'] font-bold text-base text-[#151515] tabular-nums">
                  6
                </span>
                <span className="ml-1.5">Countries</span>
              </div>
              <span className="text-[#CCCCCC]" aria-hidden="true">·</span>
              <div>
                <span className="font-['Manrope'] font-bold text-base text-[#151515] tabular-nums">
                  14%
                </span>
                <span className="ml-1.5">Avg. Rental Yield</span>
              </div>
              <span className="text-[#CCCCCC]" aria-hidden="true">·</span>
              <div>
                <span className="font-['Manrope'] font-bold text-base text-[#151515] tabular-nums">
                  $380M+
                </span>
                <span className="ml-1.5">Curated Volume</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Architectural Photograph - Wide Cinematic Aspect Ratio */}
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group bg-[#EAEAEA]">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
            <img
              src={HERO_IMAGE}
              alt="Contemporary two-story luxury architectural villa with floor-to-ceiling glass and pool terrace"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Subtle light vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

            {/* Subtle caption bottom overlay */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 text-white/90 text-xs">
              <span className="px-2.5 py-1 bg-black/40 backdrop-blur-md rounded font-mono text-[11px] tracking-wider uppercase text-[#E0D7C3]">
                Featured Architecture
              </span>
              <span className="hidden sm:inline text-white/80">The Black Villa · Zurich Canton</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
