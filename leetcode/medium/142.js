var detectCycle = function (head) {
  let temp = head;
  const save = [];
  while (temp) {
    const idx = save.indexOf(temp);
    if (idx === -1) {
      save.push(temp);
      temp = temp.next;
    } else {
      return save[idx];
    }
  }
  return null;
};
