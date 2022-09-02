function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}

//console.log(promptNumber("What did you score in your favourite unit?")); //-> 77

function lastElement(array){
  if(array.length == 0){
    return {failed: true};
  }else{
    return {element: array[array.length - 1]}
  }
}

console.log(lastElement([]));//-> { failed: true }
console.log(lastElement([1, 2, 3, 4]));//-> { element: 4 }

/**
 * If the function can already return any kind of value, you'll have to do something like wrap
 * the result in an object to be able to distinguish success from failure.
 */