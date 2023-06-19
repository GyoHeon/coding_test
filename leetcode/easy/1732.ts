function largestAltitude(gain: number[]): number {
  let now = 0;
  let answer = now;
  for (const i of gain) {
    now += i;
    answer = Math.max(answer, now);
  }
  return answer;
}
