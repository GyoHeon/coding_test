let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let size = inputs.shift().split(" ").map(Number);
let n = size[0];
let m = size[1];
inputs = inputs.map((x) => x.split("").map((x) => parseInt(x)));

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let queue = [[0, 0]];
let answer = 1;

function BFS(x, y) {
  inputs[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < m && inputs[nx][ny] === 1) {
      inputs[nx][ny] = 0;
      queue.push([nx, ny]);
    }
  }
}

outer: while (true) {
  let visited = queue;
  queue = [];

  for (let i of visited) {
    if (i[0] === n - 1 && i[1] === m - 1) {
      break outer;
    } else {
      BFS(...i);
    }
  }
  answer++;
}

console.log(answer);
