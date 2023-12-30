function rob(nums: number[]): number {
  const len = nums.length;
  const memo = Array(len + 2).fill(0);

  for (let i = len - 1; i >= 0; i--) {
    memo[i] = Math.max(memo[i + 1], nums[i] + memo[i + 2]);
  }

  return memo[0];
}
