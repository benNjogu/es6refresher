/*const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};**/

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

console.log(power(5, 2)); //->25
