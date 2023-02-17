function reversePrefix(word: string, ch: string): string {
  const [first, second] = word.replace(ch, ch + " ").split(" ");
  if (second === undefined) return first;

  return (first.split("").reverse().join("") || "") + second;
}
