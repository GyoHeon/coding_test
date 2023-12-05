function longestCommonSubsequence(text1: string, text2: string): number {
  const n = text1.length + 1;
  const m = text2.length + 1;
  const dp: number[][] = Array(n)
    .fill(true)
    .map(() => Array(m).fill(0));

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n - 1][m - 1];
}
