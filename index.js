const calc = require("./calc.js");
// OR
const { add, subtract, divide, multiply } = require("./calc");

console.log("Howdy, world!");

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

console.log(calc.add(10, 20));
