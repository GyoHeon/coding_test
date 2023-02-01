var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    const temp = nums.slice(i + 1, i + k + 1);
    if (temp.includes(nums[i])) return true;
  }
  return false;
};
