var mySqrt = function (x) {
  let num = 1;
  while (true) {
    if (x < num * num) return num - 1;
    num++;
  }
};
