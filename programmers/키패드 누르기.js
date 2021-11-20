function solution(numbers, hand) {
  let l = 0;
  let r = 0;
  let nowLeft = 10;
  let nowRight = 12;
  let answer = "";

  // 오른손잡이, 왼손잡이 페널티
  hand === "left" ? (r = 0.5) : (l = 0.5);

  for (let i of numbers) {
    // 0을 11로
    i === 0 ? (i = 11) : null;
    // 무조건 왼손으로 누르는 경우
    if (i === 1 || i === 4 || i === 7) {
      answer += "L";
      nowLeft = i;
      // 무조건 오른손으로 누르는 경우
    } else if (i === 3 || i === 6 || i === 9) {
      answer += "R";
      nowRight = i;
      // 왼손, 오른손 결정
    } else {
      // 왼손이 더 가까운 경우
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
      }
      // 오른손이 더 가까운 경우
      else {
        answer += "R";
        nowRight = i;
      }
    }
  }
  return answer;
}
