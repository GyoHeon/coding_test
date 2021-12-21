var inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(inputs);
let s = 0;
let k = 0;

for (let i of inputs) {
  s += i;
  k += s;
}
console.log(k);
