function solution(score) {
  const arr = score.map((x) => x[0] + x[1]);
  const newArr = [...arr].sort((a, b) => b - a);
  return arr.map((x) => newArr.indexOf(x) + 1);
}
