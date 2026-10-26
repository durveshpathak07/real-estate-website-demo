import React, { useState } from 'react';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Car,
  Check,
  Calculator,
  Share2,
  Heart,
  Send,
  Building,
  ArrowRight,
  TrendingUp,
  Layers,
  PhoneCall
} from 'lucide-react';
import { Property } from '../types/property';
import { calculateMortgage, formatCurrency } from '../utils/mortgage';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onSelectProperty: (property: Property) => void;
  similarProperties: Property[];
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenBookViewing: (propertyName: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onSelectProperty,
  similarProperties,
  isSaved,
  onToggleSave,
  onOpenBookViewing,
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'floorplan' | 'financials' | 'mortgage'>('overview');
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(5.8);
  const [loanTerm, setLoanTerm] = useState(30);
  const [copiedShare, setCopiedShare] = useState(false);

  // Mortgage calc for this property
  const mortgageResult = calculateMortgage({
    propertyPrice: property.price,
    downPaymentPercent,
    annualInterestRate: interestRate,
    loanTermYears: loanTerm,
    annualPropertyTaxRate: 1.15,
    annualHomeInsurance: 4200,
    monthlyHOA: 550,
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-auto border border-[#EAEAEA] flex flex-col max-h-[92vh]">
        {/* Modal Sticky Header Bar */}
        <div className="px-6 py-4 border-b border-[#EAEAEA] flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#888888]">
              {property.propertyTypeLabel} · {property.category.toUpperCase()}
            </span>
            <h2 className="font-['Manrope'] text-lg sm:text-xl font-bold text-[#151515]">
              {property.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(property.id)}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-red-50 border-red-200 text-red-500'
                  : 'border-[#EAEAEA] text-[#555555] hover:border-[#151515]'
              }`}
              aria-label="Save property"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-[#EAEAEA] hover:border-[#151515] text-[#555555] transition-colors cursor-pointer"
              title="Share listing link"
              aria-label="Share listing"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F8F8F6] hover:bg-[#EAEAEA] text-[#151515] transition-colors cursor-pointer ml-1"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Main Gallery Viewport */}
          <div>
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#ECECE8] relative shadow-inner">
              <img
                src={property.gallery[activeImageIndex] || property.image}
                alt={`${property.name} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-white text-xs font-mono">
                {activeImageIndex + 1} / {property.gallery.length}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {property.gallery.length > 1 && (
              <div className="flex gap-3 mt-3 overflow-x-auto pb-1">
                {property.gallery.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#151515] scale-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Key Metrics Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-[#F8F8F6] rounded-xl border border-[#EAEAEA]">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#777777]">Offered At</span>
              <div className="text-2xl sm:text-3xl font-bold font-['Manrope'] text-[#151515] tabular-nums">
                {property.priceFormatted}
              </div>
              <p className="text-xs text-[#777777] flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#B39A72]" />
                {property.locationFormatted}
              </p>
            </div>

            <div className="flex items-center gap-6 sm:border-l sm:border-[#EAEAEA] sm:pl-6 text-xs text-[#555555]">
              <div>
                <span className="block text-[10px] uppercase font-mono text-[#888888]">Est. Monthly</span>
                <span className="font-semibold text-sm text-[#151515] font-mono tabular-nums">
                  {formatCurrency(mortgageResult.totalMonthlyPayment)}/mo
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-mono text-[#888888]">Projected Yield</span>
                <span className="font-semibold text-sm text-[#151515] font-mono tabular-nums">
                  {property.projectedRentalYield}% Net
                </span>
              </div>
              <button
                onClick={() => onOpenBookViewing(property.name)}
                className="px-5 py-2.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer shrink-0"
              >
                Schedule Viewing
              </button>
            </div>
          </div>

          {/* Specification Pills Grid (Zero-pill text styling) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-3 bg-[#FDFDFD] border border-[#EAEAEA] rounded-lg">
              <span className="text-[10px] uppercase font-mono text-[#888888] block">Living Area</span>
              <span className="text-sm font-semibold text-[#151515] tabular-nums">{property.areaSqM} m²</span>
              <span className="text-[10px] text-[#777777] block">({property.areaSqFt} sq ft)</span>
            </div>

            <div className="p-3 bg-[#FDFDFD] border border-[#EAEAEA] rounded-lg">
              <span className="text-[10px] uppercase font-mono text-[#888888] block">Bedrooms</span>
              <span className="text-sm font-semibold text-[#151515] tabular-nums">{property.bedrooms} Suites</span>
            </div>

            <div className="p-3 bg-[#FDFDFD] border border-[#EAEAEA] rounded-lg">
              <span className="text-[10px] uppercase font-mono text-[#888888] block">Bathrooms</span>
              <span className="text-sm font-semibold text-[#151515] tabular-nums">{property.bathrooms} Luxury Baths</span>
            </div>

            <div className="p-3 bg-[#FDFDFD] border border-[#EAEAEA] rounded-lg">
              <span className="text-[10px] uppercase font-mono text-[#888888] block">Levels</span>
              <span className="text-sm font-semibold text-[#151515] tabular-nums">{property.floors} Storey</span>
            </div>

            <div className="p-3 bg-[#FDFDFD] border border-[#EAEAEA] rounded-lg">
              <span className="text-[10px] uppercase font-mono text-[#888888] block">Garage</span>
              <span className="text-sm font-semibold text-[#151515] tabular-nums">{property.parkingSpaces} Vehicles</span>
            </div>

            <div className="p-3 bg-[#FDFDFD] border border-[#EAEAEA] rounded-lg">
              <span className="text-[10px] uppercase font-mono text-[#888888] block">Year Built</span>
              <span className="text-sm font-semibold text-[#151515] tabular-nums">{property.yearBuilt}</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-[#EAEAEA] flex gap-6 text-xs font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 relative cursor-pointer ${
                activeTab === 'overview' ? 'text-[#151515] font-semibold' : 'text-[#777777] hover:text-[#151515]'
              }`}
            >
              Overview & Amenities
              {activeTab === 'overview' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#151515]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('floorplan')}
              className={`pb-3 relative cursor-pointer ${
                activeTab === 'floorplan' ? 'text-[#151515] font-semibold' : 'text-[#777777] hover:text-[#151515]'
              }`}
            >
              Floor Plan & Spaces
              {activeTab === 'floorplan' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#151515]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('financials')}
              className={`pb-3 relative cursor-pointer ${
                activeTab === 'financials' ? 'text-[#151515] font-semibold' : 'text-[#777777] hover:text-[#151515]'
              }`}
            >
              Yield & Investment
              {activeTab === 'financials' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#151515]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('mortgage')}
              className={`pb-3 relative cursor-pointer ${
                activeTab === 'mortgage' ? 'text-[#151515] font-semibold' : 'text-[#777777] hover:text-[#151515]'
              }`}
            >
              Mortgage Calculator
              {activeTab === 'mortgage' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#151515]" />
              )}
            </button>
          </div>

          {/* Tab Content: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-['Manrope'] text-base font-bold text-[#151515] mb-2">
                  Architectural Narrative
                </h3>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="p-4 bg-[#F8F8F6] rounded-xl border border-[#EAEAEA]">
                <h4 className="text-xs font-bold text-[#151515] uppercase tracking-wider mb-2 font-mono">
                  Structural & Engineering Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-[#555555]">
                  {property.architecturalHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B39A72] font-mono text-sm leading-none">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenities Grid */}
              <div>
                <h3 className="font-['Manrope'] text-base font-bold text-[#151515] mb-3">
                  Residence Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#EAEAEA] text-xs text-[#444444]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#B39A72] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Floor Plan */}
          {activeTab === 'floorplan' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-['Manrope'] text-base font-bold text-[#151515] mb-1">
                  Architectural Layout & Spatial Allocation
                </h3>
                <p className="text-xs text-[#777777]">
                  Precision metric dimensions verified by chartered spatial engineers.
                </p>
              </div>

              <div className="border border-[#EAEAEA] rounded-xl overflow-hidden divide-y divide-[#EAEAEA]">
                {property.floorPlanRooms.map((room, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between text-xs bg-white hover:bg-[#F8F8F6] transition-colors">
                    <div>
                      <span className="font-medium text-[#151515]">{room.name}</span>
                      <span className="ml-2 text-[10px] text-[#888888] uppercase font-mono">{room.level}</span>
                    </div>
                    <span className="font-mono font-semibold text-[#151515] tabular-nums">{room.dimension}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#F8F8F6] rounded-xl text-center border border-[#EAEAEA]">
                <p className="text-xs text-[#555555]">
                  Full CAD vector drawings, electrical schematics, and plumbing elevations are available upon NDA execution.
                </p>
              </div>
            </div>
          )}

          {/* Tab Content: Financials */}
          {activeTab === 'financials' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#F8F8F6] rounded-xl border border-[#EAEAEA]">
                  <span className="text-[10px] uppercase font-mono text-[#888888] block">Net Rental Yield</span>
                  <div className="text-2xl font-bold font-['Manrope'] text-[#151515] mt-1 tabular-nums">
                    {property.projectedRentalYield}%
                  </div>
                  <span className="text-[11px] text-[#777777] mt-0.5 block">Managed luxury holiday lease</span>
                </div>

                <div className="p-4 bg-[#F8F8F6] rounded-xl border border-[#EAEAEA]">
                  <span className="text-[10px] uppercase font-mono text-[#888888] block">Annual Appreciation</span>
                  <div className="text-2xl font-bold font-['Manrope'] text-[#151515] mt-1 tabular-nums">
                    +{property.annualAppreciation}%
                  </div>
                  <span className="text-[11px] text-[#777777] mt-0.5 block">5-year rolling corridor</span>
                </div>

                <div className="p-4 bg-[#F8F8F6] rounded-xl border border-[#EAEAEA]">
                  <span className="text-[10px] uppercase font-mono text-[#888888] block">Est. Gross Monthly</span>
                  <div className="text-2xl font-bold font-['Manrope'] text-[#151515] mt-1 tabular-nums">
                    {formatCurrency((property.price * (property.projectedRentalYield / 100)) / 12)}
                  </div>
                  <span className="text-[11px] text-[#777777] mt-0.5 block">High-season peak projection</span>
                </div>
              </div>

              <div className="p-4 border border-[#EAEAEA] rounded-xl text-xs space-y-2 text-[#555555]">
                <h4 className="font-bold text-[#151515] font-['Manrope']">Advisory Tax Classification</h4>
                <p>
                  This asset qualifies for accelerated capital depreciation and foreign direct investment visas in its home jurisdiction.
                  Detailed tax residency analysis provided by our cross-border tax council.
                </p>
              </div>
            </div>
          )}

          {/* Tab Content: Mortgage */}
          {activeTab === 'mortgage' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="flex justify-between text-xs font-medium text-[#444444] mb-1">
                      <span>Down Payment ({downPaymentPercent}%)</span>
                      <span className="font-mono tabular-nums">{formatCurrency(mortgageResult.downPaymentAmount)}</span>
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="80"
                      step="5"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-[#151515] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="flex justify-between text-xs font-medium text-[#444444] mb-1">
                      <span>Interest Rate ({interestRate}%)</span>
                    </label>
                    <input
                      type="range"
                      min="3.0"
                      max="10.0"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-[#151515] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#444444] mb-1">
                      Loan Term
                    </label>
                    <div className="flex gap-2">
                      {[15, 20, 30].map((term) => (
                        <button
                          key={term}
                          onClick={() => setLoanTerm(term)}
                          className={`flex-1 py-1.5 text-xs rounded border transition-colors cursor-pointer ${
                            loanTerm === term
                              ? 'bg-[#151515] text-white border-[#151515]'
                              : 'border-[#EAEAEA] text-[#555555] hover:border-[#888888]'
                          }`}
                        >
                          {term} Years
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-[#F8F8F6] rounded-xl border border-[#EAEAEA] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#888888]">Total Estimated Payment</span>
                    <div className="text-2xl sm:text-3xl font-bold font-['Manrope'] text-[#151515] tabular-nums mt-0.5">
                      {formatCurrency(mortgageResult.totalMonthlyPayment)}
                      <span className="text-xs font-normal text-[#777777]"> / month</span>
                    </div>

                    <div className="mt-4 space-y-1.5 text-xs">
                      <div className="flex justify-between text-[#666666]">
                        <span>Principal & Interest</span>
                        <span className="font-mono text-[#151515]">{formatCurrency(mortgageResult.monthlyPrincipalAndInterest)}</span>
                      </div>
                      <div className="flex justify-between text-[#666666]">
                        <span>Property Taxes</span>
                        <span className="font-mono text-[#151515]">{formatCurrency(mortgageResult.monthlyPropertyTax)}</span>
                      </div>
                      <div className="flex justify-between text-[#666666]">
                        <span>Home Insurance</span>
                        <span className="font-mono text-[#151515]">{formatCurrency(mortgageResult.monthlyHomeInsurance)}</span>
                      </div>
                      <div className="flex justify-between text-[#666666]">
                        <span>HOA / Community</span>
                        <span className="font-mono text-[#151515]">{formatCurrency(mortgageResult.monthlyHOA)}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 pt-3 border-t border-[#EAEAEA] text-[10px] text-[#888888]">
                    Financing terms subject to underwriting by our private private banking partners.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Similar Properties Section */}
          {similarProperties.length > 0 && (
            <div className="pt-6 border-t border-[#EAEAEA]">
              <h3 className="font-['Manrope'] text-sm sm:text-base font-bold text-[#151515] mb-4">
                Similar Architectural Offerings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {similarProperties.map((sim) => (
                  <div
                    key={sim.id}
                    onClick={() => {
                      onSelectProperty(sim);
                      setActiveImageIndex(0);
                    }}
                    className="flex gap-3.5 p-3 rounded-xl border border-[#EAEAEA] bg-white hover:border-[#151515] transition-all cursor-pointer group"
                  >
                    <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-[#ECECE8]">
                      <img src={sim.image} alt={sim.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-0.5">
                      <div>
                        <h4 className="font-['Manrope'] text-xs font-bold text-[#151515] group-hover:text-[#B39A72] transition-colors">
                          {sim.name}
                        </h4>
                        <p className="text-[11px] text-[#777777] truncate">{sim.locationFormatted}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold font-mono text-[#151515] tabular-nums">{sim.priceFormatted}</span>
                        <span className="text-[10px] text-[#888888]">{sim.bedrooms} beds · {sim.areaSqM} m²</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
