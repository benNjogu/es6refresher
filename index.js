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

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["hope", "this", "will", "work"], false);
console.log(journal[3]);

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}
//The above as as per the formulae on page 66 Eloquent Javascript
console.log(phi([76, 9, 4, 1])); //-> 0.06859943405700354
