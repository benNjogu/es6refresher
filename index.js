function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count++;
    }
  }

  return count;
}
let letter = "B";
console.log(`There are ${countChar("BARNABAS", letter)} ${letter}s`);//->There are 2 Bs
