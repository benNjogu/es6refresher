/**
 * Exceptions - mechanism that makes it possible for code that runs into a problem
 * to raise(or throw) an exception.
 * An exception can be any value.
 */
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see " + look()); //-> You see two angry bears
} catch (error) {
  console.log("Something went wrong: " + error); //-> Something went wrong: Error: Invalid direction: r
}
