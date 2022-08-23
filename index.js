function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  //i is still accessible outside the for loop! shouldn't be.
  console.log(i);
}

sayHello();
