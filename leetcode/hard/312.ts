function maxCoins(nums: number[]): number {
  const newNums = [1, ...nums, 1];
  const len = newNums.length;
  const dp = Array(len)
    .fill(true)
    .map(() => Array(len).fill(0));

  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j <= len - 1; j++) {
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + newNums[i] * newNums[k] * newNums[j]
        );
      }
    }
  }

  return dp[0][len - 1];
}
