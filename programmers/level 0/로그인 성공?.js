function solution(id_pw, db) {
  let answer = "fail";
  for (const data of db) {
    if (id_pw.join(" ") === data.join(" ")) return "login";
    if (id_pw[0] === data[0]) answer = "wrong pw";
  }
  return answer;
}
