var matrixReshape = function (mat, r, c) {
  const m = mat[0].length;
  if (r * c === mat.length * m) {
    const answer = Array.from(Array(r), () => Array(c).fill(0));
    mat.forEach((item1, idx1) =>
      item1.forEach(
        (item2, idx2) =>
          (answer[Math.floor((idx1 * m + idx2) / c)][(idx1 * m + idx2) % c] =
            item2)
      )
    );
    return answer;
  }
  return mat;
};

const matrixReshape = (mat, r, c) => {
  const m = mat[0].length;
  if (r * c === mat.length * m) {
    const answer = Array.from(Array(r), () => Array(c).fill(0));
    mat.forEach((item1, idx1) =>
      item1.forEach(
        (item2, idx2) =>
          (answer[Math.floor((idx1 * m + idx2) / c)][(idx1 * m + idx2) % c] =
            item2)
      )
    );
    return answer;
  }
  return mat;
};
