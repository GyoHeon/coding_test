function solution(n, edge) {
  const graph = edge.reduce((G, [from, to]) => {
    G[from] = (G[from] || []).concat(to);
    G[to] = (G[to] || []).concat(from);
    return G;
  }, {});

  let needVisit = [1];
  const answer = [[1]];
  const visit = [];

  while (needVisit.length) {
    let node = [...needVisit];
    needVisit = [];
    for (let i of node) {
      if (visit.indexOf(i) === -1) {
        visit.push(i);
        for (let j of graph[i]) {
          if (visit.indexOf(j) === -1 && node.indexOf(j) === -1) {
            needVisit.push(j);
          }
        }
      }
    }
    answer.push(needVisit);
  }
  return Array.from(new Set(answer[answer.length - 2])).length;
}

const n = 6;
const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(n, edge));
