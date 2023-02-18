function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const medium = Math.floor((end + start) / 2);
    const num = nums[medium];
    if (num === target) return medium;
    if (num < target) start = medium + 1;
    else end = medium - 1;
  }

  return -1;
}
