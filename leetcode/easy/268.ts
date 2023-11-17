function missingNumber(nums: number[]): number {
  const len = nums.length;
  const comSum = (len * (len + 1)) / 2;
  const realSum = nums.reduce((acc, cur) => acc + cur);

  return comSum - realSum;
}
