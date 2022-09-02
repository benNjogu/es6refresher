/**
 * Automated testing is the process of writing a program that tests another program
 */

function test(label, body){
  if(!body()) console.log(`Failed: ${label}`);
}

test("Convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO"
});

test("Convert Greek text to uppercase", () => {
  return "Χαίρετε".toUpperCase() == "XAIPETE"
});//-> Failed: Convert Greek text to uppercase

console.log("Χαίρετε".toUpperCase());//-> ΧΑΊΡΕΤΕ