function solution(progresses, speeds) {
  const answer = [];
  while (progresses.length) {
    let score = 0;
    let len = progresses.length;
    for (let i = 0; i < len; i++) {
      progresses[i] += speeds[i];
    }
    for (let i = 0; i < len; i++) {
      if (progresses[0] < 100) {
        break;
      } else {
        score++;
        progresses.shift();
        speeds.shift();
      }
    }
    if (score) answer.push(score);
  }
  return answer;
}
