let para = document.body.getElementsByTagName("p")[0];
console.log("clientHeight:", para.clientHeight); //-> clientHeight: 18
console.log("offsetHeight:", para.offsetHeight); //-> offsetHeight: 24
console.log(getBoundingClientRect(para));
