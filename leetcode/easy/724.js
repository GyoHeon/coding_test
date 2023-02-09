const pivotIndex = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let temp = 0;
  for (let i in nums) {
    if (temp === sum - temp - nums[i]) return i;
    temp += nums[i];
  }
  return -1;
};
