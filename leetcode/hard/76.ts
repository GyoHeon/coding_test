function minWindow(s: string, t: string): string {
  const need = t.split("").reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  const window = t.split("").reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});
  const validLen = Object.keys(need).length;

  let left = 0;
  let right = 0;
  let valid = 0;
  let start = 0;
  let len = Infinity;
  while (right < s.length) {
    const addStr = s[right];

    right++;

    if (need[addStr]) {
      window[addStr]++;
      if (window[addStr] === need[addStr]) {
        valid++;
      }
    }

    while (valid === validLen) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

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

  return len === Infinity ? "" : s.slice(start, start + len);
}
