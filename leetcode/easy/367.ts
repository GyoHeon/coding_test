function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;

  while (left < right) {
    const mid = Math.ceil((right + left) / 2);
    const area = mid ** 2;
    if (area === num) {
      return true;
    }
    if (area > num) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return false;
}
