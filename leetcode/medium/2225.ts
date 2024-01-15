function findWinners(matches: number[][]): number[][] {
  const players: number[] = [];
  const res: number[][] = [[], []];

  matches.forEach(([w, l]) => {
    if (!players[w]) players[w] = 0;
    if (players[l] !== undefined) {
      players[l]++;
    } else {
      players[l] = 1;
    }
  });

  players.forEach((val, idx) => {
    if (val === 0) {
      res[0].push(idx);
    }
    if (val === 1) {
      res[1].push(idx);
    }
  });

  return res;
}
