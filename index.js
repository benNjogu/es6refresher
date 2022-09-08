console.log(new Date()); //-> Thu Sep 08 2022 13:01:27 GMT+0300 (East Africa Time)
console.log(new Date(2009, 11, 9)); //-> Wed Dec 09 2009 00:00:00 GMT+0300 (East Africa Time)
/**
 * NB: JS uses a convention where the month numbers start at zero and day numbers start at one.
 */

console.log(new Date(2009, 11, 9).getTime()); //-> 1260306000000
console.log(new Date(1260306000000)); //-> Date Wed Dec 09 2009 00:00:00 GMT+0300 (East Africa Time)

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003")); //-> Thu Jan 30 2003 00:00:00 GMT+0300 (East Africa Time)
