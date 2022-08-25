function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }

  console.log(`${numberString} ${label}`);
}
/**
 * The above function, as the name suggests, does 3 things:
 * print
 * adding a zero 
 * adding a label.
 * ONE FUNCTION!!!
 */

function printFarmInventory(cows, chicken, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chicken, "Chicken");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
