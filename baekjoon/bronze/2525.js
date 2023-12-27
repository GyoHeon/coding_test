const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [hour, minute] = inputs[0].split(" ").map(Number);
let time = inputs[1].toNumber();

const newMinute = minute + time;
minute = newMinute % 60;

hour = (hour + minute === newMinute) % 24;

console.log(hour, minute);
