const graph = {
  a: ["b", "c"],
  b: ["a", "d"],
  c: ["a", "g", "h", "i"],
  d: ["b", "d", "e", "f"],
  e: ["d"],
  f: ["d"],
  g: ["c"],
  h: ["c"],
  i: ["c", "j"],
  j: ["i"],
};
// NORMAL DFS
function DFS(graph, startNode) {
  let visited = [];
  let needVisit = [];
  needVisit.push(startNode);

  while (needVisit.length) {
    let node = needVisit.pop();
    if (visited.indexOf(node) === -1) {
      visited.push(node);
      needVisit = needVisit.concat(graph[node]);
    }
  }
  return visited;
}

// RECURSIVE DFS
function recursiveDFS(graph, v, visited) {
  visited[v] = true;
  for (let i of graph[v]) {
    if (visited.indexOf(i) === -1) {
      recursiveDFS(graph, i, visited);
    }
  }
}

// BFS
// # need_visit queue
// def bfs(graph, start_node):
//     visited, need_visit = [], []

//     need_visit.append(start_node)

//     while need_visit:
//         node = need_visit.pop(-1)
//         if node not in visited:
//             visited.append(node)
//             need_visit.extend(graph[node])

//     return visited

// 2D array graph
// DFS

// BFS
function BFS() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

// BFS 2D Array
function BFS() {
  let answer = 0;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, -1, 1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();
          for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
}
