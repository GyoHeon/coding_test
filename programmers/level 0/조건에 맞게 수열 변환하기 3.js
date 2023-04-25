function solution(arr, k) {
  return arr.map((a) => (k % 2 ? a * k : a + k));
}
