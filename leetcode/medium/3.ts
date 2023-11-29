function lengthOfLongestSubstring(s: string): number {
  let answer = 0;

  const window = {};

  let left = 0;
  let right = 0;
  while (right < s.length) {
    const addStr = s[right];
    right++;

    window[addStr] = window[addStr] ? window[addStr] + 1 : 1;

    while (window[addStr] > 1) {
      const deleteStr = s[left];
      left++;
      window[deleteStr]--;
    }
    answer = Math.max(answer, right - left);
  }

  return answer;
}
