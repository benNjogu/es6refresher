let size = 8;
let char = " ";
for (j = 0; j < size; j++) {
  char += "\n";
  for (i = 0; i < size; i++) {
    if ((i + j) % 2 == 0) {
      char += "#";
    } else {
      char += " ";
    }
  }
}

console.log(char);
