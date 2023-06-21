function euclidean(a: number, b: number): number {
  if (b === 0) {
    return b;
  }
  return euclidean(b, a % b);
}
