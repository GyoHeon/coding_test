var input = require("fs").readFileSync("/dev/stdin");

const fibo = [0, 1];
for (let i = 2; i <= 45; i++) fibo[i] = fibo[i - 1] + fibo[i - 2];

console.log(fibo[parseInt(input)]);
