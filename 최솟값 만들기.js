function solution(A, B) {
  var answer = 0;
  const sorter = (a, b) => a - b;
  A.sort(sorter);
  B.sort(sorter).reverse();
  answer = A.reduce((acc, cur, i) => acc + cur * B[i], 0);

  return answer;
}
