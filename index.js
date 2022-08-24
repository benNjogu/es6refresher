const power = (base, exponent = 2) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

console.log(power(4));
console.log(power(2, 6));

/**
 * If you write an equals operator after a parameter, followed by an expression, the value of that expression will
 * replace the argument when it is not given as illustrated above.
 */
