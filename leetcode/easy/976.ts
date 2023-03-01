function largestPerimeter(nums: number[]): number {
  const newNums = nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i > 1; i--) {
    if (newNums[i] < newNums[i - 1] + newNums[i - 2]) {
      return newNums[i] + newNums[i - 1] + newNums[i - 2];
    }
  }

  return 0;
}
