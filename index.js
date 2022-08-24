let size = 8;
let char = "";
for (let j = 0; j < size; j++) {
  for (let k = size; k > j; k--) {
    char += "*";
  }
  for (let i = 0; i < size - j; i++) {
    char += " ";
  }
  
  char += "\n";
}

console.log(char);
