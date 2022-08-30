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

/**
 * Multiple symbols can have the same name.
 */
const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function(){
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());//-> 1,2
console.log([1, 2][toStringSymbol]());//-> 2 cm of blue yarn

/**
 * It is possible to include symbol properties in object expressions and classes by using 
 * square blackets around the property name.
 */
//e.g
let stringObject = {
  [toStringSymbol](){return "a jute rope";}
};
console.log(stringObject[toStringSymbol]());//-> a jute rope






