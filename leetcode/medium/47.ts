function permuteUnique(nums: number[]): number[][] {
  const answer: number[][] = [];

  function recur(remain: number[], arr: number[] = []) {
    if (!remain.length) {
      answer.push(arr);
    } else {
      const visited: number[] = [];
      for (let i = 0; i < remain.length; i++) {
        const tempNum = remain[i];
        if (visited.includes(tempNum)) {
          continue;
        }
        visited.push(tempNum);
        const tempRemain = [...remain];
        tempRemain.splice(i, 1);

        recur(tempRemain, [...arr, tempNum]);
      }
    }
  }

  recur(nums);

  return answer;
}
