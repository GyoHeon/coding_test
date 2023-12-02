function maxEnvelopes(envelopes: number[][]): number {
  envelopes.sort(sort2D);
  const hArr = envelopes.map(([_, h]) => h);

  const dp = [];

  let answer = 0;
  for (let i = 0; i < hArr.length; i++) {
    const hNow = hArr[i];
    let left = 0;
    let right = answer;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const h = dp[mid];

      if (h < hNow) {
        left = mid + 1;
      } else if (h > hNow) {
        right = mid - 1;
      } else {
        right = mid - 1;
      }
    }

    if (left === answer) {
      answer++;
    }
    dp[left] = hNow;
  }

  return answer;
}

function sort2D(a: number[], b: number[]) {
  if (a[0] === b[0]) {
    return b[1] - a[1];
  }
  return a[0] - b[0];
}
