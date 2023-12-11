function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftN = nums[left];
    const rightN = nums[right];
    const mid = right - Math.floor((right - left) / 2);
    const midN = nums[mid];

    if (midN === target) return mid;

    if (leftN > target) {
      if (midN > target && midN < leftN) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (rightN < target) {
      if (midN < target && midN > rightN) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (midN < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
