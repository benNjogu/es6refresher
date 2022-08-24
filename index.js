let size = 8;
let char = "";
for (j = 0; j < size; j++) {
  for (i = 0; i < size; i++) {
    if ((i + j) % 2 == 0) {
      char += " ";
    } else {
      char += "#";
    }
  }
  char += "\n";
}

console.log(char);
