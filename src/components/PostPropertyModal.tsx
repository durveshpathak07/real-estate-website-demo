import React, { useState } from 'react';
import { X, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

interface PostPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostPropertyModal: React.FC<PostPropertyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    propertyName: '',
    cityCountry: '',
    propertyType: 'villa',
    askingPrice: '',
    areaSqM: '',
    bedrooms: '4',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.ownerName.trim()) errs.ownerName = 'Owner/Representative name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.propertyName.trim()) errs.propertyName = 'Property title/estate name is required';
    if (!formData.cityCountry.trim()) errs.cityCountry = 'Location/Country is required';
    if (!formData.askingPrice.trim()) errs.askingPrice = 'Asking price is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#EAEAEA] my-auto overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#EAEAEA] flex items-center justify-between bg-white">
          <div>
            <h2 className="font-['Manrope'] text-lg font-bold text-[#151515]">
              List an Architectural Property
            </h2>
            <p className="text-xs text-[#777777]">
              Submit your residence for private curation and global marketing
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F8F8F6] text-[#777777] hover:text-[#151515] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-[#151515] text-[#B39A72] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-[#151515]">
                Submission Submitted For Review
              </h3>
              <p className="text-xs text-[#666666] mt-2 max-w-md mx-auto">
                Our acquisition curation board reviews submissions within 24 hours. A representative will contact you for architectural documentation and appraisal.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-[#151515] text-white text-xs font-semibold rounded-md cursor-pointer hover:bg-[#333333]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    Owner / Representative *
                  </label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                  {errors.ownerName && <p className="text-[11px] text-red-500 mt-0.5">{errors.ownerName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@estate.com"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    Property / Residence Name *
                  </label>
                  <input
                    type="text"
                    value={formData.propertyName}
                    onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                    placeholder="e.g. Casa del Mar"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                  {errors.propertyName && <p className="text-[11px] text-red-500 mt-0.5">{errors.propertyName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    City & Country *
                  </label>
                  <input
                    type="text"
                    value={formData.cityCountry}
                    onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                    placeholder="e.g. Mykonos, Greece"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                  {errors.cityCountry && <p className="text-[11px] text-red-500 mt-0.5">{errors.cityCountry}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    Estimated / Target Price (USD) *
                  </label>
                  <input
                    type="text"
                    value={formData.askingPrice}
                    onChange={(e) => setFormData({ ...formData, askingPrice: e.target.value })}
                    placeholder="e.g. $4,500,000"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                  {errors.askingPrice && <p className="text-[11px] text-red-500 mt-0.5">{errors.askingPrice}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    Living Area (m²)
                  </label>
                  <input
                    type="number"
                    value={formData.areaSqM}
                    onChange={(e) => setFormData({ ...formData, areaSqM: e.target.value })}
                    placeholder="e.g. 350"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1">
                  Architectural Description & Key Features
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Architectural style, pool, view, materials used..."
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#888888]">
                  Curation acceptance rate: ~8%
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border border-[#EAEAEA] text-xs rounded-md text-[#555555] hover:bg-[#F8F8F6] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#151515] hover:bg-[#333333] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                  >
                    Submit for Review
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
