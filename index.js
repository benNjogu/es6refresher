/**
 * If you put a question mark after greedy operators they become non-greedy(+?, *?, ??, {}?)
 */
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 /* a */+/* b */ 1")); // → 1 + 1
