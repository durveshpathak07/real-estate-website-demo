import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Calculator, Plus, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenMortgage: () => void;
  onOpenPostProperty: () => void;
  onOpenBookCall: () => void;
  onNavigateSection: (sectionId: string) => void;
  savedPropertyCount: number;
  onOpenSavedModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMortgage,
  onOpenPostProperty,
  onOpenBookCall,
  onNavigateSection,
  savedPropertyCount,
  onOpenSavedModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Properties', target: 'properties-section' },
    { label: 'Mortgage', action: onOpenMortgage },
    { label: 'Services', target: 'services-section' },
    { label: 'Why Us', target: 'why-us-section' },
    { label: 'Company', target: 'about-section' },
    { label: 'Journal', target: 'testimonials-section' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#EAEAEA] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark */}
          <button
            onClick={() => onNavigateSection('hero-section')}
            className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Horizon Estate Homepage"
          >
            <div className="w-8 h-8 rounded-sm bg-[#151515] flex items-center justify-center text-white font-serif font-bold text-base tracking-widest shadow-sm">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-['Manrope'] font-bold text-base sm:text-lg tracking-[0.16em] uppercase text-[#151515] leading-none">
                Horizon
              </span>
              <span className="font-['Manrope'] font-medium text-[9px] tracking-[0.3em] uppercase text-[#777777] leading-tight">
                Estate
              </span>
            </div>
          </button>

          {/* Zone 2: 4–6 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#555555]">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.action) {
                    item.action();
                  } else if (item.target) {
                    onNavigateSection(item.target);
                  }
                }}
                className="whitespace-nowrap shrink-0 text-[#444444] hover:text-[#151515] transition-colors py-1 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#151515] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions & primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Saved properties indicator */}
            <button
              onClick={onOpenSavedModal}
              className="relative p-2 rounded-full text-[#333333] hover:text-[#151515] hover:bg-[#EAEAEA]/50 transition-colors cursor-pointer"
              aria-label={`Saved properties (${savedPropertyCount})`}
              title="Saved Properties"
            >
              <Heart className="w-4 h-4" />
              {savedPropertyCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B39A72] text-white text-[10px] font-semibold flex items-center justify-center rounded-full">
                  {savedPropertyCount}
                </span>
              )}
            </button>

            {/* Post a property outlined button (as seen in reference image) */}
            <button
              onClick={onOpenPostProperty}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 border border-[#CCCCCC] hover:border-[#151515] text-[12px] font-medium tracking-wide text-[#151515] rounded-full hover:bg-white transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-[#777777]" />
              Post a property
            </button>

            {/* Primary Action Button: Book a call */}
            <button
              onClick={onOpenBookCall}
              className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-medium tracking-wider text-white bg-[#151515] hover:bg-[#333333] rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B39A72]" />
              <span>Book a call</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#151515] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#EAEAEA] bg-white/95 rounded-2xl shadow-xl px-4 space-y-3">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (item.action) {
                      item.action();
                    } else if (item.target) {
                      onNavigateSection(item.target);
                    }
                  }}
                  className="text-left py-2 px-3 text-sm font-medium text-[#222222] hover:bg-[#F8F8F6] rounded-lg transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#EAEAEA] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPostProperty();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-medium border border-[#CCCCCC] rounded-lg text-[#151515] hover:bg-[#F8F8F6] cursor-pointer"
              >
                Post a property
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMortgage();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-medium bg-[#F8F8F6] rounded-lg text-[#151515] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-[#B39A72]" />
                Mortgage Calculator
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
