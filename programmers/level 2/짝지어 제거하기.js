function solution(s) {
  s = s.split("");
  if (s.length % 2) return 0;
  let stack = [s.shift()];
  for (let i of s) {
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length ? 0 : 1;
}

console.log(solution("baabaa"));
