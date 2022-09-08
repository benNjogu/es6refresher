/**
 * When you put a (+) sign after something in regular expression, it indicates that the element may be repeated
 * more than once.
 */
console.log(/'\d+'/.test("'123'"));//-> true
console.log(/'\d+'/.test("''"));//-> false

/**
 * The (*) has a similar meaning but also allows the pattern to match zero times.
 */
console.log(/'\d*'/.test("'123'"));//-> true
console.log(/'\d*'/.test("''"));//-> true

/**
 * A question mark makes a part of a pattern optional, meaning it may occur zero times or one time.
 */
let neighbour = /neighbou?r/;
console.log(neighbour.test("neighbour"));//-> true
console.log(neighbour.test("neighbor"));//-> true
