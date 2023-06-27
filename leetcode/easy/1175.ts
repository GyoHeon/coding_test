function numPrimeArrangements(n: number): number {
  let answer = 1;
  const arr = Array(n + 1).fill(1);

  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      let idx = i * 2;
      while (idx <= n) {
        arr[idx] = 0;
        idx += i;
      }
    }
  }

  let primeNums = arr.reduce((acc, cur) => acc + cur, -2);
  let nonPrimeNums = n - primeNums;

  while (primeNums || nonPrimeNums) {
    if (primeNums) {
      answer *= primeNums;
      primeNums--;
    }
    if (nonPrimeNums) {
      answer *= nonPrimeNums;
      nonPrimeNums--;
    }
    answer %= 1e9 + 7;
  }

  return answer;
}
