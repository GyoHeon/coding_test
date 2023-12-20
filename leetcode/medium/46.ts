function permute(nums: number[]): number[][] {
  const answer: number[][] = [];

  function recur(arr: number[], remain: number[]) {
    if (!remain.length) {
      answer.push(arr);
      return;
    }

    for (let j = 0; j < remain.length; j++) {
      const newArr = [...arr, remain[j]];

      const newRemain = remain.filter((_, idx) => idx !== j);

      recur(newArr, newRemain);
    }
  }

  recur([], nums);

  return answer;
}
