function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //with let, it is no longer accessible
  console.log(i);
}

sayHello();
