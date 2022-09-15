let textArea = document.querySelector("textarea");
let timeout;
textArea.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log("Typed!"), 500);
});

//checking mouse positions every 250 milliseconds
let scheduled = null;
window.addEventListener("mousemove", (event) => {
  if (!scheduled) {
    setTimeout(() => {
      document.body.textContent = `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
      scheduled = null;
    }, 250);
  }
  scheduled = event;
});
