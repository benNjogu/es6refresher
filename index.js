let re1 = new RegExp("abc");
let re2 = /abc/;

console.log(re1); //-> /abc/
console.log(re2); //-> /abc/

/**
 * Some characters such as question marks and plus signs, have special meanings in regular expressions
 * and must be preceeded by a backslash if they are meant to represent the character itself.
 */
let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus);
