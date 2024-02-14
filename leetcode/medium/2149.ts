function rearrangeArray(nums: number[]): number[] {
  const posStack: number[] = [];
  const negStack: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const isPos = nums[i] > 0;
    if (isPos) {
      posStack.push(nums[i]);
    } else {
      negStack.push(nums[i]);
    }
  }

  const answer: number[] = [];

  let isPos = true;
  while (posStack.length || negStack.length) {
    if (isPos) {
      answer.push(posStack.pop());
    } else {
      answer.push(negStack.pop());
    }
    isPos = !isPos;
  }

  return answer;
}
