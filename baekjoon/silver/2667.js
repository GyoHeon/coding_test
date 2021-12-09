let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = inputs.shift();
inputs = inputs.map((x) => x.split("").map((x) => parseInt(x)));

let answer = 0;
let apart = 1;
let aparts = [];
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

function DFS(x, y) {
  inputs[x][y] = 0;
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n && inputs[nx][ny] === 1) {
      apart++;
      DFS(nx, ny);
    }
  }
  return apart;
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (inputs[i][j] === 1) {
      answer++;
      aparts.push(DFS(i, j));
    }
    apart = 1;
  }
}
aparts.sort((a, b) => a - b);
console.log(answer);
aparts.forEach((x) => console.log(x));
