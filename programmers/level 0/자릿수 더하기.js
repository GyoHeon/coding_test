function solution(n) {
  return n
    .toString()
    .split("")
    .map((x) => Number(x))
    .reduce((cur, acc) => cur + acc, 0);
}
