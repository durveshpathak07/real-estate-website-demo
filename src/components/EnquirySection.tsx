import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { EnquiryFormData } from '../types/property';

interface EnquirySectionProps {
  initialPropertyInterest?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialPropertyInterest = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyInterest: initialPropertyInterest || 'General Luxury Advisory',
    preferredLocation: 'Any Prime Hub',
    budget: '$3M – $5M',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full legal name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief note regarding your search parameters (min 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="enquiry-section" className="py-16 sm:py-24 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#888888]">
            Private Consultation
          </span>
          <h2 className="mt-1 font-['Manrope'] text-3xl sm:text-4xl font-medium tracking-tight text-[#151515]">
            Let's find your next address.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#777777]">
            Connect with a senior partner for confidential listings, private viewings, or off-market acquisitions.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-[#F8F8F6] rounded-2xl border border-[#EAEAEA] p-8 sm:p-12 text-center max-w-xl mx-auto animate-fadeIn">
            <div className="w-14 h-14 bg-[#151515] text-[#B39A72] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Manrope'] text-xl font-bold text-[#151515]">
              Enquiry Received
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
              Thank you, <strong className="text-[#151515]">{formData.fullName}</strong>. A dedicated senior
              director will review your parameters for <strong className="text-[#151515]">{formData.propertyInterest}</strong> and
              contact you discreetly within 4 business hours.
            </p>
            <div className="mt-6 pt-4 border-t border-[#EAEAEA] flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    propertyInterest: 'General Luxury Advisory',
                    preferredLocation: 'Any Prime Hub',
                    budget: '$3M – $5M',
                    message: '',
                  });
                }}
                className="text-xs font-semibold text-[#151515] hover:text-[#B39A72] transition-colors cursor-pointer"
              >
                Submit another request
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#F8F8F6] rounded-2xl border border-[#EAEAEA] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="e.g. Julian Sterling"
                  className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-xs text-[#151515] outline-none transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-[#EAEAEA] focus:border-[#151515]'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="julian@sterling.com"
                  className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-xs text-[#151515] outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-[#EAEAEA] focus:border-[#151515]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-xs text-[#151515] outline-none transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-[#EAEAEA] focus:border-[#151515]'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Property Interest */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Property Interest
                </label>
                <select
                  value={formData.propertyInterest}
                  onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
                  className="w-full bg-white border border-[#EAEAEA] focus:border-[#151515] rounded-lg px-3.5 py-2.5 text-xs text-[#151515] outline-none cursor-pointer"
                >
                  <option value="General Luxury Advisory">General Luxury Advisory</option>
                  <option value="Serenity Tower (Los Angeles)">Serenity Tower (Los Angeles)</option>
                  <option value="Island Retreat (Bahamas)">Island Retreat (Bahamas)</option>
                  <option value="Mountain Lodge (Aspen)">Mountain Lodge (Aspen)</option>
                  <option value="Comporta Beach Lux (Portugal)">Comporta Beach Lux (Portugal)</option>
                  <option value="Tulum Eco Retreat (Mexico)">Tulum Eco Retreat (Mexico)</option>
                  <option value="Azura Villa (Mykonos)">Azura Villa (Mykonos)</option>
                </select>
              </div>

              {/* Preferred Location */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Preferred Geography
                </label>
                <select
                  value={formData.preferredLocation}
                  onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                  className="w-full bg-white border border-[#EAEAEA] focus:border-[#151515] rounded-lg px-3.5 py-2.5 text-xs text-[#151515] outline-none cursor-pointer"
                >
                  <option value="Any Prime Hub">Any Prime Hub</option>
                  <option value="California / West Coast">California / West Coast</option>
                  <option value="Colorado / Alpine">Colorado / Alpine</option>
                  <option value="Mediterranean / Greece / Italy">Mediterranean / Greece / Italy</option>
                  <option value="Iberian Coast / Portugal">Iberian Coast / Portugal</option>
                  <option value="Caribbean / Bahamas">Caribbean / Bahamas</option>
                  <option value="Mexico / Yucatan">Mexico / Yucatan</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Acquisition Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white border border-[#EAEAEA] focus:border-[#151515] rounded-lg px-3.5 py-2.5 text-xs text-[#151515] outline-none cursor-pointer"
                >
                  <option value="Under $2.5M">Under $2.5M</option>
                  <option value="$2.5M – $3.5M">$2.5M – $3.5M</option>
                  <option value="$3.5M – $5.0M">$3.5M – $5.0M</option>
                  <option value="$5.0M – $10.0M">$5.0M – $10.0M</option>
                  <option value="$10.0M+">$10.0M+ (Bespoke Mandate)</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Message & Specific Requirements *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Share details on your preferred architectural style, timeline, or privacy criteria..."
                  className={`w-full bg-white border rounded-lg px-3.5 py-2.5 text-xs text-[#151515] outline-none transition-colors ${
                    errors.message ? 'border-red-500' : 'border-[#EAEAEA] focus:border-[#151515]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#EAEAEA] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[11px] text-[#888888]">
                Discretion assured. We execute binding non-disclosure agreements prior to file sharing.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#151515] hover:bg-[#333333] text-white text-xs font-semibold tracking-wide rounded-md transition-all cursor-pointer disabled:opacity-50 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#B39A72]" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
