function solution(n, k) {
  const bev = k - parseInt(n / 10) >= 0 ? k - parseInt(n / 10) : 0;
  return n * 12000 + bev * 2000;
}
