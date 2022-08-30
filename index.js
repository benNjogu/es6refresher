/**
 * A map is a datastructure that is used to map values(keys) to other values.
 */

let ages = new Map();
ages.set("Liang", 39);
ages.set("Boris", 22);
ages.set("Mannaseh", 62);

console.log(`Liang is ${ages.get("Liang")}`); //-> Liang is 39
console.log(ages.has("toString")); //-> false
