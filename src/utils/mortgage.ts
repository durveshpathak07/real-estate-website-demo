export interface MortgageCalculationInput {
  propertyPrice: number;
  downPaymentPercent: number; // e.g. 20%
  annualInterestRate: number; // e.g. 5.5%
  loanTermYears: number; // e.g. 30
  annualPropertyTaxRate?: number; // default 1.2%
  annualHomeInsurance?: number; // default $3,600
  monthlyHOA?: number; // default $450
}

export interface MortgageCalculationResult {
  loanAmount: number;
  downPaymentAmount: number;
  monthlyPrincipalAndInterest: number;
  monthlyPropertyTax: number;
  monthlyHomeInsurance: number;
  monthlyHOA: number;
  totalMonthlyPayment: number;
  totalInterestPaid: number;
  totalCostOfLoan: number;
}

export function calculateMortgage(input: MortgageCalculationInput): MortgageCalculationResult {
  const {
    propertyPrice,
    downPaymentPercent,
    annualInterestRate,
    loanTermYears,
    annualPropertyTaxRate = 1.2,
    annualHomeInsurance = 3600,
    monthlyHOA = 450
  } = input;

  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = Math.max(0, propertyPrice - downPaymentAmount);

  const monthlyRate = annualInterestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  let monthlyPrincipalAndInterest = 0;
  if (loanAmount > 0 && monthlyRate > 0) {
    const factor = Math.pow(1 + monthlyRate, numberOfPayments);
    monthlyPrincipalAndInterest = (loanAmount * (monthlyRate * factor)) / (factor - 1);
  } else if (loanAmount > 0 && monthlyRate === 0) {
    monthlyPrincipalAndInterest = loanAmount / numberOfPayments;
  }

  const monthlyPropertyTax = (propertyPrice * (annualPropertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualHomeInsurance / 12;
  const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyHOA;

  const totalPayments = monthlyPrincipalAndInterest * numberOfPayments;
  const totalInterestPaid = Math.max(0, totalPayments - loanAmount);
  const totalCostOfLoan = downPaymentAmount + totalPayments;

  return {
    loanAmount: Math.round(loanAmount),
    downPaymentAmount: Math.round(downPaymentAmount),
    monthlyPrincipalAndInterest: Math.round(monthlyPrincipalAndInterest),
    monthlyPropertyTax: Math.round(monthlyPropertyTax),
    monthlyHomeInsurance: Math.round(monthlyInsurance),
    monthlyHOA: Math.round(monthlyHOA),
    totalMonthlyPayment: Math.round(totalMonthlyPayment),
    totalInterestPaid: Math.round(totalInterestPaid),
    totalCostOfLoan: Math.round(totalCostOfLoan)
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}
