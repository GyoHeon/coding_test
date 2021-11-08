function solution1(numbers) {
  const sum = numbers.reduce((a, b) => a + b);
  return 45 - sum;
}
function solution2(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return 45 - sum;
}
function solution3(numbers) {
  const sum = eval(numbers.join("+"));
  return 45 - sum;
}
