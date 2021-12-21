var inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs.pop();

for (let i of inputs) {
  if (i === i.split("").reverse().join("")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
