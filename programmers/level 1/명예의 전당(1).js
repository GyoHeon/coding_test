function solution(k, score) {
  let answer = [];
  return score.map((num) => {
    if (answer.length === k) {
      if (num > answer.at(-1)) {
        answer.pop();
        answer.push(num);
        answer.sort((a, b) => b - a);
      }
    } else {
      answer.push(num);
      answer.sort((a, b) => b - a);
    }
    return answer.at(-1);
  });
}
