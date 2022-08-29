let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I am alive"); //-> The rabbit says 'I am alive'

/**
 * Methods:
 * Properties that hold function values.
 */

function speak(line) {
  console.log(`The ${this.type} ${this.cute} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", cute: "cute", speak };
let hungryRabbit = { type: "hungry", cute: "cute", speak };

whiteRabbit.speak("am fucking white.");//-> The white rabbit says 'am fucking white.'
hungryRabbit.speak("i could use a carrot.");//-> The hungry rabbit says 'i could use a carrot.'

speak.call(hungryRabbit, "am full");
/**
 * With the function call method above, the this value is taken as the first argument and treats further 
 * arguments as normal parameters.
 */
