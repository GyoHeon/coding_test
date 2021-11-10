function solution(nums) {
  let newSet = new Set(nums);
  return nums.length / 2 >= newSet.size ? newSet.size : nums.length / 2;
}
