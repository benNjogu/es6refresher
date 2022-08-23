const person = {
  name: "Ben",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;
walk();
