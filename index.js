let i = 0;
function forLoop(value, testFunction, updateFunction, bodyFunction) {
  if (i > value) {
    return;
  }

  testFunction(i, value);
  bodyFunction(i);
  i = updateFunction(i);

  return forLoop(value, testFunction, updateFunction, bodyFunction);
}

forLoop(
  5,
  (a, d) => a <= d,
  (b) => (b += 1),
  (c) => console.log(c)
);
//-> 0, 1, 2, 3, 4, 5
