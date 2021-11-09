function solution(num) {
  let count = 0;
  while (num - 1) {
    num % 2 ? (num = num * 3 + 1) : (num /= 2);
    count++;
    if (count > 500) {
      count = -1;
      break;
    }
  }
  return count;
}
