function solution(sizes) {
  let sizes1 = [];
  let sizes2 = [];
  for (const i of sizes) {
    if (i[0] > i[1]) {
      sizes1.push(i[0]);
      sizes2.push(i[1]);
    } else {
      sizes1.push(i[1]);
      sizes2.push(i[0]);
    }
  }
  return Math.max(...sizes1) * Math.max(...sizes2);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
