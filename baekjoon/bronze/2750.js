var inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n = inputs.shift();

inputs.sort((a, b) => a - b).forEach((x) => console.log(x));
