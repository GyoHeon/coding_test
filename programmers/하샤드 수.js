function solution(x) {
  let sum = Array.from(String(x), Number);
  sum = sum.reduce((pre, cur) => pre + cur);
  return !(x % sum);
}
