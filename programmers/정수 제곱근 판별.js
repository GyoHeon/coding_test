function solution1(n) {
  return Number.isInteger(Math.pow(n, 0.5))
    ? Math.pow(Math.pow(n, 0.5) + 1, 2)
    : -1;
}

function solution2(n) {
  let num = Math.pow(n, 0.5);
  return Number.isInteger(num) ? Math.pow(num + 1, 2) : -1;
}
