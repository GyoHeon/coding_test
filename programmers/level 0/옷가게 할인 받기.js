function solution(price) {
  let answer;
  const rate = [
    [500000, 0.8],
    [300000, 0.9],
    [100000, 0.95],
    [0, 1],
  ];
  for (let i = 0; i < rate.length; i++) {
    if (price >= rate[i][0]) {
      answer = rate[i][1] * price;
      break;
    }
  }
  return parseInt(answer);
}
