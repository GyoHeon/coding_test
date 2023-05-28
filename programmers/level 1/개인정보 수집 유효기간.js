function sum(y, m, d) {
  return y * 500 + m * 40 + d;
}

function solution(today, terms, privacies) {
  const obj = terms.reduce((acc, cur) => {
    const [type, mon] = cur.split(" ");
    acc[type] = Number(mon);
    return acc;
  }, {});
  const td = sum(...today.split(".").map(Number));
  return privacies
    .map((p, idx) => {
      const [day, t] = p.split(" ");
      let [y, m, d] = day.split(".").map(Number);
      m += obj[t];
      if (m > 12) {
        y += Math.floor((m - 1) / 12);
        m = m % 12 || 12;
      }
      if (td > sum(y, m, d) - 1) return idx + 1;
      return false;
    })
    .filter((x) => x);
}
