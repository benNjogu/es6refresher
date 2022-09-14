function count(selector) {
  return document.querySelectorAll(selector).length;
}

console.log(count("p")); //-> 4
console.log(count(".animal")); //-> 2
console.log(count("p.animal")); //-> 0
console.log(count("p > .animal")); //-> 1
