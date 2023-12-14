function isMatch(s: string, p: string): boolean {
  const dp = Array(s.length + 1)
    .fill(true)
    .map(() => Array(p.length + 1).fill(false));

  function recur(i: number, j: number) {
    if (j === p.length) {
      return i === s.length;
    }
    if (i === s.length) {
      if ((p.length - j) % 2) {
        return false;
      }
      for (let k = j; k + 1 < p.length; k += 2) {
        if (p[k + 1] !== "*") return false;
      }
      return true;
    }

    if (dp[i][j]) return dp[i][j];

    let res = false;
    if (s[i] === p[j] || p[j] === ".") {
      if (j < p.length - 1 && p[j + 1] === "*") {
        res = recur(i + 1, j) || recur(i, j + 2);
      } else {
        res = recur(i + 1, j + 1);
      }
    } else {
      if (j < p.length - 1 && p[j + 1] === "*") {
        res = recur(i, j + 2);
      }
    }
    dp[i][j] = res;

    return res;
  }

  return recur(0, 0);
}
