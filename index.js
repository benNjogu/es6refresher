function isEven(num) {
  if (num < 0) return;
  if (num === 0) return true;
  else if (num === 1) return false;

  return isEven(num - 2);
}

console.log(isEven(50)); //-> true
console.log(isEven(75)); //-> false
