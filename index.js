console.log(/cat/.test("concatenate")); //-> true

/**
 * A word boundary(\b) can be the start or end of a string or any point in the string that has a word character
 * as in (\w) on one side and a non word character on the other.
 */
console.log(/\bcat\b/.test("concatenate")); //-> false
