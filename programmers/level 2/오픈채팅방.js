function solution(record) {
  let answer = [];
  let id = {};
  record = record.map((x) => x.split(" "));
  record.forEach((x) => {
    if (x[0] !== "Leave") {
      id[x[1]] = x[2];
    }
  });
  record.forEach((x) => {
    if (x[0] === "Enter") {
      answer.push(`${id[x[1]]}님이 들어왔습니다.`);
    } else if (x[0] === "Leave") {
      answer.push(`${id[x[1]]}님이 나갔습니다.`);
    }
  });
  return answer;
}
