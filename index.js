let size = 8;
let char = "";
for (let j = 0; j < size; j++) {
  for (let i = 0; i < size - j; i++) {
    char += " ";
  }
  for (let k = 0; k <= j; k++) {
    char += "*";
  }
  char += "\n";
}

console.log(char);
