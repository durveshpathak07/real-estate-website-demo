import React from 'react';
import { Star, Phone, Mail, TrendingUp, CheckCircle } from 'lucide-react';
import { ADVISOR_MARCUS_IMAGE } from '../data/properties';

interface AboutCompanyProps {
  onContactAdvisor: () => void;
  onOpenStory: () => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({
  onContactAdvisor,
  onOpenStory,
}) => {
  return (
    <section id="about-section" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#888888]">
              About Horizon Estate
            </span>

            <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-medium tracking-tight text-[#151515] leading-tight text-balance">
              Creating connections between people and places.
            </h2>

            <p className="font-['Inter'] text-sm sm:text-base text-[#555555] leading-relaxed">
              Founded on the belief that true luxury is defined by proportion, natural light, and
              spatial harmony, Horizon Estate bridges the world’s most visionary architects with
              discerning owners.
            </p>

            <p className="font-['Inter'] text-xs sm:text-sm text-[#777777] leading-relaxed">
              We operate across prime hubs in California, the Swiss Alps, the Mediterranean, and the
              Caribbean. Our advisors do not simply negotiate acquisitions — we conduct comprehensive
              structural, climatic, and legal due diligence to ensure generational value.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#555555]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#B39A72]" />
                <span>Strict Non-Disclosure Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#B39A72]" />
                <span>Direct Architect Collaborations</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenStory}
                className="px-6 py-3 border border-[#151515] hover:bg-[#151515] hover:text-white text-xs sm:text-sm font-medium tracking-wide rounded-md transition-all cursor-pointer"
              >
                Discover our story
              </button>
            </div>
          </div>

          {/* Right Column: Advisor Profile & Real Estate Investment Yields (matching reference) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Advisor Profile Card matching reference */}
            <div className="bg-[#F8F8F6] rounded-2xl p-6 border border-[#EAEAEA] flex flex-col justify-between">
              <div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white shadow-md">
                  <img
                    src={ADVISOR_MARCUS_IMAGE}
                    alt="Marcus Lee, Real Estate Director"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-['Manrope'] text-base font-bold text-[#151515]">Marcus Lee</h3>
                  <p className="text-xs text-[#777777]">Senior Real Estate Director</p>

                  <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-[#151515]">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold tabular-nums">4.5</span>
                    <span className="text-[#888888]">(78 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAEAEA] space-y-2">
                <button
                  onClick={onContactAdvisor}
                  className="w-full py-2.5 bg-[#151515] hover:bg-[#333333] text-white text-xs font-medium rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B39A72]" />
                  <span>+1 (917) 555-0194</span>
                </button>
                <button
                  onClick={onContactAdvisor}
                  className="w-full py-2 border border-[#CCCCCC] hover:border-[#151515] text-xs font-medium text-[#444444] rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Mail className="w-3 h-3 text-[#777777]" />
                  <span>Direct Consultation</span>
                </button>
              </div>
            </div>

            {/* Investment Yield Analytics Card matching reference */}
            <div className="bg-[#F8F8F6] rounded-2xl p-6 border border-[#EAEAEA] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                    Rental Yield
                  </span>
                  <TrendingUp className="w-4 h-4 text-[#B39A72]" />
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-['Manrope'] text-3xl font-bold text-[#151515] tabular-nums">
                    14%
                  </span>
                  <span className="text-xs text-[#666666]">Average Net IRR</span>
                </div>

                {/* Micro Bar Chart matching reference */}
                <div className="mt-4 pt-3 border-t border-[#EAEAEA]">
                  <div className="flex items-end justify-between h-12 gap-1.5 px-1">
                    {[40, 65, 50, 80, 95, 60, 85, 100].map((h, idx) => (
                      <div key={idx} className="flex-1 bg-[#E0D7C3] hover:bg-[#B39A72] transition-colors rounded-t h-full flex items-end">
                        <div
                          className="w-full bg-[#151515] rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-[#999999] mt-1.5">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>

                {/* Rental Yield Tiers matching reference table */}
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-[#EAEAEA]">
                    <span className="text-[#666666]">Private Villa</span>
                    <span className="font-mono font-semibold text-[#151515] tabular-nums">$7,000 / 10%</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-[#EAEAEA]">
                    <span className="text-[#666666]">Oceanfront</span>
                    <span className="font-mono font-semibold text-[#151515] tabular-nums">$9,500 / 12%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-[#666666]">Signature Estate</span>
                    <span className="font-mono font-semibold text-[#151515] tabular-nums">$15,000 / 15%</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[10px] text-[#888888] italic">
                *Historical simulated projections for demonstration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
