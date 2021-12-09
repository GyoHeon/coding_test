var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

var inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .match(/[^\n$]+/g);

function result(A, B) {
  let arrA = A.split(" ")
    .map((x) => parseInt(x))
    .sort((a, b) => a - b);

  let arrB = B.split(" ")
    .map((x) => parseInt(x))
    .sort((a, b) => a - b);

  return arrA.reduce((acc, _, i) => (acc += arrA[i] * arrB[i]), 0);
}

console.log(result(inputs[1], inputs[2]));
