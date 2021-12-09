var inputs = require("fs").readFileSync("/dev/stdin").toString().split(" ");

console.log(inputs[1] * 2 - inputs[0]);
