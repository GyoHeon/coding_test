var inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

console.log(inputs[0] * (inputs[1] - 1) + 1);
