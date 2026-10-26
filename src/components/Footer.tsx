import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenMortgage: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenMortgage }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-[#151515] text-white pt-16 sm:pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center text-[#151515] font-serif font-bold text-base">
                H
              </div>
              <div className="flex flex-col">
                <span className="font-['Manrope'] font-bold text-base tracking-[0.16em] uppercase text-white leading-none">
                  Horizon
                </span>
                <span className="font-['Manrope'] font-medium text-[9px] tracking-[0.3em] uppercase text-[#B39A72] leading-tight">
                  Estate
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-['Inter'] leading-relaxed max-w-sm">
              An international advisory representing the pinnacle of residential architecture,
              coastal sanctuaries, and alpine chalets across premier destinations worldwide.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B39A72]" />
                <span>Mayfair, London · Zurich · Los Angeles · Dubai</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B39A72]" />
                <span>+1 (917) 555-0194</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B39A72]" />
                <span>advisory@horizonestate.luxury</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B39A72]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigateSection('properties-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  New Properties
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenMortgage}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mortgage Tool
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('services-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bespoke Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Advisory Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('enquiry-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Private Mandates
                </button>
              </li>
            </ul>
          </div>

          {/* Portfolio Destinations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B39A72]">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Los Angeles, USA</li>
              <li>Aspen, Colorado</li>
              <li>Exuma, Bahamas</li>
              <li>Comporta, Portugal</li>
              <li>Tulum, Mexico</li>
              <li>Mykonos, Greece</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B39A72]">
              Private Journal
            </h4>
            <p className="text-xs text-neutral-400">
              Receive off-market architectural acquisitions and seasonal market analyses delivered monthly.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-[#E0D7C3] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#B39A72]" />
                <span>You have been subscribed to the private dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-neutral-900 border border-neutral-700 rounded-md px-3.5 py-2 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#B39A72] flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#B39A72] hover:bg-[#C4AC85] text-[#151515] text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center justify-center shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-[10px] text-neutral-500">
              Strictly confidential. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Horizon Estate International. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              Terms of Engagement
            </span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              AML & Escrow Disclosures
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
