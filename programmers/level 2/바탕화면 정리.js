function solution(wallpaper) {
  let xMin = Infinity;
  let xMax = 0;
  let yMin = Infinity;
  let yMax = 0;
  wallpaper.forEach((line, yIdx) => {
    line.split("").forEach((point, xIdx) => {
      if (point === "#") {
        xMin = Math.min(xMin, xIdx);
        yMin = Math.min(yMin, yIdx);
        xMax = Math.max(xMax, xIdx + 1);
        yMax = Math.max(yMax, yIdx + 1);
      }
    });
  });

  return [yMin, xMin, yMax, xMax];
}
