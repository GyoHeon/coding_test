function findJudge(n: number, trust: number[][]): number {
  const answer = Array(n + 1).fill(1);
  answer[0] = 0;

  trust.forEach((node) => {
    answer[node[0]] = 0;
    if (answer[node[1]]) {
      answer[node[1]]++;
    }
  });

  const start = answer.indexOf(n);
  if (start === answer.lastIndexOf(n)) return start;

  return -1;
}
