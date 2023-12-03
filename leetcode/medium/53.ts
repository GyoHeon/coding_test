function maxSubArray(nums: number[]): number {
  const len = nums.length;
  if (!len) {
    return 0;
  }

  let dp_0 = nums[0];
  let answer = dp_0;

  for (let i = 1; i < len; i++) {
    const dp_1 = Math.max(nums[i], dp_0 + nums[i]);
    dp_0 = dp_1;
    answer = Math.max(answer, dp_1);
  }

  return answer;
}
