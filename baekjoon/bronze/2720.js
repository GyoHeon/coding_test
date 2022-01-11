var inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = inputs.shift();

const coin = [25, 10, 5, 1];
const change = [];

for (let i = 0; i < n; i++) {
  let money = inputs[i];
  let answer = ``;
  for (let j of coin) {
    answer += `${Math.floor(money / j)} `;
    money = money % j;
  }
  console.log(answer);
}
