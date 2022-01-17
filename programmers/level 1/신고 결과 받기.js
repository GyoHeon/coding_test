function solution(id_list, report, k) {
  const reportObj = {};
  const answer = Array(id_list.length).fill(0);
  id_list.forEach((x) => (reportObj[x] = new Set()));
  report.forEach((item) => {
    let [rep, att] = item.split(" ");
    reportObj[att].add(rep);
  });
  Object.entries(reportObj).forEach(([key, value]) => {
    const reportArr = Array.from(value);
    if (reportArr.length >= k) {
      reportArr.forEach((item) => answer[id_list.indexOf(item)]++);
    }
  });
  return answer;
}

let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];

console.log(solution(id_list, report, 2));
