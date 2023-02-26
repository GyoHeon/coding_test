function countOdds(low: number, high: number): number {
  const diff = high - low;
  if (diff % 2) return (diff + 1) / 2;
  if (low % 2) return diff / 2 + 1;
  return diff / 2;
}
