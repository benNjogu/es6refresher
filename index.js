window.addEventListener("keydown", (event) => {
  if (event.key == "v") {
    document.body.style.background = "violet";
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key == "v") {
    document.body.style.background = "";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key == " " && event.ctrlKey) console.log("Continuing!");
});
