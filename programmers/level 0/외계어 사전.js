function solution(spell, dic) {
  let answer = 2;
  const str = spell.sort().join("");
  dic.forEach((x) => {
    if (x.split("").sort().join("") === str) answer = 1;
  });
  return answer;
}
