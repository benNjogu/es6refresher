/**
 * It is possible to pass to pass a function rather than a string as the second argument to replace.
 */

let s = "the cia and the fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase())); //-> the CIA and the FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    //only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
