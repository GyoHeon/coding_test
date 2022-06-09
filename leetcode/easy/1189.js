var maxNumberOfBalloons = function (text) {
  let answer = 10 ** 4;
  const balloon = { b: 0, a: 0, n: 0, l: 0, o: 0 };
  text
    .split("")
    .forEach((spell) => typeof balloon[spell] === "number" && balloon[spell]++);
  for (const [key, value] of Object.entries(balloon)) {
    if (key === "l" || key === "o") {
      answer = Math.min(answer, Math.floor(value / 2));
    } else {
      answer = Math.min(answer, value);
    }
  }
  return answer;
};
