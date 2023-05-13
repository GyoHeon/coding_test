const obj = {
  "=": "=",
  "!": "",
};

function solution(ineq, eq, n, m) {
  return +eval(`${n + ineq + obj[eq] + m}`);
}
