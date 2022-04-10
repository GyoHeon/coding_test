var maxProfit = function (prices) {
  let answer = 0;
  let left = 0;
  let right = 1;
  while (right != prices.length) {
    const profit = prices[right] - prices[left];
    if (prices[right] > prices[left]) {
      answer = Math.max(profit, answer);
    } else {
      left = right;
    }
    right++;
  }
  return answer;
};
