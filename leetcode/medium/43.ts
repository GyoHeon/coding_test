function multiply(num1: string, num2: string): string {
  const arr1 = num1.split("");
  const arr2 = num2.split("");
  const len = arr1.length + arr2.length;

  const answer = Array(len - 1).fill(0);

  for (let i = arr1.length - 1; i >= 0; i--) {
    for (let j = arr2.length - 1; j >= 0; j--) {
      const sum = +arr1[i] * +arr2[j];
      answer[i + j] += sum;
    }
  }

  for (let i = answer.length - 1; i > 0; i--) {
    const up = Math.floor(answer[i] / 10);
    answer[i] %= 10;

    answer[i - 1] += up;
  }

  let left = 0;
  while (answer[left] === 0) {
    answer[left] = "";
    left++;
  }

  const sum = answer.join("");

  return sum || "0";
}
