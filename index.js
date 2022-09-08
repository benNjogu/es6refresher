console.log(/abc/.test("abcde")); //-> true
console.log(/abc/.test("abxde")); //-> false
console.log(/abc/.test("abxdabce")); //-> true
