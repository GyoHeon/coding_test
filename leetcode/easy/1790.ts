function areAlmostEqual(s1: string, s2: string): boolean {
  const diff: number[] = [];

  s1.split("").forEach((s, idx) => {
    if (s === s2[idx]) return;
    diff.push(idx);
  });

  if (diff.length === 2) {
    if (s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]]) return true;
  }
  return diff.length === 0;
}
