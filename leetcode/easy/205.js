var isIsomorphic = function (s, t) {
  const firstArr = strToInt(s);
  const secondArr = strToInt(t);
  if (JSON.stringify(firstArr) !== JSON.stringify(secondArr)) return false;
  return true;
};

const strToInt = (str) => {
  const enNum = [];
  const strArr = str.split("");
  const intArr = strArr.map((item, idx) => {
    const index = enNum.indexOf(item);
    if (index > -1) {
      return index;
    } else {
      enNum.push(item);
      return enNum.length - 1;
    }
  });
  return intArr;
};
