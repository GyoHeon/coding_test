function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let queue = [[0, 0]];
  let answer = 1;

  function BFS(x, y) {
    maps[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }

  outer: while (true) {
    let visited = queue;
    queue = [];

    for (let i of visited) {
      if (i[0] === n - 1 && i[1] === m - 1) {
        return answer;
      } else {
        BFS(...i);
      }
    }
    answer++;
    if (queue.length === 0) {
      return -1;
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
