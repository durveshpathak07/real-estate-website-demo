import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES, SERVICES_IMAGE } from '../data/properties';

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services-section" className="py-14 sm:py-20 bg-white border-y border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#151515] leading-tight">
              See what we offer <br className="hidden sm:inline" />
              and how it works
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-['Inter'] text-xs sm:text-sm text-[#777777] max-w-md lg:ml-auto leading-relaxed">
              Virtual tours, curated listings, and expert guidance — everything you need to explore and
              buy with confidence.
            </p>
          </div>
        </div>

        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Editorial Service List */}
          <div className="lg:col-span-6 space-y-4">
            {SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#F8F8F6] border-[#151515] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
                      : 'bg-white border-[#EAEAEA] hover:border-[#CCCCCC]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#999999] tabular-nums font-semibold">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-['Manrope'] text-base sm:text-lg font-semibold text-[#151515]">
                          {service.title}
                        </h3>
                        <p className="mt-1 font-['Inter'] text-xs sm:text-sm text-[#666666] leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                        isSelected ? 'rotate-90 text-[#151515]' : 'text-[#AAAAAA]'
                      }`}
                    />
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-[#EAEAEA] pl-7 space-y-2.5 animate-fadeIn">
                      <p className="text-xs text-[#555555] leading-relaxed">
                        {service.fullDescription}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#777777]">
                        {service.features.map((feat) => (
                          <span key={feat} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#B39A72]" />
                            {feat}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenConsultation(service.title);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#151515] hover:text-[#B39A72] transition-colors cursor-pointer"
                        >
                          <span>Get consultation</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Image & Active Spotlight */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="relative rounded-2xl overflow-hidden border border-[#EAEAEA] shadow-lg group bg-[#EAEAEA]">
              <div className="aspect-[4/3] w-full">
                <img
                  src={SERVICES_IMAGE}
                  alt="Avant-garde architectural villa with geometric rooflines and pool terrace"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Active Service Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#EAEAEA] shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#999999]">
                      Active Discipline
                    </span>
                    <h4 className="font-['Manrope'] text-sm sm:text-base font-bold text-[#151515]">
                      {activeService.title} · {activeService.subtitle}
                    </h4>
                  </div>
                  <button
                    onClick={() => onOpenConsultation(activeService.title)}
                    className="px-3.5 py-1.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
