new Promise((_, reject) => reject(new Error("Fail")))
  .then((value) => console.log("Handler 1"))
  .catch((reason) => {
    console.log("Caught failure " + reason); //-> Caught failure Error: Fail
    return "nothing";
  })
  .then((value) => console.log("Handler 2", value)); //-> Handler 2 nothing
