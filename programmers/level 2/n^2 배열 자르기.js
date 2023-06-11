function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const num = Math.max(Math.floor(i / n), i % n) + 1;
    answer.push(num);
  }

  return answer;
}
