function backspaceCompare(s: string, t: string): boolean {
  return back(s) === back(t);
}

const back = (s: string): string => {
  const answer: string[] = [];
  const arr: string[] = s.split("");
  for (let i of arr) {
    if (i === "#") answer.pop();
    else answer.push(i);
  }
  return answer.join("");
};
