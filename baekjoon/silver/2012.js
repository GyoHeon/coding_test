let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs.shift();
let sum = 0;

const sorter = (a, b) => a - b;
inputs = inputs.sort(sorter).map(Number);

sum = inputs.reduce((acc, x, i) => (acc += Math.abs(x - (i + 1))), 0);

console.log(sum);
