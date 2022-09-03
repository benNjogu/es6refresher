/**
 * Assertions:
 * -Checks inside a program that verify that something is the way it is supposed to be.
 * -Used to find programmer mistakes.
 */

function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []"); //This makes it easy to find the cause of mistakes when they occur
  }

  return array[0];
}

console.log(firstElement([1, 2, 3, 4])); //-> 1
console.log(firstElement([])); //-> Uncaught Error: firstElement called with []

/**
 * @NB
 * Don't use assertions everywhere in your code. Use them for mistakes that are easy to make or
 * that you find yourself making, else, your code will be very noisy!!
 */
