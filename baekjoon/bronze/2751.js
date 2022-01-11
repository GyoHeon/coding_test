let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
inputs.shift();

let answer = "";
inputs.sort((a, b) => a - b);
inputs.forEach((x) => (answer += `${x}\n`));
console.log(answer);
