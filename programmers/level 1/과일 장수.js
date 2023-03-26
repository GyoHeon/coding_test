function solution(k, m, score) {
  let answer = 0;
  score = score.sort((a, b) => a - b);
  while (score.length) {
    const arr = [];
    for (let i = 0; i < m; i++) {
      arr.push(score.pop() || 0);
    }
    if (arr.length === m) {
      answer += arr[m - 1] * m;
    }
  }
  return answer;
}
