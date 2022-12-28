function solution(numbers) {
  const answer = [...numbers];
  answer.sort((a, b) => a - b);
  const left = answer[0] * answer[1];
  const right = answer[answer.length - 1] * answer[answer.length - 2];
  return left > right ? left : right;
}
