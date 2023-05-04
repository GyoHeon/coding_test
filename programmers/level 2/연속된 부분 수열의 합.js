function solution(sequence, k) {
  let start = sequence.length;
  let end = sequence.length - 1;
  let sum = 0;

  while (start >= 0) {
    if (sum > k) {
      sum -= sequence[end];
      end--;
      continue;
    }
    if (sum < k) {
      start--;
      sum += sequence[start];
      continue;
    }
    if (sum === k) {
      const num = sequence[start];
      if (num === sequence[start - 1] && num === sequence[end]) {
        start = sequence.indexOf(num);
        end = start + k / num - 1;
      }
      return [start, end];
    }
  }
  return [start, end];
}
