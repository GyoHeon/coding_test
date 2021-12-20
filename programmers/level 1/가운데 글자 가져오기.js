function solution(s) {
  let len = s.length;
  let mid =
    len % 2
      ? s.slice((len - 1) / 2, (len + 1) / 2)
      : s.slice(len / 2 - 1, len / 2 + 1);
  return mid;
}
