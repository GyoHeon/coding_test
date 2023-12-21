function maxWidthOfVerticalArea(points: number[][]): number {
  points.sort(([x1], [x2]) => x1 - x2);

  return points.reduce((acc, [cur], idx) => {
    if (idx !== 0) {
      acc = Math.max(acc, cur - points[idx - 1][0]);
    }
    return acc;
  }, -Infinity);
}
