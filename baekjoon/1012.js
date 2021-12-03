// var inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let inputs = ["1", "10 10 1", "5 5"];
const T = parseInt(inputs.shift());

for (let i = 0; i < T; i++) {
  const layout = inputs
    .shift()
    .split(" ")
    .map((x) => parseInt(x));
  const field = Array.from(Array(layout[1]), () => Array(layout[0]).fill(0));

  function findBaechoo(board) {
    let answer = 0;
    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

    function DFS(x, y) {
      field[x][y] = 0;
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (
          nx >= 0 &&
          nx < layout[1] &&
          ny >= 0 &&
          ny < layout[0] &&
          board[nx][ny] === 1
        ) {
          DFS(nx, ny);
        }
      }
    }

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === 1) {
          answer++;
          DFS(i, j);
        }
      }
    }
    return answer;
  }

  for (let j = 0; j < layout[2]; j++) {
    const bc = inputs
      .shift()
      .split(" ")
      .map((x) => parseInt(x));
    field[bc[1]][bc[0]] = 1;
  }
  console.log(findBaechoo(field));
}
