function solution(n) {
  n = Array.from(String(n), Number);
  return n.reduce((pre, cur) => pre + cur);
}
