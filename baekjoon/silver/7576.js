let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

inputs = inputs.map((x) => x.split(" ").map(Number));
const size = inputs.shift();
const n = size[0];
const m = size[1];
let answer = -1;

let needVisit = [];
const visited = [];
const block = [];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (inputs[i][j] === 1) needVisit.push([i, j]);
    else if (inputs[i][j] === -1) block.push([i, j]);
  }
}

function BFS(x, y) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < m && ny >= 0 && ny < n && inputs[nx][ny] === 0) {
      inputs[nx][ny] = 1;
      needVisit.push([nx, ny]);
    }
  }
}

while (needVisit.length) {
  let queue = needVisit;
  needVisit = [];
  for (let i of queue) {
    visited.push(i);
    BFS(...i);
  }
  answer++;
}

if (visited.length + block.length === n * m) console.log(answer);
else console.log(-1);
