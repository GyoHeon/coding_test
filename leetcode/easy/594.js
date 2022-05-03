var findLHS = function (nums) {
  const obj = {};
  let answer = 0;

  nums.forEach((item) => {
    if (!obj[item]) obj[item] = 1;
    else obj[item]++;
  });

  const keyArr = Object.keys(obj);
  keyArr.forEach((item) => {
    if (obj[item * 1 + 1])
      answer = Math.max(obj[item * 1 + 1] + obj[item], answer);
  });
  return answer;
};
