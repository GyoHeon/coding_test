function solution(array, n) {
  let diff = 100;
  let answer = n;
  array
    .sort((a, b) => a - b)
    .forEach((x) => {
      const temp = Math.abs(x - n);
      if (temp < diff) {
        diff = temp;
        answer = x;
      }
    });
  return answer;
}
