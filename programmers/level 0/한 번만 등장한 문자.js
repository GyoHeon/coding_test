function solution(s) {
  let answer = [];
  const newArr = s.split("").sort();
  newArr.forEach((x, index) => {
    answer.push(x);
    if (newArr[index - 1] === newArr[index]) {
      return answer.pop();
    } else if (newArr[index + 1] === newArr[index]) {
      return answer.pop();
    }
  });
  return answer.join("");
}
