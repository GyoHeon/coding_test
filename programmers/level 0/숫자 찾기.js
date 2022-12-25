function solution(num, k) {
  const str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == k) return i + 1;
  }
  return -1;
}
