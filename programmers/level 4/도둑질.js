function solution(money) {
  function recur(start, end) {
    const memo = Array(end + 2).fill(0);
    for (let i = end - 1; i >= start; i--) {
      memo[i] = Math.max(money[i] + memo[i + 2], memo[i + 1]);
    }

    return memo[start];
  }

  return Math.max(recur(1, money.length), recur(0, money.length - 1));
}
