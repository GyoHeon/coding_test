function largestOddNumber(num: string): string {
  const oddIdx = num.split("").reduce((acc, cur, idx) => {
    if (+cur % 2) return idx;
    return acc;
  }, -1);

  return num.slice(0, oddIdx + 1);
}
