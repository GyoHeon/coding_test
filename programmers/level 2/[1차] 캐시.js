function solution(cacheSize, cities) {
  const cache = [];
  return cities.reduce((acc, cur) => {
    const str = cur.toLowerCase();
    const idx = cache.indexOf(str);
    if (idx > -1) {
      cache.push(cache.splice(idx, 1)[0]);
      return acc + 1;
    }
    if (cache.length >= cacheSize) cache.shift();
    if (cache.length < cacheSize) cache.push(str);
    return acc + 5;
  }, 0);
}
