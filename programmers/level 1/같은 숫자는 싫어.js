function solution(arr) {
  arr.push(-1);
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] === arr[i + 1] ? null : answer.push(arr[i]);
  }
  answer.pop();
  return answer;
}
