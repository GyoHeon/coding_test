function solution(numbers, direction) {
  const answer = [...numbers];
  if (direction === "left") {
    const num = answer.shift();
    answer.push(num);
  } else {
    const num = answer.pop();
    answer.unshift(num);
  }
  return answer;
}
