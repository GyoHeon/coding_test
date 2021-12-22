let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let sum = 0;
  let bridge = Array.from(Array(bridge_length).fill(0));
  while (truck_weights.length) {
    if (sum + truck_weights[0] - bridge[0] <= weight) {
      sum -= bridge.shift();
      const newTruck = truck_weights.shift();
      bridge.push(newTruck);
      sum += newTruck;
      answer++;
    } else {
      sum -= bridge.shift();
      bridge.push(0);
      answer++;
    }
  }
  return answer + bridge_length;
}

console.log(solution(bridge_length, weight, truck_weights));
