function solution(price, money, count) {
  let answer = (((count + 1) * count) / 2) * price - money;
  return answer > 0 ? answer : 0;
}
