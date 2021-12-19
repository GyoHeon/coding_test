let input = require("fs")
  .readFileSync("backjoon/sample.txt")
  .toString()
  .trim()
  .split(" ");

const regEx = /dz=|c=|c-|d-|lj|nj|s=|z=/g;
input = input.replace(regEx, "*");

console.log(input.length);
