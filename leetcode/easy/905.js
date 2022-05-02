var sortArrayByParity = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2) {
      answer.push(num);
    } else {
      answer.unshift(num);
    }
  }
  return answer;
};
