const changer: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function intToRoman(num: number): string {
  return changer.reduce((acc: string, cur: [number, string]) => {
    while (num >= cur[0]) {
      num -= cur[0];
      acc += cur[1];
    }
    return acc;
  }, "");
}
