function solution(n) {
  let answer = 1;
  for (let i = 1; i < n; i++) answer = newAnswer(answer + 1);
  return answer;
}

const newAnswer = (num) => {
  while (num % 3 === 0 || num.toString().split("").includes("3")) num++;
  return num;
};
