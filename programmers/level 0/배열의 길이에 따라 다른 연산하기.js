function solution(arr, n) {
  return arr.map((num, idx, ar) => {
    if (ar.length % 2) {
      if (idx % 2) return num;
      return num + n;
    }
    if (idx % 2) return num + n;
    return num;
  });
}
