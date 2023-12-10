function transpose(matrix: number[][]): number[][] {
  const n = matrix.length;
  const m = matrix[0].length;

  const answer: number[][] = [];

  for (let i = 0; i < m; i++) {
    answer.push([]);
    for (let j = 0; j < n; j++) {
      answer[i].push(matrix[j][i]);
    }
  }

  return answer;
}
