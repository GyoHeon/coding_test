var sortedSquares = function (nums) {
  const squareArr = nums.map((item) => item ** 2);
  return squareArr.sort((a, b) => a - b);
};
