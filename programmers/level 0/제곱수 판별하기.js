function solution(n) {
  const root = n ** 0.5;
  return root === parseInt(root) ? 1 : 2;
}
