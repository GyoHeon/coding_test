function solution(hp) {
  let answer = 0;
  const atts = [5, 3, 1];
  const allNum = atts.forEach((att) => {
    const num = parseInt(hp / att);
    hp -= num * att;
    answer += num;
  });
  return answer;
}
