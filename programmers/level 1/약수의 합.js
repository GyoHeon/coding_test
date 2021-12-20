function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) answer += i;
  }
  return answer;
}
