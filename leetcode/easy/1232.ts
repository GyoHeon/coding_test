function checkStraightLine(coordinates: number[][]): boolean {
  const inc =
    (coordinates[0][1] - coordinates[1][1]) /
    (coordinates[0][0] - coordinates[1][0]);

  for (let i = 2; i < coordinates.length; i++) {
    if (Math.abs(inc) === Infinity) {
      if (coordinates[0][0] !== coordinates[i][0]) return false;
    } else if (
      (coordinates[0][0] - coordinates[i][0]) * inc !==
      coordinates[0][1] - coordinates[i][1]
    )
      return false;
  }

  return true;
}
