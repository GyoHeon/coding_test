function solution1(absolutes, signs) {
  let answer = 0;
  for (let i in absolutes) {
    answer += absolutes[i] * (signs[i] ? 1 : -1);
  }
  return answer;
}

function solution2(absolutes, signs) {
  let answer = absolutes.reduce(
    (acc, _, i) => (acc += absolutes[i] * (signs[i] ? 1 : -1)),
    0
  );
  return answer;
}
