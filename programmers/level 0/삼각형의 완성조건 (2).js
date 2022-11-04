function solution(sides) {
  const min = Math.min(...sides);
  return 2 * min - 1;
}
