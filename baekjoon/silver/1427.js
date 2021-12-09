var a = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("")
  .sort()
  .reverse()
  .join("");
console.log(a);
