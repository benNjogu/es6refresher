/**
 * It is possible to pass to pass a function rather than a string as the second argument to replace.
 */

let s = "the cia and the fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, (str) => str.toUpperCase())); //-> the CIA and the FBI
