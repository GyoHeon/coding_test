var lengthOfLongestSubstring = function (s) {
  const n = s.length;
  const sArr = s.split("");
  if (n === 0) return 0;
  else answer = 1;

  let start = 0;
  let end = 1;
  const isNew = {};
  isNew[sArr[start]] = 1;
  while (end != n) {
    if (isNew[sArr[end]] > 0) {
      isNew[sArr[start]] -= 1;
      start++;
    } else {
      isNew[sArr[end]] = 1;
      end++;
      answer = Math.max(answer, end - start);
    }
  }
  return answer;
};
