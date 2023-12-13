function minInsertions(s: string): number {
  const len = s.length;
  const dp = Array(len)
    .fill(true)
    .map(() => Array(len).fill(0));

  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[0][len - 1];
}
