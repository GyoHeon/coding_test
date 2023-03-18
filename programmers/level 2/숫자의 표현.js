function solution(n) {
  let answer = 0;
  for (let i = 1; i <= (n * 2) ** 0.5; i++) {
    const sum = (i * (i + 1)) / 2;
    const temp = n - sum;
    if (!(temp % i)) answer++;
  }
  return answer;
}
