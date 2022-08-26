/**
 * JSON - Javascript Object Notation
 * It is a serialization format(Converting data to a flat description)
 * Widely used as a data storage and communication format on the web
 *
 * RESTRICTIONS:
 * -All property names have to be surrounded by double quotes
 * -Only simple data expressions are allowed - no fuction calls
 *                                           - no bindings
 *                                           - or anything that contains actual computations
 * -Comments are not allowed in JSON.
 * Example:
 * {
 *  "squirrel" : false,
 *  "events" : ["work", "touched tree", "pizza", "running"]
 * }
 */

let string = JSON.stringify({ squirrel: false, events: ["weekend"] });//takes javascript value and returns a JSON-Encoded string
console.log(string);//-> {"squirrel":false,"events":["weekend"]}

console.log(JSON.parse(string).events);//-> [ "weekend" ]
//JSON.parse() takes the string and returns it to the value it encodes

