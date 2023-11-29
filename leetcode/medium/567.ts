function checkInclusion(s1: string, s2: string): boolean {
  const need = s1.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  const window = s1.split("").reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});
  const validLen = Object.keys(need).length;

  let left = 0;
  let right = 0;
  let valid = 0;

  while (right < s2.length) {
    const addStr = s2[right];
    right++;

    if (need[addStr]) {
      window[addStr]++;
      if (window[addStr] === need[addStr]) {
        valid++;
      }
    }

    while (right - left >= s1.length) {
      if (valid === validLen) return true;

      const deleteStr = s2[left];
      left++;

      if (need[deleteStr]) {
        if (window[deleteStr] === need[deleteStr]) {
          valid--;
        }
        window[deleteStr]--;
      }
    }
  }

  return false;
}
