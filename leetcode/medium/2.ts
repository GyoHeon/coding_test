class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let first = l1;
  let second = l2;

  let before = 0;

  const answer = new ListNode();
  let temp = answer;

  while (l1 || l2) {
    const newNode = new ListNode();
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + before;
    before = 0;

    if (sum > 9) {
      sum -= 10;
      before = 1;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }

    temp.val = sum;
    if (l1 || l2) {
      temp.next = newNode;
      temp = temp.next;
    }
  }
  if (before) {
    const newNode = new ListNode(1);
    temp.next = newNode;
  }

  return answer;
}
