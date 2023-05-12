function solution(myString, pat) {
  const regex = new RegExp(pat, "i");
  return +regex.test(myString);
}
