/**
 * To invert a set of characters- to express that you want to match any character except the ones in the set-
 * you can write a caret(^) character after the opening.
 */
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110")); //-> false

console.log(notBinary.test("1100100010200110")); //-> true
