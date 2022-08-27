function range(start, end) {
  let numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
}

function sum(ourArray) {
  let count = 0;
  for (let i = 0; i < ourArray.length; i++) {
    count += ourArray[i];
  }

  return count;
}

console.log(sum(range(1, 10)));
