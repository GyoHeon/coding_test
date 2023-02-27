function hammingWeight(n: number): number {
  let answer = 0;
  while (n) {
    if (n % 2) {
      n = (n - 1) / 2;
      answer++;
    } else while (!(n % 2)) n /= 2;
  }

  return answer;
}
