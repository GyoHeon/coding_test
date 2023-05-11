const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const answer = input[0]
    .split("")
    .map((s) => {
      if (s.toLowerCase() === s) {
        return s.toUpperCase();
      }
      return s.toLowerCase();
    })
    .join("");

  console.log(answer);
});
