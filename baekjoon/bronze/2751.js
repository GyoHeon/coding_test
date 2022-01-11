let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputs.sort((a, b) => a - b);
inputs.forEach((x) => console.log(x));
