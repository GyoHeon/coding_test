function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  let idx = 0;
  while (idx < intervals.length - 1) {
    if (intervals[idx][1] >= intervals[idx + 1][0]) {
      const temp = [
        intervals[idx][0],
        Math.max(intervals[idx][1], intervals[idx + 1][1]),
      ];
      intervals.splice(idx, 2, temp);
    } else idx++;
  }

  return intervals;
}
