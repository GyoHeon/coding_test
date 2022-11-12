function solution(board) {
  let answer = 0;
  const len = board.length;
  const move1 = [-1, 1, -1 - len, -len, 1 - len, -1 + len, len, 1 + len];
  const move2 = [1, -len, 1 - len, len, 1 + len];
  const move3 = [-1, -1 - len, -len, -1 + len, len];
  const newArr = board.flat();
  for (let i = 0; i < len ** 2; i++) {
    if (newArr[i] === 1) {
      if (i % len === 0) move = move2;
      if (i % len === len - 1) move = move3;
      else move = move1;
      for (const k of move) {
        const j = k + i;
        if (j >= 0 && j < len ** 2 && newArr[j] !== 1) {
          newArr[j] = 2;
        }
      }
    }
  }
  for (const k of newArr) {
    if (k === 0) answer++;
  }
  return answer;
}
