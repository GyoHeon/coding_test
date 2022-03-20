var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  if (target > nums[end - 1]) return end;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return start;
};
