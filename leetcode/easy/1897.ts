function makeEqual(words: string[]): boolean {
  const len = words.length;

  return [
    ...words.reduce((acc, cur) => {
      cur.split("").forEach((str) => {
        acc.set(str, acc.get(str) + 1 || 1);
      });

      return acc;
    }, new Map()),
  ].every(([_, count]) => !(count % len));
}
