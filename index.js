let input = document.querySelector("input");
input.addEventListener("change", () => {
  for (let file of Array.from(input.files)) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log("File", file.name, "starts with", reader.result.slice(0, 20));
    });
    reader.readAsText(file);
  }
});
