var alternateDigitSum = function (n) {
  const sum = n
    .toString()
    .split("")
    .reduce((acc, cur, index) => acc + (-1) ** index * +cur, 0);
  return sum;
};
