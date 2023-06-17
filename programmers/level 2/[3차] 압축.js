const dic = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

function solution(msg) {
  let idx = 27;
  const answer = [];
  const last = [...msg].reverse();

  while (last.length) {
    let start = last.pop();

    while (true) {
      if (dic[start]) {
        const temp = last.pop();
        if (temp) start += temp;
        else {
          answer.push(dic[start]);
          break;
        }
      } else {
        last.push(start.at(-1));
        dic[start] = idx;
        start = start.slice(0, -1);
        answer.push(dic[start]);
        idx++;
        break;
      }
    }
  }

  return answer;
}
