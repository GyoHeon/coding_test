function solution(numbers) {
  return numbers.reduce((cur, acc) => cur + acc, 0) / numbers.length;
}
