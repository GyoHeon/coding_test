const obj = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  let answer: string[] = [];

  const nums = digits.split("");

  function recurS(str: string) {
    if (str.length === digits.length) {
      if (str) answer.push(str);
      return;
    }
    const next = obj[digits[str.length]];
    next.forEach((s: string) => recurS(str + s));
  }

  recurS("");

  return answer;
}
