class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

let blackRabbit = new Rabbit("black");
console.log(String(blackRabbit)); //-> a black rabbit

let sym = Symbol("name");
console.log(sym == Symbol("name")); //-> false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);//-> 55
