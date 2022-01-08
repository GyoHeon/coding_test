var removeDuplicates = function (nums) {
  const len = nums.length;
  for (let i = len; i > 0; i--) {
    if (nums[i] === nums[i - 1]) nums.splice(i - 1, 1);
  }
  return nums.length;
};

const nums = [1, 1, 2];

console.log(removeDuplicates(nums));
