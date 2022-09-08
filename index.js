/**
 * A number of common character groups have their own built-in shortcuts.
 *  \d - any digit character
 *  \w - word character
 *  \s - whitespace character(space, tab, newline)
 *  \D - not a digit
 *  \W - a nonalphanumeric character
 *  \S - a non whitespace character
 *  . - any character except for new line 
 */

//Example:
let dateTime = /\d\d-\d\d-\d\d\d\d\ \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));//-> true

console.log(dateTime.test("30-jan-2003 15:30"))//-> false
