let [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 1;
for (let i = n; i > n - k; i--) {
  answer = (answer * i) / (n - i + 1);
}
console.log(answer);
