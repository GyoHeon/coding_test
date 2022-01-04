function solution(places) {
  let answer = [1, 1, 1, 1, 1];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let queue = [];

  for (let j = 0; j < 5; j++) {
    places[j] = places[j].map((x) => x.split(""));
    for (let k = 0; k < 5; k++) {
      for (let l = 0; l < 5; l++) {
        queue = [];
        if (places[j][k][l] === "P") {
          BFS(k, l, j);
          let newQueue = queue.slice();
          for (let m of newQueue) {
            if (places[j][m[0]][m[1]] === "O") BFS(...m, j);
          }
        }
      }
    }
  }

  function BFS(x, y, index) {
    places[index][x][y] = "O";
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (places[index][nx][ny] === "O") {
          queue.push([nx, ny]);
        } else if (places[index][nx][ny] === "P") {
          answer[index] = 0;
          break;
        }
      }
    }
  }
  return answer;
}
