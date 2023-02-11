var reverseList = function (head) {
  if (!head) return null;
  const reversed = { next: null };
  while (head.next) {
    reversed.val = head.val;
    reversed.next = { ...reversed };
    head = head.next;
  }
  reversed.val = head.val;
  return reversed;
};
