var similarPairs = function (words) {
  const answer = {};
  const newArr = words.map((word) =>
    [...new Set(word.split("").sort())].join("")
  );
  for (let a of newArr) {
    if (answer[a]) {
      answer[a] = answer[a] + 1;
    } else {
      answer[a] = 1;
    }
  }
  let sum = 0;
  for (let [_, i] of Object.entries(answer)) {
    sum += (i * (i - 1)) / 2;
  }
  return sum;
};
