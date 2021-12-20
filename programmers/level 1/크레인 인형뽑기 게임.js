function solution(board, moves) {
  let answer = [];
  let result = 0;

  // 2D Array Transpose
  board = board[0].map((_, colIndex) => board.map((row) => row[colIndex]));
  // 0 다 삭제
  for (let i in board) {
    board[i] = board[i].filter((num) => num > 0);
  }
  for (let i of moves) {
    let doll = board[i - 1].shift();
    doll ? null : (doll = 0);
    // stack => 맞으면 2점 올리고 마지막 원소 제거
    if (answer[answer.length - 1] === doll) {
      result += 2;
      answer.pop();
      doll = false;
    } else if (!doll) {
      continue;
    } else {
      answer.push(doll);
    }
  }
  return result;
}
