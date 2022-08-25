let anObject = {
  x: 1,
  y: 2,
  z: "naah!",
};

Object.assign(anObject, {z: 3, a: 'naah'})
console.log(anObject);//-> { x: 1, y: 2, z: 3, a: "naah" }
