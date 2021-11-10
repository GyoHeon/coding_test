function solution(N, lost, reserve) {
  let total = {};
  for (let i = 1; i <= N; i++) {
    total[i] = 1;
  }
  for (let i of lost) {
    total[i]--;
  }
  for (let i of reserve) {
    total[i]++;
  }
  for (let i = 1; i <= N; i++) {
    if (total[i] == 2) {
      if (total[i - 1] == 0) {
        total[i - 1] = 1;
        total[i] = 1;
      } else if (total[i + 1] == 0) {
        total[i + 1] = 1;
        total[i] = 1;
      } else total[i] = 1;
    }
  }
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b);

  return sumValues(total);
}
