function solution(n, k) {
  const answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}
