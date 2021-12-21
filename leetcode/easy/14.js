var longestCommonPrefix = function (strs) {
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    let prefix = first.slice(0, i + 1);
    let newStrs = strs.filter((x) => x.slice(0, i + 1) === prefix);
    if (newStrs.length !== strs.length) return first.slice(0, i);
  }
  return first;
};
