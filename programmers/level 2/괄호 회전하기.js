const bracketObj = { "(": ")", "[": "]", "{": "}" };

const isCorrect = (str) => {
  const stack = [];

  for (let i of str) {
    if (bracketObj[i]) stack.push(i);
    else if (bracketObj[stack.pop()] !== i) return false;
  }

  return stack.length ? false : true;
};

function solution(s) {
  let answer = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
    const temp = s.slice(i) + s.slice(0, i);
    answer += isCorrect(temp);
  }

  return answer;
}
