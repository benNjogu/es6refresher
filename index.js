function range(start, end, step) {
  let numbers = [];
  if (start < end) {
    for (let i = start; i <= end; ) {
      numbers.push(i);
      if (step == null) i++;
      else i += step;
    }
  } else if (start > end) {
    for (let i = start; i >= end; ) {
      numbers.push(i);
      if (step == null) i--;
      else i += step;
    }
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

console.log(range(5, 2, -2));//-> [ 5, 3 ]
console.log(sum(range(5, 2, -2))); //-> 8 
