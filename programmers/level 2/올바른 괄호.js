function solution(s) {
  const stack = [];
  for (const i of s) {
    if (i === "(") stack.push(i);
    else if (!stack.pop()) return false;
  }
  if (stack.length) return false;
  return true;
}
