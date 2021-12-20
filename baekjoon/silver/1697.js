// let inputs = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .trim()
//   .map(Number);

let inputs = [100000, 0];
const end = inputs[1];
let visited = Array.from(Array(100001).fill(false));
visited[inputs[0]] = true;
let needVisit = new Set([inputs[0]]);
let queue = [];
let answer = 0;

function BFS(x) {
  if (0 < x && x <= 100000) {
    visited[x - 1] = true;
    needVisit.add(x - 1);
  }
  if (0 <= x && x < 100000) {
    visited[x + 1] = true;
    needVisit.add(x + 1);
  }
  if (x <= 50000) {
    visited[x * 2] = true;
    needVisit.add(x * 2);
  }
}

while (true) {
  if (visited[end]) {
    console.log(answer);
    break;
  }
  queue = [...needVisit];
  needVisit = new Set();
  for (let i of queue) {
    BFS(i);
  }
  answer++;
}
