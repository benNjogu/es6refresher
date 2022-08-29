class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("I will kill");

let blackRabbit = new Rabbit("black");
blackRabbit.speak("I love whites");

/**
 * The above provides the actual constructor function, which will be bound to the name Rabbit.
 * The others are packaged into that constructors prototype.
 * Class declarations only allow methods to be added to the prototype. This is inconvinient when you want to
 * save a non-function value in there.
 */
