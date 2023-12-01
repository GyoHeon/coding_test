function jump(nums: number[]): number {
  const len = nums.length;
  const answer = Array(len).fill(len);
  answer[0] = 0;

  for (let i = 0; i < len; i++) {
    const num = nums[i];

    for (let j = i + 1; j <= Math.min(i + num, len - 1); j++) {
      answer[j] = Math.min(answer[j], answer[i] + 1);
    }
  }

  return answer[len - 1];
}
