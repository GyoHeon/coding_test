function solution(numbers, n) {
  let answer = 0;
  let idx = 0;
  while (answer <= n) {
    answer += numbers[idx];
    idx++;
  }
  return answer;
}
