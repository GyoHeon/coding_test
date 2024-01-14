function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    if (map1.has(word1[i])) {
      map1.set(word1[i], map1.get(word1[i]) + 1);
    } else {
      map1.set(word1[i], 1);
    }
    if (map2.has(word2[i])) {
      map2.set(word2[i], map2.get(word2[i]) + 1);
    } else {
      map2.set(word2[i], 1);
    }
  }

  if ([...map1.keys()].sort().join("_") !== [...map2.keys()].sort().join("_")) {
    return false;
  }
  if (
    [...map1.values()].sort().join("_") !== [...map2.values()].sort().join("_")
  ) {
    return false;
  }

  return true;
}
