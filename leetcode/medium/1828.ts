function countPoints(points: number[][], queries: number[][]): number[] {
  return queries.map((center) =>
    points.reduce(
      (acc, cur) => acc + Number(isIn(cur, center.slice(0, 2), center[2])),
      0
    )
  );
}

function isIn(point: number[], center: number[], radius: number) {
  const dis = (point[0] - center[0]) ** 2 + (point[1] - center[1]) ** 2;
  return dis <= radius ** 2;
}
