function canMakeArithmeticProgression(arr: number[]): boolean {
  const newArr: number[] = arr.sort((a, b) => a - b);
  const diff: number = newArr[0] - newArr[1];
  for (let i = 0; i < newArr.length - 1; i++) {
    if (diff !== newArr[i] - newArr[i + 1]) return false;
  }
  return true;
}
