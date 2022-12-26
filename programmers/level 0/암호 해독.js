function solution(cipher, code) {
  const answer = cipher
    .split("")
    .filter((x, index) => !((index + 1) % code))
    .join("");

  return answer;
}
