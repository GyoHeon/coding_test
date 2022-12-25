function solution(array) {
  const answer = array.join("").match(/7/g);
  return answer ? answer.length : 0;
}
