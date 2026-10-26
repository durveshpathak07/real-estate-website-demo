import React, { useState } from 'react';
import { X, Calculator, ShieldCheck, DollarSign } from 'lucide-react';
import { calculateMortgage, formatCurrency } from '../utils/mortgage';

interface MortgageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPrice?: number;
}

export const MortgageCalculatorModal: React.FC<MortgageCalculatorModalProps> = ({
  isOpen,
  onClose,
  defaultPrice = 3400000,
}) => {
  if (!isOpen) return null;

  const [propertyPrice, setPropertyPrice] = useState(defaultPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(5.75);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [insurance, setInsurance] = useState(3600);
  const [monthlyHOA, setMonthlyHOA] = useState(450);

  const result = calculateMortgage({
    propertyPrice,
    downPaymentPercent,
    annualInterestRate: interestRate,
    loanTermYears: loanTerm,
    annualPropertyTaxRate: propertyTaxRate,
    annualHomeInsurance: insurance,
    monthlyHOA,
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#EAEAEA] my-auto overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#EAEAEA] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#F8F8F6] border border-[#EAEAEA] flex items-center justify-center text-[#B39A72]">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-['Manrope'] text-base sm:text-lg font-bold text-[#151515]">
                Luxury Mortgage & Financing Estimator
              </h2>
              <p className="text-xs text-[#777777]">
                Customized for high-value residential acquisitions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F8F8F6] text-[#777777] hover:text-[#151515] transition-colors cursor-pointer"
            aria-label="Close calculator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Property Price */}
            <div>
              <label className="block text-xs font-medium text-[#444444] mb-1">
                Property Valuation
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="200000"
                  max="50000000"
                  step="50000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-[#F8F8F6] border border-[#EAEAEA] focus:border-[#151515] rounded-lg pl-8 pr-3 py-2 text-xs font-mono font-semibold text-[#151515] outline-none"
                />
                <DollarSign className="w-3.5 h-3.5 text-[#888888] absolute left-2.5 top-2.5" />
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between text-xs font-medium text-[#444444] mb-1">
                <span>Down Payment ({downPaymentPercent}%)</span>
                <span className="font-mono text-[#151515]">{formatCurrency(result.downPaymentAmount)}</span>
              </div>
              <input
                type="range"
                min="10"
                max="80"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#151515] cursor-pointer"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between text-xs font-medium text-[#444444] mb-1">
                <span>Annual Interest Rate</span>
                <span className="font-mono text-[#151515]">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="3.0"
                max="10.0"
                step="0.05"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#151515] cursor-pointer"
              />
            </div>

            {/* Loan Term */}
            <div>
              <label className="block text-xs font-medium text-[#444444] mb-1">
                Loan Duration
              </label>
              <div className="flex gap-2">
                {[15, 20, 30].map((term) => (
                  <button
                    key={term}
                    onClick={() => setLoanTerm(term)}
                    className={`flex-1 py-1.5 text-xs rounded border transition-colors cursor-pointer ${
                      loanTerm === term
                        ? 'bg-[#151515] text-white border-[#151515]'
                        : 'border-[#EAEAEA] text-[#555555] hover:border-[#888888]'
                    }`}
                  >
                    {term} Years
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="p-5 bg-[#F8F8F6] rounded-xl border border-[#EAEAEA]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#EAEAEA]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888]">
                  Monthly Estimated Commitment
                </span>
                <div className="text-3xl font-bold font-['Manrope'] text-[#151515] tabular-nums">
                  {formatCurrency(result.totalMonthlyPayment)}
                  <span className="text-xs font-normal text-[#666666]"> / month</span>
                </div>
              </div>

              <div className="text-right text-xs">
                <span className="text-[#777777]">Total Financed: </span>
                <span className="font-mono font-bold text-[#151515]">{formatCurrency(result.loanAmount)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#888888] block">Principal & Int.</span>
                <span className="font-mono font-semibold text-[#151515]">{formatCurrency(result.monthlyPrincipalAndInterest)}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#888888] block">Property Tax</span>
                <span className="font-mono font-semibold text-[#151515]">{formatCurrency(result.monthlyPropertyTax)}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#888888] block">Insurance</span>
                <span className="font-mono font-semibold text-[#151515]">{formatCurrency(result.monthlyHomeInsurance)}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#888888] block">HOA & Maint.</span>
                <span className="font-mono font-semibold text-[#151515]">{formatCurrency(result.monthlyHOA)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#777777]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B39A72]" />
              <span>Private Banking Conduits Available</span>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#151515] hover:bg-[#333333] text-white font-medium rounded-md transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
