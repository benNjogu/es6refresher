let anObject = {
  left: 1,
  right: 2,
};

console.log(anObject.left); // 1
delete anObject.left; //deletes the specified object
console.log(anObject.left); //undefined
console.log("left" in anObject); //false
console.log("right" in anObject); //true

/**
 * The binary in operator when applied to a string and an object, tells you
 * whether that object has a property with that name.
 */
