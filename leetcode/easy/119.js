var getRow = function (rowIndex) {
  const answer = [[1]];
  for (let i = 1; i <= rowIndex; i++) {
    answer[i] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        answer[i][j] = 1;
      } else {
        answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j];
      }
    }
  }
  return answer[rowIndex];
};
