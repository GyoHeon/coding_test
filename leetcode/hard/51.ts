function solveNQueens(n: number): string[][] {
  const answer: string[][] = [];
  const board = Array.from(Array(n), () => Array(n).fill("."));

  function traceBack(board: string[][], row: number) {
    const n = board.length;
    if (row === n) {
      answer.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = "Q";
      traceBack(board, row + 1);
      board[row][col] = ".";
    }
  }

  traceBack(board, 0);

  return answer;
}

function isValid(board: string[][], row: number, col: number) {
  const n = board.length;
  for (let i = 0; i < n; i++) {
    if (board[i][col] === "Q") {
      return false;
    }
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") {
      return false;
    }
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") {
      return false;
    }
  }
  return true;
}
