function change(amount: number, coins: number[]): number {
  const len = coins.length;
  const dp: number[][] = Array(len + 1)
    .fill(true)
    .map(() => Array(amount + 1).fill(0));

  for (let i = 0; i <= len; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i <= amount; i++) {
    dp[0][i] = 0;
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= coins[i - 1]) {
        dp[i][j] += dp[i][j - coins[i - 1]];
      }
    }
  }

  return dp[len][amount];
}
