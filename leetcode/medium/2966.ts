function divideArray(nums: number[], k: number): number[][] {
  const answer: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i] + k >= nums[i + 2]) {
      answer.push([nums[i], nums[i + 1], nums[i + 2]]);
    } else {
      return [];
    }
  }

  return answer;
}
