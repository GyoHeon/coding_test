function minDistance(word1: string, word2: string): number {
  const n = word1.length;
  const m = word2.length;
  const dp: number[][] = Array(n + 1)
    .fill(true)
    .map(() => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (!i) dp[i][j] = j;
      else if (!j) dp[i][j] = i;
      else {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i][j - 1] + 1,
            dp[i - 1][j] + 1,
            dp[i - 1][j - 1] + 1
          );
        }
      }
    }
  }

  return dp[n][m];
}
