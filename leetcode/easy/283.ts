function moveZeroes(nums: number[]): void {
  let idx = 0;
  let max = nums.length;
  while (idx < max) {
    if (!nums[idx]) {
      nums.splice(idx, 1);
      nums.push(0);
      max--;
    } else {
      idx++;
    }
  }
}
