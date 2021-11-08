function solution(absolutes, signs) {
  let answer = 0;
  for (let i in absolutes) {
    answer += absolutes[i] * (signs[i] ? 1 : -1);
  }
  return answer;
}
