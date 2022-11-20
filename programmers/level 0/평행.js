function solution(dots) {
  const inclis = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = dots.length - 1; j > i; j--) {
      const incli = Math.abs(
        (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0])
      );
      if (inclis.includes(incli)) return 1;
      else inclis.push(incli);
    }
  }
  return 0;
}
