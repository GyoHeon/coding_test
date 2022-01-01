function solution(priorities, location) {
  const n = priorities.length;
  const indexArr = Array(n).fill(0);
  let nowIndex = 0;
  let nowNumber = 0;
  let exIndex = 0;
  for (let i = 9; i !== 0; i--) {
    for (let j = nowIndex; j < n; j++) {
      if (priorities[j] === i) {
        indexArr[j] = nowNumber;
        nowNumber++;
        nowIndex = j;
      }
    }
    for (let j = 0; j < exIndex; j++) {
      if (priorities[j] === i) {
        indexArr[j] = nowNumber;
        nowNumber++;
        nowIndex = j;
      }
    }
    exIndex = nowIndex;
  }
  return indexArr[location] + 1;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 2301
//큰 수부터 정렬하되 큰 수의 가장 마지막 숫자부터 다시 번호가 메겨짐.
//중요한 것은 어떻게 해야 원하는 숫자의 리턴값을 반환할 것인지다.
