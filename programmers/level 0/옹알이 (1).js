function solution(babbling) {
  let answer = 0;
  const sound = [/aya/g, /ye/g, /woo/g, /ma/g];
  const imSound = ["ayaaya", "yeye", "woowoo", "mama"];
  for (let i = 0; i < babbling.length; i++) {
    let babbl = babbling[i];
    for (let j = 0; j < 4; j++) {
      if (babbl.includes(imSound[j])) {
        break;
      } else {
        babbl = babbl.replace(sound[j], "");
      }
    }
    if (babbl === "") answer++;
  }
  return answer;
}
