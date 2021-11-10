function solution(N, stages) {
  let fail = {};
  let keySorted;
  for (let i = 1; i <= N + 1; i++) {
    fail[i * 1] = [0, 0];
  }
  for (let i of stages) {
    fail[i][0]++;
    fail[i][1]++;
  }
  for (let i = N + 1; i >= 2; i--) {
    fail[i - 1][1] += fail[i][1];
    fail[i] = fail[i][0] / fail[i][1];
  }
  fail[1] = fail[1][0] / fail[1][1];
  delete fail[N + 1];
  for (let key in fail) {
    if (Number.isNaN(fail[key])) fail[key] = 0;
  }
  keySorted = Object.keys(fail).sort((a, b) => fail[b] - fail[a]);
  keySorted = keySorted.map(function (x) {
    return parseInt(x, 10);
  });
  return keySorted;
}
