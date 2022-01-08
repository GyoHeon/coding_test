var removeElement = function (nums, val) {
  let idx = 0;
  nums.forEach((x, i) => {
    if (x === val) {
      idx++;
      nums[i] = "*";
    }
  });

  nums = nums.filter((x) => x !== "*");
  return nums;
};

const num = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(num, 2));
