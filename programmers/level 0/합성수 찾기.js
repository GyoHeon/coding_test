function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (!(i % j)) {
        answer++;
        break;
      }
    }
  }
  return answer;
}
