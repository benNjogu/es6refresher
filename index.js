function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

for (;;) {
  //This kind of loop creates a loop that does not terminate on it's own.
  try {
    let dir = promptDirection("Where");//mispelling promptDirection may cause a big problem!
    console.log("You chose ", dir);
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}
