/**
 * HIGHER ORDER FUNCTIONS
 * Functions that operate on other functions, either by taking them as arguments
 * or by returning them.
 */
//eg1 functions that create other functions
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); //-> true

//eg2 functions that change other functions
function noisy(f) {
  return (...args) => {
    console.log("calling with ", args);
    let result = f(...args);
    console.log("called with ", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1); //-> calling with [ 3, 2, 1 ] //-> called with [ 3, 2, 1 ] , returned 1

//eg3 we can write functions that provides new types of control flow
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, " is even");
  });
}); //-> 0  is even //-> 2  is even

//eg4 the forEach loop
["A", "B"].forEach((i) => console.log(i)); //-> A B
