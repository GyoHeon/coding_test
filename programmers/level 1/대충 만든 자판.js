function solution(keymap, targets) {
  const answer = [];
  const obj = keymap.reduce((acc, cur) => {
    cur.split("").forEach((key, idx) => {
      const oldIdx = acc[key];
      if (Number.isInteger(oldIdx)) {
        acc[key] = Math.min(idx + 1, oldIdx);
      } else {
        acc[key] = idx + 1;
      }
    });
    return acc;
  }, {});

  return targets.map((target) =>
    target.split("").reduce((acc, cur) => {
      if (acc === -1) return -1;
      const keyNum = obj[cur];
      if (Number.isInteger(keyNum)) return acc + keyNum;
      return -1;
    }, 0)
  );
}
