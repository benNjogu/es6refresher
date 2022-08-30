class Temparature {
  constructor(celcius) {
    this.celcius = celcius;
  }

  get fahrenheit() {
    return this.celcius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celcius = (value - 32) / 1.8;
  }

  //Methods that have static written b4 them are stored in the constructor.
  static fromFahrenheit(value) {
    return new Temparature((value - 32) / 1.8);
  }
}

let temp = new Temparature(22);
console.log(temp.fahrenheit); //-> 71.6
temp.fahrenheit = 71.6;
console.log(temp.celcius); //-> 21.999999999999996 ~ 22
console.log(Temparature.fromFahrenheit(71.6)); //-> { celcius: 21.999999999999996 }
