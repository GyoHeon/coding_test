const obj = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
};

function isValidSudoku(board: string[][]): boolean {
  const v = board.map((row, idx) => board.map((row) => row[idx]));
  const semi = board.map((row, i) => {
    return board
      .slice((i % 3) * 3, ((i % 3) + 1) * 3)
      .map((line) =>
        line.slice(Math.floor(i / 3) * 3, Math.floor(i / 3) * 3 + 3)
      )
      .reduce((acc, cur) => [...acc, ...cur]);
  });
  for (let i = 0; i < 9; i++) {
    if (!isValid(board[i])) return false;
    if (!isValid(v[i])) return false;
    if (!isValid(semi[i])) return false;
  }

  return true;
}

function isValid(arr: (number | string)[]) {
  const temp = { ...obj };

  for (let i of arr) {
    if (i === ".") continue;
    if (temp[i]) return false;
    temp[i] = true;
  }

  return true;
}
