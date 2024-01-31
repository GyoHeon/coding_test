function dailyTemperatures(temperatures: number[]): number[] {
  const answer = Array(temperatures.length).fill(0);
  const stack: { val: number; idx: number }[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1].val < temperatures[i]) {
      const temp = stack.pop() as { val: number; idx: number };
      answer[temp.idx] = i - temp.idx;
    }

    stack.push({ val: temperatures[i], idx: i });
  }

  return answer;
}
