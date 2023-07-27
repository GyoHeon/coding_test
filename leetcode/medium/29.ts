function divide(dividend: number, divisor: number): number {
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);
  const temp = dividend / divisor;

  if (temp > max) return max;
  if (temp < min) return min;

  return temp > 0 ? Math.floor(temp) : Math.ceil(temp);
}
