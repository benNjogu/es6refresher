let link = document.querySelector("a");
let button = document.querySelector("button");

link.addEventListener("click", (event) => {
  console.log("Nope");
  event.preventDefault();
});
