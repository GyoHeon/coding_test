var findRestaurant = function (list1, list2) {
  const obj = {};
  list1.forEach((item, idx1) => {
    const idx2 = list2.indexOf(item);
    if (idx2 >= 0) {
      obj[item] = idx1 + idx2;
    }
  });
  const min = Math.min(...Object.values(obj));
  const answer = [];
  for (let [key, value] of Object.entries(obj)) {
    if (value === min) answer.push(key);
  }
  return answer;
};
