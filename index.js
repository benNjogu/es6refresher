try {
  setTimeout(() => {
    throw new Error("Woosh"); //-> Uncaught Error: Woosh
  }, 20);
} catch (_) {
  //This will not run
  console.log("Caught!");
}

let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at ", Date.now() - start); //-> Timeout ran at  999
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start); //-> Wasted time until 50

Promise.resolve("Done").then(console.log);
console.log("Me first!");
/**
 * Me first!
 * Done
 */