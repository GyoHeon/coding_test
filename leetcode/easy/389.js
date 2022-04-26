var findTheDifference = function (s, t) {
  const tArr = t.split("");
  s.split("").forEach((item) => {
    const idx = tArr.indexOf(item);
    if (idx > -1) tArr.splice(idx, 1);
  });
  return tArr[0];
};
