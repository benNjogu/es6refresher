function range(start, end, step) {
  let numbers = [];
  for (let i = start; i <= end; ) {
    numbers.push(i);
    if (step == null) i++;
    else i += step;
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

console.log(sum(range(0, 10, 2))); //-> 30
