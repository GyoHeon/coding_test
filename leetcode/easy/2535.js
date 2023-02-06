var differenceOfSum = function (nums) {
  const elementSum = nums.reduce((acc, cur) => acc + cur, 0);
  const digitSum = nums
    .join("")
    .split("")
    .reduce((acc, cur) => +acc + +cur, 0);
  return Math.abs(elementSum - digitSum);
};
