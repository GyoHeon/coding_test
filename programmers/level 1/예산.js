function solution(d, budget) {
  let cum = 0;
  let count = 0;
  for (let i of d.sort((a, b) => a - b)) {
    cum += i;
    if (cum <= budget) count++;
    else break;
  }
  return count;
}
