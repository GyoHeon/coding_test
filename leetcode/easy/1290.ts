class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getDecimalValue(head: ListNode | null): number {
  let answer = "";
  while (head) {
    answer += head.val;
    head = head.next;
  }

  return Number.parseInt(answer, 2);
}
