var isSubsequence = function (s, t) {
  s = s.split("").reverse();
  t.split("").forEach((item) => {
    if (item === s[s.length - 1]) return s.pop();
  });
  return s.length ? false : true;
};
