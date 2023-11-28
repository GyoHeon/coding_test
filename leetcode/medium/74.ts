function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length;
  const m = matrix[0].length;

  let left = 0;
  let right = n * m - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const nowN = Math.floor(mid / m);
    const nowM = mid % m;
    const nowNum = matrix[nowN][nowM];

    if (nowNum === target) {
      return true;
    } else if (nowNum > target) {
      right = mid - 1;
    } else if (nowNum < target) {
      left = mid + 1;
    }
  }

  return false;
}
