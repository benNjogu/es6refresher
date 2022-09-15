//Setting timeout
let bombTimer = setTimeout(() => {
  console.log("BOOM");
}, 500);

//Clearing timeout
if (Math.random() < 0.5) {
  console.log("Defused.");
  clearTimeout(bombTimer);
}

let ticks = 0;
let clock = setInterval(() => {
  console.log("tick", ticks++);
  if (ticks == 10) {
    clearInterval(clock);
    console.log("stop.");
  }
}, 200);
