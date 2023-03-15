function addBinary(a: string, b: string): string {
  const len = Math.max(a.length, b.length);
  let temp = 0;
  let answer: number[] = [];
  a = a.padStart(len, "0");
  b = b.padStart(len, "0");
  for (let i = len - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + temp;
    temp = Math.floor(sum / 2);
    answer.push(sum % 2);
  }

  if (temp) answer.push(1);

  return answer.reverse().join("");
}
