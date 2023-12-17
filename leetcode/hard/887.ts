function superEggDrop(k: number, n: number): number {
  const dp: number[][] = Array(k + 1)
    .fill(true)
    .map(() => Array(n + 1).fill(0));

  let f = 0;

  while (dp[k][f] < n) {
    f++;
    for (let i = 1; i <= k; i++) {
      dp[i][f] = dp[i - 1][f - 1] + dp[i][f - 1] + 1;
    }
  }

  return f;
}
