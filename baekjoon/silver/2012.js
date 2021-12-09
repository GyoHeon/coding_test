let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = inputs.shift();
let sum = 0;

const sorter = (a, b) => a - b;
const parser = (x) => parseInt(x);
inputs = inputs.sort(sorter).map(parser);

for (let i = 0; i < n; i++) {
  sum += Math.abs(inputs[i] - (i + 1));
}

console.log(sum);
