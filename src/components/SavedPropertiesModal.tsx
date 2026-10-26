import React from 'react';
import { X, Heart, Trash2, ArrowUpRight } from 'lucide-react';
import { Property } from '../types/property';

interface SavedPropertiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: Property[];
  onSelectProperty: (property: Property) => void;
  onRemoveSaved: (propertyId: string) => void;
  onClearAll: () => void;
}

export const SavedPropertiesModal: React.FC<SavedPropertiesModalProps> = ({
  isOpen,
  onClose,
  savedProperties,
  onSelectProperty,
  onRemoveSaved,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#EAEAEA] my-auto overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#EAEAEA] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <h2 className="font-['Manrope'] text-base font-bold text-[#151515]">
              Saved Residences ({savedProperties.length})
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {savedProperties.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-[#888888] hover:text-red-500 transition-colors mr-2 cursor-pointer"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#F8F8F6] text-[#777777] hover:text-[#151515] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {savedProperties.length === 0 ? (
            <div className="text-center py-10">
              <Heart className="w-10 h-10 text-[#CCCCCC] mx-auto mb-2" />
              <p className="text-sm font-medium text-[#151515]">No saved residences yet</p>
              <p className="text-xs text-[#777777] mt-1">
                Click the heart icon on any property card to bookmark it for comparison.
              </p>
            </div>
          ) : (
            savedProperties.map((prop) => (
              <div
                key={prop.id}
                className="flex items-center justify-between gap-3 p-3 rounded-xl border border-[#EAEAEA] hover:border-[#151515] transition-all bg-white group cursor-pointer"
                onClick={() => {
                  onSelectProperty(prop);
                  onClose();
                }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-[#ECECE8]">
                    <img src={prop.image} alt={prop.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Manrope'] text-xs font-bold text-[#151515] truncate group-hover:text-[#B39A72] transition-colors">
                      {prop.name}
                    </h4>
                    <p className="text-[11px] text-[#777777] truncate">{prop.locationFormatted}</p>
                    <span className="font-mono text-xs font-bold text-[#151515] tabular-nums">
                      {prop.priceFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveSaved(prop.id);
                    }}
                    className="p-1.5 rounded-md text-[#AAAAAA] hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    aria-label={`Remove ${prop.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-[#151515]" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
