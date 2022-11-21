function solution(A, B) {
  const strArr = A.split("");
  const answer = B.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.join("") === answer.join("")) return i;
    else strArr.unshift(strArr.pop());
  }
  return -1;
}
