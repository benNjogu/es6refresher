let size = 8;
let char = "";
for (let j = 0; j <= size; j++) {
  for (let i = 0; i <= size; i++) {
    if (i === 0 || i === size) {
      char += "#";
    } else if (j === 0 || j === size) {
      char += "#";
    } else {
      char += " ";
    }
  }
  char += "\n";
}

console.log(char);
