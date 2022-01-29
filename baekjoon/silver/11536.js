const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on("line", function (line) {
  inputs.push(line);
}).on("close", function () {
  solution(inputs);
  process.exit();
});

function solution(inputs) {
  const n = Number(inputs.shift());
  const originArr = [...inputs];
  const inputsSorted = [...inputs.sort()];
  const inputsReversed = [...inputs.sort().reverse()];

  let [inc, dec] = [true, true];

  for (let i = 0; i < n; i++) {
    if (originArr[i] !== inputsSorted[i]) inc = false;
    if (originArr[i] !== inputsReversed[i]) dec = false;
  }

  if (inc) console.log("INCREASING");
  else if (dec) console.log("DECREASING");
  else console.log("NEITHER");
}
