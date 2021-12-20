function solution(lottos, win_nums) {
  let zero = 0;
  let sum = 0;
  for (let i in lottos) {
    if (lottos[i] === 0) {
      zero += 1;
    } else if (win_nums.includes(lottos[i])) {
      sum += 1;
    }
  }
  let answer = [sum + zero ? 7 - sum - zero : 6, sum ? 7 - sum : 6];
  return answer;
}
