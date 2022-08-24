function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(7);
console.log(twice(5));
