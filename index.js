function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("1 + /*2*/3")); //-> 1 + 3
console.log(stripComments("x = 10;// ten!"));// → x = 10;

/**
 *The below code is giving a wrong output due to the greedy nature of the repetition operators(+, *, ?, {}) 
 */
console.log(stripComments("1 /* a */+/* b */ 1"));// → 1 1

/**
 * The part b4 the or operator, matches 2 slashes character followed by any number of non newline characters.
 * The part for multiline comments use[^](any character that is not on the empty set of characters) as a way to
 * match any character.
 * We cannot just use a period because block comments can continue on a new line, and the period character does 
 * not match newline characters.
 */
