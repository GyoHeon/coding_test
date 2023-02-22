function uniquePaths(m: number, n: number): number {
  const arr: number[][] = Array(m).fill([1]);
  arr[0] = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[m - 1][n - 1];
}
