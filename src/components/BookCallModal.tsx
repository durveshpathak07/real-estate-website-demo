import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, Video, CheckCircle2, User } from 'lucide-react';
import { ADVISOR_MARCUS_IMAGE } from '../data/properties';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({
  isOpen,
  onClose,
  propertyName = '',
}) => {
  if (!isOpen) return null;

  const [callType, setCallType] = useState<'video' | 'phone' | 'private-viewing'>('video');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 3:00 PM EST');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [notes, setNotes] = useState(propertyName ? `Inquiring about ${propertyName}` : '');
  const [booked, setBooked] = useState(false);

  const availableSlots = [
    'Today, 4:30 PM EST',
    'Tomorrow, 10:00 AM EST',
    'Tomorrow, 3:00 PM EST',
    'Thursday, 11:30 AM EST',
    'Friday, 2:00 PM EST',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientContact) return;
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#EAEAEA] my-auto overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#EAEAEA] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#EAEAEA]">
              <img src={ADVISOR_MARCUS_IMAGE} alt="Advisor Marcus Lee" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-['Manrope'] text-base font-bold text-[#151515]">
                Schedule Private Advisory Call
              </h2>
              <p className="text-xs text-[#777777]">
                With Marcus Lee · Senior Real Estate Director
              </p>
            </div>
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
          {booked ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-[#151515] text-[#B39A72] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-[#151515]">
                Consultation Confirmed
              </h3>
              <p className="text-xs text-[#666666] mt-2 max-w-sm mx-auto leading-relaxed">
                A calendar invitation and direct dial link for <strong className="text-[#151515]">{selectedDate}</strong> has been transmitted to <strong className="text-[#151515]">{clientContact}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-[#151515] text-white text-xs font-semibold rounded-md cursor-pointer hover:bg-[#333333]"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Consultation Format */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Consultation Format
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setCallType('video')}
                    className={`py-2 px-3 rounded-lg border flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                      callType === 'video'
                        ? 'bg-[#151515] text-white border-[#151515]'
                        : 'border-[#EAEAEA] text-[#555555] hover:border-[#CCCCCC]'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span className="text-[11px]">Private Video</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCallType('phone')}
                    className={`py-2 px-3 rounded-lg border flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                      callType === 'phone'
                        ? 'bg-[#151515] text-white border-[#151515]'
                        : 'border-[#EAEAEA] text-[#555555] hover:border-[#CCCCCC]'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-[11px]">Direct Phone</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCallType('private-viewing')}
                    className={`py-2 px-3 rounded-lg border flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                      callType === 'private-viewing'
                        ? 'bg-[#151515] text-white border-[#151515]'
                        : 'border-[#EAEAEA] text-[#555555] hover:border-[#CCCCCC]'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-[11px]">On-Site Tour</span>
                  </button>
                </div>
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1.5">
                  Preferred Time Window
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] focus:border-[#151515] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none cursor-pointer"
                >
                  {availableSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#444444] mb-1">
                    Phone / Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientContact}
                    onChange={(e) => setClientContact(e.target.value)}
                    placeholder="Email or Phone"
                    className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#444444] mb-1">
                  Discussion Focus
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Escrow questions, Aspen tax residency..."
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] rounded-lg px-3 py-2 text-xs text-[#151515] outline-none focus:border-[#151515]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#EAEAEA] text-xs rounded-md text-[#555555] hover:bg-[#F8F8F6] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#151515] hover:bg-[#333333] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
