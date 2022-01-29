let [h, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

let total = h * 60 + m - 45;
total >= 0 ? null : (total += 1440);

m = total % 60;
h = parseInt(total / 60);

console.log(`${h} ${m}`);
