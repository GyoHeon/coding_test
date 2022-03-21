var plusOne = function (digits) {
  let n = digits.length - 1;
  while (n >= 0) {
    if (digits[n] === 9) {
      digits[n] = 0;
      if (n === 0) {
        digits.unshift(1);
        return digits;
      } else {
        n--;
      }
    } else {
      digits[n] = digits[n] + 1;
      return digits;
    }
  }
};

console.log(plusOne([9, 9, 9]));
