function minOperations(nums: number[]): number {
  const obj: { [key: number]: number } = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;

    return acc;
  }, {});

  let sum = 0;

  for (let i of Object.values(obj)) {
    if (i === 1) return -1;

    const temp = Math.floor(i / 3);

    sum += (i % 3 ? 1 : 0) + temp;
  }

  return sum;
}
