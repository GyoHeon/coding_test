function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((acc, cur) => acc + cur);

  if (sum < target || sum + target < 0 || (sum + target) % 2) return 0;

  const subS = (sum + target) / 2;

  function dp() {
    const memo = Array(nums.length + 1)
      .fill(true)
      .map(() => Array(subS + 1).fill(0));
    memo.forEach((row) => (row[0] = 1));

    for (let i = 1; i <= nums.length; i++) {
      for (let j = 0; j <= subS; j++) {
        if (j >= nums[i - 1]) {
          memo[i][j] = memo[i - 1][j] + memo[i - 1][j - nums[i - 1]];
        } else {
          memo[i][j] = memo[i - 1][j];
        }
      }
    }

    return memo[nums.length][subS];
  }

  return dp();
}
