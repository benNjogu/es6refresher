let match = /\d+/.exec("one two 100");
/**
 * An exec method will return null if no match was found and return an object with information about the match
 * otherwise
 */
console.log(match); //-> [ "100" ]
/**
 * The exec method has an index property that tells us where in the string the successful match begins.
 */
console.log(match.index); //-> 8
