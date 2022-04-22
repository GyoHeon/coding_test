var reverseWords = function (s) {
  const arr1d = s.split(" ");
  const arr2d = arr1d.map((item) => item.split("").reverse().join(""));

  return arr2d.join(" ");
};
