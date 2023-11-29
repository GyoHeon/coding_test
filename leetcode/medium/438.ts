function findAnagrams(s: string, p: string): number[] {
  const need = p.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  const window = p.split("").reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});
  const validLen = Object.keys(need).length;

  const answer: number[] = [];

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s.length) {
    const addStr = s[right];
    right++;

    if (need[addStr]) {
      window[addStr]++;
      if (window[addStr] === need[addStr]) {
        valid++;
      }
    }

    while (right - left >= p.length) {
      if (valid === validLen) answer.push(left);

      const deleteStr = s[left];
      left++;

      if (need[deleteStr]) {
        if (window[deleteStr] === need[deleteStr]) {
          valid--;
        }
        window[deleteStr]--;
      }
    }
  }

  return answer;
}
