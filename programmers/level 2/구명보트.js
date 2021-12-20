function solution(people, limit) {
  people.sort((a, b) => a - b);
  let boat = people.length;

  while (people.length) {
    let weight = limit - people.pop();
    if (weight >= people[0]) {
      weight -= people.shift();
      boat--;
    }
  }
  return boat;
}
