function solution(n, m, section) {
  let answer = 0;
  let idx = 0;

  while (idx <= section.length - 1) {
    const end = section[idx] + m;
    for (let i = idx; i < section.length; i++) {
      if (end > section[i]) {
        idx++;
      } else {
        break;
      }
    }
    answer++;
  }
  return answer;
}
