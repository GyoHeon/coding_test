var singleNumber = function (nums) {
  const exist = {};
  nums.forEach((x) => {
    if (exist[x] === "one") {
      delete exist[x];
    } else if (!exist[x]) {
      exist[x] = "one";
    }
  });
  return Object.keys(exist);
};
