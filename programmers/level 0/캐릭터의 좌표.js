const move = [
  {
    left: -1,
    right: 1,
    down: 0,
    up: 0,
  },
  {
    left: 0,
    right: 0,
    down: -1,
    up: 1,
  },
];

function solution(keyinput, board) {
  const answer = [0, 0];
  for (let i = 0; i < 2; i++) {
    answer[i] = keyinput.reduce((acc, cur) => {
      const newX = acc + move[i][cur];
      if (Math.abs(newX) < board[i] / 2) return newX;
      return acc;
    }, 0);
  }
  return answer;
}
