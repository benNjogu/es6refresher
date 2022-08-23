const person = {
  name: "Ben",
  walk() {},
  talk() {
    console.log("talking");
  },
};

person.talk();
person["name"] = "kimangas";
console.log(person.name);
