function solution(i, j, k) {
  let str = "";
  for (let s = i; s <= j; s++) {
    str = str.concat(s);
  }
  return str.split("").reduce((acc, cur) => {
    if (cur == k) return acc + 1;
    return acc;
  }, 0);
}
