const containsDuplicate = (nums) => {
  let answer = false;
  const obj = {};
  nums.forEach((num) => {
    if (obj[num]) answer = true;
    obj[num] = true;
  });

  return answer;
};
