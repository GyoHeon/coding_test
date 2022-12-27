function solution(n) {
  const answer = Array(parseInt((n + 1) / 2)).fill(1);
  return answer.map((_, idx) => idx * 2 + 1);
}
