function solution(arr1, arr2) {
  var answer = Array.from(Array(arr1.length), () => Array(arr2[0].length));
  arr1.forEach((cur1, i1) => {
    arr2[0].forEach((cur2, i2) => {
      let sum = 0;
      for (let j = 0; j < cur1.length; j++) {
        sum += cur1[j] * arr2[j][i2];
        console.log(cur1[j], arr2[j][i2]);
      }
      answer[i1][i2] = sum;
    });
  });
  return answer;
}
