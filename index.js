function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

console.log(randomPointOnCircle(2)); //-> { x: 1.4283266026152281, y: -1.3999582551853609 }
