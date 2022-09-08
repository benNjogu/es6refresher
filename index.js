/**
 * Putting a set of characters between square brackets makes that part of the expression match any of the
 * characters in the brackets.
 */
console.log(/[0123456789]/.test("in 1992")); //-> true

/**
 * Within square brackets, a hyphen between two characters can be used to indicate a range of characters,
 * where the ordering is determined by the character's unicode number.
 */
console.log(/[0-9]/.test("in 1992")); //-> true
