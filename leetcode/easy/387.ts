function firstUniqChar(s: string): number {
  const obj: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    const temp = s[i];
    if (obj[temp] === undefined) {
      obj[temp] = i;
    } else {
      obj[temp] = -1;
    }
  }

  const values = Object.values(obj).filter((x) => x > -1);

  return values.length ? Math.min(...values) : -1;
}
