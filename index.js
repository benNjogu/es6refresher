class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

Rabbit.prototype.teeth = "small";
let killerRabbit = new Rabbit("killer");
console.log(killerRabbit.teeth); //-> small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth); //-> long, sharp, and bloody
let blackRabbit = new Rabbit("black");
console.log(blackRabbit.teeth); //-> small
console.log(Rabbit.prototype.teeth); //-> small

/**
 * When you add a property to an object, whether it is present in the prototype or not,
 * the property is added to the object itself.
 */
