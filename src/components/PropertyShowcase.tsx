import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { Property } from '../types/property';

interface PropertyShowcaseProps {
  property: Property;
  onExplore: (property: Property) => void;
  onBookViewing: () => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({
  property,
  onExplore,
  onBookViewing,
}) => {
  return (
    <section className="py-14 sm:py-20 bg-[#151515] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#B39A72] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Showcase</span>
            </div>
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              {property.name}
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-[#AAAAAA]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#B39A72]" />
              {property.locationFormatted}
            </span>
            <span className="text-[#444444]" aria-hidden="true">·</span>
            <span className="text-white font-semibold font-mono tabular-nums">
              From {property.priceFormatted}
            </span>
          </div>
        </div>

        {/* Large Cinematic Showcase Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-neutral-900 shadow-2xl">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          </div>

          {/* Floating Details Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-['Inter']">
                {property.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#D4C3A3]">
                <span>{property.areaSqM} m² Private Sanctuary</span>
                <span className="text-neutral-600" aria-hidden="true">/</span>
                <span>{property.bedrooms} En-Suite Bedrooms</span>
                <span className="text-neutral-600" aria-hidden="true">/</span>
                <span>{property.projectedRentalYield}% Projected Net Yield</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onExplore(property)}
                className="px-6 py-3 bg-white hover:bg-neutral-200 text-[#151515] text-xs sm:text-sm font-semibold tracking-wide rounded-md transition-all cursor-pointer whitespace-nowrap"
              >
                Explore property
              </button>
              <button
                onClick={onBookViewing}
                className="px-5 py-3 border border-white/30 hover:border-white text-white text-xs sm:text-sm font-medium tracking-wide rounded-md transition-all hover:bg-white/10 cursor-pointer whitespace-nowrap"
              >
                Schedule viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
