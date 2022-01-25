let arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(arr[0]);

for (let i = 1; i <= n; i++) {
  console.log(
    arr[i]
      .split(" ")
      .map(Number)
      .reduce((cum, cur) => cum + cur, 0)
  );
}
