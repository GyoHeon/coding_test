var isHappy = function (n) {
  let num = n;
  const endless = [2, 3, 4, 5, 6, 8, 9];

  while (num !== 1) {
    let numArr = num.toString().split("");
    num = numArr.reduce((cum, cur) => cum + cur ** 2, 0);
    if (endless.includes(num)) return false;
  }
  return true;
};
