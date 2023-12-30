function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  function robRange(start: number, end: number): number {
    const memo = Array(end + 2).fill(0);

    for (let i = end - 1; i >= start; i--) {
      memo[i] = Math.max(memo[i + 1], nums[i] + memo[i + 2]);
    }

    return memo[start];
  }

  return Math.max(robRange(0, nums.length - 1), robRange(1, nums.length));
}
