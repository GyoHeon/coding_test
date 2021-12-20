function solution1(a, b) {
  let answer = 0;
  for (let i in a) {
    answer += a[i] * b[i];
  }
  return answer;
}

function solution2(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
