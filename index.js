const calc = require("./calc.js");
// OR
const { add, subtract, divide, multiply } = require("./calc");

const axios = require("axios");

console.log("Howdy, world!");

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));

console.log(calc.add(10, 20));

// Pokemon API example

const url = "https://pokeapi.co/api/v2/pokemon/snorlax";

axios.get(url).then((resp) => {
  console.log(resp.data);
});

// async/await version
async function getSnorlax() {
  const res = await axios.get(url);
  const data = res.data;
  console.log(data);
}

getSnorlax();

// Alternative method
// axios.get(url).then(({ data }) => {
//   console.log("Fav:", data);
// });
