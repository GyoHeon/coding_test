function solution(sides) {
  const long = Math.max(...sides);
  return sides.reduce((cur, acc) => cur + acc, 0) > long * 2 ? 1 : 2;
}
