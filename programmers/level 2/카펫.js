function solution(brown, yellow) {
  let total = brown + yellow;
  let i = 3;
  while (true) {
    if (total % i === 0) {
      let width = total / i;
      if ((width + i - 2) * 2 === brown) {
        return [width, i];
      }
    }
    i++;
  }
}
