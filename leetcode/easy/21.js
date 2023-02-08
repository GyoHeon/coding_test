const mergeTwoLists1 = (list1, list2) => {
  if (!list1 && !list2) return null;
  const answer = { next: null };
  let answerTemp = answer;
  while (list1 || list2) {
    node = { next: null };
    if (list2 && (!list1 || list1.val > list2.val)) {
      node.val = list2.val;
      list2 = list2.next;
    } else {
      node.val = list1.val;
      list1 = list1.next;
    }

    if (Number.isInteger(answerTemp.val)) {
      answerTemp.next = node;
      answerTemp = answerTemp.next;
    } else {
      answerTemp.val = node.val;
    }
  }
  return answer;
};

const mergeTwoLists2 = (list1, list2) => {
  if (!list1 && !list2) return null;
  const answer = { next: null };
  let answerTemp = answer;
  while (list1 || list2) {
    node = { next: null };
    if (!(list1 && list2)) {
      if (!list1) {
        node.val = list2.val;
        list2 = list2.next;
      } else {
        node.val = list1.val;
        list1 = list1.next;
      }
    } else {
      if (list1.val > list2.val) {
        node.val = list2.val;
        list2 = list2.next;
      } else {
        node.val = list1.val;
        list1 = list1.next;
      }
    }

    if (Number.isInteger(answerTemp.val)) {
      answerTemp.next = node;
      answerTemp = answerTemp.next;
    } else {
      answerTemp.val = node.val;
    }
  }
  return answer;
};
