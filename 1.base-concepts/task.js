"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;

  if (d < 0) {
  arr = [];
} else if (d === 0) {
  arr = [-b/(2*a)];
} else {
  arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
}
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } else {
    let p = (percent/100)/12;
    let s = amount - contribution;
    let payment = s * (p + (p / (((1 + p)**countMonths) - 1)));
    let totalAmount = payment*countMonths;

    return Number(totalAmount.toFixed(2));
  }
}