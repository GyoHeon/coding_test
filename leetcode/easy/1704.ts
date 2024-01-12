const obj = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  A: true,
  E: true,
  I: true,
  O: true,
  U: true,
};

function halvesAreAlike(s: string): boolean {
  const len = s.length;
  const a = s
    .slice(0, len / 2)
    .split("")
    .filter((s) => obj[s]).length;
  const b = s
    .slice(len / 2, len)
    .split("")
    .filter((s) => obj[s]).length;

  return a === b;
}
