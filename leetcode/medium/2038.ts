const place = {
  A: 0,
  B: 1,
};

function winnerOfGame(colors: string): boolean {
  const [alice, bob] = colors.split("").reduce(
    (acc, cur, idx, arr) => {
      if (idx === 0 || idx >= colors.length - 1) {
        return acc;
      }
      if (cur === arr[idx - 1] && cur === arr[idx + 1]) {
        acc[place[cur]] += 1;
      }

      return acc;
    },
    [0, 0]
  );

  return alice > bob;
}
