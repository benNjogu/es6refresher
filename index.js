let input = document.querySelector("input");
input.addEventListener("change", () => {
  if (input.files.length > 0) {
    let file = input.files[0];
    console.log("You chose", file.name);
    if (file.type) console.log("it has type", file.type);
  }
});
