function imageSmoother(img: number[][]): number[][] {
  const n = img.length;
  const m = img[0].length;

  function aveg(k: number, l: number) {
    const arr: number[] = [];
    for (let ni = k - 1; ni <= k + 1; ni++) {
      if (ni >= 0 && ni < n) {
        for (let mj = l - 1; mj <= l + 1; mj++) {
          if (mj >= 0 && mj < m) {
            arr.push(img[ni][mj]);
          }
        }
      }
    }
    return Math.floor(arr.reduce((acc, cur) => acc + cur) / arr.length);
  }

  return img.map((row, i) => row.map((_, j) => aveg(i, j)));
}
