function numberOfMatches(n: number, sum?: number): number {
  if (!sum) sum = 0;

  if (n === 1) {
    return sum;
  }
  const matches = Math.floor(n / 2);
  const remain = n % 2;
  sum += matches;

  return numberOfMatches(matches + remain, sum);
}
