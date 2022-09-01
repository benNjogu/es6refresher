/**
 * Bugs - flows in a computer program.
 * Debugging - the process of finding bugs.
 */
"use strict";

function canYouSportTheProblem() {
  "use strict";
  for (let counter = 0; counter < 10; counter++) {
    console.log("Happy life");
  }
}

canYouSportTheProblem(); //-> Uncaught ReferenceError: assignment to undeclared variable counter

function Person(name) {
  this.name = name;
}

//without strict mode the code below works
//let ferdinand = Person("Ferdinand");
//console.log(name); //-> Ferdinand

//let ferdinand = Person("Ferdinand");
//console.log(name); //-> Uncaught TypeError: this is undefined

let ferdinad = new Person("Ferdinand");
console.log(name); //-> Ferdinand
