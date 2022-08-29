let object = new (class {
  getWord() {
    return "hello";
  }
})();

console.log(object.getWord()); //-> hello

/**
 * As shown above, class can be used both in statements and in expressions
 */
