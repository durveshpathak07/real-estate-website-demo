import React from 'react';
import { Compass, ShieldCheck, Scale, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/properties';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    curated: <Compass className="w-5 h-5 text-[#B39A72]" />,
    guidance: <ShieldCheck className="w-5 h-5 text-[#B39A72]" />,
    transparent: <Scale className="w-5 h-5 text-[#B39A72]" />,
    personalised: <UserCheck className="w-5 h-5 text-[#B39A72]" />,
  };

  return (
    <section id="why-us-section" className="py-14 sm:py-20 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#888888]">
            Brand Philosophy
          </span>
          <h2 className="mt-2 font-['Manrope'] text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#151515] text-balance">
            More than properties. <br />
            A better way to find home.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-[#EAEAEA] flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-[#CCCCCC]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F8F6] flex items-center justify-center border border-[#EAEAEA]">
                    {iconMap[item.id]}
                  </div>
                  <span className="font-mono text-xs text-[#AAAAAA] tabular-nums font-semibold">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-['Manrope'] text-base sm:text-lg font-semibold text-[#151515] mb-2.5">
                  {item.title}
                </h3>

                <p className="font-['Inter'] text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0EE] flex items-center text-[11px] font-medium text-[#B39A72]">
                <span>Guaranteed Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
