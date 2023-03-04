function maximumWealth(accounts: number[][]): number {
  let max = 0;
  accounts.forEach((account) => {
    const sum = account.reduce((acc, cur) => acc + cur);
    max = Math.max(max, sum);
  });
  return max;
}
