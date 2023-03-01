function arraySign(nums: number[]): number {
  const sum: number = nums.reduce((acc, cur) => acc * cur, 1);
  if (sum < 0) return -1;
  if (sum) return 1;
  return 0;
}
