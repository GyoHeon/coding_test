function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      const temp = [...land[i - 1]];
      temp.splice(j, 1);
      land[i][j] += Math.max(...temp);
    }
  }

  return Math.max(...land.at(-1));
}
