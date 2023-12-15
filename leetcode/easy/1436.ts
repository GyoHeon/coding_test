function destCity(paths: string[][], i = 0): string {
  const end = paths[i][1];

  const nextI = paths.findIndex(([s]) => s === end);
  if (nextI === -1) {
    return end;
  }

  return destCity(paths, nextI);
}
