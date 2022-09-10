/**
 * A promise is an asynchronous action that may complete at some point and produce a value.
 * It is able to notify anyone who is interested when its value is available.
 * The easiest way to create a promise is by calling;- Promise.resolve
 */
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`))//-> Got 15

