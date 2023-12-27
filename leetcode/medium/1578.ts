function minCost(colors: string, neededTime: number[]): number {
  let sum = 0;
  let left = 0;
  let right = 0;
  let now = colors[left];

  while (left < colors.length) {
    right++;
    const temp = colors[right];

    if (now !== temp) {
      if (right - left > 1) {
        const arr = neededTime.slice(left, right);
        const max = Math.max(...arr);
        sum += arr.reduce((acc, cur) => acc + cur) - max;
      }
      left = right;
      now = temp;
    }
  }

  return sum;
}
