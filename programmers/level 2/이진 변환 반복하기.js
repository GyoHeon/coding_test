function solution(s) {
  let answer = s;
  let count = 0;
  let minusZero = 0;

  while (answer !== "1") {
    count++;
    const beforeLength = answer.length;
    answer = eval(answer.split("").join("+"));
    minusZero += beforeLength - answer;
    answer = answer.toString(2);
  }
  return [count, minusZero];
}
