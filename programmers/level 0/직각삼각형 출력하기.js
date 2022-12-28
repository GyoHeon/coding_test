const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const starTower = (n) => {
  for (let i = 1; i <= n; i++) {
    let floor = "";
    for (let j = 1; j <= i; j++) {
      floor += "*";
    }
    console.log(floor);
  }
};

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  starTower(Number(input[0]));
});
