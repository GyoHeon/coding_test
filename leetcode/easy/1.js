let nums = [2, 7, 11, 15];
const target = 9;
let answer = [];

loop1: for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      answer = [i, j];
      break loop1;
    }
  }
}

console.log(answer);
