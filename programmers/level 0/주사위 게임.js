function solution(a, b) {
  const A = a % 2;
  const B = b % 2;
  if (!A && !B) return Math.abs(a - b);
  if (A && B) return a ** 2 + b ** 2;
  return 2 * (a + b);
}
