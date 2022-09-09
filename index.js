let name = "Harry";
let text = "Harry is a suspicious character";
let regExp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regExp, "_$1_")); //-> _Harry_ is a suspicious character

/**
 * On the above, we are using two backslashes because we are writting them in a normal string,
 * not a slash enclosed regular expression.
 *
 * The second argument on the RegExp constructor contains the option for the regular expression,
 * i.e. gi for global and case insensitive
 */

//what if the name is dea+hl[]rd
//To work around this we can add back slashes to every character that has a special meaning.
let name2 = "dea+hl[]rd";
let text2 = "This dea+hl[]rd guy is super annoying.";
let escaped = name2.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regExp2 = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text2.replace(regExp2, "_$&_")); //-> This _dea+hl[]rd_ guy is super annoying.
