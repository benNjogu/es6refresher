const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

console.log(power(15, 2));

let area = (side) => power(side, 2);

console.log(area(51));

const horn = () => console.log("hoot");

horn();
