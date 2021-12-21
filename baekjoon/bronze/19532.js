var l = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let y = parseInt((l[2] * l[3] - l[0] * l[5]) / (l[1] * l[3] - l[0] * l[4]));
let x = parseInt((l[4] * l[2] - l[1] * l[5]) / (l[4] * l[0] - l[1] * l[3]));

console.log(x, y);
