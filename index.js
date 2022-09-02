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

let sum = (a, b) => a + b;

//given
let num1 = 0;
let num2;
let total = num1 + num2;
//when
//then

function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

test("sum of two nums", () => {
  return sum(num1, num2) == total;
});