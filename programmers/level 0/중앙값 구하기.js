function solution(array) {
  return array.sort((a, b) => a - b)[(array.length - 1) / 2];
}
