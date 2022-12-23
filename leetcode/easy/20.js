const isValid = (s) => {
  s = s.split("");
  const obj = { "]": "[", "}": "{", ")": "(" };
  const accArr = [];

  for (const i of s) {
    if (obj[i]) {
      if (accArr.pop() === obj[i]) {
      } else return false;
    } else accArr.push(i);
  }
  if (accArr.length) return false;
  return true;
};
