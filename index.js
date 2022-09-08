/**
 * To indicate that a pattern should occur a precise number of times, use braces.
 * e.g. {4} indicates that an element should occur four times.
 *      {2, 4} means an element must occur at least two times at most four times.
 */

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));//-> true
