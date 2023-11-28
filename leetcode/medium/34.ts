function searchRange(nums: number[], target: number): number[] {
  const answer = [-1, -1];

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (nums[left] === target) {
    answer[0] = left;
  }

  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (nums[left - 1] === target) {
    answer[1] = left - 1;
  }

  return answer;
}
