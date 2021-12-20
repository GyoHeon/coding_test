function solution1(arr, divisor) {
  let answer = [];
  for (let i in arr) {
    arr[i] % divisor ? null : answer.push(arr[i]);
  }
  return answer.length
    ? answer.sort(function (a, b) {
        return a - b;
      })
    : [-1];
}

function solution2(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
