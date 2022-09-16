class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walking");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teaching");
  }
}

let t = new Teacher("Ben", "BSc.");
console.log(t.name); //-> Ben
console.log(t.degree); //-> BSc
t.walk(); //-> walking
t.teach(); //-> teaching
