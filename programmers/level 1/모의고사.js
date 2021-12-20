function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];
  let answer = [1, 2, 3];

  for (let i in answers) {
    if (first[i % 5] === answers[i]) score[0] += 1;
    if (second[i % 8] === answers[i]) score[1] += 1;
    if (third[i % 10] === answers[i]) score[2] += 1;
  }
  for (let j = 2; j >= 0; j--) {
    score[j] - Math.max(...score) ? answer.splice(j, 1) : null;
  }
  return answer;
}
