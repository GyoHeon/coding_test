function minPartitions(n: string): number {
  return n.split("").reduce((acc, cur) => Math.max(acc, +cur), 0);
}
