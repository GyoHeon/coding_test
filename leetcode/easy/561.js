var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  const sum = nums.reduce((acc, cur, idx) => acc + cur * ((idx + 1) % 2));
  return sum;
};
