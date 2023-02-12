var middleNode = function (head) {
  let len = 0;
  let temp = head;
  let answer = head;
  while (temp) {
    temp = temp.next;
    len++;
  }
  const index = parseInt(len / 2);
  for (let i = 0; i < index; i++) {
    answer = answer.next;
  }
  return answer;
};
