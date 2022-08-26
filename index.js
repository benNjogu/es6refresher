let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
];

for (let i = 0; i < journal.length; i++) {
  let entry = journal[i];
  console.log(entry.events.length); //-> 5 6 5
}

for (let entry of journal) {
  console.log(`${entry.events.length} events.`);
}
/**
 * when a for loop looks like this, with the word of after a variable defination,
 * it will loop over the elements of the value given after of.
 */
