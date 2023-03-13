function titleToNumber(columnTitle: string): number {
  return columnTitle
    .split("")
    .reduce(
      (acc, cur, idx) =>
        acc + (cur.charCodeAt(0) - 64) * 26 ** (columnTitle.length - idx - 1),
      0
    );
}
