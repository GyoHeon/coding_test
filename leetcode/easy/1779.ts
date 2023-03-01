function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let answer = -1;
  let diff = Infinity;
  const arr: Array<number[] | false> = points.map((point) => {
    if (point[0] === x || point[1] === y) return point;
    return false;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      const temp = manhattanDis([x, y], arr[i] as number[]);
      if (temp < diff) {
        diff = temp;
        answer = i;
      }
    }
  }
  return answer;
}

const manhattanDis = (point1: number[], point2: number[]): number =>
  ((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2) ** 0.5;
