const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let answer = `${Number(input[0])} is `;
  answer += Number(input[0]) % 2 ? "odd" : "even";
  console.log(answer);
});
