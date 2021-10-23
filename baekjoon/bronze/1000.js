var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf8");
var datas = input.split(" ").map(Number);

console.log(datas[0] + datas[1]);
