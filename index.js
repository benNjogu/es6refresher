let sentence = "Secretary birds specialize in stomping";
let words = sentence.split(" ");
console.log(words); //-> [ "Secretary", "birds", "specialize", "in", "stomping" ]

console.log(words.join(". ")); //-> Secretary. birds. specialize. in. stomping
console.log(words.join(" ") + ".");//-> Secretary birds specialize in stomping.