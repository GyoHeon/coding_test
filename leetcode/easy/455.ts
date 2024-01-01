function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let answer = 0;
  let gNum = 0;
  let sNum = 0;

  while (gNum < g.length && sNum < s.length) {
    if (g[gNum] <= s[sNum]) {
      answer++;
      sNum++;
    }
    gNum++;
  }

  return answer;
}
