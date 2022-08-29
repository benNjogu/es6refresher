let empty = {};
console.log(empty.toString); //-> function toString()
console.log(empty.toString()); //-> [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype); //-> true
console.log(Object.getPrototypeOf(Object.prototype)); //-> null

/**
 * Many objects don't directly have object.prototype as their prototype but instead have another
 * object that provides a different set of default properties.
 */
//e.g.
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);//-> true
console.log(Object.getPrototypeOf([]) == Array.prototype);//-> true
