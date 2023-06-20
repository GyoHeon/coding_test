function getAverages(nums: number[], k: number): number[] {
  const answer: number[] = [];
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    let average = -1;
    if (i + k < nums.length) {
      sum += nums[i + k];
    }
    if (i - k > 0) {
      sum -= nums[i - k - 1];
    }
    if (i + k < nums.length && i - k >= 0) {
      average = Math.floor(sum / (k * 2 + 1));
    }
    answer.push(average);
  }

  return answer;
}
