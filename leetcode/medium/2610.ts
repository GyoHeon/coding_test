function findMatrix(nums: number[]): number[][] {
  if (nums.length === 1) return [nums];

  nums = nums.sort((a, b) => a - b);
  const answer: number[][] = [[nums[0]]];

  let idx = 1;
  let tempIdx = 1;
  while (idx < nums.length) {
    const num = nums[idx];

    if (nums[idx - 1] === num) {
      if (answer[tempIdx]) {
        answer[tempIdx].push(num);
      } else {
        answer.push([num]);
      }
    } else {
      tempIdx = 0;
      answer[tempIdx].push(num);
    }
    idx++;
    tempIdx++;
  }

  return answer;
}
