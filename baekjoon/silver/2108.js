let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs.shift();
inputs = inputs.map((x) => parseInt(x));

const len = inputs.length;
const arr = inputs.sort((a, b) => a - b);
const countsObj = arr.reduce((pv, cv) => {
  pv[cv] = (pv[cv] || 0) + 1;
  return pv;
}, {});
const countsArr = [];
for (let key in countsObj) countsArr.push([parseInt(key), countsObj[key]]);
countsArr.sort((a, b) => b[1] - a[1]);
const countsRes = countsArr.filter((a) => a[1] === countsArr[0][1]);
countsRes.sort((a, b) => b[0] - a[0]);

console.log(Math.round(arr.reduce((acc, x) => acc + x, 0) / len));
console.log(arr[(len - 1) / 2]);
if (countsRes.length === 1) console.log(countsRes[0][0]);
else console.log(countsRes[countsRes.length - 2][0]);
console.log(arr[len - 1] - arr[0]);
