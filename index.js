/**
 * One approach to asynchronous programming is to make functions that perform a slow action take an extra argument
 * i.e a callback function. The action is started, and when it finishes, the callback function is called with the
 * result.
 */
setTimeout(() => console.log("Tick"), 10000);
