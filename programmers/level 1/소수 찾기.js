function solution(n) {
  let arr = Array.from(Array(n + 1).fill(true)).fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * 2; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((x) => x).length;
}
