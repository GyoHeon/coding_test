let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
inputs = inputs.split("\n").map((x) => x.split(" ").map(Number));
inputs.shift();
let answer = "";

inputs
  .sort((a, b) => (a[0] - b[0]) * 200001 + a[1] - b[1])
  .forEach((x) => (answer += `${x.join(" ")}\n`));

console.log(answer);
