var reorderList = function (head) {
  let n = head.length % 2 === 0 ? head.length / 2 : (head.length + 1) / 2;
  const headFront = head.filter((x, i) => i < n);
  const headBack = head.filter((x, i) => i >= n).reverse();
  answer = [];
  headFront.forEach((x, i) => {
    answer.push(x, headBack[i]);
  });
  answer[answer.length - 1] ? null : answer.pop();
  return answer;
};

head = [1, 2, 3, 4, 5];

console.log(reorderList(head));
