var rotate = function (matrix) {
  const n = matrix.length;
  const newArr = Array.from(Array(n), () => Array(n).fill(0));
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      newArr[i][n - j - 1] = matrix[j][i];
    }
  }
  newArr.forEach((col, idx) => (matrix[idx] = [...col]));
};
