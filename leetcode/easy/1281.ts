function subtractProductAndSum(n: number): number {
  const arr = n.toString().split("").map(Number);
  return (
    arr.reduce((acc, cur) => acc * cur, 1) - arr.reduce((acc, cur) => acc + cur)
  );
}
