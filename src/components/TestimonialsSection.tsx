import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/properties';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials-section" className="py-14 sm:py-20 bg-[#F8F8F6] border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#888888]">
              Client Perspectives
            </span>
            <h2 className="mt-1 font-['Manrope'] text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#151515]">
              Trusted by discerning owners
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-[#D5D5D0] hover:border-[#151515] hover:bg-white text-[#151515] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-[#D5D5D0] hover:border-[#151515] hover:bg-white text-[#151515] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#EAEAEA] shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <Quote className="w-16 h-16 text-[#F0EDE6] absolute top-6 right-8 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex text-amber-500 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <blockquote className="font-['Manrope'] text-lg sm:text-2xl text-[#151515] font-normal leading-relaxed tracking-tight">
              "{current.quote}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#F0F0EE] flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-['Manrope'] text-base font-bold text-[#151515]">
                  {current.name}
                </p>
                <p className="text-xs text-[#777777]">
                  {current.role} · {current.location}
                </p>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono text-[#888888] uppercase block">
                  Property Acquired
                </span>
                <span className="text-xs font-semibold text-[#B39A72]">
                  {current.propertyPurchased}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] text-[#888888]">
          *Fictional client testimonials created solely for demonstration and interface presentation.
        </p>
      </div>
    </section>
  );
};
