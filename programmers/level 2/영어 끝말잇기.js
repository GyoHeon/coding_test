function solution(n, words) {
  let before = words[0][0];
  let order = -1;
  const used = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (used.includes(word)) {
      order = i;
      break;
    } else used.push(word);

    if (before === word.at(0)) before = word.at(-1);
    else {
      order = i;
      break;
    }
  }

  if (order === -1) return [0, 0];

  return [(order + 1) % n || n, parseInt(order / n) + 1];
}
