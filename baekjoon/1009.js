// let inputs = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

let inputs = ["3", "2 4", "4 4", "8 8"];
const n = parseInt(inputs.shift());

function solution(a, b) {
  let multi = 1;
  if (b === 0) b = 0;
  else if (b % 4 === 0) b = 4;
  else b %= 4;
  for (let i = 0; i < b; i++) multi *= a;
  return multi % 10;
}

for (let i = 0; i < n; i++) {
  const nums = inputs
    .shift()
    .split(" ")
    .map((x) => parseInt(x));
  const answer = solution(nums[0], nums[1]);
  console.log(answer === 0 ? 10 : answer);
}
