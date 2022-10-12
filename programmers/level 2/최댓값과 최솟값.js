function solution(s) {
  const strArr = s.split(" ");
  const min = Math.min(...strArr);
  const max = Math.max(...strArr);
  return `${min} ${max}`;
}
