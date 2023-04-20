function solution(cards1, cards2, goal) {
  return goal.every((word) => {
    if (cards1.at(0) === word) {
      cards1.shift();
      return true;
    }
    if (cards2.at(0) === word) {
      cards2.shift();
      return true;
    }

    return false;
  })
    ? "Yes"
    : "No";
}
