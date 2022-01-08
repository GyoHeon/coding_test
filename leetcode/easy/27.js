var removeElement = function (nums, val) {
  const len = nums.length;
  for (let i = len; i >= 0; i--) {
    if (nums[i] === val) nums.splice(i, 1);
  }
  return nums;
};

const num = [3, 2, 2, 3];
console.log(removeElement(num, 3));
