function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chicken, pigs, goats) {
  console.log(`${zeroPad(chicken, 3)}`);
  console.log(`${zeroPad(pigs, 3)}`);
  console.log(`${zeroPad(cows, 3)}`);
  console.log(zeroPad(goats, 3));
}

printFarmInventory(9, 13, 5, 2);
