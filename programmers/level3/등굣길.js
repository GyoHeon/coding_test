function solution(m, n, puddles) {
  const dp = Array(m)
    .fill(true)
    .map(() => Array(n).fill(1));

  puddles.forEach(([ni, mi]) => {
    dp[ni - 1][mi - 1] = false;
    if (mi === 1) {
      for (let i = ni; i < m; i++) {
        dp[i][0] = false;
      }
    }
    if (ni === 1) {
      for (let i = mi; i < n; i++) {
        dp[0][i] = false;
      }
    }
  });

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (dp[i][j] === false) {
        dp[i][j] = 0;
      } else {
        const left = dp[i - 1][j];
        const up = dp[i][j - 1];

        dp[i][j] = (left + up) % 1000000007;
      }
    }
  }

  return dp[m - 1][n - 1];
}
