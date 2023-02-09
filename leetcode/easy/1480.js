const runningSum = (nums) => {
  const answer = [];
  let temp = 0;
  nums.forEach((num) => {
    temp += num;
    answer.push(temp);
  });
  return answer;
};
