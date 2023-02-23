function twoSum(nums: number[], target: number): number[] {
  const obj = nums.reduce((acc: object, cur: number, index: number) => {
    acc[cur] = index;
    return acc;
  }, {});
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (obj[diff] && obj[diff] !== i) return [i, obj[diff]];
  }
  return [];
}
