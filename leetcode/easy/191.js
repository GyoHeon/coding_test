var hammingWeight = function (n) {
  let strNum = n.toString(2);
  return eval(strNum.split("").join("+"));
};
