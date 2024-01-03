function numberOfBeams(bank: string[]): number {
  const laser = bank
    .map((row) => row.replaceAll("0", "").length)
    .filter((len) => len);

  let sum = 0;
  for (let i = 0; i < laser.length - 1; i++) {
    sum += laser[i] * laser[i + 1];
  }

  return sum;
}
