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
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("am fucking white.");//-> The white rabbit says 'am fucking white.'
hungryRabbit.speak("i could use a carrot.");//-> The hungry rabbit says 'i could use a carrot.'
