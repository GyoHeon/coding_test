function solution(numbers, hand) {
  let l = 0;
  let r = 0;
  hand === "left" ? (r = 0.5) : (l = 0.5);
  let nowLeft = 10;
  let nowRight = 12;
  let answer = "";
  for (let i of numbers) {
    i === 0 ? (i = 11) : null;
    if (i === 1 || i === 4 || i === 7) {
      answer += "L";
      nowLeft = i;
    } else if (i === 3 || i === 6 || i === 9) {
      answer += "R";
      nowRight = i;
    } else {
      if (
        Math.round(Math.abs(nowLeft - i) / 3) +
          (Math.abs(nowLeft - 11) % 3) +
          l <=
        Math.round(Math.abs(nowRight - i) / 3) +
          (Math.abs(nowRight - 2) % 3) +
          r
      ) {
        answer += "L";
        nowLeft = i;
      } else {
        answer += "R";
        nowRight = i;
      }
    }
  }
  return answer;
}
