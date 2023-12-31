function maxLengthBetweenEqualCharacters(s: string): number {
  let res = -1;
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) res = Math.max(res, j - i - 1);
    }
  }

  return res;
}
