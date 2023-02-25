class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const setNext = (node: ListNode) => {
  if (node.next) {
    node.next = node.next.next;
  } else {
    node.next = null;
  }
};

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let node: ListNode | null = head;
  let len = 0;

  while (node) {
    node = node.next;
    len++;
  }

  const target = len - n - 1;
  if (target === -1) {
    head = head && head.next;
    return head;
  }

  node = head;

  for (let i = 0; i <= target; i++) {
    if (!node) return head;
    if (i === target) setNext(node);
    else node = node.next;
  }

  return head;
}
