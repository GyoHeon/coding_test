const spell = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function convertToTitle(columnNumber: number): string {
  let answer = "";

  while (columnNumber) {
    const remain = columnNumber % 26 || 26;
    answer += spell[remain];
    columnNumber = (columnNumber - remain) / 26;
  }

  return [...answer].reverse().join("");
}
