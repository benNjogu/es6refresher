const x = 1;
function evalAndReturnX(code) {
  eval(code); //executes a string in the current scope
  return x;
}

console.log(evalAndReturnX("var x = 2")); //-> 2
console.log(x); //-> 1
