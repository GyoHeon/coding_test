let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));

const hor = inputs[2] / 2 > inputs[0] ? inputs[0] : inputs[2] - inputs[0];
const ver = inputs[3] / 2 > inputs[1] ? inputs[1] : inputs[3] - inputs[1];

console.log(hor < ver ? hor : ver);
