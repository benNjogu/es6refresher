function square(side) {
  return side * side;
}
console.log(square(6, "hedgehoge", true));
/**
 * In the above case, the language does not complain.
 * It ignores the other arguments and calls the function using the first one
 */
