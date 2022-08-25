function printFarmInventory(cows, chicken) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} cows`);
  let chickenString = String(chicken);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} chicken`);
}

printFarmInventory(7, 11);
//Above, the farmer keeps cows and chicken. but if he adds pigs, we repeat the four lines of code which 
//creates repetition.
