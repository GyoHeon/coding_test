function largestGoodInteger(num: string): string {
  const answers = new Map([
    ["9", false],
    ["8", false],
    ["7", false],
    ["6", false],
    ["5", false],
    ["4", false],
    ["3", false],
    ["2", false],
    ["1", false],
    ["0", false],
  ]);
  let temp = "";

  let right = 0;

  while (right < num.length) {
    const nowStr = num[right];
    right++;

    if (!temp) {
      temp += nowStr;
    } else {
      if (temp[0] === nowStr) {
        temp += nowStr;
      } else {
        temp = nowStr;
      }
    }

    if (temp.length === 3) {
      answers.set(temp[0], true);
    }
  }

  for (let [key, value] of answers) {
    if (value) return key.repeat(3);
  }

  return "";
}
