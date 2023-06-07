function generateParenthesis(n: number): string[] {
  let answer: string[] = [];

  function recursive(l: number, r: number, s: string): void {
    if (s.length === n * 2) {
      answer.push(s);
      return;
    }

    if (l < n) recursive(l + 1, r, s + "(");
    if (r < l) recursive(l, r + 1, s + ")");
  }

  recursive(0, 0, "");

  return answer;
}
