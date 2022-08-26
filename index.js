function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }

  return result;
}

console.log(max(4, 1, 9, -2)); //-> 9

let numbers = [5, 1, 7];
console.log(max(...numbers)); //-> 7
console.log(...numbers);//-> 5 1 7
/**
 * The above spreads out the array into the function call, passing its elements as separate arguments.
 * It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2)
 */
//for example;
let words = ['never', 'fully'];
console.log(['will', ...words, 'understand']);//-> [ "will", "never", "fully", "understand" ]
