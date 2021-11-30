var inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .match(/[^\n$]+/g);

const fibo = [1, 0, 1];
for (let i = 3; i <= 41; i++) fibo[i] = fibo[i - 1] + fibo[i - 2];

for (let i = 1; i <= inputs[0]; i++)
  console.log(
    fibo.slice(parseInt(inputs[i]), parseInt(inputs[i]) + 2).join(" ")
  );
