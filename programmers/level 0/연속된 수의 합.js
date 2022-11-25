function solution(num, total) {
  const arr = Array(num).fill(0);
  const diff = (total - (num * (num - 1)) / 2) / num;
  return arr.map((_, index) => index + diff);
}
