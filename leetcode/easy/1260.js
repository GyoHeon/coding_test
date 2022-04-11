var shiftGrid = function (grid, k) {
  const n = grid.length;
  const m = grid[0].length;

  const answer = Array.from(Array(n), () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      answer[(i + parseInt((j + k) / m)) % n][(j + k) % m] = grid[i][j];
    }
  }
  return answer;
};
