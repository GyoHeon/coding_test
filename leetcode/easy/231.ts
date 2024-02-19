function isPowerOfTwo(n: number): boolean {
  let num = 1;
  while (num <= n) {
    if (num === n) return true;
    num *= 4;
  }
  return num === n * 2;
}
