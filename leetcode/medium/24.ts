class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let before: ListNode | null = null;
  let now: ListNode | null = head;
  let start = head ? head.next : null;

  while (now) {
    let odd: ListNode | null;
    if (!before) {
      before = head;
      odd = head;
    } else {
      odd = before.next;
    }
    if (!odd) break;
    const even = odd.next;
    if (!even) break;
    const next = even.next;
    before!.next = even;
    even.next = odd;
    odd.next = next;

    before = odd;

    now = next;
  }
  return start || head;
}
