let quotedText = /'([^']*)'/;
console.log(quotedText.exec("She said 'hello'")); //-> [ "'hello'", "hello" ]
