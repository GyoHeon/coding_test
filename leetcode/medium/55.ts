function canJump(nums: number[]): boolean {
  let last = nums.length - 1;
  let idx = last - 1;

  for (; idx >= 0; idx--) {
    if (idx + nums[idx] >= last) {
      last = idx;
    }
  }

  return last === 0;
}
