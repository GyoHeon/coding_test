let [n, inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs = inputs.split(" ");

console.log(inputs.filter((x) => x === n).length);
