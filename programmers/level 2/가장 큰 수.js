const calNums = (a, b) => {
  newA = a + "" + b;
  newB = b + "" + a;
  return Number(newB) - Number(newA);
};

function solution(numbers) {
  const newNumbers = numbers.sort((a, b) => calNums(a, b));

  return newNumbers[0] === 0 ? "0" : newNumbers.join("");
}
