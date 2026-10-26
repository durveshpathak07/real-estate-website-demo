import React, { useState } from 'react';
import { Search, SlidersHorizontal, RotateCcw, ChevronDown, Check } from 'lucide-react';
import { PropertyCategory, PropertyFilterState } from '../types/property';

interface PropertySearchProps {
  filters: PropertyFilterState;
  onChangeFilters: (newFilters: Partial<PropertyFilterState>) => void;
  onResetFilters: () => void;
  totalMatches: number;
  countries: string[];
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  filters,
  onChangeFilters,
  onResetFilters,
  totalMatches,
  countries,
}) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const tabs: { key: PropertyCategory; label: string }[] = [
    { key: 'buy', label: 'Buy' },
    { key: 'rent', label: 'Rent' },
    { key: 'development', label: 'New developments' },
    { key: 'commercial', label: 'Commercial properties' },
  ];

  const priceRanges = [
    { label: 'All prices', min: 0, max: 10000000 },
    { label: 'Under $2.5M', min: 0, max: 2500000 },
    { label: '$2.5M – $3.5M', min: 2500000, max: 3500000 },
    { label: '$3.5M – $5.0M', min: 3500000, max: 5000000 },
    { label: '$5.0M+', min: 5000000, max: 10000000 },
  ];

  const sizeRanges = [
    { label: 'All sizes (m²)', min: 0 },
    { label: '150+ m²', min: 150 },
    { label: '250+ m²', min: 250 },
    { label: '350+ m²', min: 350 },
    { label: '400+ m²', min: 400 },
  ];

  const currentPriceRangeLabel = () => {
    const found = priceRanges.find(
      (r) => r.min === filters.minPrice && r.max === filters.maxPrice
    );
    return found ? found.label : `$${(filters.minPrice / 1000000).toFixed(1)}M–$${(filters.maxPrice / 1000000).toFixed(1)}M`;
  };

  const currentSizeLabel = () => {
    const found = sizeRanges.find((r) => r.min === filters.minAreaSqM);
    return found ? found.label : `${filters.minAreaSqM}+ m²`;
  };

  return (
    <section id="search-section" className="py-8 sm:py-12 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Split matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-8">
          <div className="lg:col-span-6">
            <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#151515] leading-tight text-balance">
              We help you find the <br className="hidden sm:inline" />
              home that will be yours
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-['Inter'] text-xs sm:text-sm text-[#777777] max-w-md lg:ml-auto leading-relaxed">
              Our projects are about harmony, style and care that everyone lives in what is really
              important to them.
            </p>
          </div>
        </div>

        {/* Search & Filter Container Card matching reference */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-[#EAEAEA] p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-[#F0F0EE]">
            {tabs.map((tab) => {
              const active = filters.category === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => onChangeFilters({ category: tab.key })}
                  className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#151515] text-white shadow-sm'
                      : 'bg-[#F8F8F6] text-[#666666] hover:text-[#151515] hover:bg-[#EFEFEA]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Primary Filter Selectors Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-5">
            {/* Country Selector */}
            <div className="relative">
              <label className="block text-[11px] font-medium text-[#888888] uppercase tracking-wider mb-1">
                Location / Country
              </label>
              <div className="relative">
                <select
                  value={filters.country}
                  onChange={(e) => onChangeFilters({ country: e.target.value })}
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] hover:border-[#CCCCCC] focus:border-[#151515] rounded-lg px-3.5 py-2.5 text-xs text-[#151515] font-medium appearance-none outline-none transition-colors cursor-pointer"
                >
                  <option value="all">All countries</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#777777] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Property Type Selector */}
            <div className="relative">
              <label className="block text-[11px] font-medium text-[#888888] uppercase tracking-wider mb-1">
                Property Type
              </label>
              <div className="relative">
                <select
                  value={filters.propertyType}
                  onChange={(e) => onChangeFilters({ propertyType: e.target.value })}
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] hover:border-[#CCCCCC] focus:border-[#151515] rounded-lg px-3.5 py-2.5 text-xs text-[#151515] font-medium appearance-none outline-none transition-colors cursor-pointer"
                >
                  <option value="all">New property (All)</option>
                  <option value="villa">Modern Villa</option>
                  <option value="chalet">Alpine Chalet</option>
                  <option value="retreat">Eco Retreat</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#777777] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Price Range Selector */}
            <div className="relative">
              <label className="block text-[11px] font-medium text-[#888888] uppercase tracking-wider mb-1">
                Price Range
              </label>
              <div className="relative">
                <select
                  value={`${filters.minPrice}-${filters.maxPrice}`}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-').map(Number);
                    onChangeFilters({ minPrice: min, maxPrice: max });
                  }}
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] hover:border-[#CCCCCC] focus:border-[#151515] rounded-lg px-3.5 py-2.5 text-xs text-[#151515] font-medium appearance-none outline-none transition-colors cursor-pointer"
                >
                  {priceRanges.map((r) => (
                    <option key={r.label} value={`${r.min}-${r.max}`}>
                      {r.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#777777] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Size Selector */}
            <div className="relative">
              <label className="block text-[11px] font-medium text-[#888888] uppercase tracking-wider mb-1">
                Property Size
              </label>
              <div className="relative">
                <select
                  value={filters.minAreaSqM}
                  onChange={(e) => onChangeFilters({ minAreaSqM: Number(e.target.value) })}
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] hover:border-[#CCCCCC] focus:border-[#151515] rounded-lg px-3.5 py-2.5 text-xs text-[#151515] font-medium appearance-none outline-none transition-colors cursor-pointer"
                >
                  {sizeRanges.map((s) => (
                    <option key={s.label} value={s.min}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#777777] absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Expandable Advanced Options */}
          {showMoreOptions && (
            <div className="mt-4 pt-4 border-t border-[#F0F0EE] grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fadeIn">
              <div>
                <label className="block text-[11px] font-medium text-[#888888] uppercase tracking-wider mb-1">
                  Min. Bedrooms
                </label>
                <div className="flex gap-2">
                  {[0, 3, 4, 5].map((bed) => (
                    <button
                      key={bed}
                      type="button"
                      onClick={() => onChangeFilters({ minBedrooms: bed })}
                      className={`flex-1 py-1.5 text-xs rounded border transition-colors ${
                        filters.minBedrooms === bed
                          ? 'bg-[#151515] text-white border-[#151515]'
                          : 'border-[#EAEAEA] text-[#555555] hover:border-[#888888]'
                      }`}
                    >
                      {bed === 0 ? 'Any' : `${bed}+`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#888888] uppercase tracking-wider mb-1">
                  Features
                </label>
                <div className="flex items-center gap-4 pt-1">
                  <label className="flex items-center gap-2 text-xs text-[#444444] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.furnishedOnly}
                      onChange={(e) => onChangeFilters({ furnishedOnly: e.target.checked })}
                      className="rounded border-[#CCCCCC] text-[#151515] focus:ring-0"
                    />
                    <span>Furnished</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-[#444444] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.parkingRequired}
                      onChange={(e) => onChangeFilters({ parkingRequired: e.target.checked })}
                      className="rounded border-[#CCCCCC] text-[#151515] focus:ring-0"
                    />
                    <span>Parking</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#888888] uppercase tracking-wider mb-1">
                  Keyword Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={filters.searchQuery}
                    onChange={(e) => onChangeFilters({ searchQuery: e.target.value })}
                    placeholder="Search by name or amenities..."
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] focus:border-[#151515] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#151515] outline-none"
                  />
                  <Search className="w-3.5 h-3.5 text-[#888888] absolute left-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>
            </div>
          )}

          {/* Action Row matching reference buttons */}
          <div className="mt-5 pt-4 border-t border-[#F0F0EE] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowMoreOptions(!showMoreOptions)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#555555] hover:text-[#151515] transition-colors cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{showMoreOptions ? '- Less options' : '+ More options'}</span>
              </button>

              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-xs text-[#888888] hover:text-[#151515] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear filters</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#777777]">
                Showing <strong className="text-[#151515]">{totalMatches}</strong> matching properties
              </span>
              <a
                href="#properties-section"
                className="px-5 py-2.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-medium tracking-wide rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                Show properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
