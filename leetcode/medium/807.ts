function maxIncreaseKeepingSkyline(grid: number[][]): number {
  let answer = 0;
  const len = grid.length;

  const twistedGrid = grid.map((_, idx) => {
    const newLine: number[] = [];
    for (let i = 0; i < len; i++) {
      newLine[i] = grid[i][idx];
    }
    return newLine;
  });

  for (let i = 0; i < len; i++) {
    const maxY = Math.max(...grid[i]);
    for (let j = 0; j < len; j++) {
      const maxX = Math.max(...twistedGrid[j]);

      answer += Math.min(maxX, maxY) - grid[i][j];
    }
  }

  return answer;
}
