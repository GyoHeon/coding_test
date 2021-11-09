function solution(nums) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        answer.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  for (const i of [...answer]) {
    let state = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (!(i % j)) {
        state = 0;
        break;
      }
    }
    if (state) count++;
  }
  return count;
}
