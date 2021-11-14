function solution(board, moves) {
  let answer = [];
  let result = 0;

  board = board[0].map((_, colIndex) => board.map((row) => row[colIndex]));
  for (let i in board) {
    board[i] = board[i].filter((num) => num > 0);
  }
  for (let i of moves) {
    let puppy = board[i - 1].shift();
    puppy ? null : (puppy = 0);
    if (answer[answer.length - 1] === puppy) {
      result += 2;
      answer.pop();
      puppy = false;
    } else if (!puppy) {
      continue;
    } else {
      answer.push(puppy);
    }
  }
  return result;
}
