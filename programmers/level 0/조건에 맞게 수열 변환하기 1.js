function solution(arr) {
  return arr.map((a) => (a >= 50 ? (a % 2 ? a : a / 2) : a % 2 ? a * 2 : a));
}
