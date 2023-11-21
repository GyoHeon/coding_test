function coinChange(coins: number[], amount: number): number {
  const memos = Array(amount + 1).fill(amount + 1);
  memos[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        memos[i] = Math.min(memos[i], 1 + memos[i - coin]);
      }
    }
  }

  const answer = memos[amount];

  return answer === amount + 1 ? -1 : answer;
}
