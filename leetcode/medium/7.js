var reverse = function (x) {
  let answer;
  answer = x.toString().split("").reverse();
  if (answer[answer.length - 1] === "-") {
    answer.unshift("-");
    answer.pop();
  }
  answer = parseInt(answer.join(""));
  if (answer < -(2 ** 31) || answer >= 2 ** 31) return 0;
  return answer;
};

console.log(reverse(120));
