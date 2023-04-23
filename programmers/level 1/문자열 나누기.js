function solution(s) {
  let answer = 0;
  let temp = { answer: 0, etc: 0 };
  let now = "";
  s.split("").forEach((str) => {
    if (!now.length) {
      now = str;
    }
    const name = now === str ? "answer" : "etc";
    temp[name] = temp[name] + 1;
    if (temp.answer === temp.etc) {
      answer++;
      now = "";
      temp.answer = 0;
      temp.etc = 0;
    }
  });

  return answer + Boolean(temp.answer + temp.etc);
}
