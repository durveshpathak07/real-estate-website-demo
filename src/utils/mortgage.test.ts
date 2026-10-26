import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateMortgage, formatCurrency } from './mortgage';

test('calculates standard 30-year fixed mortgage correctly', () => {
  const result = calculateMortgage({
    propertyPrice: 1000000,
    downPaymentPercent: 20,
    annualInterestRate: 6.0,
    loanTermYears: 30,
    annualPropertyTaxRate: 1.2,
    annualHomeInsurance: 3600,
    monthlyHOA: 400
  });

  assert.equal(result.loanAmount, 800000);
  assert.equal(result.downPaymentAmount, 200000);
  // Loan $800k at 6% over 30 years is ~$4,796 principal & interest
  assert.ok(result.monthlyPrincipalAndInterest >= 4790 && result.monthlyPrincipalAndInterest <= 4810);
  assert.equal(result.monthlyPropertyTax, 1000); // 1.2% of 1M / 12 = 1000
  assert.equal(result.monthlyHomeInsurance, 300); // 3600 / 12 = 300
  assert.equal(result.monthlyHOA, 400);
  assert.ok(result.totalMonthlyPayment > 6400);
});

test('handles 100% down payment (cash purchase)', () => {
  const result = calculateMortgage({
    propertyPrice: 500000,
    downPaymentPercent: 100,
    annualInterestRate: 5.5,
    loanTermYears: 30,
    annualPropertyTaxRate: 1.0,
    annualHomeInsurance: 1200,
    monthlyHOA: 200
  });

  assert.equal(result.loanAmount, 0);
  assert.equal(result.downPaymentAmount, 500000);
  assert.equal(result.monthlyPrincipalAndInterest, 0);
  assert.equal(result.totalInterestPaid, 0);
});

test('formats currency properly', () => {
  assert.equal(formatCurrency(3400000), '$3,400,000');
  assert.equal(formatCurrency(0), '$0');
});
