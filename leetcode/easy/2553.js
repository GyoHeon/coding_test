var separateDigits = function (nums) {
  return nums.toString().split(/,|/).map(Number);
};
