let button = document.querySelector("button");
function once() {
  console.log("Done.");
  button.removeEventListener("click", once);
}
button.addEventListener("click", once);
/**
 * Remove event listener from a node after one click.
 */
