import React from 'react';
import { Heart, ArrowUpRight, Bed, Bath, Layers, Maximize2 } from 'lucide-react';
import { Property } from '../types/property';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  savedPropertyIds: string[];
  onToggleSaveProperty: (propertyId: string) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  savedPropertyIds,
  onToggleSaveProperty,
}) => {
  return (
    <section id="properties-section" className="py-12 sm:py-16 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#151515]">
              New properties
            </h2>
            <p className="mt-1.5 font-['Inter'] text-xs sm:text-sm text-[#777777]">
              Explore our latest collection of exceptional properties.
            </p>
          </div>

          <div className="text-xs text-[#777777]">
            Showing <span className="font-medium text-[#151515]">{properties.length}</span> curated estates
          </div>
        </div>

        {/* Empty State */}
        {properties.length === 0 ? (
          <div className="bg-white rounded-xl border border-[#EAEAEA] p-12 text-center">
            <p className="text-sm font-medium text-[#151515]">No properties match your current filter criteria.</p>
            <p className="text-xs text-[#777777] mt-1">Try expanding your price range, location, or resetting the filters.</p>
          </div>
        ) : (
          /* 3-Column Grid matching reference */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((property) => {
              const isSaved = savedPropertyIds.includes(property.id);

              return (
                <article
                  key={property.id}
                  onClick={() => onSelectProperty(property)}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-[#EAEAEA] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#D0D0CE] flex flex-col cursor-pointer"
                >
                  {/* Property Image Container (4:3 aspect ratio) */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECECE8]">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Bookmark / Save Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSaveProperty(property.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-white text-red-500 shadow-md'
                          : 'bg-black/30 text-white hover:bg-white hover:text-[#151515]'
                      }`}
                      aria-label={isSaved ? `Remove ${property.name} from saved` : `Save ${property.name}`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>

                    {/* Category subtle label */}
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-black/40 backdrop-blur-sm rounded text-[10px] uppercase font-mono tracking-wider text-white/90">
                      {property.propertyTypeLabel}
                    </div>
                  </div>

                  {/* Card Content matching reference typography */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Price Row */}
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-['Manrope'] text-base sm:text-lg font-semibold text-[#151515] group-hover:text-[#B39A72] transition-colors truncate">
                          {property.name}
                        </h3>
                        <span className="font-['Manrope'] text-base sm:text-lg font-bold text-[#151515] tabular-nums whitespace-nowrap">
                          {property.priceFormatted}
                        </span>
                      </div>

                      {/* Location */}
                      <p className="font-['Inter'] text-xs text-[#777777] mb-4 truncate">
                        {property.locationFormatted}
                      </p>
                    </div>

                    {/* Metadata line with typographic separators (Strict Zero-Pill rule) */}
                    <div className="pt-3 border-t border-[#F0F0EE] flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#666666]">
                      <span className="tabular-nums font-medium text-[#151515]">{property.areaSqM} m²</span>
                      <span className="text-[#CCCCCC]" aria-hidden="true">·</span>
                      <span className="tabular-nums font-medium text-[#151515]">{property.floors} floor</span>
                      <span className="text-[#CCCCCC]" aria-hidden="true">·</span>
                      <span className="tabular-nums font-medium text-[#151515]">{property.bedrooms} beds</span>
                      <span className="text-[#CCCCCC]" aria-hidden="true">·</span>
                      <span className="tabular-nums font-medium text-[#151515]">{property.bathrooms} baths</span>
                    </div>

                    {/* View Details Prompt */}
                    <div className="mt-3 pt-2 flex items-center justify-between text-[11px] font-medium text-[#888888] group-hover:text-[#151515] transition-colors">
                      <span>View property overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
