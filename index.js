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

/**
 * The above can be simplified.
 * If you put the keyword new infront of a function call, the function is treated as a constructor as
 * shown below.
 */
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
weirdRabbit.stupid = true;
weirdRabbit.speak("am a weirdo");
console.log(weirdRabbit);
let cuteRabbit = new Rabbit('cute');
console.log(cuteRabbit);
cuteRabbit.speak("am small");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);//-> true
console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);//-> true
