function solution(dots) {
  let answer = 0;
  dots.forEach((x) => {
    const width = x[0] - dots[3][0];
    const height = x[1] - dots[3][1];
    const area = width * height;
    if (width * height) answer = Math.abs(area);
  });
  return answer;
}
