function diagonalSum(mat: number[][]): number {
  let answer = 0;

  for (let i = 0; i < mat.length; i++) {
    answer += mat[i][i];
    const right = mat.length - i - 1;
    if (right !== i) answer += mat[i][right];
  }

  return answer;
}
