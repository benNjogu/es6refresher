let details = {
  name: "faraj",
  age: 23,
};

let { name, age: id } = details; //in this case id is an alias

console.log(id); //-> 23
