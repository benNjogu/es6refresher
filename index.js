let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
  cute: true,
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!"); //-> The killer rabbit says 'SKREEEE!'
console.log(killerRabbit.cute); //-> true

/**
 * As demonstrated above, you can use Object.create to create an Object with a specific prototype.
 */

function makeRabbit(type, cute) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  rabbit.cute = cute;
  return rabbit;
}

console.log(makeRabbit("whiteRabbit", false));
